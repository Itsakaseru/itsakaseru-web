import Image from "next/image";
import Markdown from "@/components/Markdown";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { IMarkdown } from "@/components/portfolio/Portfolio";
import { HubBar, IHubLink } from "@/components/HubBar";

const HUB_LINKS: IHubLink[] = [
  {
    icon: "skyencripttion",
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

export default async function AboutLayout() {
  const { content, metadata } = await getAboutMeMD();
  
  return (
    <div className="flex flex-row justify-center gap-10 p-8 rounded-xl bg-white-light outline outline-1 outline-cocoa-light">
      <div className="flex flex-col min-w-max items-center gap-8">
        <div className="flex flex-row py-4 pl-4 pr-10 gap-7 bg-white-dark rounded-xl">
          <Image
            className="rounded-xl"
            src="/static/lemi.jpg"
            width={135}
            height={135}
            style={{ objectFit: "contain" }}
            quality={100}
            alt="Logo"
          />
          <div className="flex flex-col justify-between py-2 text-cocoa">
            <div className="flex flex-col leading-none">
              <div className="font-bold text-[1.7rem]">Lemuel Lancaster</div>
              <div className="font-light">Itsakaseru, Remueru</div>
            </div>
            <div className="text-wrap leading-tight font-medium">
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
      <div className="overflow-x-hidden p-8">
        <Markdown content={content} metadata={metadata} />
      </div>
    </div>
  );
}

// "Temporary" DRY
async function getAboutMeMD() {
  const mdFile = fs.readFileSync(path.join("public", "static", `about.mdx`), "utf-8");
  const markdownData = matter(mdFile);

  return {
    content: markdownData.content,
    metadata: markdownData.data
  } as IMarkdown;
}