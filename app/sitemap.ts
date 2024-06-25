import { MetadataRoute } from "next"
import {getPortfolioList, sortPortfolioList} from "@/app/portfolio/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioList = getPortfolioList();
  const sortedPortfolioList = sortPortfolioList(portfolioList);
  
  const portfolioSiteMap = sortedPortfolioList.map((portfolio) => {
    return {
      url: `https://itsakaseru.me/portfolio/${ portfolio.slug }`,
      lastModified: new Date(portfolio.lastUpdated),
      priority: 0.75
    }
  });
  
  return [
    {
      url: "https://itsakaseru.me",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://itsakaseru.me/about",
      lastModified: new Date(),
      priority: 1,
    },
    ...portfolioSiteMap,
  ]
}