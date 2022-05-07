<template>
  <div class="loading">
    <div class="animation">
      <div v-for="item in 5" :key="item"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'loading'
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .loading {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;

    .animation {
      display: flex;

      @keyframes animation {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      div {
        width: 18px;
        height: 18px;
        margin: 0 $xs-gap;
        border-radius: $sm-radius;
        background: $body-bg;
        animation: animation 2s linear infinite;
      }
      div:nth-child(1) {
        animation-delay: 0s;
      }
      div:nth-child(2) {
        animation-delay: -0.4s;
      }
      div:nth-child(3) {
        animation-delay: -0.8s;
      }
      div:nth-child(4) {
        animation-delay: -0.4s;
      }
      div:nth-child(5) {
        animation-delay: -0.8s;
      }
      div:nth-child(6) {
        animation-delay: -1.2s;
      }
    }
  }
</style>
