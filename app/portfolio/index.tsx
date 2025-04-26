import type { Route } from "../portfolio/+types/index";
import { getPortfolioList, sortPortfolioList } from "~/portfolio/resource";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Portfolio from "@/components/portfolio/Portfolio";

export async function loader() {
  const portfolioList = await getPortfolioList();
  const sortedPortfolioList = sortPortfolioList(portfolioList);
  return { sortedPortfolioList };
}

export function meta() {
  return [
    { title: "Portfolio" },
    { name: "Portfolio", content: "List of projects that I've been worked on either throughout college or my life" },
    { property: "og:title", content: "Portfolio" },
    { property: "og:description", content: "List of projects that I've been worked on either throughout college or my life" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://itsakaseru.me/portfolio" },
    { property: "og:image", content: "https://itsakaseru.me/static/sakii.png" },
  ];
}

export default function PortfolioList({ loaderData }: Route.ComponentProps) {
  const { sortedPortfolioList } = loaderData;

  return (
    <main className="flex flex-col grow h-full space-y-6">
      { /* Info Bars */ }
      <section
        className="flex flex-row items-center justify-between space-x-6 bg-white-light outline-1 outline-cocoa-light px-6 py-4 rounded-md"
      >
        <div
          className={
            "flex flex-row sm:gap-4 sm:text-left text-cocoa " +
            "gap-0 text-center"
          }
        >
          <div
            className={
              "sm:block w-0.5 border-l-4 border-cocoa rounded-xl " +
              "hidden"
            }
          />
          <div className="my-auto">
            <InformationCircleIcon
              className={
                "sm:block size-6 " +
                "hidden"
              }
            />
          </div>
          <p>Here are all of the projects that I&apos;ve been worked on either throughout college or my life.</p>
        </div>
        { /* Search Bar (Disabled) */ }
        { /* <div className="text-cocoa relative">
            <div className="flex absolute pointer-events-none pl-3 inset-y-0 items-center">
              <MagnifyingGlassCircleIcon className="size-6"/>
            </div>
            <input type="text" className="pl-11 bg-white focus:outline-0 w-64 px-4 py-2 rounded-md"
                   placeholder="Enter project name..."/>
          </div> */ }
      </section>
      { /* Portfolio List */ }
      <section className="flex flex-row flex-wrap w-full justify-center gap-6">
        {
          sortedPortfolioList.map((portfolio) => <Portfolio key={ portfolio.name } portfolio={ portfolio } options={{ mode: "outline", showDescription: true }} />)
        }
      </section>
    </main>
  );
}
