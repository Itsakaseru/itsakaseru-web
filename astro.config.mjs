// @ts-check

import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

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

// https://astro.build/config
export default defineConfig({
	site: "https://itsakaseru.me",
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
		sitemap({
			filter: (page) =>
				!["https://itsakaseru.me/blog/", "https://itsakaseru.me/fun/"].includes(
					page,
				),
		}),
		react(),
		mdx(),
		icon(),
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
