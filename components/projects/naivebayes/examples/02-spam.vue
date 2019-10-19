<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Spam - 垃圾邮件用例</span>
      </div>
      <div>
        <md-button @click="runClassifier">
          <md-icon>play_arrow</md-icon>
          <span>运行代码</span>
        </md-button>
        <md-menu>
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>
          <md-menu-content>
            <md-menu-item @click="saveLearnHistory">
              <md-icon>file_download</md-icon>
              <span>缓存学习记录</span>
            </md-menu-item>
            <md-menu-item @click="loadLearnHistory">
              <md-icon>file_upload</md-icon>
              <span>载入上次学习记录</span>
            </md-menu-item>
            <md-menu-item @click="clearLearnHistory">
              <md-icon>format_clear</md-icon>
              <span>清空学习记录</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-card-actions>
    <md-card-media>
      <div class="example-item example-item-2">
        <div class="codemirror codemirror-1">
          <codemirror v-model="disabledCode" :options="disabledEditorOption"></codemirror>
        </div>
        <div class="codemirror codemirror-2">
          <codemirror v-model="code" :options="editorOption"></codemirror>
        </div>
        <div class="pre">
          <p><strong>console:</strong></p>
          <hr>
          <pre>{{ classifierLog }}</pre>
        </div>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  require('codemirror/addon/selection/active-line.js')
  const NaiveBayes = require('naivebayes')
  const Segment = require('segment')
  export default {
    data () {
const disabledCode = `
const NaiveBayes = require('naivebayes')

// 分词库
const Segment = require('segment')
const segment = new Segment()
segment.useDefault()

const classifier = new NaiveBayes({

  // 自定义分词器
  tokenizer(sentence) {
    // 仅保留英文、中文、数字
    let sanitized = sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' ')
    // 中英文分词
    return segment.doSegment(sanitized, { simple: true })
  }
})`
      const code = `
// 已实例化
console.log(classifier)

// 正常邮件学习
classifier.learn('来自 h4j 的留言：博主用的什么绘图工具？', '正常邮件')
classifier.learn('Surmon 您好, 您的回答被删除了', '正常邮件')
classifier.learn('邮件已收到，谢谢！', '正常邮件')
classifier.learn('您好，我们收到了重新设置您的帐户的密码的请求。要重设密码，您必须提交此暗号以便验证该请求是合法的。', '正常邮件')
classifier.learn('很抱歉您发送的邮件被退回，以下是该邮件的相关信息：', '正常邮件')
classifier.learn('明天中午一起去吃饭吧！', '正常邮件')
classifier.learn('昨天去的健身房感觉怎么样？', '正常邮件')

// 垃圾邮件学习
classifier.learn('最后一周 | Tableau 强势加入，全新 数据分析师 课程开始报名！', '垃圾邮件')
classifier.learn('不要错过您账户中的京东优惠券！', '垃圾邮件')
classifier.learn('美橙宣传片在线制作，精美视频即刻拥有', '垃圾邮件')
classifier.learn('AD: 全新Surface Book 增强版预售赠法拉利背包，以Mac换新享1500元补贴！', '垃圾邮件')
classifier.learn('《云周刊》第116期：阿里云发布机器学习平台PAI 2.0，全面拥抱开源！', '垃圾邮件')
classifier.learn('最新话题：一名合格的程序员需要点亮哪些技能树？百度取消新闻源究竟要闹哪样？来聊MySQL可视化工具', '垃圾邮件')
classifier.learn('阿里云ECS和VPC及关联云产品升级邮件公告', '垃圾邮件')
classifier.learn('「豆瓣时间」专栏《古今：杨照史记百讲》上线啦，邀你重回朝气蓬勃的先民时代', '垃圾邮件')
classifier.learn('学生专享|云翼计划来袭，海外节点全面降价，最高40%OFF，全球同服，免备案，骨干网直连，高速回流，立即查看，您的第一台云服务器，从这里开始，1折优惠  ¥9.9/月 ¥108/月，云服务器惊爆价30元/月起，高质不高价，快速搭建更稳定的应用/网站，全网底价  ¥30/月', '垃圾邮件')

// 判断分类
console.log('预期：正常邮件，实际：', classifier.categorize('昨天没来上班？'))
console.log('预期：正常邮件，实际：', classifier.categorize('怎么不回消息，大家等你很着急！'))
console.log('预期：垃圾邮件，实际：', classifier.categorize('美橙互联域名降价啦！'))
console.log('预期：垃圾邮件，实际：', classifier.categorize('阿里云双十一大促！更有优惠学生场'))

// 输出学习进度
const classifierJson = classifier.toJson()
console.log('学习进度：\\n', classifierJson)
      `
      return {
        code,
        disabledCode,
        classifierLog: 'No output\n',
        disabledEditorOption: {
          readOnly: 'nocursor',
          tabSize: 4,
          styleActiveLine: true,
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
        }
      }
    },
    mounted() {
      this.segment = new Segment()
      this.segment.useDefault()
      this.classifier = new NaiveBayes(this.options)
    },
    computed: {
      options() {
        const segment = this.segment
        return {
          tokenizer(sentence) {
            let sanitized = sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' ')
            return segment.doSegment(sanitized, { simple: true })
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
      runClassifier() {
        this.classifierLog = ''
        let console = this.console
        let classifier = this.classifier
        if (!classifier) {
          this.classifier = new NaiveBayes()
          classifier = this.classifier
        }
        eval(this.code)
      },
      saveLearnHistory() {
        const classifierJson = this.classifier.toJson()
        localStorage.setItem('02-classifierJson', classifierJson)
        this.console.log(`学习记录已缓存至LocalStrong\n${classifierJson}`)
      },
      loadLearnHistory() {
        let classifierJson = localStorage.getItem('02-classifierJson')
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
          this.console.log('LocalStrong没有缓存学习记录，加载失败')
        }
      },
      clearLearnHistory() {
        localStorage.removeItem('02-classifierJson')
        this.console.log('LocalStrong学习记录清理成功')
      }
    }
  }
</script>

<style lang="scss">

  .example-item-2 {

    .codemirror {

      &.codemirror-1 {
        height: auto!important;
        overflow-y: scroll!important;

        > .CodeMirror {
          height: auto!important;

          .CodeMirror-lines {
            cursor: no-drop;
          }
        }
      }
    }
  }
</style>
