/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    conditions: ['svelte', 'browser'],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts',
    css: true,
  },
})
