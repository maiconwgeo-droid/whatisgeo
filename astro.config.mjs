// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { jsonLdScript } from './src/lib/schema/base';

export default defineConfig({
  site: 'https://whatisgeo.io',
  integrations: [
    starlight({
      title: 'What Is Geo',
      logo: {
        light: './src/assets/logo-purple-wig.svg',
        dark: './src/assets/logo-purple-light-wig.svg',
        replacesTitle: true,
      },
      // CORREÇÃO: Define qual dos locales abaixo é o padrão
      defaultLocale: 'root',
      customCss: [
        './src/styles/global.css',
      ],
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
        en: { 
          label: 'English', 
          lang: 'en-US' 
        },
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'alternate icon',
            href: '/favicon.webp',
            type: 'image/webp',
          },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: jsonLdScript,
        },
      ],
      sidebar: [
        { 
          label: '01. Introdução',
          translations: { 
            en: '01. Introduction',
          },
          autogenerate: { directory: '01-intro' },
        },
        {
          label: '02. Fundamentos Semânticos',
          translations: { en: '02. Semantic Fundamentals' },
          autogenerate: { directory: '02-fundamentals' },
        },
        {
          label: '03. Implementação Técnica',
          translations: { en: '03. Technical Implementation' },
          autogenerate: { directory: '03-implementation' },
        },
        {
          label: '04. Lab de Experimentos',
          translations: { en: '04. Experiments Lab' },
          autogenerate: { directory: '04-experiments' },
          // A mágica: recolher por padrão se quiser focar na intro
          collapsed: false 
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});