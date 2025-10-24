import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("chapters", "routes/chapters.tsx", [
    route("intro", "routes/chapters.intro.tsx"),
    route("data", "routes/chapters.data.tsx"),
    route("description", "routes/chapters.description.tsx"),
    route("dubois", "routes/chapters.dubois.tsx"),
    route("epilogue", "routes/chapters.epilogue.tsx"),
    route("image", "routes/chapters.image.tsx"),
    route("labor", "routes/chapters.labor.tsx"),
    route("peabody", "routes/chapters.peabody.tsx"),
    route("people", "routes/chapters.people.tsx"),
    route("playfair", "routes/chapters.playfair.tsx"),
    route("power", "routes/chapters.power.tsx"),
    route("preface", "routes/chapters.preface.tsx"),
    route("process", "routes/chapters.process.tsx"),
    route("shanawdithit", "routes/chapters.shanawdithit.tsx"),
    route("work", "routes/chapters.work.tsx"),
  ]),
] satisfies RouteConfig;