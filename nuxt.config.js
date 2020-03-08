/**
 * @file Nuxt config
 * @module nuxt.config
 * @author Surmon <https://github.com/surmon-china>
 */

const packageJSON = require('./package.json')

export const APP = {
  url: packageJSON.homepage,
  title: `Surmon's projects`,
  description: `Surmon's github repository pages.`,
  keywords: ['surmon-china', 'vue components example', 'vue swiper example', 'vue text editor']
}

export default {
  mode: 'universal',
  loading: { color: '#fff' },
  generate: {
    fallback: '404.html'
  },
  head: {
    title: 'GitHub',
    titleTemplate: `%s | ${APP.title}`,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: APP.keywords.join(',') },
      { hid: 'description', name: 'description', content: APP.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  sitemap: {
    hostname: APP.url,
  },
  css: [
    'normalize.css/normalize.css',
    '@/assets/styles/app.scss',
    // libs and components...
    'highlight.js/styles/github.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    'swiper/dist/css/swiper.css'
  ],
  styleResources: {
    scss: '@/assets/styles/init.scss',
  },
  plugins: [
    '@/plugins/composition-api',
    '@/plugins/highlight',
    { src: '@/plugins/adsense', ssr: false },
    { src: '@/plugins/quill-editor', ssr: false },
    { src: '@/plugins/swiper', ssr: false },
  ],
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: false,
      ignoreNotFoundWarnings: true
    }]
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  build: {
    extractCSS: true,
    extend (config, { isClient, loaders: { vue } }) {
      if (isClient) {
        // https://vue-loader.vuejs.org/zh/options.html#exposefilename
        vue.exposeFilename = true
      }
    }
  }
}
