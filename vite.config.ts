import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@api": "/src/api",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@styles": "/src/styles",
    },
  },
});
