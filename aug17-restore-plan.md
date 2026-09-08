# Restoring the condensed text without losing Jay's work

The condensed prose and Jay's catalogue never touch the same files, except in four
places. So this is a file-level restore, not a revert or a merge.

- Condensed prose lives in: `app/routes/chapters.*.tsx` (9 files) + `app/footnotes.tsx`.
- Everything else Jay changed — images, the 8 figure JSONs, every component, events,
  nav, icons, the preorder work — is in other files and is simply not touched.

The last good state of those 11 files is `9833b46` (Aug 17, "Update image chapter text
to match condensed book copy"). Verified: nothing edited them between `9833b46` and the
rollback in `41df7f3` (Sep 2, "Initial commit for new images and general clean up"), so
`9833b46` *is* the pre-rollback prose.

## Steps

### 1. Branch

```
git switch -c restore-condensed-text dev
```

### 2. Restore the 11 files

```
git checkout 9833b46 -- \
  app/routes/chapters.preface.tsx \
  app/routes/chapters.intro.tsx \
  app/routes/chapters.data.tsx \
  app/routes/chapters.image.tsx \
  app/routes/chapters.people.tsx \
  app/routes/chapters.knowledge.tsx \
  app/routes/chapters.change.tsx \
  app/routes/chapters.labor.tsx \
  app/routes/chapters.epilogue.tsx \
  app/footnotes.tsx \
  app/components/NoteLink.tsx
```

`NoteLink.tsx` was deleted in the rollback but the Aug 17 `footnotes.tsx` uses it 43
times. Its `.d.ts` is still at HEAD, orphaned.

### 3. Repair the four collisions

**a. Figure keys — 66 of 92.** The Aug 17 prose addresses figures as
`figures["<key>"]`, and Jay renamed the keys. Counted against the current JSONs:

| chapter | refs | unresolved |
|---|---|---|
| intro | 18 | 18 |
| change | 21 | 13 |
| image | 15 | 13 |
| people | 9 | 8 |
| knowledge | 21 | 7 |
| data | 6 | 5 |
| labor | 2 | 2 |
| preface / epilogue | 0 | 0 |

`aug17-restore-worklist.md` has the full old→new map. ~56 are mechanical (`high` /
`valid`). The rest need a human call — see (e) below.

**b. `classNames` → `modalClassNames`.** `Figure`'s prop was renamed. One site, in
`chapters.image.tsx`.

**c. Labor tech stack.** Aug 17 has a hand-coded `<TechStack />` React component;
`169441f` (Sep 4) renders `figures["0601-techstack-06082026"]`, Tanvi's image, instead.
Keep the image — drop the component and the `techStack` array from the restored file.

**d. `missing` import.** Add `import { missing } from "~/data/figures/missing";` to any
chapter that ends up using the placeholder.

**e. The ~10 keys with no real target.** `app/data/figures/missing.ts` already exists for
this, and HEAD's prose already uses it 11 times. Where the worklist's guess is a title
mismatch, use `missing("<old-key>")` rather than the wrong image:

- `0113-history`, `0114-stream` (data) — HEAD already marks both missing
- `0214-activeshooters` (image) — worklist guesses a Playfair scan; wrong
- `0212-minard` (image) — worklist guesses `0208a-bl-playfair`; Minard ≠ Playfair
- `0313-howley-sketch2`, `0314-minard` (people) — HEAD already marks both missing
- `0115-bell` (data) — Strass timeline vs. Voyages web interface; wrong
- `0518-auc002catalog1908-cropped`, `0523-onuoha2`, `0524-onuoha3` (change) — all
  title mismatches
- `0426-Caldas-AJB03_M0529` (knowledge) — Caldas vs. Humboldt; verify

Note the inverse too: HEAD's prose calls `missing("0004-table")` and
`missing("0007-hkwomen")`, but `0007-table` and `0010` now exist in `intro.json` with
matching titles and real files. There the worklist beats HEAD — use the real figures.

### 4. Verify

```
npm run typecheck
npm run build
npm run dev   # walk all 9 chapters, watch for placeholder tiles
```

## What changes

**Gained** — condensed prose in all 9 chapters; labor and epilogue get their full text
back (they are 2,281- and 136-word stubs right now); and the Aug 17 footnote apparatus,
which is the better one — it uses `<cite>`, curly quotes and complete citations, where
HEAD still carries drafting placeholders like "See pp ##-## for this discussion."

**Kept** — every image, all 8 figure JSONs, every component change, events, nav, icons,
preorder. Untouched by construction.

**Lost** — only post-Aug-17 edits *inside those 11 files*: the three collisions above
plus a handful of typo fixes (`5f56248`, `e2478c1`, `e3c9c8b`).
