<template>
  <div class="swiper-lazy-box">
    <img class="swiper-lazy" :data-src="src" ref="imgEle">
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-lazy-image',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      src: String
    },
    updated() {
      this.$refs.imgEle.src = this.src
    }
  }
</script>
