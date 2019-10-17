<template>
  <app-main name="Vue-Drag-Zone"
            desc="Drag Zone component for Vue"
            link="https://github.com/surmon-china/vue-drag-zone">
    <div slot="actions">
      <md-button href="https://github.com/surmon-china/vue-drag-zone" 
                 target="_blank" 
                 class="md-primary">View on GitHub</md-button>
      <md-button href="https://github.com/surmon-china/vue-drag-zone/issues" 
                 target="_blank" 
                 class="md-accent">Issues</md-button>
      <md-button href="https://github.com/surmon-china/vue-drag-zone/tree/master/examples" 
                 target="_blank" 
                 class="md-primary">Example Code</md-button>
      <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <example></example>
      <!-- <test></test> -->
    </div>
  </app-main>
</template>

<script>
  import AppMain from '@/main.vue'
  import Example from './Example.vue'
  // import Test from './Test.vue'
  export default {
    name: 'app',
    components: {
      AppMain,
      Example,
      // Test
    }
  }
</script>
