<template>
  <div id="toolbox">
    <div class="container">
      <div class="tool-list">
        <a
          class="item"
          title="to github homepage"
          target="_blank"
          :href="githubUserUrl"
        >
          <i class="iconfont icon-github"></i>
        </a>
        <a
          class="item experiment"
          target="_blank"
          title="to projects page"
          href="/"
        >
          <i class="iconfont icon-experiment"></i>
        </a>
        <a
          v-if="email"
          class="item"
          :href="`mailto:${email}`"
          target="_blank"
        >
          <i class="iconfont icon-mail"></i>
        </a>
        <button
          class="item to-page-top"
          @click="totop"
          @mouseover="setTopButtonState(true, true)"
          @mouseleave="setTopButtonState(false)"
        >
          <i class="iconfont icon-arrow-up"></i>
        </button>
        <button
          class="item to-page-bottom"
          @click="toBottom"
          @mouseover="setBottomButtonState(true, true)"
          @mouseleave="setBottomButtonState(false)"
        >
          <i class="iconfont icon-arrow-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import CONFIG from '@/config'
  import { PropType, createComponent, ref, computed, onMounted } from '@vue/composition-api'
  import { scrollTo, Easing } from '@/services/scroll-to'

  export default createComponent({
    name: 'toolbox',
    setup(_, { root }) {
      const animationFrameId = ref(0)
      const isTopButtonMouseOver = ref(false)
      const isBottomButtonMouseOver = ref(false)

      const slowMoveToAnyWhere = () => {
        const step = () => {
          let targetScrollY = window.scrollY
          const currentScrollY = document.body.scrollHeight - window.innerHeight
          if (isBottomButtonMouseOver.value) {
            targetScrollY += 1
          }
          if (isTopButtonMouseOver.value) {
            targetScrollY -= 1
          }
          if (targetScrollY < 0) {
            targetScrollY = 0
          } else if (targetScrollY >= currentScrollY) {
            targetScrollY = currentScrollY
          }
          const canScrollTo = targetScrollY > 0 && targetScrollY < currentScrollY
          if (!canScrollTo) {
            return false
          }
          window.scrollTo(0, targetScrollY)
          if (isBottomButtonMouseOver.value || isTopButtonMouseOver.value) {
            animationFrameId.value = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(animationFrameId.value)
            return false
          }
        }
        animationFrameId.value = window.requestAnimationFrame(step)
      }

      return {
        githubUserUrl: CONFIG.GITHUB_USER_URL,
        email: computed(() => root.$store.state.userInfo?.email),
        totop() {
          scrollTo('body', 300, { easing: Easing['ease-in'] })
        },
        toBottom() {
          scrollTo(
            window.scrollY + window.innerHeight,
            300,
            { easing: Easing['ease-in'] }
          )
        },
        setTopButtonState(state: boolean, isStartSlow = false) {
          isTopButtonMouseOver.value = state
          window.cancelAnimationFrame(animationFrameId.value)
          isStartSlow && slowMoveToAnyWhere()
        },
        setBottomButtonState(state: boolean, isStartSlow = false) {
          isBottomButtonMouseOver.value = state
          window.cancelAnimationFrame(animationFrameId.value)
          isStartSlow && slowMoveToAnyWhere()
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  #toolbox {
    position: fixed;
    z-index: 9;
    width: 100%;
    bottom: 20rem;

    > .container {
      $width: $lg-gap * 2.6;
      $height: $width * 0.9;
      position: relative;

      > .tool-list {
        position: absolute;
        right: -12rem;
        width: $width;
        border-radius: $radius;
        overflow: hidden;

        .item {
          width: 100%;
          height: $height;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-color: $module-bg;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            background-color: $github-secondary;
            color: $text-reverse;
          }

          &.experiment {
            background-color: $github-secondary;
            color: $text-reverse;
            &:hover {
              background-color: $github-primary;
            }
          }
        }

        button {
          border: none;
        }

        .to-page-bottom {
          height: $height * 0.6;
          line-height: $height * 0.6;
        }
      }
    }
  }
</style>
