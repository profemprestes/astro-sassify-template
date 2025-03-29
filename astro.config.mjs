import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://profemprestes.github.io',
  base: '/astro-sassify-template',
  integrations: [tailwind(), alpinejs()],
  output: 'static',
  build: {
    assets: 'assets',
    format: 'file'
  },
  trailingSlash: 'never'
});