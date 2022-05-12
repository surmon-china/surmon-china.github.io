<template>
  <div class="editor">
    <div class="main">
      <codemirror
        v-model="code"
        :style="{
          width: preview ? '50%' : '100%',
          height: config.height,
          backgroundColor: '#fff',
          color: '#333'
        }"
        placeholder="Please enter the code."
        :extensions="extensions"
        :autofocus="config.autofocus"
        :indent-with-tab="config.indentWithTab"
        :tabSize="config.tabSize"
        :disabled="config.disabled"
        @update="handleStateUpdate"
        @ready="log('ready', $event)"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
      />
      <pre
        class="code"
        v-if="preview"
        :style="{ height: config.height, width: preview ? '50%' : '0px' }"
        >{{ code }}</pre
      >
    </div>
    <div class="divider"></div>
    <div class="footer">
      <button class="preview" @click="togglePreview">
        <span>Preview</span>
        <i class="iconfont" :class="preview ? 'icon-eye' : 'icon-eye-close'"></i>
      </button>
      <div class="right">
        <span class="item">Spaces: {{ config.tabSize }}</span>
        <span class="item">Length: {{ state.length }}</span>
        <span class="item">Lines: {{ state.lines }}</span>
        <span class="item">Cursor: {{ state.cursor }}</span>
        <span class="item">Selected: {{ state.selected }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    shallowRef,
    computed,
    watch,
    onMounted,
    PropType
  } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { ViewUpdate } from '@codemirror/view'

  export default defineComponent({
    name: 'vue-codemirror-example',
    title: 'Web IDE example',
    url: import.meta.url,
    props: {
      config: {
        type: Object,
        required: true
      },
      languages: {
        type: Object as PropType<{ [key: string]: any }>,
        required: true
      },
      themes: {
        type: Object as PropType<{ [key: string]: any }>,
        required: true
      },
      codes: {
        type: Object as PropType<{ [key: string]: string }>,
        required: true
      }
    },
    components: {
      Codemirror
    },
    setup(props) {
      const log = console.log
      const code = shallowRef(props.codes[props.config.language])
      const resetCode = (language: string) => {
        code.value = props.codes[language] ?? 'Hello, world!'
      }

      const preview = shallowRef(false)
      const togglePreview = () => {
        preview.value = !preview.value
      }

      const extensions = computed(() => {
        const result = []
        if (props.languages[props.config.language]) {
          result.push(props.languages[props.config.language]())
        }
        if (props.themes[props.config.theme]) {
          result.push(props.themes[props.config.theme])
        }
        return result
      })

      const state = reactive({
        lines: null as null | number,
        cursor: null as null | number,
        selected: null as null | number,
        length: null as null | number
      })

      const handleStateUpdate = (viewUpdate: ViewUpdate) => {
        // selected
        const ranges = viewUpdate.state.selection.ranges
        state.selected = ranges.reduce((plus, range) => plus + range.to - range.from, 0)
        state.cursor = ranges[0].anchor
        // length
        state.length = viewUpdate.state.doc.length
        state.lines = viewUpdate.state.doc.lines
        log('viewUpdate', viewUpdate)
      }

      onMounted(() => {
        watch(
          () => props.config.language,
          (language) => resetCode(language)
        )
      })

      return {
        code,
        extensions,
        preview,
        togglePreview,
        state,
        handleStateUpdate,
        log
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .editor {
    .divider {
      height: 1px;
      background-color: $border-color;
    }

    .main {
      display: flex;
      width: 100%;

      .code {
        width: 30%;
        height: 100px;
        margin: 0;
        padding: 0.4em;
        overflow: scroll;
        border-left: 1px solid $border-color;
        font-family: monospace;
      }
    }

    .footer {
      height: 3rem;
      padding: 0 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 90%;

      .preview {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 1px dashed $border-color;
        font-size: $font-size-small;
        color: $text-secondary;
        cursor: pointer;
        .iconfont {
          margin-left: $xs-gap;
        }
        &:hover {
          color: $text-color;
          border-color: $text-color;
        }
      }

      .item {
        margin-left: 2em;
      }
    }
  }
</style>
