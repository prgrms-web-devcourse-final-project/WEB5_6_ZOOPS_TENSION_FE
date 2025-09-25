import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background/index.ts'),
        popup: resolve(__dirname, 'src/popup/index.tsx'),
        globals: resolve(__dirname, 'src/globals.css'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        format: 'es',
        inlineDynamicImports: false,
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
  },
});
