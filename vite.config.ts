import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-px2rem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    minify: false,
  },
  css: {
    postcss: {
      plugins: [
        px2rem({
          remUnit: 37.5 // 1rem === 37.5px
        })
      ]
    }
  }
})
