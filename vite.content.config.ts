import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content-script/index.tsx'),
      },
      output: {
        entryFileNames: 'content.js',
        format: 'iife',
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
  },
});
