import type { Config } from "@react-router/dev/config";
import { getPortfolioList } from "./app/portfolio/resource";

export default {
  /*
    Config options...
    Server-side render by default, to enable SPA mode set this to `false`
  */
  ssr: true,
  async prerender() {
    return [
      "/",
      "/about",
      "/portfolio",
      ...(await getPortfolioList()).map((portfolio) => `/portfolio/${portfolio.slug}`),
    ];
  },
} satisfies Config;
