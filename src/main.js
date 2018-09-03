
import Vue from 'vue'
import { MdCard, MdIcon, MdList, MdMenu, MdButton, MdToolbar } from 'vue-material/dist/components'

// import 'bootstrap/dist/css/bootstrap.css'
import 'vue-material/dist/components/index.css'

import '@/assets/sass/app.scss'
import '@/assets/sass/material.scss'

Vue.use(MdCard)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdMenu)
Vue.use(MdButton)
Vue.use(MdToolbar)

import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css'
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
}
