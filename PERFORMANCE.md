# Performance Audit — data-by-design

A categorized list of performance issues found in the codebase (Remix + React + Vite, with d3, p5, and scrollama). Findings are grouped by category and sorted by severity within each. Each item cites a file/line, the problem, and a suggested fix.

---

## Progress log

**Automated benchmarks (done).** Two benchmarks now track this work — see [`bench/README.md`](bench/README.md):

- `npm run bench:bundle` — bundle/asset sizes vs `bench/budgets.json` (a regression-guard ratchet). Baseline in `bench/baseline.json`.
- `npm run bench:lh` — Lighthouse CI (`lighthouserc.cjs`) across the homepage + 5 chapter routes; reports in `bench/lighthouse/`.

**Fixes landed (Bundle & data category):**

| Fix | Result (measured) |
| --- | --- |
| ✅ **#1 — `voyages.json` (11 MB) out of the bundle** (`VoyagesVis.client.tsx` now fetches `public/data/voyages.json` on demand) | Total client JS **3.09 MB → 932 KB gzip (−2.18 MB, ~70%)**; `chapters.description` chunk **2.31 MB → 136 KB gzip**. Verified: asset serves 200 and data is no longer inlined in the page. |
| ✅ **#3 — `manualChunks` vendor split** (`vite.config.ts`: `vendor-p5`, `vendor-d3`, `vendor-dnd`) | p5 (254 KB) and d3 (28 KB) isolated into long-cacheable chunks that no longer re-download on app-code changes. |
| ⏭️ **#2 — d3 per-submodule imports — SKIPPED (data-driven)** | The vendor split revealed total d3 is only **28 KB gzip** — Rollup already tree-shakes the `import * as d3` namespace imports. Converting 21 files would save a few KB for significant risk; not worth it. |

**Lighthouse baseline** flags total-byte-weight as the dominant runtime problem (intro 13 MB, peabody 10.6 MB, dubois 8.3 MB per page) — almost entirely **images**, which is the next highest-leverage category (§1 below).

---

> **Top 3 highest-leverage fixes**
> 1. **Tame `useResizeObserver`** in `app/hooks.tsx` (debounce + change-detection + observe a single element). It feeds nearly every per-frame re-render across the site.
> 2. **rAF/throttle `setScrollProgress`** in `app/components/ScrollytellWrapper.tsx` so scrolling doesn't re-render whole chapter subtrees per pixel.
> 3. **Shrink the giant assets** — `quipu.{png,jpg,webp}` (~208MB across 3 formats) and the 11MB `voyages.json` shipped to the client.

---

## 1. Assets & Images (largest absolute wins)

| Sev | Location | Issue | Fix |
|-----|----------|-------|-----|
| High | `public/images/intro/quipu.{png,jpg,webp}` | One hero image shipped in 3 formats totaling ~208MB (80/67/61MB); even the webp is 61MB. | Re-export at display resolution (<300KB webp/avif), serve responsive `srcset`. |
| High | `public/images/` (~495MB total) | Dozens of multi-MB originals: `shanawdithit/DRW-II.jpg` 13MB, `birch-bark-1841.jpg` 11MB, `Willard-picture.jpg` 7.2MB, `playfair/buache.jpg` 5.9MB, `description/equiano-narrative.jpg` 5.8MB. | Batch resize/compress to web dimensions, prefer avif/webp, drop raw originals. |
| Medium | `public/images/shanawdithit/WRONG-howley-sketch2.svg` (4.8MB), `intro/placeholder-sketch4-original.jpg` (4.2MB), `intro/5-plot-images-need-to-merge.pdf` (3.4MB) | Placeholder / "WRONG" / working files served from `public/`. | Delete working/placeholder files from the served directory. |
| Medium | `server.js` (`express.static("build/client", { maxAge: "1h" })`) | Giant non-fingerprinted images get only a 1-hour cache TTL. | Serve images with long-lived immutable caching, or content-hash them. |

## 2. Bundle Size, Data Loading & Code-Splitting

