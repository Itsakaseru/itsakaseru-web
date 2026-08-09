import { faAward, faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";

const WORDS_PER_MINUTE = 220;

export const BLOG_MARK_ICONS = {
	Spotlight: faStar,
	Featured: faAward,
	New: faBookmark,
};

export function calculateReadingTime(content: string): string {
	const trimmedContent = content.trim();

	if (!trimmedContent) {
		return "0 min read";
	}

	const wordCount = trimmedContent.split(/\s+/).length;
	const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

	return `${minutes} min read`;
}
