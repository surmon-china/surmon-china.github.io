<template>
  <div class="toolbar">
    <button @click="prepend()" class="prepend-2-slides">Prepend 2 Slides</button>
    <button @click="slideTo(1)" class="prepend-slide">Slide 1</button>
    <button @click="slideTo(250)" class="slide-250">Slide 250</button>
    <button @click="slideTo(500)" class="slide-500">Slide 500</button>
    <button @click="append()" class="append-slides">Append Slide</button>
  </div>
  <swiper
    class="swiper"
    :modules="modules"
    :virtual="true"
    :slides-per-view="3"
    :centered-slides="true"
    :space-between="30"
    :navigation="true"
    :pagination="{ type: 'fraction' }"
    @swiper="setSwiperRef"
  >
    <swiper-slide
      v-for="(slideContent, index) in slides"
      :key="index"
      :virtual-index="index"
      class="slide"
    >
      Slide {{ slideContent }}
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import SwiperClass, { Pagination, Navigation, Virtual } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import 'swiper/css/virtual'

  export default defineComponent({
    name: 'swiper-example-virtual-slides',
    title: 'Virtual slides',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      let swiperRef: SwiperClass | null = null
      const setSwiperRef = (swiper: SwiperClass) => {
        swiperRef = swiper
      }

      const slideTo = (index: number) => {
        swiperRef?.slideTo(index - 1, 0)
      }

      // Create array with 500 slides
      const slides = reactive(Array.from({ length: 500 }).map((_, index) => index + 1))

      let prependNumber = 1
      const prepend = () => {
        slides.unshift(prependNumber - 2, prependNumber - 1)
        prependNumber -= 2
        swiperRef?.slideTo(swiperRef.activeIndex + 2, 0)
      }

      const append = () => {
        slides.push(slides.length)
      }

      return {
        modules: [Pagination, Navigation, Virtual],
        setSwiperRef,
        slides,
        slideTo,
        append,
        prepend
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .toolbar {
    @include toolbar();

    button {
      @include toolbar-button();
    }
  }

  .swiper {
    height: 300px;
    width: 100%;

    ::v-deep(.swiper-slide) {
      @include swiper-slide();
    }
  }
</style>
