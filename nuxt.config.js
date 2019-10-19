
const title = `Surmon's Projects`;
const keywords = `Surmon,surmon-china,vue blog,vue components`;
const description = `Surmon's github repository pages.`;

export default {
  mode: 'ssr',
  loading: { color: '#fff' },
  generate: {
    fallback: '404.html'
  },
  head: {
    title: 'GitHub',
    titleTemplate: `%s | ${title}`,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: keywords },
      { hid: 'description', name: 'description', content: description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  sitemap: {
    hostname: 'https://github.surmon.me',
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/styles/app.scss'
  ],
  styleResources: {
    scss: '~/assets/styles/init.scss',
  },
  plugins: [
    '~/plugins/element-ui',
    { src: '~/plugins/adsense', ssr: false },
    { src: '~/plugins/github-button', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
