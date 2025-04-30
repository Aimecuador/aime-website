import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import * as path from "path";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://www.aimecuador.org',
  
  integrations: [tailwind(), react(), sitemap()],

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
});