<template>
  <div class="example">
    <touch-ripple
      class="div-box box-1"
      :speed="2"
      :opacity="0.3"
      color="#999"
      transition="cubic-bezier(0.18, 0.89, 0.32, 1.28)"
    >
      <div class="box">
        <code>cubic-bezier(0.18, 0.89, 0.32, 1.28)</code>
      </div>
    </touch-ripple>
    <touch-ripple
      class="div-box box-2"
      :speed="2"
      :opacity="0.3"
      color="#fff"
      transition="cubic-bezier(0.6, -0.28, 0.74, 0.05)"
    >
      <div class="box">
        <code>cubic-bezier(0.6, -0.28, 0.74, 0.05)</code>
      </div>
    </touch-ripple>
    <touch-ripple
      class="div-box box-3"
      :speed="2"
      :opacity="0.3"
      color="#eee"
      transition="cubic-bezier(0.89, 0.24, 0, 0.94)"
    >
      <div class="box">
        <code>cubic-bezier(0.89, 0.24, 0, 0.94)</code>
      </div>
    </touch-ripple>
    <touch-ripple
      class="div-box box-4"
      :speed="0.7"
      :opacity="0.5"
      color="#fff"
      transition="cubic-bezier(1, -0.24, 0, 1.92)"
    >
      <div class="box">
        <code>cubic-bezier(1, -0.24, 0, 1.92)</code>
      </div>
    </touch-ripple>
  </div>
</template>

<script>
  import { touchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/dist/vue-touch-ripple.css'

  export default {
    name: 'touch-ripper-example-div-element',
    title: 'Div element',
    components: {
      touchRipple
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem;

    .div-box {
      width: calc(50% - 1rem);
      height: 14rem;
      line-height: 14rem;
      text-align: center;
      color: $white;

      &.box-1,
      &.box-2 {
        margin-bottom: 2rem;
      }

      &.box-1 {
        background: #36485e;
      }

      &.box-2 {
        background: #B481BB;
      }

      &.box-3 {
        background: #5DAC81;
      }

      &.box-4 {
        background: #1E88A8;
      }

      .box {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
