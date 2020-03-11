<template>
  <div class="example">
    <quill-editor
      class="editor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />
    <div class="output">
      <code class="hljs xml" v-html="contentCode"></code>
    </div>
  </div>
</template>

<script>
  import dedent from 'dedent'
  import hljs from 'highlight.js'
  import { Quill } from 'vue-quill-editor'
  import quillEmoji from 'quill-emoji'
  import 'quill-emoji/dist/quill-emoji.css'
  import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)

  export default {
    name: 'quill-example-register-modules',
    title: 'Register modules',
    data() {
      return {
        name: 'register-modules-example',
        content: dedent`
          <p><span class="ql-emojiblot" data-name="grinning">﻿<span contenteditable="false"><span class="ap ap-grinning">😀</span></span>﻿</span></p><p><br></p><p><em>Register Quill emoji module</em></p><p><br></p><p><em>Register QuillBetterTable module</em></p>
        `,
        editorOption: {
          theme: 'snow',
          modules: {
            "emoji-toolbar": true,
            "emoji-shortname": true,
            toolbar: {
              container: [
                ['image'],
                ['emoji']
              ],
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            },
            ImageExtend: {
              loading: true,
              name: 'img',
              action: 'https://github.surmon.me/images/',
              error: (error) => {
                console.log('error', error)
                return Promise.resolve()
              },
              response: (res) => {
                return 'https://github.surmon.me/images/background.jpg'
              }
            },
          }
        }
      }
    },
    computed: {
      contentCode() {
        return hljs.highlightAuto(this.content).value
      },
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    height: 20rem;
    overflow: hidden;

    .editor,
    .output {
      width: 50%;
      height: 100%;
    }

    .output {
      border: none;

      > code {
        width: 100%;
        margin: 0;
        padding: 1rem;
        border: 1px solid #ccc;
        border-top: none;
        border-left: none;
        border-radius: 0;
        height: 100%;
        overflow-y: auto;
      }
    }
  }
</style>
