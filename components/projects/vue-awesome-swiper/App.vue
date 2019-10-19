<template>
  <app-main name="Vue-Awesome-Swiper"
            desc="Swiper component for Vue"
            link="https://github.com/surmon-china/vue-awesome-swiper">
    <div slot="actions">
      <md-button href="https://github.com/surmon-china/vue-awesome-swiper" 
                 target="_blank" 
                 class="md-primary">View on GitHub</md-button>
          <md-button href="https://github.com/surmon-china/vue-awesome-swiper/issues" 
                     target="_blank" 
                     class="md-accent">Issues</md-button>
          <md-button href="https://github.com/surmon-china/vue-awesome-swiper/tree/master/examples" 
                     target="_blank">Example Code</md-button>
          <md-button href="http://www.swiper.com.cn/api/index2.html" 
                     target="_blank" 
                     class="md-primary">api docs (CN)</md-button>
          <md-button href="http://idangero.us/swiper/api/" 
                     target="_blank" 
                     class="md-primary">api docs (en)</md-button>
          <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <!-- <example></example> -->
      <!-- <mobile></mobile> -->
      <test></test>
    </div>
  </app-main>
</template>

<script>
  import AppMain from '@/main.vue'
  // import Example from './Example.vue'
  // import Mobile from './Mobile.vue'
  import Test from './Test.vue'
  export default {
    name: 'app',
    components: {
      AppMain,
      // Example,
      // Mobile,
      Test
    }
  }
</script>
