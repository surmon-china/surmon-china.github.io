<template>
  <div class="examples">
    <div class="example" v-for="(value, key) in examples">
      <component :is="key"></component>
    </div>
  </div>
</template>

<script>
  import examples from '@components/vue-touch-ripple/examples'
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
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    > .example {
      width: 100%;
      margin-bottom: 2em;

      &:last-child {
        margin: 0;
      }

      .md-card {
        box-shadow: none;
        overflow: visible;

        .md-card-actions {
          background-color: #fafafa;
          justify-content: space-between;

          .md-subhead {
            padding: 8px;
            text-transform: capitalize;
          }
        }

        .md-card-media {

          .vue {
            height: 300px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
</style>
