<template>
  <app-main name="Vue-Codemirror"
            desc="CodeMirror component for Vue"
            link="https://github.com/surmon-china/vue-codemirror">
    <div slot="actions">
      <md-button href="https://github.com/surmon-china/vue-codemirror" 
                 target="_blank" 
                 class="md-primary">View on GitHub</md-button>
      <md-button href="https://github.com/surmon-china/vue-codemirror/tree/master/examples" 
                 target="_blank" 
                 class="md-accent">Examples</md-button>
      <md-button href="http://codemirror.net/doc/manual.html#config" 
                 target="_blank" 
                 class="md-primary">CM config</md-button>
      <md-button href="http://codemirror.net/demo/theme.html" 
                 target="_blank" 
                 class="md-primary">CM theme</md-button>
      <md-button href="http://codemirror.net/mode/" 
                 target="_blank" 
                 class="md-primary">CM language mode</md-button>
      <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <!-- <test></test> -->
      <!-- <test2></test2> -->
      <!-- <br> -->
      <example></example>
    </div>
  </app-main>
</template>

<script>
  import AppMain from '@/main.vue'
  import Example from './Example.vue'
  // import Test from './Test.vue'
  // import Test2 from './Test2.vue'
  export default {
    name: 'app',
    components: {
      AppMain,
      Example,
      // Test,
      // Test2
    }
  }
</script>
