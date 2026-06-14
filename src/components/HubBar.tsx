import {
	faBoxArchive,
	faCircleInfo,
	faMugSaucer,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";

const HubLink = [
	{
		name: "Projects",
		icon: faBoxArchive,
		href: "/projects",
	},
	{
		name: "Blog",
		icon: faNewspaper,
		href: "/blog",
	},
	{
		name: "Fun",
		icon: faMugSaucer,
		href: "/fun",
	},
	{
		name: "About",
		icon: faCircleInfo,
		href: "/about",
	},
];

export default function HubBar() {
	const [highlighted, setHighlighted] = useState(HubLink[0].name);

	return (
		<>
			<motion.div
				layout
				className="hidden max-w-[calc(100vw-2rem)] flex-row gap-2 overflow-x-auto rounded-xl bg-white px-3 py-2 shadow-sm shadow-cocoa-100 sm:flex"
				transition={{ duration: 0.25, type: "tween", stiffness: 50 }}
			>
				{HubLink.map((link) => (
					<motion.a
						key={link.name}
						href={link.href}
						aria-label={link.name}
						className={
							"group relative my-auto inline-flex shrink-0 rounded-lg px-3 py-2 text-cocoa-300 transition-all ease-in hover:bg-snow-300 " +
							(link.name === highlighted ? "bg-snow-200" : "")
						}
						onHoverStart={() => setHighlighted(link.name)}
					>
						<motion.div
							className="flex items-center justify-center gap-2 overflow-hidden"
							animate={{
								width: link.name === highlighted ? 96 : 16,
								height: link.name === highlighted ? 24 : 24,
							}}
							transition={{
								duration: 0.25,
								type: "tween",
								stiffness: 50,
							}}
						>
							<span className="flex size-4 shrink-0 items-center justify-center">
								<FontAwesomeIcon
									icon={link.icon}
									className="size-4 -translate-y-px"
								/>
							</span>

							{link.name === highlighted && (
								<motion.span
									className="whitespace-nowrap"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									{link.name}
								</motion.span>
							)}
						</motion.div>
					</motion.a>
				))}
			</motion.div>

			{/* Mobile Navbar*/}
			<div className="grid w-60 gap-2 sm:hidden">
				{HubLink.map((link) => (
					<a
						key={link.name}
						href={link.href}
						className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-cocoa-300 shadow-sm shadow-cocoa-100 transition hover:bg-snow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-300"
					>
						<span className="flex size-4 shrink-0 items-center justify-center">
							<FontAwesomeIcon
								icon={link.icon}
								className="size-4 -translate-y-px"
							/>
						</span>
						<span>{link.name}</span>
					</a>
				))}
			</div>
		</>
	);
}
