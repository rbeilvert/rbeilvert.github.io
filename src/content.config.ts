import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverHomeCrop: z.boolean().default(false),
      logo: image().optional(),
      logoAlt: z.string().optional(),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
