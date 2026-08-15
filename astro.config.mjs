// @ts-check

import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";

import icon from "astro-icon";
import pagefind from "astro-pagefind";

/** @type {NonNullable<NonNullable<import("astro/markdown").AstroMarkdownOptions["shikiConfig"]>["transformers"]>[number]} */
const codeBlockTitleTransformer = {
	name: "code-block-title",
	pre(node) {
		const rawMeta = this.options.meta?.__raw;
		if (!rawMeta) return;

		const match = /(?:^|\s)title=(?:"([^"]*)"|'([^']*)'|(\S+))/.exec(rawMeta);
		const title = match
			?.slice(1)
			.find((value) => value !== undefined)
			?.trim();
		if (!title) return;

		node.properties["data-code-title"] = title;
		node.children.unshift({
			type: "element",
			tagName: "span",
			properties: { className: ["markdown-code-title"] },
			children: [{ type: "text", value: title }],
		});
	},
};

const site = new URL(process.env.SITE_URL || "https://itsakaseru.me");
const isProduction = process.env.NODE_ENV === "production";
const excludedSitemapPages = new Set(
	["/404/", "/fun/"].map((pathname) => new URL(pathname, site).toString()),
);

// https://astro.build/config
export default defineConfig({
	site: site.toString(),
	env: {
		schema: {
			SITE_URL: envField.string({
				context: "server",
				access: "public",
				optional: true,
			}),
			RAILPACK_DEPLOY_APT_PACKAGES: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			GOOGLE_ANALYTICS_ID: envField.string({
				context: "server",
				access: "public",
				optional: true,
			}),
		},
	},
	markdown: {
		processor: satteri({
			features: {
				smartPunctuation: true,
				subscript: true,
				superscript: true,
				wikilinks: true,
			},
			mdastPlugins: [
				{
					name: "title-only-code-fence",
					code(node, context) {
						if (!node.lang?.startsWith("title=")) return;

						context.setProperty(
							node,
							"meta",
							[node.lang, node.meta].filter(Boolean).join(" "),
						);
						context.setProperty(node, "lang", "plaintext");
					},
				},
			],
		}),
		shikiConfig: {
			theme: "css-variables",
			transformers: [codeBlockTitleTransformer],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		partytown({
			config: { forward: ["dataLayer.push"] },
		}),
		...(isProduction
			? [
					sitemap({
						filter: (page) => !excludedSitemapPages.has(page),
					}),
				]
			: []),
		react(),
		mdx(),
		icon(),
		pagefind(),
	],

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Geist",
			cssVariable: "--font-geist",
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Manrope",
			cssVariable: "--font-manrope",
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
	],
});
