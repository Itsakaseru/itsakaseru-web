import fs from "node:fs";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export interface IMarkdown {
  content:  string,
  metadata: IMarkdownMetadata,
}

export type IMarkdownColor =
  "cocoa"
  | "white"
  | "dayker"
  | "lime"
  | "orange"
  | "chocolate"
  | "cloud"
  | "lavender"
  | "cyan"
  | "rose"
  | "matt-purple";

export interface IMarkdownMetadata {
  name:        string,
  description: string,
  slug:        string,
  logo:        string,
  color:       IMarkdownColor,
  year:        number,
  tags?:       IMarkdownTag[],
  lastUpdated: string,
}

export interface IMarkdownTag {
  text:   string,
  icon?:  string,
  color?: IMarkdownColor,
  href?:  string,
}

export async function getMarkdownData(filePath: string) {
  try {
    const mdFile = fs.readFileSync(filePath, "utf-8");

    return await serialize(
      mdFile,
      {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          format:        "mdx",
        },
        parseFrontmatter: true,
      }
    );
  }
  catch (err) {
    return null;
  }
}
