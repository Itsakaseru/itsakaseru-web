import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/itsakaseru.jpg";
import profilePictureBlur from "../public/images/itsakaseru-blur.jpg";
import Navbar from "../components/navbar";
import QuickNav from "../components/quick-nav";
import Footer from "../components/footer";
import MetaColor from "../components/meta-color";

export default function Home()
{
	return (
		<>
			<Head>
				<title>Itsakaseru</title>
				<meta name="description" content="Itsakaseru Personal Website"></meta>
				<meta name="author" content="Remueru Itsakaseru"></meta>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<MetaColor />
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
