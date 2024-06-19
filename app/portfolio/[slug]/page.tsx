import path from "node:path";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getMarkdownData, IMarkdownMetadata } from "@/libs/Markdown";
import { getPortfolioList } from "@/app/portfolio/page";
import Markdown from "@/components/Markdown";
import PortfolioVerticalList from "@/components/portfolio/PortfolioVerticalList";

const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "static", "portfolio");

export default async function PortfolioInfoPage({ params }: { params: { slug: string } }) {
  const { content, metadata } = getMarkdownData(path.join(PORTFOLIO_DATA_PATH, `${ params.slug }.mdx`));
  const sortedListPortfolio = sortPortfolioList(await getPortfolioList(), params.slug);
  
  return (
    <main className="flex flex-row items-start max-w-full gap-8">
      <section className="flex flex-col min-w-96 gap-6">
        <Link href="/portfolio"
              className="flex flex-row items-center pl-6 py-4 gap-4 bg-white-light outline outline-1 outline-cocoa-light rounded-xl text-cocoa font-medium">
          <ArrowLeftIcon className="size-5"/>
          <div>
            Back to Portfolio List
          </div>
        </Link>
        {/* Other Portfolio */}
        <PortfolioVerticalList portfolios={sortedListPortfolio} currentSlug={params.slug}/>
      </section>
      <section className="p-8 overflow-x-hidden bg-white-light outline outline-1 outline-cocoa-light rounded-xl">
        <Markdown content={content} metadata={metadata}/>
      </section>
    </main>
  );
}

// Sort by current portfolio first and rest by year descending
function sortPortfolioList(portfolioList: IMarkdownMetadata[], currentPortfolioFile: string) {
  const portfolioListSorted = portfolioList.sort((a, b) => {
    return b.year - a.year
  });

  const currentSlugMetadataIdx = portfolioListSorted.findIndex((portfolio) => portfolio.slug === currentPortfolioFile);
  const currentSlugMetadata = [portfolioListSorted[currentSlugMetadataIdx]];

  portfolioListSorted.splice(currentSlugMetadataIdx, 1)

  return currentSlugMetadata.concat(portfolioListSorted);
}