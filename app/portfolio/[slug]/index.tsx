import { getMarkdownData } from "@/libs/Markdown";
import type { Route } from "../../portfolio/[slug]/+types";
import path from "node:path";
import { Link } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Markdown from "@/components/Markdown";
import PortfolioVerticalList from "@/components/portfolio/PortfolioVerticalList";
import { getPortfolioList, sortPortfolioList } from "../resource";

const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "portfolio");

export async function loader({ params }: Route.ComponentProps) {
  const filePath = path.join(PORTFOLIO_DATA_PATH, `${params.slug}.mdx`);
  const portfolioData = await getMarkdownData(filePath);
  const portfolioList = sortPortfolioList(await getPortfolioList());

  return { portfolioList, portfolioData };
}

export function meta({ data, params }: Route.MetaArgs) {
  const { portfolioData } = data;

  return [
    { title: `Portfolio: ${portfolioData.frontmatter.name}` },
    { name: "Portfolio Detail", content: portfolioData.frontmatter.description },
    { property: "og:title", content: `Portfolio: ${portfolioData.frontmatter.name}` },
    { property: "og:description", content: portfolioData.frontmatter.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://itsakaseru.me/portfolio/${params.slug}` },
  ];
}

export default function PortfolioDetail({ loaderData, params }: Route.ComponentProps) {
  const { portfolioList, portfolioData } = loaderData;

  return (
    <main
      className={
        "flex lg:flex-row items-start max-w-full lg:gap-8 " +
        "flex-col gap-0"
      }
    >
      <section
        className={
          "flex flex-col lg:min-w-96 gap-6 " +
          "min-w-full"
        }
      >
        <Link
          to="/portfolio"
          className="flex flex-row items-center pl-6 py-4 gap-4 bg-white-light outline-1 outline-cocoa-light rounded-xl text-cocoa font-medium"
        >
          <ArrowLeftIcon className="size-5" />
          <div>
            Back to Portfolio List
          </div>
        </Link>
        { /* Other Portfolio */ }
        <PortfolioVerticalList portfolios={ portfolioList } currentSlug={ params.slug } />
      </section>
      <section
        className={
          "w-full lg:p-8 overflow-x-hidden lg:bg-white-light lg:outline-1 lg:outline-cocoa-light rounded-xl " +
          "px-0 pt-8 pb-8 bg-transparent"
        }
      >
        <Markdown { ...portfolioData } />
      </section>
    </main>
  );
}
