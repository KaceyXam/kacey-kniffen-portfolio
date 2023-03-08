import * as dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "astro/config";

import storyblok from "@storyblok/astro";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
	integrations: [
		solidJs(),
		storyblok({
			accessToken: process.env.STORYBLOK_TOKEN,
			apiOptions: {
				region: "us",
			},
			components: {
				blogpost: "storyblok/BlogPost",
			},
		}),
	],
});
