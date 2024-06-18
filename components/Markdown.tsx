import { MDXRemote } from "next-mdx-remote/rsc";
import { IPortfolio } from "@/components/portfolio/Portfolio";
import InfoBubble from "@/components/InfoBuble";
import Gallery from "@/components/Gallery";
import Video from "@/components/portfolio/Video";

export default function Markdown({ content, metadata } : IPortfolio) {
  return (
    <article className={ `overflow-x-visible text-${ metadata.color }-dark` }>
      <MDXRemote source={ content } components={{ InfoBubble, Gallery, Video }}/>
    </article>
  );
}