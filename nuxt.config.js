
export const APP = {
  url: 'https://github.surmon.me',
  title: `Surmon's projects`,
  description: `Surmon's github repository pages.`,
  keywords: ['Surmon', 'surmon-china', 'vue nuxtjs blog', 'vue components']
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
    'highlight.js/styles/tomorrow.css',
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
    { src: '@/plugins/adsense', ssr: false },
    { src: '@/plugins/github-button', ssr: false },
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
  },
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // }
}
