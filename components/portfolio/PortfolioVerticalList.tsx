"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IMarkdownMetadata } from "@/libs/Markdown";
import Portfolio from "@/components/portfolio/Portfolio";

export default function PortfolioVerticalList({ portfolios, currentSlug }: { portfolios: IMarkdownMetadata[], currentSlug: string }) {
  return (
    <AnimatePresence>
      <motion.div className="flex flex-col items-center h-[70vh] p-6 gap-4 overflow-hidden overflow-y-auto bg-white-light outline outline-1 outline-cocoa-light rounded-xl">
        {
          portfolios.map((portfolio) => (
            <motion.div key={portfolio.name} className="self-stretch max-w-96">
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