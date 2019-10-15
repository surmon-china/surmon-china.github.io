<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>01 Example (theme snow)</span>
      </div>
      <md-button class="md-icon-button" target="_blank" href="https://github.com/surmon-china/vue-quill-editor/tree/master/examples/01-example.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor
          ref="myTextEditor"
          :options="editorOption1"
          v-model="content"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)">
        </quill-editor>
        <!-- <quill-editor v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
          <div id="toolbar" slot="toolbar">
            <button class="ql-bold">Bold</button>
            <button class="ql-italic">Italic</button>
            <button id="custom-button" @click="customButtonClick">
              <img src="data:image/png;base64,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" alt="">
            </button>
            <select class="ql-size">
              <option value="small"></option>
              <option selected></option>
              <option value="large"></option>
              <option value="huge"></option>
            </select>
            <select class="ql-font">
              <option selected="selected"></option>
              <option value="mirza">Mirza</option>
              <option value="serif"></option>
              <option value="monospace"></option>
              <option value="黑体">黑体</option>
            </select>
            <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button>
            <button id="custom-button" @click="customButtonClick">[ Click me ]</button>
          </div>
        </quill-editor> -->
        <!-- <quill-editor v-model="content" :options="editorOption1"></quill-editor> -->
        <!-- <div class="quill-editor" v-model="content" v-quill:myQuillEditor="editorOption1"></div> -->
        <hr>
        <div v-text="content"></div>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  import Quill from 'quill'
  // const FontAttributor = Quill.import('attributors/class/font');
  // FontAttributor.whitelist = [
  //   'Arial', 'serif', 'sans-serif', '宋体', '黑体', 'Microsoft YaHei', 'monospace', 'cursive'
  // ];
  // Quill.register(FontAttributor, true);
  const Font = Quill.import('formats/font')
  Font.whitelist = ['mirza', 'roboto'];
  Quill.register(Font, true);
  // import { ImageImport } from '@/components/vue-quill-editor/modules/ImageImport.js'
  // import { ImageResize } from '@/components/vue-quill-editor/modules/ImageResize.js'
  // console.log(ImageResize)
  // Quill.register('modules/imageImport', ImageImport)
  // Quill.register('modules/imageResize', ImageResize)
  export default {
    data() {
      return {
        name: 'base-example',
        content: '<p>1-2-3-4-5-6-7-8-9-0<p>',
        editorOption: {
          modules: {
            toolbar: '#toolbar'
          }
        },
        editorOption1: {
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'script': 'sub'}, { 'script': 'super' }],
              [{ 'indent': '-1'}, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'color': [] }, { 'background': [] }],
              // [{ 'font': ['Arial', 'serif', 'sans-serif', '宋体', '黑体', 'Microsoft YaHei', 'monospace', 'cursive'] }],
              [{ 'font': ['mirza', 'roboto'] }],
              ['link', 'image', 'video']
            ]
          },
          // placeholder: 'Compose an epic...'
        },
        editorOption2: {
          modules: {
            toolbar: '#toolbar-b'
          }
        }
      }
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      customButtonClick() {
        console.log(this)
      },
      update(event) {
        console.log('hahha', event)
        event.preventDefault()
        return false
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      }
    },
    mounted() {
      console.log('this is my editor', this.editor)
      setTimeout(() => {
        this.editor.insertEmbed(10, 'image', 'http://quilljs.com/images/cloud.png');
        // this.content = '<h1>content changed!</h1><p><img src="/vue-quill-editor/static/images/surmon-6.jpg" width="500" style=""></p>'
      }, 1800)
    }
  }
</script>

<style>
  .ql-font-roboto {
    font-family: '宋体', sans-serif;
  }
</style>

<style lang="scss">
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }

  .html {
    height: 9em;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    resize: vertical;
  }
</style>
