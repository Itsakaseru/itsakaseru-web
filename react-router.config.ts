import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { getPortfolioList } from "./app/portfolio/resource";

export default {
  /*
    Config options...
    Server-side render by default, to enable SPA mode set this to `false`
  */
  ssr:     true,
  presets: [vercelPreset()],
  async prerender() {
    return [
      "/",
      "/about",
      "/portfolio",
      ...(await getPortfolioList()).map((portfolio) => `/portfolio/${portfolio.slug}`),
    ];
  },
} satisfies Config;
