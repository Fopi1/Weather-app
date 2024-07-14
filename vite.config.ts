import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      // ForecastPage
      "@locationIcon": path.resolve(
        __dirname,
        "./src/icons/ForecastPage/searchBar/location.svg"
      ),
      "@eyeIcon": path.resolve(
        __dirname,
        "./src/icons/ForecastPage/detailedInformation/Eye.svg"
      ),
      "@waterDropIcon": path.resolve(
        __dirname,
        "./src/icons/ForecastPage/detailedInformation/Water Drop.svg"
      ),
      "@windIcon": path.resolve(
        __dirname,
        "./src/icons/ForecastPage/detailedInformation/Wind.svg"
      ),
      "@sunIcon": path.resolve(
        __dirname,
        "./src/icons/ForecastPage/detailedInformation/Sun.svg"
      ),
      // DetailedForecastPage
      "@settingsIcon": path.resolve(
        __dirname,
        "./src/icons/DetailedForecastPage/navbar/settings.svg"
      ),
      "@geoHintIcon": path.resolve(
        __dirname,
        "./src/icons/DetailedForecastPage/navbar/geoHint.svg"
      ),
    },
  },
  plugins: [react()],
});
