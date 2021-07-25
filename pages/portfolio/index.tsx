import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import getPortfolioData from "../api/portfolio";
import { IPortfolio } from "../../types/custom";

export default function Portfolio()
{
    const portfolioList = getPortfolioData("") as IPortfolio[];

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
                <div className="flex flex-col mx-8 sm:mx-0">
                    <div className="p-8 self-center rounded-xl bg-white font-secondary text-center text-primary-light">
                        <p className="max-w-lg font-bold">
                            Here are all of the projects that I&apos;ve been
                            worked on either throughout college or my life.
                        </p>
                        <p className="mt-5 max-w-lg font-light">
                            Click on one of them to get more details about such projects
                        </p>
                    </div>
                    <div className="m-0 mt-8 sm:m-24 flex flex-row flex-wrap justify-evenly gap-8">
                        {
                            portfolioList.map(({ name, desc, href, icon, color }, index) =>
                            {
                                return (
                                    <Link key={ index } href={ href }>
                                        <a
                                            id={ name }
                                            className="flex flex-col sm:flex-row justify-evenly sm:justify-start p-6 sm:p-0 space-y-6 sm:space-y-0 max-w-none sm:max-w-md w-full sm:w-auto items-center rounded-lg shadow-normal bg-white transform transition duration-500 hover:scale-110"
                                        >
                                            <div className={ `flex justify-center max-w-icon max-h-icon w-full h-full p-7 rounded-tl-lg rounded-lg sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none sm:rounded-br-none bg-gradient-to-br from-${ color } to-${ color }-light` }>
                                                <Image
                                                    src={ icon }
                                                    className="rounded-lg"
                                                    alt={ `${ name } logo` }
                                                />
                                            </div>
                                            <div className="mx-8">
                                                <h2 className={ `font-primary font-bold drop-shadow-md text-${ color }-dark text-3xl text-center sm:text-left` }>{ name }</h2>
                                                <p className={ `mt-2 font-secondary font-medium text-${ color } text-sm hidden sm:block` }>
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