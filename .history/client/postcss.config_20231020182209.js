import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "postcss.config.js", 
  },
  optimizeDeps: {
    include: ["tailwindcss", "autoprefixer"], ncludes these le
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
});
