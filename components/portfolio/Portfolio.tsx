"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMarkdownMetadata } from "@/libs/Markdown";

export interface IPortfolioOptions {
  mode: "none" | "outline" | "background",
  showDescription: boolean,
}

export default function Portfolio({ portfolio, options } : { portfolio: IMarkdownMetadata, options?: IPortfolioOptions }) {
  const outlineMode = `bg-white-light outline outline-1 outline-${ portfolio.color }-light`;
  const backgroundMode = `bg-${ portfolio.color }-white`;
  
  // Default to none mode
  let modeClass = "";
  if (options) {
    switch (options.mode) {
      case "outline":
        modeClass = outlineMode;
        break;

      case "background":
        modeClass = backgroundMode;
        break;
        
      default:
          break;
    }
  }
  
  return (
    <motion.div
      layoutId={portfolio.slug}
      className={
        "flex lg:flex-grow-0 md:w-auto " +
        "flex-grow w-full"
      }
      whileHover={{ scale: 1.05 }}
    >
      <Link
        className={`cursor-pointer flex flex-col grow justify-between space-y-3 ${ modeClass } rounded-xl p-4`}
        href={ `/portfolio/${portfolio.slug}` }
      >
        <motion.div className="flex flex-row space-x-5" layout="position">
          <div className={`min-w-20 min-h-20 bg-gradient-to-br from-${ portfolio.color } to-${ portfolio.color }-light rounded-lg`}>
            <Image className="m-auto w-12 h-full"
                   src={ `${ portfolio.logo }` }
                   alt={ `${ portfolio.name } logo` }
                   width={50}
                   height={50}
                   style={{ objectFit: "contain" }}
                   priority
            />
          </div>
          <div className="flex flex-col space-y-1.5 my-auto">
            <div className={`text-${ portfolio.color }-dark text-xl font-bold leading-tight`}>{portfolio.name}</div>
            <div className="flex flex-row gap-2 flex-wrap">
              <div className={
                `${ portfolio.color && portfolio.color ? `bg-${ portfolio.color }-dark text-white-light` : "bg-gray-300" } px-2 py-0.5 sm:text-sm rounded-full ` +
                "text-xs"
              }>
                { portfolio.year }
              </div>
              {
                portfolio.tags && portfolio.tags.map((tag) => {
                  return (
                    <div
                      key={tag.text}
                      className={
                        `${tag.color && tag.color ? `bg-${tag.color}-dark` : `bg-${ portfolio.color }-dark`} text-white-light px-2 py-0.5 sm:text-sm rounded-full ` +
                        "text-xs"
                    }>
                      {tag.text}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </motion.div>
        {
          portfolio.description && options && options.showDescription &&
            <p className={`content-center grow text-${portfolio.color}-dark text-justify leading-tight`}>
              {portfolio.description}
            </p>
        }
      </Link>
    </motion.div>
  );
}