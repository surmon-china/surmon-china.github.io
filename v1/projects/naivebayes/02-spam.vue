<template>
  <chinese-example
    v-bind="$attrs"
    local-storage-key="02-classifierJson"
    :ml-code="code"
  />
</template>

<script>
  import dedent from 'dedent'
  import ChineseExample from './chinese'
  export default {
    name: 'naivebayes-example-spam',
    title: 'SPAM 垃圾邮件用例',
    components: {
      ChineseExample
    },
    data () {
      return {
        code: dedent`
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
          console.log('学习进度：', classifierJson)
        `
      }
    }
  }
</script>
