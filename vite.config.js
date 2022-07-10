import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const BASE_URL = process.env.BASE_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: `${BASE_URL}/`
})
