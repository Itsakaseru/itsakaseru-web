export const formatDateMonthYear = (date: Date) =>
	new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(date);

export const formatDate = (date: Date) =>
	new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date);

export const formatMonth = (date: Date) =>
	new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date);

export const formatYear = (date: Date) =>
	new Intl.DateTimeFormat("en-GB", { year: "numeric" }).format(date);
