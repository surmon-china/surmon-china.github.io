<template>
  <app-main name="Vue-Touch-Ripple"
            desc="Touch ripple component for Vue"
            link="https://github.com/surmon-china/vue-touch-ripple">
    <div slot="actions">
      <md-button href="https://github.com/surmon-china/vue-touch-ripple" 
                 target="_blank" 
                 class="md-primary">View on GitHub</md-button>
          <md-button href="https://github.com/surmon-china/vue-touch-ripple/issues" 
                     target="_blank" 
                     class="md-accent">Issues</md-button>
          <md-button href="https://github.com/surmon-china/vue-touch-ripple/blob/master/examples/example.vue" 
                     target="_blank" 
                     class="md-primary">Example Code</md-button>
          <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <example></example>
    </div>
  </app-main>
</template>

<script>
  import Example from './Example.vue'
  import AppMain from '@/main.vue'
  export default {
    name: 'app',
    components: {
      Example,
      AppMain
    }
  }
</script>
