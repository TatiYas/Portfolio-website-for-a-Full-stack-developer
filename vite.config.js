import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    root: 'src',
    base: '/Portfolio-website-for-a-Full-stack-developer/', // важный пункт!
    build: {
      outDir: '../dist',
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: '[name].js', // чтобы не было проблем с импортами
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']), // слежение за всеми partials
    ],
  };
});

