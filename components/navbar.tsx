import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

interface IProps
{
	page: string
};

export default function Navbar({ page }: IProps)
{
	const [ showMobileNavbar, setShowMobileNavbar ] = useState(false);
	const mobileNavbar = useRef<HTMLInputElement>(null);

	const fadeInOut = {
		hidden: { opacity: 0, transition: { duration: 0.5 } },
		visible: { opacity: 0.3, transition: { duration: 0.5 } },
	}

	const popInOut = {
		hidden: { scale: 0, opacity: 0, transition: { duration: 0.5, type: "spring", bounce: 0.35 } },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring", bounce: 0.35 } },
	}

	useEffect(() =>
	{
		function handleClickOutside(event: MouseEvent)
		{
			if (mobileNavbar.current && !mobileNavbar.current.contains(event.target as Element))
			{
				setShowMobileNavbar(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup function
		return () =>
		{
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ mobileNavbar ])

	const links = [
		{
			"name": "Home",
			"href": "/"
		},
		{
			"name": "Portfolio",
			"href": "/portfolio"
		},
		{
			"name": "About Me",
			"href": "/aboutme"
		}
	]

	return (
		<div>
			<nav className="m-10 hidden justify-between md:flex">
				<div className="self-center font-primary font-semibold text-primary text-3xl select-none">
					Itsakaseru
				</div>
				<div id="navigation" className="bg-white rounded-xl shadow-normal px-5 py-3">
					<div className="flex space-x-6 font-secondary font-semibold text-primary">
						{
							links.map(({ name, href }, index) =>
							{
								return (
									<Link key={ index } href={ href }>
										<a className={ `${ name === page ? "bg-primary text-white" : "hover:bg-primary hover:text-white" } py-1 px-4 rounded transition-colors duration-300` }>
											{ name }
										</a>
									</Link>
								);
							})
						}
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{
					showMobileNavbar &&
					<>
						<motion.div variants={ fadeInOut } initial="hidden" animate="visible" exit="hidden" className="absolute h-screen w-screen flex justify-center items-center z-10 bg-black" />
						<motion.div variants={ popInOut } initial="hidden" animate="visible" exit="hidden" className="absolute h-screen w-screen flex justify-center items-center z-10">
							<div ref={ mobileNavbar } className="flex flex-col space-y-6 justify-between p-6 rounded-lg bg-white shadow-lg font-secondary font-semibold text-primary text-base">
								{
									links.map(({ name, href }, index) =>
									{
										return (
											<Link key={ index } href={ href }>
												<a
													onClick={ name === page ? () => setShowMobileNavbar(false) : undefined }
													className="bg-primary text-white hover:bg-primary-light hover:text-white text-center px-8 py-3 rounded transition-colors duration-300"
												>
													{ name }
												</a>
											</Link>
										);
									})
								}
							</div>
						</motion.div>
					</>
				}
			</AnimatePresence>
			<nav className="m-10 flex justify-between md:hidden">
				<div className="self-center font-primary font-semibold text-primary text-2xl select-none">
					Itsakaseru
				</div>
				<button className="px-4 py-2 rounded-lg bg-white text-2xl" onClick={ () => setShowMobileNavbar(true) }>
					<FontAwesomeIcon icon={ faBars } />
				</button>
			</nav>
		</div>
	);
}