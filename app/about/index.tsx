import path from "node:path";
import { getMarkdownData } from "@/libs/Markdown";
import Markdown from "@/components/Markdown";
import { HubBar, type IHubLink } from "@/components/HubBar";
import { DocumentArrowDownIcon } from "@heroicons/react/16/solid";
import type { Route } from "@/.react-router/types/app/about/+types";

const ABOUTME_MD_FILE_PATH = path.join(process.cwd(), "public", "about", "about.mdx");
const HUB_LINKS: IHubLink[] = [
  {
    icon: "sky-encripttion",
    href: "https://youtube.com/SkyEncripttion",
    name: "SkyEncripttion",
  },
  {
    icon: "envelope",
    href: "mailto:contact@itsakaseru.me",
    name: "Mail",
  },
  {
    icon: "github",
    href: "https://github.com/Itsakaseru",
    name: "GitHub",
  },
  {
    icon: "x-formerly-twitter",
    href: "https://x.com/Itsakaseru",
    name: "Formerly Twitter",
  },
  {
    icon: "linkedin",
    href: "https://linkedin.com/in/itsakaseru",
    name: "LinkedIn",
  },
];

const QUOTE_LIST = [
  "Sometimes you just need to relax",
];

export function meta() {
  return [
    { name: "Itsakaseru's Personal Website", content: "About Itsakaseru or Lemuel Lancaster" },
    { property: "og:title", content: "Itsakaseru: About Me" },
    { property: "og:description", content: "About Itsakaseru or Lemuel Lancaster" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://itsakaseru.me/about" },
    { property: "og:image", content: "https://itsakaseru.me/static/lemi.jpg" },
  ];
}

export async function loader() {
  return { data: await getMarkdownData(ABOUTME_MD_FILE_PATH) };
}

export default function AboutPage({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData;

  return (
    <div
      className={
        "flex lg:flex-row justify-center lg:p-8 lg:gap-10 lg:bg-white-light lg:outline-1 lg:outline-cocoa-light rounded-xl " +
        "flex-col p-0 gap-4 bg-transparent"
      }
    >
      <div className="flex flex-col items-center min-w-max gap-8">
        <div
          className={
            "flex lg:flex-row w-full lg:py-4 lg:pl-4 lg:pr-10 gap-7 lg:bg-white-dark rounded-xl " +
            "flex-col bg-white-light p-8"
          }
        >
          <div
            className={
              "w-auto h-auto lg:max-w-36 lg:max-y-36 mx-auto " +
              "max-w-64 max-y-64"
            }
          >
            <img
              className="rounded-xl"
              src="/static/lemi.jpg"
              width={ 300 }
              height={ 300 }
              style={{ objectFit: "contain" }}
              alt="Photo of Lemuel Lancaster"
            />
          </div>
          <div
            className={
              "flex flex-col justify-between py-2 lg:gap-0 lg:text-left text-cocoa " +
              "text-center gap-6"
            }
          >
            <div className="flex flex-col leading-none">
              <div
                className={
                  "font-bold lg:text-[1.7rem] " +
                  "text-2xl"
                }
              >
                Lemuel Lancaster
              </div>
              <div className="font-light">Itsakaseru, Remueru</div>
            </div>
            <div className="font-medium text-wrap leading-tight">
              Programmer,<br />
              Oneironatics, Human
            </div>
          </div>
        </div>
        <div
          className={
            "text-cocoa lg:background-transparent rounded-lg " +
            "bg-white-light"
          }
        >
          <HubBar Links={ HUB_LINKS } background={ false } />
        </div>
        <div
          className={
            "flex flex-grow lg:mb-auto " +
            "mb-0"
          }
        >
          <blockquote className="font-source my-auto font-medium text-xl text-cocoa">
            { `"${QUOTE_LIST[0]}"` }
          </blockquote>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex flex-row gap-3 px-6 py-2 mx-auto text-white bg-cocoa hover:underline rounded cursor-pointer"
            href="https://dl.itsakaseru.me/cv-2024-11-20-13-35.pdf"
          >
            Public CV <DocumentArrowDownIcon className="mx-auto my-auto size-5" />
          </a>
          <div className="font-light text-sm text-cocoa">Last Updated: 20 November 2024 - 13:35</div>
        </div>
      </div>
      <div className="flex-initial min-w-0.5 bg-cocoa/75 rounded-full" />
      <div
        className={
          "lg:p-8 overflow-x-hidden " +
          "p-0"
        }
      >
        <Markdown { ...data } />
      </div>
    </div>
  );
}
