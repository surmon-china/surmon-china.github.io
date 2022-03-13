<template>
  <div class="example">
    <quill-editor
      class="editor"
      v-model="content"
      :options="editorOption"
    />
    <div class="output ql-snow">
      <div class="title">Output</div>
      <div class="ql-editor" v-html="this.content"></div>
    </div>
  </div>
</template>

<script>
  import dedent from 'dedent'
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

    $toolbar-height: 42px;

    .editor {
      padding-bottom: $toolbar-height;
    }

    .output {
      border: none;

      .title {
        height: $toolbar-height;
        line-height: $toolbar-height;
        padding-left: $gap;
        border-bottom: 1px solid #ccc;
      }

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
