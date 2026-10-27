// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// The public address of the site. Defaults to the private test address.
// At launch, build with PUBLIC_SITE_URL=https://www.ochoglasgow.co.uk
const SITE_URL = process.env.PUBLIC_SITE_URL ?? "https://ocho-test.bastianstudioweb.workers.dev";

export default defineConfig({
  site: SITE_URL,
  // Every page is pre-rendered to plain HTML: no server is needed.
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
  vite: { plugins: [tailwindcss()] },
});
