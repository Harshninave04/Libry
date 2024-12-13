import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-icons': path.resolve(__dirname, 'node_modules/react-icons'),
    },
  },
  optimizeDeps: {
    include: ['react-icons'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
