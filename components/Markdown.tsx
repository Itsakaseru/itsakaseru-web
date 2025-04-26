import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import InfoBubble from "@/components/InfoBubble";
import Gallery from "@/components/Gallery";
import { getColorClass } from "@/libs/Color";
import type { IMarkdownColor } from "@/libs/Markdown";

export default function Markdown(serializedResult: MDXRemoteSerializeResult) {
  const { frontmatter } = serializedResult;

  // Cast type or implement a color validator function
  const color = frontmatter.color as IMarkdownColor;

  return (
    <article className={ `overflow-x-visible ${getColorClass("text", color, "dark")}` }>
      <MDXRemote
        { ...serializedResult }
        components={{ InfoBubble, Gallery }}
      />
    </article>
  );
}
