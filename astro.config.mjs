// @ts-check
import { defineConfig } from "astro/config";
import path from "path";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://lisavanderhoorn.nl/",
  output: "static",
  integrations: [react(), sitemap(), svelte()],
  server: {
    port: 4321, // Set the port for the development server
  },
});