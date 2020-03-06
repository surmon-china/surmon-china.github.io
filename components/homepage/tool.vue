<template>
  <div id="tools">
    <div class="container">
      <div class="tools-list">
        <button
          class="more"
          title="more Github repos"
        >
          <i class="iconfont icon-github"></i>
        </button>
        <button
          class="github"
          title="to Github Homepage"
        >
          <i class="iconfont icon-github"></i>
        </button>
        <a class="feedback" href="mailto:surmon@foxmail.com">
          <i class="iconfont icon-mail"></i>
        </a>
        <button
          class="to-page-top"
          @click="totop"
          @mouseover="setButtonState('top', true, true)"
          @mouseleave="setButtonState('top', false)"
        >
          <i class="iconfont icon-totop"></i>
        </button>
        <button
          class="to-page-bottom"
          :title="$i18n.text.tobottom"
          @click="toBottom"
          @mouseover="setButtonState('bottom', true, true)"
          @mouseleave="setButtonState('bottom', false)"
        >
          <i class="iconfont icon-tobottom"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import underscore from '@/utils/underscore-simple'
  import { scrollTo, Easing } from '@/utils/scroll-to-anywhere'

  export default {
    name: 'tool-box',
    data() {
      return {
        topBtnMouseOver: false,
        bottomBtnMouseOver: false,
        animationFrameId: null
      }
    },
    computed: {
      ...mapState('global', {
        language: 'language',
        webrtcState: 'onWebrtc',
        barrageState: 'onBarrage',
        onPowerSavingMode: 'onPowerSavingMode'
      }),
      isEnLang() {
        return this.$store.getters['global/isEnLang']
      }
    },
    methods: {
      totop() {
        scrollTo('body', 300, { easing: Easing['ease-in'] })
      },
      toBottom() {
        scrollTo(window.scrollY + window.innerHeight, 300, { easing: Easing['ease-in'] })
      },
      setButtonState(position, state, start) {
        this[position === 'bottom' ? 'bottomBtnMouseOver' : 'topBtnMouseOver'] = state
        window.cancelAnimationFrame(this.animationFrameId)
        start && this.slowMoveToAnyWhere()
      },
      slowMoveToAnyWhere() {
        const step = () => {
          let targetScrollY = window.scrollY
          const currentScrollY = document.body.scrollHeight - window.innerHeight
          if (this.bottomBtnMouseOver) targetScrollY += 1
          if (this.topBtnMouseOver) targetScrollY -= 1
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
          if (this.bottomBtnMouseOver || this.topBtnMouseOver) {
            this.animationFrameId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(this.animationFrameId)
            return false
          }
        }
        this.animationFrameId = window.requestAnimationFrame(step)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #tools {
    position: fixed;
    z-index: 9;
    width: 100%;
    bottom: 30rem;

    > .container {
      $size: $lg-gap * 2.8;
      position: relative;

      > .tools-list {
        position: absolute;
        right: -12rem;
        width: $size;

        > .to-page-top,
        > .to-page-bottom,
        > .feedback {
          display: block;
          width: $size;
          height: $size;
          line-height: $size;
          text-align: center;
          @include module-blur-bg();

          &:hover {
            background-color: $module-hover-bg;
          }
        }

        > .to-page-bottom {
          height: $size * 0.6;
          line-height: $size * 0.6;
        }
      }
    }
  }
</style>