| Sev | Location | Issue | Fix |
|-----|----------|-------|-----|
| High | `app/data/description/voyages.json` (11MB / 471K lines) via `VoyagesVis.client.tsx:7` → `routes/chapters.description.tsx:22` | Entire 11MB voyage dataset compiled into the description route's **client** JS (`.client.tsx` only skips server exec, not bundling). | Serve the needed year-range slice from a Remix `loader`, or `fetch` lazily on the client. |
| High | `vite.config.ts` (no `manualChunks`/`rollupOptions`); no `React.lazy`/dynamic imports anywhere | Heavy viz components (Treemap, VoyagesVis, p5 sketches) load eagerly in route chunks; no vendor splitting. | Lazy-load below-the-fold viz; add `manualChunks` to split d3/p5 into shared vendor chunks. |
| High | `import * as d3 from "d3"` in 21 files (`home/timelineUtils.ts:1`, playfair/*, dubois/*, voyages/*, treemap/*) | Whole d3 meta-package pulled in though most files use only scales/selection/shape. | Import specific submodules, e.g. `import { scaleLinear } from "d3-scale"`. |
| Medium | `labor/treemap/monthlyData.ts` (3,209 lines) + `weeklyData.ts` (4,681 lines) via `Treemap.client.tsx:4`, `MonthDetail.tsx:3` | Both end up in the labor route chunk. | Load via loader/dynamic import, or trim to rendered fields. |
| Medium | `dubois/studentResponses.json`, `studentChartOne.json`, `studentChartTwo.json`, `peabody/eventData.json` (imported by 9+ peabody modules) | Static client imports; `eventData` risks duplication across modules. | Consolidate behind loaders; import `eventData` once and pass down. |
| Medium | `p5` imported wholesale in `intro/RandomPaths.tsx:3`, `RandomRectangles.tsx:4`, `dubois/PieChart.client.tsx:1`, `voyages/VoyagesVis.client.tsx:3` | Large lib not code-split; ships in multiple route chunks. | `import("p5")` dynamically inside the instantiating effect. |
| Medium | `nuka-carousel` used in 8 components but listed only in **devDependencies** in `package.json` | Build correctness/duplication risk; eager carousel load. | Move to `dependencies`; lazy-load where below the fold. |
| Low | `app/data/dubois/usFeatures.json` (1.9MB, 52K lines) | Zero references anywhere in `app/` — dead weight in repo. | Delete it. |
| Low | `scrollama` imported in both `ScrollytellWrapper.tsx` and `layout/ChapterBody.tsx` | May duplicate across chunks without a vendor chunk. | Dedupe via vendor chunk. |

## 3. Fonts

| Sev | Location | Issue | Fix |
|-----|----------|-------|-----|
| Medium | `app/index.css` (no `font-display` on any `@font-face`) | FOIT / render-blocking on ~3.4MB NeueMontreal + 1.9MB VTCDubois. | Add `font-display: swap;` to each `@font-face`. |
| Medium | `app/index.css:276-277, 285-286, ~297` | `src` lists `.woff` before `.woff2` (larger legacy file fetched first); some `woff2` formats point at `.woff` URLs. | List `woff2` first; fix mislabeled URLs. |
| Low | `app/index.css:256-270` (`Maranallo.ttf`, `Chancery_Cursive_Italic.ttf`, `DxDIcons-Regular.ttf`) | Raw `.ttf` served with no woff2. | Convert to woff2. |
| Low | `app/root.tsx` `links()` | No `<link rel="preload">` for above-the-fold fonts. | Preload main body/heading woff2. |

## 4. Animation / Canvas / p5.js / Timers / Listeners

| Sev | Location | Issue | Fix |
|-----|----------|-------|-----|
| High | `dubois/PieChart.client.tsx:181-193` (+ `Circle.ts:112-129,148-157`) | `draw()` runs continuously (`noLoop()` commented out); every frame does O(n²) `collide()` + `wiggle()`/bounds/mouseOn for all circles, even offscreen. Multiple PieCharts mount at once. | `frameRate(30)` + gate the loop via IntersectionObserver; `noLoop()`/`redraw()` on interaction; settle/freeze wiggle. |
| High | `dubois/PieChart.client.tsx:154-216` | Whole p5 instance torn down and rebuilt (re-running `placeCategories` packing) whenever `windowSize` changes. | Debounce resize; reuse canvas via `resizeCanvas` instead of `new p5()`. |
| High | `description/voyages/VoyagesVis.client.tsx:113-177` | p5 destroyed/recreated and all `voyageData` re-instantiated into `Voyage` objects on every width/height change. | Build `Voyage` objects once; `resizeCanvas` + recompute positions on resize. |
| Medium | `voyageScrollytell/VoyageScrollytell.tsx:160-278` | Many `VoyagesVis` mounted simultaneously, hidden via `opacity-0` — each keeps a live p5 instance + full data in memory. | Conditionally mount/unmount by slide index so hidden viz release canvases. |
| Medium | `peabody/quiz/QuizFeedback.tsx:15-18` | `setTimeout` cleared on next change but never in effect cleanup; can fire after unmount. | `return () => clearTimeout(timeout.current)`. |
| Medium | `dubois/chartThree/Response.tsx:124-161` | 1000ms `setTimeout` never captured/cleared; leaks state updates after unmount. | Store id, clear in cleanup. |
| Low | `intro/RandomPaths.tsx:93-122` | p5 canvas fully torn down + recreated on any `windowSize` change (incl. lazy-image-triggered resizes). `draw()` does correctly `noLoop()`. | Guard recreation to meaningful size changes, or use `resizeCanvas`. |
| Low | `home/DraggableTimeline.tsx:85-86` | `onMouseMove` mutates `imagePositions` in place per move without throttle. | Throttle with rAF; update via `setImagePositions`. |

## 5. D3 / SVG / DOM (large element counts & recomputed layouts)

| Sev | Location | Issue | Fix |
|-----|----------|-------|-----|
| High | `dubois/StudentChartThree.tsx:173-280` | Renders `ResponseDot` + `ResponseV2` for all 4 categories (~800 responses → ~1600 SVG groups) all mounted at once. | Virtualize / render dots on canvas; only mount heavy `ResponseV2` for the active response. |
| High | `dubois/StudentChartThree.tsx:174-221` | Layout computed by **mutating imported JSON in-place during render** (`response.x = random(...)`) — impure, defeats memoization. | Compute positions once in `useMemo`/loader into a derived array. |
| Medium | `peabody/recreated/RecreatedEventSquare.tsx:52-93` (+ `RecreatedYearSquare`, `RecreatedPeabodySquare`) | ~900 nested svg/rect/polygon nodes, each with hover handlers updating shared `highlightedElement` → full grid re-render per hover. | `React.memo` the squares; isolate highlight state. |
| Medium | `peabody/barGraph/BarGraph.tsx:11-15` + `BarGraphYears.tsx:13-23` | 100 `BarGraphYears`, each `filter()`ing full century event list every render (100 passes). | Precompute a `year → events` index once; look up by key. |
| Medium | `labor/treemap/Month.tsx:10-30,89-134` (+ `Treemap.client.tsx:69`) | Each `Month` builds fresh `scaleTime` and re-runs full `stratify`/`treemap` layout on resize → N independent layout passes. | Hoist static scales; memoize/throttle treemap recompute. |
| Medium | `playfair/elements/HorizontalGrid.tsx:22-35` | d3 imperatively animates the same `<line>`/`<text>` React renders; 600ms transition per dep change, many concurrent on scroll. | Consolidate into one memoized layer or use React-controlled CSS transitions. |
| Medium | `playfair/StackedChart.tsx:44-74` (& `CombChart.tsx:11-84`) | Scales, `d3.stack()`/`d3.arc()`, and bar/path map transforms recomputed every render though data is static. | Hoist to module scope or `useMemo`. |
| Low | `dubois/PieChart.client.tsx:172` | `console.log` inside sketch setup runs on every (re)build. | Remove debug log. |
| Low | `description/voyages/Slider.tsx:62-120` | Axis effect appends + recreates all ticks on every width change. | Build axis once; `.call(axis)` to update in place. |
| Low | `peabody/PeabodyActors.tsx:43-53` | Unmemoized per-render array build of dynamic Tailwind class strings. | Memoize (low impact). |

## 6. React Rendering (re-render fan-out)

The dominant theme: fast-changing values (resize, scroll) flow through **un-memoized Context provider values**, re-rendering whole chapter subtrees.

### High

- `app/hooks.tsx:91-96` — `useResizeObserver` observes both `body` **and** `documentElement` and `setState`s a fresh nested object on every observed change (incl. image lazy-loads). **Root cause of most re-renders.** Debounce, observe one element, bail when w/h unchanged.
- `app/hooks.tsx:107-126` — `useDeviceContext` rides `useResizeObserver`, so consumers re-render on every resize though only `isMobile`/`isDesktop` matter. Derive from a `matchMedia` listener.
- `app/components/ScrollytellWrapper.tsx:67-70` — `onStepProgress` calls `setScrollProgress` on every scroll frame, no throttle → full subtree re-render per pixel. rAF-batch / threshold-gate.
- `app/components/ScrollytellWrapper.tsx:79-90` — Scrollama setup effect deps include inline `triggers`/`steps` arrays (e.g. `chapters.dubois.tsx:976,1165,1241`) → instance torn down/rebuilt every render. Hoist/memoize trigger arrays.
- `app/routes/chapters.dubois.tsx:109-124` & `chapters.peabody.tsx:99-114` — `ChapterContext.Provider value={{...}}` is a fresh object every render; `hoverState` changes on every `HoverText` mouseenter/leave → all consumers re-render. `useMemo` the value; split hover into its own context.
- `app/components/HoverText.tsx:21-24` — dozens of `HoverText` per chapter each `setHoverState` on enter/leave/focus, updating the un-memoized context. Isolate hover state in a dedicated context.
- `app/components/dubois/PieChart.client.tsx:152,216` — p5 sketch destroyed/rebuilt in an effect whose deps include `windowSize` (changes every resize fire). Depend on a debounced/breakpoint value.
- `app/components/intro/IntroScrollytell.client.tsx:24-28` — `ScrollytellContext.Provider` value is a fresh object per `scrollProgress` change → every consumer (LinearTimeline, RandomPaths, 100 Images, ShanawdithitMap) re-renders per scroll frame. rAF-batch + memoize leaves.
- `app/components/intro/RandomImagesIntoGrid.tsx:12-37,54` — 100 `Image` components subscribe to context, all re-render every scroll frame though style changes only at two thresholds. `React.memo` `Image`; pass a derived `phase` boolean.
- `app/components/playfair/CombChart.tsx:11-84` & `StackedChart.tsx:11-74` — `Math.max(...map())` + full d3 path generation in render body every render. Hoist to module scope / `useMemo`; `React.memo`.
- `app/components/playfair/Recreation.tsx:172-191` (+ `PlayfairScrollytell.tsx:62,77`) — per-frame `scrollProgress` re-renders whole SVG tree, re-mapping ~42 `ScatterPlot` circles and recomputing opacities. `React.memo` static children; toggle opacity on parent `<g>`.
- `app/components/labor/peopleVersions/PersonBox.tsx:47-88` & `Connection.tsx:20-27` — D3-transition `useEffect`s have **no dependency array** → re-run every render, re-attaching `d3.drag` and firing 700ms transitions. Add scoped deps.
- `app/components/labor/peopleVersions/PersonBox.tsx:43` & `Connection.tsx:17` — every box/connection calls `useResizeObserver()` individually → N ResizeObservers, one resize → N re-renders. Lift to one provider; pass `windowSize` as prop.
- `app/components/dubois/duboisScrollytell/DuboisPosterSideBySideScrollytell.tsx:31-95` — effect keyed on `scrollProgress` fires up to 5 `setState`s per frame, even re-setting identical values in `default`. Derive during render or bail when unchanged.

### Medium

- Inline `ScrollytellContext` value recreated per scroll frame also at `ChartThreeScrollytell.tsx:17`, `DuboisPosterSideBySideScrollytell.tsx:98`, `PeabodyScrollytell.tsx:18-22`, `LEDChart.tsx:73-77`, `PlymouthCommitteeScrollytell.tsx:95`, `ClarksonSideBySideScrollytell.tsx:162`. `useMemo` the value / pass a primitive.
- `dubois/StudentChartThreeV2.client.tsx:222-424` — maps `responseData` 8× into hundreds of un-memoized SVG children; all re-render on any scroll-driven state change. `React.memo` + stabilize props.
- `peabody/EditablePeabodySquare.tsx:20-40` — mutates `squareColors` in place then `setSquareColors([...])`; all 100/900 squares re-render per click. Build immutably; memoize children.
- `peabody/recreated/RecreatedYearSquare.tsx:37-50` & `RecreatedPeabodySquare.tsx:30-43` — 900 squares unmemoized with pass-through callbacks; one hover re-renders all. `React.memo` with stable callbacks.
- `peabody/tutorial/TutorialSquares.tsx:67-97` — ~100 `.filter()` + ~900 `.find()` over events in render on every scroll re-render. Precompute lookup in `useMemo` (scroll-independent).
- `peabody/quiz/Quiz.tsx:148-162` + `QuizContext.ts` — context value holds fresh handler closures each render → every quiz cell re-renders on any quiz state change. `useCallback` + `useMemo`.
- `peabody/PeabodyBarGraph.tsx:27-37` — inline provider value + 100 `BarGraphYears` each filtering full events array. Memoize value; precompute `year → events` map.
- `labor/treemap/Treemap.client.tsx:69-86` & `Month.tsx:73-143` — `Month` runs full d3 layout in effect, unmemoized → all months recompute on each hover. `React.memo` + `useCallback`.
- `labor/peopleVersions/PeopleVersions.client.tsx:54-96` — mutates shared module-level `peopleData` in place; handlers recreated each render, children unmemoized → dragging one re-renders all. Stop mutating; `useCallback` + `React.memo`.
- `description/voyageScrollytell/VoyageScrollytell.tsx:216` (+ `ScrollingVoyageVis.tsx:10-30`) — two new `d3.scaleLinear()` per scroll tick + setState re-instantiates heavy p5 `VoyagesVis`. Hoist scales; gate setState on integer-year change.
- `playfair/projectTimeline/ProjectTimelineScrollytell.tsx:30-144` & `ProjectTimeline.tsx:79-133` — scroll effect re-sets state every frame, recreating `selectedSources` literals → re-runs d3 effect too often. Derive integer phase; setState only on change.
- `ChapterNav.tsx:42-99` — `anchorMap` effect (N `getElementById` + `getBoundingClientRect`) re-runs on every body-ResizeObserver fire. Throttle + gate on size deltas.
- **No `React.memo`/`useMemo`/`useCallback` exists anywhere in `app/`** (grep for `memo(` = 0 results). Heavy charts re-run full render on every parent scroll frame. Wrap pure charts in `React.memo`; memoize derived data.
- `intro/RandomRectangles.tsx:61-78` — 25 rectangles keyed by array `index` while whole array replaced on shuffle. Use a stable `id`.
- `intro/RandomOrTimelineRectangles.tsx:28-45` — every inner `<div>` uses the identical hardcoded `key="86b46923"` (duplicate sibling keys). Use unique keys.
- `description/plymouthCommitteeScrollytell/PlymouthCommitteeScrollytell.tsx:33-92` — three effects run `switch(true)` on `scrollProgress`, multiple `setState`s per frame, rebuilding objects even when bucket unchanged. Resolve active section; skip unchanged setState.

### Low

- `dubois/StudentChartThreeV2.client.tsx:31-70` & `peabody/LEDChart.tsx:35-70` — derived-state anti-pattern: opacity mirrored into state via scroll-effect `switch` (LEDChart fires 9 cascading setStates). Compute inline from `scrollProgress`.
- `dubois/HoverImages2.tsx:9-10,87` — duplicate `figures[...]` entry → duplicate keys. Include index in key.
- `layout/FigureModal.tsx:37-50` — `interactiveOptions` stored in state + rebuilt in effect rather than derived in render. Compute during render.
- `dubois/DocumentViewer.tsx:131` — all 36/27 thumbnails re-render on each `selectedImageIndex` change. `React.memo` thumbnails.
- `description/voyages/VoyagesVis.client.tsx:93-107` — `useMemo` used for side effects (filtering ~36k voyages + `redraw()`) instead of returning a value. Move to `useEffect` keyed on `yearRange`.
- `description/voyageScrollytell/VoyageScrollytell.tsx:269` — inline `background={[224,220,242]}` literal into a p5 component whose effects depend on `background`. Hoist to module constant.
- `intro/MinardText.tsx` — ~292KB static inline-SVG mounted/unmounted at a scroll threshold (`IntroScrollytell.client.tsx:117-119`). Keep mounted; toggle opacity.

---

## Cross-cutting recommendations

1. **One global resize source.** Replace per-component `useResizeObserver()` with a single debounced provider that only emits on real width/height deltas, and a separate `matchMedia`-based device hook. This alone removes most of the High React findings.
2. **Throttle scroll → state.** Wrap every `setScrollProgress` in rAF and only update when the value meaningfully changes; memoize all `ScrollytellContext`/`ChapterContext` provider values.
3. **Introduce memoization.** The codebase currently uses zero `React.memo`/`useMemo`/`useCallback`. Apply them to the large SVG charts (peabody grids ~900 nodes, dubois ~1600 dots, treemap months) and their per-item children.
4. **Move big data server-side.** Serve `voyages.json` (11MB) and the labor treemap data through Remix loaders returning only what's rendered, rather than bundling into client chunks.
5. **Asset pipeline.** Compress/resize the ~495MB `public/images` (quipu alone ~208MB), add `font-display: swap`, and serve images with immutable long-lived caching.
6. **Code-split.** Add `manualChunks` for d3/p5 vendor chunks and `React.lazy` for below-the-fold visualizations; switch `import * as d3` to per-submodule imports.
