import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
	const body = import.meta.env.PROD
		? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site)}\n`
		: "User-agent: *\nDisallow: /\n";

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
