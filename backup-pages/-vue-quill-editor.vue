<template>
  <app-main
    name="Vue-Quill-Editor"
    desc="Quill editor component for Vue"
    link="https://github.com/surmon-china/vue-quill-editor"
  >
    <div slot="actions">
      <md-button
        href="https://github.com/surmon-china/vue-quill-editor" 
        target="_blank" 
        class="md-primary">View on GitHub</md-button>
      <md-button
        href="https://github.com/surmon-china/vue-quill-editor/issues" 
        target="_blank" 
        class="md-accent">Issues</md-button>
      <md-button
        href="https://github.com/surmon-china/vue-quill-editor/tree/master/examples" 
        target="_blank" 
        class="md-primary">Example Code</md-button>
      <md-button
        href="https://quilljs.com/docs/quickstart/" 
        target="_blank" 
        class="md-primary">DOCUMENTATION</md-button>
      <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <example></example>
      <div
        class="example"
        :key="key"
        v-for="(value, key) in examples"
        :class="{ 'vue': key === 'exampleVue' }">
        <component :is="key"></component>
      </div>
      <br>
      <!-- <test></test> -->
      <!-- <size></size> -->
    </div>
  </app-main>
</template>

<script>
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


  import AppMain from '@/main.vue'
  import Example from './Example.vue'
  // import Test from './Test.vue'
  // import Size from './Size.vue'
  export default {
    name: 'app',
    components: {
      AppMain,
      Example,
      // Test
      // Size
    }
  }
</script>
