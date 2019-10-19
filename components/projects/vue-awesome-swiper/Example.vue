<template>
  <div class="examples">
    <div class="example" v-for="(value, key) in examples" :key="key">
      <component v-bind:is="key"></component>
    </div>
  </div>
</template>

<script>
  import examples from '@components/vue-awesome-swiper/examples'
  export default {
    name: 'app',
    data() {
      return {
        examples
      }
    },
    components: examples
  }
</script>

<style lang="scss">
  .examples {

    > .example {
      margin-bottom: 2em;

      .md-card {
        box-shadow: none;

        .md-card-actions {
          background-color: #fafafa;
          justify-content: space-between;

          .md-subhead {
            padding: 8px;
            text-transform: capitalize;
          }
        }
      }

      .swiper-container {
        height: 300px;
        width: 100%;

        .swiper-slide {
          text-align: center;
          font-size: 38px;
          font-weight: 700;
          background-color: #eee;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
      }
    }
  }
</style>
