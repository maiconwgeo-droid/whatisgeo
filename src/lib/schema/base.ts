// src/lib/schema/base.ts
export const BASE_URL = 'https://whatisgeo.io';
export const PERSON_ID = 'https://geocited.com.br/sobre#maicon-willi';
export const ORG_ID = 'https://geocited.com.br/sobre#geo-cited';
export const PROJECT_ID = `${BASE_URL}/#project`;

export const commonSchema = {
  organization: {
    "@type": "Organization",
    "@id": ORG_ID,
    "name": "Geo Cited",
    "url": "https://geocited.com.br",
    "logo": `${BASE_URL}/favicon.svg`
  },
  founder: {
    "@type": "Person",
    "@id": PERSON_ID,
    "name": "Maicon Willi",
    "jobTitle": "Head of Research",
    "url": PERSON_ID,
    "founderOf": { "@id": ORG_ID },
    "owns": [
      { "@id": "https://geocited.com.br/sobre#geo-cited"},
      { "@id": BASE_URL }
    ],
    "knowsAbout": ["Generative Engine Optimization", "RAG", "LLM Semantic Analysis"]
  },
  project: {
    "@type": "ResearchProject",
    "@id": PROJECT_ID,
    "name": "WhatIsGeo",
    "url": BASE_URL,
    "description": "Documentação R&D sobre Generative Engine Optimization.",
    "publisher": { "@id": ORG_ID },
    "author": { "@id": PERSON_ID }
  }
};

export const jsonLdScript = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    commonSchema.organization,
    commonSchema.founder,
    commonSchema.project
  ]
});