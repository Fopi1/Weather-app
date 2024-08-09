import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      "@ForecastPageIcons": path.resolve(__dirname, "./src/icons/ForecastPage"),
      "@DetailedForecastPageIcons": path.resolve(
        __dirname,
        "./src/icons/DetailedForecastPage"
      ),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
});
