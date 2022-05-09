import{R as oe,u as ie,g as ae}from"./index.6e10d175.js";import{f as re,H as le,h as P,j as se}from"./examples.b532868c.js";import{g as pe,a as ce,b as ue}from"./navbar.803cd3f7.js";import{V as de}from"./vue.e1d016c0.js";import{i as g,q as K,a5 as me,a1 as be,a6 as X,k as L,v as he,z as I,ac as ge,m as fe,E as z,F as m,M as h,U as a,Q as r,_ as _e,P as n,V as k,ad as y,ae as B,af as Q,S as A,T as H,ag as ye,N as w,O as C,G as F,R as $,a2 as ve}from"./vendor.028298b3.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";/*!
* VueTouchRipple v4.0.0
* Copyright (c) Surmon. All rights reserved.
* Released under the MIT License.
* Surmon
*/var xe=Object.freeze({color:"#fff",opacity:.3,duration:380,transition:"ease-out",keepLastRipple:!0}),ke=Symbol("vue-touch-ripple-global-config"),$e=g({name:"RippleCore",props:{id:{type:Number,required:!0},size:{type:Number,required:!0},top:{type:Number,required:!0},left:{type:Number,required:!0},color:{type:String,required:!0},opacity:{type:Number,required:!0},transition:{type:String,required:!0},duration:{type:Number,required:!0}},emits:{start:function(e){return Number.isInteger(e)},end:function(e){return Number.isInteger(e)}},setup:function(e,t){var l=null,u=K(0);return me(function(){be(function(){l=window.setTimeout(function(){u.value=1},0)})}),X(function(){l&&(window.clearTimeout(l),l=null)}),function(){return L("div",{class:"ripple-core","data-id":e.id,onTransitionstart:function(){return t.emit("start",e.id)},onTransitionend:function(){return t.emit("end",e.id)},style:{opacity:e.opacity,top:e.top+"px",left:e.left+"px",width:e.size+"px",height:e.size+"px",transform:"scale("+u.value+")","z-index":e.id,"background-color":e.color,"transition-property":"transform, opacity","transition-duration":e.duration+"ms, 300ms","transition-timing-function":e.transition+", linear"}})}}}),ze=g({name:"Ripple",props:{color:String,opacity:Number,duration:Number,transition:String,keepLastRipple:{type:Boolean,default:void 0}},emits:{touch:function(e){return!0},click:function(e){return!0},start:function(e){return!0},end:function(e){return!0}},setup:function(e,t){var l=he(function(){var s,p,c,x,f,_=Object.assign(Object.assign({},xe),fe(ke,{}));return{color:(s=e.color)!==null&&s!==void 0?s:_.color,opacity:(p=e.opacity)!==null&&p!==void 0?p:_.opacity,duration:(c=e.duration)!==null&&c!==void 0?c:_.duration,transition:(x=e.transition)!==null&&x!==void 0?x:_.transition,keepLastRipple:(f=e.keepLastRipple)!==null&&f!==void 0?f:_.keepLastRipple}}),u=K(),d=I([]),b=function(){d.length=0},i=0,o=I({active:!0,cleanWhenMouseUp:!1}),Y=function(s){if(s.button===0){o.active=!0;var p=u.value.getBoundingClientRect(),c=p.top,x=p.left,f=function(V,q){var E=u.value.clientWidth,D=u.value.clientHeight,W=function(M){return Math.pow(M,2)},te=[[0,0],[E,0],[0,D],[E,D]].map(function(M){return Math.sqrt(W(M[0]-V)+W(M[1]-q))}),N=2*Math.max.apply({},te);return{left:V-N/2,top:q-N/2,size:Math.ceil(N)}}(s.clientX-x,s.clientY-c),_=f.size,ee=f.left,ne=f.top;d.push({id:i+=1,size:_,left:ee,top:ne}),t.emit("touch",s)}},J=function(s){s.button===0&&(o.active=!1,o.cleanWhenMouseUp&&b(),t.emit("click",s))},Z=function(s){var p=d.findIndex(function(c){return c.id===s});return!(p<0)&&(l.value.keepLastRipple&&o.active&&p===d.length-1?(o.cleanWhenMouseUp=!0,!1):(o.cleanWhenMouseUp=!1,void d.splice(p,1)))};return X(function(){b()}),function(){var s,p;return L("div",{class:"v-touch-ripple",ref:u,onMousedown:Y,onMouseup:J},[((p=(s=t.slots).default)===null||p===void 0?void 0:p.call(s))||null,L(ge,{tag:"div",name:"ripple",class:"ripples",onBeforeEnter:function(c){t.emit("start",Number(c.dataset.id))},onAfterLeave:function(c){t.emit("end",Number(c.dataset.id))}},function(){return d.map(function(c){return L($e,Object.assign(Object.assign({},c),{key:c.id,color:l.value.color,opacity:l.value.opacity,duration:l.value.duration,transition:l.value.transition,onEnd:Z}))})})])}}}),S=ze;const we=g({name:"touch-ripper-example-customize-element",title:"Customize element",url:"file:///examples/vue-touch-ripple/01-customize-element.vue",components:{TouchRipple:S},setup:()=>{const e=console.log,t=I({color:"#ffffff",opacity:.4,transition:"ease-out",duration:400,keepLastRipple:!0}),l=I({clipPath:"none",backgroundColor:"#ea4aaa"});return{state:t,styles:l,log:e}}}),v=e=>(w("data-v-43d1a88c"),e=e(),C(),e),Ce={class:"example"},Re=v(()=>n("span",null,"content",-1)),Se={class:"tools"},Te={class:"item"},je={for:"color"},Me={class:"item"},Pe={for:"opacity"},Be={class:"item"},Le=v(()=>n("label",{for:"transition"},"transition:",-1)),Ie=["value"],Oe={class:"item"},Ne={for:"duration"},Ue={class:"item"},Ve=v(()=>n("label",{for:"keepLastRipple"},"keep last ripple:",-1)),qe=v(()=>n("div",{class:"divider"},null,-1)),Ee={class:"item"},De=v(()=>n("label",{for:"background"},"background:",-1)),We={class:"item"},Qe=v(()=>n("svg",{height:"0",width:"0",viewBox:"0 0 100 100"},[n("clipPath",{id:"heart",clipPathUnits:"objectBoundingBox",transform:"scale(0.01, 0.01)"},[n("path",{d:"M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"})])],-1)),Ae=v(()=>n("label",{for:"clipPath"},"CSS clip path:",-1)),He=["value"];function Fe(e,t,l,u,d,b){const i=z("touch-ripple");return m(),h("div",Ce,[a(i,{class:"touch-ripple",style:_e(e.styles),color:e.state.color,opacity:e.state.opacity,transition:e.state.transition,duration:e.state.duration,"keep-last-ripple":e.state.keepLastRipple,onTouch:t[0]||(t[0]=o=>e.log("touch",o)),onClick:t[1]||(t[1]=o=>e.log("click",o)),onStart:t[2]||(t[2]=o=>e.log("start",o)),onEnd:t[3]||(t[3]=o=>e.log("end",o))},{default:r(()=>[Re]),_:1},8,["style","color","opacity","transition","duration","keep-last-ripple"]),n("div",Se,[n("p",Te,[n("label",je,"color: ("+k(e.state.color)+")",1),y(n("input",{type:"color",id:"color",name:"color","onUpdate:modelValue":t[4]||(t[4]=o=>e.state.color=o)},null,512),[[B,e.state.color]])]),n("p",Me,[n("label",Pe,"opacity: ("+k(e.state.opacity)+")",1),y(n("input",{type:"range",id:"opacity",min:"0.1",max:"0.9",step:"0.1","onUpdate:modelValue":t[5]||(t[5]=o=>e.state.opacity=o)},null,512),[[B,e.state.opacity,void 0,{number:!0}]])]),n("p",Be,[Le,y(n("select",{name:"transition",id:"transition","onUpdate:modelValue":t[6]||(t[6]=o=>e.state.transition=o)},[(m(!0),h(A,null,H(["linear","ease-in","ease-out","steps(8, end)","cubic-bezier(.29, 1.01, 1, -0.68)","cubic-bezier(1, -0.24, 0, 1.92)"],o=>(m(),h("option",{value:o,key:o},k(o),9,Ie))),128))],512),[[Q,e.state.transition]])]),n("p",Oe,[n("label",Ne,"duration: ("+k(e.state.duration)+")",1),y(n("input",{type:"range",id:"duration",min:"100",max:"2000",step:"100","onUpdate:modelValue":t[7]||(t[7]=o=>e.state.duration=o)},null,512),[[B,e.state.duration,void 0,{number:!0}]])]),n("p",Ue,[Ve,y(n("input",{id:"keepLastRipple",type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=o=>e.state.keepLastRipple=o),"true-value":!0,"false-value":!1},null,512),[[ye,e.state.keepLastRipple]])]),qe,n("p",Ee,[De,y(n("input",{type:"color",id:"background",name:"background","onUpdate:modelValue":t[9]||(t[9]=o=>e.styles.backgroundColor=o)},null,512),[[B,e.styles.backgroundColor]])]),n("p",We,[Qe,Ae,y(n("select",{name:"clipPath",id:"clipPath","onUpdate:modelValue":t[10]||(t[10]=o=>e.styles.clipPath=o)},[(m(!0),h(A,null,H(["none","circle(50% at 50% 50%)","url(#heart)","polygon(50% 0%, 0% 100%, 100% 100%)","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)","polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)","polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)","polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)","polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"],o=>(m(),h("option",{value:o,key:o},k(o),9,He))),128))],512),[[Q,e.styles.clipPath]])])])])}var Ge=R(we,[["render",Fe],["__scopeId","data-v-43d1a88c"]]),Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),Xe="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/1.jpg",Ye="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/2.jpg",Je="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/3.jpg";const Ze=g({name:"touch-ripper-example-image-element",title:"Image element",url:"file:///examples/vue-touch-ripple/02-image.vue",components:{TouchRipple:S}}),U=e=>(w("data-v-1e89235c"),e=e(),C(),e),en={class:"example"},nn=U(()=>n("img",{class:"image",draggable:"false",src:Xe},null,-1)),tn=U(()=>n("img",{class:"image",draggable:"false",src:Ye},null,-1)),on=U(()=>n("img",{class:"image",draggable:"false",src:Je},null,-1));function an(e,t,l,u,d,b){const i=z("touch-ripple");return m(),h("div",en,[a(i,{class:"image-box"},{default:r(()=>[nn]),_:1}),a(i,{class:"image-box",color:"yellow",opacity:.2,duration:600,transition:"ease-in"},{default:r(()=>[tn]),_:1},8,["opacity"]),a(i,{class:"image-box",color:"#36485e",opacity:.2,duration:600,transition:"cubic-bezier(1, -0.24, 0, 1.92)"},{default:r(()=>[on]),_:1},8,["opacity"])])}var rn=R(Ze,[["render",an],["__scopeId","data-v-1e89235c"]]),ln=Object.freeze(Object.defineProperty({__proto__:null,default:rn},Symbol.toStringTag,{value:"Module"}));const sn=g({name:"touch-ripper-example-button-element",title:"Button element",url:"file:///examples/vue-touch-ripple/03-button.vue",components:{TouchRipple:S}}),T=e=>(w("data-v-33bdcc2b"),e=e(),C(),e),pn={class:"example"},cn=T(()=>n("button",{class:"button b-1"},"duration = 200",-1)),un=T(()=>n("button",{class:"button b-2"},"duration = 600; color = #3d8b16",-1)),dn=T(()=>n("button",{class:"button b-3"},"Warning button",-1)),mn=T(()=>n("button",{class:"button b-4"},"Danger button",-1)),bn=T(()=>n("button",{class:"button b-5"},"color = #303133",-1));function hn(e,t,l,u,d,b){const i=z("touch-ripple");return m(),h("div",pn,[a(i,{duration:200},{default:r(()=>[cn]),_:1}),a(i,{color:"#3d8b16",duration:600},{default:r(()=>[un]),_:1}),a(i,null,{default:r(()=>[dn]),_:1}),a(i,null,{default:r(()=>[mn]),_:1}),a(i,{color:"#303133"},{default:r(()=>[bn]),_:1})])}var gn=R(sn,[["render",hn],["__scopeId","data-v-33bdcc2b"]]),fn=Object.freeze(Object.defineProperty({__proto__:null,default:gn},Symbol.toStringTag,{value:"Module"}));const _n=g({name:"touch-ripper-example-typography-element",title:"Typography element",url:"file:///examples/vue-touch-ripple/04-typography.vue",components:{TouchRipple:S}}),j=e=>(w("data-v-7a3c0ba8"),e=e(),C(),e),yn={class:"example"},vn=j(()=>n("h1",null,"Talk is cheap. Show me the code.",-1)),xn=j(()=>n("p",null,"Stay hungry. Stay foolish.",-1)),kn={class:"typography-box"},$n=j(()=>n("span",null,"Because",-1)),zn=j(()=>n("strong",{class:"red"},"the mountain",-1)),wn=j(()=>n("span",null,"was there.",-1));function Cn(e,t,l,u,d,b){const i=z("touch-ripple");return m(),h("div",yn,[a(i,{class:"typography-box",color:"#C0C4CC",opacity:.3,transition:"ease-in-out"},{default:r(()=>[vn]),_:1},8,["opacity"]),a(i,{class:"typography-box",color:"#909399",duration:200,opacity:.3,transition:"ease-in-out"},{default:r(()=>[xn]),_:1},8,["opacity"]),n("p",kn,[$n,a(i,{class:"inline-typography",color:"red",duration:200,opacity:.3,transition:"ease-in-out"},{default:r(()=>[zn]),_:1},8,["opacity"]),wn])])}var Rn=R(_n,[["render",Cn],["__scopeId","data-v-7a3c0ba8"]]),Sn=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"}));const Tn=g({name:"touch-ripper-example-cubic-bezier",title:"Cubic Bezier",url:"file:///examples/vue-touch-ripple/05-div.vue",components:{TouchRipple:S}}),O=e=>(w("data-v-fea6df1c"),e=e(),C(),e),jn={class:"example"},Mn=O(()=>n("code",null,"cubic-bezier(0.18, 0.89, 0.32, 1.28)",-1)),Pn=O(()=>n("code",null,"cubic-bezier(0.6, -0.28, 0.74, 0.05)",-1)),Bn=O(()=>n("code",null,"cubic-bezier(0.89, 0.24, 0, 0.94)",-1)),Ln=O(()=>n("code",null,"cubic-bezier(1, -0.24, 0, 1.92)",-1));function In(e,t,l,u,d,b){const i=z("touch-ripple");return m(),h("div",jn,[a(i,{class:"box box-1",duration:300,opacity:.3,color:"#999",transition:"cubic-bezier(0.18, 0.89, 0.32, 1.28)"},{default:r(()=>[Mn]),_:1},8,["opacity"]),a(i,{class:"box box-2",duration:400,opacity:.3,color:"#fff",transition:"cubic-bezier(0.6, -0.28, 0.74, 0.05)"},{default:r(()=>[Pn]),_:1},8,["opacity"]),a(i,{class:"box box-3",duration:400,opacity:.3,color:"#eee",transition:"cubic-bezier(0.89, 0.24, 0, 0.94)"},{default:r(()=>[Bn]),_:1},8,["opacity"]),a(i,{class:"box box-4",duration:800,opacity:.5,color:"#fff",transition:"cubic-bezier(1, -0.24, 0, 1.92)"},{default:r(()=>[Ln]),_:1},8,["opacity"])])}var On=R(Tn,[["render",In],["__scopeId","data-v-fea6df1c"]]),Nn=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"}));const G={"./01-customize-element.vue":Ke,"./02-image.vue":ln,"./03-button.vue":fn,"./04-typography.vue":Sn,"./05-div.vue":Nn},Un={"./01-customize-element.vue":`<template>
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
`,"./02-image.vue":`<template>
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
`,"./03-button.vue":`<template>
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
`,"./04-typography.vue":`<template>
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
`,"./05-div.vue":`<template>
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
`};var Vn=Object.keys(G).map(e=>({component:G[e].default,raw:Un[e],language:"vue"}));const qn={class:"vtr-example"},Fn=g({setup(e){const t=oe.VueTouchRipple,l=Vn.map(re);return ie({title:pe(t),keywords:ce(t).join(","),description:ue(t)}),(u,d)=>(m(),F(de,{repository:$(t)},{default:r(()=>[a(le,{repository:$(t)},{actions:r(()=>[a(P,{icon:"doc",text:"Vue(2) examples",href:$(ae)($(t))},null,8,["href"]),a(P,{icon:"doc",text:"Component Props",href:"https://github.com/surmon-china/vue-touch-ripple#component-props"}),a(P,{icon:"doc",text:"Component Events",href:"https://github.com/surmon-china/vue-touch-ripple#component-events"}),a(P,{icon:"discord",text:"Discord discussions",href:"https://discord.gg/QF8zwF3vPv"})]),content:r(()=>[a(se,{examples:$(l),"disabled-auto-ad":!0},{component:r(b=>[n("div",qn,[(m(),F(ve(b.component)))])]),_:1},8,["examples"])]),_:1},8,["repository"])]),_:1},8,["repository"]))}});export{Fn as default};
