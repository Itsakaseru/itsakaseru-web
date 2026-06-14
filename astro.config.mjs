// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://itsakaseru.me",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		sitemap({
			filter: (page) => !["https://itsakaseru.me/blog/", "https://itsakaseru.me/fun/"].includes(page),
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
