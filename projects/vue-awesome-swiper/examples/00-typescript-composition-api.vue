<template>
  <div class="important-example">
    <!-- WORKAROUND!!!! -->
    <p v-show="false">{{ clickedIds }}</p>
    <client-only>
      <!-- Swiper component -->
      <swiper
        ref="swiperComponentRef"
        class="swiper component"
        :options="swiperComponentOption"
        @ready="handleSwiperComponentReady"
        @click.native="handleSwiperDOMClick"
        @clickSlide="handleSwiperSlideClick"
        @slideChangeTransitionStart="handleSwiperSlideChangeTransitionStart"
      >
        <swiper-slide>
          <span>
            <code>{{ '&lt;' }}client-only{{ '>' }}</code>
            <span>&nbsp;component</span>
          </span>
          <span class="click">{{ isSlideClicked(1) ? 'clicked!' : 'click me' }}</span>
        </swiper-slide>
        <swiper-slide>
          <span>just render on client.</span>
          <span class="click">{{ isSlideClicked(2) ? 'clicked!' : 'click me' }}</span>
        </swiper-slide>
        <swiper-slide>
          <a target="_blank" href="https://nuxtjs.org/api/components-client-only/">learn more on Nuxt.js</a>
          <span class="click">{{ isSlideClicked(3) ? 'clicked!' : 'click me' }}</span>
        </swiper-slide>
        <swiper-slide>
          <span>Loop Slide 4</span>
          <span class="click">{{ isSlideClicked(4) ? 'clicked!' : 'click me' }}</span>
        </swiper-slide>
        <swiper-slide>
          <span>Loop Slide 5</span>
          <span class="click">{{ isSlideClicked(5) ? 'clicked!' : 'click me' }}</span>
        </swiper-slide>
        <swiper-slide v-if="isComponentRendered">
          <span>Loop Slide 6</span>
          <span class="click">{{ isSlideClicked(6) ? 'clicked!' : 'click me' }}</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
    <!-- Swiper directive -->
    <div
      class="swiper directive"
      v-swiper="swiperdDrectiveOption"
      :cleanup-styles-on-destroy="false"
      @ready="handleSwiperDirectiveReady"
      @click-slide="handleSwiperSlideClick"
      @slide-change-transition-start="handleSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span>Directive render with ssr (HTML).</span>
        </div>
        <div class="swiper-slide">
          <span>Because directive doesn't instantiate Swiper on server (render HTML).</span>
        </div>
        <div class="swiper-slide">
          <span>Slide 3</span>
        </div>
        <div class="swiper-slide">
          <span>Slide 4</span>
        </div>
        <div class="swiper-slide" v-if="isDirevtiveRendered">
          <span>Slide 5</span>
        </div>
      </div>
      <div class="swiper-button-prev">
        <i class="iconfont icon-arrow-down"></i>
      </div>
      <div class="swiper-button-next">
        <i class="iconfont icon-arrow-up"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { CombinedVueInstance } from 'vue/types/vue'
  // Vue 3 API
  import { createComponent, ref, reactive, toRefs, computed, onMounted } from '@vue/composition-api'
  // Swiper 5
  import SwiperClass, { SwiperOptions } from 'swiper'
  // vue-awesome-swiper 4.0
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default createComponent({
    name: 'swiper-example-typescript-composition-api',
    ['title' as string]: 'Vue3 & TypeScript',
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    setup() {
      const isComponentRendered = ref(false)
      const isDirevtiveRendered = ref(false)
      const swiperComponentRef = ref<any>(null)
      const swiperComponentinstance = computed(
        () => swiperComponentRef.value?.$swiper as SwiperClass
      )

      const swiperComponentOption: SwiperOptions = {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
        slideClass: 'custom-slide-class',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }

      const swiperdDrectiveOption = {
        loop: true,
        // Swiper 5 use modern CSS Scroll Snap API.
        // cssMode: true,
        slidesPerView: 2,
        spaceBetween: 18,
        mousewheel: true,
        direction: 'vertical',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      } as SwiperOptions

      // MARK: bug with composition-api
      // const clickedMap = reactive(new Map<number, boolean>())
      const clickedIds = reactive<number[]>([])
      const isSlideClicked = (id: number) => clickedIds.includes(id)

      const handleSwiperDOMClick = () => {
        const targetSlideIndex = Number(
          // WORKAROUND: Get really index from html attr data
          // https://github.com/nolimits4web/swiper/blob/master/src/components/core/update/updateSlidesClasses.js#L25
          swiperComponentinstance.value?.clickedSlide?.dataset.swiperSlideIndex
        )
        // console.log(
        //   'handleSwiperDOMClick',
        //   'index:',
        //   swiperComponentinstance.value?.clickedIndex,
        //   'really slide index:',
        //   targetSlideIndex
        // )
        if (Number.isInteger(targetSlideIndex)) {
          const targetId = targetSlideIndex + 1
          if (!clickedIds.includes(targetId)) {
            clickedIds.push(targetId)
          }
        }
      }

      const handleSwiperSlideClick = (index: number, reallyIndex: number) => {
        console.log('Click slide! target slide index:', index, 'reallyIndex:', reallyIndex)
      }

      const handleSwiperSlideChangeTransitionStart = () => {
        console.log('handleSwiperSlideChangeTransitionStart!')
      }

      const handleSwiperDirectiveReady = (swiper: SwiperClass) => {
        console.log('SwiperDirectiveReady!', swiper)
      }

      const handleSwiperComponentReady = (swiper: SwiperClass) => {
        console.log('SwiperComponentReady!', swiper)
      }

      onMounted(() => {
        console.log('swiperComponentRef', swiperComponentRef)
        setTimeout(() => {
          isComponentRendered.value = true
          isDirevtiveRendered.value = true
        }, 666)
      })

      return {
        clickedIds,
        isSlideClicked,
        isComponentRendered,
        swiperComponentRef,
        swiperComponentOption,
        swiperdDrectiveOption,
        handleSwiperDOMClick,
        handleSwiperSlideClick,
        handleSwiperComponentReady,
        isDirevtiveRendered,
        handleSwiperDirectiveReady,
        handleSwiperSlideChangeTransitionStart
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .important-example {
    height: auto;
    background-color: $module-bg-darken;

    .swiper {
      height: 200px;
  
      &.component {
        margin-bottom: $gap;

        .custom-slide-class {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          text-align: center;
          font-weight: bold;
          background-color: $white;
          transition-property: transform;
          font-size: $font-size-huge;

          .click {
            margin-top: $lg-gap;
            font-size: $font-size-base;
            color: $text-secondary;
          }
        }
      }

      &.directive {
        .swiper-button-next,
        .swiper-button-prev {
          $size: 2.4rem;
          width: $size;
          height: $size;
          margin-top: -($size / 2);
          border-radius: 100%;
          opacity: .3;
          background-color: $github-text-primary;
          @include visibility-transition();

          .iconfont {
            color: $text-reverse;
            transform: rotate(180deg);
          }

          &:hover {
            opacity: .9;
          }

          &::after {
            content: none;
          }
        }

        .swiper-button-next {
          right: $lg-gap * 2;
        }

        .swiper-button-prev {
          left: $lg-gap * 2;
        }

        .swiper-slide {
          transition: color $transition-time-fast;

          &:hover {
            color: $github-text-primary;
          }
        }
      }

      .swiper-slide {
        position: relative;
        font-size: $font-size-huge;
      }
    }
  }
</style>
