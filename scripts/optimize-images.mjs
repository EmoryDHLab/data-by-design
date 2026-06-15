// Downscale oversized figure images to a sane maximum dimension.
//
// Figures are displayed inline in a single column and, when opened, in a modal
// capped at ~896px wide / 80vh tall (see FigureModal.tsx). Source images were
// stored at full archival resolution (some > 5000px / 60MB), which dominated
// page byte-weight and tanked LCP in the Lighthouse benchmark.
//
// This caps the longest edge at MAX_DIM and re-encodes both the .webp (served
// first by <picture>) and the .jpg (fallback `src`). It is idempotent: images
// already within MAX_DIM and under MIN_BYTES are skipped.
//
// Requires the `webp` tools (cwebp/dwebp) and macOS `sips`:  brew install webp
//
// Usage:
//   node scripts/optimize-images.mjs [dir ...]     # default: public/images
//   node scripts/optimize-images.mjs --dry         # report only, no writes

import { execFileSync } from "node:child_process";
import { readdirSync, statSync, mkdtempSync, copyFileSync, rmSync } from "node:fs";
import { join, extname, dirname, basename } from "node:path";
import { tmpdir } from "node:os";

const MAX_DIM = 2048; // longest edge, in px — comfortably above the 896px modal cap @2x DPR
const MIN_BYTES = 1_500_000; // skip files already small enough to not matter
const WEBP_Q = 80;
const JPG_Q = 82;

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const roots = args.filter((a) => !a.startsWith("--"));
if (roots.length === 0) roots.push("public/images");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function dims(file) {
  const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  const w = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const h = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1]);
  return { w, h };
}

const tmp = mkdtempSync(join(tmpdir(), "img-opt-"));
let touched = 0;
let savedBytes = 0;

try {
  for (const root of roots) {
    for (const file of walk(root)) {
      const ext = extname(file).toLowerCase();
      if (![".webp", ".jpg", ".jpeg"].includes(ext)) continue;

      const bytes = statSync(file).size;
      let d;
      try {
        d = dims(file);
      } catch {
        continue; // unreadable by sips (e.g. some animated webp) — leave alone
      }
      const longest = Math.max(d.w, d.h);
      if (!Number.isFinite(longest) || longest === 0) continue;
      // Only touch genuinely heavy files; resizing already-light images is
      // pointless churn and a lossy round-trip for negligible byte savings.
      if (bytes < MIN_BYTES) continue;

      const before = bytes;
      if (dry) {
        console.log(`would resize ${file}  ${d.w}x${d.h}  ${(before / 1e6).toFixed(1)}MB`);
        continue;
      }

      // Decode to a lossless PNG master, downscale, then re-encode in place.
      const master = join(tmp, "master.png");
      if (ext === ".webp") {
        execFileSync("dwebp", [file, "-o", master], { stdio: "ignore" });
      } else {
        copyFileSync(file, master);
        execFileSync("sips", ["-s", "format", "png", master, "--out", master], {
          stdio: "ignore",
        });
      }
      if (longest > MAX_DIM) {
        execFileSync("sips", ["--resampleHeightWidthMax", String(MAX_DIM), master, "--out", master], {
          stdio: "ignore",
        });
      }

      const sibling = (e) => join(dirname(file), basename(file, extname(file)) + e);
      // Re-encode the .webp variant.
      const webpOut = sibling(".webp");
      try {
        execFileSync("cwebp", ["-q", String(WEBP_Q), master, "-o", webpOut], { stdio: "ignore" });
      } catch {}
      // Re-encode the .jpg variant if one exists alongside.
      for (const je of [".jpg", ".jpeg"]) {
        const jpgOut = sibling(je);
        try {
          statSync(jpgOut);
          execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", String(JPG_Q), master, "--out", jpgOut], {
            stdio: "ignore",
          });
        } catch {}
      }

      const after = statSync(file).size;
      savedBytes += before - after;
      touched++;
      console.log(
        `resized ${file}  ${d.w}x${d.h} → max ${MAX_DIM}  ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(1)}MB`,
      );
    }
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

if (!dry) {
  console.log(`\nDone: ${touched} file(s), saved ${(savedBytes / 1e6).toFixed(1)}MB`);
}
