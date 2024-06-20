import path from "node:path";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getMarkdownData, IMarkdownMetadata } from "@/libs/Markdown";
import { getPortfolioList } from "@/app/portfolio/page";
import Markdown from "@/components/Markdown";
import PortfolioVerticalList from "@/components/portfolio/PortfolioVerticalList";

const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "static", "portfolio");

export async function generateMetadata({ params }: { params: { slug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const metadata = getMarkdownData(path.join(PORTFOLIO_DATA_PATH, `${ params.slug }.mdx`)).metadata;

  return {
    title: `Itsakaseru: ${ metadata.name }`,
    description: metadata.description,
    openGraph: {
      title: `Itsakaseru: ${ metadata.name }`,
      description: metadata.description,
    },
  }
}

export default async function PortfolioInfoPage({ params }: { params: { slug: string } }) {
  const { content, metadata } = getMarkdownData(path.join(PORTFOLIO_DATA_PATH, `${ params.slug }.mdx`));
  const sortedListPortfolio = sortPortfolioList(await getPortfolioList(), params.slug);
  
  return (
    <main className={
      "flex lg:flex-row items-start max-w-full lg:gap-8 " +
      "flex-col gap-0"
    }>
      <section className={
        "flex flex-col lg:min-w-96 gap-6 " +
        "min-w-full"
      }>
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
      <section className={
        "w-full lg:p-8 overflow-x-hidden lg:bg-white-light lg:outline lg:outline-1 lg:outline-cocoa-light rounded-xl " +
        "px-0 pt-8 pb-8 bg-transparent"
      }>
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