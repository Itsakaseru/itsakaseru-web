"use client";

import Portfolio, { IMarkdownMetadata } from "@/components/portfolio/Portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioVerticalList({ portfolios, currentSlug }: { portfolios: IMarkdownMetadata[], currentSlug: string }) {
  return (
    <AnimatePresence>
      <motion.div className="flex flex-col h-[70vh] overflow-y-auto overflow-hidden items-center p-6 bg-white-light outline outline-1 outline-cocoa-light rounded-xl gap-4">
        {
          portfolios.map((portfolio) => (
            <motion.div
              key={portfolio.name}
              className="self-stretch max-w-96"
            >
              <Portfolio
                portfolio={portfolio}
                options={portfolio.slug == currentSlug ? { mode: "background", showDescription: true } : {
                  mode: "none",
                  showDescription: false
                }}
              />
            </motion.div>
          ))
        }
      </motion.div>
    </AnimatePresence>
  );
}