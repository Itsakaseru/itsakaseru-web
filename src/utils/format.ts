export const formatDateMonthYear = (date: Date) =>
	new Intl.DateTimeFormat("id", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(date);

export const formatDate = (date: Date) =>
	new Intl.DateTimeFormat("en-id", { day: "2-digit" }).format(date);

export const formatMonth = (date: Date) =>
	new Intl.DateTimeFormat("en-id", { month: "short" }).format(date);

export const formatYear = (date: Date) =>
	new Intl.DateTimeFormat("en-id", { year: "numeric" }).format(date);
