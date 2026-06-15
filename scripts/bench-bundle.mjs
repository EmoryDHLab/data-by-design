#!/usr/bin/env node
// Bundle-size benchmark.
//
// Walks the Vite client build output (build/client/assets) and the served
// public/ assets, records raw + gzipped sizes, and compares them against
// budgets in bench/budgets.json. Writes a fresh report to bench/latest.json.
//
// Usage:
//   node scripts/bench-bundle.mjs            # measure + check budgets
//   node scripts/bench-bundle.mjs --baseline # also (over)write bench/baseline.json
//   node scripts/bench-bundle.mjs --json     # print machine-readable report only
//
// Exit code is non-zero when any budget is exceeded, so CI can gate on it.

import { gzipSync } from "node:zlib";
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CLIENT_DIR = join(ROOT, "build", "client");
const ASSETS_DIR = join(CLIENT_DIR, "assets");
const PUBLIC_DIR = join(ROOT, "public");
const BENCH_DIR = join(ROOT, "bench");
const BUDGETS_PATH = join(BENCH_DIR, "budgets.json");

const args = new Set(process.argv.slice(2));
const WRITE_BASELINE = args.has("--baseline");
const JSON_ONLY = args.has("--json");

const KB = 1024;
const MB = 1024 * 1024;

function fmt(bytes) {
  if (bytes >= MB) return `${(bytes / MB).toFixed(2)} MB`;
  if (bytes >= KB) return `${(bytes / KB).toFixed(1)} KB`;
  return `${bytes} B`;
}

// Recursively collect every file under `dir` as { path, size }.
function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile()) out.push({ path: full, size: statSync(full).size });
  }
  return out;
}

function gzipSize(path) {
  try {
    return gzipSync(readFileSync(path), { level: 9 }).length;
  } catch {
    return 0;
  }
}

// --- 1. JS / CSS chunks from the client build ---------------------------------
const chunkFiles = walk(ASSETS_DIR).filter((f) => /\.(js|css)$/.test(f.path));

if (chunkFiles.length === 0 && !JSON_ONLY) {
  console.error(
    "No build output found in build/client/assets — run `npm run build` first."
  );
  process.exit(2);
}

let totalJsRaw = 0;
let totalJsGzip = 0;
let totalCssRaw = 0;
let totalCssGzip = 0;

const chunks = chunkFiles
  .map((f) => {
    const gzip = gzipSize(f.path);
    const isCss = f.path.endsWith(".css");
    if (isCss) {
      totalCssRaw += f.size;
      totalCssGzip += gzip;
    } else {
      totalJsRaw += f.size;
      totalJsGzip += gzip;
    }
    return { name: relative(CLIENT_DIR, f.path), raw: f.size, gzip };
  })
  .sort((a, b) => b.gzip - a.gzip);

// --- 2. Large public/ assets (images, fonts, data) ----------------------------
const ASSET_FLAG_BYTES = 200 * KB; // anything bigger gets surfaced
const publicFiles = walk(PUBLIC_DIR)
  .map((f) => ({ name: relative(PUBLIC_DIR, f.path), raw: f.size }))
  .sort((a, b) => b.raw - a.raw);

const bigAssets = publicFiles.filter((f) => f.raw >= ASSET_FLAG_BYTES);
const publicTotal = publicFiles.reduce((s, f) => s + f.raw, 0);

const report = {
  // timestamp is injected by the caller / CI, not generated here
  totals: {
    jsRaw: totalJsRaw,
    jsGzip: totalJsGzip,
    cssRaw: totalCssRaw,
    cssGzip: totalCssGzip,
    publicTotal,
    largestChunkGzip: chunks[0]?.gzip ?? 0,
  },
  chunks,
  bigAssets,
};

