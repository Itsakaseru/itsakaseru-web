import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HubBar, IHubLink } from "@/components/HubBar";

const HUB_LINKS: IHubLink[] = [
  {
    icon: "code-bracket-square-icon",
    href: "/portfolio",
    name: "Portfolio",
  },
  {
    icon: "user-circle-icon",
    href: "/about",
    name: "About Me"
  },
  {
    icon: "newspaper-icon",
    href: "https://blog.itsakaseru.me",
    name: "My Blog"
  },
  {
    icon: "square2stack-icon",
    href: "https://fun.itsakaseru.me",
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
    href: "https://youtube.com/Itsakaseru",
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

export const metadata: Metadata = {
  title: "Itsakaseru",
  description: "Itsakaseru's personal website",
  openGraph: {
    title: "Itsakaseru",
    description: "Itsakaseru's personal website",
  }
};

export default function HomePage() {
  return (
    <main className={
      "items-center h-screen lg:p-16 " +
      "p-0"
    }
    >
      <div className={
        "flex flex-col justify-between w-full min-h-full grow sm:p-14 bg-white lg:rounded-3xl " +
        "p-10"
      }>
        <nav className={
          "flex sm:flex-row sm:justify-between sm:space-y-0 " +
          "flex-col space-y-6"
        }>
          <div className={
            "flex flex-col my-auto -space-y-1 text-cocoa sm:text-left " +
            "text-center"
          }>
            <div className="font-semibold text-3xl">Itsakaseru</div>
            <div className="font-extralight text-base">Lemuel Lancaster</div>
          </div>
          <div className={
            "sm:flex flex-row items-center space-x-8 " +
            "hidden"
          }>
            {
              SOCIAL_LINKS.map((link) =>
                <a
                  key={link.name}
                  href={link.href}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="size-6 text-cocoa hover:text-cocoa-dark transition-colors duration-300"
                  />
                </a>
              )
            }
          </div>
        </nav>
        <section className="flex flex-col space-y-12">
          <Image
            className={
              "mx-auto rounded-[3.125rem] xl:w-96 " +
              "lg:w-80 " +
              "md:w-72 " +
              "w-64"
            }
            src="/static/sakii.png"
            quality={100}
            width={350}
            height={350}
            alt="Photo of Sakii as Anime Character"
            priority
          />
          <nav className="mx-auto text-cocoa">
            <HubBar Links={HUB_LINKS} />
          </nav>
        </section>
        <footer className="mx-auto text-cocoa">
          © 2024
          <ruby className="ml-1">It
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
