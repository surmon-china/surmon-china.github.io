<template>
  <div class="examples">
    <div class="example" 
         :key="key"
         v-for="(value, key) in examples" 
         :class="{ 
          'vue': key === 'example01',
          'merge': key === 'example14'
        }">
      <component :is="key"></component>
    </div>
  </div>
</template>

<script>
  import examples from '@components/vue-codemirror/examples'
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

<style>
  .CodeMirror,
  .CodeMirror-merge {
    height: 360px!important;
  }
</style>

<style lang="scss">
  .examples {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    > .example {
      width: 48%;
      margin-bottom: 2em;

      &.vue,
      &.merge {
        width: 100%;
      }

      &.merge {

        .md-card {
          overflow: hidden;
        }
      }

      .md-card {
        box-shadow: none;

        .md-card-actions {
          background-color: var(--md-theme-github-background, #fafafa);
          justify-content: space-between;

          .md-subhead {
            padding: 8px;
            text-transform: capitalize;
          }
        }

        .md-card-media {

          .vue {
            height: 360px;
            display: flex;
            justify-content: space-between;


            .codemirror,
            .pre {
              height: 360px;
              width: 50%;
              overflow-y: auto;
              font-family: Menlo,Monaco,Consolas,Courier New,monospace;
            }

            .codemirror {
            }

            .pre {
              display: block;
              padding: 11px;
              font-size: 12px;
              line-height: 1.846;
              word-break: break-all;
              word-wrap: break-word;
              color: #212121;
              background-color: #eee;
              border: none;
              border-radius: 0;
            }
          }
        }
      }
    }
  }
</style>
