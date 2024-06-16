import * as fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Portfolio, {IPortfolioMetadata} from "@/components/Portfolio";

const PORTFOLIO_DATA_PATH = path.join(process.cwd(), "public", "static", "portfolio");

export default async function PortfolioPage() {
  const data = await getPortfolioList();
  
  return (
    <div className="flex flex-col grow h-full space-y-6">
      {/* Function Bars */}
      <div
        className="flex flex-row items-center justify-between space-x-6 bg-white-light outline outline-1 outline-cocoa-light px-6 py-4 rounded-md">
        <div className="flex flex-row space-x-4 text-cocoa">
          <div className="w-0.5 border-cocoa border-l-4 rounded-xl"/>
          <InformationCircleIcon className="size-6"/>
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
      </div>
      {/* Portfolio List */}
      <div className="w-full grid grid-flow-col auto-cols-max justify-center gap-6">
        {
          data.map((portfolio) => (
            <Portfolio key={portfolio.name} portfolio={portfolio} options={{ mode: "outline", showDescription: true }}/>
          ))
        }
      </div>
    </div>
  );
}

export async function getPortfolioList() {
  // Scan for projects
  const portfolioFolderList = fs.readdirSync(PORTFOLIO_DATA_PATH).filter((file) => file.endsWith(".mdx"));
  return portfolioFolderList.map((portfolio) => {
    const mdFile = fs.readFileSync(path.join(PORTFOLIO_DATA_PATH, portfolio), "utf-8");
    const metadata = matter(mdFile).data as IPortfolioMetadata;

    return metadata as IPortfolioMetadata;
  });
}