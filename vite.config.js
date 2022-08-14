import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';

const BASE_URL = process.env.BASE_URL || '';
console.log(BASE_URL);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [svelte({
    preprocess: autoPreprocess()
  })],
  //base: BASE_URL + '/'
  base: `/${BASE_URL}/`
})
