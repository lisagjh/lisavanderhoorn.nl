// @ts-check
import { defineConfig } from "astro/config";
import path from "path";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lisavanderhoorn.nl/",
  output: "static",
  integrations: [react(), sitemap()],
  server: {
    port: 4321, // Set the port for the development server
  },
});