<template>
  <div class="examples">
    <div class="example" v-for="(value, key) in examples">
      <component :is="key" :key="key"></component>
    </div>
  </div>
</template>

<script>
  import examples from './examples'
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

  .md-menu-content {

    width: auto;

    .md-list {

      > .md-list-item {

        .md-list-item-holder {

          .md-icon {
            margin-right: 1rem;
          }
        }
      }
    }
  }

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

      .example-item {
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;

        .codemirror,
        .pre {
          width: 100%;
          overflow-y: auto;
          font-family: Menlo,Monaco,Consolas,Courier New,monospace;
        }

        .codemirror {
          height: 400px;

          > .CodeMirror {
            height: 400px;
          }
        }

        .pre {
          margin-top: 1rem;
          height: auto;
          max-height: 286px;
          display: block;
          padding: 11px;
          font-size: 12px;
          line-height: 1.846;
          word-break: break-all;
          word-wrap: break-word;
          color: #212121;
          background-color: #eee;
        }
      }
    }
  }
</style>
