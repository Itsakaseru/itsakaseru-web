import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Loading from "../../components/loading";
import { faArrowLeft, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getPortfolioData from "../api/portfolio";
import { IPortfolio } from "../../types/custom";
import { AppProps } from "next/dist/next-server/lib/router/router";

export default function PortfolioDetails({ portfolioList }: AppProps)
{
    const { id, name, icon, color, desc, longDesc, dcs, img }: IPortfolio = portfolioList;

    return (
        <>
            <Head>
                <title>Portfolio: { name }</title>
                <meta name="description" content="Itsakaseru Personal Website"></meta>
                <meta name="author" content="Remueru Itsakaseru"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col justify-between h-screen select-none">
                <Navbar page="Portfolio" />
                <div id={ name } className="flex flex-row mx-10 h-full space-x-10">
                    <div className="flex flex-col flex-shrink-0 max-w-md space-y-10">
                        <Link href="/portfolio">
                            <a className="flex flex-row space-x-8 items-center p-5 rounded-xl bg-white shadow-normal font-secondary text-primary">
                                <FontAwesomeIcon icon={ faArrowLeft } className="ml-4 text-xl opacity-70" />
                                <div className="font-bold opacity-50">Back to portfolio list</div>
                            </a>
                        </Link>
                        <div className="flex flex-row items-center rounded-lg shadow-normal bg-white">
                            <div className={ `flex justify-center max-w-small w-full m-5 p-7 rounded-lg bg-gradient-to-br from-${ color } to-${ color }-light` }>
                                <Image
                                    src={ icon }
                                    className="rounded-lg"
                                    alt={ `${ name } logo` }
                                />
                            </div>
                            <div className="ml-3 mr-8">
                                <h2 className={ `font-primary font-bold drop-shadow-md text-${ color }-dark text-3xl` }>{ name }</h2>
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
                                                            <a href={ link } target="_blank" rel="noreferrer" className="flex">
                                                                { name }
                                                                <FontAwesomeIcon icon={ faExternalLinkAlt } className="mt-1 ml-1 text-xs" />
                                                            </a>
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
                    <div className="flex flex-col flex-grow justify-between space-y-4 p-10 rounded-lg shadow-normal bg-white">
                        <article>
                            <h3 className={ `font-secondary font-extrabold text-3xl text-${ color }-dark` }>Project Info</h3>
                            <p className={ `mt-4 whitespace-pre-line font-primary text-${ color }` }>
                                { longDesc }
                            </p>
                        </article>
                        <div id="container" className="flex flex-col my-24">
                            <h3 className={ `font-secondary font-extrabold text-3xl text-${ color }-dark` }>Screenshots</h3>
                            <div id="images" className="flex flex-row self-center overflow-auto max-w-6xl mt-8 pb-6">
                                {
                                    img.map(({ type, src, blurSrc, alt, width, height }, index) =>
                                    {
                                        return (
                                            <div key={ index } className={ `flex-shrink-0 px-6 ${ type === "portrait" ? "w-56" : "w-landscape" }` }>
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
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export async function getStaticPaths()
{
    const portfolio = getPortfolioData("");

    if (portfolio instanceof Array)
    {
        const paths = portfolio?.map((val) => ({
            params: { name: val.id },
        }))

        return { paths, fallback: false };
    }
}

export async function getStaticProps({ params }: { params: { name: string } })
{
    const portfolioList = getPortfolioData(params.name);

    return { props: { portfolioList } };
}