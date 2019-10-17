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
      <br>
      <!-- <test></test> -->
      <!-- <size></size> -->
    </div>
  </app-main>
</template>

<script>
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
