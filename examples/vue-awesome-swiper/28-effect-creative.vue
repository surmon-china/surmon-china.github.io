<template>
  <div class="creative-example">
    <div class="toolbar">
      <button v-for="(_, index) in effects" :key="index" @click="setEffect(index)">
        Effect {{ index }}
      </button>
    </div>
    <swiper
      v-if="render"
      class="swiper"
      :modules="modules"
      :effect="'creative'"
      :creative-effect="effects[effectIndex]"
      :grab-cursor="true"
      :pagination="true"
    >
      <swiper-slide class="slide">
        <img src="/images/example/1.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/2.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/3.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/4.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/5.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/6.jpg" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent, nextTick, ref } from 'vue'
  import SwiperClass, { Pagination, EffectCreative } from 'swiper'
  import { CreativeEffectOptions } from 'swiper/types'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-creative'

  export default defineComponent({
    name: 'swiper-example-effect-creative',
    title: 'Creative effect',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const render = ref(true)
      const effectIndex = ref(0)
      const setEffect = (index: number) => {
        effectIndex.value = index
        nextTick(() => {
          render.value = false
          nextTick(() => {
            render.value = true
          })
        })
      }

      const effects: CreativeEffectOptions[] = [
        {
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        },
        {
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500]
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500]
          }
        },
        {
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        },
        {
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0]
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0]
          }
        },
        {
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90]
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90]
          }
        },
        {
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0]
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0]
          }
        }
      ]

      return {
        effects,
        effectIndex,
        render,
        setEffect,
        modules: [Pagination, EffectCreative]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';
  @import './style.scss';

  .creative-example {
    position: relative;
    background-color: $banner-bg;
  }

  .swiper {
    margin: 20px auto;
    width: 300px;
    height: 300px;

    .slide {
      @include swiper-slide();

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .toolbar {
    @include toolbar();

    button {
      @include toolbar-button();
    }
  }
</style>
