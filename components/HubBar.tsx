import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CodeBracketSquareIcon, NewspaperIcon, Square2StackIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { faGithub, faLinkedin, faXTwitter, faBluesky } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeWrapper } from "./Wrapper";
import { SkyEncripttion } from "./CustomIcon";

const IconMapping = {
  "sky-encripttion":          () => SkyEncripttion(),
  "code-bracket-square-icon": CodeBracketSquareIcon,
  "newspaper-icon":           NewspaperIcon,
  "square2stack-icon":        Square2StackIcon,
  "user-circle-icon":         UserCircleIcon,
  envelope:                   () => FontAwesomeWrapper(faEnvelope),
  github:                     () => FontAwesomeWrapper(faGithub),
  "x-formerly-twitter":       () => FontAwesomeWrapper(faXTwitter),
  "bluesky":                   () => FontAwesomeWrapper(faBluesky),
  linkedin:                   () => FontAwesomeWrapper(faLinkedin),
};

export interface IHubLink {
  icon: keyof typeof IconMapping,
  href: string,
  name: string,
}

export function HubBar(
  {
    Links,
    background = true,
    flexResponsive = true,
  }:
  {
    Links:           IHubLink[],
    background?:     boolean,
    flexResponsive?: boolean,
  }
) {
  const [ selectedTab, setSelectedTab ] = useState<string | null>(Links[0]?.name);

  return (
    <motion.div
      className={
        `flex sm:flex-row p-4 gap-3 ${background ? "bg-white-light outline outline-cocoa-light text-cocoa rounded-xl" : ""} ` +
        `${flexResponsive ? "flex-col" : ""}`
      }
      layout
      transition={{ duration: 0.25, type: "tween", stiffness: 50 }}
    >
      {
        Links.map((link) => {
          const Icon = IconMapping[link.icon];
          return (
            <Link
              key={ link.name }
              to={ link.href }
              className="my-auto"
            >
              <motion.div
                key={ link.name }
                className={
                  `flex flex-row px-3 py-2 space-x-2 ${link.name === selectedTab ? "sm:bg-white hover:bg-white-dark" : "sm:bg-inherit"} rounded transition-colors duration-300 ` +
                  `${flexResponsive ? "bg-white rounded" : ""}`
                }
                layout
                onHoverStart={ () => setSelectedTab(link.name) }
              >
                <motion.div layout="position" className="my-auto">
                  <Icon className="size-6" />
                </motion.div>
                {
                  link.name === selectedTab &&
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    { link.name }
                  </motion.p>
                }
                {
                  link.name !== selectedTab &&
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={
                      "sm:hidden " +
                      `${flexResponsive ? "block" : ""}`
                    }
                  >
                    { link.name }
                  </motion.p>
                }
              </motion.div>
            </Link>
          );
        })
      }
    </motion.div>
  );
}
