import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import * as path from 'path'

export default defineConfig({
  integrations: [tailwind(), react()],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
})
