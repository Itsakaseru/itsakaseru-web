import { faAward, faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";

const WORDS_PER_MINUTE = 265;
const FIRST_IMAGE_SECONDS = 12;
const MIN_IMAGE_SECONDS = 3;
const MARKDOWN_IMAGE_PATTERN = /!\[[^\]]*\]\([^\n)]*(?:\)[^\n)]*)?\)/g;
const IMAGE_ELEMENT_PATTERN = /<(?:img|Image)\b[^>]*\/?\s*>/g;

export const BLOG_MARK_ICONS = {
	Spotlight: faStar,
	Featured: faAward,
	New: faBookmark,
};

export function calculateReadingTime(content: string): string {
	let imageCount = 0;
	const textContent = content
		.replace(MARKDOWN_IMAGE_PATTERN, () => {
			imageCount++;
			return " ";
		})
		.replace(IMAGE_ELEMENT_PATTERN, () => {
			imageCount++;
			return " ";
		})
		.trim();

	if (!textContent && imageCount === 0) {
		return "0 min read";
	}

	const wordCount = textContent ? textContent.split(/\s+/).length : 0;
	const textSeconds = (wordCount / WORDS_PER_MINUTE) * 60;
	const imageSeconds = Array.from({ length: imageCount }, (_, index) =>
		Math.max(FIRST_IMAGE_SECONDS - index, MIN_IMAGE_SECONDS),
	).reduce((total, seconds) => total + seconds, 0);
	const minutes = Math.ceil((textSeconds + imageSeconds) / 60);

	return `${minutes} min read`;
}
