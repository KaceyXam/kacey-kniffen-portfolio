import * as dotenv from "dotenv";
dotenv.config();
import { defineConfig } from "astro/config";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs()],
});
