import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  build: {
    assets: "assets",
    inlineStylesheets: "never",
  },
  integrations: [
    alpine({
      entrypoint: "/src/entrypoint",
    }),
  ],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
