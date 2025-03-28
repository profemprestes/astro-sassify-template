import { defineConfig } from 'astro';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://profemprestes.github.io',
  base: '/astro-sassify-template',  // Note: removed trailing slash
  integrations: [tailwind(), alpinejs()],
  output: 'static',
  build: {
    assets: 'assets',
  }
});
