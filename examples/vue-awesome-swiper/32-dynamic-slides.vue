<template>
  <div class="dynamic-example">
    <div class="toolbar">
      <button @click="prependSlide">Prepend slide</button>
      <button @click="appendSlide">Append slide</button>
      <button @click="popSlide">Pop slide</button>
      <button @click="shiftSlide">Shift slide</button>
    </div>
    <swiper
      class="swiper"
      :slides-per-view="3"
      :centered-slides="true"
      :space-between="30"
      :pagination="{ type: 'fraction' }"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="slide in slides" :key="slide" class="slide">
        Slide {{ slide }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  // https://swiperjs.com/swiper-api#manipulation
  // MARK: Manipulation module adds useful Swiper methods to manipulate slides. It makes sense to use it only with Swiper Core version, not intended to be uses with Swiper Angular, React, Svelte or Vue.
  import { Pagination, Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-dynamic-slides',
    title: 'Dynamic slides',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const slides = reactive([1, 2, 3, 4, 5])
      return {
        modules: [Pagination, Navigation],
        slides,
        appendSlide: () => slides.push(slides.length + 1),
        prependSlide: () => slides.unshift(slides[0] - 1),
        popSlide: () => slides.pop(),
        shiftSlide: () => slides.shift()
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .dynamic-example {
    height: auto;

    .toolbar {
      @include toolbar();

      button {
        @include toolbar-button();
      }
    }

    .swiper {
      @include swiper-wrapper();
    }

    .slide {
      @include swiper-slide();
    }
  }
</style>
