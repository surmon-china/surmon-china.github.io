
import Vue from 'vue'
import hljs from 'highlight.js'
import VueMaterial from 'vue-material'

import 'highlight.js/styles/tomorrow.css'
import 'vue-material/dist/vue-material.css'

import '@/assets/sass/app.scss'
import '@/assets/sass/material.scss'

Vue.use(VueMaterial)

window.highlight = window.hljs = hljs

hljs.configure({
  useBR: false,
  languages: ['javascript', 'ruby', 'python']
})

export default App => {
  window.$app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })
  window.$app.$material.theming.theme = 'github'
}
