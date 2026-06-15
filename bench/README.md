# Performance benchmarks

Two automated benchmarks track the work in [`../PERFORMANCE.md`](../PERFORMANCE.md).

## 1. Bundle size — `npm run bench:bundle`

Runs `scripts/bench-bundle.mjs` over the Vite build output (`build/client/assets`)
and the served `public/` assets. Records raw + gzip sizes, writes
`bench/latest.json`, and **exits non-zero** when any budget in `budgets.json` is
exceeded (so CI can gate on it).

- `npm run build` first (the script reads `build/client`).
- `npm run bench:baseline` rewrites `bench/baseline.json` — the reference point
  that subsequent runs print deltas against. Only do this intentionally.

### Budgets are a ratchet

`budgets.json` is a **regression guard**, not a target. It's currently set just
above baseline so the bench passes today. After each fix lands and the numbers
drop, tighten the relevant budget down to the new value to lock in the win and
prevent backsliding.

| Metric             | Baseline (2026-06-15) | End-goal target |
| ------------------ | --------------------- | --------------- |
| Total JS (gzip)    | 3.09 MB               | < 1.0 MB        |
| Largest chunk gzip | 2.31 MB (description) | < 350 KB        |
| `public/` total    | 505 MB                | < 40 MB         |
| Largest asset      | 79.5 MB (quipu.png)   | < 1 MB          |

## 2. Lighthouse — `npm run bench:lh`

Runs `@lhci/cli` (config in `../lighthouserc.js`): starts the prod server, audits
the homepage + five chapter routes (median of 3 runs, desktop preset), and asserts
LCP / TBT / total-byte-weight / performance-score budgets. Reports land in
`bench/lighthouse/`. Assertions are `warn`-level for the baseline; flip to `error`
once the first fixes land.

## Workflow per fix

1. `npm run build && npm run bench:bundle` — confirm the targeted number dropped.
2. Tighten the relevant budget in `budgets.json` to the new value.
3. Commit the code change + budget change together.
