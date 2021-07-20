import Head from "next/head";
import profilePicture from "../public/images/itsakaseru.jpg";
import Navbar from "../components/navbar";

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
		</div >
	);
}
