import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@careminder/fonts': '/node_modules/@careminder/fonts',
    },
  },
});
