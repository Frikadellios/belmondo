import * as path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import autoprefixer from 'autoprefixer'
import cssDiscardComments from 'postcss-discard-comments'
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const ENV = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '')
const IS_PRODUCTION = ENV.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [
    tsconfigPaths(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue(),
    vueJsx(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
