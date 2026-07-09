import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomthatcher.github.io',
  base: '/personal-portfolio/', // ← Added the critical trailing slash here
});