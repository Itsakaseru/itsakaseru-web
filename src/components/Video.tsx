interface VideoProps {
	youtubeId: string;
	title: string;
	caption?: string;
}

export default function Video({ youtubeId, title, caption }: VideoProps) {
	const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}`;
	const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

	return (
		<figure
			id="video"
			className="my-6 overflow-hidden rounded-xl border border-cocoa-200/30 bg-snow-100/80 p-2"
		>
			<div className="aspect-video overflow-hidden rounded-lg bg-cocoa-900/5">
				<iframe
					className="h-full w-full"
					src={embedUrl}
					title={title}
					loading="lazy"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>

			<figcaption className="flex flex-col gap-2 px-1 pt-2 text-xs font-light leading-5 text-cocoa-300 sm:flex-row sm:items-center sm:justify-between">
				<span>{caption ?? title}</span>
				<a href={youtubeUrl} target="_blank" rel="noreferrer">
					Watch on YouTube
				</a>
			</figcaption>
		</figure>
	);
}
