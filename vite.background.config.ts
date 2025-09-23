import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/background/index.ts'),

      output: {
        entryFileNames: 'background.js',
        format: 'es',
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
  },
});
