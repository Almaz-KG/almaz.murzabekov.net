import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
  trailingSlash: 'ignore', // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
  site: 'https://almaz.murzabekov.net/',
  base: '/',
  publicDir: 'static',
  public: 'static',
});
