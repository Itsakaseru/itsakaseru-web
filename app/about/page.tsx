import path from "node:path";
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
]

export default async function AboutPage() {
  const { content, metadata } = getMarkdownData(ABOUTME_MD_FILE_PATH);
  
  return (
    <div className="flex flex-row justify-center p-8 gap-10 bg-white-light outline outline-1 outline-cocoa-light rounded-xl">
      <div className="flex flex-col items-center min-w-max gap-8">
        <div className="flex flex-row py-4 pl-4 pr-10 gap-7 bg-white-dark rounded-xl">
          <Image
            className="rounded-xl"
            src="/static/lemi.jpg"
            width={135}
            height={135}
            style={{ objectFit: "contain" }}
            quality={100}
            alt="Photo of Lemuel Lancaster"
          />
          <div className="flex flex-col justify-between py-2 text-cocoa">
            <div className="flex flex-col leading-none">
              <div className="font-bold text-[1.7rem]">Lemuel Lancaster</div>
              <div className="font-light">Itsakaseru, Remueru</div>
            </div>
            <div className="font-medium text-wrap leading-tight">
              Programmer,<br />
              Oneironatics, Human
            </div>
          </div>
        </div>
        <div className="text-cocoa">
          <HubBar Links={ HUB_LINKS } options={{ background: false }} />
        </div>
      </div>
      <div className="flex-initial min-w-0.5 bg-cocoa bg-opacity-75 rounded-full"/>
      <div className="p-8 overflow-x-hidden">
        <Markdown content={content} metadata={metadata} />
      </div>
    </div>
  );
}