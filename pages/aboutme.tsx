import Head from "next/head";
import Image from "next/image";
import { useState } from 'react'
import { IconDefinition, IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faYoutube, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import selfPicture from "../public/images/lemi.jpg";

export default function AboutMe()
{
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

    const enName = "Remueru Itsakaseru";
    const jpnName = "イサカセル レムエル";
    const [ name, setName ] = useState("Remueru Itsakaseru");

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

    function onMouseEnter()
    {
        setName(jpnName);
    }

    function onMouseExit()
    {
        setName(enName);
    }

    return (
        <>
            <Head>
                <title>Itsakaseru</title>
                <meta name="description" content="Itsakaseru Personal Website"></meta>
                <meta name="author" content="Remueru Itsakaseru"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="flex flex-col justify-between h-screen select-none">
                <Navbar page="About Me" />
                <div className="flex justify-between">
                    <div className="mx-10">
                        <div className="flex flex-row p-6 rounded-xl bg-white shadow-normal">
                            <div className="flex p-0 max-w-xs">
                                <Image
                                    src={ selfPicture }
                                    className="rounded-xl"
                                    alt="Self-Portrait of Lemuel Lancaster"
                                    width={ 200 }
                                    height={ 200 }
                                />
                            </div>
                            <div className="flex flex-col justify-between my-3 m-10">
                                <div>
                                    <div className="font-secondary font-extrabold text-4xl text-primary">Lemuel<br />Lancaster</div>
                                    <div className="font-primary font-normal text-sm text-primary-light" onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseExit }>{ name }</div>
                                </div>
                                <div className="font-primary font-semibold text-sm text-primary-light">Programer, Oneironautics, Human</div>
                            </div>
                        </div>
                    </div>
                    <div id="aboutme" className="flex flex-col justify-between">
                        <div className="mx-10">
                            <div className="flex flex-col p-10 rounded-xl bg-white shadow-normal max-w-lg">
                                <h1 className="font-secondary font-extrabold text-4xl text-primary">About <span className="text-primary-light">Me</span></h1>
                                <p className="mt-4 font-primary font-normal text-base text-justify">
                                    I am an easygoing person and a person
                                    who will not give up until I reach my
                                    goal. I have always been fascinated by
                                    technology especially in the programming
                                    world. Although I am a quiet type, I
                                    can adapt to my social environment and I
                                    will be able to blend in.
                                    I am an easygoing person and a person
                                    who will not give up until I reach my
                                    goal. I have always been fascinated by
                                    technology especially in the programming
                                    world. Although I am a quiet type, I
                                    can adapt to my social environment and I
                                    will be able to blend in.
                                    I am an easygoing person and a person
                                    who will not give up until I reach my
                                    goal. I have always been fascinated by
                                    technology especially in the programming
                                    world. Although I am a quiet type, I
                                    can adapt to my social environment and I
                                    will be able to blend in.
                                </p>
                            </div>
                        </div>
                        <div id="quick-links" className="mx-10">
                            <div className="flex flex-row justify-around px-14 py-5 rounded-xl bg-white shadow-normal">
                                {
                                    personalInfo.map(({ icon, href }, index) =>
                                    {
                                        return (
                                            <div key={ index }>
                                                <a href={ href } className="table-cell align-middle">
                                                    <FontAwesomeIcon icon={ icon } className="font-primary text-primary text-3xl" />
                                                </a>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mx-10">
                        <div className="flex flex-col h-full p-10 rounded-xl bg-white shadow-normal max-w-lg">
                            <h1 className="font-secondary font-extrabold text-4xl text-primary">About <span className="text-primary-light">Me</span></h1>
                            <p className="mt-4 font-primary font-normal text-base text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maiores optio voluptas vitae earum sapiente facilis quidem
                                velit? Alias laborum, optio mollitia nemo minima accusamus
                                nobis et nam eius aperiam deserunt nulla eaque eos assumenda
                                vero sapiente! Eos doloribus nesciunt ullam saepe. Temporibus
                                blanditiis delectus repellat iusto eum reprehenderit, quibusdam nihil!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maiores optio voluptas vitae earum sapiente facilis quidem
                                velit? Alias laborum, optio mollitia nemo minima accusamus
                                nobis et nam eius aperiam deserunt nulla eaque eos assumenda
                                vero sapiente! Eos doloribus nesciunt ullam saepe. Temporibus
                                blanditiis delectus repellat iusto eum reprehenderit, quibusdam nihil!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maiores optio voluptas vitae earum sapiente facilis quidem
                                velit? Alias laborum, optio mollitia nemo minima accusamus
                                nobis et nam eius aperiam deserunt nulla eaque eos assumenda
                                vero sapiente! Eos doloribus nesciunt ullam saepe.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    );
}