import{g as getDefaultExportFromCjs,_ as __vitePreload,d as defineComponent,f as ref,r as reactive,h as computed,u as useTheme,T as Theme,i as onMounted,w as watch,n as nextTick,j as resolveComponent,a as openBlock,c as createElementBlock,e as createBaseVNode,k as createTextVNode,l as withDirectives,v as vModelSelect,F as Fragment,m as renderList,t as toDisplayString,q as createCommentVNode,s as createVNode,p as pushScopeId,b as popScopeId,x as createBlock,y as withCtx,z as unref,B as resolveDynamicComponent,P as PROJECTS}from"./index-6ff972e5.js";import{_ as _export_sfc,u as useSeoMeta}from"./_plugin-vue_export-helper-f6c6a31b.js";import{g as getExampleComponent,H as Homepage}from"./index-d0ba4f59.js";import{n as normalizeSeoMetaObject,g as getMetaTitle,a as getMetaKeywords,b as getMetaDescription,c as getPageURL,d as getGitHubOpenGraphImageURL}from"./navbar-724f916b.js";import{V as VueRenderer}from"./vue-d7ef3093.js";import{H as HomepageExamples}from"./examples-f02eee43.js";import{T,o as oneDark}from"./index-a0963901.js";import{j as javascript}from"./index-384b8178.js";import"./index-60b4aa9f.js";function ownKeys(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,s)}return o}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?ownKeys(Object(o),!0).forEach(function(s){_defineProperty(e,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(o,s))})}return e}function _defineProperty(e,n,o){return n=_toPropertyKey(n),n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function _toPropertyKey(e){var n=_toPrimitive(e,"string");return typeof n=="symbol"?n:String(n)}function _toPrimitive(e,n){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,n||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}const dedent=createDedent({});function createDedent(e){return n.withOptions=o=>createDedent(_objectSpread(_objectSpread({},e),o)),n;function n(o,...s){const t=typeof o=="string"?[o]:o.raw,{escapeSpecialCharacters:d=Array.isArray(o)}=e;let i="";for(let c=0;c<t.length;c++){let l=t[c];d&&(l=l.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\{/g,"{")),i+=l,c<s.length&&(i+=s[c])}const a=i.split(`
`);let r=null;for(const c of a){const l=c.match(/^(\s+)\S+/);if(l){const u=l[1].length;r?r=Math.min(r,u):r=u}}if(r!==null){const c=r;i=a.map(l=>l[0]===" "||l[0]==="	"?l.slice(c):l).join(`
`)}return i.trim().replace(/\\n/g,`
`)}}var naiveBayes={exports:{}},_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(n,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(n,o,s){return o&&e(n.prototype,o),s&&e(n,s),n}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var STATE_KEYS=naiveBayes.exports.STATE_KEYS=["categories","docCount","totalDocuments","vocabulary","wordCount","wordFrequencyCount","options"],defaultTokenizer=function(n){var o=/[^(a-zA-ZA-Яa-я\u4e00-\u9fa50-9_)+\s]/g;return n.replace(o," ").replace(/[\u4e00-\u9fa5]/g,function(s){return s+" "}).split(/\s+/)},NaiveBayes=function(){function e(n){if(_classCallCheck(this,e),this.options={},typeof n<"u"){if(!n||(typeof n>"u"?"undefined":_typeof(n))!=="object"||Array.isArray(n))throw TypeError("NaiveBayes got invalid `options`: `"+n+"`. Pass in an object.");this.options=n}this.tokenizer=this.options.tokenizer||defaultTokenizer,this.vocabulary=[],this.totalDocuments=0,this.docCount={},this.wordCount={},this.wordFrequencyCount={},this.categories=[]}return _createClass(e,[{key:"initializeCategory",value:function(o){return this.categories.includes(o)||(this.docCount[o]=0,this.wordCount[o]=0,this.wordFrequencyCount[o]={},this.categories.push(o)),this}},{key:"learn",value:function(o,s){var t=this;this.initializeCategory(s),this.docCount[s]++,this.totalDocuments++;var d=this.tokenizer(o),i=this.frequencyTable(d);return Object.keys(i).forEach(function(a){t.vocabulary.includes(a)||t.vocabulary.push(a);var r=i[a];t.wordFrequencyCount[s][a]?t.wordFrequencyCount[s][a]+=r:t.wordFrequencyCount[s][a]=r,t.wordCount[s]+=r}),this}},{key:"categorize",value:function(o,s){return s?this.probabilities(o)[0]:this.probabilities(o)[0].category}},{key:"probabilities",value:function(o){var s=this,t=this.tokenizer(o),d=this.frequencyTable(t);return this.categories.map(function(i){var a=s.docCount[i]/s.totalDocuments,r=Math.log(a);return Object.keys(d).forEach(function(c){var l=d[c],u=s.tokenProbability(c,i);r+=l*Math.log(u)}),{category:i,probability:r}}).sort(function(i,a){return a.probability-i.probability})}},{key:"tokenProbability",value:function(o,s){var t=this.wordFrequencyCount[s][o]||0,d=this.wordCount[s];return(t+1)/(d+this.vocabulary.length)}},{key:"frequencyTable",value:function(o){var s=Object.create(null);return o.forEach(function(t){s[t]?s[t]++:s[t]=1}),s}},{key:"toJson",value:function(o){var s=o?2:0;return JSON.stringify(this.toJsonObject(),null,s)}},{key:"toJsonObject",value:function(){var o=this,s={};return STATE_KEYS.forEach(function(t){return s[t]=o[t]}),s}}],[{key:"fromJson",value:function(o){if(typeof o=="string")try{o=JSON.parse(o)}catch{throw new Error("Naivebayes.fromJson expects a valid JSON string.")}o.options=o.options||{};var s=new e(o.options);return STATE_KEYS.forEach(function(t){if(o[t]==null)throw new Error("NaiveBayes.fromJson: JSON string is missing an expected property: '"+t+"'.");s[t]=o[t]}),s}}]),e}();naiveBayes.exports=NaiveBayes;var naiveBayesExports=naiveBayes.exports;const NaiveBayes$1=getDefaultExportFromCjs(naiveBayesExports),init=dedent`
import NaiveBayes from 'naivebayes'

const classifier = new NaiveBayes()
`,code$3=dedent`
// classifier
console.log(classifier)

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
classifier.learn('The foolish man seeks happiness in the distance, the wise grows it under his feet.', 'positive')

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

// categorize
console.log('expected: positive, actually: ', classifier.categorize('My name is Surmon.'))
console.log('expected: positive, actually: ', classifier.categorize('awesome, cool, amazing!! Yay.'))
console.log('expected: foul, actually: ', classifier.categorize('get out!!!'))
console.log('expected: foul, actually: ', classifier.categorize('Fuck!'))

// category probability
console.log('positive & probability: ', classifier.categorize('How are you?', true))

// all probabilities
console.log('probabilities: ', classifier.probabilities('Love is the only thing that holds the dark at bay.'))

console.log('JSON:', classifier.toJson())
`,case1={name:"Base case",factory:()=>new NaiveBayes$1,init,code:code$3},initCode=dedent`
  import NaiveBayes from 'naivebayes'
  import { Segment, useDefault } from 'segmentit'

  // 全量中文分词库
  const segmentit = useDefault(new Segment())
  const classifier = new NaiveBayes({
    // 自定义分词器
    tokenizer(sentence) {
      // 仅保留英文、中文、数字
      const sanitized = sentence.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g, ' ')
      // 中英文分词
      return segmentit.doSegment(sanitized, { simple: true })
    }
  })
`,factory=async()=>{const e=window.segmentit??await __vitePreload(()=>import("./segmentit-0a0dd407.js"),[]);window.segmentit=e;const{Segment:n,useDefault:o}=e,s=o(new n);return new NaiveBayes$1({tokenizer(t){return s.doSegment(t.replace(/[^(a-zA-Z\u4e00-\u9fa50-9_)+\s]/g," "),{simple:!0})}})},code$2=dedent`
// 正常邮件
const HAM = '正常邮件'
classifier.learn('来自 h4j 的留言：博主用的什么绘图工具？', HAM)
classifier.learn('Surmon 您好, 您的回答被删除了', HAM)
classifier.learn('邮件已收到，谢谢！', HAM)
classifier.learn('您好，我们收到了重新设置您的帐户的密码的请求。要重设密码，您必须提交此暗号以便验证该请求是合法的。', HAM)
classifier.learn('很抱歉您发送的邮件被退回，以下是该邮件的相关信息：', HAM)
classifier.learn('明天中午一起去吃饭吧！', HAM)
classifier.learn('昨天去的健身房感觉怎么样？', HAM)

// 垃圾邮件
const SPAM = '垃圾邮件'
classifier.learn('最后一周 | Tableau 强势加入，全新 数据分析师 课程开始报名！', SPAM)
classifier.learn('不要错过您账户中的京东优惠券！', SPAM)
classifier.learn('美橙宣传片在线制作，精美视频即刻拥有', SPAM)
classifier.learn('AD: 全新Surface Book 增强版预售赠法拉利背包，以Mac换新享1500元补贴！', SPAM)
classifier.learn('《云周刊》第116期：阿里云发布机器学习平台PAI 2.0，全面拥抱开源！', SPAM)
classifier.learn('最新话题：一名合格的程序员需要点亮哪些技能树？百度取消新闻源究竟要闹哪样？来聊MySQL可视化工具', SPAM)
classifier.learn('阿里云ECS和VPC及关联云产品升级邮件公告', SPAM)
classifier.learn('「豆瓣时间」专栏《古今：杨照史记百讲》上线啦，邀你重回朝气蓬勃的先民时代', SPAM)
classifier.learn('学生专享|云翼计划来袭，海外节点全面降价，最高40%OFF，全球同服，免备案，骨干网直连，高速回流，立即查看，您的第一台云服务器，从这里开始，1折优惠  ¥9.9/月 ¥108/月，云服务器惊爆价30元/月起，高质不高价，快速搭建更稳定的应用/网站，全网底价  ¥30/月', SPAM)

// 判断分类
console.log('预期：正常邮件，实际：', classifier.categorize('昨天没来上班？'))
console.log('预期：正常邮件，实际：', classifier.categorize('怎么不回消息，大家等你很着急！'))
console.log('预期：垃圾邮件，实际：', classifier.categorize('美橙互联域名降价啦！'))
console.log('预期：垃圾邮件，实际：', classifier.categorize('阿里云双十一大促！更有优惠学生场'))

console.log(classifier.toJson())
`,case2={name:"ZH SPAM case",factory,init:initCode,code:code$2},code$1=dedent`
// 体育新闻
const SPORTS = '体育'
classifier.learn('北京时间4月23日19点35分，2017赛季中超联赛第6轮，山东鲁能坐镇主场迎战重庆力帆。第28分钟，鲁能后场传球失误，送给费尔南多单刀球机会，“小摩托”轻松破门打破僵局。第82分钟，佩莱打入本赛季首球，帮助鲁能扳平比分。最终，鲁能主场和力帆1-1握手言和。前5轮结束，鲁能在积分榜上仅落后榜首的广州富力1分，不过他们上一轮的表现却与之前几场截然相反，本赛季首次在上半场取得进球，下半场的表现不如之前那般“惹不起”。本场比赛如果鲁能取胜，主场将迎来4连胜，继续紧追领头羊。三轮一场未胜仅排名第13位的力帆连续两场都以2-1战胜对手，排名迅速蹿升至第6位。首发阵容方面，上一场出战的塔尔德利休战，马加特选择了西塞与佩莱搭档，U23球员刘洋首次出场担当左后卫；力帆方面则是延续了上一场的阵容。第8分钟，戴琳距离球门35米开外远射高出。第11分钟，金敬道前场上抢成功，蒿俊闵直塞，佩莱脚后跟妙传西塞，可惜被对方解围，左路的吴兴涵得球内切射门打在对方身上偏出底线。第16分钟，力帆获得左侧角球，费尔南多开到禁区内，无人盯防的卡尔德克头槌，险些破门。', SPORTS)
classifier.learn('曾就职于中国国家队、北京国安、深圳红钻和贵州人和，司职守门员助教的托米奇因急性白血病去世，享年57岁。去年12月托米奇检查出了急性白血病，经济拮据的他向中国朋友们发出求助，包括北京人和俱乐部、北京国安俱乐部、深圳红钻俱乐部以及球迷朋友们都为托米奇筹款治病，遗憾的是，这位中国足球的朋友并没有战胜病魔。据悉，4月22日晚，国安翻译蒋晓军在个人社交网站上说道，“今天的白天是再平常不过的一天，但10分钟前马尔科的电话却让它变得不再平常，要求他重复说了两遍，我才敢相信自己的耳朵，马尔科哭着告诉我的坏消息竟然是：大家熟悉爱戴的托米奇永远离我们而去了！老托啊，在病魔向你射出这一脚爆射时，你太大意了，你竟然没有象往常那样拼力守住你身后的球门。走好，老托，天堂里还会有足球。”去年10月份，托米奇被确诊为急性白血病。尽管托米奇从事足球工作多年，但是他并没有太多的存款。住院后的托米奇在治疗方面的费用巨大，经济本就相对拮据的他不得不向曾经就职过的中国俱乐部开口求助。包括北京人和俱乐部、北京国安俱乐部、深圳红钻俱乐部以及球迷朋友们都在通过各种渠道为托米奇筹款治病。在中国朋友们的帮助下，托米奇获得了一笔治疗资金。在去年年底，托米奇成功找到了合适的骨髓移植者并配型成功，正当球迷们认为他将开启新的美好生活时，病魔再次侵袭了他。', SPORTS)
classifier.learn('去年年底，当球队重新集结，备战2017赛季的时候，大家最直观的感觉是瓜林变了，人瘦了，小肚腩没有了。联赛开始后，大家又惊喜地发现瓜林的改变不仅仅于此，那位国米队长回来了。瓜林不仅在后腰位置防守稳健，在进攻端也是贡献突出。已经进行的6轮中超联赛，瓜林打入了3球。实际上，赛季之初得知自己落选亚冠名单，瓜林是非常失落的，他甚至怀疑球队是不是已经不再需要自己了。采访中，短短的1分钟里，瓜林甚至3次提到了“失落”这个词，但是他及时调整好心态，以出色的表现证明了自己。与贵州智诚比赛结束后当晚，瓜林在球队下榻的酒店接受了小编的专访。采访开始前，瓜林以商量的语气问，我是不是可以先去一趟洗手间。他说话时的语气语调甚至表情，都让小编怀疑，这就是在场上那位横眉怒目，充满了杀气的瓜林。等瓜林上完洗手间回来，翻译王侃因为主教练波耶特有事，被叫走了。王侃回来前的几分钟，瓜林耐心地等待着，没有看表，没有催促，尽管他其实已经很累，特别希望早一点回房间休息。', SPORTS)
classifier.learn('北京时间4月23日，中超联赛第6轮，长春亚泰队坐镇主场迎来河南建业的挑战。谭龙打入制胜球，最终亚泰主场1-0战胜建业，获得新赛季的首场胜利。亚泰前5轮1平4负未尝胜绩，最近3个主场1平2负，上轮更是遭申花绝杀；而河南建业前5轮同样不胜，不过取得了3平2负的成绩，但建业赛季的前2个客场都是以0-1的比分输球。两队中超史上交手18次，亚泰6胜7平5负略占上风，而且9个主场亚泰4胜5平保持不败，2015和2016赛季，亚泰连续在主场战胜建业。比赛刚刚开始，马里尼奥发出前场右侧底线附近定位球到禁区前点，可惜皮球打在了孙捷身上出了底线。第8分钟，顾操正面一个凶猛的滑铲将马利尼奥其放倒，吃到开场后第一张黄牌。第16分钟，亚泰再度获得任意球机会，马利尼奥主罚将球给到禁区后点，吴龑出击直接将球摘下。第18分钟，裴帅中路推进被钟晋宝铲倒在地，钟晋宝也吃到了黄牌。第20分钟，奇卡尔拿球后和巴索戈在禁区线上撞墙配合，多奇卡尔杀入禁区横敲，胡靖航跟上一脚爆射偏出。第22分钟蒋哲一脚远射被吴龑扑出了底线。第25分钟，亚泰再次获得任意球机会，左侧张笑非主罚开到禁区，落点太深直接被被吴龑没收。第38分钟，巴索戈停球被伊斯梅洛夫放倒，亚泰教练席围住了边裁，王迪警告建业教练席。第40分钟，建业任意球机会，多奇卡尔主罚开起来到禁区，戈麦斯顶了一下，龙成门前抢点将球打进，但裁判示意戈麦斯手球犯规，进球无效。上半场双方暂时0-0互交白卷。第53分钟，双方拼抢时外力踢在胡斯蒂膝盖上，吃到一张黄牌。第57分钟，建业率先进行换人调整，顾操被杨昌鹏替下。第58分钟，亚泰右侧角球机会，胡斯蒂搓起来开到后点，吴龑出击把球击出。第63分钟，建业再次换人，外力被柯钊替下。第65分钟，亚泰用老将杜震宇替下了裴帅。第66分钟，杨阔撞人犯规吃点黄牌。亚泰任意球机会，杜震宇挑传到禁区左侧，孙捷一漏，伊斯梅洛夫门前拿球越位了。第70分钟，亚泰打破场上僵局，胡斯蒂接到杜震宇直传后三十米区域前中路一脚直塞，谭龙反越位成功，单刀面对门将右脚推射破门！亚泰1-0领先建业。第74分钟，亚泰U23球员何超抽筋倒地，随后无法坚持被张力换下。第75分钟，大禁区线附近龙成的一脚抽射打高了，错失扳平机会。第80分钟，亚泰获得位置绝佳的任意球机会，马里尼奥主罚直接轰门高出横梁。第84分钟，建业换人，杜长杰替下刘恒。最终全场比赛结束，亚泰1-0战胜建业。', SPORTS)
classifier.learn('北京时间4月22日，北京首钢俱乐部副总经理谢海田，宣布同马布里解除合同，这也意味着马布里将以自由身离开球队。马布里的北京时代，也正式宣告落下帷幕。据悉，北京首钢同马布里之间的2年合同，约定老马拥有着在2017/2018赛季担任球员或助理教练的选择权。尽管马布里希望继续再为北京队征战一个赛季，但俱乐部经过同各界商讨之后，觉得马布里作为教练，能够给球队带来更大的帮助。北京首钢也在合同要求的期限内向马布里发文，希望他能够担任助理教练的职务。4月6日和9日时，北京首钢同马布里之间的2次会面里，希望老马能够出任教练。4月11日时，马布里团队代表老马做出回应，希望能够再继续征战一个赛季。4月14日时，北京队发函，希望马布里能够担任教练职务，但老马表示无法接受。4月19日时，双方再次展开磋商谈判，俱乐部提出马布里可以担任球员兼教练。但双方在薪资上差距较大未能达成一致。最终北京首钢决定放弃合同，同意马布里离队。马布里在2011/2012赛季加盟北京队，并且效力迄今，帮助球队夺取2011/2012、2013/2014和2014/2015赛季总冠军，实现三冠王的霸业。但上赛季的CBA，北京队却未能闯入季后赛，这也创造了老马时代球队的最差战绩。随着马布里同北京队解除合同，正式宣布北京的马布里时代落下帷幕……', SPORTS)
classifier.learn('北京时间4月23日19时35分，2017中超第6轮，山东鲁能主场1-1战平重庆力帆。央视对本场比赛进行现场直播，徐阳和贺炜做出精彩解说。徐阳赞扬戴琳愈发的成熟，“现在戴琳成熟了，再不成熟就来不及了。”两位解说为鲁能进攻端支招，“鲁能进攻时，应该避开米洛维奇。米洛维奇的制空能力很强，他的防守面积也很大。”贺炜谈到U23新政的话题，“足协制定U23政策的初衷是好的，但过了保护期，球员还能站稳脚跟吗？看看刘彬彬的处境就制定了。”第27分钟费尔南多为力帆打破僵局，两位解说进行点评，“这个球给王大雷处理更安全，王彤这里很难处理。戴琳和王彤的失误，给了费尔南多这样的机会。马加特不是很高兴，这样丢球让球队感到很窝囊，这样的失球对球队的士气打击也比较大。但毕竟比赛只打了30分钟，鲁能不要自乱节奏。”鲁能在进攻端缺少办法，徐阳点评时表示，“鲁能的控制能力不强，进攻端也有些脱节。”', SPORTS)

// 金融新闻
const FINANCE = '金融'
classifier.learn('4月20日，中国人民银行营业管理部联合银监会、北京市银监局、北京市住建委下发通知，要求房地产开发企业和房地产经纪机构开发房产交易时，履行反洗钱义务。从5月1日起，正式开始在北京市内开始实施。按照规定，开发商和中介机构对交易当事人身份进行有效核实、登记；房屋交易当事人须以本人银行卡转账方式进行，商业银行对当日单笔或累计交易超过5万元（含5万元）的现金缴存报告大额交易；发现可疑交易应向相关部门报告。一位接近北京市住建委人士表示，这一政策旨在加强房地产交易过程中资金监管力度，进一步避免房地产成为不法分子的洗钱通道，“不一定会完全杜绝洗钱，但起码查起来比较容易了。”该人士进一步透露，近年部分城市房价上涨较快的过程中，大量不法资金通过各种渠道进入房地产领域洗白，已经引起相关部门的警觉，“所以这个政策对普通老百姓(603883,股吧)影响不大，重点还是针对赃钱、黑钱。”', FINANCE)
classifier.learn('自从2015年8月人民币面临贬值压力以来，离岸点心债市场就一路萎缩，到2016年下半年基本上处于冷冻期。按照年初的预测，2017年人民币依然会面临贬值压力，点心债或仍然难以走出冰冻。今年一季度的情况也的确符合市场预期，整个一季度，海外人民币点心债券都维持了零发行。不过这种状态在4月份被打破，而且更令市场诧异的是，这个打破零发行的并非传统的香港点心债市场，而是在遥远的南非最大城市约翰内斯堡。4月11日，中国银行(601988,股吧)发行了一单多币种多品种、总额为30亿美元的债券，其中包括15亿元的三年期人民币离岸债券，这也是2017年以来全球范围内首单公募发行人民币点心债。另外值得注意的是，该笔人民币债券的发行地是远在南非的约翰内斯堡，而且订单规模一度高达65亿，并最终以32亿元、2.13倍的认购倍数成功发行，发行票息为4.88%，稍高于国内同等级同期限人民币债券。“坦白讲，此次发行之前我们还是有点担心，毕竟人民币贬值导致去年市场上对人民币资产的兴趣显著缩减，离岸人民币市场的流动性也大规模降低。”一位接近交易的人士透露，人民币点心债市场尽管重启，但像前几年那么火爆的情况尚不具备。', FINANCE)
classifier.learn('深交所对公司的公开谴责主要针对两方面事项：一、对子公司相关信息的披露不准确、不完整。2014年8月至2015年9月期间，安硕信息先后设立和参与设立了从事征信业务全资子公司、互联网金融控股子公司、云服务控股子公司和普惠金融业务参股公司。相关事项属于对安硕信息证券交易价格产生较大影响的重大事件。但安硕信息对于上述事项的披露不准确、不完整，主要表现为未在相关定期报告中披露相关信息、安硕信息对与子公司的资源投入、经营计划与子公司业务实际开展情况等信息与公告存在差异且无合理解释、规避相关子公司资质牌照申请面临的风险和困难、未充分揭示子公司业务面临的政策风险，以及未在收到子公司工商登记文件后及时履行临时信息披露义务等。二、在股票交易异常波动公告中未充分披露相关事项和风险。2014年5月至2015年5月期间，安硕信息股价出现多次异动，公司于2014年7月1日、2015年3月18日、2015年4月13日和2015年5月8日先后4次披露了《股票交易异常波动公告》。上述公告中，均未结合相关对外投资事项的进展情况、子公司业务开展情况、经营风险等因素披露相关信息，未能对市场质疑做出有效澄清。', FINANCE)
classifier.learn('证券时报股市大数据新媒体“数据宝”统计，目前共有1644家(剔除已实施分红送转方案公司)公司披露了2016年年度分红送转预案，其中，149家公司年度拟每10股送转10股以上，18家公司年度拟每10股送转超过20股，1家公司的送转比例更是高达10:30以上，10送转10股以下的公司为172家。10送转10以上的高送转公司家数占所有预案公司的比例高达9%。', FINANCE)
classifier.learn('创业板公司三五互联(300051,股吧)（300051.SZ）于4月6日发布了《重大资产购买报告书（草案）》，计划拟以11亿元现金收购成蹊科技100%股权，收购金额超过账面净资产20余倍。支撑成蹊科技超高溢价的原因就在于其原股东针对该公司未来的业绩承诺：2017年度、2018年度、2019年度及2020年度实现的扣非后净利润分别不低于8500万元、11050万元、13260万元及15912万元，然而,这相较该公司2016年实现的净利润3562.46万元，2015年664.71万元而言，未来业绩能否兑现是存在一定压力的。资金支付存在压力。在方案中，最引人关注的是三五互联的收购款支付方式。根据收购报告书披露，截止到成蹊科技股权完成交割后20个工作日内，三五互联需累计向成蹊科技原股东支付4.4亿元的收购价款。这对于货币资金并不充裕的三五互联而言是有一定压力的。根据公司发布的2016年年报显示，截止2015年末，三五互联的货币资金余额仅为13332.62万元，而作为本次收购的主体三五互联母公司，账面货币资金余额更是只有2008.12万元，不足未来短期内需支付收购价款的零头。', FINANCE)

// 判断分类
console.log('预期：体育，实际：', classifier.categorize('徐阳谈到鲁能应该加强二点的控制，“既然鲁能上场2个强力中锋进行二点包抄，那么就要形成对二点的控制。”第54分钟鲁能用刘彬彬换下金敬道，徐阳谈到鲁能为何不刚开场便换人时表示，“场上的换人，对球员还是会产生一些影响，马加特的情商很高，他同年轻球员谈话都很长，年轻球员对他的想法也很认同，双方也能形成很好的沟通。”'))
console.log('预期：体育，实际：', classifier.categorize('火箭队主帅迈克-德安东尼并不担心雷霆队阵容当中的这些变化，“我不关心他们做什么，我会继续拿安德森使用小个阵容，我想每支球队都可以做他们想做的，我们按照自己方式去做。我不关心对方是怎样限制我们，我们能够继续得分，要做的就是提高防守。”'))
console.log('预期：金融，实际：', classifier.categorize('消费和医药股最近基本没跌，而小票相对跌的比较多，尤其是中证1000指数竟然跌了约5.16%。市场整体而言，目前500亿市值以上的公司有赚头，而100亿市值以下的公司（很多是概念类股票）平均跌幅很多。所以在结构性行情机会中，很多投资者的感觉是市场在“冒慢牛之名，行慢熊之实”。'))
console.log('预期：金融，实际：', classifier.categorize('　和讯信托消息 苏国信18日公告，拟向不超过10名特定对象非公开发行股票募集资金，预计募资40亿元，增资江苏信托。本次发行的股票数量不超过650,629,064股，募集资金总额不超过人民币400,000.00万元，扣除发行费用后将用于增资江苏信托补充净资本，实施方式为由公司向公司控股子公司江苏省国际信托有限责任公司进行增资。'))

console.log(classifier.toJson())
`,case3={name:"ZH News case",factory,init:initCode,code:code$1},code=dedent`
// 鲁迅文章
const LuXun = '鲁迅'
classifier.learn('我常想在纷扰中寻出一点闲静来,然而委实不容易.目前是这么离奇,心里是这么芜杂.一个人做到只剩了回忆的时候,生涯大概总要算是无聊了罢,但有时竟会连回忆也没有.中国的做文章有轨范,世事也仍然是螺旋.前几天我离开中山大学的时候,便想起四个月以前的离开厦门大学；听到飞机在头上鸣叫,竟记得了一年前在北京城上日日旋绕的飞机.我那时还做了一篇短文,叫做《一觉》.现在是,连这“一觉”也没有了。广州的天气热得真早,夕阳从西窗射入,逼得人只能勉强穿一件单衣.书桌上的一盆“水横枝”,是我先前没有见过的：就是一段树,只要浸在水中,枝叶便青葱得可爱.看看绿叶,编编旧稿,总算也在做一点事.做着这等事,真是虽生之日,犹死之年,很可以驱除炎热的。前天,已将《野草》编定了；这回便轮到陆续载在《莽原》上的《旧事重提》,我还替他改了一个名称：《朝花夕拾》.带露折花,色香自然要好得多,但是我不能够.便是现在心目中的离奇和芜杂,我也还不能使他即刻幻化,转成离奇和芜杂的文章.或者,他日仰看流云时,会在我的眼前一闪烁罢。我有一时,曾经屡次忆起儿时在故乡所吃的蔬果：菱角、罗汉豆、茭白、香瓜.凡这些,都是极其鲜美可口的；都曾是使我思乡的蛊惑.后来,我在久别之后尝到了,也不过如此；惟独在记忆上,还有旧来的意味存留.他们也许要哄骗我一生,使我时时反顾。这十篇就是从记忆中抄出来的,与实际容或有些不同,然而我现在只记得是这样.文体大概很杂乱,因为是或作或辍,经了九个月之多.环境也不一：前两篇写于北京寓所的东壁下；中三篇是流离中所作,地方是医院和木匠房；后五篇却在厦门大学的图书馆的楼上,已经是被学者们挤出集团之后了.', LuXun)
classifier.learn('成熟是一种明亮而不刺眼的光辉，一种圆润而不腻耳的音响，一种不需要对别人察颜观色的从容，一种终于停止了向周围申诉求告的大气，一种不理会哄闹的微笑，一种洗刷了偏激的淡漠，一种无须声张的厚实，一种并不陡峭的高度。人呢，能直立了，自然是一大进步;能说话了，自然又是一大进步;能写字作文了，自然又是一大进步。然而也就堕落，因为那时也开始了说空话。说空话尚无不可，甚至于连自己也不知道说着违心之论，则对于只能嗥叫的动物，实在免不得“颜厚有忸怩” 。如果黑板就是浩淼的大海，那么，老师便是海上的水手。铃声响起那刻，你用教职工鞭作浆，划动那船只般泊在港口的课本。课桌上，那难题堆放，犹如暗礁一样布列，你手势生动如一只飞翔的鸟，在讲台上挥一条优美弧线——船只穿过……天空飘不来一片云，犹如你亮堂堂的心，一派高远。柔和的阳光斜挂在苍松翠柏不凋的枝叶上，显得那么安静肃穆，绿色的草坪和白色的水泥道貌岸然上，脚步是那么轻起轻落，大家的心中却是那么的激动与思绪波涌。　我有一时，曾经屡次忆起儿时在故乡所吃的蔬果：菱角、罗汉豆、茭白、香瓜。凡这些，都是极其鲜美可口的;都曾是使我思乡的蛊惑。后来，我在久别之后尝到了，也不过如此;惟独在记忆上，还有旧来的意味存留。他们也许要哄骗我一生，使我时时反顾。生命是盛开的花朵，它绽放得美丽，舒展，绚丽多资;生命是精美的小诗，清新流畅，意蕴悠长;生命是优美的乐曲，音律和谐，宛转悠扬;生命是流淌的江河，奔流不息，滚滚向前。生命的美丽，永远展现在她的进取之中;就像大树的美丽，是展现在它负势向上高耸入云的蓬勃生机中;像雄鹰的美丽，是展现在它搏风击雨如苍天之魂的翱翔中;像江河的美丽，是展现在它波涛汹涌一泻千里的奔流中。生活如花，姹紫嫣红;生活如歌，美妙动听;生活如酒，芳香清醇;生活如诗，意境深远，绚丽多彩。生活是一位睿智的长者，生活是一位博学的老师，它常常春风化雨，润物无声地为我们指点迷津，给我们人生的启迪。生活是一部大百科全书，包罗万象;生活是一把六弦琴，弹奏出多重美妙的旋律：生活是一座飞马牌大钟，上紧发条，便会使人获得浓缩的生命。生活的海洋并不像碧波涟漪的西子湖，随着时间的流动，它时而平静如镜，时而浪花飞溅，时而巨浪冲天……人们在经受大风大浪的考验之后，往往会变得更加坚强。生活，就是面对现实微笑，就是越过障碍注视未来;生活，就是用心灵之剪，在人生之路上裁出叶绿的枝头;生活，就是面对困惑或黑暗时，灵魂深处燃起豆大却明亮且微笑的灯展。生活是蜿蜒在山中的小径，坎坷不平，沟崖在侧。摔倒了，要哭就哭吧，怕什么，不心装模作样!这是直率，不是软弱，因为哭一场并不影响赶路，反而能增添一份小心。山花烂漫，景色宜人，如果陶醉了，想笑就笑吧，不心故作矜持!这是直率，不是骄傲，因为笑一次并不影响赶路，反而能增添一份信心。', LuXun)
classifier.learn('人生的路漫长而多彩，就像在天边的大海上航行，有时会风平浪静，行驶顺利;而有时却会是惊涛骇浪，行驶艰难。但只要我们心中的灯塔不熄灭，就能沿着自己的航线继续航行。人生的路漫长而多彩：在阳光中我学会欢笑，在阴云中我学会坚强;在狂风中我抓紧希望，在暴雨中我抓紧理想;当我站在中点回望，我走出了一条属于我的生之路。假如生活中你失败了，请不要将忧伤的泪水写在脸上。失败也是一种收获，生活中最得要的是有一份十足的勇气和一个创业的胆量。希望源于失望，奋起始于忧患，正如一位诗人所说：有饥饿感受的人一定消化好，有紧迫感受的人一定效率高，有危机感受的人一定进步快。　往事如歌，在人生的旅途中，尽管有过坎坷，有过遗憾，却没有失去青春的美丽。相信自己，希望总是有的，让我们记住那句话：错过了太阳，我不哭泣，否则，我将错过月亮和星辰。别在树下徘徊，别在雨中沉思，别在黑暗中落泪。向前看，不要回头，只要你勇于面对抬起头来，就会发现，分数的阴霾不过是短暂的雨季。向前看，还有一片明亮的天，不会使人感到彷徨。', LuXun)
classifier.learn('中国中流的家庭，教孩子大抵只有两种法。其一是任其跋扈，一点也不管，骂人固可，打人亦无不可，在门内或门前是暴主，是霸王，但到外面便如失了网的蜘蛛一般，立刻毫无能力。其二，是终日给以冷遇或呵斥，甚于打扑，使他畏葸退缩，彷佛一个奴才，一个傀儡，然而父母却美其名曰『听话』，自以为是教育的成功，待到他们外面来，则如暂出樊笼的小禽，他决不会飞鸣，也不会跳跃。', LuXun)
classifier.learn('战士死了的时候，苍蝇所首先发见的是他的缺点和伤痕，嘬，营营地叫，以为得意，以为比死了的战士更英雄。但是战士已经死了，不再来挥去它们。于是乎苍蝇们即更其营营地叫，自以为倒是不朽的声音，因为它们的完全，远在战士之上。的确的，谁也没有发见过苍蝇们的缺点和创伤。然而，有缺点的战士终竟是战士，完美的苍蝇也终竟不过是苍蝇', LuXun)
classifier.learn('群众，尤其是中国的——永远是戏剧的看客。牺牲上场，如果显得慷慨，他们就看了悲壮剧;如果显得觳觫(即恐惧颤抖)，他们就看了滑稽剧。北京的羊肉铺常有几个人张嘴看剥羊，仿佛颇为愉快，人的牺牲能给他们的益处，也不过如此。而况事后走不几步，他们并这一点也就忘了。——《娜拉走后怎样》一九二六', LuXun)
classifier.learn('我先前的攻击社会，其实也是无聊的。社会没有知道我在攻击，倘一知道，我早已死无葬身之所了……我之得以偷生者，因为他们大多数不识字，不知道，并且我的话也无效力，如一箭之入大海。否则，几条杂感，就可以送命的。民众的惩罚之心，并不下于学者和军阀。——《答有恒先生》一九二七年', LuXun)
classifier.learn('这少年便是闰土。我认识他时，也不过十多岁，离现在将有三十年了；那时我的父亲还在世，家景也好，我正是一个少爷。那一年，我家是一件大祭祀的值年⑶。这祭祀，说是三十多年才能轮到一回，所以很郑重；正月里供祖像，供品很多，祭器很讲究，拜的人也很多，祭器也很要防偷去。我家只有一个忙月（我们这里给人做工的分三种：整年给一定人家做工的叫长工；按日给人做工的叫短工；自己也种地，只在过年过节以及收租时候来给一定人家做工的称忙月），忙不过来，他便对父亲说，可以叫他的儿子闰土来管祭器的。我的父亲允许了；我也很高兴，因为我早听到闰土这名字，而且知道他和我仿佛年纪，闰月生的，五行缺土⑷，所以他的父亲叫他闰土。他是能装〔弓京〕捉小鸟雀的。', LuXun)
classifier.learn('我于是日日盼望新年，新年到，闰土也就到了。好容易到了年末，有一日，母亲告诉我，闰土来了，我便飞跑的去看。他正在厨房里，紫色的圆脸，头戴一顶小毡帽，颈上套一个明晃晃的银项圈，这可见他的父亲十分爱他，怕他死去，所以在神佛面前许下愿心，用圈子将他套住了。他见人很怕羞，只是不怕我，没有旁人的时候，便和我说话，于是不到半日，我们便熟识了。我们那时候不知道谈些什么，只记得闰土很高兴，说是上城之后，见了许多没有见过的东西。', LuXun)
classifier.learn('“这不能。须大雪下了才好。我们沙地上，下了雪，我扫出一块空地来，用短棒支起一个大竹匾，撒下秕谷，看鸟雀来吃时，我远远地将缚在棒上的绳子只一拉，那鸟雀就罩在竹匾下了。什么都有：稻鸡，角鸡，鹁鸪，蓝背……”', LuXun)

// 老舍文章
const LaoShe = '老舍'
classifier.learn('在那棵婀娜的柳树下，我架个秋千，戴着用柳枝编成的花环，在秋千上摇来荡去。清凉的风徐徐吹过发间，一如你清爽的目光从我的脸颊掠过，掠走的是我颊上一抹微红的羞色，留下的是我心头几许美奂的遐思。我在秋千上摇啊摇，我的心被摇回了少女时的纤柔细弱。', LaoShe)
classifier.learn('今年开春，我决定再也不哭了，虽然自己很残缺，没有风的自由，没有鱼的走动，没有人类的智慧，但是我发现自己除了有一颗多愁善感的心，还拥有一副好嗓子！这，就足够了！我要用美妙的歌声，让知了爱上我，让那路过的女孩停下来为我鼓掌，让来这里的情侣充满欢笑', LaoShe)
classifier.learn('满月的小猫更可爱，腿脚还不稳，可是已经学会淘气。一根鸡毛，一个线团，都是它们的好玩具，耍个没完没了。一玩起来，它们不知要摔多少跟头，但是跌到了马上起来，再跑再跌。它们的头撞在门上、桌腿上，彼此的头上，撞疼了也不哭。它们的胆子越来越大，逐渐开辟新的游戏场所。它们到院子里来了，院中的花草可遭了殃。它们在花盆里摔交，抱着花枝打秋千，所过之处，枝折花落。你见了，绝不会责打它们，它们是那么生机勃勃，天真可爱！', LaoShe)
classifier.learn('在一片青幽幽的芳草地上，流过一条清澈见底的小溪，溪水多么清，溪水映着蓝天，映着灿烂的朝霞，也映着山上松树林的倒影。我禁不住捧起溪水喝了一口：清凉甘甜，沁人心脾，莫不是王母娘娘蟠桃盛会上的琼浆玉液？可是，当我指尖触及溪水时，双手感到异常冰凉。啊，是它那冰清玉洁的肌肤，容不得你亵玩。', LaoShe)
classifier.learn('六月，六月的湖面本来是可以微波荡漾的。骑着单车沿着平缓的公路一直到水上公园，尽管那是个老师们坚决要求不许去的地方，因为那里有许多溺水的灵魂，因为失足，或者别的，可那里感觉不到一丝的寒意，风景总是很好，我会坐在无边的草地上，远远的望着湖面，静静的，静静的听水草在湖里疯长的声音', LaoShe)
classifier.learn('微风仿佛会给那点微光吹到我的心上来，使我想起过去，更加重了眼前的悲哀。我的心就好象在月光下的蝙蝠，虽然是在光的下面，可是自己是黑的；黑的东西，即使会飞，也还是黑的，我没有希望。我可是不哭，我只常皱着眉。', LaoShe)
classifier.learn('那第一次，带着寒气的月牙儿确是带着寒气。它第一次在我的云中是酸苦，它那一点点微弱的浅金光儿照着我的泪。', LaoShe)
classifier.learn('祥子的手哆嗦得更厉害了，揣起保单，拉起车，几乎要哭出来。拉到个僻静地方，细细端详自己的车，在漆板上试着照照自己的脸！越看越可爱，就是那不尽合自己的理想的地方也都可以原谅了，因为已经是自己的车了。把车看得似乎暂时可以休息会儿了，他坐在了水簸箕的新脚垫儿上，看着车把上的发亮的黄铜喇叭。他忽然想起来，今年是二十二岁。因为父母死得早，他忘了生日是在哪一天。', LaoShe)

// 判断分类
console.log('预期：鲁迅，实际：', classifier.categorize('我在年青时候也曾经做过许多梦，后来大半忘却了，但自己也并不以为可惜。所谓回忆者，虽说可以使人欢欣，有时也不免使人寂寞，使精神的丝缕还牵着己逝的寂寞的时光，又有什么意味呢，而我偏苦于不能全忘却，这不能全忘的一部分，到现在便成了《呐喊》的来由。'))
console.log('预期：鲁迅，实际：', classifier.categorize('中国各处是壁，然而无形，像『鬼打墙』一般，使你随时能『碰』，能打这墙的，能碰而不感到痛苦的，是胜利者。'))
console.log('预期：老舍，实际：', classifier.categorize('多少次了，我看见跟现在这个月牙儿一样的月牙儿，它带着种种不同的感情，种种不同的景物，它一次一次的在我记忆中的碧云上斜挂着。它唤醒了我的记忆，象一阵晚风吹破一朵欲睡的花。'))
console.log('预期：老舍，实际：', classifier.categorize('两三个星期的工夫，他把腿溜出来了。他晓得自己的跑法很好看。跑法是车夫的能力与资格的证据。那撇着脚，像一对蒲扇在地上扇乎的，无疑的是刚由乡间上来的新手。那头低得很深，双脚蹭地，跑和走的速度差不多，而颇有跑的表示的，是那些五十岁以上的老者们。那经验十足而没什么力气的却另有一种方法；胸向内含，度数很深；腿抬得很高；一走一探头；这样，他们就带出跑得很用力的样子，而在事实上一点也不比别人快；他们仗着“作派”去维持自己的尊严。祥子当然决不采取这几种姿态。他的腿长步大，腰里非常的稳，跑起来没有多少响声，步步都有些伸缩，车把不动，使座儿觉到安全，舒服。说站住，不论在跑得多么快的时候，大脚在地上轻蹭两蹭，就站住了；他的力气似乎能达到车的各部分。脊背微俯，双手松松拢住车把，他活动，利落，准确；看不出急促而跑得很快，快而没有危险。就是在拉包车的里面，这也得算很名贵的。他确乎有点像一棵树，坚壮，沉默，而又有生气。他有自己的打算，有些心眼，但不好向别人讲论。在洋车夫里，个人的委屈与困难是公众的话料，“车口儿”上，小茶馆中，大杂院里，每人报告着形容着或吵嚷着自己的事，而后这些事成为大家的财产，像民歌似的由一处传到一处。祥子是乡下人，口齿没有城里人那么灵便；设若口齿灵利是出于天才，他天生来的不愿多说话，所以也不愿学着城里人的贫嘴恶舌。他的事他知道，不喜欢和别人讨论。因为嘴常闲着，所以他有工夫去思想，他的眼仿佛是老看着自己的心。只要他的主意打定，他便随着心中所开开的那条路儿走；假若走不通的话，他能一两天不出一声，咬着牙，好似咬着自己的心!'))

console.log(classifier.toJson())
`,case4={name:"ZH Writer case",factory,init:initCode,code},normalizeInputCode=e=>`
${e}
`,_sfc_main$1=defineComponent({name:"naivebayes-example-base",title:"NaiveBayes Web example",url:"file:///examples/naivebayes/index.vue?vue&type=script&lang.ts",components:{Codemirror:T},setup(){const cases=[case1,case2,case3,case4],caseIndex=ref(0),codes=reactive({disabled:cases[caseIndex.value].init,enabled:normalizeInputCode(cases[caseIndex.value].code)}),log=ref(""),consoleLog=(...e)=>{window.console.log(e),log.value+=`${Array.prototype.slice.call(e).map(n=>typeof n=="string"?n:JSON.stringify(n)).join("")}
`},editor=ref(null),handleEditorReady=e=>{editor.value=e.view},editorExtensions=computed(()=>[javascript(),useTheme().theme.value===Theme.Dark?oneDark:[]]),loading=ref(!1),runClassifier=async()=>{loading.value=!0;const classifier=await cases[caseIndex.value].factory();loading.value=!1;const console={...window.console,log:consoleLog};(classifier||console)&&eval(codes.enabled)},clearCode=()=>{codes.enabled=normalizeInputCode(dedent`
          console.log(classifier)

          // your code goes here...
        `),nextTick(()=>{var e;(e=editor.value)==null||e.focus()})},clearLog=()=>{log.value=""};return onMounted(()=>{watch(()=>caseIndex.value,e=>{const n=cases[e];codes.disabled=n.init,codes.enabled=normalizeInputCode(n.code),clearLog()})}),{cases,caseIndex,editorExtensions,handleEditorReady,loading,log,codes,runClassifier,clearCode,clearLog}}}),index_vue_vue_type_style_index_0_scoped_2269e3ab_lang="",_withScopeId=e=>(pushScopeId("data-v-2269e3ab"),e=e(),popScopeId(),e),_hoisted_1$1={class:"example"},_hoisted_2={class:"toolbar"},_hoisted_3={class:"case"},_hoisted_4=["value"],_hoisted_5={class:"right"},_hoisted_6=["disabled"],_hoisted_7=_withScopeId(()=>createBaseVNode("i",{class:"iconfont icon-play"},null,-1)),_hoisted_8=_withScopeId(()=>createBaseVNode("span",null,"Run code",-1)),_hoisted_9={key:0},_hoisted_10=_withScopeId(()=>createBaseVNode("i",{class:"iconfont icon-close"},null,-1)),_hoisted_11=_withScopeId(()=>createBaseVNode("span",null,"Clear logs",-1)),_hoisted_12=[_hoisted_10,_hoisted_11],_hoisted_13=_withScopeId(()=>createBaseVNode("i",{class:"iconfont icon-close"},null,-1)),_hoisted_14=_withScopeId(()=>createBaseVNode("span",null,"Clear code",-1)),_hoisted_15=[_hoisted_13,_hoisted_14],_hoisted_16=_withScopeId(()=>createBaseVNode("div",{class:"divider"},null,-1)),_hoisted_17=_withScopeId(()=>createBaseVNode("div",{class:"divider"},null,-1)),_hoisted_18=_withScopeId(()=>createBaseVNode("div",{class:"divider"},null,-1)),_hoisted_19={class:"output"},_hoisted_20=_withScopeId(()=>createBaseVNode("p",{class:"title"},"Console",-1)),_hoisted_21={class:"result"};function _sfc_render(e,n,o,s,t,d){const i=resolveComponent("codemirror");return openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("label",_hoisted_3,[createTextVNode(" Select a case: "),withDirectives(createBaseVNode("select",{class:"select",name:"case",id:"case","onUpdate:modelValue":n[0]||(n[0]=a=>e.caseIndex=a)},[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.cases,(a,r)=>(openBlock(),createElementBlock("option",{value:r,key:r},toDisplayString(a.name),9,_hoisted_4))),128))],512),[[vModelSelect,e.caseIndex]])]),createBaseVNode("div",_hoisted_5,[createBaseVNode("button",{class:"button",onClick:n[1]||(n[1]=(...a)=>e.runClassifier&&e.runClassifier(...a)),disabled:e.loading},[_hoisted_7,_hoisted_8,e.loading?(openBlock(),createElementBlock("span",_hoisted_9," (loading tokenizer...)")):createCommentVNode("",!0)],8,_hoisted_6),createBaseVNode("button",{class:"button",onClick:n[2]||(n[2]=(...a)=>e.clearLog&&e.clearLog(...a))},_hoisted_12),createBaseVNode("button",{class:"button",onClick:n[3]||(n[3]=(...a)=>e.clearCode&&e.clearCode(...a))},_hoisted_15)])]),_hoisted_16,createVNode(i,{modelValue:e.codes.disabled,"onUpdate:modelValue":n[4]||(n[4]=a=>e.codes.disabled=a),style:{height:"auto"},extensions:e.editorExtensions,disabled:""},null,8,["modelValue","extensions"]),_hoisted_17,createVNode(i,{modelValue:e.codes.enabled,"onUpdate:modelValue":n[5]||(n[5]=a=>e.codes.enabled=a),extensions:e.editorExtensions,style:{minHeight:"20em",maxHeight:"40em"},autofocus:"",onReady:e.handleEditorReady},null,8,["modelValue","extensions","onReady"]),_hoisted_18,createBaseVNode("div",_hoisted_19,[_hoisted_20,createBaseVNode("pre",_hoisted_21,toDisplayString(e.log||"-"),1)])])}const exampleComponent=_export_sfc(_sfc_main$1,[["render",_sfc_render],["__scopeId","data-v-2269e3ab"]]),exampleComponentString=`<template>
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
          <span v-if="loading">&nbsp;(loading tokenizer...)</span>
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

  const normalizeInputCode = (code: string) => \`\\n\${code}\\n\`

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
        log.value += \`\${Array.prototype.slice
          .call(_logs)
          .map((item) => {
            return typeof item === 'string' ? item : JSON.stringify(item)
          })
          .join('')}\\n\`
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
        // HACK: Prevent being Tree-Shaking
        if (classifier || console) {
          eval(codes.enabled)
        }
      }

      const clearCode = () => {
        codes.enabled = normalizeInputCode(dedent\`
          console.log(classifier)

          // your code goes here...
        \`)

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
<\/script>

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
      .iconfont {
        margin-right: $xs-gap;
      }
      &[disabled] {
        cursor: no-drop;
      }
      &:not([disabled]) {
        cursor: pointer;
        &:hover {
          color: $link-color;
        }
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
`,_hoisted_1={class:"naivebayes-example"},_sfc_main=defineComponent({__name:"naivebayes",setup(e){const{repository:n,route:o,packages:s}=PROJECTS.NaiveBayes,t=getExampleComponent({component:exampleComponent,raw:exampleComponentString,language:"vue"});return useSeoMeta(normalizeSeoMetaObject({title:getMetaTitle(n),keywords:getMetaKeywords(n).join(","),description:getMetaDescription(n),ogUrl:getPageURL(o),ogImage:getGitHubOpenGraphImageURL(n),ogImageWidth:1200,ogImageHeight:600})),(d,i)=>(openBlock(),createBlock(VueRenderer,{repository:unref(n)},{default:withCtx(()=>[createVNode(Homepage,{repository:unref(n),packages:unref(s)},{content:withCtx(()=>[createVNode(HomepageExamples,{examples:[unref(t)],"disabled-auto-ad":!0},{component:withCtx(a=>[createBaseVNode("div",_hoisted_1,[(openBlock(),createBlock(resolveDynamicComponent(a.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages"])]),_:1},8,["repository"]))}});export{_sfc_main as default};
