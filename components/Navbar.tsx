"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export interface ILink {
  icon?: any,
  href: string,
  name: IPage
}

type IPage =
  "Home" |
  "Portfolio" |
  "About Me";

export default function Navbar({ currentPage }: { currentPage: IPage }) {
  const NAV_LINKS: ILink[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/portfolio",
      name: "Portfolio",
    },
    {
      href: "/about",
      name: "About Me"
    },
  ];

  const [ selectedTab, setSelectedTab ] = useState<string | null>(currentPage);

  return (
    <nav className="flex flex-row justify-between">
      <div className="flex flex-col my-auto -space-y-1 text-cocoa">
        <div className="font-semibold text-3xl">Itsakaseru</div>
        <div className="font-extralight text-base">Lemuel Lancaster</div>
      </div>
      <div className="flex flex-row items-center px-4 py-3 space-x-8 text-cocoa bg-white-light outline outline-1 outline-cocoa-light rounded-xl">
        {
          NAV_LINKS.map((link) =>
            <Link key={link.name} href={link.href}>
              <div
                key={link.name}
                className={`relative flex flex-row px-3 py-1 duration-300`}
                onMouseEnter={() => setSelectedTab(link.name)}
                onMouseLeave={() => setSelectedTab(currentPage)}
              >
                {
                  link.name === selectedTab &&
                    <motion.div
                        layoutId="navbar-link"
                        className="absolute inset-0 bg-white rounded"
                    />
                }
                <p className="z-10 relative">
                  {link.name}
                </p>
              </div>
            </Link>
          )
        }
      </div>
    </nav>
  );
}