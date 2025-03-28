import { defineConfig } from 'astro';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// Obtén el nombre del repositorio desde package.json o variable de entorno
const SITE_BASE = process.env.BASE_URL || '/astro-sassify-template/';

// https://astro.build/config
export default defineConfig({
  site: 'https://profemprestes.github.io',
  base: SITE_BASE, // Establece la ruta base al nombre de tu repositorio
  integrations: [tailwind(), alpinejs()],
  output: 'static',
  build: {
    assets: 'assets',
  }
});
