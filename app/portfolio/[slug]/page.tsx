import fs from "node:fs";
import path from "node:path";
import Portfolio, {IPortfolio, IPortfolioMetadata} from "@/components/Portfolio";
import Markdown from "@/components/Markdown";
import {getPortfolioList} from "@/app/portfolio/page";
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import matter from "gray-matter";

const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "static", "portfolio");

export default async function PortfolioInfoPage({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getPortfolioData(params.slug);
  const listPortfolio = await getPortfolioList();
  
  return (
    <div className="flex flex-row items-start gap-8">
      <div className="min-w-96 flex flex-col gap-6">
        <Link href="/portfolio" className="flex flex-row items-center gap-4 pl-6 py-4 bg-white-light outline outline-1 outline-cocoa-light rounded-xl text-cocoa font-medium">
          <ArrowLeftIcon className="size-5"/>Back to Portfolio List
        </Link>
        {/* Other Portfolio */}
        <div className="flex flex-col h-[70vh] overflow-y-auto overflow-hidden items-center p-6 bg-white-light outline outline-1 outline-cocoa-light rounded-xl gap-4">
          {
            listPortfolio.map((portfolio) => (
              <Portfolio
                key={ portfolio.name }
                portfolio={ portfolio }
                options={ portfolio.slug == params.slug ? { mode: "background", showDescription: true } : { mode: "none", showDescription: false }} />
            ))
          }
        </div>
      </div>
      <div className="p-8 rounded-xl bg-white-light outline outline-1 outline-cocoa-light">
        <Markdown content={ content } metadata={ metadata } />
      </div>
    </div>
  );
}

async function getPortfolioData(slug: string) {
  const mdFile = fs.readFileSync(path.join(PORTFOLIO_DATA_PATH, `${slug}.mdx`), "utf-8"); 
  const markdownData = matter(mdFile);
  
  return {
    content: markdownData.content,
    metadata: markdownData.data
  } as IPortfolio;
}