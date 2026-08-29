import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
	const body = [
		"Contact: mailto:security@skyencripttion.com",
		"Expires: 2027-08-29T00:00:00Z",
		`Canonical: ${new URL(".well-known/security.txt", site)}`,
		"Preferred-Languages: en, id",
		"",
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
