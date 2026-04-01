import path from 'path'
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import unhead from '@unhead/addons/vite'

export default defineConfig({
  plugins: [vue(), react(), unhead()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@examples': path.resolve(__dirname, 'examples')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    cssCodeSplit: false
  },
  ssr: {
    noExternal: ['vue-codemirror', '@videojs-player/vue', '@videojs-player/react', 'vue-touch-ripple']
  }
})
