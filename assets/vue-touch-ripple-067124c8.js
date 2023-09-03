import{d as _,U as se,h as le,f as X,r as U,I as Y,J as B,W as re,i as pe,n as ce,j as C,a as b,c as h,s as a,y as s,O as ue,e as n,t as z,l as y,M as L,v as Q,F,m as G,N as de,p as R,b as S,x as J,z as k,B as me,P as be}from"./index-8d0aca7a.js";import{_ as T,u as ge}from"./_plugin-vue_export-helper-7f88b869.js";import{n as he,g as _e,a as fe,b as ye,c as ve,d as xe,e as ke}from"./navbar-38a31211.js";import{g as $e,H as ze}from"./index-2d22522e.js";import{V as we}from"./vue-d7a19679.js";import{H as O}from"./link-312890f3.js";import{H as Ce}from"./examples-490ac37e.js";/*!
* VueTouchRipple v4.1.1
* Copyright (c) Surmon. All rights reserved.
* Released under the MIT License.
* Surmon
*/var g,Re=Object.freeze({color:"#fff",opacity:.3,duration:380,transition:"ease-out",keepLastRipple:!0}),Se=Symbol("vue-touch-ripple-global-config"),Te={color:String,opacity:Number,duration:Number,transition:String,keepLastRipple:{type:Boolean,default:void 0}};(function(e){e.Touch="touch",e.Click="click",e.Start="start",e.End="end"})(g||(g={}));var w={};w[g.Touch]=function(e){return!0},w[g.Click]=function(e){return!0},w[g.Start]=function(e){return!0},w[g.End]=function(e){return!0};var je=_({name:"RippleItem",props:{id:{type:Number,required:!0},size:{type:Number,required:!0},top:{type:Number,required:!0},left:{type:Number,required:!0},color:{type:String,required:!0},opacity:{type:Number,required:!0},transition:{type:String,required:!0},duration:{type:Number,required:!0}},emits:{start:function(e){return Number.isInteger(e)},end:function(e){return Number.isInteger(e)}},setup:function(e,t){var l=null,p=X(0);return pe(function(){ce(function(){l=window.setTimeout(function(){p.value=1},0)})}),Y(function(){l&&(window.clearTimeout(l),l=null)}),function(){return B("div",{class:"ripple-item","data-id":e.id,onTransitionstart:function(){return t.emit("start",e.id)},onTransitionend:function(){return t.emit("end",e.id)},style:{opacity:e.opacity,top:e.top+"px",left:e.left+"px",width:e.size+"px",height:e.size+"px",transform:"scale("+p.value+")","z-index":e.id,"background-color":e.color,"transition-property":"transform, opacity","transition-duration":e.duration+"ms, 300ms","transition-timing-function":e.transition+", linear"}})}}}),Me=_({name:"VueTouchRipple",props:Object.assign({},Te),emits:Object.assign({},w),setup:function(e,t){var l=Object.assign(Object.assign({},Re),se(Se,{})),p=le(function(){var r,c,u,$,f;return{color:(r=e.color)!==null&&r!==void 0?r:l.color,opacity:(c=e.opacity)!==null&&c!==void 0?c:l.opacity,duration:(u=e.duration)!==null&&u!==void 0?u:l.duration,transition:($=e.transition)!==null&&$!==void 0?$:l.transition,keepLastRipple:(f=e.keepLastRipple)!==null&&f!==void 0?f:l.keepLastRipple}}),m=X(),d=U([]),i=function(){d.length=0},o=0,x=U({active:!0,cleanWhenMouseUp:!1}),Z=function(r){if(r.button===0){x.active=!0;var c=m.value.getBoundingClientRect(),u=c.top,$=c.left,f=function(D,q){var H=m.value.clientWidth,W=m.value.clientHeight,A=function(I){return Math.pow(I,2)},ae=[[0,0],[H,0],[0,W],[H,W]].map(function(I){return Math.sqrt(A(I[0]-D)+A(I[1]-q))}),E=2*Math.max.apply({},ae);return{left:D-E/2,top:q-E/2,size:Math.ceil(E)}}(r.clientX-$,r.clientY-u),te=f.size,oe=f.left,ie=f.top;d.push({id:o+=1,size:te,left:oe,top:ie}),t.emit(g.Touch,r)}},ee=function(r){r.button===0&&(x.active=!1,x.cleanWhenMouseUp&&i(),t.emit(g.Click,r))},ne=function(r){var c=d.findIndex(function(u){return u.id===r});return!(c<0)&&(p.value.keepLastRipple&&x.active&&c===d.length-1?(x.cleanWhenMouseUp=!0,!1):(x.cleanWhenMouseUp=!1,void d.splice(c,1)))};return Y(function(){i()}),function(){var r,c;return B("div",{class:"v-touch-ripple",ref:m,onMousedown:Z,onMouseup:ee},[((c=(r=t.slots).default)===null||c===void 0?void 0:c.call(r))||null,B(re,{tag:"div",name:"ripple",class:"ripples",onBeforeEnter:function(u){t.emit(g.Start,Number(u.dataset.id))},onAfterLeave:function(u){t.emit(g.End,Number(u.dataset.id))}},function(){return d.map(function(u){return B(je,Object.assign(Object.assign({},u),{key:u.id,color:p.value.color,opacity:p.value.opacity,duration:p.value.duration,transition:p.value.transition,onEnd:ne}))})})])}}}),j=Me;const Pe=_({name:"touch-ripper-example-customize-element",title:"Customize element",url:"file:///examples/vue-touch-ripple/01-customize-element.vue?vue&type=script&lang.ts",components:{TouchRipple:j},setup:()=>{const e=console.log,t=U({color:"#ffffff",opacity:.4,transition:"ease-out",duration:400,keepLastRipple:!0}),l=U({clipPath:"none",backgroundColor:"#ea4aaa"});return{state:t,styles:l,log:e}}});const v=e=>(R("data-v-24ec8a98"),e=e(),S(),e),Ie={class:"example"},Le=v(()=>n("span",null,"content",-1)),Oe={class:"tools"},Be={class:"item"},Ue={for:"color"},Ne={class:"item"},Ee={for:"opacity"},Ve={class:"item"},De=v(()=>n("label",{for:"transition"},"transition:",-1)),qe=["value"],He={class:"item"},We={for:"duration"},Ae={class:"item"},Qe=v(()=>n("label",{for:"keepLastRipple"},"keep last ripple:",-1)),Fe=v(()=>n("div",{class:"divider"},null,-1)),Ge={class:"item"},Je=v(()=>n("label",{for:"background"},"background:",-1)),Ke={class:"item"},Xe=v(()=>n("svg",{height:"0",width:"0",viewBox:"0 0 100 100"},[n("clipPath",{id:"heart",clipPathUnits:"objectBoundingBox",transform:"scale(0.01, 0.01)"},[n("path",{d:"M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"})])],-1)),Ye=v(()=>n("label",{for:"clipPath"},"CSS clip path:",-1)),Ze=["value"];function en(e,t,l,p,m,d){const i=C("touch-ripple");return b(),h("div",Ie,[a(i,{class:"touch-ripple",style:ue(e.styles),color:e.state.color,opacity:e.state.opacity,transition:e.state.transition,duration:e.state.duration,"keep-last-ripple":e.state.keepLastRipple,onTouch:t[0]||(t[0]=o=>e.log("touch",o)),onClick:t[1]||(t[1]=o=>e.log("click",o)),onStart:t[2]||(t[2]=o=>e.log("start",o)),onEnd:t[3]||(t[3]=o=>e.log("end",o))},{default:s(()=>[Le]),_:1},8,["style","color","opacity","transition","duration","keep-last-ripple"]),n("div",Oe,[n("p",Be,[n("label",Ue,"color: ("+z(e.state.color)+")",1),y(n("input",{type:"color",id:"color",name:"color","onUpdate:modelValue":t[4]||(t[4]=o=>e.state.color=o)},null,512),[[L,e.state.color]])]),n("p",Ne,[n("label",Ee,"opacity: ("+z(e.state.opacity)+")",1),y(n("input",{type:"range",id:"opacity",min:"0.1",max:"0.9",step:"0.1","onUpdate:modelValue":t[5]||(t[5]=o=>e.state.opacity=o)},null,512),[[L,e.state.opacity,void 0,{number:!0}]])]),n("p",Ve,[De,y(n("select",{name:"transition",id:"transition","onUpdate:modelValue":t[6]||(t[6]=o=>e.state.transition=o)},[(b(!0),h(F,null,G(["linear","ease-in","ease-out","steps(8, end)","cubic-bezier(.29, 1.01, 1, -0.68)","cubic-bezier(1, -0.24, 0, 1.92)"],o=>(b(),h("option",{value:o,key:o},z(o),9,qe))),128))],512),[[Q,e.state.transition]])]),n("p",He,[n("label",We,"duration: ("+z(e.state.duration)+")",1),y(n("input",{type:"range",id:"duration",min:"100",max:"2000",step:"100","onUpdate:modelValue":t[7]||(t[7]=o=>e.state.duration=o)},null,512),[[L,e.state.duration,void 0,{number:!0}]])]),n("p",Ae,[Qe,y(n("input",{id:"keepLastRipple",type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=o=>e.state.keepLastRipple=o),"true-value":!0,"false-value":!1},null,512),[[de,e.state.keepLastRipple]])]),Fe,n("p",Ge,[Je,y(n("input",{type:"color",id:"background",name:"background","onUpdate:modelValue":t[9]||(t[9]=o=>e.styles.backgroundColor=o)},null,512),[[L,e.styles.backgroundColor]])]),n("p",Ke,[Xe,Ye,y(n("select",{name:"clipPath",id:"clipPath","onUpdate:modelValue":t[10]||(t[10]=o=>e.styles.clipPath=o)},[(b(!0),h(F,null,G(["none","circle(50% at 50% 50%)","url(#heart)","polygon(50% 0%, 0% 100%, 100% 100%)","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)","polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)","polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)","polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)","polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"],o=>(b(),h("option",{value:o,key:o},z(o),9,Ze))),128))],512),[[Q,e.styles.clipPath]])])])])}const nn=T(Pe,[["render",en],["__scopeId","data-v-24ec8a98"]]),tn=Object.freeze(Object.defineProperty({__proto__:null,default:nn},Symbol.toStringTag,{value:"Module"})),on=_({name:"touch-ripper-example-image-element",title:"Image element",url:"file:///examples/vue-touch-ripple/02-image.vue?vue&type=script&lang.ts",components:{TouchRipple:j}}),an="/images/example/1.jpg",sn="/images/example/2.jpg",ln="/images/example/3.jpg";const V=e=>(R("data-v-41db188f"),e=e(),S(),e),rn={class:"example"},pn=V(()=>n("img",{class:"image",draggable:"false",src:an},null,-1)),cn=V(()=>n("img",{class:"image",draggable:"false",src:sn},null,-1)),un=V(()=>n("img",{class:"image",draggable:"false",src:ln},null,-1));function dn(e,t,l,p,m,d){const i=C("touch-ripple");return b(),h("div",rn,[a(i,{class:"image-box"},{default:s(()=>[pn]),_:1}),a(i,{class:"image-box",color:"yellow",opacity:.2,duration:600,transition:"ease-in"},{default:s(()=>[cn]),_:1}),a(i,{class:"image-box",color:"#36485e",opacity:.2,duration:600,transition:"cubic-bezier(1, -0.24, 0, 1.92)"},{default:s(()=>[un]),_:1})])}const mn=T(on,[["render",dn],["__scopeId","data-v-41db188f"]]),bn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"})),gn=_({name:"touch-ripper-example-button-element",title:"Button element",url:"file:///examples/vue-touch-ripple/03-button.vue?vue&type=script&lang.ts",components:{TouchRipple:j}});const M=e=>(R("data-v-1046df52"),e=e(),S(),e),hn={class:"example"},_n=M(()=>n("button",{class:"button b-1"},"duration = 200",-1)),fn=M(()=>n("button",{class:"button b-2"},"duration = 600; color = #3d8b16",-1)),yn=M(()=>n("button",{class:"button b-3"},"Warning button",-1)),vn=M(()=>n("button",{class:"button b-4"},"Danger button",-1)),xn=M(()=>n("button",{class:"button b-5"},"color = #303133",-1));function kn(e,t,l,p,m,d){const i=C("touch-ripple");return b(),h("div",hn,[a(i,{duration:200},{default:s(()=>[_n]),_:1}),a(i,{color:"#3d8b16",duration:600},{default:s(()=>[fn]),_:1}),a(i,null,{default:s(()=>[yn]),_:1}),a(i,null,{default:s(()=>[vn]),_:1}),a(i,{color:"#303133"},{default:s(()=>[xn]),_:1})])}const $n=T(gn,[["render",kn],["__scopeId","data-v-1046df52"]]),zn=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),wn=_({name:"touch-ripper-example-typography-element",title:"Typography element",url:"file:///examples/vue-touch-ripple/04-typography.vue?vue&type=script&lang.ts",components:{TouchRipple:j}});const P=e=>(R("data-v-b9de135a"),e=e(),S(),e),Cn={class:"example"},Rn=P(()=>n("h1",null,"Talk is cheap. Show me the code.",-1)),Sn=P(()=>n("p",null,"Stay hungry. Stay foolish.",-1)),Tn={class:"typography-box"},jn=P(()=>n("span",null,"Because",-1)),Mn=P(()=>n("strong",{class:"red"},"the mountain",-1)),Pn=P(()=>n("span",null,"was there.",-1));function In(e,t,l,p,m,d){const i=C("touch-ripple");return b(),h("div",Cn,[a(i,{class:"typography-box",color:"#C0C4CC",opacity:.3,transition:"ease-in-out"},{default:s(()=>[Rn]),_:1}),a(i,{class:"typography-box",color:"#909399",duration:200,opacity:.3,transition:"ease-in-out"},{default:s(()=>[Sn]),_:1}),n("p",Tn,[jn,a(i,{class:"inline-typography",color:"red",duration:200,opacity:.3,transition:"ease-in-out"},{default:s(()=>[Mn]),_:1}),Pn])])}const Ln=T(wn,[["render",In],["__scopeId","data-v-b9de135a"]]),On=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"})),Bn=_({name:"touch-ripper-example-cubic-bezier",title:"Cubic Bezier",url:"file:///examples/vue-touch-ripple/05-div.vue?vue&type=script&lang.ts",components:{TouchRipple:j}});const N=e=>(R("data-v-8637a79b"),e=e(),S(),e),Un={class:"example"},Nn=N(()=>n("code",null,"cubic-bezier(0.18, 0.89, 0.32, 1.28)",-1)),En=N(()=>n("code",null,"cubic-bezier(0.6, -0.28, 0.74, 0.05)",-1)),Vn=N(()=>n("code",null,"cubic-bezier(0.89, 0.24, 0, 0.94)",-1)),Dn=N(()=>n("code",null,"cubic-bezier(1, -0.24, 0, 1.92)",-1));function qn(e,t,l,p,m,d){const i=C("touch-ripple");return b(),h("div",Un,[a(i,{class:"box box-1",duration:300,opacity:.3,color:"#999",transition:"cubic-bezier(0.18, 0.89, 0.32, 1.28)"},{default:s(()=>[Nn]),_:1}),a(i,{class:"box box-2",duration:400,opacity:.3,color:"#fff",transition:"cubic-bezier(0.6, -0.28, 0.74, 0.05)"},{default:s(()=>[En]),_:1}),a(i,{class:"box box-3",duration:400,opacity:.3,color:"#eee",transition:"cubic-bezier(0.89, 0.24, 0, 0.94)"},{default:s(()=>[Vn]),_:1}),a(i,{class:"box box-4",duration:800,opacity:.5,color:"#fff",transition:"cubic-bezier(1, -0.24, 0, 1.92)"},{default:s(()=>[Dn]),_:1})])}const Hn=T(Bn,[["render",qn],["__scopeId","data-v-8637a79b"]]),Wn=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"})),An=`<template>
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
`,Qn=`<template>
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
`,Fn=`<template>
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
`,Gn=`<template>
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
`,Jn=`<template>
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
`,K=Object.assign({"./01-customize-element.vue":tn,"./02-image.vue":bn,"./03-button.vue":zn,"./04-typography.vue":On,"./05-div.vue":Wn}),Kn=Object.assign({"./01-customize-element.vue":An,"./02-image.vue":Qn,"./03-button.vue":Fn,"./04-typography.vue":Gn,"./05-div.vue":Jn}),Xn=Object.keys(K).map(e=>({component:K[e].default,raw:Kn[e],language:"vue"})),Yn={class:"touch-ripple-example"},st=_({__name:"vue-touch-ripple",setup(e){const{repository:t,route:l,packages:p}=be.VueTouchRipple,m=Xn.map($e);return ge(he({title:_e(t),keywords:fe(t).join(","),description:ye(t),ogUrl:ve(l),ogImage:xe(t),ogImageWidth:1200,ogImageHeight:600})),(d,i)=>(b(),J(we,{repository:k(t)},{default:s(()=>[a(ze,{repository:k(t),packages:k(p)},{actions:s(()=>[a(O,{icon:"doc",text:"Vue(2) Examples",href:k(ke)(k(t))},null,8,["href"]),a(O,{icon:"doc",text:"Component Props",href:"https://github.com/surmon-china/vue-touch-ripple#component-props"}),a(O,{icon:"doc",text:"Component Events",href:"https://github.com/surmon-china/vue-touch-ripple#component-events"}),a(O,{icon:"discord",text:"Discord Discussions",href:"https://discord.gg/QF8zwF3vPv"})]),content:s(()=>[a(Ce,{examples:k(m),"disabled-auto-ad":!0},{component:s(o=>[n("div",Yn,[(b(),J(me(o.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages"])]),_:1},8,["repository"]))}});export{st as default};
