<template>
  <homepage-example-card v-bind="$attrs">
    <div class="actions" slot="actions">
      <button class="button" @click="runClassifier">
        <i class="iconfont icon-play"></i>
        <span>运行代码</span>
      </button>
      <button class="button" @click="saveLearnHistory">
        <i class="iconfont icon-download"></i>
        <span>缓存学习记录</span>
      </button>
      <button class="button" @click="loadLearnHistory">
        <i class="iconfont icon-upload"></i>
        <span>载入上次学习记录</span>
      </button>
      <button class="button" @click="clearLearnHistory">
        <i class="iconfont icon-close"></i>
        <span>清空学习记录</span>
      </button>
    </div>
    <codemirror
      v-model="code"
      class="codemirror"
      :options="editorOption"
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
  import 'codemirror/mode/javascript/javascript.js'
  const localStorageKey = '01-classifierJson'

  export default {
    name: 'naivebayes-example-base',
    title: 'Base 基础用例',
    components: {
      HomepageExampleCard
    },
    data () {
      return {
        classifierLog: 'No output\n',
        editorOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/javascript',
          theme: 'base16-dark'
        },
        code: dedent`
          // 已实例化
          console.log(classifier)

          // 英文学习
          // positive
          classifier.learn('What is your name?', 'positive')
          classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive')
          classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')
          classifier.learn('Do one thing at a time, and do well.', 'positive')
          classifier.learn('Never forget to say “thanks”.', 'positive')
          classifier.learn('Believe in yourself.', 'positive')
          classifier.learn('Never put off what you can do today until tomorrow.', 'positive')
          classifier.learn('Do not aim for success if you want it; just do what you love and believe in, and it will come naturally.', 'positive')
          classifier.learn('Whatever is worth doing is worth doing well.', 'positive')
          classifier.learn('Keep on going never give up.', 'positive')

          // foul
          classifier.learn('Get out !Beat it! Get lost!', 'foul')
          classifier.learn('Go to hell! Go to the devil!', 'foul')
          classifier.learn('Oh, hell is bells!', 'foul')
          classifier.learn('You SOB (son of a)!', 'foul')
          classifier.learn('You damned (disgusting) bastard!', 'foul')
          classifier.learn('Idiot! You damned fool!', 'foul')
          classifier.learn('Disgusting!', 'foul')
          classifier.learn('I will see you in hell first!', 'foul')
          classifier.learn('You pig!', 'foul')
          classifier.learn('God damn !', 'foul')
          classifier.learn('Whore! Slut!', 'foul')
          classifier.learn('You hypocrite!', 'foul')
          classifier.learn('You ass licker (kisser)!', 'foul')
          classifier.learn('What a mess!', 'foul')

          // 判断分类
          console.log('预期：positive，实际：', classifier.categorize('My name is Surmon.'))
          console.log('预期：positive，实际：', classifier.categorize('awesome, cool, amazing!! Yay.'))
          console.log('预期：foul，实际：', classifier.categorize('get out!!!'))
          console.log('预期：foul，实际：', classifier.categorize('Fuck!'))

          // 中文学习（没有使用第三方分词库）
          classifier.learn('我的名字叫司马萌.', '正常')
          classifier.learn('没什么，就是一道测试程序!!', '正常')
          classifier.learn('不要皱眉，即使在伤心的时刻，因为你从不知道有谁会醉心于你的笑容。', '正常')
          classifier.learn('去只是一种姿势，得到并不等同于幸福。', '正常')
          classifier.learn('理和美女都是赤裸裸的。', '正常')
          classifier.learn('们看错了这个世界，却说世界欺骗了我们。', '正常')
          classifier.learn('们人这一辈子不是别人的楷模，就是别人的借鉴。', '正常')
          classifier.learn('万别说直到永远，因为你压根不知道永远有多远。', '正常')
          classifier.learn('些无法复制的浪漫，只能在回忆里慢慢变淡。', '正常')
          classifier.learn('调是永恒的美德，缺心眼的话就要学会沉默。', '正常')
          classifier.learn('用什么优势赢得人生，就会用同样的原因输掉人生。', '正常')
          classifier.learn('人最可悲的是，有自由的思想，却没有冲破羁绊的勇气。', '正常')
          classifier.learn('爱情就像俩个拉着橡皮筋的人，受伤的总是不愿意放手的那一个。', '正常')
          classifier.learn('人生的经历就像铅笔一样…开始很尖…经历的多了也就变得圆滑了…如果承受不了就会断了。', '正常')
          classifier.learn('在你往上爬的时候，一定要保持梯子的整洁，否则你下来时可能会滑倒。', '正常')
          classifier.learn('人生是没有穷尽的，所以也就没有什么所谓的归宿。', '正常')
          classifier.learn('幸福是因为你看到别人的不幸，不幸是因为你只看到别人的幸福。', '正常')
          classifier.learn('我们的安全感，来自于充分体验不安全感。', '正常')
          classifier.learn('男人最大的武器是眼神，女人最大的武器是眼泪。', '正常')
          classifier.learn('心清如水即是佛，了无牵挂佛无边。', '正常')
          classifier.learn('人活着为了什么？答案：一个念想。', '正常')
          classifier.learn('有些事遇见了就无法放手，有些事放开了手就不必再回首。', '正常')

          classifier.learn('我操，你他妈咋回事!!', '脏话')
          classifier.learn('你他妈整个脑残了，不惜拿自己的父母家人来骗别人的精液。!!', '脏话')
          classifier.learn('跟一个你视为他为狗的人将素质，你真心逗B，脑子也秀逗了吧！', '脏话')
          classifier.learn('贱人的生活方式就是，只许自己吃屎，不许别人放屁。', '脏话')
          classifier.learn('你爹有点多，我忍不住笑了下，不好意思啊，你不要去想你那悲伤的母亲。', '脏话')
          classifier.learn('我们骂不骂关你个婊子什么事，草你吗的瞎眼白内胀！', '脏话')
          classifier.learn('你他妈那么喜欢被人擦，我想说我退出我不喜欢兽交。', '脏话')
          classifier.learn('我只是你祖宗而已，你怎么可以这样，你个傻逼怎么能把你祖宗都忘记了？', '脏话')
          classifier.learn('你要是不扒一扒脸皮，我还真不晓得原来你的脸皮如此的厚呢！', '脏话')
          classifier.learn('对不起哈，当年老子我没忍住，一个屁把这二逼给蹦出来了！', '脏话')
          classifier.learn('你是脑子有病还是怎么？你以为你是谁？不就是傻逼一个嘛！', '脏话')
          classifier.learn('整天把逼脸摆给别人看，是想要告诉别人你是黄世仁他妈吗？', '脏话')
          classifier.learn('你是不是每次拉完屎，然后又自己舔干净了，还到处炫耀自己拉屎很香。', '脏话')
          classifier.learn('你妈是靠卖逼把你养大的吧，到你这代还能继续卖逼，真的是母业女继承啊。', '脏话')
          classifier.learn('难道你是吃大姨妈拌饭长大的，怪不得长那么恶心呢！', '脏话')
          classifier.learn('操你妈，日子那么难过像被人强奸了，但是经典他妈说与其挣扎不如学会享受！', '脏话')
          classifier.learn('就你那鸟样还整得跟个吉娃娃卖烧烤串似得，重口味卖得都是巨根火腿吧。', '脏话')
          classifier.learn('你大哥拉破车、一直拉到耗子窝、耗子给你两块糖、你管耗子叫大娘。', '脏话')
          classifier.learn('就你这样子不好好读书，以后做鸡都没人敢要！', '脏话')
          classifier.learn('看你这尖嘴猴腮样，长的那么丑还每天学人家自拍，太恶心人了。', '脏话')

          // 判断分类
          console.log('预期：脏话，实际：', classifier.categorize('你妈的，滚！'))
          console.log('预期：正常，实际：', classifier.categorize('还没使用中文分词就分的这么棒'))

          // 也可以指定预测的时候，指定要求返回具体概率
          console.log('预期：正常，实际：', classifier.categorize('还没使用中文分词就分的这么棒', true))

          // 获取概率数组
          console.log('概率：', classifier.probabilities('中文分词会让学习效果更加精准'))

          // 输出学习进度
          const classifierJson = classifier.toJson()
          console.log('学习进度：', classifierJson)
        `
      }
    },
    mounted() {
      this.classifier = new NaiveBayes()
    },
    computed: {
      console() {
        return {
          log: (...logs) => {
            window.console.log(logs)
            this.classifierLog += `${Array.prototype.slice.call(logs).map(item => {
              return typeof item === 'string' ? item : JSON.stringify(item)
            }).join('')}\n`
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
        localStorage.setItem(localStorageKey, classifierJson)
        this.console.log(`学习记录已缓存至 LocalStorage\n${classifierJson}`)
      },
      loadLearnHistory() {
        const classifierJson = localStorage.getItem(localStorageKey)
        if (classifierJson) {
          try {
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
        localStorage.removeItem(localStorageKey)
        this.console.log('LocalStorage 学习记录清理成功')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';
  .codemirror {
    /deep/ .CodeMirror {
      height: 460px;
    }
  }
</style>
