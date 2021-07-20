import Head from "next/head";
import profilePicture from "../public/images/itsakaseru.jpg";
import Navbar from "../components/navbar";
import QuickNav from "../components/quick-nav";

export default function Home()
{
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<div className="self-center max-w-lg">
				<img
					src={ profilePicture.src }
					className="rounded-full border-2 border-primary"
				/>
			</div>
			<QuickNav />
		</div >
	);
}
