import * as path from 'node:path'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig, passthroughImageService, sharpImageService } from 'astro/config'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import autoprefixer from 'autoprefixer'
import cssDiscardComments from 'postcss-discard-comments'
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'

const ENV = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '')
const IS_PRODUCTION = ENV.NODE_ENV === 'production'
// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  image: {
    service: IS_PRODUCTION ? sharpImageService() : passthroughImageService()
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
          tailwindcss({
            config: path.resolve(import.meta.dirname, 'tailwind.config.ts')
          }),
          postCssOklabPolyfill({ preserve: true }),
          autoprefixer(),
          cssDiscardComments({ removeAll: true })
        ]
      }
    },
    ssr: {
      external: ['node:buffer', 'three']
    },
    plugins: [
      tsconfigPaths(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
  },
  integrations: [
    react(),
    tailwind({
      nesting: true,
      applyBaseStyles: false
    }),
    mdx()
  ]
})
