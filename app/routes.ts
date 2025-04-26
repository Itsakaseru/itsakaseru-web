import { type RouteConfig, index, route, prefix, layout } from "@react-router/dev/routes";

export default [
  index("home/index.tsx"),
  layout("default/layout.tsx", [
    ...prefix("about", [
      index("about/index.tsx"),
    ]),
    ...prefix("portfolio", [
      index("portfolio/index.tsx"),
      route(":slug", "portfolio/[slug]/index.tsx"),
    ]),
  ]),
  route("/cv", "cv.tsx"),
] satisfies RouteConfig;
