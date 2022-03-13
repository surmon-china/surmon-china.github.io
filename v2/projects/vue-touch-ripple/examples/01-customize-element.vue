<template>
  <div class="example">
    <touch-ripple class="love" color="#fff">
      <div class="heart">
        <span class="text">Surmon</span>
      </div>
    </touch-ripple>
  </div>
</template>

<script>
  import { touchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/dist/vue-touch-ripple.css'

  export default {
    name: 'touch-ripper-example-customize-element',
    title: 'Customize element',
    components: {
      touchRipple
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    .love {
      cursor: pointer;

      > .heart{
        position: relative;
        width: 420px;
        height: 360px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        > .text {
          color: white;
          z-index: 999999;
          font-size: 30px;
          margin-bottom: 60px;
          margin-left: 20px;
          user-select: none;
        }

        &:before,
        &:after {
          position: absolute;
          content: "";
          left: 220px;
          top: 10px;
          width: 220px;
          height: 340px;
          background: #fc2e5a;
          border-radius: 200px 200px 0 0;
          transform: rotate(-45deg);
          transform-origin: 0 100%;
        }

        &:after {
          left: 0;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
        }
      }
    }
  }
</style>
