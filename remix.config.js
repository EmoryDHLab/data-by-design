/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  serverDependenciesToBundle: [
    "react-dnd",
    "react-dnd-html5-backend",
    "dnd-core",
    "@react-dnd/invariant",
    "@react-dnd/asap",
    "@react-dnd/shallowequal",
  ],
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
