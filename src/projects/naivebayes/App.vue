<template>
  <app-main name="Naive Bayes"
            desc="Naive Bayes classifier for node.js"
            link="https://github.com/surmon-china/naivebayes">
    <div slot="actions">
      <md-button href="https://github.com/surmon-china/naivebayes" 
                 target="_blank" 
                 class="md-primary">View on GitHub</md-button>
      <md-button href="https://github.com/surmon-china/naivebayes/issues" 
                 target="_blank" 
                 class="md-accent">Issues</md-button>
      <md-button href="https://github.com/surmon-china/naivebayes/blob/master/src/naive-bayes.js" 
                 target="_blank">Core Code</md-button>
      <md-button href="https://github.com/surmon-china/naivebayes/tree/master/test" 
                 target="_blank">Example Code</md-button>
      <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <example></example>
    </div>
  </app-main>
</template>

<script>
  import AppMain from '@/main.vue'
  import Example from './Example.vue'
  export default {
    name: 'app',
    components: {
      AppMain,
      Example,
    }
  }
</script>
