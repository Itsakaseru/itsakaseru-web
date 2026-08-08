import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./BlogReadingProgress.css";

interface BlogReadingProgressProps {
	contentSelector?: string;
}

function createProgressPath(width: number, height: number) {
	const inset = 2;
	const right = width - inset;
	const bottom = height - inset;
	const radius = Math.min(
		10,
		(width - inset * 2) / 2,
		(height - inset * 2) / 2,
	);

	return [
		`M ${width / 2} ${bottom}`,
		`H ${inset + radius}`,
		`A ${radius} ${radius} 0 0 1 ${inset} ${bottom - radius}`,
		`V ${inset + radius}`,
		`A ${radius} ${radius} 0 0 1 ${inset + radius} ${inset}`,
		`H ${right - radius}`,
		`A ${radius} ${radius} 0 0 1 ${right} ${inset + radius}`,
		`V ${bottom - radius}`,
		`A ${radius} ${radius} 0 0 1 ${right - radius} ${bottom}`,
		`H ${width / 2}`,
	].join(" ");
}

export default function BlogReadingProgress({
	contentSelector = ".markdown-content",
}: BlogReadingProgressProps) {
	const progressTrackRef = useRef<HTMLDivElement>(null);
	const [percentage, setPercentage] = useState(0);
	const [progressPath, setProgressPath] = useState("");

	useEffect(() => {
		const articleContent = document.querySelector<HTMLElement>(contentSelector);
		const progressTrack = progressTrackRef.current;
		if (!articleContent || !progressTrack) return;

		let animationFrame = 0;
		let pathWidth = 0;
		let pathHeight = 0;

		const updateProgress = () => {
			animationFrame = 0;
			const width = progressTrack.clientWidth;
			const height = progressTrack.clientHeight;

			if (width !== pathWidth || height !== pathHeight) {
				pathWidth = width;
				pathHeight = height;
				setProgressPath(createProgressPath(width, height));
			}

			const articleTop =
				window.scrollY + articleContent.getBoundingClientRect().top;
			const scrollableDistance = Math.max(
				articleContent.offsetHeight - window.innerHeight,
				1,
			);
			const progress = Math.min(
				Math.max((window.scrollY - articleTop) / scrollableDistance, 0),
				1,
			);
			const progressAmount = progress * 100;
			const nextPercentage = Math.round(progressAmount);

			progressTrack.style.setProperty(
				"--reading-progress",
				String(progressAmount),
			);
			setPercentage((current) =>
				current === nextPercentage ? current : nextPercentage,
			);
		};

		const requestProgressUpdate = () => {
			if (animationFrame === 0) {
				animationFrame = window.requestAnimationFrame(updateProgress);
			}
		};

		updateProgress();
		window.addEventListener("scroll", requestProgressUpdate, { passive: true });
		window.addEventListener("resize", requestProgressUpdate);

		return () => {
			window.removeEventListener("scroll", requestProgressUpdate);
			window.removeEventListener("resize", requestProgressUpdate);
			window.cancelAnimationFrame(animationFrame);
		};
	}, [contentSelector]);

	return (
		<div
			data-reading-controls
			className="fixed right-5 bottom-5 z-40 flex items-center gap-3"
		>
			<button
				type="button"
				data-visible={String(percentage > 0)}
				aria-label="Scroll to top"
				className="scroll-top-button grid size-12 shrink-0 place-items-center rounded-full border border-cocoa-200/20 bg-(--accent-main) text-snow-100 shadow-xl shadow-cocoa-900/15 hover:brightness-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-(--accent-main) cursor-pointer"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<FontAwesomeIcon icon={faArrowUp} className="size-4" />
			</button>

			<div
				role="progressbar"
				aria-label="Article reading progress"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percentage}
				className="rounded-2xl border border-cocoa-200/20 bg-snow-100/90 p-2 text-cocoa-500 shadow-2xl shadow-cocoa-900/15 backdrop-blur-md"
			>
				<div
					ref={progressTrackRef}
					data-complete={String(percentage === 100)}
					className="reading-progress-track rounded-xl p-1"
				>
					<svg className="reading-progress-border" aria-hidden="true">
						<path
							d={progressPath || undefined}
							className="reading-progress-border-track"
							pathLength={100}
						/>
						<path
							d={progressPath || undefined}
							className="reading-progress-border-value"
							pathLength={100}
						/>
					</svg>
					<div className="flex items-center gap-3 px-2 py-1">
						<div className="grid size-12 place-items-center font-manrope text-sm font-black">
							<span className="text-(--accent-main)">{percentage}%</span>
						</div>
						<div className="hidden md:block text-(--accent-main)">
							<p className="text-[0.65rem] font-bold uppercase tracking-[0.16em]">
								Progress
							</p>
							<p className="font-manrope text-sm font-black leading-none">
								Reading
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
