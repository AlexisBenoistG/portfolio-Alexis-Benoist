import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-Alexis-Benoist/",
   build: {
    outDir: "dist",
  }
});
