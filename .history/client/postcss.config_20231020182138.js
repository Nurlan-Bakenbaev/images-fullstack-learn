import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: 'postcss.config.js', // Path to your PostCSS config file
  },
  optimizeDeps: {
    include: ['tailwindcss', 'autoprefixer'], // Ensure that Vite includes these in the bundle
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
});
