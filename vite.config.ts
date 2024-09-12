import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      "@WeatherIcons": path.resolve(__dirname, "./src/icons/WeatherIcons"),
      "@ForecastPageIcons": path.resolve(__dirname, "./src/icons/ForecastPage"),
      "@DetailedForecastPageIcons": path.resolve(
        __dirname,
        "./src/icons/DetailedForecastPage"
      ),
      "@SettingsPageIcons": path.resolve(__dirname, "./src/icons/SettingsPage"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
  base: "",
});
