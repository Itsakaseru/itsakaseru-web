"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CodeBracketSquareIcon, NewspaperIcon, Square2StackIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeWrapper } from "@/components/Wrapper";
import { SkyEncripttion } from "@/components/CustomIcons";

const IconMapping = {
  "sky-encripttion": () => SkyEncripttion(),
  "code-bracket-square-icon": CodeBracketSquareIcon,
  "newspaper-icon": NewspaperIcon,
  "square2stack-icon": Square2StackIcon,
  "user-circle-icon": UserCircleIcon,
  "envelope": () => FontAwesomeWrapper(faEnvelope),
  "github": () => FontAwesomeWrapper(faGithub),
  "x-formerly-twitter": () => FontAwesomeWrapper(faXTwitter),
  "linkedin": () => FontAwesomeWrapper(faLinkedin)
}

export interface IHubLink {
  icon: keyof typeof IconMapping,
  href: string,
  name: string
}

export interface IHubBarOptions {
  background: boolean
}

export function HubBar({ Links, options = { background: true } }: { Links: IHubLink[], options?: IHubBarOptions }) {
  const [ selectedTab, setSelectedTab ] = useState<string | null>(Links[0]?.name);

  return (
    <motion.div
      className={`flex flex-row p-4 gap-3 ${ options?.background ? "bg-white-light outline outline-1 outline-cocoa-light rounded-xl" : "" }`}
      layout
      transition={{ duration: 0.25, type: "tween", stiffness: 50 }}
    >
      {
        Links.map((link) => {
          const Icon = IconMapping[link.icon];
          return (
            <Link key={link.name} href={link.href} className="my-auto">
              <motion.div
                key={link.name}
                className={`flex flex-row px-3 py-2 space-x-2 ${ link.name === selectedTab && "bg-white rounded hover:bg-white-dark" } transition-colors duration-300`}
                layout
                onHoverStart={() => setSelectedTab(link.name)}
              >
                <motion.div layout="position" className="my-auto">
                    <Icon className="size-6" />
                </motion.div>
                {
                  link.name === selectedTab &&
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {link.name}
                    </motion.p>
                }
              </motion.div>
            </Link>
          )
        })
      }
    </motion.div>
  );
}