// --- 3. Budget checks ---------------------------------------------------------
const defaultBudgets = {
  totalJsGzip: 1.5 * MB,
  largestChunkGzip: 600 * KB,
  publicTotal: 50 * MB,
  maxAssetBytes: 2 * MB,
};
const budgets = existsSync(BUDGETS_PATH)
  ? { ...defaultBudgets, ...JSON.parse(readFileSync(BUDGETS_PATH, "utf8")) }
  : defaultBudgets;

const violations = [];
if (report.totals.jsGzip > budgets.totalJsGzip)
  violations.push(
    `Total JS (gzip) ${fmt(report.totals.jsGzip)} > budget ${fmt(budgets.totalJsGzip)}`
  );
if (report.totals.largestChunkGzip > budgets.largestChunkGzip)
  violations.push(
    `Largest chunk (gzip) ${fmt(report.totals.largestChunkGzip)} > budget ${fmt(
      budgets.largestChunkGzip
    )} (${chunks[0]?.name})`
  );
if (report.totals.publicTotal > budgets.publicTotal)
  violations.push(
    `public/ total ${fmt(report.totals.publicTotal)} > budget ${fmt(budgets.publicTotal)}`
  );
for (const a of bigAssets) {
  if (a.raw > budgets.maxAssetBytes)
    violations.push(`asset ${a.name} ${fmt(a.raw)} > budget ${fmt(budgets.maxAssetBytes)}`);
}

// --- 4. Output ----------------------------------------------------------------
if (!existsSync(BENCH_DIR)) mkdirSync(BENCH_DIR, { recursive: true });
writeFileSync(join(BENCH_DIR, "latest.json"), JSON.stringify(report, null, 2));
if (WRITE_BASELINE)
  writeFileSync(join(BENCH_DIR, "baseline.json"), JSON.stringify(report, null, 2));

if (JSON_ONLY) {
  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
  process.exit(violations.length ? 1 : 0);
}

const baselinePath = join(BENCH_DIR, "baseline.json");
const baseline =
  existsSync(baselinePath) && !WRITE_BASELINE
    ? JSON.parse(readFileSync(baselinePath, "utf8"))
    : null;

function delta(now, then) {
  if (then == null) return "";
  const d = now - then;
  if (d === 0) return "  (no change)";
  const sign = d > 0 ? "+" : "-";
  return `  (${sign}${fmt(Math.abs(d))} vs baseline)`;
}

console.log("\n=== Bundle size benchmark ===\n");
console.log("Totals (client):");
console.log(
  `  JS  raw ${fmt(totalJsRaw).padStart(10)}   gzip ${fmt(totalJsGzip).padStart(10)}${delta(
    totalJsGzip,
    baseline?.totals.jsGzip
  )}`
);
console.log(
  `  CSS raw ${fmt(totalCssRaw).padStart(10)}   gzip ${fmt(totalCssGzip).padStart(10)}${delta(
    totalCssGzip,
    baseline?.totals.cssGzip
  )}`
);
console.log(
  `  public/ total ${fmt(publicTotal)}${delta(publicTotal, baseline?.totals.publicTotal)}`
);

console.log("\nTop 15 chunks (by gzip):");
for (const c of chunks.slice(0, 15)) {
  console.log(`  ${fmt(c.gzip).padStart(10)} gzip  ${fmt(c.raw).padStart(10)} raw  ${c.name}`);
}

if (bigAssets.length) {
  console.log(`\nLargest public/ assets (> ${fmt(ASSET_FLAG_BYTES)}):`);
  for (const a of bigAssets.slice(0, 15)) {
    console.log(`  ${fmt(a.raw).padStart(10)}  ${a.name}`);
  }
  if (bigAssets.length > 15) console.log(`  …and ${bigAssets.length - 15} more`);
}

if (violations.length) {
  console.log(`\n❌ ${violations.length} budget violation(s):`);
  for (const v of violations) console.log(`  - ${v}`);
  process.exit(1);
} else {
  console.log("\n✅ All budgets within limits.");
}
