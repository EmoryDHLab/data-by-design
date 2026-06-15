// Lighthouse CI config — runtime performance budgets for key routes.
//
// Run with:  npm run bench:lh
// Requires a production build first (npm run build); the command below starts
// the prod Express server, audits each URL, and asserts the budgets.
//
// CommonJS (.cjs) on purpose: package.json has "type": "module", so a plain
// lighthouserc.js would be ESM, which @lhci/cli does not load (it would silently
// fall back to autodetect and fail with "Failed to determine staticDistDir").
//
// Metrics chosen to track the perf findings: total byte weight (images/data),
// LCP (hero images/fonts), TBT (p5/d3 main-thread work), and the overall score.

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "Express server listening",
      startServerReadyTimeout: 60000,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/chapters/intro",
        "http://localhost:3000/chapters/description", // heaviest: 11MB voyages.json
        "http://localhost:3000/chapters/dubois", // p5 pie charts
        "http://localhost:3000/chapters/peabody", // large SVG grids
        "http://localhost:3000/chapters/labor", // treemap data
      ],
      numberOfRuns: 3, // median of 3 to smooth run-to-run variance
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      // Warn (not error) to start, so the baseline run records numbers without
      // failing CI. Tighten these to `error` once the first fixes land.
      assertions: {
        "categories:performance": ["warn", { minScore: 0.7 }],
        "total-byte-weight": ["warn", { maxNumericValue: 5000000 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        "total-blocking-time": ["warn", { maxNumericValue: 600 }],
        "unminified-javascript": "off",
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./bench/lighthouse",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%.report.%%EXTENSION%%",
    },
  },
};
