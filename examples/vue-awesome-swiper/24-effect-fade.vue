<template>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide class="slide" v-for="index in 5" :key="index">
      <img :src="`/images/example/${index}.jpg`" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Navigation, EffectFade } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import 'swiper/css/effect-fade'

  export default defineComponent({
    name: 'swiper-example-fade-effect',
    title: 'Fade effect',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, EffectFade]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper($height: 360px);

    .slide {
      @include swiper-slide();

      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
