import path from 'path'
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vitejs/vite/issues/5071
// https://github.com/vitejs/vite/pull/5535/files
// https://github.com/vitejs/vite/blob/main/packages/plugin-vue/src/main.ts#L102
// https://vue-loader.vuejs.org/zh/options.html#exposefilename
// https://github.com/vitejs/vite/issues/4646#issuecomment-905279744
// https://github.com/TeleworkInc/rollup-plugin-import-meta-url/blob/master/index.js
const resolveMetaUrl = (): Plugin => ({
  name: 'resolveMetaUrl',
  resolveImportMeta(property, chunk) {
    if (property === 'url') {
      // MARK: keep 'file://' + '/XXX'
      return `'file:///${path.relative(process.cwd(), chunk.moduleId)}'`
    }
  }
})

// https://github.com/antfu/vite-ssg/issues/156#issuecomment-1047341987
const fixSwiperCSSOnSSR = (): Plugin => ({
  name: 'fix-swiper-ssr',
  transform(code, id, options = {}) {
    if (options.ssr) return code.replace(/import .swiper\/(s?css|less).*$/gm, '')
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), resolveMetaUrl(), fixSwiperCSSOnSSR()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@examples': path.resolve(__dirname, 'examples')
    }
  },
  server: {
    open: true
  },
  build: {
    cssCodeSplit: false
  }
})
