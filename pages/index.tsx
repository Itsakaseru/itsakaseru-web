import Head from "next/head";
import profilePicture from "../public/images/itsakaseru.jpg";
import Navbar from "../components/navbar";
import QuickNav from "../components/quick-nav";

export default function Home()
{
	return (
		<div className="flex flex-col justify-between h-screen">
			<Navbar />
			<div className="self-center max-w-lg">
				<img
					src={ profilePicture.src }
					className="rounded-full border-2 border-primary"
				/>
			</div>
			<QuickNav />
			<footer className="flex justify-between mx-10 my-8">
				<div className="font-secondary font-semibold text-primary">
					Profile picture by <a className="hover:text-primary-light" href="https://www.pixiv.net/member.php?id=7238253">fishy</a> (I edited the hair and eye)
				</div>
				<div className="font-secondary font-semibold text-primary">
					© 2021 Itsakaseru. All Rights Reserved
				</div>
			</footer>
		</div >
	);
}
