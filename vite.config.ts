import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import SiteMap from "vite-plugin-sitemap";
import { chapterMeta } from "./app/data/chapterMeta";
import { resolve } from "path";

const CHAPTERS = Object.keys(chapterMeta).map((chapter) => {
  return `/chapters/${chapter}`;
});

const robotOption = {
  userAgent: "*",
  [process.env.NODE_ENV === "production" ? "allow" : "disallow"]: "/",
};

export default defineConfig(({ isSsrBuild }) => ({
  server: { port: 3000, allowedHosts: [".dataxdesign.io"] },

  build: {
    rollupOptions: isSsrBuild
      ? { input: "./server/app.js" }
      : {
          output: {
            manualChunks: {
              d3: ["d3"],
              "react-vendor": ["react", "react-dom", "react-router"],
              "chart-components": [
                "./app/components/change/StudentChartOne.tsx",
                "./app/components/change/StudentChartTwo.tsx",
                "./app/components/change/StudentChartThree.tsx",
              ],
              p5: ["p5"],
            },
          },
        },
    chunkSizeWarningLimit: 600,
    sourcemap: process.env.NODE_ENV === "development",
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    SiteMap({
      hostname: "https://dataxdesign.io",
      outDir: "public",
      exclude: [
        "/prototypes/brooks_visualization",
        "/prototypes/data_traces_vis_for_jay",
        "/prototypes/voyages/conceptual_map",
        "/prototypes/brooks_visualization/lib/empty-example",
      ],
      dynamicRoutes: ["/about", ...CHAPTERS],
      robots: [robotOption],
    }),
  ],
  resolve: {
    alias: { $fonts: resolve("./public/fonts") },
  },
  optimizeDeps: {
    include: [
      "nuka-carousel",
      "scrollama",
      "@headlessui/react",
      "react-tooltip",
      "@uidotdev/usehooks",
      "d3",
      "@samvera/clover-iiif/image",
      "p5",
    ],
    exclude: ["virtual:react-router/server-build"],
  },
  ssr: {
    noExternal: [
      "@samvera_clover-iiif",
      "d3",
      "d3-array",
      "internmap",
      "d3-axis",
      "d3-brush",
      "d3-chord",
      "d3-color",
      "d3-contour",
      "d3-delaunay",
      "d3-dispatch",
      "d3-drag",
      "d3-dsv",
      "d3-ease",
      "d3-fetch",
      "d3-force",
      "d3-format",
      "d3-geo",
      "d3-hierarchy",
      "d3-interpolate",
      "d3-path",
      "d3-polygon",
      "d3-quadtree",
      "d3-random",
      "d3-scale",
      "d3-scale-chromatic",
      "d3-selection",
      "d3-shape",
      "d3-time",
      "d3-time-format",
      "d3-timer",
      "d3-transition",
      "d3-zoom",
      "delaunator",
      "robust-predicates",
      "@uidotdev/usehooks",
    ],
  },
}));
