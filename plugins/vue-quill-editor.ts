/**
 * @file vue-quill-editor
 * @module plugins/vue-quill-editor
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

Vue.use(VueQuillEditor, {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ]
  },
  placeholder: 'Global placeholder...'
})
