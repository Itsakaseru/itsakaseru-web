// Using absolute import, workaround for failed vite build, error when resolving import aliases (prerender)
import { getFileList } from "../../libs/FileSystem";
import { getMarkdownData, type IMarkdownMetadata } from "../../libs/Markdown";

export async function getPortfolioList() {
  const PORTFOLIO_DATA_PATH = `${process.cwd()}/public/portfolio`;
  const portfolioFolderList = getFileList(PORTFOLIO_DATA_PATH, ".mdx");

  const list: IMarkdownMetadata[] = [];

  for (const portfolio of portfolioFolderList) {
    const mdData = await getMarkdownData(`${PORTFOLIO_DATA_PATH}/${portfolio}`);
    if (mdData)
      list.push(mdData.frontmatter as unknown as IMarkdownMetadata);
    else
      console.warn(`Failed to load portfolio: ${portfolio}`);
  }

  return list;
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
