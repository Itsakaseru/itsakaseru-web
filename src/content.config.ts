import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({
		base: "src/contents/projects",
		pattern: "**/*.mdx",
	}),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		logo: z.string(),
		mark: z.string().optional(),
		accent: z.object({
			main: z.string(),
			sub: z.string().optional(),
		}),
		tags: z.array(z.string()).optional(),
		links: z
			.array(
				z.object({
					text: z.string(),
					url: z.string(),
				}),
			)
			.optional(),
		details: z
			.array(
				z.object({
					title: z.string(),
					content: z.string(),
				}),
			)
			.optional(),
		createdAt: z.coerce.date(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
	}),
});

const about = defineCollection({
	loader: glob({
		base: "src/contents/about",
		pattern: "**/*.mdx",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		accent: z.object({
			main: z.string(),
			sub: z.string().optional(),
		}),
		documents: z.array(
			z.object({
				title: z.string(),
				url: z.string(),
				updatedAt: z.coerce.date(),
			}),
		),
	}),
});

export const collections = { projects, about };
