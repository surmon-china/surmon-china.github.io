<template>
  <homepage-example-card v-bind="$attrs">
    <div class="actions" slot="actions">
      <button class="button" @click="init" :disabled="initing || inited">
        <i class="iconfont icon-stop"></i>
        <span>{{
          initing
            ? 'Initing...'
            : (inited ? 'Inited' : 'Init')
        }}</span>
      </button>
      <button class="button" @click="runClassifier" :disabled="!inited">
        <i class="iconfont icon-play"></i>
        <span>运行代码</span>
      </button>
      <button class="button" @click="saveLearnHistory" :disabled="!inited">
        <i class="iconfont icon-download"></i>
        <span>缓存学习记录</span>
      </button>
      <button class="button" @click="loadLearnHistory" :disabled="!inited">
        <i class="iconfont icon-upload"></i>
        <span>载入上次学习记录</span>
      </button>
      <button class="button" @click="clearLearnHistory" :disabled="!inited">
        <i class="iconfont icon-close"></i>
        <span>清空学习记录</span>
      </button>
    </div>
    <codemirror
      class="codemirror-1"
      :options="disabledEditorOption"
      v-model="disabledCode"
    />
    <codemirror
      class="codemirror-2"
      :options="editorOption"
      v-model="mlCode"
    />
    <div class="output">
      <p class="title">Console:</p>
      <pre class="result">{{ classifierLog }}</pre>
    </div>
  </homepage-example-card>
</template>

<script>
  import dedent from 'dedent'
  import NaiveBayes from 'naivebayes'
  import HomepageExampleCard from '@/components/homepage/card-example.vue'
  import 'codemirror/addon/selection/active-line.js'

  export default {
    name: 'naivebayes-example-chinese',
    props: {
      localStorageKey: String,
      mlCode: String
    },
    components: {
      HomepageExampleCard
    },
    data () {
      return {
        inited: false,
        initing: false,
        classifierLog: 'No output\n',
        disabledEditorOption: {
          readOnly: 'nocursor',
          tabSize: 4,
          lineNumbers: true,
          line: true,
          theme: 'base16-dark'
        },
        editorOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          theme: 'base16-dark'
        },
        disabledCode: dedent`
          import NaiveBayes from 'naivebayes'
          import { Segment, useDefault } from 'segmentit' // 中文分词库

          const segmentit = useDefault(new Segment())
          const classifier = new NaiveBayes({
            // 自定义分词器
            tokenizer(sentence) {
              // 仅保留英文、中文、数字
              let sanitized = sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' ')
              // 中英文分词
              return segmentit.doSegment(sanitized, { simple: true })
            }
          })
        `
      }
    },
    computed: {
      options() {
        const segmentit = this.segmentit
        return {
          tokenizer(sentence) {
            return segmentit.doSegment(
              sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' '),
              { simple: true }
            )
          }
        }
      },
      console() {
        return {
          log: (...logs) => {
            window.console.log(logs)
            this.classifierLog += `${logs.join('')}\n`
          }
        }
      }
    },
    methods: {
      init() {
        this.initing = true
        new Promise((resolve, reject) => {
          window.segmentit
            ? resolve(window.segmentit)
            : reject()
        })
        .catch(() => import('segmentit'))
        .then(segmentit => {
          window.segmentit = segmentit
          const { Segment, useDefault } = segmentit
          this.segmentit = useDefault(new Segment())
          this.classifier = new NaiveBayes(this.options)
          this.inited = true
        })
        .catch(error => {
          console.error('Load segmentit failed: ', error)
        })
        .finally(() => {
          this.initing = false
        })
      },
      runClassifier() {
        this.classifierLog = ''
        let console = this.console
        let classifier = this.classifier
        if (!classifier) {
          this.classifier = new NaiveBayes()
          classifier = this.classifier
        }
        eval(this.mlCode)
      },
      saveLearnHistory() {
        const classifierJson = this.classifier.toJson()
        localStorage.setItem(this.localStorageKey, classifierJson)
        this.console.log(`学习记录已缓存至 LocalStorage \n${classifierJson}`)
      },
      loadLearnHistory() {
        let classifierJson = localStorage.getItem(this.localStorageKey)
        if (classifierJson) {
          try {
            classifierJson = JSON.parse(classifierJson)
            classifierJson.options = this.options
            let newClassifier = NaiveBayes.fromJson(classifierJson)
            this.classifier = null
            this.classifier = newClassifier
            this.console.log(`学习记录加载成功，分类器已重新实例化\n${classifierJson}`)
          } catch (err) {
            this.console.log(`学习记录加载失败，可能是因为缓存了无效的记录（缓存的是一个空的、未学习过的分类器）：\n${err}`)
          }
        } else {
          this.console.log('LocalStorage 没有缓存学习记录，加载失败')
        }
      },
      clearLearnHistory() {
        localStorage.removeItem(this.localStorageKey)
        this.console.log('LocalStorage 学习记录清理成功')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';
  .codemirror-1 {
    height: auto!important;
    overflow-y: hidden!important;
    border-bottom: 1px solid $github-secondary;

    /deep/ .CodeMirror {
      height: auto!important;

      .CodeMirror-lines {
        cursor: no-drop;
      }
    }
  }

  .codemirror-2 {
    /deep/ .CodeMirror {
      height: 460px;
    }
  }
</style>
