import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    // ререндер при изменениях
    react(),
    // использование svg
    svgr(),

    // Показывает размер пандлов как вебпаковский analizer
    visualizer({
      open: true,
      filename: 'stats.html',
      template: 'treemap',
    }),
  ],
  build: {
    // Минификация
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});

