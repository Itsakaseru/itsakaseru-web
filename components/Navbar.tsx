import { Link, useLocation } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ILink {
  href: string,
  name: IPage,
}

type IPage =
  "Home" |
  "Portfolio" |
  "About Me";

export default function Navbar() {
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
      name: "About Me",
    },
  ];

  const regex = /\/[^\/]+/;
  const currentPage = useLocation().pathname.match(regex);
  const [ selectedTab, setSelectedTab ] = useState<string | null>(currentPage ? currentPage[0] : null);
  const [ showMobileNavbar, setShowMobileNavbar ] = useState(false);

  return (
    <nav className="flex flex-row justify-between">
      <Link className="flex flex-col my-auto -space-y-1 text-cocoa" to="/">
        <div className="font-semibold text-3xl">Itsakaseru</div>
        <div className="font-extralight text-base">Lemuel Lancaster</div>
      </Link>
      <div
        className={
          "sm:flex flex-row items-center px-4 py-3 space-x-8 text-cocoa bg-white-light outline-1 outline-cocoa-light rounded-xl " +
          "hidden"
        }
      >
        {
          NAV_LINKS.map((link) =>
            <Link key={ link.name } to={ link.href }>
              <div
                key={ link.name }
                className={ "relative flex flex-row px-3 py-1 duration-300" }
                onMouseEnter={ () => setSelectedTab(link.href) }
                onMouseLeave={ () => setSelectedTab(currentPage ? currentPage[0] : null) }
              >
                {
                  link.href === selectedTab &&
                  <motion.div
                    layoutId="navbar-link"
                    className="absolute inset-0 bg-white rounded"
                  />
                }
                <p className="z-10 relative">
                  { link.name }
                </p>
              </div>
            </Link>
          )
        }
      </div>
      <button
        className={
          "sm:hidden items-center px-4 py-2 bg-white-light outline-1 outline-cocoa-light rounded-lg text-cocoa-dark " +
          "flex"
        }
        onClick={ () => setShowMobileNavbar(true) }
      >
        <FontAwesomeIcon icon={ faBurger } className="size-6" />
      </button>
      <AnimatePresence>
        {
          showMobileNavbar &&
          <motion.div
            className="z-10 fixed top-0 left-0 flex w-screen h-screen bg-black/5 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setShowMobileNavbar(false) }
          >
            <div className="fixed z-20 top-0 left-0 flex flex-col w-screen h-screen">
              <div className="flex flex-col m-auto p-4 gap-4 bg-white-light outline-2 outline-cocoa-dark rounded-lg text-cocoa">
                {
                  NAV_LINKS.map((link) =>
                    <Link key={ link.name } to={ link.href } onClick={ () => setShowMobileNavbar(false) }>
                      <div
                        key={ link.name }
                        className={ "relative flex flex-row px-6 py-3 duration-300" }
                        onMouseEnter={ () => setSelectedTab(link.href) }
                        onMouseLeave={ () => setSelectedTab(currentPage ? currentPage[0] : null) }
                      >
                        {
                          link.href === selectedTab &&
                          <motion.div
                            className="absolute inset-0 bg-cocoa-light rounded"
                          />
                        }
                        <p className="z-10 relative m-auto">
                          { link.name }
                        </p>
                      </div>
                    </Link>
                  )
                }
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>
  );
}
