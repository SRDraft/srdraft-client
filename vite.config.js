import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// const __dirname =
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      views: path.resolve(__dirname, './src/views'),
      routes: `${path.resolve(__dirname, './src/routes')}`,
      guards: `${path.resolve(__dirname, './src/guards')}`,
      store: `${path.resolve(__dirname, './src/store')}`,
      hooks: `${path.resolve(__dirname, './src/hooks')}`,
    },
  },
});
