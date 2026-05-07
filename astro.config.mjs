import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import rehypeEagerFirstImage from "./src/plugins/rehype-eager-first-image.mjs";

export default defineConfig({
  site: "https://rbeilvert.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeEagerFirstImage],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
