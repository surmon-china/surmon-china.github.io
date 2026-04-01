import{$ as e,A as t,B as n,Ct as r,E as i,G as a,H as o,I as s,L as c,N as l,Ut as u,Wt as d,Y as f,Z as p,ct as m,gt as h,j as g,k as _,lt as v,nt as ee,q as y,t as b,tt as x,u as te,vt as S}from"./head-DEUNXC35.js";import{c as C,l as w,s as T,u as E}from"./index-BBC4X0b_.js";import{t as D}from"./_plugin-vue_export-helper-wiDke0Jd.js";import{c as ne,f as O,m as k,o as A,s as j,u as M}from"./navbar-wp0BaDxa.js";import{A as N,k as P,t as F}from"./homepage-uqo_hEKE.js";import{t as I}from"./link-Cq_l_0ON.js";import{t as L}from"./examples-BstGXAem.js";var R,z=Object.freeze({color:`#fff`,opacity:.3,duration:380,transition:`ease-out`,keepLastRipple:!0}),B=Symbol(`vue-touch-ripple-global-config`),V={color:String,opacity:Number,duration:Number,transition:String,keepLastRipple:{type:Boolean,default:void 0}};(function(e){e.Touch=`touch`,e.Click=`click`,e.Start=`start`,e.End=`end`})(R||={});var H={};H[R.Touch]=function(e){return!0},H[R.Click]=function(e){return!0},H[R.Start]=function(e){return!0},H[R.End]=function(e){return!0};var U=c({name:`RippleItem`,props:{id:{type:Number,required:!0},size:{type:Number,required:!0},top:{type:Number,required:!0},left:{type:Number,required:!0},color:{type:String,required:!0},opacity:{type:Number,required:!0},transition:{type:String,required:!0},duration:{type:Number,required:!0}},emits:{start:function(e){return Number.isInteger(e)},end:function(e){return Number.isInteger(e)}},setup:function(e,t){var r=null,i=S(0);return f((function(){a((function(){r=window.setTimeout((function(){i.value=1}),0)}))})),y((function(){r&&=(window.clearTimeout(r),null)})),function(){return n(`div`,{class:`ripple-item`,"data-id":e.id,onTransitionstart:function(){return t.emit(`start`,e.id)},onTransitionend:function(){return t.emit(`end`,e.id)},style:{opacity:e.opacity,top:e.top+`px`,left:e.left+`px`,width:e.size+`px`,height:e.size+`px`,transform:`scale(`+i.value+`)`,"z-index":e.id,"background-color":e.color,"transition-property":`transform, opacity`,"transition-duration":e.duration+`ms, 300ms`,"transition-timing-function":e.transition+`, linear`}})}}}),W=c({name:`VueTouchRipple`,props:Object.assign({},V),emits:Object.assign({},H),setup:function(e,t){var r=Object.assign(Object.assign({},z),o(B,{})),i=_((function(){return{color:e.color??r.color,opacity:e.opacity??r.opacity,duration:e.duration??r.duration,transition:e.transition??r.transition,keepLastRipple:e.keepLastRipple??r.keepLastRipple}})),a=S(),s=h([]),c=function(){s.length=0},l=0,u=h({active:!0,cleanWhenMouseUp:!1}),d=function(e){if(e.button===0){u.active=!0;var n=a.value.getBoundingClientRect(),r=n.top,i=n.left,o=function(e,t){var n=a.value.clientWidth,r=a.value.clientHeight,i=function(e){return e**2},o=[[0,0],[n,0],[0,r],[n,r]].map((function(n){return Math.sqrt(i(n[0]-e)+i(n[1]-t))})),s=2*Math.max.apply({},o);return{left:e-s/2,top:t-s/2,size:Math.ceil(s)}}(e.clientX-i,e.clientY-r),c=o.size,d=o.left,f=o.top;s.push({id:l+=1,size:c,left:d,top:f}),t.emit(R.Touch,e)}},f=function(e){e.button===0&&(u.active=!1,u.cleanWhenMouseUp&&c(),t.emit(R.Click,e))},p=function(e){var t=s.findIndex((function(t){return t.id===e}));return!(t<0)&&(i.value.keepLastRipple&&u.active&&t===s.length-1?(u.cleanWhenMouseUp=!0,!1):(u.cleanWhenMouseUp=!1,void s.splice(t,1)))};return y((function(){c()})),function(){var e;return n(`div`,{class:`v-touch-ripple`,ref:a,onMousedown:d,onMouseup:f},[(e=t.slots).default?.call(e)||null,n(T,{tag:`div`,name:`ripple`,class:`ripples`,onBeforeEnter:function(e){t.emit(R.Start,Number(e.dataset.id))},onAfterLeave:function(e){t.emit(R.End,Number(e.dataset.id))}},(function(){return s.map((function(e){return n(U,Object.assign(Object.assign({},e),{key:e.id,color:i.value.color,opacity:i.value.opacity,duration:i.value.duration,transition:i.value.transition,onEnd:p}))}))}))])}}}),G=c({name:`touch-ripper-example-customize-element`,title:`Customize element`,components:{TouchRipple:W},setup:()=>{let e=console.log;return{state:h({color:`#ffffff`,opacity:.4,transition:`ease-out`,duration:400,keepLastRipple:!0}),styles:h({clipPath:`none`,backgroundColor:`#ea4aaa`}),log:e}}}),K={class:`example`},q={class:`tools`},J={class:`item`},Y={for:`color`},X={class:`item`},Z={for:`opacity`},re={class:`item`},ie=[`value`],ae={class:`item`},oe={for:`duration`},se={class:`item`},ce={class:`item`},le={class:`item`},ue=[`value`];function de(n,r,a,o,c,f){let h=x(`touch-ripple`);return p(),l(`div`,K,[s(h,{class:`touch-ripple`,style:u(n.styles),color:n.state.color,opacity:n.state.opacity,transition:n.state.transition,duration:n.state.duration,"keep-last-ripple":n.state.keepLastRipple,onTouch:r[0]||=e=>n.log(`touch`,e),onClick:r[1]||=e=>n.log(`click`,e),onStart:r[2]||=e=>n.log(`start`,e),onEnd:r[3]||=e=>n.log(`end`,e)},{default:m(()=>[...r[11]||=[t(`span`,null,`content`,-1)]]),_:1},8,[`style`,`color`,`opacity`,`transition`,`duration`,`keep-last-ripple`]),t(`div`,q,[t(`p`,J,[t(`label`,Y,`color: (`+d(n.state.color)+`)`,1),v(t(`input`,{type:`color`,id:`color`,name:`color`,"onUpdate:modelValue":r[4]||=e=>n.state.color=e},null,512),[[E,n.state.color]])]),t(`p`,X,[t(`label`,Z,`opacity: (`+d(n.state.opacity)+`)`,1),v(t(`input`,{type:`range`,id:`opacity`,min:`0.1`,max:`0.9`,step:`0.1`,"onUpdate:modelValue":r[5]||=e=>n.state.opacity=e},null,512),[[E,n.state.opacity,void 0,{number:!0}]])]),t(`p`,re,[r[12]||=t(`label`,{for:`transition`},`transition:`,-1),v(t(`select`,{name:`transition`,id:`transition`,"onUpdate:modelValue":r[6]||=e=>n.state.transition=e},[(p(),l(i,null,e([`linear`,`ease-in`,`ease-out`,`steps(8, end)`,`cubic-bezier(.29, 1.01, 1, -0.68)`,`cubic-bezier(1, -0.24, 0, 1.92)`],e=>t(`option`,{value:e,key:e},d(e),9,ie)),64))],512),[[w,n.state.transition]])]),t(`p`,ae,[t(`label`,oe,`duration: (`+d(n.state.duration)+`)`,1),v(t(`input`,{type:`range`,id:`duration`,min:`100`,max:`2000`,step:`100`,"onUpdate:modelValue":r[7]||=e=>n.state.duration=e},null,512),[[E,n.state.duration,void 0,{number:!0}]])]),t(`p`,se,[r[13]||=t(`label`,{for:`keepLastRipple`},`keep last ripple:`,-1),v(t(`input`,{id:`keepLastRipple`,type:`checkbox`,"onUpdate:modelValue":r[8]||=e=>n.state.keepLastRipple=e,"true-value":!0,"false-value":!1},null,512),[[C,n.state.keepLastRipple]])]),r[17]||=t(`div`,{class:`divider`},null,-1),t(`p`,ce,[r[14]||=t(`label`,{for:`background`},`background:`,-1),v(t(`input`,{type:`color`,id:`background`,name:`background`,"onUpdate:modelValue":r[9]||=e=>n.styles.backgroundColor=e},null,512),[[E,n.styles.backgroundColor]])]),t(`p`,le,[r[15]||=t(`svg`,{height:`0`,width:`0`,viewBox:`0 0 100 100`},[t(`clipPath`,{id:`heart`,clipPathUnits:`objectBoundingBox`,transform:`scale(0.01, 0.01)`},[t(`path`,{d:`M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z`})])],-1),r[16]||=t(`label`,{for:`clipPath`},`CSS clip path:`,-1),v(t(`select`,{name:`clipPath`,id:`clipPath`,"onUpdate:modelValue":r[10]||=e=>n.styles.clipPath=e},[(p(),l(i,null,e([`none`,`circle(50% at 50% 50%)`,`url(#heart)`,`polygon(50% 0%, 0% 100%, 100% 100%)`,`polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,`polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)`,`polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)`,`polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,`polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)`],e=>t(`option`,{value:e,key:e},d(e),9,ue)),64))],512),[[w,n.styles.clipPath]])])])])}var fe=D(G,[[`render`,de],[`__scopeId`,`data-v-0e1ef438`]]),pe=c({name:`touch-ripper-example-image-element`,title:`Image element`,components:{TouchRipple:W}}),me={class:`example`};function he(e,n,r,i,a,o){let c=x(`touch-ripple`);return p(),l(`div`,me,[s(c,{class:`image-box`},{default:m(()=>[...n[0]||=[t(`img`,{class:`image`,draggable:`false`,src:`/images/example/1.jpg`},null,-1)]]),_:1}),s(c,{class:`image-box`,color:`yellow`,opacity:.2,duration:600,transition:`ease-in`},{default:m(()=>[...n[1]||=[t(`img`,{class:`image`,draggable:`false`,src:`/images/example/2.jpg`},null,-1)]]),_:1}),s(c,{class:`image-box`,color:`#36485e`,opacity:.2,duration:600,transition:`cubic-bezier(1, -0.24, 0, 1.92)`},{default:m(()=>[...n[2]||=[t(`img`,{class:`image`,draggable:`false`,src:`/images/example/3.jpg`},null,-1)]]),_:1})])}var ge=D(pe,[[`render`,he],[`__scopeId`,`data-v-4e74fa39`]]),_e=c({name:`touch-ripper-example-button-element`,title:`Button element`,components:{TouchRipple:W}}),ve={class:`example`};function ye(e,n,r,i,a,o){let c=x(`touch-ripple`);return p(),l(`div`,ve,[s(c,{duration:200},{default:m(()=>[...n[0]||=[t(`button`,{class:`button b-1`},`duration = 200`,-1)]]),_:1}),s(c,{color:`#3d8b16`,duration:600},{default:m(()=>[...n[1]||=[t(`button`,{class:`button b-2`},`duration = 600; color = #3d8b16`,-1)]]),_:1}),s(c,null,{default:m(()=>[...n[2]||=[t(`button`,{class:`button b-3`},`Warning button`,-1)]]),_:1}),s(c,null,{default:m(()=>[...n[3]||=[t(`button`,{class:`button b-4`},`Danger button`,-1)]]),_:1}),s(c,{color:`#303133`},{default:m(()=>[...n[4]||=[t(`button`,{class:`button b-5`},`color = #303133`,-1)]]),_:1})])}var be=D(_e,[[`render`,ye],[`__scopeId`,`data-v-be5910d7`]]),xe=c({name:`touch-ripper-example-typography-element`,title:`Typography element`,components:{TouchRipple:W}}),Se={class:`example`},Ce={class:`typography-box`};function we(e,n,r,i,a,o){let c=x(`touch-ripple`);return p(),l(`div`,Se,[s(c,{class:`typography-box`,color:`#C0C4CC`,opacity:.3,transition:`ease-in-out`},{default:m(()=>[...n[0]||=[t(`h1`,null,`Talk is cheap. Show me the code.`,-1)]]),_:1}),s(c,{class:`typography-box`,color:`#909399`,duration:200,opacity:.3,transition:`ease-in-out`},{default:m(()=>[...n[1]||=[t(`p`,null,`Stay hungry. Stay foolish.`,-1)]]),_:1}),t(`p`,Ce,[n[3]||=t(`span`,null,`Because`,-1),s(c,{class:`inline-typography`,color:`red`,duration:200,opacity:.3,transition:`ease-in-out`},{default:m(()=>[...n[2]||=[t(`strong`,{class:`red`},`the mountain`,-1)]]),_:1}),n[4]||=t(`span`,null,`was there.`,-1)])])}var Te=D(xe,[[`render`,we],[`__scopeId`,`data-v-1d0bd0d9`]]),Ee=c({name:`touch-ripper-example-cubic-bezier`,title:`Cubic Bezier`,components:{TouchRipple:W}}),De={class:`example`};function Oe(e,n,r,i,a,o){let c=x(`touch-ripple`);return p(),l(`div`,De,[s(c,{class:`box box-1`,duration:300,opacity:.3,color:`#999`,transition:`cubic-bezier(0.18, 0.89, 0.32, 1.28)`},{default:m(()=>[...n[0]||=[t(`code`,null,`cubic-bezier(0.18, 0.89, 0.32, 1.28)`,-1)]]),_:1}),s(c,{class:`box box-2`,duration:400,opacity:.3,color:`#fff`,transition:`cubic-bezier(0.6, -0.28, 0.74, 0.05)`},{default:m(()=>[...n[1]||=[t(`code`,null,`cubic-bezier(0.6, -0.28, 0.74, 0.05)`,-1)]]),_:1}),s(c,{class:`box box-3`,duration:400,opacity:.3,color:`#eee`,transition:`cubic-bezier(0.89, 0.24, 0, 0.94)`},{default:m(()=>[...n[2]||=[t(`code`,null,`cubic-bezier(0.89, 0.24, 0, 0.94)`,-1)]]),_:1}),s(c,{class:`box box-4`,duration:800,opacity:.5,color:`#fff`,transition:`cubic-bezier(1, -0.24, 0, 1.92)`},{default:m(()=>[...n[3]||=[t(`code`,null,`cubic-bezier(1, -0.24, 0, 1.92)`,-1)]]),_:1})])}var Q=D(Ee,[[`render`,Oe],[`__scopeId`,`data-v-3f6f5665`]]),ke=`<template>
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
        <input type="range" id="opacity" min="0.1" max="0.9" step="0.1" v-model.number="state.opacity" />
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
        <input type="range" id="duration" min="100" max="2000" step="100" v-model.number="state.duration" />
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
        <input type="color" id="background" name="background" v-model="styles.backgroundColor" />
      </p>
      <p class="item">
        <svg height="0" width="0" viewBox="0 0 100 100">
          <clipPath id="heart" clipPathUnits="objectBoundingBox" transform="scale(0.01, 0.01)">
            <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
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
  @use '@/styles/variables.scss' as *;

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
        width: 20rem;
        margin: 0;
      }

      .divider {
        height: 1px;
        margin: 1.4rem 0;
        background-color: $border-color-secondary;
      }
    }
  }
</style>
`,Ae=`<template>
  <div class="example">
    <touch-ripple class="image-box">
      <img class="image" draggable="false" src="/images/example/1.jpg" />
    </touch-ripple>
    <touch-ripple class="image-box" color="yellow" :opacity="0.2" :duration="600" transition="ease-in">
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
`,je=`<template>
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
      height: 3rem;
      line-height: 3rem;
      border: none;
      border-radius: 4px;
      padding: 0 1rem;
      font-size: 1rem;
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
`,Me=`<template>
  <div class="example">
    <touch-ripple class="typography-box" color="#C0C4CC" :opacity="0.3" transition="ease-in-out">
      <h1>Talk is cheap. Show me the code.</h1>
    </touch-ripple>
    <touch-ripple class="typography-box" color="#909399" :duration="200" :opacity="0.3" transition="ease-in-out">
      <p>Stay hungry. Stay foolish.</p>
    </touch-ripple>
    <p class="typography-box">
      <span>Because</span>
      <touch-ripple class="inline-typography" color="red" :duration="200" :opacity="0.3" transition="ease-in-out">
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
`,Ne=`<template>
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
`,$=Object.assign({"./01-customize-element.vue":fe,"./02-image.vue":ge,"./03-button.vue":be,"./04-typography.vue":Te,"./05-div.vue":Q}),Pe=Object.assign({"./01-customize-element.vue":ke,"./02-image.vue":Ae,"./03-button.vue":je,"./04-typography.vue":Me,"./05-div.vue":Ne}),Fe=Object.keys($).map(e=>({component:$[e],raw:Pe[e],language:`vue`,path:`examples/vue-touch-ripple/${e.replace(`./`,``)}`})),Ie={class:`touch-ripple-example`},Le=c({__name:`vue-touch-ripple`,setup(e){let{repository:n,route:i,packages:a}=te.VueTouchRipple,o=Fe.map(N);return b({title:ne(n),keywords:j(n).join(`,`),description:A(n),ogUrl:k(i),ogImage:M(n),ogImageWidth:1200,ogImageHeight:600}),(e,i)=>(p(),g(P,{repository:r(n)},{default:m(()=>[s(F,{repository:r(n),packages:r(a)},{actions:m(()=>[s(I,{icon:`doc`,text:`Vue(2) Examples`,href:r(O)(r(n))},null,8,[`href`]),s(I,{icon:`doc`,text:`Component Props`,href:`https://github.com/surmon-china/vue-touch-ripple#component-props`}),s(I,{icon:`doc`,text:`Component Events`,href:`https://github.com/surmon-china/vue-touch-ripple#component-events`}),s(I,{icon:`discord`,text:`Discord Discussions`,href:`https://discord.gg/QF8zwF3vPv`})]),content:m(()=>[s(L,{examples:r(o),"disabled-auto-ad":!0},{component:m(e=>[t(`div`,Ie,[(p(),g(ee(e.component)))])]),_:1},8,[`examples`])]),_:1},8,[`repository`,`packages`])]),_:1},8,[`repository`]))}});export{Le as default};