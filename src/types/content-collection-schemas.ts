import { z } from "astro/zod";
import uniqolor from "uniqolor";

function getDefaultColor() {
	return uniqolor.random({ saturation: 90, lightness: [70, 90] }).color;
}

export const postSchema = z.object({
	isDraft: z.boolean().default(true),
	icon: z
		.object({
			title: z.string(),
			name: z.string(),
		})
		.default({
			name: "material-symbols:article-outline-rounded",
			title: "Article Icon",
		}),
	headline: z.string().max(100),
	subHeadline: z.string(),
	excerpt: z.string().min(20).max(300),
	series: z.string().optional(),
	category: z.string().default("unsorted"),
	tags: z.array(z.string()).default(["unsorted"]),
	themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
	publishDate: z.date(),
	lastModifiedDate: z.date().optional(),
	permalink: z.string().optional(),
});

export const shortpostSchema = z.object({
	headline: z.string(),
	publishDate: z.date(),
	category: z.string().default("unsorted"),
	social: z
		.object({
			threads: z.string().optional(),
		})
		.optional(),
	themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
});

// Website Global Configurations
export const websiteSchema = z.object({
	setting: z.object({
		projectUpdateBadgeUrl: z.string().default(""),
		githubCommentRepo: z.string().default(""),
		verification: z
			.object({
				google: z.string().default(""),
				bing: z.string().default(""),
				shenma: z.string().default(""),
				baidu: z.string().default(""),
			})
			.default({}),
	}),
	brand: z.object({
		name: z.string(),
		slogan: z.string(),
		description: z.string(),
		themeColor: z.string(),
		thumbnail: z.object({
			width: z.number(),
			height: z.number(),
			src: z.string(),
			alt: z.string(),
		}),
		copyright: z.string(),
		socials: z.array(
			z.object({
				name: z.string(),
				iconName: z.string(),
				url: z.string(),
			}),
		),
		author: z
			.object({
				name: z.string(),
				url: z.string().optional(),
			})
			.optional(),
		publisher: z
			.object({
				name: z.string(),
				url: z.string().optional(),
			})
			.optional(),
		supportMe: z
			.object({
				githubUrl: z.string().optional(),
			})
			.optional(),
	}),
	navigation: z.array(
		z.object({
			iconName: z.string(),
			name: z.string(),
			url: z.string(),
		}),
	),
});
