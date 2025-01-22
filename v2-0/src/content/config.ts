import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        url: z.string(),
        ghLink: z.string().optional(),
        thumbnail: z.string(),
        date: z.date(),
        draft: z.boolean(),
    }),
});

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        thumbnail: z.string(),
        draft: z.boolean(),
    }),
});

export const collections = {
    projects: projectCollection,
    blog: blogCollection,
};
