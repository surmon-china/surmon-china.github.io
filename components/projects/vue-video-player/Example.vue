<template>
  <div class="examples">
    <div class="example" v-for="(value, key) in examples">
      <component :is="key"></component>
    </div>
  </div>
</template>

<script>
  import examples from '@components/vue-video-player/examples'
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

      .md-card {
        box-shadow: none;
        overflow-y: hidden;

        .md-card-actions {
          background-color: #fafafa;
          justify-content: space-between;

          .md-subhead {
            padding: 8px;
            text-transform: capitalize;
          }
        }

        .md-card-media {

          > .item {
            height: 360px;
            display: flex;
            justify-content: space-between;

            > .player {
              width: 100%;

              .video-js {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
