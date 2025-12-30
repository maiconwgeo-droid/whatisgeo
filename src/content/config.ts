// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const docsCollection = defineCollection({
  type: 'content',
  // docsSchema é uma função, então precisamos chamar e fazer merge
  schema: (context) => 
    docsSchema()(context).extend({
      // Campos para JSON-LD
      schemaType: z.enum([
        'TechArticle',
        'ScholarlyArticle', 
        'HowTo',
        'DefinedTerm',
        'Experiment' // custom para experimentos
      ]).optional(),
      
      // Metadata semântica
      keywords: z.array(z.string()).optional(),
      about: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        sameAs: z.string().optional(), // Wikidata/Wikipedia
      })).optional(),
      
      // Relacionamentos
      relatedArticles: z.array(z.object({
        slug: z.string(),
        context: z.string(),
      })).optional(),
      
      // Para experimentos
      experimentId: z.string().optional(),
      researchLine: z.string().optional(),
      hypothesis: z.string().optional(),
      validated: z.boolean().optional(),
      confidence: z.enum(['low', 'medium', 'high']).optional(),
      
      // Citations
      citations: z.array(z.object({
        name: z.string(),
        author: z.string().optional(),
        url: z.string().optional(),
        datePublished: z.string().optional(),
      })).optional(),
      
      // Autoria
      contributors: z.array(z.string()).optional(),
    }),
});

export const collections = {
  docs: docsCollection,
};