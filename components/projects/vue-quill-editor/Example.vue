<template>
  <div class="examples">
    <div
      class="example"
      :key="key"
      v-for="(value, key) in examples"
      :class="{ 'vue': key === 'exampleVue' }">
      <component :is="key"></component>
    </div>
  </div>
</template>

<script>
  import examples from '@components/vue-quill-editor/examples'
  // console.log(examples)
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

      &.vue {
        width: 100%;
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

          img {
            width: attr(width);
          }

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
