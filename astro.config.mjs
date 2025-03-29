import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://profemprestes.github.io',
  base: process.env.NODE_ENV === 'production' ? '/astro-sassify-template' : '/',
  integrations: [tailwind(), alpinejs()],
  output: 'static',
  build: {
    assets: 'assets'
  },
  trailingSlash: 'never'
});