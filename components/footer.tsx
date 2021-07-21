export default function Footer()
{
    return (
        <footer className="flex justify-between mx-10 my-8">
            <div className="font-secondary font-semibold text-primary">
                Profile picture by <a className="hover:text-primary-light" href="https://www.pixiv.net/member.php?id=7238253">fishy</a> (I edited the hair and eye)
            </div>
            <div className="font-secondary font-semibold text-primary">
                © { new Date().getFullYear() } Itsakaseru. All Rights Reserved
            </div>
        </footer>
    );
}