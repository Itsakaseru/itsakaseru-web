import type { ImageMetadata } from "astro";
import type { IAccent } from "./common.ts";

export interface IProjectMetadata {
	name: string;
	description: string;
	logo: ImageMetadata;
	mark?: string | undefined;
	tags?: string[] | undefined;
	accent: IAccent;
	createdAt: Date;
	publishedAt: Date;
	updatedAt: Date;
}
