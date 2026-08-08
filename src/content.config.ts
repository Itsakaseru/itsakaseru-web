import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import type { IAccent } from "@/types/common.ts";

const accentSchema = z.object({
	main: z.string(),
	sub: z.string().optional(),
}) satisfies z.ZodType<IAccent>;

const projectMarkSchema = z.enum(["Featured", "Spotlight", "Unmaintained"]);

const blogCategorySchema = z.enum([
	"Updates",
	"Opinion",
	"Experiments",
	"My Experience",
	"Information",
	"Tutorial",
]);

const blogMarkSchema = z.enum(["Spotlight"]);

const blogImageSchema = z.object({
	src: z.string().min(1),
	alt: z.string().min(1),
});

const projects = defineCollection({
	loader: glob({
		base: "src/contents/projects",
		pattern: "**/*.mdx",
	}),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		logo: z.string(),
		mark: projectMarkSchema.optional(),
		accent: accentSchema,
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
		accent: accentSchema,
		documents: z.array(
			z.object({
				title: z.string(),
				url: z.string(),
				updatedAt: z.coerce.date(),
			}),
		),
	}),
});

const blog = defineCollection({
	loader: glob({
		base: "src/contents/blog",
		pattern: "**/*.mdx",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: blogCategorySchema,
		tags: z.array(z.string()).optional(),
		mark: blogMarkSchema.optional(),
		accent: accentSchema,
		hero: z
			.object({
				wide: blogImageSchema,
				thumbnail: blogImageSchema,
			})
			.optional(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
	}),
});

export const collections = { projects, about, blog };
