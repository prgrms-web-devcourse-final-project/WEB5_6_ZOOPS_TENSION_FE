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
        sideTab: resolve(__dirname, 'src/sidePanel/index.tsx'),
      },
      output: {
        entryFileNames: 'sidePanel.js',
        format: 'es',
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
  },
});
