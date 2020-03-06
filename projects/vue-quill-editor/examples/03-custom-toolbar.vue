<template>
  <div class="example">
    <quill-editor
      class="editor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
      <div id="toolbar" slot="toolbar">
        <!-- Add a bold button -->
        <button class="ql-bold">Bold</button>
        <button class="ql-italic">Italic</button>
        <!-- Add font size dropdown -->
        <select class="ql-size">
          <option value="small"></option>
          <!-- Note a missing, thus falsy value, is used to reset to default -->
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
        <select class="ql-font">
          <option selected="selected"></option>
          <option value="serif"></option>
          <option value="monospace"></option>
        </select>
        <!-- Add subscript and superscript buttons -->
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
        <!-- You can also add your own -->
        <button class="ql-custom-button" @click="customButtonClick">[ Click me ]</button>
      </div>
    </quill-editor>
    <div class="output html">
      <div class="ql-editor" v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import dedent from 'dedent'
  import { quillEditor } from 'vue-quill-editor'

  // import theme style
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.bubble.css'

  export default {
    name: 'quill-example-custom-toolbar',
    title: 'Custom toolbar',
    components: {
      quillEditor
    },
    data() {
      return {
        name: 'quill-example-toolbar',
        content: dedent`
          <h1 class="ql-align-center">
            <span class="ql-font-serif"><span class="ql-cursor">﻿</span>I am Example 3!</span></span>
          </h1>
          <p><br></p>
          <p><strong class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</strong></p>
          <p><br></p>
          <p><u class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</u></p>
          <p><br></p>
          <p><em class="ql-font-serif">Dead history is write in ink, the living sort in blood.</em></p>
          <p><br></p>
          <p><span class="ql-font-serif" style="color: rgb(0, 102, 204);">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</span></p>
          <p><br></p>
          <p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p>
          <p><br></p>
          <p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p>
          <p><br></p>
          <p><span class="ql-font-serif">Chaos not is a pit, chaos is a ladder.</span></p>
          <p><br></p>
          <p><span class="ql-font-serif">A chain needs all sorts of metals, and a land needs all sorts of people.</span></p>
          <p><br></p>
          <p><span class="ql-font-serif">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</p>
        `,
        editorOption: {
          modules: {
            toolbar: '#toolbar'
          }
        }
      }
    },
    methods: {
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      },
      customButtonClick() {
        alert(`You can custom the button and listen click event to do something...`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;

    .editor,
    .output {
      width: 50%;
      height: 30rem;
    }

    .editor {
      .ql-custom-button {
        width: 100px;
      }
    }

    .output {
      border: 1px solid #ccc;
      border-left: none;
    }
  }
</style>
