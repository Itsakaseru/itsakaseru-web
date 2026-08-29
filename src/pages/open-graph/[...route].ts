import { getCollection } from "astro:content";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
	faBoxArchive,
	faCoffee,
	faNewspaper,
	faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { type OGImageOptions, OGImageRoute } from "astro-og-canvas";
import sharp from "sharp";
import { hexToRGB } from "@/utils/colour";

type PageKind = "project" | "blog" | "general";
type SemanticIcon = "archive" | "newspaper" | "coffee" | "warning";

interface OGPage {
	title: string;
	description: string;
	kind: PageKind;
	label: string;
	accent?: string;
	logoPath?: string;
	coverPath?: string;
	icon?: SemanticIcon;
	isList?: boolean;
}

const BLOG_DESCRIPTION =
	"A collection of tutorials, opinions, updates, information that is hopefully useful, personal thoughts, and other things I find interesting or worth sharing.";
const SAKII_IMAGE_PATH = path.resolve("src/assets/sakii.png");
const BRAND_LOGO_PATH = path.resolve("public/logo.svg");

const semanticIcons: Record<SemanticIcon, IconDefinition> = {
	archive: faBoxArchive,
	newspaper: faNewspaper,
	coffee: faCoffee,
	warning: faTriangleExclamation,
};

const renderSemanticIcon = (name: SemanticIcon) => {
	const [width, height, , , pathData] = semanticIcons[name].icon;
	const paths = (Array.isArray(pathData) ? pathData : [pathData])
		.map((data) => `<path fill="#5c403a" d="${data}" />`)
		.join("");

	return `<svg x="18" y="18" width="76" height="76" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">${paths}</svg>`;
};

// List of collections
const [projects, posts] = await Promise.all([
	getCollection("projects"),
	getCollection("blog"),
]);

const pages: Record<string, OGPage> = {
	// Main pages
	index: {
		title: "Itsakaseru.",
		description:
			"My personal website, where I share my portfolio, projects, blog posts, experiments, fun little things, random stuff, and a bit about myself.",
		kind: "general",
		label: "Personal Website ",
		logoPath: SAKII_IMAGE_PATH,
	},
	about: {
		title: "About me.",
		description:
			"You can find out more about me here, but in short: I’m just another human living on Earth. Nice to meet you!",
		kind: "general",
		label: "Profile",
		logoPath: SAKII_IMAGE_PATH,
	},
	projects: {
		title: "Project List.",
		description:
			"A collection of software, web, game, and other projects I’ve worked on throughout my life, including things I’ve built for fun, learning, experimentation, and everything in between.",
		kind: "project",
		label: `${projects.length} projects`,
		icon: "archive",
		isList: true,
	},
	blog: {
		title: "Blog List.",
		description: BLOG_DESCRIPTION,
		kind: "blog",
		label: `${posts.length} ${posts.length === 1 ? "post" : "posts"}`,
		icon: "newspaper",
		isList: true,
	},
	fun: {
		title: "Fun Blog.",
		description:
			"A collection of highly opinionated thoughts, probably unchecked and possibly inaccurate information, jokes, memes, random things, strange things, and other stuff that may be fun, funny, or hopefully entertaining xD.",
		kind: "general",
		label: "Coming soon ",
		icon: "coffee",
	},
	"404": {
		title: "Page not found.",
		description:
			"Oops, looks like the page you're looking for couldn't be found. Maybe it moved, disappeared, or never existed in the first place.",
		kind: "general",
		label: "Error 404",
		icon: "warning",
	},
};

// Projects page
for (const project of projects) {
	const entryDirectory = path.dirname(path.resolve(project.filePath ?? ""));
	pages[`projects/${project.id}`] = {
		title: `${project.data.name}.`,
		description: project.data.description,
		kind: "project",
		accent: project.data.accent.main,
		logoPath: path.join(
			entryDirectory,
			"assets",
			`logo.${project.data.logo.format}`,
		),
		label: "Project",
	};
}

// Posts page
for (const post of posts) {
	const entryDirectory = path.dirname(path.resolve(post.filePath ?? ""));
	pages[`blog/${post.id}`] = {
		title: post.data.title,
		description: post.data.description,
		kind: "blog",
		accent: post.data.accent.main,
		coverPath: post.data.hero
			? path.join(
					entryDirectory,
					"assets",
					`hero.${post.data.hero.wide.img.format}`,
				)
			: undefined,
		label: post.data.category,
	};
}

// Blog index page x
const blogPageCount = Math.ceil(posts.length / 10);
for (let page = 2; page <= blogPageCount; page++) {
	pages[`blog/${page}`] = {
		title: `Blog List / Page ${page}.`,
		description: BLOG_DESCRIPTION,
		kind: "blog",
		label: "Journal archive",
		icon: "newspaper",
		isList: true,
	};
}

