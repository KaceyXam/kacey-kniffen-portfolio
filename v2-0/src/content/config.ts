import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		url: z.string(),
		ghLink: z.string(),
		thumbnail: z.string(),
		date: z.date(),
	}),
});

export const collections = {
	projects: projectCollection,
};
