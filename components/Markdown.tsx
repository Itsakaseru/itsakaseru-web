import { runSync } from "@mdx-js/mdx";
import { useMemo, type ComponentType } from "react";
import * as runtime from "react/jsx-runtime";
import InfoBubble from "@/components/InfoBubble";
import Gallery from "@/components/Gallery";
import { getColorClass } from "@/libs/Color";
import type { IMarkdownData } from "@/libs/Markdown";

interface IMarkdownContentProps { components?: Record<string, unknown>, }

export default function Markdown({ code, frontmatter }: IMarkdownData) {
  const Content = useMemo(
    () => runSync(code, runtime).default as ComponentType<IMarkdownContentProps>,
    [code]
  );

  const color = frontmatter.color;

  return (
    <article className={ `overflow-x-visible ${getColorClass("text", color, "dark")}` }>
      <Content components={{ InfoBubble, Gallery }} />
    </article>
  );
}
