import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("env-test", "routes/envtest.tsx")
] satisfies RouteConfig;

