import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const aboutCollections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
  }),
});

const experienceCollections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    companyName: z.string(),
    position: z.string(),
  }),
});

export const collections = {
  about: aboutCollections,
  experience: experienceCollections,
};
