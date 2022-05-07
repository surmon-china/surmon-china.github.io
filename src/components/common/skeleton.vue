<template>
  <div class="skeleton" :style="style"></div>
</template>

<script lang="ts">
  import { defineComponent, computed, CSSProperties } from 'vue'
  export default defineComponent({
    name: 'skeleton',
    props: {
      width: Number,
      height: Number,
      circle: {
        type: Boolean,
        default: false
      },
      radius: {
        type: Number,
        default: 2
      }
    },
    setup(props) {
      const style = computed<CSSProperties>(() => ({
        borderRadius: props.circle ? '100%' : `${props.radius}px`,
        ...(props.width && { width: props.width + 'px' }),
        ...(props.height && { height: props.height + 'px' })
      }))

      return {
        style
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  $skeleton-background: $header-bg;
  $skeleton-spinner: $body-bg;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 350px 50px;
    }
  }

  .skeleton {
    width: 100%;
    height: 100%;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: $skeleton-spinner;
    background-image: linear-gradient(
      to right,
      $skeleton-background 8%,
      $skeleton-spinner 18%,
      $skeleton-background 33%
    );
    background-repeat: repeat;
    background-size: 800px 104px;
  }
</style>
