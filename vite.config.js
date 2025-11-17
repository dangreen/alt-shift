import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssCustomMedia from 'postcss-custom-media'

export default defineConfig({
  base: './',
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [postcssCustomMedia()]
    }
  },
  esbuild: {
    jsx: 'automatic'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~': join(import.meta.dirname, 'app')
    }
  }
})
