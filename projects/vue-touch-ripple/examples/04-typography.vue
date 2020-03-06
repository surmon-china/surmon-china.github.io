<template>
  <div class="example">
    <touch-ripple
      class="typography-box"
      color="#999"
      :speed="2"
      :opacity="0.3"
      transition="ease-in-out"
    >
      <h1>Talk is cheap. Show me the code.</h1>
    </touch-ripple>
    <touch-ripple
      class="typography-box"
      color="#999"
      :speed="2"
      :opacity="0.3"
      transition="ease-in-out"
    >
      <p>Stay hungry. Stay foolish.</p>
    </touch-ripple>
    <p class="typography-box">
      <span>Because</span>
      <touch-ripple
        color="#999"
        :speed="2"
        :opacity="0.3"
        transition="ease-in-out"
      >
        <strong class="red">the mountain</strong>
      </touch-ripple>
      <span>was there.</span>
    </p>
  </div>
</template>

<script>
  import { touchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/dist/vue-touch-ripple.css'

  export default {
    name: 'touch-ripper-example-typography-element',
    title: 'Typography element',
    components: {
      touchRipple
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .typography-box {
      width: 100%;
      text-align: center;
      user-select: none;

      .red {
        color: red;
      }
    }
  }
</style>
