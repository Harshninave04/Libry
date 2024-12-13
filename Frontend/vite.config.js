import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Ensure react-icons is not externalized
    },
  },
  resolve: {
    alias: {
      'react-icons': 'react-icons', // Explicitly resolve react-icons
    },
  },
});
