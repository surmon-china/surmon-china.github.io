<template>
  <div class="example">
    <div class="toolbar">
      <label class="case">
        Select a case:
        <select class="select" name="case" id="case" v-model="caseIndex">
          <option :value="index" :key="index" v-for="(e, index) in cases">
            {{ e.name }}
          </option>
        </select>
      </label>
      <div class="right">
        <button class="button" @click="runClassifier" :disabled="loading">
          <i class="iconfont icon-play"></i>
          <span>Run code</span>
          <span v-if="loading">&nbsp;(Loading...)</span>
        </button>
        <button class="button" @click="clearLog">
          <i class="iconfont icon-close"></i>
          <span>Clear logs</span>
        </button>
        <button class="button" @click="clearCode">
          <i class="iconfont icon-close"></i>
          <span>Clear code</span>
        </button>
      </div>
    </div>
    <div class="divider"></div>
    <codemirror
      v-model="codes.disabled"
      :style="{ height: 'auto' }"
      :extensions="editorExtensions"
      disabled
    />
    <div class="divider"></div>
    <codemirror
      v-model="codes.enabled"
      :extensions="editorExtensions"
      :style="{ minHeight: '20em', maxHeight: '40em' }"
      autofocus
      @ready="handleEditorReady"
    />
    <div class="divider"></div>
    <div class="output">
      <p class="title">Console</p>
      <pre class="result">{{ log || '-' }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
  import dedent from 'dedent'
  import { defineComponent, reactive, ref, computed, nextTick, onMounted, watch } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { javascript } from '@codemirror/lang-javascript'
  import { oneDark } from '@codemirror/theme-one-dark'
  import { Theme, useTheme } from '@/composables/theme'
  import case1 from './01-base'
  import case2 from './02-spam'
  import case3 from './03-news'
  import case4 from './04-writer'

  const normalizeInputCode = (code: string) => `\n${code}\n`

  export default defineComponent({
    name: 'naivebayes-example-base',
    title: 'NaiveBayes Web example',
    url: import.meta.url,
    components: {
      Codemirror
    },
    setup() {
      const cases = [case1, case2, case3, case4]
      const caseIndex = ref(0)
      const codes = reactive({
        disabled: cases[caseIndex.value].init,
        enabled: normalizeInputCode(cases[caseIndex.value].code)
      })

      const log = ref('')
      const consoleLog = (..._logs: string[]) => {
        window.console.log(_logs)
        log.value += `${Array.prototype.slice
          .call(_logs)
          .map((item) => {
            return typeof item === 'string' ? item : JSON.stringify(item)
          })
          .join('')}\n`
      }

      const editor = ref<any>(null)
      const handleEditorReady = (payload: any) => {
        editor.value = payload.view
      }
      const editorExtensions = computed(() => {
        return [javascript(), useTheme().theme.value === Theme.Dark ? oneDark : []]
      })

      const loading = ref(false)
      const runClassifier = async () => {
        loading.value = true
        const classifier = await cases[caseIndex.value].factory()
        loading.value = false
        const console = {
          ...window.console,
          log: consoleLog
        }
        eval(codes.enabled)
      }

      const clearCode = () => {
        codes.enabled = normalizeInputCode(dedent`
          console.log(classifier)

          // your code goes here...
        `)

        nextTick(() => {
          editor.value?.focus()
        })
      }

      const clearLog = () => {
        log.value = ''
      }

      onMounted(() => {
        watch(
          () => caseIndex.value,
          (index) => {
            const target = cases[index]
            codes.disabled = target.init
            codes.enabled = normalizeInputCode(target.code)
            clearLog()
          }
        )
      })

      return {
        cases,
        caseIndex,
        editorExtensions,
        handleEditorReady,
        loading,
        log,
        codes,
        runClassifier,
        clearCode,
        clearLog
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .toolbar {
    height: 3rem;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .select,
    .button {
      padding: 0.2em;
    }

    .button {
      margin-left: $gap;
      border: 1px solid $text-disabled;
      border-radius: 2px;
      display: inline-flex;
      align-items: center;
      background: none;
      color: $text-secondary;
      cursor: pointer;
      .iconfont {
        margin-right: $xs-gap;
      }
      &:hover {
        color: $link-color;
      }
    }
  }

  .divider {
    height: 1px;
    background-color: $border-color;
  }

  .output {
    padding: 0 1em;

    .result {
      border-radius: 2px;
      border: 1px solid $text-secondary;
      padding: 1em;
      overflow: auto;
    }
  }
</style>
