import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://profemprestes.github.io/astro-sassify-template',
  base: '/astro-sassify-template',  // Sin barra al final
  integrations: [tailwind(), alpinejs()],
  output: 'static',
  build: {
    assets: 'assets',
  }
});