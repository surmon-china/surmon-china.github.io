<template>
  <codemirror v-model="code" :options="cmOption" />
</template>

<script>
  import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // language
  import 'codemirror/mode/php/php.js'

  // theme css
  import 'codemirror/theme/cobalt.css'

  // require active-line.js
  import'codemirror/addon/selection/active-line.js'

  export default {
    name: 'codemirror-example-php',
    title: 'Mode: application/x-httpd-php & Theme: cobalt',
    components: {
      codemirror
    },
    data() {
      return {
        code: dedent`
          <?php
            $a = array('a' => 1, 'b' => 2, 3 => 'c');

            echo "$a[a] \${a[3] /* } comment */} {$a[b]} $a[a]";

            function hello($who) {
              return "Hello $who!";
            }
          ?>
          <p>The program says <?= hello("World") ?>.</p>
        `,
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'application/x-httpd-php',
          lineWrapping: true,
          theme: 'cobalt'
        }
      }
    }
  }
</script>

