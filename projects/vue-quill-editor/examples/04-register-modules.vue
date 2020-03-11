<template>
  <div class="example">
    <quill-editor
      class="editor"
      v-model="content"
      :options="editorOption"
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
  import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
  import quillEmoji from 'quill-emoji'
  import 'quill-emoji/dist/quill-emoji.css'

  const testImageAPI = 'https://github.surmon.me/images/'
  const testImageUrl = testImageAPI + 'background.jpg'

  Quill.register('modules/ImageExtend', ImageExtend)

  export default {
    name: 'quill-example-register-modules',
    title: 'Register modules',
    data() {
      return {
        name: 'register-modules-example',
        content: dedent`
          <p><span class="ql-emojiblot" data-name="grinning">﻿<span contenteditable="false"><span class="ap ap-grinning">😀</span></span>﻿</span></p><p><br></p><p><em>Register </em><a href="https://github.com/contentco/quill-emoji" rel="noopener noreferrer" target="_blank"><em>Quill emoji module</em></a></p><p><br></p><p><em>Register </em><a href="https://github.com/NextBoy/quill-image-extend-module" rel="noopener noreferrer" target="_blank"><em>Quill image extend module</em></a></p>
        `,
        editorOption: {
          theme: 'snow',
          modules: {
            "emoji-toolbar": true,
            "emoji-shortname": true,
            toolbar: {
              container: [
                ['link', 'image', 'emoji']
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
              response: (res) => {
                return testImageUrl
              }
            }
          }
        }
      }
    },
    computed: {
      contentCode() {
        return hljs.highlightAuto(this.content).value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    height: 20rem;

    .editor,
    .output {
      width: 50%;
      height: 100%;
    }

    .editor {
      padding-bottom: 40px;
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
