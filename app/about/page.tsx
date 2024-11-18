import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { getMarkdownData } from "@/libs/Markdown";
import Markdown from "@/components/Markdown";
import { HubBar, IHubLink } from "@/components/HubBar";
import { Source_Sans_3 } from "next/font/google";
import { DocumentArrowDownIcon } from "@heroicons/react/16/solid";

const ABOUTME_MD_FILE_PATH = path.join("public", "static", "about.mdx");
const HUB_LINKS: IHubLink[] = [
  {
    icon: "sky-encripttion",
    href: "https://youtube.com/SkyEncripttion",
    name: "SkyEncripttion",
  },
  {
    icon: "envelope",
    href: "mailto:contact@itsakaseru.me",
    name: "Mail"
  },
  {
    icon: "github",
    href: "https://github.com/Itsakaseru",
    name: "GitHub"
  },
  {
    icon: "x-formerly-twitter",
    href: "https://x.com/Itsakaseru",
    name: "Formerly Twitter"
  },
  {
    icon: "linkedin",
    href: "https://linkedin.com/in/itsakaseru",
    name: "LinkedIn"
  }
];

const QUOTE_LIST = [
  "Sometimes you just need to relax",
];

export const metadata: Metadata = {
  title: "Itsakaseru: About Me",
  description: "About Itsakaseru or Lemuel Lancaster",
  openGraph: {
    title: "Itsakaseru: About Me",
    description: "About Itsakaseru or Lemuel Lancaster",
  }
};

const SourceSans = Source_Sans_3({ subsets: [ "latin" ] });

export default async function AboutPage() {
  const { content, metadata } = getMarkdownData(ABOUTME_MD_FILE_PATH);
  
  return (
    <div className={
      "flex lg:flex-row justify-center lg:p-8 lg:gap-10 lg:bg-white-light lg:outline lg:outline-1 lg:outline-cocoa-light rounded-xl " +
      "flex-col p-0 gap-4 bg-transparent"
    }>
      <div className="flex flex-col items-center min-w-max gap-8">
        <div className={
          "flex lg:flex-row w-full lg:py-4 lg:pl-4 lg:pr-10 gap-7 lg:bg-white-dark rounded-xl " +
          "flex-col bg-white-light p-8"
        }>
          <div className={
            "w-auto h-auto lg:max-w-36 lg:max-y-36 mx-auto " +
            "max-w-64 max-y-64"
          }>
            <Image
              className="rounded-xl"
              src="/static/lemi.jpg"
              width={300}
              height={300}
              style={{objectFit: "contain"}}
              quality={100}
              alt="Photo of Lemuel Lancaster"
            />
          </div>
          <div className={
            "flex flex-col justify-between py-2 lg:gap-0 lg:text-left text-cocoa " +
            "text-center gap-6"
          }>
            <div className="flex flex-col leading-none">
              <div className={
                "font-bold lg:text-[1.7rem] " +
                "text-2xl"
              }>
                Lemuel Lancaster
              </div>
              <div className="font-light">Itsakaseru, Remueru</div>
            </div>
            <div className="font-medium text-wrap leading-tight">
              Programmer,<br/>
              Oneironatics, Human
            </div>
          </div>
        </div>
        <div className={
          "text-cocoa lg:background-transparent rounded-lg " +
          "bg-white-light"
        }>
          <HubBar Links={HUB_LINKS} background={false}/>
        </div>
        <div className={
          "flex flex-grow lg:mb-auto " +
          "mb-0"
        }>
          <blockquote className={`${SourceSans.className} my-auto font-medium text-xl text-cocoa`}>
            {`"${QUOTE_LIST[0]}"`}
          </blockquote>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex flex-row gap-3 px-6 py-2 mx-auto text-white hover:text-cocoa bg-cocoa hover:bg-cocoa-light rounded transition-colors cursor-pointer"
            href="https://dl.itsakaseru.me/cv-2024-11-18-14-15.pdf"
          >
            Public CV <DocumentArrowDownIcon className="mx-auto my-auto size-5"/>
          </a>
          <div className="font-light text-sm text-cocoa">Last Updated: 18 November 2024 - 14:15</div>
        </div>
      </div>
      <div className="flex-initial min-w-0.5 bg-cocoa bg-opacity-75 rounded-full"/>
      <div className={
        "lg:p-8 overflow-x-hidden " +
        "p-0"
      }>
        <Markdown content={content} metadata={metadata}/>
      </div>
    </div>
  );
}