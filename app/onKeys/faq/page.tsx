"use client";

import { useState } from "react";

export default function FAQ()
{
    const [ isEnglish, setIsEnglish ] = useState(false);

    const DescriptionID = () => {
        return (
            <>
                <p>
                    <b>Ini apa ya?</b><br />
                    Ini adalah permainan mengetik berbasis ritme yang dibuat sebagai proyek skripsi saya.
                </p>
                <p>
                    <b>Pass di coba main kok bermasalah yah? Ada bug!</b><br />
                    Wahh maap banget, mungkin ada beberapa hal yang kelewat. Kamu bisa bantu
                    lapor masalahnya/bugnya dengan kontak Discord saya di Itsakaseru#0452.
                </p>
                <p>
                    <b>Ini nantinya masih akan tetep dilanjutin setelah skripsi?</b><br />
                    Yap! Permainan ini akan tetap dilanjutkan setelah skripsi saya selesai,
                    akan dilakukan rework dari awal dan akan berbeda jauh diikuti dengan hal-hal baru lainnya.
                    Stay tuned!
                </p>
                <p>
                    <b>Apakah nanti bakal dibuat open source?</b><br />
                    Yap! Bakal di open source kedepannya, tapi bukan versi game yang ini.
                </p>
                <p>
                    <b>Kok lagunya dikit banget sih? udah gitu saya ga gitu suka lagunya...</b><br />
                    Well.. saya sadar bahwa setiap orang memiliki selera yang berbeda-beda. Namun, hampir
                    semua lagu yang ada di dunia ini memiliki hak cipta (terutama buat lagu-lagu terkenal).
                    Secara singkat, saya ga bisa taro lagu-lagu tersebut atau menyebarkan lagu-lagu tersebut
                    tanpa izin. Ini termasuk memberikan lagu tersebut melalui link yang dapat di download secara gratis.
                    Tapi tenang! kalau kamu punya lagu yang kamu suka, kamu bisa buat kustom songplan yang bisa dibaca
                    oleh permainan ini, tapi kamu harus membuat semua timestamp dari setiap lyrics yang ada, sesuai dengan
                    lagu yang kamu inginkan.
                </p>
                <p>
                    <b>Gimana cara buat kustom songplan?</b><br />
                    Gampang, kamu butuh software untuk mengedit audio (misalnya Audacity). Dalam folder permainan, terdapat
                    folder Songs dimana tempat lagu-lagu beserta songplannya berada. Kamu bisa melihat contoh format pembuatan
                    masing-masing songplan di dalam folder lagu tersebut.
                </p>
                <p>
                    <b>Saya tidak mau lagu saya ada di sini! Hapus!</b><br />
                    Mohon maaf dari saya, anda dapat menghubungi saya melalui email saya contact@itsakaseru.me untuk menghapusnya.
                </p>
            </>
        );
    }

    const DescriptionEN = () => {
        return (
            <>
                <p>
                    <b>What is this?</b><br />
                    This is a rhythm-based typing game created as a project for my undergraduate thesis.
                </p>
                <p>
                    <b>When I tried to play it, I found some problem! There&apos;s bug!</b><br />
                    Oh no! Sorry about that. You can contact me on Discord Itsakaseru#0452 to report it.
                </p>
                <p>
                    <b>What&apos;s the future for this game?</b><br />
                    It will be different and have more fun stuff baked into it!
                    Stay tuned! I&apos;ll do a major rework and make it better.
                </p>
                <p>
                    <b>Will you going to make this open source?</b><br />
                    Yes! It will be open source at some point, not this version of game though...
                </p>
                <p>
                    <b>Why there&apos;s only a small amount of songs available in the game?</b><br />
                    Well.. I&apos;m aware that everyone has different taste of music that they like. However,
                    almost all songs in the world are protected by what&apos;s called copyright (especially for famous songs).
                    In shorts, I can&apos;t share the songs without the copyright holder permissions or by some licensing agreement.
                    This include giving access to the songs through a link that can be downloaded for free.
                    But worry not! If you have a song that you like, you can create a custom songplan that can be read by the game,
                    but you have to create all timestamp of the lyrics according to the song that you want.
                </p>
                <p>
                    <b>How do I make custom songplan?</b><br />
                    It&apos;s easy, but might need extra time. First of all, you&apos;ll need an audio editor software (such as Audacity).
                    Inside the game folder, there&apos;s a folder called &apos;Songs&apos; where the songs and their songplans are located.
                    You can check and see how every songs are made and the format that you&apos;ll need to follow.
                </p>
                <p>
                    <b>I don&apos;t want to have my songs listed in here! Remove It!</b><br />
                    Apologize from my side, you can contact me through my email contact@itsakaseru.me to have it removed.
                </p>
            </>
        )
    }
    
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="flex flex-col gap-6 max-w-sm my-16 bg-white p-10 rounded-lg shadow-normal">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-purple-600 font-secondary font-bold text-center">FAQ</h1>
                            <div className="text-purple-400 font-secondary text-center">
                                Frequently Asked Question
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold flex flex-row gap-4 justify-center text-gray-400">
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
                </div>
            </div>
        </>
    );
}