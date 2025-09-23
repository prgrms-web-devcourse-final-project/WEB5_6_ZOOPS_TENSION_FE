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
        sidePanel: resolve(__dirname, 'src/sidePanel/index.tsx'),
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
    emptyOutDir: false,
    cssCodeSplit: true,
  },
});
