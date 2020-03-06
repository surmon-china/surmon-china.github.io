<template>
  <codemirror v-model="code" :options="cmOption" />
</template>

<script>
  import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // language
  import 'codemirror/mode/css/css.js'

  // theme css
  import 'codemirror/theme/paraiso-light.css'

  // require active-line.js
  import'codemirror/addon/selection/active-line.js'
  
  export default {
    name: 'codemirror-example-css',
    title: 'Mode: text/css & Theme: paraiso-light',
    components: {
      codemirror
    },
    data() {
      return {
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/css',
          theme: 'paraiso-light'
        },
        code: dedent`
          /* Some example CSS */
          @import url("something.css");

          body {
            margin: 0;
            padding: 3em 6em;
            font-family: tahoma, arial, sans-serif;
            color: #000;
          }

          #navigation a {
            font-weight: bold;
            text-decoration: none !important;
          }

          h1 {
            font-size: 2.5em;
          }

          h2 {
            font-size: 1.7em;
          }

          h1:before, h2:before {
            content: "::";
          }

          code {
            font-family: courier, monospace;
            font-size: 80%;
            color: #418A8A;
          }
        `
      }
    }
  }
</script>

