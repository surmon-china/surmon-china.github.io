<template>
  <swiper
    class="swiper"
    :modules="modules"
    :pagination="{ clickable: true, renderBullet: bulletRenderer }"
  >
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
    <swiper-slide class="slide">Slide 6</swiper-slide>
    <swiper-slide class="slide">Slide 7</swiper-slide>
    <swiper-slide class="slide">Slide 8</swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-pagination-custom',
    title: 'Custom pagination',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const bulletRenderer = (index: number, className: string) => {
        const _className = `${className} swiper-pagination-bullet-custom`
        return `<span class="${_className}">${index + 1}</span>`
      }

      return {
        bulletRenderer,
        modules: [Pagination]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper();

    ::v-deep(.swiper-pagination-bullet-custom) {
      $size: 20px;
      width: $size !important;
      height: $size !important;
      line-height: $size !important;
      text-align: center;
      background-color: $header-bg;
      color: $text-disabled;
      transition: all 0.2s;
      opacity: 0.6;
      &:hover {
        opacity: 1;
        color: $text-color;
      }

      &.swiper-pagination-bullet-active {
        opacity: 1;
        color: $white;
        background-color: var(--swiper-theme-color);
      }
    }
  }

  .slide {
    @include swiper-slide();
  }
</style>
