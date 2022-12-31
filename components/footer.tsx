"use client";

export default function Footer()
{
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-2 md:space-y-0 px-10 py-8 text-sm md:text-base">
            <div className="font-secondary font-semibold text-primary text-center md:text-left">
                Profile picture by <a className="hover:text-primary-light" href="https://www.pixiv.net/member.php?id=7238253">fishy</a><br className="block md:hidden" /> (I edited the hair and eye)
            </div>
            <div className="font-secondary font-semibold text-primary text-center md:text-left">
                © { new Date().getFullYear() } Itsakaseru. All Rights Reserved
            </div>
        </footer>
    );
}