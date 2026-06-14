export interface IProjectMetadata {
	name: string;
	description: string;
	logo: string;
	mark?: string | undefined;
	tags?: string[] | undefined;
	accent: IProjectAccent;
	createdAt: Date;
	publishedAt: Date;
	updatedAt: Date;
}

export interface IProjectAccent {
	main: string;
	sub?: string | undefined;
}
