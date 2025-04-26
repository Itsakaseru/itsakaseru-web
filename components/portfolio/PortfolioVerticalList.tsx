"use client";

import { motion, AnimatePresence } from "motion/react";
import type { IMarkdownMetadata } from "@/libs/Markdown";
import Portfolio from "@/components/portfolio/Portfolio";

export default function PortfolioVerticalList(
  { portfolios, currentSlug }:
  { portfolios: IMarkdownMetadata[], currentSlug: string, }
) {
  return (
    <AnimatePresence>
      <motion.div
        className={
          "flex flex-col items-center lg:h-[70vh] lg:p-6 gap-4 scroll-smooth lg:overflow-hidden lg:overflow-y-auto lg:bg-white-light lg:outline lg:outline-1 lg:outline-cocoa-light rounded-xl " +
          "h-auto p-0 overflow-visible bg-transparent"
        }
      >
        {
          portfolios.map((portfolio) =>
            <motion.div
              key={ portfolio.name } className={
                "lg:block self-stretch lg:max-w-96 " +
                `${portfolio.slug == currentSlug ? "" : "hidden"} ` +
                "max-w-full"
              }
            >
              <Portfolio
                portfolio={ portfolio }
                options={ portfolio.slug == currentSlug ?
                                    { mode: "background", showDescription: true } :
                                    { mode: "none", showDescription: false } }
              />
            </motion.div>
          )
        }
      </motion.div>
    </AnimatePresence>
  );
}
