import path from "node:path";
import { getFileList } from "@/libs/FileSystem";
import { getMarkdownData, type IMarkdownMetadata } from "@/libs/Markdown";

export async function getPortfolioList() {
  const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "portfolio");
  const portfolioFolderList = getFileList(PORTFOLIO_DATA_PATH, ".mdx");

  return await Promise.all(portfolioFolderList.map(async(portfolio) => {
    const mdData = await getMarkdownData(path.join(PORTFOLIO_DATA_PATH, portfolio));
    return mdData.frontmatter as unknown as IMarkdownMetadata;
  }));
}

// Sort by current portfolio first (if any) and rest by year descending
export function sortPortfolioList(portfolioList: IMarkdownMetadata[], currentPortfolioFile?: string) {
  const portfolioListSorted = portfolioList.sort((a, b) => { return b.year - a.year; });

  if (!currentPortfolioFile) return portfolioListSorted;

  const currentSlugMetadataIdx = portfolioListSorted.findIndex((portfolio) => portfolio.slug === currentPortfolioFile);
  const currentSlugMetadata = [portfolioListSorted[currentSlugMetadataIdx]];

  portfolioListSorted.splice(currentSlugMetadataIdx, 1);

  return currentSlugMetadata.concat(portfolioListSorted);
}
