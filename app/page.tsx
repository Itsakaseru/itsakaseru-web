"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { CodeBracketSquareIcon, NewspaperIcon, Square2StackIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
  const WEB_LINKS = [
    {
      icon: CodeBracketSquareIcon,
      href: "",
      name: "Portfolio",
    },
    {
      icon: UserCircleIcon,
      href: "",
      name: "About Me"
    },
    {
      icon: NewspaperIcon,
      href: "",
      name: "My Blog"
    },
    {
      icon: Square2StackIcon,
      href: "",
      name: "Fun"
    }
  ];

  const SOCIAL_LINKS = [
    {
      icon: faEnvelope,
      href: "mailto:contact@itsakaseru.me",
      name: "Mail",
    },
    {
      icon: faLinkedin,
      href: "https://linkedin.com/in/itsakaseru",
      name: "LinkedIn"
    },
    {
      icon: faYoutube,
      href: "https://youtube.com/c/Itsakaseru",
      name: "YouTube"
    },
    {
      icon: faGithub,
      href: "https://github.com/Itsakaseru",
      name: "GitHub"
    },
    {
      icon: faXTwitter,
      href: "https://x.com/Itsakaseru",
      name: "X Formerly Twitter"
    }
  ];
  
  const [ selectedTab, setSelectedTab ] = useState<string | null>(WEB_LINKS[0].name);
  
  return (
    <main className="items-center h-screen p-16">
      <div className="flex flex-col justify-between w-full h-full rounded-3xl bg-white p-14">
        <nav className="flex flex-row justify-between">
          <div className="flex flex-col my-auto text-cocoa -space-y-1">
            <div className="text-3xl font-semibold">Itsakaseru</div>
            <div className="text-base font-extralight">Lemuel Lancaster</div>
          </div>
          <div className="flex flex-row items-center space-x-8">
            {
              SOCIAL_LINKS.map((link) =>
                <a key={link.name} href={link.href}><FontAwesomeIcon icon={link.icon} className="size-6 text-cocoa transition-colors hover:text-cocoa-dark duration-300"/></a>
              )
            }
          </div>
        </nav>
        <div className="flex flex-col space-y-12">
          <Image
            className="mx-auto rounded-[3.125rem]"
            src="/sakii.png"
            width={350}
            height={350}
            alt="Photo of Sakii as Anime Character"
          />
          <div className="mx-auto text-cocoa">
            <motion.div
              className="flex flex-row space-x-3 rounded-xl bg-white-light p-4"
              layout
              transition={{duration: 0.25, type: "tween", stiffness: 50}}
            >
              {
                WEB_LINKS.map((link) =>
                  <Link key={link.name} href="/portfolio">
                    <motion.div
                      key={link.name}
                      className={`flex flex-row px-3 py-2 space-x-2 transition-colors duration-300 ${link.name === selectedTab && "bg-white rounded hover:bg-white-dark"}`}
                      layout
                      onHoverStart={() => setSelectedTab(link.name)}
                    >
                      <motion.div layout="position">
                        <link.icon className="size-6"/>
                      </motion.div>
                      {
                        link.name === selectedTab &&
                          <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>
                            {link.name}
                          </motion.p>
                      }
                    </motion.div>
                  </Link>
                )
              }
            </motion.div>
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
      </div>
    </main>
  );
}
