<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>mode: {{ editorOption.mode }}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>theme: {{ editorOption.theme }}</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-codemirror/tree/master/examples/12-text-x-mysql.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <div class="codemirror">
        <!-- codemirror -->
        <codemirror v-model="code"
                    v-if="cmRender"
                    :options="editorOption" 
                    @scroll="scroll"
                    @beforeSelectionChange="beforeSelectionChange"
                    @changes="changes"></codemirror>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  import VueCodemirror, { CodeMirror } from 'vue-codemirror'
  // import CodeMirror from 'codemirror'
  import 'codemirror/addon/selection/active-line.js';
  import 'codemirror/addon/mode/simple.js'
  import 'code-mirror-themes/themes/birds-of-paradise.css'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/vue/vue.js'
  
  CodeMirror.defineMode('mymode', () => {
    return {
      token(stream, state) {
        if (stream.match("aaa")) {
          return "keyword"
        } else if (stream.match("111")) {
          return "number"
        } else {
          stream.next()
          return null
        }
      }
    }
  })

  CodeMirror.defineSimpleMode("simplemode", {
    // The start state contains the rules that are intially used
    start: [
      // The regex matches the token, the token property contains the type
      {regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string"},
      // You can match multiple tokens at once. Note that the captured
      // groups must span the whole string in this case
      {regex: /(function)(\s+)([a-z$][\w$]*)/,
       token: ["keyword", null, "variable-2"]},
      // Rules are matched in the order in which they appear, so there is
      // no ambiguity between this one and the one above
      {regex: /(?:function|var|return|if|for|while|else|do|this)\b/,
       token: "keyword"},
      {regex: /true|false|null|undefined/, token: "atom"},
      {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
       token: "number"},
      {regex: /\/\/.*/, token: "comment"},
      {regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3"},
      // A next property will cause the mode to move to a different state
      {regex: /\/\*/, token: "comment", next: "comment"},
      {regex: /[-+\/*=<>!]+/, token: "operator"},
      // indent and dedent properties guide autoindentation
      {regex: /[\{\[\(]/, indent: true},
      {regex: /[\}\]\)]/, dedent: true},
      {regex: /[a-z$][\w$]*/, token: "variable"},
      // You can embed other modes with the mode property. This rule
      // causes all code between << and >> to be highlighted with the XML
      // mode.
      {regex: /<</, token: "meta", mode: {spec: "xml", end: />>/}}
    ],
    // The multi-line comment state.
    comment: [
      {regex: /.*?\*\//, token: "comment", next: "start"},
      {regex: /.*/, token: "comment"}
    ],
    // The meta property contains global information about the mode. It
    // can contain properties like lineComment, which are supported by
    // all modes, and also directives like dontIndentStates, which are
    // specific to simple modes.
    meta: {
      dontIndentStates: ["comment"],
      lineComment: "//"
    }
  })

  console.log('VueCodemirror.CodeMirror.modes', VueCodemirror.CodeMirror.modes);
  console.log('CodeMirror.modes', CodeMirror.modes);

  export default {
    data() {
      return {
        cmRender: false,
        code: `aaa bbb ccc 111 eee fff ggg`,
        editorOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'simplemode',
          // theme: 'solarized light'
          theme: 'birds-of-paradise'
        }
      }
    },
    methods: {
      scroll() {
        console.log('scroll')
      },
      changes() {
        console.log('changes')
      },
      beforeSelectionChange(a, b, c, d) {
        console.log('beforeSelectionChange', 'a', a, 'b', b, 'c', c, 'd', d)
      }
    },
    mounted() {
      setTimeout(() => {
        this.cmRender = true;
        console.log('cmRender', this.cmRender);
      }, 2000);
    },
  }
</script>

