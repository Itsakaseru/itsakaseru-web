import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import {IPortfolio} from "@/components/Portfolio";
import InfoBubble from "@/components/InfoBuble";

export default function Markdown({ content, metadata } : IPortfolio) {
  return (
    <article className={ `resize-none max-h-full overflow-y-scroll overflow-x-hidden text-${ metadata.color }-dark` }>
      <MDXRemote source={ content } components={{ InfoBubble }}/>
    </article>
  );
}