const titleFont = path.resolve(
	"src/assets/fonts/manrope/manrope-variable.woff2",
);
const bodyFont = path.resolve("src/assets/fonts/geist/geist-variable.woff2");
const utilityFont = path.resolve(
	"src/assets/fonts/geist/geist_latin-700-normal.ttf",
);
const cacheDirectory = path.resolve("node_modules/.astro-og-canvas");
const backgroundDirectory = path.join(cacheDirectory, "backgrounds");
await rm(cacheDirectory, { recursive: true, force: true });
await mkdir(backgroundDirectory, { recursive: true });
const spacerPath = path.join(backgroundDirectory, "spacer.png");
await sharp({
	create: { width: 1, height: 1, channels: 4, background: "#00000000" },
})
	.png()
	.toFile(spacerPath);

const escapeXML = (value: string) =>
	value.replace(
		/[<>&"']/g,
		(character) =>
			({
				"<": "&lt;",
				">": "&gt;",
				"&": "&amp;",
				'"': "&quot;",
				"'": "&apos;",
			})[character] ?? character,
	);

const renderGeistText = async (
	text: string,
	fontSize: number,
	color: string,
	letterSpacing: number,
) => {
	const { data, info } = await sharp({
		text: {
			text: `<span foreground="${color}" letter_spacing="${letterSpacing * 0.75 * 1024}">${escapeXML(text)}</span>`,
			font: `Geist Bold ${fontSize * 0.75}`,
			fontfile: utilityFont,
			dpi: 96,
			rgba: true,
		},
	})
		.png()
		.toBuffer({ resolveWithObject: true });

	return { data, width: info.width, height: info.height };
};

const safeAccent = (accent?: string) =>
	accent && /^#[\da-f]{6}$/i.test(accent) ? accent : "#4e342e";

const approximateTextWidth = (
	value: string,
	fontSize: number,
	widthMultiplier = 1,
) =>
	[...value].reduce((width, character) => {
		if (/\s/.test(character)) return width + fontSize * 0.28;
		if (/[mwMW@%&]/.test(character)) return width + fontSize * 0.82;
		if (/[A-Z0-9]/.test(character)) return width + fontSize * 0.64;
		if (/[.,:;!'|ijlI]/.test(character)) return width + fontSize * 0.28;
		return width + fontSize * 0.52;
	}, 0) * widthMultiplier;

const clampText = (
	value: string,
	maxLines: number,
	maxWidth: number,
	fontSize: number,
	widthMultiplier = 1,
) => {
	const words = value.trim().split(/\s+/);
	const lines = [""];
	let overflowed = false;

	for (const word of words) {
		const lineIndex = lines.length - 1;
		const candidate = lines[lineIndex] ? `${lines[lineIndex]} ${word}` : word;
		if (
			approximateTextWidth(candidate, fontSize, widthMultiplier) <= maxWidth
		) {
			lines[lineIndex] = candidate;
		} else if (lines.length < maxLines) {
			lines.push(word);
		} else {
			overflowed = true;
			break;
		}
	}

	if (overflowed) {
		const lastLine = lines.length - 1;
		while (
			lines[lastLine] &&
			approximateTextWidth(`${lines[lastLine]}…`, fontSize, widthMultiplier) >
				maxWidth
		) {
			lines[lastLine] = lines[lastLine].slice(0, -1).trimEnd();
		}
		lines[lastLine] += "…";
	}

	return lines.join("\n");
};

const getFooter = (route: string, kind: PageKind) => {
	if (route === "index") return "ITSAKASERU.ME";

	let section = route.toUpperCase();
	if (kind === "blog") section = "BLOG";
	else if (kind === "project") section = "PROJECTS";
	else if (route === "404") section = "ERROR";

	return `ITSAKASERU.ME / ${section}`;
};

const createCardBackground = async (route: string, page: OGPage) => {
	const outputPath = path.join(
		backgroundDirectory,
		`${route.replaceAll("/", "--")}-card.png`,
	);
	const accent = safeAccent(page.accent);
	const labelText = page.label.toUpperCase();
	const showIconTile = page.kind !== "blog" || page.isList;
	const [badgeText, footerText] = await Promise.all([
		renderGeistText(labelText, 14, "#ffffff", 2),
		renderGeistText(getFooter(route, page.kind), 13, "#755750", 2),
	]);
	const badgeWidth = Math.min(360, badgeText.width + 40);
	const svg = `
		<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stop-color="${accent}" />
					<stop offset="1" stop-color="${accent}" stop-opacity=".82" />
				</linearGradient>
				<radialGradient id="light">
					<stop offset="0" stop-color="#ffffff" stop-opacity=".28" />
					<stop offset="1" stop-color="#ffffff" stop-opacity="0" />
				</radialGradient>
			</defs>
			<rect width="1200" height="630" fill="#f7f4f3" />
			<rect x="24" y="24" width="1152" height="582" rx="28" fill="#ffffff" stroke="#c8a39b" stroke-opacity=".28" />
			<rect x="40" y="40" width="1120" height="180" rx="20" fill="url(#panel)" />
			<circle cx="760" cy="215" r="210" fill="url(#light)" />
			${showIconTile ? '<rect x="992" y="58" width="144" height="144" rx="25" fill="#ffffff" fill-opacity=".94" />' : ""}
		</svg>`;

	const composites: sharp.OverlayOptions[] = [
		{ input: Buffer.from(svg) },
		{
			input: footerText.data,
			left: 1132 - footerText.width,
			top: 574 - footerText.height,
		},
	];
	if (page.coverPath) {
		const coverMask = Buffer.from(
			'<svg width="1120" height="180"><rect width="1120" height="180" rx="20" fill="white"/></svg>',
		);
		const coverShade = Buffer.from(`
			<svg width="1120" height="180" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0" stop-color="#2b1611" stop-opacity=".5" />
						<stop offset=".7" stop-color="#2b1611" stop-opacity=".2" />
						<stop offset="1" stop-color="#2b1611" stop-opacity=".08" />
					</linearGradient>
				</defs>
				<rect width="1120" height="180" rx="20" fill="url(#shade)" />
			</svg>`);
		const cover = await sharp(page.coverPath)
			.resize(1120, 180, { fit: "cover" })
			.composite([
				{ input: coverMask, blend: "dest-in" },
				{ input: coverShade },
			])
			.png()
			.toBuffer();
		composites.push({ input: cover, left: 40, top: 40 });
		const blurredBadge = await sharp(cover)
			.extract({ left: 28, top: 35, width: badgeWidth, height: 40 })
			.blur(10)
			.composite([
				{
					input: Buffer.from(
						`<svg width="${badgeWidth}" height="40"><rect width="${badgeWidth}" height="40" rx="12" fill="white"/></svg>`,
					),
					blend: "dest-in",
				},
			])
			.png()
			.toBuffer();
		composites.push({ input: blurredBadge, left: 68, top: 75 });
	}
	const bannerLabel = Buffer.from(`
		<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
			<rect x="68" y="75" width="${badgeWidth}" height="40" rx="12" fill="#ffffff" fill-opacity=".18" stroke="#ffffff" stroke-opacity=".28" />
		</svg>`);
	composites.push({ input: bannerLabel });
	composites.push({
		input: badgeText.data,
		left: 88,
		top: 95 - Math.round(badgeText.height / 2),
	});
	if (showIconTile && page.logoPath) {
		const logo = await sharp(page.logoPath)
			.resize(112, 112, { fit: "contain" })
			.composite([
				{
					input: Buffer.from(
						'<svg width="112" height="112"><rect width="112" height="112" rx="18" fill="white"/></svg>',
					),
					blend: "dest-in",
				},
			])
			.png()
			.toBuffer();
		composites.push({ input: logo, left: 1008, top: 74 });
	} else if (showIconTile) {
		const icon = Buffer.from(`
			<svg width="112" height="112" xmlns="http://www.w3.org/2000/svg">
				${renderSemanticIcon(page.icon ?? "archive")}
			</svg>`);
		composites.push({ input: icon, left: 1008, top: 74 });
	}
	const brand = await sharp(BRAND_LOGO_PATH).resize(42, 42).png().toBuffer();
	composites.push({ input: brand, left: 68, top: 538 });

	await sharp({
		create: { width: 1200, height: 630, channels: 4, background: "#ffffff" },
	})
		.composite(composites)
		.png()
		.toFile(outputPath);

	return outputPath;
};

const { getStaticPaths, GET } = await OGImageRoute({
	pages,
	getImageOptions: async (route, page): Promise<OGImageOptions> => {
		const accent = page.accent ? hexToRGB(page.accent) : undefined;
		const accentTint = accent?.map((channel) =>
			Math.round(channel * 0.22 + 255 * 0.78),
		) as [number, number, number] | undefined;
		const background = await createCardBackground(route, page);
		const textWidth = 996;
		const titleSize = 56;
		const descriptionSize = 28;

		return {
			cacheDir: false,
			title: clampText(page.title, 2, textWidth, titleSize, 1.1),
			description: clampText(page.description, 3, textWidth, descriptionSize),
			logo: {
				path: spacerPath,
				size: [1, 54],
			},
			bgImage: { path: background, fit: "fill" },
			bgGradient: [accentTint ?? [255, 246, 244], [255, 255, 255]],
			padding: 68,
			font: {
				title: {
					color: [78, 52, 46],
					size: titleSize,
					weight: "ExtraBold",
					lineHeight: 1.02,
					families: ["Manrope"],
				},
				description: {
					color: [117, 87, 80],
					size: descriptionSize,
					weight: "Normal",
					lineHeight: 1.25,
					families: ["Geist"],
				},
			},
			fonts: [titleFont, bodyFont],
		};
	},
});

export { GET, getStaticPaths };
