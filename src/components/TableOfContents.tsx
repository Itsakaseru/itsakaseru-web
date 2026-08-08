import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./TableOfContents.css";

interface Heading {
	depth: number;
	slug: string;
	text: string;
}

interface TableOfContentsProps {
	headings: Heading[];
}

const nestedMargins: Record<number, string> = {
	3: "ml-6",
	4: "ml-8",
	5: "ml-10",
	6: "ml-12",
};

function isTOCHeading(heading: Heading) {
	return heading.depth >= 1 && heading.depth <= 6;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
	const tocItems = headings.filter(isTOCHeading);
	const headingListRef = useRef<HTMLElement>(null);
	const linksBySlugRef = useRef(new Map<string, HTMLAnchorElement>());
	const [activeSlug, setActiveSlug] = useState(tocItems[0]?.slug ?? null);

	useEffect(() => {
		const headingList = headingListRef.current;
		if (!headingList) return;

		const sections = headings.filter(isTOCHeading).flatMap((heading) => {
			const element = document.getElementById(heading.slug);
			return element ? [{ element, slug: heading.slug }] : [];
		});
		if (sections.length === 0) return;

		let animationFrame = 0;

		const revealActiveLink = (link: HTMLAnchorElement | undefined) => {
			if (!link || headingList.offsetParent === null) return;

			const containerRect = headingList.getBoundingClientRect();
			const linkRect = link.getBoundingClientRect();
			const padding = 16;

			if (linkRect.top < containerRect.top + padding) {
				headingList.scrollTop -= containerRect.top + padding - linkRect.top;
			} else if (linkRect.bottom > containerRect.bottom - padding) {
				headingList.scrollTop +=
					linkRect.bottom - containerRect.bottom + padding;
			}
		};

		const updateActiveLink = () => {
			animationFrame = 0;
			const activationPoint = Math.min(window.innerHeight * 0.25, 160);
			let nextActiveSlug = sections[0].slug;

			for (const section of sections) {
				if (section.element.getBoundingClientRect().top > activationPoint)
					break;
				nextActiveSlug = section.slug;
			}

			setActiveSlug((current) =>
				current === nextActiveSlug ? current : nextActiveSlug,
			);
			revealActiveLink(linksBySlugRef.current.get(nextActiveSlug));
		};

		const requestActiveLinkUpdate = () => {
			if (animationFrame === 0) {
				animationFrame = window.requestAnimationFrame(updateActiveLink);
			}
		};

		updateActiveLink();
		window.addEventListener("scroll", requestActiveLinkUpdate, {
			passive: true,
		});
		window.addEventListener("resize", requestActiveLinkUpdate);
		window.addEventListener("load", requestActiveLinkUpdate, { once: true });

		return () => {
			window.removeEventListener("scroll", requestActiveLinkUpdate);
			window.removeEventListener("resize", requestActiveLinkUpdate);
			window.removeEventListener("load", requestActiveLinkUpdate);
			window.cancelAnimationFrame(animationFrame);
		};
	}, [headings]);

	if (tocItems.length === 0) return null;

	return (
		<aside
			data-table-of-contents
			className="hidden self-start rounded-xl border border-cocoa-200/15 bg-cocoa-100/70 p-4 xl:sticky xl:top-6 xl:flex xl:max-h-[calc(100vh-9rem)] xl:flex-col xl:overflow-hidden"
		>
			<div className="flex items-center gap-3 text-cocoa-400">
				<div className="grid size-10 place-items-center rounded-xl bg-snow-100/70">
					<FontAwesomeIcon icon={faBookOpen} className="size-4" />
				</div>
				<h2 className="font-manrope text-base font-black">On This Page</h2>
			</div>

			<nav
				ref={headingListRef}
				className="mt-4 grid min-h-0 gap-1 overflow-y-auto"
				aria-label="Content headings"
			>
				{tocItems.map((item) => {
					const isActive = item.slug === activeSlug;
					const sharedProps = {
						href: `#${item.slug}`,
						"data-active": String(isActive),
						"data-depth": item.depth,
						"aria-current": isActive ? ("location" as const) : undefined,
						ref: (link: HTMLAnchorElement | null) => {
							if (link) {
								linksBySlugRef.current.set(item.slug, link);
							} else {
								linksBySlugRef.current.delete(item.slug);
							}
						},
					};

					if (item.depth === 1) {
						return (
							<a
								key={item.slug}
								{...sharedProps}
								className="toc-link rounded-lg border border-cocoa-200/20 bg-snow-100/60 px-3 py-2 text-sm font-semibold text-cocoa-300 transition hover:border-cocoa-200/40 hover:bg-[var(--accent-sub)] hover:text-[var(--accent-main)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-main)]"
							>
								{item.text}
							</a>
						);
					}

					if (item.depth === 2) {
						return (
							<a
								key={item.slug}
								{...sharedProps}
								className="toc-link group relative ml-3 rounded-r-lg py-2 pl-4 pr-2 text-[0.8125rem] font-semibold leading-5 text-cocoa-300 transition hover:text-[var(--accent-main)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-main)]"
							>
								<span className="toc-marker absolute inset-y-1 left-0 w-0.5 rounded-full bg-cocoa-200 transition-all group-hover:w-1 group-hover:bg-[var(--accent-main)]" />
								{item.text}
							</a>
						);
					}

					return (
						<a
							key={item.slug}
							{...sharedProps}
							className={`toc-link group relative -mt-1 rounded-r-lg py-1.5 pl-4 pr-2 text-xs font-medium leading-5 text-cocoa-300 transition hover:text-[var(--accent-main)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-main)] ${nestedMargins[item.depth]}`}
						>
							<span className="toc-marker absolute inset-y-1 left-0 w-0.5 rounded-full bg-cocoa-200 transition-all group-hover:w-1 group-hover:bg-[var(--accent-main)]" />
							{item.text}
						</a>
					);
				})}
			</nav>
		</aside>
	);
}
