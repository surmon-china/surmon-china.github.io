
import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'

// import VueQuillEditorSSR from '@components/vue-quill-editor/src/ssr.js'
import VueQuillEditor, { quillEditor } from '@components/vue-quill-editor/src/index.js'

// import VueQuillEditor, { quillEditor } from 'vue-quill-editor'
// import VueQuillEditorSSR from 'vue-quill-editor/dist/ssr'
console.log('VueQuillEditor', VueQuillEditor, quillEditor)

require('quill/dist/quill.core.css')
require('quill/dist/quill.snow.css')
require('quill/dist/quill.bubble.css')

const defaultOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ]
  },
  placeholder: 'Global placeholder...'
}

Vue.use(VueQuillEditor, defaultOptions)
// Vue.use(VueQuillEditorSSR, defaultOptions)
buildApp(App)
