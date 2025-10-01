import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'frontend',
  base: './', // relative paths so it works on GitHub Pages
  build: { outDir: 'dist' },
  server: { port: 3000 }
})
