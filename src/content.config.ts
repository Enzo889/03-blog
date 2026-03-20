import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ base: "src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      author: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
};
