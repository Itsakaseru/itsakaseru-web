import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import { HubBar, IHubLink } from "@/components/HubBar";

export default function HomePage() {
  const WEB_LINKS: IHubLink[] = [
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
            src="/static/sakii.png"
            quality={100}
            width={350}
            height={350}
            alt="Photo of Sakii as Anime Character"
          />
          <div className="mx-auto text-cocoa">
            <HubBar Links={WEB_LINKS} />
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
