import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import RoutineLogo from "../../public/svg/routine.svg";
import SecuritySLipLogo from "../../public/images/security-slip.png";
import ImmaCrossyBoxLogo from "../../public/images/imma-crossy-box.png";
import MateMatirunLogo from "../../public/images/matematirun.png"
import KnoledgeLogo from "../../public/svg/knoledge.svg";
import LatusLogo from "../../public/svg/latus.svg";

export default function Portfolio()
{
    const portfolioList = [
        {
            "name": "Routine.",
            "desc": "Daily routine reminder and simple digital wellbeing android application",
            "href": "/portfolio/routine",
            "icon": RoutineLogo,
            "color": "lime"
        },
        {
            "name": "Security SLip",
            "desc": "It's an \"security- checkup\" based simulation game",
            "href": "/portfolio/security-slip",
            "icon": SecuritySLipLogo,
            "color": "orange"
        },
        {
            "name": "Imma Crossy Box",
            "desc": "It's an \"action- adventure\" based simulation game",
            "href": "/portfolio/imma-crossy-box",
            "icon": ImmaCrossyBoxLogo,
            "color": "dayker"
        },
        {
            "name": "MateMatirun",
            "desc": "A math learning based rhythm game with RPG spice into it",
            "href": "/portfolio/matematirun",
            "icon": MateMatirunLogo,
            "color": "cloud"
        },
        {
            "name": "Knoledge",
            "desc": "Education Management Web Application made with CodeIgniter 3",
            "href": "/portfolio/knoledge",
            "icon": KnoledgeLogo,
            "color": "chocolate"
        },
        {
            "name": "Latus",
            "desc": "Pure PHP, simple social media website",
            "href": "/portfolio/latus",
            "icon": LatusLogo,
            "color": "lavender"
        },
    ];

    return (
        <>
            <Head>
                <title>Itsakaseru</title>
                <meta name="description" content="Itsakaseru Personal Website"></meta>
                <meta name="author" content="Remueru Itsakaseru"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col justify-between h-screen select-none">
                <Navbar page="Portfolio" />
                <div className="flex flex-col">
                    <div className="p-8 self-center rounded-xl bg-white font-secondary text-center text-primary-light">
                        <p className="max-w-lg font-bold">
                            Here are all of the projects that I&apos;ve been
                            worked on either throughout college or my life.
                        </p>
                        <p className="mt-5 max-w-lg font-light">
                            Click on one of them to get more details about such projects
                        </p>
                    </div>
                    <div className="m-24 flex flex-row flex-wrap justify-evenly gap-8">
                        {
                            portfolioList.map(({ name, desc, href, icon, color }, index) =>
                            {
                                return (
                                    <Link key={ index } href={ href }>
                                        <a
                                            id={ name }
                                            className="flex flex-row max-w-md h-40 items-center rounded-lg shadow-normal bg-white transform transition duration-500 hover:scale-110"
                                        >
                                            <div className={ `flex justify-center max-w-icon w-full p-7 h-full rounded-tl-lg rounded-bl-lg bg-gradient-to-br from-${ color } to-${ color }-light` }>
                                                <Image
                                                    src={ icon }
                                                    className="rounded-lg"
                                                    alt={ `${ name } logo` }
                                                />
                                            </div>
                                            <div className="mx-8">
                                                <h2 className={ `font-primary font-bold drop-shadow-md text-${ color }-dark text-3xl` }>{ name }</h2>
                                                <p className={ `mt-2 font-secondary font-medium text-${ color } text-sm` }>
                                                    { desc }
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}