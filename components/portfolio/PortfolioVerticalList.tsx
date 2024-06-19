"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IMarkdownMetadata } from "@/libs/Markdown";
import Portfolio from "@/components/portfolio/Portfolio";

export default function PortfolioVerticalList({ portfolios, currentSlug }: { portfolios: IMarkdownMetadata[], currentSlug: string }) {
  return (
    <AnimatePresence>
      <motion.div className={
        "flex flex-col items-center md:h-[70vh] sm:p-6 gap-4 md:overflow-hidden md:overflow-y-auto md:bg-white-light md:outline md:outline-1 md:outline-cocoa-light rounded-xl " +
        "h-auto p-0 overflow-visible bg-transparent"
      }>
        {
          portfolios.map((portfolio) => (
            <motion.div key={portfolio.name} className={
              "md:block self-stretch md:max-w-96 " +
              `${portfolio.slug == currentSlug ? "" : "hidden"} ` +
              "max-w-full"
            }>
              <Portfolio
                portfolio={portfolio}
                options={portfolio.slug == currentSlug ?
                  { mode: "background", showDescription: true } :
                  { mode: "none", showDescription: false }}
              />
            </motion.div>
          ))
        }
      </motion.div>
    </AnimatePresence>
  );
}