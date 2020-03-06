<template>
  <div class="example">
    <touch-ripple class="button-box" :speed="2">
      <button class="button b-1">speed = 2</button>
    </touch-ripple>
    <touch-ripple class="button-box" color="#fff1b3" :speed="0.7">
      <button class="button b-2">speed = 0.7; color = #fff1b3</button>
    </touch-ripple>
    <touch-ripple class="button-box" :speed="1.5">
      <button class="button b-3">speed = 1.5</button>
    </touch-ripple>
    <touch-ripple class="button-box" color="#eee" :speed="0.5">
      <button class="button b-4">speed = 1.5; color = #eee</button>
    </touch-ripple>
    <touch-ripple class="button-box" color="#efefef">
      <button class="button b-5">color = #efefef</button>
    </touch-ripple>
    <touch-ripple class="button-box" :speed="1.1">
      <button class="button b-6">speed = 1.1</button>
    </touch-ripple>
  </div>
</template>

<script>
  import { touchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/dist/vue-touch-ripple.css'

  export default {
    name: 'touch-ripper-example-button-element',
    title: 'Button element',
    components: {
      touchRipple
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .button {
      width: auto;
      height: 46px;
      line-height: 46px;
      border: none;
      border-radius: 5px;
      padding: 0 1rem;
      color: $white;
      cursor: pointer;
      transition: filter $transition-time-fast;

      &:hover {
        filter: brightness(1.1);
      }

      &.b-1 {
        background-color: #2EA9DF;
      }

      &.b-2 {
        background-color: #E9CD4C;
      }

      &.b-3 {
        background-color: #ffb3a7;
      }

      &.b-4 {
        background-color: #227D51;
      }

      &.b-5 {
        background-color: #75878a;
      }

      &.b-6 {
        background-color: #0F2540;
      }
    }
  }
</style>
