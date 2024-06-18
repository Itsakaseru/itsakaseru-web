import { MDXRemote } from "next-mdx-remote/rsc";
import { IMarkdown } from "@/components/portfolio/Portfolio";
import InfoBubble from "@/components/InfoBuble";
import Gallery from "@/components/Gallery";
import Video from "@/components/portfolio/Video";
import remarkGfm from "remark-gfm";

export default function Markdown({ content, metadata } : IMarkdown) {
  return (
    <article className={ `overflow-x-visible text-${ metadata.color }-dark` }>
      <MDXRemote
        source={ content }
        components={{ InfoBubble, Gallery, Video }}
        options={{ mdxOptions: {
          remarkPlugins: [ remarkGfm ],
          rehypePlugins: [],
          format: 'mdx',
        } }}/>
    </article>
  );
}