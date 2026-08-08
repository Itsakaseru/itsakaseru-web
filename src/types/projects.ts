import type { IAccent } from "./common.ts";

export interface IProjectMetadata {
	name: string;
	description: string;
	logo: string;
	mark?: string | undefined;
	tags?: string[] | undefined;
	accent: IAccent;
	createdAt: Date;
	publishedAt: Date;
	updatedAt: Date;
}
