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
    <div class="output ql-snow">
      <div class="title">Output</div>
      <div class="ql-editor" v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import dedent from 'dedent'
  export default {
    name: 'quill-example-custom-toolbar',
    title: 'Custom toolbar',
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: '#toolbar'
          }
        },
        content: dedent`
          <h1 class="ql-align-center"><span class="ql-font-serif">Custom toolbar example!</span></h1><p><br></p><p><strong class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</strong></p><p><br></p><p><u class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</u></p><p><br></p><p><em class="ql-font-serif">Dead history is write in ink, the living sort in blood.</em></p><p><br></p><p><strong style="color: rgb(0, 102, 204);">Blog site: </strong><a href="https://surmon.me/" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255);"><strong>https://surmon.me</strong></a></p><p><br></p><p><span class="ql-font-serif" style="color: rgb(0, 102, 204);">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</span></p><p><br></p><p><strong class="ql-font-monospace">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</strong></p>
        `,
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
    height: 30rem;
    overflow: hidden;

    .editor,
    .output {
      width: 50%;
    }

    $toolbar-height: 41px;

    .editor {
      padding-bottom: $toolbar-height;

      .ql-custom-button {
        width: 100px;
      }
    }

    .output {
      border: 1px solid #ccc;
      border-left: none;

      .title {
        height: $toolbar-height;
        line-height: $toolbar-height;
        padding-left: $gap;
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>
