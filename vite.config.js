import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /my-portfolio/, and `npm run preview` mirrors
// that; the dev server stays at the root.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/my-portfolio/' : '/',
  plugins: [react()],
  server: { port: 3000 },
}));
