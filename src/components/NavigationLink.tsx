import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";

export const NAVIGATION_LINKS = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "Fun",
		href: "/fun",
	},
	{
		name: "About",
		href: "/about",
	},
];

const getActiveHref = (currentPath: string) => {
	const normalizedPath = currentPath.replace(/\/$/, "") || "/";

	return (
		NAVIGATION_LINKS.find((link) => {
			if (link.href === "/") {
				return normalizedPath === "/";
			}

			return (
				normalizedPath === link.href ||
				normalizedPath.startsWith(`${link.href}/`)
			);
		})?.href ?? currentPath
	);
};

export default function NavigationLink({
	currentPath,
}: {
	currentPath: string;
}) {
	const activeHref = getActiveHref(currentPath);
	const navRef = useRef<HTMLElement | null>(null);
	const highlightRef = useRef<HTMLSpanElement | null>(null);
	const menuButtonRef = useRef<HTMLButtonElement | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);
	const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
	const animationRef = useRef<ReturnType<typeof animate> | null>(null);
	const hasPositionedRef = useRef(false);

	const [isInteractive, setIsInteractive] = useState(false);
	const [highlightedHref, setHighlightedHref] = useState(activeHref);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const moveHighlight = (href: string, instant = false) => {
		const nav = navRef.current;
		const highlight = highlightRef.current;
		const link = linkRefs.current[href];

		if (!nav || !highlight) {
			return;
		}

		animationRef.current?.cancel();

		if (!link) {
			highlight.style.opacity = "0";
			return;
		}

		const navBounds = nav.getBoundingClientRect();
		const linkBounds = link.getBoundingClientRect();

		animationRef.current = animate(highlight, {
			x: linkBounds.left - navBounds.left,
			y: linkBounds.top - navBounds.top,
			width: linkBounds.width,
			height: linkBounds.height,
			opacity: 1,
			duration: instant ? 0 : 250,
			ease: "inOutExpo",
		});
	};

	useEffect(() => {
		setIsInteractive(true);
	}, []);

	useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
				menuButtonRef.current?.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isMenuOpen]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Exhaustive dependencies for moveHighlight on every render
	useEffect(() => {
		if (!isInteractive) {
			return;
		}

		moveHighlight(highlightedHref, !hasPositionedRef.current);
		hasPositionedRef.current = true;
	}, [highlightedHref, isInteractive]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Exhaustive dependencies for moveHighlight on every render
	useEffect(() => {
		if (!isInteractive) {
			return;
		}

		const handleResize = () => {
			moveHighlight(highlightedHref, true);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			animationRef.current?.cancel();
		};
	}, [highlightedHref, isInteractive]);

	return (
		<>
			<div className="flex justify-end mr-2 lg:hidden">
				<button
					ref={menuButtonRef}
					type="button"
					className="inline-flex items-center gap-3 rounded-xl bg-snow-100/10 px-4 py-3 font-semibold text-snow-100/85 backdrop-blur-sm transition hover:bg-snow-100/20 hover:text-snow-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snow-100"
					onClick={() => setIsMenuOpen(true)}
					aria-haspopup="dialog"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-navigation-menu"
				>
					<span className="grid gap-1" aria-hidden="true">
						<span className="block h-0.5 w-5 rounded-full bg-current" />
						<span className="block h-0.5 w-5 rounded-full bg-current" />
						<span className="block h-0.5 w-5 rounded-full bg-current" />
					</span>
					Menu
				</button>
			</div>

			<nav
				ref={navRef}
				className="relative my-auto hidden w-full flex-row justify-center gap-1 rounded-xl bg-snow-100/10 px-3 py-2 backdrop-blur-sm lg:flex"
				onMouseLeave={() => setHighlightedHref(activeHref)}
				onBlur={(event) => {
					if (
						!event.currentTarget.contains(event.relatedTarget as Node | null)
					) {
						setHighlightedHref(activeHref);
					}
				}}
			>
				<span
					ref={highlightRef}
					aria-hidden="true"
					className="pointer-events-none absolute left-0 top-0 z-0 rounded-lg bg-snow-100 opacity-0"
				/>
				{NAVIGATION_LINKS.map((link) => (
					<a
						key={link.name}
						ref={(element) => {
							linkRefs.current[link.href] = element;
						}}
						href={link.href}
						onMouseEnter={() => setHighlightedHref(link.href)}
						onFocus={() => setHighlightedHref(link.href)}
						className={
							"relative z-10 rounded-lg px-4 py-1.5 transition-colors duration-200 xl:px-6 " +
							(isInteractive
								? highlightedHref === link.href
									? "text-cocoa-500"
									: "text-snow-100/75 hover:text-snow-100"
								: activeHref === link.href
									? "bg-snow-100 text-cocoa-500"
									: "text-snow-100/75 hover:underline hover:underline-offset-6")
						}
					>
						{link.name}
					</a>
				))}
			</nav>

			{isMenuOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa-900/80 p-4 backdrop-blur-sm lg:hidden">
					<button
						type="button"
						className="absolute inset-0 cursor-default"
						onClick={() => setIsMenuOpen(false)}
						aria-label="Close navigation menu"
					/>
					<div
						className="relative w-full max-w-sm rounded-3xl bg-snow-100 p-5 text-cocoa-500 shadow-2xl shadow-cocoa-900/30"
						role="dialog"
						aria-modal="true"
						aria-labelledby="mobile-navigation-title"
						id="mobile-navigation-menu"
					>
						<div className="flex items-center justify-between gap-4">
							<div>
								<p className="text-xs font-bold uppercase tracking-[0.18em] text-cocoa-300">
									Navigation
								</p>
								<h2
									id="mobile-navigation-title"
									className="font-manrope text-2xl font-black"
								>
									Choose a page
								</h2>
							</div>

							<button
								ref={closeButtonRef}
								type="button"
								className="grid size-10 shrink-0 place-items-center rounded-full bg-cocoa-100 font-bold text-cocoa-500 transition hover:bg-cocoa-500 hover:text-snow-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-500"
								onClick={() => {
									setIsMenuOpen(false);
									menuButtonRef.current?.focus();
								}}
								aria-label="Close navigation menu"
							>
								X
							</button>
						</div>

						<div className="mt-6 grid gap-2">
							{NAVIGATION_LINKS.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsMenuOpen(false)}
									className={
										"rounded-2xl px-4 py-3 font-semibold transition " +
										(activeHref === link.href
											? "bg-cocoa-500 text-snow-100"
											: "bg-cocoa-100/70 text-cocoa-400 hover:bg-cocoa-200/30")
									}
								>
									{link.name}
								</a>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
