<template>
  <div class="swipers">
    <swiper
      class="swiper"
      ref="swipers"
      v-for="i in 2"
      :key="i"
      :options="swiperOption"
    >
      <swiper-slide v-for="i in 9" :key="i">Slide {{ i + 1 }}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-multiple-swipers',
    title: 'Multiple swipers',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    mounted() {
      // console.log('swipers', this.$refs.swipers)
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .swipers {
    height: auto;

    .swiper {
      margin-bottom: 1rem;
    }
  }
</style>
