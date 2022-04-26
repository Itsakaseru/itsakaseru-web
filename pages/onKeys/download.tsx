import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/onKeys/logo.png";
import { faApple, faUbuntu, faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function Download()
{
    const [ isEnglish, setIsEnglish ] = useState(false);

    const DescriptionID = () => {
        return (
            <>
                <p>
                    Terima kasih atas minat anda untuk mau mencoba permainan mengetik berbasis ritme ini. Permainan ini dibuat guna memenuhi kebutuhan skripsi saya.
                </p>
                <p>
                    Setelah mencoba permainan ini, saya ingin meminta bantuan anda untuk mengisi survei yang telah disediakan dibawah ini. Terima kasih banyak!
                </p>
            </>
        );
    }

    const DescriptionEN = () => {
        return (
            <>
                <p>
                    Thank you for your cooperation in playing this rhythm-based typing game.
                </p>
                <p>
                    How do you feel about the game? Help me expressing your feeling towards the game by filling out this survey! Your response would be considered for the future development of the game!
                </p>
            </>
        )
    }

    const links = [
        {
            icon: faWindows,
            name: "Windows 64-bit",
            link: "http://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb0k4aWtoU2FScWM3VnBlUGpfcEdKRGIxM0JqP2U9NkdSdGNi/root/content"
        },
        {
            icon: faApple,
            name: "Apple Intel/Silicon (M1)",
            link: ""
        },
        {
            icon: faUbuntu,
            name: "Linux 64-bit (Untested)",
            link: ""
        }
    ]

    return (
        <>
            <Head>
                <title>onKeys: Download</title>
                <meta name="description" content="Page to download onKeys game" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full h-screen flex justify-center">
                <div className="flex flex-col w-80 gap-6 my-auto bg-white p-10 rounded-lg shadow-normal">
                    <div className="flex flex-col gap-3">
                        <div className="w-32 self-center">
                            <Image src={ Logo } alt="onKeys Logo"/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-purple-600 font-secondary font-bold text-center">onKeys</h1>
                            <div className="text-purple-400 font-secondary text-center">
                                Typing made fun.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold flex flex-row gap-4 justify-center">
                            <a
                                className={`${ isEnglish && "text-purple-600" } cursor-pointer`}
                                onClick={ () => setIsEnglish(true) }
                            >
                                EN
                            </a> | <a
                                className={`${ isEnglish || "text-purple-600" } cursor-pointer`}
                                onClick={ () => setIsEnglish(false) }
                            >
                                ID
                            </a>
                        </div>
                        <div className="flex flex-col gap-4 break-words text-gray-400 text-sm text-justify">
                            {
                                isEnglish ? <DescriptionEN /> : <DescriptionID />
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3 font-secondary">
                            {
                                links.map(({icon, name, link }, index) => {
                                    return (
                                        <a className="flex flex-row gap-2 px-4 py-2 text-gray-800 rounded-md bg-gray-300 hover:bg-gray-200 transition-colors text-sm" href={ link } key={ index }>
                                            <FontAwesomeIcon icon={ icon } className="my-auto text-lg"/>
                                            { name }
                                        </a>
                                    );
                                })
                            }
                        </div>
                        <a
                            className="p-2 bg-orange-400 hover:bg-orange-300 transition-colors font-primary text-sm text-center text-white rounded-md"
                            href=""
                        >
                            Additional Song
                        </a>
                        <div className="text-center">─────</div>
                        <a
                            className="p-2 bg-green-600 hover:bg-green-500 transition-colors font-primary text-sm text-center text-white rounded-md"
                            href=""
                        >
                            Survey Link
                        </a>
                        <a
                            className="p-2 bg-green-600 hover:bg-green-500 transition-colors font-primary text-sm text-center text-white rounded-md"
                            href="onKeys/faq"
                        >
                            Frequently Asked Questions
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}