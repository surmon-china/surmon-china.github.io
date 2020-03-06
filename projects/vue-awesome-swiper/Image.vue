<template>
  <div class="swiper-lazy-box">
    <img class="swiper-lazy" :data-src="src" ref="imgEle">
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-03',
    components: {
      swiper,
      swiperSlide
    },
    exampleData: {
      name: 'Pagination'
    },
    name: 'lazyImage',
    props: {
      src: String
    },
    updated() {
      this.$refs.imgEle.src = this.src
    }
  }
</script>
