"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CodeBracketSquareIcon, NewspaperIcon, Square2StackIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function SkyEncripttion() {
  return (
    <svg className="fill-cocoa w-5 h-5" viewBox="0 0 104 112" fill="current" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M86.6078 21.8203H26.3766C24.1321 21.8203 22.3125 23.6399 22.3125 25.8844V86.1156C22.3125 88.3601 24.1321 90.1797 26.3766 90.1797H86.6078C88.8523 90.1797 90.6719 88.3601 90.6719 86.1156V25.8844C90.6719 23.6399 88.8523 21.8203 86.6078 21.8203Z"
        fill="current"/>
      <path
        d="M99.3151 0.140625H26.3646C24.1267 0.140625 22.3125 1.94175 22.3125 4.16354V9.00834C22.3125 11.2301 24.1267 13.0312 26.3646 13.0312H99.3151C101.553 13.0312 103.367 11.2301 103.367 9.00834V4.16354C103.367 1.94175 101.553 0.140625 99.3151 0.140625Z"
        fill="current"/>
      <path
        d="M99.3264 98.9688H4.8689C2.63724 98.9688 0.828125 100.77 0.828125 102.992V107.836C0.828125 110.058 2.63724 111.859 4.8689 111.859H99.3264C101.558 111.859 103.367 110.058 103.367 107.836V102.992C103.367 100.77 101.558 98.9688 99.3264 98.9688Z"
        fill="current"/>
      <path
        d="M0.828125 4.37103L0.828125 107.629C0.828125 109.857 2.60196 111.664 4.79009 111.664H9.56148C11.7496 111.664 13.5234 109.857 13.5234 107.629L13.5234 4.37103C13.5234 2.14252 11.7496 0.335945 9.56148 0.335945H4.79009C2.60196 0.335945 0.828125 2.14252 0.828125 4.37103Z"
        fill="current"/>
    </svg>
  )
}

export function FontAwesomeWrapper(icon: any) {
  return (
    <FontAwesomeIcon icon={icon} />
  )
}

type HeroIcon = typeof CodeBracketSquareIcon;
type ReactComponent = typeof SkyEncripttion;
const IconMapping = {
  "skyencripttion": () => SkyEncripttion(),
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
  const [selectedTab, setSelectedTab] = useState<string | null>(Links[0]?.name);

  return (
    <motion.div
      className={`flex flex-row space-x-3 ${options?.background ? "rounded-xl bg-white-light outline outline-1 outline-cocoa-light p-4" : ""}`}
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
                className={`flex flex-row px-3 py-2 space-x-2 transition-colors duration-300 ${link.name === selectedTab && "bg-white rounded hover:bg-white-dark"}`}
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