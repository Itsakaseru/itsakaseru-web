const WORDS_PER_MINUTE = 250;

export function calculateReadingTime(content: string): string {
	const trimmedContent = content.trim();

	if (!trimmedContent) {
		return "0 min read";
	}

	const wordCount = trimmedContent.split(/\s+/).length;
	const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

	return `${minutes} min read`;
}
