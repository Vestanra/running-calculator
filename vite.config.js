import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the app under /running-calculator/, so the app must be
// built with that base. Output goes to `build/` to match the deploy workflow.
export default defineConfig({
  base: '/running-calculator/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
});
