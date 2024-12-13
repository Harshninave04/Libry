import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons': 'react-icons',
    },
  },
  optimizeDeps: {
    include: ['react-icons'],
  },
});
