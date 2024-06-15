import { InformationCircleIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  
  const NAV_LINKS = [
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

  const [ selectedTab, setSelectedTab ] = useState<string | null>(NAV_LINKS[1].name);

  return (
    <main className="flex flex-col justify-between w-full h-screen bg-white p-14 space-y-8">
      <nav className="flex flex-row justify-between">
        <div className="flex flex-col my-auto text-cocoa -space-y-1">
          <div className="text-3xl font-semibold">Itsakaseru</div>
          <div className="text-base font-extralight">Lemuel Lancaster</div>
        </div>
        <div className="flex flex-row items-center space-x-8 px-4 py-3 rounded-xl bg-white-light text-cocoa">
          {
            NAV_LINKS.map((link) =>
              <Link key={link.name} href={link.href}>
                <div
                  key={link.name}
                  className={`relative flex flex-row px-3 py-1 duration-300`}
                  onMouseEnter={() => setSelectedTab(link.name)}
                  onMouseLeave={() => setSelectedTab("Portfolio")}
                >
                  {
                    link.name === selectedTab &&
                      <motion.div
                          layoutId="navbar-link"
                          className="absolute inset-0 rounded bg-white"
                      />
                  }
                  <p className="relative z-10">
                    {link.name}
                  </p>
                </div>
              </Link>
            )
          }
        </div>
      </nav>
      <div className="flex flex-col justify-around h-full space-y-6">
        <div className="flex flex-row items-center space-x-6 bg-white-light px-6 py-4 rounded-md">
          <div className="text-cocoa relative">
            <div className="flex absolute pointer-events-none pl-3 inset-y-0 items-center">
              <MagnifyingGlassCircleIcon className="size-6"/>
            </div>
            <input type="text" className="pl-11 bg-white focus:outline-0 w-64 px-4 py-2 rounded-md"
                   placeholder="Enter project name..."/>
          </div>
          <div className="flex flex-row space-x-4 text-cocoa">
            <div className="w-0.5 border-cocoa border-l-4 rounded-xl"/>
            <InformationCircleIcon className="size-6"/>
            <p>Here are all of the projects that I&apos;ve been worked on either throughout college or my life.</p>
          </div>
        </div>
        <div className="flex flex-col items-center grow bg-white-light rounded-md p-6">
          <div className="flex flex-row min-w-[20rem] space-x-5 bg-white rounded-xl p-4">
            <div className="min-w-20 min-h-20 bg-orange-400 rounded-xl">Picture</div>
            <div className="flex flex-col space-y-1.5 my-auto">
              <div className="text-orange-400 text-lg font-bold">Project Title</div>
              <div className="flex flex-row space-x-2">
                <div className="bg-gray-200 px-2 py-0.5 text-sm rounded-full">Tags 1</div>
                <div className="bg-gray-200 px-2 py-0.5 text-sm rounded-full">Tags 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mx-auto text-cocoa">
        © 2024
        <ruby> It
          <rt>イ</rt>
          sa
          <rt>サ</rt>
          ka
          <rt>カ</rt>
          se
          <rt>セ</rt>
          ru
          <rt>ル</rt>
        </ruby>
        . All Rights Reserved.
      </footer>
    </main>
  );
}
