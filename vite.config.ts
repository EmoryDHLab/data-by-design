// import { remixPlugin as remix } from "@remix-run/dev";
import { remixVitePlugin as remix } from "@remix-run/dev/dist/vite/plugin";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import SiteMap from "vite-plugin-sitemap";
import { chapterMeta } from "./app/data/chapterMeta";

const CHAPTERS = Object.keys(chapterMeta).map(
  (chapter) => `/chapter/${chapter}`
);

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
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
    }),
  ],
  ssr: {
    noExternal: [
      "react-dnd",
      "react-dnd-html5-backend",
      "dnd-core",
      "@react-dnd/invariant",
      "@react-dnd/asap",
      "@react-dnd/shallowequal",
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
      "remix-utils",
    ],
  },
});
