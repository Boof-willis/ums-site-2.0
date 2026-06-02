import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Production site URL. Update if the canonical domain changes.
export const SITE_URL = "https://utahsmovingandstorage.com";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/thank-you") &&
        !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
