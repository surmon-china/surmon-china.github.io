
<template>
  <div class="example">
    <client-only>
      <codemirror
        class="codemirror"
        v-model="code"
        :options="cmOption"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      />
    </client-only>
    <pre class="pre">{{ code }}</pre>
  </div>
</template>

<script>
  import dedent from 'dedent'
  export default {
    name: 'codemirror-example-nuxt',
    data() {
      return {
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-vue',
          theme: 'base16-dark'
        },
        code: dedent`
          <template>
            <main>
              <h1>Hello World!</h1>
              <p>{{ message }}</p>
            </main>
          </template>

          <script>
            export default {
              data() {
                return {
                  message: 'Hi!'
                }
              }
            }
          ${'<\/script>'}

          <style lang="scss">
            @import './sass/variables';
            main {
              position: relative;
            }
          </style>
        `
      }
    },
    methods: {
      onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
      onCmReady(codemirror) {
        console.debug('onCmReady', codemirror)
      },
      onCmFocus(codemirror) {
        console.debug('onCmFocus', codemirror)
      },
      onCmBlur(codemirror) {
        console.debug('onCmBlur', codemirror)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    height: 100%;

    .codemirror,
    .pre {
      width: 50%;
      height: 100%;
      margin: 0;
      overflow: auto;
    }

    .pre {
      display: block;
      padding: 1rem;
      font-size: $font-size-small;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
</style>
