import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/itsakaseru.jpg";
import Navbar from "../components/navbar";
import QuickNav from "../components/quick-nav";

export default function Home()
{
	return (
		<>
			<Head>
				<title>Itsakaseru</title>
				<meta name="description" content="Itsakaseru Personal Website"></meta>
				<meta name="author" content="Remueru Itsakaseru"></meta>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<div className="self-center max-w-lg rounded-full">
					<Image
						src={ profilePicture }
						className="rounded-full"
						alt="Itsakaseru profile picture"
					/>
				</div>
				<QuickNav />
				<footer className="flex justify-between mx-10 my-8">
					<div className="font-secondary font-semibold text-primary">
						Profile picture by <a className="hover:text-primary-light" href="https://www.pixiv.net/member.php?id=7238253">fishy</a> (I edited the hair and eye)
					</div>
					<div className="font-secondary font-semibold text-primary">
						© { new Date().getFullYear() } Itsakaseru. All Rights Reserved
					</div>
				</footer>
			</div >
		</>
	);
}
