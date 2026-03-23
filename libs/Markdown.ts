import fs from "node:fs";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

export interface IMarkdown {
  content:  string,
  metadata: IMarkdownMetadata,
}

export type IMarkdownColor =
  "cocoa" |
  "white" |
  "dayker" |
  "lime" |
  "orange" |
  "chocolate" |
  "cloud" |
  "lavender" |
  "cyan" |
  "rose" |
  "matt-purple";

export interface IMarkdownMetadata {
  name:          string,
  description:   string,
  slug:          string,
  logo:          string,
  color:         IMarkdownColor,
  tags?:         IMarkdownTag[],
  projectDate:   string,
  publishedDate: string,
  lastUpdated:   string,
}

export interface IMarkdownTag {
  text:   string,
  icon?:  string,
  color?: IMarkdownColor,
  href?:  string,
}

export interface IMarkdownData {
  code:        string,
  frontmatter: IMarkdownMetadata,
}

export async function getMarkdownData(filePath: string) {
  try {
    const mdFile = fs.readFileSync(filePath, "utf-8");
    const file = new VFile({ path: filePath, value: mdFile });

    matter(file, { strip: true });

    const compiled = await compile(file, {
      format:        "mdx",
      outputFormat:  "function-body",
      remarkPlugins: [remarkGfm],
    });

    return {
      code:        String(compiled),
      frontmatter: file.data.matter as IMarkdownMetadata,
    } satisfies IMarkdownData;
  }
  catch {
    return null;
  }
}
