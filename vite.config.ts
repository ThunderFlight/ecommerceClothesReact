import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@/pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@/styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: '@/store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['./src/styles/main.scss'],
        additionalData: `
        @import '@/styles/main.scss';
        `,
      },
    },
  },
});
