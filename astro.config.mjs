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
      // Emit lastmod and drop the deprecated changefreq/priority fields
      // (ignored by Google; identical values add no signal).
      serialize: (item) => ({
        url: item.url,
        lastmod: "2026-06-02T00:00:00.000Z",
      }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
