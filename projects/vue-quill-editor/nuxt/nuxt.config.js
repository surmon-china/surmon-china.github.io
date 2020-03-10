
module.exports = {
  // some nuxt config...
  plugins: [
    { src: '~plugins/nuxt-quill-plugin', ssr: false }
  ],
  // some nuxt config...
  css: [
    // ...
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css'
    // ...
  ],
  // some nuxt config...
}
