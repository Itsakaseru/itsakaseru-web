import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const projectAssets = import.meta.glob<string>(
	"/src/contents/projects/**/assets/*",
	{
		eager: true,
		import: "default",
		query: "?url",
	},
);

const resolveAsset = (src: string) => {
	const match = src.match(/^\/projects\/([^/]+)\/(.+)$/);
	if (!match) return src;

	return (
		projectAssets[`/src/contents/projects/${match[1]}/assets/${match[2]}`] ??
		src
	);
};

interface GalleryItem {
	src: string;
	alt?: string;
	label: string;
	type?: "image";
}

interface GalleryProps {
	items: GalleryItem[];
	orientation?: "landscape" | "portrait";
}

export default function Gallery({
	items,
	orientation = "landscape",
}: GalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const activeItem = items[activeIndex];
	const isPortrait = orientation === "portrait";
	const figureClass = isPortrait
		? "mx-auto w-full max-w-72 sm:max-w-xs lg:max-w-[24vw]"
		: "w-full";
	const frameClass = isPortrait
		? "aspect-[9/16] w-full bg-cocoa-900/5"
		: "aspect-video w-full bg-cocoa-900/5";
	const mediaClass = "h-full w-full object-contain";
	const hasMultipleItems = items.length > 1;

	useEffect(() => {
		if (!isPreviewOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isPreviewOpen]);

	const goToPrevious = () => {
		setActiveIndex((currentIndex) =>
			currentIndex === 0 ? items.length - 1 : currentIndex - 1,
		);
	};

	const goToNext = () => {
		setActiveIndex((currentIndex) =>
			currentIndex === items.length - 1 ? 0 : currentIndex + 1,
		);
	};

	if (!activeItem) {
		return null;
	}
	const activeItemAlt = activeItem.alt ?? activeItem.label;
	const activeItemSrc = resolveAsset(activeItem.src);

	return (
		<>
			<div id="gallery" className="my-6 space-y-3">
				<figure
					className={`${figureClass} p-2 overflow-hidden rounded-xl border border-cocoa-200/30 bg-snow-100/80`}
				>
					<div className={`relative overflow-hidden rounded-lg ${frameClass}`}>
						<button
							type="button"
							className="block h-full w-full cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa-500"
							onClick={() => setIsPreviewOpen(true)}
							aria-label={`Preview ${activeItemAlt}`}
						>
							<img
								key={activeItemSrc}
								className={`${mediaClass} markdown-gallery-image`}
								src={activeItemSrc}
								alt={activeItemAlt}
								loading="lazy"
							/>
						</button>

						{hasMultipleItems && (
							<div className="absolute flex inset-x-3 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
								<button
									type="button"
									className="grid size-10 place-items-center rounded-full font-bold text-lg pointer-events-auto bg-snow-100/90 text-cocoa-500 shadow-lg shadow-cocoa-900/10 transition hover:bg-cocoa-500 hover:text-snow-100 cursor-pointer"
									onClick={goToPrevious}
									aria-label="Previous gallery item"
								>
									‹
								</button>
								<button
									type="button"
									className="grid size-10 place-items-center rounded-full text-lg font-bold pointer-events-auto bg-snow-100/90 text-cocoa-500 shadow-lg shadow-cocoa-900/10 transition hover:bg-cocoa-500 hover:text-snow-100 cursor-pointer"
									onClick={goToNext}
									aria-label="Next gallery item"
								>
									›
								</button>
							</div>
						)}
					</div>

					<figcaption className="markdown-gallery-caption flex flex-col gap-2 px-1 pt-2 text-xs font-light leading-5 text-cocoa-300 sm:flex-row sm:items-center sm:justify-between">
						<span>{activeItem.label}</span>
						{hasMultipleItems && (
							<span className="font-semibold uppercase tracking-[0.14em] text-cocoa-200">
								{activeIndex + 1} / {items.length}
							</span>
						)}
					</figcaption>
				</figure>

				{hasMultipleItems && (
					<div className="flex flex-wrap justify-center gap-2">
						{items.map((item, index) => (
							<button
								key={`${resolveAsset(item.src)}-${item.alt ?? item.label}`}
								type="button"
								className={
									"h-2.5 rounded-full transition-all cursor-pointer " +
									(index === activeIndex
										? "w-8 bg-cocoa-500"
										: "w-2.5 bg-cocoa-200/50 hover:bg-cocoa-300")
								}
								onClick={() => setActiveIndex(index)}
								aria-label={`Show gallery item ${index + 1}: ${item.alt ?? item.label}`}
							/>
						))}
					</div>
				)}
			</div>

			{/* Preview Modal */}
			<AnimatePresence>
				{isPreviewOpen && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa-900/85 p-4 backdrop-blur-sm sm:p-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsPreviewOpen(false)}
						onKeyDown={(event) => {
							if (event.key === "Escape") {
								setIsPreviewOpen(false);
							}
						}}
						role="dialog"
						aria-modal="true"
						aria-label={`Preview of ${activeItemAlt}`}
					>
						<motion.div
							className="flex max-h-full w-full flex-col items-center"
							initial={{ opacity: 0, scale: 0.96, y: 12 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.96, y: 12 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							onClick={(event) => event.stopPropagation()}
						>
							<div className="relative w-fit max-w-full">
								<button
									ref={closeButtonRef}
									type="button"
									className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-snow-100/90 text-2xl leading-none text-cocoa-500 shadow-lg shadow-cocoa-900/20 transition hover:bg-cocoa-500 hover:text-snow-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snow-100 cursor-pointer"
									onClick={() => setIsPreviewOpen(false)}
									aria-label="Close image preview"
								>
									×
								</button>

								<img
									key={`preview-${activeItemSrc}`}
									className="markdown-gallery-image block max-h-[85vh] max-w-full rounded-xl bg-snow-100/5 object-contain shadow-2xl shadow-cocoa-900/40"
									src={activeItemSrc}
									alt={activeItemAlt}
								/>
							</div>
							<p className="mt-3 text-center text-sm font-light text-snow-100/85">
								{activeItem.label}
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
