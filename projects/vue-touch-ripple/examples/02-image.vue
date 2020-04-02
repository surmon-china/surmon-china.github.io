<template>
  <div class="example">
    <touch-ripple class="image-box">
      <img class="image" src="/images/common/vue-logo.png">
    </touch-ripple>
    <touch-ripple
      class="image-box" 
      color="#3fa27c"
      :speed="0.2" 
      :opacity="0.2"
    >
      <img class="image" src="/images/common/vue-logo.png" />
    </touch-ripple>
    <touch-ripple
      class="image-box" 
      color="#36485e"
      :speed="0.5"
      :opacity="0.2"
      transition="cubic-bezier(1, -0.24, 0, 1.92)"
    >
      <img class="image" src="/images/common/vue-logo.png" />
    </touch-ripple>
  </div>
</template>

<script>
  import { touchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/dist/vue-touch-ripple.css'

  export default {
    name: 'touch-ripper-example-image-element',
    title: 'Image element',
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

    .image-box {
      width: 30%;
      padding: 2rem;
      border-radius: 4px;
      background-color: $white;
      overflow: hidden;

      .image {
        width: 100%;
      }
    }
  }
</style>
