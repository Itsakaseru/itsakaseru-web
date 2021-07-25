import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/itsakaseru.jpg";
import Navbar from "../components/navbar";
import QuickNav from "../components/quick-nav";
import Footer from "../components/footer";

export default function Home()
{
	return (
		<>
			<Head>
				<title>Itsakaseru</title>
				<meta name="description" content="Itsakaseru Personal Website"></meta>
				<meta name="author" content="Remueru Itsakaseru"></meta>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="theme-color" content="#F9F9F9" />
				<meta name="msapplication-navbutton-color" content="#F9F9F9" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#F9F9F9" />
			</Head>
			<div className="flex flex-col justify-between h-screen select-none">
				<Navbar page="Home" />
				<div className="self-center max-w-xs md:max-w-lg rounded-full">
					<Image
						src={ profilePicture }
						className="rounded-full"
						alt="Itsakaseru profile picture"
						placeholder="blur"
					/>
				</div>
				<QuickNav />
				<Footer />
			</div >
		</>
	);
}
