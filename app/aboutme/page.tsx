import Image from "next/image";
import { IconName, IconPrefix, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faYoutube, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import selfPicture from "../../public/images/lemi.jpg";

export default async function AboutMe()
{
    const { subscriberCount, viewCount, videoCount } = await getYoutubeStats();

    const faSkyEncripttion: IconDefinition = {
        prefix: "fac" as IconPrefix,
        iconName: "skyencripttion-logo" as IconName,
        icon: [
            2537.61,
            2759,
            [],
            "e001",
            "M2119.27,2220.93h-1482a100,100,0,0,1-100-100V638.9a100,100,0,0,1,100-100h1482a100,100,0,0,1,100,100v1482A100,100,0,0,1,2119.27,2220.93Zm418.34-2000.5V100c0-55-45-100-100-100H637.31c-55,0-100,45-100,100V220.43c0,55,45,100,100,100h1800.3C2492.61,320.43,2537.61,275.43,2537.61,220.43Zm0,2438.57V2538.57c0-55-45-100-100-100H100c-55,0-100,45-100,100V2659c0,55,45,100,100,100H2437.61C2492.61,2759,2537.61,2714,2537.61,2659ZM220.43,0H100C45,0,0,45,0,100V2659c0,55,45,100,100,100H220.43c55,0,100-45,100-100V100C320.43,45,275.43,0,220.43,0Z"
        ]
    };

    library.add(faSkyEncripttion);

    const personalInfo = [
        {
            "icon": faGithub,
            "href": "https://github.com/Itsakaseru"
        },
        {
            "icon": faSkyEncripttion,
            "href": "https://skyencripttion.com"
        },
        {
            "icon": faYoutube,
            "href": "https://www.youtube.com/channel/UC138oNHLYXktkdQpFzV7l2Q"
        },
        {
            "icon": faTwitter,
            "href": "https://twitter.com/Itsakaseru"
        },
        {
            "icon": faLinkedin,
            "href": "https://linkedin.com/in/itsakaseru/"
        }
    ]

    return (
        <>
            <div className="flex flex-col justify-between h-screen select-none">
                <Navbar page="About Me" />
                <div className="flex flex-col 2xl:flex-row flex-grow justify-between items-center 2xl:items-stretch mx-10 sm:mx-10 space-x-0 2xl:space-x-8 space-y-8 2xl:space-y-0">
                    <div>
                        <div className="flex flex-col sm:flex-row max-w-lg items-center sm:items-stretch p-6 rounded-xl bg-white shadow-normal">
                            <div className="flex my-auto">
                                <div className="p-0 min-w-[10rem] max-w-xs mt-3 sm:mt-0 relative aspect-1">
                                <Image
                                    src={ selfPicture }
                                    className="rounded-xl"
                                    alt="Self-Portrait of Lemuel Lancaster"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                            </div>
                            <div className="flex flex-col justify-between my-3 m-10 space-y-6 sm:space-y-0 text-center sm:text-left">
                                <div>
                                    <div className="font-secondary font-extrabold text-2xl sm:text-4xl text-primary">Lemuel<br className="hidden sm:block" /> Lancaster</div>
                                    <div className="font-primary font-normal text-sm text-primary-light">レムエル イサカセル</div>
                                </div>
                                <div className="font-primary font-semibold text-sm text-primary-light">Programmer, Oneironautics, Human</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-grow max-w-sm md:max-w-full justify-evenly xl:justify-between space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
                        <div id="aboutme" className="flex flex-col-reverse lg:flex-col justify-between ml-0 2xl:ml-16 pl-0 2xl:pl-6">
                            <div>
                                <div className="flex flex-col p-10 rounded-xl bg-white shadow-normal max-w-lg">
                                    <h1 className="font-secondary font-extrabold text-4xl text-primary">About <span className="text-primary-light">Me</span></h1>
                                    <p className="mt-4 font-primary font-normal text-base text-justify">
                                        I am an easygoing person and a person
                                        who will not give up until I reach my
                                        goal. I have always been fascinated by
                                        technology especially in the programming
                                        world. Although I am a quiet type, like
                                        really.. I got nervous around people
                                        I don&apos;t know. But with that said, I
                                        can try and will try adapt to my social
                                        environment and be able to blend in.<br /><br />
                                        Other than technologies, I&apos;m myself like
                                        all things about dreaming. I got interested
                                        in how and why dream itself is possible.
                                        As well as the story of the dreams that I
                                        went through throughout my life.
                                        My goal is finding how dream are construct
                                        and why it sometimes, have unique things
                                        happening inside it.<br /><br />
                                        With that said, I&apos;m also trying to write
                                        my own novel, the story will be taken from
                                        all of the dreams that I experience. Sadly
                                        I&apos;m not confident enough to write it.
                                        But I&apos;ll try it anyway. It&apos;s still a
                                        work in progress.
                                    </p>
                                </div>
                            </div>
                            <div id="quick-links" className="mb-8 lg:mb-0">
                                <div className="flex flex-row justify-around px-4 sm:px-14 py-5 rounded-xl bg-white shadow-normal">
                                    {
                                        personalInfo.map(({ icon, href }, index) =>
                                        {
                                            return (
                                                <div key={ index }>
                                                    <a href={ href } className="table-cell align-middle text-primary hover:text-primary-light transition-colors duration-300">
                                                        <FontAwesomeIcon icon={ icon } className="font-primary text-3xl" />
                                                    </a>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col h-full p-10 rounded-xl bg-white shadow-normal max-w-lg">
                                <h1 className="font-secondary font-extrabold text-4xl text-primary">Additional <span className="text-primary-light">Info</span></h1>
                                <p className="mt-4 font-primary font-normal text-base text-justify">
                                    Hi, you can called me Lemi or Sakii. Thanks
                                    for visiting my personal website.
                                    If you are curious, this website was made
                                    using Next.js, Typescript and TailwindCSS.
                                    This was my first attempt at using Next.js
                                    for building website and I&apos;m still learning
                                    from it. The code itself is open source,
                                    you can check it out yourself by <a
                                        href="https://github.com/Itsakaseru/itsakaseru-web"
                                        target="_blank"
                                        rel="noreferrer">
                                        clicking here.
                                    </a>
                                    <br /><br />
                                    If you want contact me, you can do it through
                                    my email <span className="select-text">contact@itsakaseru.me</span>. Though I
                                    don&apos;t know why you would want to contact me to
                                    be completely honest xD. <br /><br />
                                    I own two YouTube channels, one is for
                                    gaming and one I have not decided yet.
                                    For the gaming one, I might change it to
                                    others things that I got interest in later on.
                                    You can visit my channel by clicking the
                                    YouTube logo in my homepage, or by clicking
                                    this box below.
                                </p>
                                <div className="mt-5 flex flex-grow w-full justify-center">
                                    <div className="self-center">
                                        <a href="https://youtube.com/SkyEncripttion" className="flex flex-row items-center rounded-lg shadow-normal bg-gray-100">
                                            <div className={ `flex justify-center max-w-small w-full m-5 p-7 rounded-lg bg-gradient-to-br from-dayker to-dayker-light` }>
                                                <FontAwesomeIcon
                                                    icon={ faSkyEncripttion }
                                                    className="text-7xl text-white"
                                                />
                                            </div>
                                            <div className="ml-3 mr-8 hidden md:block">
                                                <h2 className={ `font-primary font-bold drop-shadow-md text-dayker-dark text-3xl` }>SkyEncripttion</h2>
                                                <p className={ `mt-2 font-secondary font-medium text-dayker text-sm` }>
                                                    <b>{ subscriberCount }</b> Subscribers<br />
                                                    <b>{ viewCount }</b> Total Views<br />
                                                    <b>{ videoCount }</b> Videos Uploaded
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    );
}

async function getYoutubeStats() {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCoEztSI7PDAwtGsUQ8Dq7Pg&key=${ process.env.GOOGLE_API_KEY }`;

    const res = await fetch(url, { next: { revalidate: 300 } });
    const resJson = await res.json();

    const { statistics } = resJson.items[0];

    return statistics;
}