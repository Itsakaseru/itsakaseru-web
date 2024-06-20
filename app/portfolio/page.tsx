import path from "node:path";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Portfolio from "@/components/portfolio/Portfolio";
import { getFileList } from "@/libs/FileSystem";
import { getMarkdownData, IMarkdownMetadata } from "@/libs/Markdown";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Itsakaseru: Portfolio",
  description: "List of projects that I've been worked on either throughout college or my life",
  openGraph: {
    title: "Itsakaseru: Portfolio",
    description: "List of projects that I've been worked on either throughout college or my life",
  }
};

export default async function PortfolioPage() {
  const portfolioList = await getPortfolioList();
  const sortedListPortfolio = sortPortfolioList(await getPortfolioList());
  
  return (
    <main className="flex flex-col grow h-full space-y-6">
      {/* Info Bars */}
      <section
        className="flex flex-row items-center justify-between space-x-6 bg-white-light outline outline-1 outline-cocoa-light px-6 py-4 rounded-md">
        <div className={
          "flex flex-row sm:gap-4 sm:text-left text-cocoa " +
          "gap-0 text-center"
        }>
          <div className={
            "sm:block w-0.5 border-l-4 border-cocoa rounded-xl " +
            "hidden"
          }/>
          <div><InformationCircleIcon className={
            "sm:block size-6 " +
            "hidden"
          }/></div>
          <p>Here are all of the projects that I&apos;ve been worked on either throughout college or my life.</p>
        </div>
        {/* Search Bar (Disabled) */}
        {/* <div className="text-cocoa relative">
            <div className="flex absolute pointer-events-none pl-3 inset-y-0 items-center">
              <MagnifyingGlassCircleIcon className="size-6"/>
            </div>
            <input type="text" className="pl-11 bg-white focus:outline-0 w-64 px-4 py-2 rounded-md"
                   placeholder="Enter project name..."/>
          </div> */}
      </section>
      {/* Portfolio List */}
      <section className="flex flex-row flex-wrap w-full justify-center gap-6">
        {
          sortedListPortfolio.map((portfolio) => (
            <Portfolio key={portfolio.name} portfolio={portfolio} options={{ mode: "outline", showDescription: true }}/>
          ))
        }
      </section>
    </main>
  );
}

export async function getPortfolioList() {
  const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "static", "portfolio");
  const portfolioFolderList = getFileList(PORTFOLIO_DATA_PATH, ".mdx");
  
  return await Promise.all(portfolioFolderList.map(async (portfolio) => {
    const mdData = getMarkdownData(path.join(PORTFOLIO_DATA_PATH, portfolio));
    return mdData.metadata as IMarkdownMetadata;
  }));
}

// Sort by current portfolio first (if any) and rest by year descending
export function sortPortfolioList(portfolioList: IMarkdownMetadata[], currentPortfolioFile?: string) {
  const portfolioListSorted = portfolioList.sort((a, b) => {
    return b.year - a.year
  });
  
  if (!currentPortfolioFile) return portfolioListSorted;

  const currentSlugMetadataIdx = portfolioListSorted.findIndex((portfolio) => portfolio.slug === currentPortfolioFile);
  const currentSlugMetadata = [portfolioListSorted[currentSlugMetadataIdx]];

  portfolioListSorted.splice(currentSlugMetadataIdx, 1)

  return currentSlugMetadata.concat(portfolioListSorted);
}