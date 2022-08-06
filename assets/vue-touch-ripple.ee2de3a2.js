import{d as _,f as X,h as se,n as le,J as Y,H as I,a0 as re,g as pe,r as N,ab as ce,c as g,q as a,y as s,M as ue,e as n,t as z,k as y,a5 as L,v as Q,F,l as J,a6 as de,j as C,a as m,p as T,b as j,P as me,u as be,x as G,z as k,aa as he,B as ge}from"./index.6ce8e7f3.js";import{g as _e,H as fe}from"./index.a31f9c2e.js";import{g as ye,a as ve,b as xe}from"./navbar.93eba9f1.js";import{V as ke}from"./vue.9ec78fc0.js";import{H as O}from"./link.cb533429.js";import{H as $e}from"./examples.7671e149.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";/*!
* VueTouchRipple v4.1.1
* Copyright (c) Surmon. All rights reserved.
* Released under the MIT License.
* Surmon
*/var h,ze=Object.freeze({color:"#fff",opacity:.3,duration:380,transition:"ease-out",keepLastRipple:!0}),we=Symbol("vue-touch-ripple-global-config"),Ce={color:String,opacity:Number,duration:Number,transition:String,keepLastRipple:{type:Boolean,default:void 0}};(function(e){e.Touch="touch",e.Click="click",e.Start="start",e.End="end"})(h||(h={}));var w={};w[h.Touch]=function(e){return!0},w[h.Click]=function(e){return!0},w[h.Start]=function(e){return!0},w[h.End]=function(e){return!0};var Te=_({name:"RippleItem",props:{id:{type:Number,required:!0},size:{type:Number,required:!0},top:{type:Number,required:!0},left:{type:Number,required:!0},color:{type:String,required:!0},opacity:{type:Number,required:!0},transition:{type:String,required:!0},duration:{type:Number,required:!0}},emits:{start:function(e){return Number.isInteger(e)},end:function(e){return Number.isInteger(e)}},setup:function(e,t){var l=null,p=X(0);return se(function(){le(function(){l=window.setTimeout(function(){p.value=1},0)})}),Y(function(){l&&(window.clearTimeout(l),l=null)}),function(){return I("div",{class:"ripple-item","data-id":e.id,onTransitionstart:function(){return t.emit("start",e.id)},onTransitionend:function(){return t.emit("end",e.id)},style:{opacity:e.opacity,top:e.top+"px",left:e.left+"px",width:e.size+"px",height:e.size+"px",transform:"scale("+p.value+")","z-index":e.id,"background-color":e.color,"transition-property":"transform, opacity","transition-duration":e.duration+"ms, 300ms","transition-timing-function":e.transition+", linear"}})}}}),je=_({name:"VueTouchRipple",props:Object.assign({},Ce),emits:Object.assign({},w),setup:function(e,t){var l=Object.assign(Object.assign({},ze),re(we,{})),p=pe(function(){var r,c,u,$,f;return{color:(r=e.color)!==null&&r!==void 0?r:l.color,opacity:(c=e.opacity)!==null&&c!==void 0?c:l.opacity,duration:(u=e.duration)!==null&&u!==void 0?u:l.duration,transition:($=e.transition)!==null&&$!==void 0?$:l.transition,keepLastRipple:(f=e.keepLastRipple)!==null&&f!==void 0?f:l.keepLastRipple}}),b=X(),d=N([]),i=function(){d.length=0},o=0,x=N({active:!0,cleanWhenMouseUp:!1}),Z=function(r){if(r.button===0){x.active=!0;var c=b.value.getBoundingClientRect(),u=c.top,$=c.left,f=function(q,D){var H=b.value.clientWidth,W=b.value.clientHeight,A=function(B){return Math.pow(B,2)},ae=[[0,0],[H,0],[0,W],[H,W]].map(function(B){return Math.sqrt(A(B[0]-q)+A(B[1]-D))}),E=2*Math.max.apply({},ae);return{left:q-E/2,top:D-E/2,size:Math.ceil(E)}}(r.clientX-$,r.clientY-u),te=f.size,oe=f.left,ie=f.top;d.push({id:o+=1,size:te,left:oe,top:ie}),t.emit(h.Touch,r)}},ee=function(r){r.button===0&&(x.active=!1,x.cleanWhenMouseUp&&i(),t.emit(h.Click,r))},ne=function(r){var c=d.findIndex(function(u){return u.id===r});return!(c<0)&&(p.value.keepLastRipple&&x.active&&c===d.length-1?(x.cleanWhenMouseUp=!0,!1):(x.cleanWhenMouseUp=!1,void d.splice(c,1)))};return Y(function(){i()}),function(){var r,c;return I("div",{class:"v-touch-ripple",ref:b,onMousedown:Z,onMouseup:ee},[((c=(r=t.slots).default)===null||c===void 0?void 0:c.call(r))||null,I(ce,{tag:"div",name:"ripple",class:"ripples",onBeforeEnter:function(u){t.emit(h.Start,Number(u.dataset.id))},onAfterLeave:function(u){t.emit(h.End,Number(u.dataset.id))}},function(){return d.map(function(u){return I(Te,Object.assign(Object.assign({},u),{key:u.id,color:p.value.color,opacity:p.value.opacity,duration:p.value.duration,transition:p.value.transition,onEnd:ne}))})})])}}}),S=je;const Re=_({name:"touch-ripper-example-customize-element",title:"Customize element",url:"file:///examples/vue-touch-ripple/01-customize-element.vue?vue&type=script&lang.ts",components:{TouchRipple:S},setup:()=>{const e=console.log,t=N({color:"#ffffff",opacity:.4,transition:"ease-out",duration:400,keepLastRipple:!0}),l=N({clipPath:"none",backgroundColor:"#ea4aaa"});return{state:t,styles:l,log:e}}});const v=e=>(T("data-v-24ec8a98"),e=e(),j(),e),Se={class:"example"},Me=v(()=>n("span",null,"content",-1)),Pe={class:"tools"},Be={class:"item"},Le={for:"color"},Oe={class:"item"},Ie={for:"opacity"},Ne={class:"item"},Ue=v(()=>n("label",{for:"transition"},"transition:",-1)),Ee=["value"],Ve={class:"item"},qe={for:"duration"},De={class:"item"},He=v(()=>n("label",{for:"keepLastRipple"},"keep last ripple:",-1)),We=v(()=>n("div",{class:"divider"},null,-1)),Ae={class:"item"},Qe=v(()=>n("label",{for:"background"},"background:",-1)),Fe={class:"item"},Je=v(()=>n("svg",{height:"0",width:"0",viewBox:"0 0 100 100"},[n("clipPath",{id:"heart",clipPathUnits:"objectBoundingBox",transform:"scale(0.01, 0.01)"},[n("path",{d:"M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"})])],-1)),Ge=v(()=>n("label",{for:"clipPath"},"CSS clip path:",-1)),Ke=["value"];function Xe(e,t,l,p,b,d){const i=C("touch-ripple");return m(),g("div",Se,[a(i,{class:"touch-ripple",style:ue(e.styles),color:e.state.color,opacity:e.state.opacity,transition:e.state.transition,duration:e.state.duration,"keep-last-ripple":e.state.keepLastRipple,onTouch:t[0]||(t[0]=o=>e.log("touch",o)),onClick:t[1]||(t[1]=o=>e.log("click",o)),onStart:t[2]||(t[2]=o=>e.log("start",o)),onEnd:t[3]||(t[3]=o=>e.log("end",o))},{default:s(()=>[Me]),_:1},8,["style","color","opacity","transition","duration","keep-last-ripple"]),n("div",Pe,[n("p",Be,[n("label",Le,"color: ("+z(e.state.color)+")",1),y(n("input",{type:"color",id:"color",name:"color","onUpdate:modelValue":t[4]||(t[4]=o=>e.state.color=o)},null,512),[[L,e.state.color]])]),n("p",Oe,[n("label",Ie,"opacity: ("+z(e.state.opacity)+")",1),y(n("input",{type:"range",id:"opacity",min:"0.1",max:"0.9",step:"0.1","onUpdate:modelValue":t[5]||(t[5]=o=>e.state.opacity=o)},null,512),[[L,e.state.opacity,void 0,{number:!0}]])]),n("p",Ne,[Ue,y(n("select",{name:"transition",id:"transition","onUpdate:modelValue":t[6]||(t[6]=o=>e.state.transition=o)},[(m(!0),g(F,null,J(["linear","ease-in","ease-out","steps(8, end)","cubic-bezier(.29, 1.01, 1, -0.68)","cubic-bezier(1, -0.24, 0, 1.92)"],o=>(m(),g("option",{value:o,key:o},z(o),9,Ee))),128))],512),[[Q,e.state.transition]])]),n("p",Ve,[n("label",qe,"duration: ("+z(e.state.duration)+")",1),y(n("input",{type:"range",id:"duration",min:"100",max:"2000",step:"100","onUpdate:modelValue":t[7]||(t[7]=o=>e.state.duration=o)},null,512),[[L,e.state.duration,void 0,{number:!0}]])]),n("p",De,[He,y(n("input",{id:"keepLastRipple",type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=o=>e.state.keepLastRipple=o),"true-value":!0,"false-value":!1},null,512),[[de,e.state.keepLastRipple]])]),We,n("p",Ae,[Qe,y(n("input",{type:"color",id:"background",name:"background","onUpdate:modelValue":t[9]||(t[9]=o=>e.styles.backgroundColor=o)},null,512),[[L,e.styles.backgroundColor]])]),n("p",Fe,[Je,Ge,y(n("select",{name:"clipPath",id:"clipPath","onUpdate:modelValue":t[10]||(t[10]=o=>e.styles.clipPath=o)},[(m(!0),g(F,null,J(["none","circle(50% at 50% 50%)","url(#heart)","polygon(50% 0%, 0% 100%, 100% 100%)","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)","polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)","polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)","polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)","polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"],o=>(m(),g("option",{value:o,key:o},z(o),9,Ke))),128))],512),[[Q,e.styles.clipPath]])])])])}const Ye=R(Re,[["render",Xe],["__scopeId","data-v-24ec8a98"]]),Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"})),en=_({name:"touch-ripper-example-image-element",title:"Image element",url:"file:///examples/vue-touch-ripple/02-image.vue?vue&type=script&lang.ts",components:{TouchRipple:S}}),nn="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/1.jpg",tn="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/2.jpg",on="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/3.jpg";const V=e=>(T("data-v-41db188f"),e=e(),j(),e),an={class:"example"},sn=V(()=>n("img",{class:"image",draggable:"false",src:nn},null,-1)),ln=V(()=>n("img",{class:"image",draggable:"false",src:tn},null,-1)),rn=V(()=>n("img",{class:"image",draggable:"false",src:on},null,-1));function pn(e,t,l,p,b,d){const i=C("touch-ripple");return m(),g("div",an,[a(i,{class:"image-box"},{default:s(()=>[sn]),_:1}),a(i,{class:"image-box",color:"yellow",opacity:.2,duration:600,transition:"ease-in"},{default:s(()=>[ln]),_:1},8,["opacity"]),a(i,{class:"image-box",color:"#36485e",opacity:.2,duration:600,transition:"cubic-bezier(1, -0.24, 0, 1.92)"},{default:s(()=>[rn]),_:1},8,["opacity"])])}const cn=R(en,[["render",pn],["__scopeId","data-v-41db188f"]]),un=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"})),dn=_({name:"touch-ripper-example-button-element",title:"Button element",url:"file:///examples/vue-touch-ripple/03-button.vue?vue&type=script&lang.ts",components:{TouchRipple:S}});const M=e=>(T("data-v-1046df52"),e=e(),j(),e),mn={class:"example"},bn=M(()=>n("button",{class:"button b-1"},"duration = 200",-1)),hn=M(()=>n("button",{class:"button b-2"},"duration = 600; color = #3d8b16",-1)),gn=M(()=>n("button",{class:"button b-3"},"Warning button",-1)),_n=M(()=>n("button",{class:"button b-4"},"Danger button",-1)),fn=M(()=>n("button",{class:"button b-5"},"color = #303133",-1));function yn(e,t,l,p,b,d){const i=C("touch-ripple");return m(),g("div",mn,[a(i,{duration:200},{default:s(()=>[bn]),_:1}),a(i,{color:"#3d8b16",duration:600},{default:s(()=>[hn]),_:1}),a(i,null,{default:s(()=>[gn]),_:1}),a(i,null,{default:s(()=>[_n]),_:1}),a(i,{color:"#303133"},{default:s(()=>[fn]),_:1})])}const vn=R(dn,[["render",yn],["__scopeId","data-v-1046df52"]]),xn=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"})),kn=_({name:"touch-ripper-example-typography-element",title:"Typography element",url:"file:///examples/vue-touch-ripple/04-typography.vue?vue&type=script&lang.ts",components:{TouchRipple:S}});const P=e=>(T("data-v-b9de135a"),e=e(),j(),e),$n={class:"example"},zn=P(()=>n("h1",null,"Talk is cheap. Show me the code.",-1)),wn=P(()=>n("p",null,"Stay hungry. Stay foolish.",-1)),Cn={class:"typography-box"},Tn=P(()=>n("span",null,"Because",-1)),jn=P(()=>n("strong",{class:"red"},"the mountain",-1)),Rn=P(()=>n("span",null,"was there.",-1));function Sn(e,t,l,p,b,d){const i=C("touch-ripple");return m(),g("div",$n,[a(i,{class:"typography-box",color:"#C0C4CC",opacity:.3,transition:"ease-in-out"},{default:s(()=>[zn]),_:1},8,["opacity"]),a(i,{class:"typography-box",color:"#909399",duration:200,opacity:.3,transition:"ease-in-out"},{default:s(()=>[wn]),_:1},8,["opacity"]),n("p",Cn,[Tn,a(i,{class:"inline-typography",color:"red",duration:200,opacity:.3,transition:"ease-in-out"},{default:s(()=>[jn]),_:1},8,["opacity"]),Rn])])}const Mn=R(kn,[["render",Sn],["__scopeId","data-v-b9de135a"]]),Pn=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),Bn=_({name:"touch-ripper-example-cubic-bezier",title:"Cubic Bezier",url:"file:///examples/vue-touch-ripple/05-div.vue?vue&type=script&lang.ts",components:{TouchRipple:S}});const U=e=>(T("data-v-8637a79b"),e=e(),j(),e),Ln={class:"example"},On=U(()=>n("code",null,"cubic-bezier(0.18, 0.89, 0.32, 1.28)",-1)),In=U(()=>n("code",null,"cubic-bezier(0.6, -0.28, 0.74, 0.05)",-1)),Nn=U(()=>n("code",null,"cubic-bezier(0.89, 0.24, 0, 0.94)",-1)),Un=U(()=>n("code",null,"cubic-bezier(1, -0.24, 0, 1.92)",-1));function En(e,t,l,p,b,d){const i=C("touch-ripple");return m(),g("div",Ln,[a(i,{class:"box box-1",duration:300,opacity:.3,color:"#999",transition:"cubic-bezier(0.18, 0.89, 0.32, 1.28)"},{default:s(()=>[On]),_:1},8,["opacity"]),a(i,{class:"box box-2",duration:400,opacity:.3,color:"#fff",transition:"cubic-bezier(0.6, -0.28, 0.74, 0.05)"},{default:s(()=>[In]),_:1},8,["opacity"]),a(i,{class:"box box-3",duration:400,opacity:.3,color:"#eee",transition:"cubic-bezier(0.89, 0.24, 0, 0.94)"},{default:s(()=>[Nn]),_:1},8,["opacity"]),a(i,{class:"box box-4",duration:800,opacity:.5,color:"#fff",transition:"cubic-bezier(1, -0.24, 0, 1.92)"},{default:s(()=>[Un]),_:1},8,["opacity"])])}const Vn=R(Bn,[["render",En],["__scopeId","data-v-8637a79b"]]),qn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn},Symbol.toStringTag,{value:"Module"})),Dn=`<template>
  <div class="example">
    <touch-ripple
      class="touch-ripple"
      :style="styles"
      :color="state.color"
      :opacity="state.opacity"
      :transition="state.transition"
      :duration="state.duration"
      :keep-last-ripple="state.keepLastRipple"
      @touch="log('touch', $event)"
      @click="log('click', $event)"
      @start="log('start', $event)"
      @end="log('end', $event)"
    >
      <span>content</span>
    </touch-ripple>
    <div class="tools">
      <p class="item">
        <label for="color">color: ({{ state.color }})</label>
        <input type="color" id="color" name="color" v-model="state.color" />
      </p>
      <p class="item">
        <label for="opacity">opacity: ({{ state.opacity }})</label>
        <input
          type="range"
          id="opacity"
          min="0.1"
          max="0.9"
          step="0.1"
          v-model.number="state.opacity"
        />
      </p>
      <p class="item">
        <label for="transition">transition:</label>
        <select name="transition" id="transition" v-model="state.transition">
          <option
            :value="option"
            :key="option"
            v-for="option in [
              'linear',
              'ease-in',
              'ease-out',
              'steps(8, end)',
              'cubic-bezier(.29, 1.01, 1, -0.68)',
              'cubic-bezier(1, -0.24, 0, 1.92)'
            ]"
          >
            {{ option }}
          </option>
        </select>
      </p>
      <p class="item">
        <label for="duration">duration: ({{ state.duration }})</label>
        <input
          type="range"
          id="duration"
          min="100"
          max="2000"
          step="100"
          v-model.number="state.duration"
        />
      </p>
      <p class="item">
        <label for="keepLastRipple">keep last ripple:</label>
        <input
          id="keepLastRipple"
          type="checkbox"
          v-model="state.keepLastRipple"
          :true-value="true"
          :false-value="false"
        />
      </p>
      <div class="divider"></div>
      <p class="item">
        <label for="background">background:</label>
        <input
          type="color"
          id="background"
          name="background"
          v-model="styles.backgroundColor"
        />
      </p>
      <p class="item">
        <svg height="0" width="0" viewBox="0 0 100 100">
          <clipPath
            id="heart"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.01, 0.01)"
          >
            <path
              d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
            />
          </clipPath>
        </svg>
        <label for="clipPath">CSS clip path:</label>
        <select name="clipPath" id="clipPath" v-model="styles.clipPath">
          <option
            :value="option"
            :key="option"
            v-for="option in [
              'none',
              \`circle(50% at 50% 50%)\`,
              \`url(#heart)\`,
              \`polygon(50% 0%, 0% 100%, 100% 100%)\`,
              'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              \`polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)\`,
              'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'
            ]"
          >
            {{ option }}
          </option>
        </select>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { TouchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/style.css'

  export default defineComponent({
    name: 'touch-ripper-example-customize-element',
    title: 'Customize element',
    url: import.meta.url,
    components: {
      TouchRipple
    },
    setup: () => {
      const log = console.log
      const state = reactive({
        color: '#ffffff',
        opacity: 0.4,
        transition: 'ease-out',
        duration: 400,
        keepLastRipple: true
      })
      const styles = reactive({
        clipPath: 'none',
        backgroundColor: '#ea4aaa'
      })

      return {
        state,
        styles,
        log
      }
    }
  })
<\/script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .example {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;

    .code {
      padding: 1em 2em;
      background-color: $header-bg;
    }

    .touch-ripple {
      width: 18em;
      height: 18em;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;
      border-radius: 2px;
    }

    .tools {
      p {
        text-align: left;
        label {
          min-width: 8em;
          display: inline-block;
        }
      }

      input:not([type='checkbox']),
      select {
        width: 20em;
        margin: 0;
      }

      .divider {
        height: 1px;
        margin: 1.4em 0;
        background-color: $border-color;
      }
    }
  }
</style>
`,Hn=`<template>
  <div class="example">
    <touch-ripple class="image-box">
      <img class="image" draggable="false" src="/images/example/1.jpg" />
    </touch-ripple>
    <touch-ripple
      class="image-box"
      color="yellow"
      :opacity="0.2"
      :duration="600"
      transition="ease-in"
    >
      <img class="image" draggable="false" src="/images/example/2.jpg" />
    </touch-ripple>
    <touch-ripple
      class="image-box"
      color="#36485e"
      :opacity="0.2"
      :duration="600"
      transition="cubic-bezier(1, -0.24, 0, 1.92)"
    >
      <img class="image" draggable="false" src="/images/example/3.jpg" />
    </touch-ripple>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { TouchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/style.css'

  export default defineComponent({
    name: 'touch-ripper-example-image-element',
    title: 'Image element',
    url: import.meta.url,
    components: {
      TouchRipple
    }
  })
<\/script>

<style lang="scss" scoped>
  .example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .image-box {
      width: 30%;
      height: 10em;
      border-radius: 4px;
      overflow: hidden;

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
      }
    }
  }
</style>
`,Wn=`<template>
  <div class="example">
    <touch-ripple :duration="200">
      <button class="button b-1">duration = 200</button>
    </touch-ripple>
    <touch-ripple color="#3d8b16" :duration="600">
      <button class="button b-2">duration = 600; color = #3d8b16</button>
    </touch-ripple>
    <touch-ripple>
      <button class="button b-3">Warning button</button>
    </touch-ripple>
    <touch-ripple>
      <button class="button b-4">Danger button</button>
    </touch-ripple>
    <touch-ripple color="#303133">
      <button class="button b-5">color = #303133</button>
    </touch-ripple>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { TouchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/style.css'

  export default defineComponent({
    name: 'touch-ripper-example-button-element',
    title: 'Button element',
    url: import.meta.url,
    components: {
      TouchRipple
    }
  })
<\/script>

<style lang="scss" scoped>
  .example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .button {
      width: auto;
      height: 3em;
      line-height: 3em;
      border: none;
      border-radius: 4px;
      padding: 0 1rem;
      color: white;
      cursor: pointer;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(1.1);
      }

      &.b-1 {
        background-color: #409eff;
      }
      &.b-2 {
        background-color: #67c23a;
      }
      &.b-3 {
        background-color: #e6a23c;
      }
      &.b-4 {
        background-color: #f56c6c;
      }
      &.b-5 {
        background-color: #909399;
      }
    }
  }
</style>
`,An=`<template>
  <div class="example">
    <touch-ripple
      class="typography-box"
      color="#C0C4CC"
      :opacity="0.3"
      transition="ease-in-out"
    >
      <h1>Talk is cheap. Show me the code.</h1>
    </touch-ripple>
    <touch-ripple
      class="typography-box"
      color="#909399"
      :duration="200"
      :opacity="0.3"
      transition="ease-in-out"
    >
      <p>Stay hungry. Stay foolish.</p>
    </touch-ripple>
    <p class="typography-box">
      <span>Because</span>
      <touch-ripple
        class="inline-typography"
        color="red"
        :duration="200"
        :opacity="0.3"
        transition="ease-in-out"
      >
        <strong class="red">the mountain</strong>
      </touch-ripple>
      <span>was there.</span>
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { TouchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/style.css'

  export default defineComponent({
    name: 'touch-ripper-example-typography-element',
    title: 'Typography element',
    url: import.meta.url,
    components: {
      TouchRipple
    }
  })
<\/script>

<style lang="scss" scoped>
  .example {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .typography-box {
      width: 100%;
      text-align: center;
      user-select: none;

      .inline-typography {
        display: inline-block;
        margin: 0 0.3em;
      }

      .red {
        color: red;
      }
    }
  }
</style>
`,Qn=`<template>
  <div class="example">
    <touch-ripple
      class="box box-1"
      :duration="300"
      :opacity="0.3"
      color="#999"
      transition="cubic-bezier(0.18, 0.89, 0.32, 1.28)"
    >
      <code>cubic-bezier(0.18, 0.89, 0.32, 1.28)</code>
    </touch-ripple>
    <touch-ripple
      class="box box-2"
      :duration="400"
      :opacity="0.3"
      color="#fff"
      transition="cubic-bezier(0.6, -0.28, 0.74, 0.05)"
    >
      <code>cubic-bezier(0.6, -0.28, 0.74, 0.05)</code>
    </touch-ripple>
    <touch-ripple
      class="box box-3"
      :duration="400"
      :opacity="0.3"
      color="#eee"
      transition="cubic-bezier(0.89, 0.24, 0, 0.94)"
    >
      <code>cubic-bezier(0.89, 0.24, 0, 0.94)</code>
    </touch-ripple>
    <touch-ripple
      class="box box-4"
      :duration="800"
      :opacity="0.5"
      color="#fff"
      transition="cubic-bezier(1, -0.24, 0, 1.92)"
    >
      <code>cubic-bezier(1, -0.24, 0, 1.92)</code>
    </touch-ripple>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { TouchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/style.css'

  export default defineComponent({
    name: 'touch-ripper-example-cubic-bezier',
    title: 'Cubic Bezier',
    url: import.meta.url,
    components: {
      TouchRipple
    }
  })
<\/script>

<style lang="scss" scoped>
  .example {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    .box {
      line-height: 14em;
      text-align: center;
      user-select: none;
      color: white;
      border-radius: 2px;

      &.box-1 {
        background: #36485e;
      }
      &.box-2 {
        background: #b481bb;
      }
      &.box-3 {
        background: #5dac81;
      }
      &.box-4 {
        background: #1e88a8;
      }
    }
  }
</style>
`,K=Object.assign({"./01-customize-element.vue":Ze,"./02-image.vue":un,"./03-button.vue":xn,"./04-typography.vue":Pn,"./05-div.vue":qn}),Fn=Object.assign({"./01-customize-element.vue":Dn,"./02-image.vue":Hn,"./03-button.vue":Wn,"./04-typography.vue":An,"./05-div.vue":Qn}),Jn=Object.keys(K).map(e=>({component:K[e].default,raw:Fn[e],language:"vue"})),Gn={class:"touch-ripple-example"},ot=_({__name:"vue-touch-ripple",setup(e){const{repository:t,packages:l}=me.VueTouchRipple,p=Jn.map(_e);return be({title:ye(t),keywords:ve(t).join(","),description:xe(t)}),(b,d)=>(m(),G(ke,{repository:k(t)},{default:s(()=>[a(fe,{repository:k(t),packages:k(l)},{actions:s(()=>[a(O,{icon:"doc",text:"Vue(2) Examples",href:k(he)(k(t))},null,8,["href"]),a(O,{icon:"doc",text:"Component Props",href:"https://github.com/surmon-china/vue-touch-ripple#component-props"}),a(O,{icon:"doc",text:"Component Events",href:"https://github.com/surmon-china/vue-touch-ripple#component-events"}),a(O,{icon:"discord",text:"Discord Discussions",href:"https://discord.gg/QF8zwF3vPv"})]),content:s(()=>[a($e,{examples:k(p),"disabled-auto-ad":!0},{component:s(i=>[n("div",Gn,[(m(),G(ge(i.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages"])]),_:1},8,["repository"]))}});export{ot as default};
