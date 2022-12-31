import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { faBook, faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../public/images/onKeys/logo.png";
import { faUnity, } from "@fortawesome/free-brands-svg-icons";
import { IPortfolioDcs, IPortfolioImg } from "../../types/custom";

export default function OnKeys()
{
    const dcs: IPortfolioDcs[] = [
        {
            name: "Bachelor Thesis Project",
            icon: faBook
        },
        {
            name: "Unity Version 2021.3.1f1",
            icon: faUnity
        },
        {
            name: "Closed Source",
            icon: faCode
        }
    ];

    const img: IPortfolioImg[] = [
        {
            type: "landscape",
            alt: "onKeys showcase",
            src: "/images/onKeys/onKeys2.png",
            blurSrc: "/images/onKeys/onKeys2.png",
            width: 1920,
            height: 1080,
            layout: "responsive"
        },
        {
            type: "landscape",
            alt: "onKeys showcase",
            src: "/images/onKeys/onKeys3.png",
            blurSrc: "/images/onKeys/onKeys3.png",
            width: 1920,
            height: 1080,
            layout: "responsive"
        },
        {
            type: "landscape",
            alt: "onKeys showcase",
            src: "/images/onKeys/onKeys4.png",
            blurSrc: "/images/onKeys/onKeys4.png",
            width: 1920,
            height: 1080,
            layout: "responsive"
        },
        {
            type: "landscape",
            alt: "onKeys showcase",
            src: "/images/onKeys/onKeys5.png",
            blurSrc: "/images/onKeys/onKeys5.png",
            width: 1920,
            height: 1080,
            layout: "responsive"
        }
    ];

    return (
        <>
            <div className="flex flex-col justify-between h-screen select-none">
                <Navbar page=""/>
                <div id="onKeys" className="flex flex-col lg:flex-row mx-4 sm:mx-10 space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
                    <div className="flex flex-col flex-shrink-0 max-w-none lg:max-w-md space-y-10">
                        <div className="flex flex-col md:flex-row lg:flex-col justify-between lg:justify-start space-y-10 md:space-y-0 lg:space-y-10 space-x-0 md:space-x-2 lg:space-x-0">
                            <div className="flex flex-col w-full sm:flex-row items-center rounded-lg shadow-normal bg-white">
                                <div className={ `flex justify-center w-36 p-6 rounded-lg` }>
                                    <Image
                                        src={ Logo }
                                        className="rounded-lg"
                                        alt="onKeys logo"
                                    />
                                </div>
                                <div className="ml-3 mr-3 mb-7 sm:mb-0 sm:ml-3 sm:mr-8 text-center sm:text-left">
                                    <h2 className={ `font-primary font-bold text-purple-600 text-3xl` }>onKeys</h2>
                                    <p className={ `font-secondary font-medium text-purple-600 text-sm` }>
                                        Typing made fun.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col px-7 pt-7 pb-8 space-y-6 rounded-lg shadow-normal bg-white">
                                <h2 className={ `font-secondary font-extrabold text-purple-600 text-2xl` }>
                                    Specifications
                                </h2>
                                <ul className={ `flex flex-col ml-3 mr-6 space-y-5 font-secondary text-purple-600 text-lg` }>
                                    {
                                        dcs.map(({ name, icon, link }, index) =>
                                        {
                                            return (
                                                <li key={ index } className="flex flex-row items-center">
                                                    <div className="flex justify-center w-10 mr-1">
                                                        <FontAwesomeIcon icon={ icon } className="text-2xl" />
                                                    </div>
                                                    <div className="flex">
                                                        {
                                                            link ?
                                                                <Link href={ link } target="_blank" rel="noreferrer" className="flex">
                                                                    { name }
                                                                    <FontAwesomeIcon icon={ faExternalLinkAlt } className="mt-1 ml-1 text-xs" />
                                                                </Link>
                                                                :
                                                                <>
                                                                    { name }
                                                                </>
                                                        }
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <Link href="/onKeys/download" className="flex flex-col px-7 p-3 sm:flex-row items-center rounded-lg shadow-normal bg-purple-500">
                            <p className="w-full text-center font-primary text-white text-lg font-semibold">Download Game</p>
                        </Link>
                    </div>
                    <div className="flex flex-col flex-grow justify-between space-y-4 p-10 rounded-lg shadow-normal bg-white">
                        <article>
                            <h3 className={ `font-secondary font-extrabold text-3xl text-purple-600` }>Project Info</h3>
                            <p className={ `mt-4 whitespace-pre-line font-primary text-purple-300 text-justify` }>
                                onKeys is a rhythm-based typing game built using Unity Game Engine for my Bachelor Thesis project. This game was made to help increase your typing speed and accuracy while not getting bored watching mere words while you type.
                                <br /><br />
                                With this, you can increase your typing accuracy and speed while listening to a music, oh wait! I mean do karaoke using your keyboard.
                                <br />
                                Yes! you type out the lyrics of the songs according to the singer.
                            </p>
                        </article>
                        <div className="flex flex-col my-24">
                            <h3 className={ `font-secondary font-extrabold text-3xl text-purple-600` }>Screenshots</h3>
                            { img &&
                                <div id="images" className="flex flex-row self-center overflow-auto max-w-xs sm:max-w-lg lg:max-w-xs xl:max-w-screen-sm 2xl:max-w-screen-md mt-8 pb-6">
                                    {
                                        img.map(({ type, src, blurSrc, alt, width, height }, index) =>
                                        {
                                            return (
                                                <div key={ index } className={ `flex-shrink-0 px-6 ${ type === "portrait" ? "w-56" : "w-72 sm:w-landscape" }` }>
                                                    <Image
                                                        className="rounded-md"
                                                        src={ src }
                                                        alt={ alt }
                                                        width={ width }
                                                        height={ height }
                                                        blurDataURL={ blurSrc }
                                                        placeholder="blur"
                                                    />
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}