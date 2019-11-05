<template>
  <homepage
    name="Naive Bayes"
    desc="Naive Bayes classifier for node.js"
    link="https://github.com/surmon-china/naivebayes"
  >
    <!-- <div slot="actions">
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
    </div> -->
    <div slot="content">
      <!-- <div class="examples">
        <div class="example" v-for="(value, key) in examples">
          <component :is="key" :key="key"></component>
        </div>
      </div> -->
      <iframe width="600px" height="300px" src="https://github.com/surmon-china/vue-quill-editor/blob/master/examples/02-example.vue" frameborder="0"></iframe>
    </div>
  </homepage>
</template>

<script>
  const ID = 'naivebayes'

  // import { codemirror } from 'vue-codemirror'
  import Homepage from '~/components/homepage'
  import examples from '~/projects/naivebayes/examples'

  // TODO: example code: https://api.github.com/repos/surmon-china/vue-quill-editor/contents/examples/02-example.vue

  console.log('examples', examples.example01)
  export default {
    name: ID,
    components: {
      Homepage,
      // codemirror,
      ...examples
    },
    data() {
      return {
        ID,
      }
    }
  }
</script>
