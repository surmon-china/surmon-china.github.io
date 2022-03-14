<template>
  <codemirror v-model="code" :options="cmOption" />
</template>

<script>
  import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // language
  import 'codemirror/mode/sql/sql.js'

  // theme css
  import 'codemirror/theme/solarized.css'

  export default {
    name: 'codemirror-example-mysql',
    title: 'Mode: text/x-mysql & Theme: solarized light',
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
          mode: 'text/x-mysql',
          theme: 'solarized light'
        },
        code: dedent`
          -- SQL Mode for CodeMirror
          SELECT SQL_NO_CACHE DISTINCT
              @var1 AS \`val1\`, @'val2', @global.'sql_mode',
              1.1 AS \`float_val\`, .14 AS \`another_float\`, 0.09e3 AS \`int_with_esp\`,
              0xFA5 AS \`hex\`, x'fa5' AS \`hex2\`, 0b101 AS \`bin\`, b'101' AS \`bin2\`,
              DATE '1994-01-01' AS \`sql_date\`, { T "1994-01-01" } AS \`odbc_date\`,
              'my string', _utf8'your string', N'her string',
                  TRUE, FALSE, UNKNOWN
            FROM DUAL
            -- space needed after '--'
            # 1 line comment
            /* multiline
            comment! */
            LIMIT 1 OFFSET 0;
        `
      }
    }
  }
</script>

