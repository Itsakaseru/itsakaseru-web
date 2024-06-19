import fs from "node:fs";
import matter from "gray-matter";

export interface IMarkdown {
  content: string,
  metadata: IMarkdownMetadata
}

export interface IMarkdownMetadata {
  name: string,
  description: string,
  slug: string,
  logo: string,
  color: string
  year: number
  tags?: IMarkdownTag[],
}

export interface IMarkdownTag {
  text: string,
  icon?: string,
  color?: string,
  href?: string,
}

export function getMarkdownData(filePath: string) {
  const mdFile = fs.readFileSync(filePath, "utf-8");
  const markdownData = matter(mdFile);
  
  return {
    content: markdownData.content,
    metadata: markdownData.data
  } as IMarkdown;
}