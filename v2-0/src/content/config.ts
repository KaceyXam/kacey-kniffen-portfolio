import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		url: z.string(),
		thumbnail: z.string(),
	}),
});

export const collections = {
	projects: projectCollection,
};
