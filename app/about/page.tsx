import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { getMarkdownData } from "@/libs/Markdown";
import Markdown from "@/components/Markdown";
import { HubBar, IHubLink } from "@/components/HubBar";

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

export const metadata: Metadata = {
  title: "Itsakaseru: About Me",
  description: "About Itsakaseru or Lemuel Lancaster",
  openGraph: {
    title: "Itsakaseru: About Me",
    description: "About Itsakaseru or Lemuel Lancaster",
  }
};


export default async function AboutPage() {
  const { content, metadata } = getMarkdownData(ABOUTME_MD_FILE_PATH);
  
  return (
    <div className={
      "flex md:flex-row justify-center md:p-8 md:gap-10 md:bg-white-light md:outline md:outline-1 md:outline-cocoa-light rounded-xl " +
      "flex-col p-0 gap-4 bg-transparent"
    }>
      <div className="flex flex-col items-center min-w-max gap-8">
        <div className={
          "flex md:flex-row w-full md:py-4 md:pl-4 md:pr-10 gap-7 md:bg-white-dark rounded-xl " +
          "flex-col bg-white-light p-8"
        }>
          <div className={
            "w-auto h-auto md:max-w-36 md:max-y-36 mx-auto " +
            "max-w-64 max-y-64"
          }>
            <Image
              className="rounded-xl"
              src="/static/lemi.jpg"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              quality={100}
              alt="Photo of Lemuel Lancaster"
            />
          </div>
          <div className={
            "flex flex-col justify-between py-2 md:gap-0 md:text-left text-cocoa " +
            "text-center gap-6"
          }>
            <div className="flex flex-col leading-none">
              <div className={
                "font-bold md:text-[1.7rem] " +
                "text-2xl"
              }>
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
        <div className={
          "text-cocoa md:background-transparent rounded-lg " +
          "bg-white-light"
        }>
          <HubBar Links={HUB_LINKS} background={false} />
        </div>
      </div>
      <div className="flex-initial min-w-0.5 bg-cocoa bg-opacity-75 rounded-full"/>
      <div className={
        "md:p-8 overflow-x-hidden " +
        "p-0"
      }>
        <Markdown content={content} metadata={metadata} />
      </div>
    </div>
  );
}