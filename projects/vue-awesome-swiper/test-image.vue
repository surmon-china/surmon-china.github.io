<template>
  <div class="swiper-lazy-box">
    <img class="swiper-lazy" :data-src="src" ref="imgEle">
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-lazy-image',
    components: {
      swiper,
      swiperSlide
    },
    props: {
      src: String
    },
    updated() {
      this.$refs.imgEle.src = this.src
    }
  }
</script>
