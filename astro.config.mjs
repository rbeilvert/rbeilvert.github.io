import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";
import satteriEagerFirstImage from "./src/plugins/satteri-eager-first-image.mjs";

export default defineConfig({
  site: "https://rbeilvert.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [satteriEagerFirstImage] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
