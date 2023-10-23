"use client";

import Image from "next/image";
import Logo from "../../../public/images/onKeys/logo.png";
import { faApple, faUbuntu, faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";

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
            link: "https://dl.itsakaseru.me/onKeys/onKeys-Win-v1.0.3.zip"
        },
        {
            icon: faApple,
            name: "Apple (Universal)",
            link: "https://dl.itsakaseru.me/onKeys/onKeys-Mac-v1.0.3.zip"
        },
        {
            icon: faUbuntu,
            name: "Linux 64-bit (Untested)",
            link: "https://dl.itsakaseru.me/onKeys/onKeys-Linux-v1.0.3.zip"
        }
    ]

    return (
        <>
            <div className="w-full my-16 flex justify-center">
                <div className="flex flex-col max-w-xs gap-6 my-auto bg-white p-10 rounded-lg shadow-normal">
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
                        <div className="font-bold flex flex-row gap-4 justify-center text-gray-500">
                            <button
                                className={`${ isEnglish && "text-white bg-purple-600 py-1 px-3 rounded-md" } cursor-pointer`}
                                onClick={ () => setIsEnglish(true) }
                            >
                                EN
                            </button> | <button
                                className={`${ isEnglish || "text-white bg-purple-600 py-1 px-3 rounded-md" } cursor-pointer`}
                                onClick={ () => setIsEnglish(false) }
                            >
                                ID
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 break-words text-gray-400 text-sm text-justify">
                            {
                                isEnglish ? <DescriptionEN /> : <DescriptionID />
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-center text-sm text-gray-400">v1.0.3</p>
                        <div className="flex flex-col gap-3 font-secondary">
                            {
                                links.map(({icon, name, link }, index) => {
                                    return (
                                        <Link className="flex flex-row gap-2 px-4 py-2 text-gray-800 rounded-md bg-gray-300 hover:bg-gray-200 transition-colors text-sm" href={ link } key={ index } target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={ icon } className="my-auto text-lg"/>
                                            { name }
                                        </Link>
                                    );
                                })
                            }
                        </div>
                        <Link
                            className="p-2 bg-orange-400 hover:bg-orange-300 transition-colors font-primary text-sm text-center text-white rounded-md"
                            href="https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb0k4aWtoU2FScWM3VjRzZzA2MW9iRjZpdXVhP2U9Z0VQNkd/root/content"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Additional Song
                        </Link>
                        <div className="text-center">─────</div>
                        <Link
                            className="p-2 bg-green-600 hover:bg-green-500 transition-colors font-primary text-sm text-center text-white rounded-md"
                            href="/onKeys/survey"
                            target="_blank"
                        >
                            Survey Link
                        </Link>
                        <Link
                            className="p-2 bg-green-600 hover:bg-green-500 transition-colors font-primary text-sm text-center text-white rounded-md"
                            href="faq"
                            target="_blank"
                        >
                            Frequently Asked Questions
                        </Link>
                    </div>
                    <p className="text-center text-sm text-gray-400">© { new Date().getFullYear() } Itsakaseru<br />All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
}