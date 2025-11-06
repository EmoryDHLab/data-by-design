import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("chapters", "routes/chapters.tsx", [
    route("change", "routes/chapters.change.tsx"),
    route("data", "routes/chapters.data.tsx"),
    route("description", "routes/chapters.description.tsx"),
    route("dubois", "routes/chapters.dubois.tsx"),
    route("epilogue", "routes/chapters.epilogue.tsx"),
    route("image", "routes/chapters.image.tsx"),
    route("intro", "routes/chapters.intro.tsx"),
    route("knowledge", "routes/chapters.knowledge.tsx"),
    route("labor", "routes/chapters.labor.tsx"),
    route("peabody", "routes/chapters.peabody.tsx"),
    route("people", "routes/chapters.people.tsx"),
    route("playfair", "routes/chapters.playfair.tsx"),
    route("preface", "routes/chapters.preface.tsx"),
    route("shanawdithit", "routes/chapters.shanawdithit.tsx"),
  ]),
] satisfies RouteConfig;