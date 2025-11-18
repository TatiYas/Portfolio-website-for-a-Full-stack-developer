import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => ({
  root: 'src',
  base: '/Portfolio-website-for-a-Full-stack-developer/', // для GitHub Pages
  build: {
    outDir: '../dist',
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
}));
