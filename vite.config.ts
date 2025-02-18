import react from '@vitejs/plugin-react';

import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

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
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("pages")) {
            return "pages";
          }
          if (id.includes("features")) {
            return "features";
          }
        },
        // manualChunks: { Дефолтная
        //   vendor: ['react', 'react-dom'],
        // },
      },
    },
  },
});

