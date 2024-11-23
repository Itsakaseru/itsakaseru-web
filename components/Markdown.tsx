import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote/rsc";
import { IMarkdown } from "@/libs/Markdown";
import InfoBubble from "@/components/portfolio/InfoBuble";
import Gallery from "@/components/Gallery";

export default function Markdown({ content, metadata } : IMarkdown) {
  return (
    <article className={`overflow-x-visible text-${ metadata.color }-dark`}>
      <MDXRemote
        source={content}
        components={{ InfoBubble, Gallery }}
        options={{
          mdxOptions: {
            remarkPlugins: [ remarkGfm ], 
            rehypePlugins: [], 
            format: "mdx",
          }}}
      />
    </article>
  );
}