import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { faArrowLeft, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getPortfolioData from "../../../data/portfolio";
import { IPortfolio } from "../../../types/custom";
 
export default function PortfolioDetails({ params }: { params: { slug: string } })
{
    const portfolioData = getPortfolioData(params.slug);

    if (!portfolioData) return;

    const { name, icon, color, desc, longDesc, dcs, img, video }: IPortfolio = portfolioData as IPortfolio;

    return (
        <>
            <div className="flex flex-col justify-between h-screen select-none">
                <Navbar page="Portfolio" />
                <div id={ name } className="flex flex-col lg:flex-row mx-4 sm:mx-10 space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
                    <div className="flex flex-col flex-shrink-0 max-w-none lg:max-w-md space-y-10">
                        <Link href="/portfolio" className="flex flex-row space-x-8 items-center p-5 rounded-xl bg-white shadow-normal font-secondary text-primary">
                            <FontAwesomeIcon icon={ faArrowLeft } className="ml-4 text-xl opacity-70" />
                            <div className="font-bold opacity-50">Back to portfolio list</div>
                        </Link>
                        <div className="flex flex-col md:flex-row lg:flex-col justify-between lg:justify-start space-y-10 md:space-y-0 lg:space-y-10 space-x-0 md:space-x-2 lg:space-x-0">
                            <div className="flex flex-col sm:flex-row items-center rounded-lg shadow-normal bg-white">
                                <div className={ `flex justify-center max-w-small w-full m-5 p-7 rounded-lg bg-gradient-to-br from-${ color } to-${ color }-light` }>
                                    <Image
                                        src={ icon }
                                        className="rounded-lg"
                                        alt={ `${ name } logo` }
                                    />
                                </div>
                                <div className="ml-3 mr-3 mb-7 sm:mb-0 sm:ml-3 sm:mr-8 text-center sm:text-left">
                                    <h2 className={ `font-primary font-bold text-${ color }-dark text-3xl` }>{ name }</h2>
                                    <p className={ `mt-2 font-secondary font-medium text-${ color } text-sm` }>
                                        { desc }
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col px-7 pt-7 pb-8 space-y-6 rounded-lg shadow-normal bg-white">
                                <h2 className={ `font-secondary font-extrabold text-${ color }-dark text-2xl` }>
                                    Specifications
                                </h2>
                                <ul className={ `flex flex-col ml-3 space-y-5 font-secondary text-${ color } text-lg` }>
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
                    </div>
                    <div className="flex flex-col flex-grow justify-between space-y-4 p-10 rounded-lg shadow-normal bg-white">
                        <article>
                            <h3 className={ `font-secondary font-extrabold text-3xl text-${ color }-dark` }>Project Info</h3>
                            <p className={ `mt-4 whitespace-pre-line font-primary text-${ color } text-justify` }>
                                { longDesc }
                            </p>
                        </article>
                        <div className="flex flex-col my-24">
                            <h3 className={ `font-secondary font-extrabold text-3xl text-${ color }-dark` }>{ img ? "Screenshots" : video && "Video" }</h3>
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
                            {
                                video &&
                                <div id="images" className="flex flex-row self-center overflow-auto max-w-xs sm:max-w-lg lg:max-w-xs xl:max-w-screen-sm 2xl:max-w-screen-md mt-8 pb-6">
                                    <iframe className="rounded-lg" width="560" height="315" src={ `https://www.youtube-nocookie.com/embed/${ video }` } title="YouTube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export async function generateStaticParams() {
    const portfolios = getPortfolioData("") as IPortfolio[];

    return portfolios.map((portfolio) => ({
        slug: portfolio.id,
    }));
}
