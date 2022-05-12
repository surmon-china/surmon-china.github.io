<template>
  <div class="advance-example">
    <swiper
      class="horizontal-swiper"
      :modules="modules"
      :loop="true"
      :slides-per-view="3"
      :slides-per-group="3"
      :space-between="14"
      :pagination="{ clickable: true }"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      wrapper-tag="div"
      @swiper="handleHSwiperReady"
      @slide-change="handleHSwiperSlideChange"
    >
      <swiper-slide class="slide">
        <span>Loop Slide 1</span>
      </swiper-slide>
      <swiper-slide class="slide" v-slot="slide">
        <pre>{{ slide }}</pre>
      </swiper-slide>
      <swiper-slide class="slide">
        <span>Loop Slide 3</span>
        <button class="click swiper-no-swiping" @click.prevent="handleHwiperSlideClick(3)">
          {{ isSlideClicked(3) ? 'clicked ✅' : 'click me 👆' }}
        </button>
      </swiper-slide>
      <swiper-slide class="slide">
        <span>Loop Slide 4</span>
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(4)">
          {{ isSlideClicked(4) ? 'clicked ✅' : 'click me 👆' }}
        </button>
      </swiper-slide>
      <swiper-slide class="slide">
        <span>Loop Slide 5</span>
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(5)">
          {{ isSlideClicked(5) ? 'clicked ✅' : 'click me 👆' }}
        </button>
      </swiper-slide>
      <swiper-slide class="slide">
        <span>Loop Slide 6</span>
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(6)">
          {{ isSlideClicked(6) ? 'clicked ✅' : 'click me 👆' }}
        </button>
      </swiper-slide>
    </swiper>
    <swiper
      class="vertical-swiper"
      :modules="modules"
      direction="vertical"
      :slides-per-view="2"
      :space-between="18"
      :mousewheel="true"
      @swiper="setVSwiperRef"
      @slide-change="updateVSwiperIndex"
    >
      <swiper-slide class="slide">
        <ulink class="link" href="https://swiperjs.com/">swiperjs.com</ulink>
        <i class="iconfont icon-link-external"></i>
      </swiper-slide>
      <swiper-slide class="slide">
        <ulink class="link" href="https://github.com/nolimits4web/swiper/discussions">
          discussions
        </ulink>
        <i class="iconfont icon-link-external"></i>
      </swiper-slide>
      <swiper-slide class="slide">Slide 3</swiper-slide>
      <swiper-slide class="slide">Slide 4</swiper-slide>
      <swiper-slide class="slide">Slide 5</swiper-slide>
      <swiper-slide class="slide">Slide 6</swiper-slide>
      <template #container-start>
        <button
          class="nav-button-prev"
          :disabled="vSwiperIndex === 0"
          @click="prevVSwiperSlide"
        >
          <i class="iconfont icon-arrow-down"></i>
        </button>
      </template>
      <template #container-end>
        <button
          class="nav-button-next"
          :disabled="vSwiperIndex === 5 - 1"
          @click="nextVSwiperSlide"
        >
          <i class="iconfont icon-arrow-up"></i>
        </button>
      </template>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import SwiperClass, { Pagination, Navigation, Grid, Mousewheel } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-advance',
    title: 'Advance example',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      // horizontal swiper
      const handleHSwiperReady = (swiper: SwiperClass) => {
        console.log('SwiperComponentReady!', swiper)
      }
      const handleHSwiperSlideChange = (swiper: SwiperClass) => {
        console.log('handleHSwiperSlideChange!', swiper.realIndex)
      }
      const clickedMap = reactive(new Map<number, boolean>())
      const isSlideClicked = (id: number) => clickedMap.get(id)
      const handleHwiperSlideClick = (id: number) => {
        clickedMap.set(id, true)
        console.log('Click slide! target slide id:', id)
      }

      // vertical swiper
      let vSwiperRef: SwiperClass | null = null
      const setVSwiperRef = (swiper: SwiperClass) => {
        vSwiperRef = swiper
      }
      const vSwiperIndex = ref<number>()
      const updateVSwiperIndex = () => {
        vSwiperIndex.value = vSwiperRef?.activeIndex
      }
      const prevVSwiperSlide = () => vSwiperRef?.slidePrev()
      const nextVSwiperSlide = () => vSwiperRef?.slideNext()

      return {
        modules: [Grid, Pagination, Navigation, Mousewheel],

        handleHSwiperReady,
        handleHSwiperSlideChange,
        handleHwiperSlideClick,
        isSlideClicked,

        setVSwiperRef,
        vSwiperIndex,
        updateVSwiperIndex,
        prevVSwiperSlide,
        nextVSwiperSlide
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .advance-example {
    height: auto;

    .horizontal-swiper {
      width: 100%;
      height: 240px;
      margin-bottom: $lg-gap;

      /* for swiper loop mode */
      ::v-deep(.slide) {
        @include swiper-slide();
        flex-direction: column;
        font-size: $font-size-huge;
        background-color: $banner-bg;

        pre {
          font-size: $font-size-base;
        }
      }
    }

    .vertical-swiper {
      @include swiper-wrapper($height: 200px);
      position: relative;
    }

    .slide {
      @include swiper-slide();
      font-size: $font-size-huge;

      .link {
        text-decoration: none;
        margin-right: $xs-gap;
        color: $text-color;
        &:hover {
          color: $link-color;
        }

        & + .iconfont {
          margin-top: 0.5em;
          font-size: $font-size-small;
        }
      }

      .click {
        margin-top: 1.4rem;
        padding: 0.5em 1em;
        border: 1px dashed $text-divider;
        border-radius: $sm-radius;
        color: $text-color;
        background-color: $header-bg;
        opacity: 0.8;
        cursor: pointer;
        &:hover {
          color: $link-color;
          opacity: 1;
        }
      }
    }

    .nav-button-next,
    .nav-button-prev {
      position: absolute;
      z-index: 9;
      top: 50%;
      margin: 0;
      padding: 0;
      border: none;
      $size: 2.4rem;
      width: $size;
      height: $size;
      margin-top: math.div(-$size, 2);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      opacity: 0.5;
      color: rgba(white, 0.6);
      background-color: var(--swiper-theme-color);
      transition: opacity $transition-time, visibility $transition-time;
      &[disabled] {
        cursor: no-drop;
        opacity: 0.3;
      }
      &:not([disabled]) {
        cursor: pointer;
        &:hover {
          opacity: 1;
          color: white;
        }
      }

      .iconfont {
        transform: rotate(180deg);
      }
    }

    .nav-button-next {
      right: $lg-gap * 2;
    }

    .nav-button-prev {
      left: $lg-gap * 2;
    }
  }
</style>
