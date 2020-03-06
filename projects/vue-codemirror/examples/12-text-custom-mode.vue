<template>
  <codemirror v-model="code" :options="cmOption" />
</template>

<script>
  import dedent from 'dedent'
  import CodeMirror from 'codemirror'
  import { codemirror } from 'vue-codemirror'

  // theme css
  import 'codemirror/theme/solarized.css'

  // define custom mode
  CodeMirror.defineMode('mymode', () => {
    return {
      token(stream, state) {
        if (stream.match('const')) {
          return 'keyword'
        } else if (stream.match('111')) {
          return 'number'
        } else {
          stream.next()
          return null
        }
      }
    }
  })

  export default {
    name: 'codemirror-example-custom',
    title: 'Mode: custom & Theme: solarized light',
    components: {
      codemirror
    },
    data() {
      return {
        code: `const bbb = 222;\nconst ccc = 111;\neee fff ggg`,
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'mymode',
          theme: 'solarized light'
        }
      }
    }
  }
</script>

