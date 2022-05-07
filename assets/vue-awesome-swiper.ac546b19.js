var Ys=Object.defineProperty,Xs=Object.defineProperties;var Us=Object.getOwnPropertyDescriptors;var us=Object.getOwnPropertySymbols;var Ks=Object.prototype.hasOwnProperty,Zs=Object.prototype.propertyIsEnumerable;var fs=(s,e,t)=>e in s?Ys(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ke=(s,e)=>{for(var t in e||(e={}))Ks.call(e,t)&&fs(s,t,e[t]);if(us)for(var t of us(e))Zs.call(e,t)&&fs(s,t,e[t]);return s},ms=(s,e)=>Xs(s,Us(e));import{d as Js,e as ts,S as Qs,I as hs,c as et,f as st,R as tt,u as it,g as rt}from"./index.0f865807.js";import{d as nt,e as lt,f as at,c as ot,n as dt,g as pt,a as ct,b as ut}from"./navbar.69f29347.js";import{V as ft}from"./vue.799225a8.js";import{i as R,E as M,F as O,G as V,W as be,R as ae,k as re,q as ee,a0 as Cs,a1 as mt,a2 as Es,a3 as Ts,a4 as ks,a5 as es,a6 as ht,v as ce,Q as f,M as W,T as oe,U as m,P as T,_ as De,S as te,V as ne,$ as we,Z as ue,N as fe,O as me,X as is,Y as g,a7 as wt,z as Ge,D as gt,a8 as vt,a9 as _t,aa as St,ab as bt}from"./vendor.50d702f0.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";const yt=s=>{const e=s.component,t=new URL(e.url).pathname;return{name:e.name,title:e.title||e.name,path:t,url:nt(Js,t),component:e,raw:s.raw,language:s.language}};const $t=R({props:{rootClass:{type:String,default:""}},setup(s){return(e,t)=>{const i=M("Adsense");return O(),V(i,{class:be(`g-a-mammon ${s.rootClass}`),"data-ad-client":ae(ts),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-format":"auto","data-ad-slot":"8733527061"},null,8,["class","data-ad-client"])}}});var xt=H($t,[["__scopeId","data-v-0f52987e"]]);const Ct=R({props:{rootClass:{type:String,default:""}},setup(s){return(e,t)=>{const i=M("Adsense");return O(),V(i,{class:be(`g-a-mammon ${s.rootClass}`),"data-ad-client":ae(ts),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-format":"auto","data-ad-slot":"7455679385"},null,8,["class","data-ad-client"])}}});var Et=H(Ct,[["__scopeId","data-v-157d478a"]]);const Tt=R({props:{rootClass:{type:String,default:""}},setup(s){return(e,t)=>{const i=M("Adsense");return O(),V(i,{class:be(`g-a-mammon ${s.rootClass}`),"data-ad-client":ae(ts),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-format":"auto","data-ad-slot":"4010319351"},null,8,["class","data-ad-client"])}}});var kt=H(Tt,[["__scopeId","data-v-e9607a80"]]);function ws(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function rs(s={},e={}){Object.keys(e).forEach(t=>{typeof s[t]=="undefined"?s[t]=e[t]:ws(e[t])&&ws(s[t])&&Object.keys(e[t]).length>0&&rs(s[t],e[t])})}const Ps={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function se(){const s=typeof document!="undefined"?document:{};return rs(s,Ps),s}const Pt={document:Ps,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout=="undefined"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout!="undefined"&&clearTimeout(s)}};function Q(){const s=typeof window!="undefined"?window:{};return rs(s,Pt),s}function Mt(s){const e=s.__proto__;Object.defineProperty(s,"__proto__",{get(){return e},set(t){e.__proto__=t}})}class _e extends Array{constructor(e){if(typeof e=="number")super(e);else{super(...e||[]);Mt(this)}}}function Ie(s=[]){const e=[];return s.forEach(t=>{Array.isArray(t)?e.push(...Ie(t)):e.push(t)}),e}function Ms(s,e){return Array.prototype.filter.call(s,e)}function zt(s){const e=[];for(let t=0;t<s.length;t+=1)e.indexOf(s[t])===-1&&e.push(s[t]);return e}function It(s,e){if(typeof s!="string")return[s];const t=[],i=e.querySelectorAll(s);for(let l=0;l<i.length;l+=1)t.push(i[l]);return t}function I(s,e){const t=Q(),i=se();let l=[];if(!e&&s instanceof _e)return s;if(!s)return new _e(l);if(typeof s=="string"){const n=s.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let r="div";n.indexOf("<li")===0&&(r="ul"),n.indexOf("<tr")===0&&(r="tbody"),(n.indexOf("<td")===0||n.indexOf("<th")===0)&&(r="tr"),n.indexOf("<tbody")===0&&(r="table"),n.indexOf("<option")===0&&(r="select");const a=i.createElement(r);a.innerHTML=n;for(let d=0;d<a.childNodes.length;d+=1)l.push(a.childNodes[d])}else l=It(s.trim(),e||i)}else if(s.nodeType||s===t||s===i)l.push(s);else if(Array.isArray(s)){if(s instanceof _e)return s;l=s}return new _e(zt(l))}I.fn=_e.prototype;function Ot(...s){const e=Ie(s.map(t=>t.split(" ")));return this.forEach(t=>{t.classList.add(...e)}),this}function At(...s){const e=Ie(s.map(t=>t.split(" ")));return this.forEach(t=>{t.classList.remove(...e)}),this}function Lt(...s){const e=Ie(s.map(t=>t.split(" ")));this.forEach(t=>{e.forEach(i=>{t.classList.toggle(i)})})}function Nt(...s){const e=Ie(s.map(t=>t.split(" ")));return Ms(this,t=>e.filter(i=>t.classList.contains(i)).length>0).length>0}function jt(s,e){if(arguments.length===1&&typeof s=="string")return this[0]?this[0].getAttribute(s):void 0;for(let t=0;t<this.length;t+=1)if(arguments.length===2)this[t].setAttribute(s,e);else for(const i in s)this[t][i]=s[i],this[t].setAttribute(i,s[i]);return this}function Bt(s){for(let e=0;e<this.length;e+=1)this[e].removeAttribute(s);return this}function Dt(s){for(let e=0;e<this.length;e+=1)this[e].style.transform=s;return this}function Gt(s){for(let e=0;e<this.length;e+=1)this[e].style.transitionDuration=typeof s!="string"?`${s}ms`:s;return this}function Rt(...s){let[e,t,i,l]=s;typeof s[1]=="function"&&([e,i,l]=s,t=void 0),l||(l=!1);function n(u){const c=u.target;if(!c)return;const p=u.target.dom7EventData||[];if(p.indexOf(u)<0&&p.unshift(u),I(c).is(t))i.apply(c,p);else{const o=I(c).parents();for(let w=0;w<o.length;w+=1)I(o[w]).is(t)&&i.apply(o[w],p)}}function r(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),i.apply(this,c)}const a=e.split(" ");let d;for(let u=0;u<this.length;u+=1){const c=this[u];if(t)for(d=0;d<a.length;d+=1){const p=a[d];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[p]||(c.dom7LiveListeners[p]=[]),c.dom7LiveListeners[p].push({listener:i,proxyListener:n}),c.addEventListener(p,n,l)}else for(d=0;d<a.length;d+=1){const p=a[d];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[p]||(c.dom7Listeners[p]=[]),c.dom7Listeners[p].push({listener:i,proxyListener:r}),c.addEventListener(p,r,l)}}return this}function Ht(...s){let[e,t,i,l]=s;typeof s[1]=="function"&&([e,i,l]=s,t=void 0),l||(l=!1);const n=e.split(" ");for(let r=0;r<n.length;r+=1){const a=n[r];for(let d=0;d<this.length;d+=1){const u=this[d];let c;if(!t&&u.dom7Listeners?c=u.dom7Listeners[a]:t&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[a]),c&&c.length)for(let p=c.length-1;p>=0;p-=1){const o=c[p];i&&o.listener===i||i&&o.listener&&o.listener.dom7proxy&&o.listener.dom7proxy===i?(u.removeEventListener(a,o.proxyListener,l),c.splice(p,1)):i||(u.removeEventListener(a,o.proxyListener,l),c.splice(p,1))}}}return this}function Vt(...s){const e=Q(),t=s[0].split(" "),i=s[1];for(let l=0;l<t.length;l+=1){const n=t[l];for(let r=0;r<this.length;r+=1){const a=this[r];if(e.CustomEvent){const d=new e.CustomEvent(n,{detail:i,bubbles:!0,cancelable:!0});a.dom7EventData=s.filter((u,c)=>c>0),a.dispatchEvent(d),a.dom7EventData=[],delete a.dom7EventData}}}return this}function Wt(s){const e=this;function t(i){i.target===this&&(s.call(this,i),e.off("transitionend",t))}return s&&e.on("transitionend",t),this}function Ft(s){if(this.length>0){if(s){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function qt(s){if(this.length>0){if(s){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function Yt(){if(this.length>0){const s=Q(),e=se(),t=this[0],i=t.getBoundingClientRect(),l=e.body,n=t.clientTop||l.clientTop||0,r=t.clientLeft||l.clientLeft||0,a=t===s?s.scrollY:t.scrollTop,d=t===s?s.scrollX:t.scrollLeft;return{top:i.top+a-n,left:i.left+d-r}}return null}function Xt(){const s=Q();return this[0]?s.getComputedStyle(this[0],null):{}}function Ut(s,e){const t=Q();let i;if(arguments.length===1)if(typeof s=="string"){if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(s)}else{for(i=0;i<this.length;i+=1)for(const l in s)this[i].style[l]=s[l];return this}if(arguments.length===2&&typeof s=="string"){for(i=0;i<this.length;i+=1)this[i].style[s]=e;return this}return this}function Kt(s){return s?(this.forEach((e,t)=>{s.apply(e,[e,t])}),this):this}function Zt(s){const e=Ms(this,s);return I(e)}function Jt(s){if(typeof s=="undefined")return this[0]?this[0].innerHTML:null;for(let e=0;e<this.length;e+=1)this[e].innerHTML=s;return this}function Qt(s){if(typeof s=="undefined")return this[0]?this[0].textContent.trim():null;for(let e=0;e<this.length;e+=1)this[e].textContent=s;return this}function ei(s){const e=Q(),t=se(),i=this[0];let l,n;if(!i||typeof s=="undefined")return!1;if(typeof s=="string"){if(i.matches)return i.matches(s);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(s);if(i.msMatchesSelector)return i.msMatchesSelector(s);for(l=I(s),n=0;n<l.length;n+=1)if(l[n]===i)return!0;return!1}if(s===t)return i===t;if(s===e)return i===e;if(s.nodeType||s instanceof _e){for(l=s.nodeType?[s]:s,n=0;n<l.length;n+=1)if(l[n]===i)return!0;return!1}return!1}function si(){let s=this[0],e;if(s){for(e=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(e+=1);return e}}function ti(s){if(typeof s=="undefined")return this;const e=this.length;if(s>e-1)return I([]);if(s<0){const t=e+s;return t<0?I([]):I([this[t]])}return I([this[s]])}function ii(...s){let e;const t=se();for(let i=0;i<s.length;i+=1){e=s[i];for(let l=0;l<this.length;l+=1)if(typeof e=="string"){const n=t.createElement("div");for(n.innerHTML=e;n.firstChild;)this[l].appendChild(n.firstChild)}else if(e instanceof _e)for(let n=0;n<e.length;n+=1)this[l].appendChild(e[n]);else this[l].appendChild(e)}return this}function ri(s){const e=se();let t,i;for(t=0;t<this.length;t+=1)if(typeof s=="string"){const l=e.createElement("div");for(l.innerHTML=s,i=l.childNodes.length-1;i>=0;i-=1)this[t].insertBefore(l.childNodes[i],this[t].childNodes[0])}else if(s instanceof _e)for(i=0;i<s.length;i+=1)this[t].insertBefore(s[i],this[t].childNodes[0]);else this[t].insertBefore(s,this[t].childNodes[0]);return this}function ni(s){return this.length>0?s?this[0].nextElementSibling&&I(this[0].nextElementSibling).is(s)?I([this[0].nextElementSibling]):I([]):this[0].nextElementSibling?I([this[0].nextElementSibling]):I([]):I([])}function li(s){const e=[];let t=this[0];if(!t)return I([]);for(;t.nextElementSibling;){const i=t.nextElementSibling;s?I(i).is(s)&&e.push(i):e.push(i),t=i}return I(e)}function ai(s){if(this.length>0){const e=this[0];return s?e.previousElementSibling&&I(e.previousElementSibling).is(s)?I([e.previousElementSibling]):I([]):e.previousElementSibling?I([e.previousElementSibling]):I([])}return I([])}function oi(s){const e=[];let t=this[0];if(!t)return I([]);for(;t.previousElementSibling;){const i=t.previousElementSibling;s?I(i).is(s)&&e.push(i):e.push(i),t=i}return I(e)}function di(s){const e=[];for(let t=0;t<this.length;t+=1)this[t].parentNode!==null&&(s?I(this[t].parentNode).is(s)&&e.push(this[t].parentNode):e.push(this[t].parentNode));return I(e)}function pi(s){const e=[];for(let t=0;t<this.length;t+=1){let i=this[t].parentNode;for(;i;)s?I(i).is(s)&&e.push(i):e.push(i),i=i.parentNode}return I(e)}function ci(s){let e=this;return typeof s=="undefined"?I([]):(e.is(s)||(e=e.parents(s).eq(0)),e)}function ui(s){const e=[];for(let t=0;t<this.length;t+=1){const i=this[t].querySelectorAll(s);for(let l=0;l<i.length;l+=1)e.push(i[l])}return I(e)}function fi(s){const e=[];for(let t=0;t<this.length;t+=1){const i=this[t].children;for(let l=0;l<i.length;l+=1)(!s||I(i[l]).is(s))&&e.push(i[l])}return I(e)}function mi(){for(let s=0;s<this.length;s+=1)this[s].parentNode&&this[s].parentNode.removeChild(this[s]);return this}const gs={addClass:Ot,removeClass:At,hasClass:Nt,toggleClass:Lt,attr:jt,removeAttr:Bt,transform:Dt,transition:Gt,on:Rt,off:Ht,trigger:Vt,transitionEnd:Wt,outerWidth:Ft,outerHeight:qt,styles:Xt,offset:Yt,css:Ut,each:Kt,html:Jt,text:Qt,is:ei,index:si,eq:ti,append:ii,prepend:ri,next:ni,nextAll:li,prev:ai,prevAll:oi,parent:di,parents:pi,closest:ci,find:ui,children:fi,filter:Zt,remove:mi};Object.keys(gs).forEach(s=>{Object.defineProperty(I.fn,s,{value:gs[s],writable:!0})});function hi(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function xe(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function pe(){return Date.now()}function wi(s){const e=Q();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function ss(s,e){e===void 0&&(e="x");const t=Q();let i,l,n;const r=wi(s);return t.WebKitCSSMatrix?(l=r.transform||r.webkitTransform,l.split(",").length>6&&(l=l.split(", ").map(a=>a.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(l==="none"?"":l)):(n=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?l=n.m41:i.length===16?l=parseFloat(i[12]):l=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?l=n.m42:i.length===16?l=parseFloat(i[13]):l=parseFloat(i[5])),l||0}function Pe(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function gi(s){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function de(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!gi(i)){const l=Object.keys(Object(i)).filter(n=>e.indexOf(n)<0);for(let n=0,r=l.length;n<r;n+=1){const a=l[n],d=Object.getOwnPropertyDescriptor(i,a);d!==void 0&&d.enumerable&&(Pe(s[a])&&Pe(i[a])?i[a].__swiper__?s[a]=i[a]:de(s[a],i[a]):!Pe(s[a])&&Pe(i[a])?(s[a]={},i[a].__swiper__?s[a]=i[a]:de(s[a],i[a])):s[a]=i[a])}}}return s}function Me(s,e,t){s.style.setProperty(e,t)}function zs(s){let{swiper:e,targetPosition:t,side:i}=s;const l=Q(),n=-e.translate;let r=null,a;const d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",l.cancelAnimationFrame(e.cssModeFrameID);const u=t>n?"next":"prev",c=(o,w)=>u==="next"&&o>=w||u==="prev"&&o<=w,p=()=>{a=new Date().getTime(),r===null&&(r=a);const o=Math.max(Math.min((a-r)/d,1),0),w=.5-Math.cos(o*Math.PI)/2;let h=n+w*(t-n);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[i]:h}),c(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:h})}),l.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=l.requestAnimationFrame(p)};p()}let Xe;function vi(){const s=Q(),e=se();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch),passiveListener:function(){let i=!1;try{const l=Object.defineProperty({},"passive",{get(){i=!0}});s.addEventListener("testPassiveListener",null,l)}catch{}return i}(),gestures:function(){return"ongesturestart"in s}()}}function Is(){return Xe||(Xe=vi()),Xe}let Ue;function _i(s){let{userAgent:e}=s===void 0?{}:s;const t=Is(),i=Q(),l=i.navigator.platform,n=e||i.navigator.userAgent,r={ios:!1,android:!1},a=i.screen.width,d=i.screen.height,u=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad).*OS\s([\d_]+)/);const p=n.match(/(iPod)(.*OS\s([\d_]+))?/),o=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=l==="Win32";let h=l==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&t.touch&&v.indexOf(`${a}x${d}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),u&&!w&&(r.os="android",r.android=!0),(c||o||p)&&(r.os="ios",r.ios=!0),r}function Si(s){return s===void 0&&(s={}),Ue||(Ue=_i(s)),Ue}let Ke;function bi(){const s=Q();function e(){const t=s.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}return{isSafari:e(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)}}function yi(){return Ke||(Ke=bi()),Ke}function $i(s){let{swiper:e,on:t,emit:i}=s;const l=Q();let n=null,r=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(p=>{r=l.requestAnimationFrame(()=>{const{width:o,height:w}=e;let h=o,v=w;p.forEach(b=>{let{contentBoxSize:S,contentRect:y,target:_}=b;_&&_!==e.el||(h=y?y.width:(S[0]||S).inlineSize,v=y?y.height:(S[0]||S).blockSize)}),(h!==o||v!==w)&&a()})}),n.observe(e.el))},u=()=>{r&&l.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof l.ResizeObserver!="undefined"){d();return}l.addEventListener("resize",a),l.addEventListener("orientationchange",c)}),t("destroy",()=>{u(),l.removeEventListener("resize",a),l.removeEventListener("orientationchange",c)})}function xi(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=[],r=Q(),a=function(c,p){p===void 0&&(p={});const o=r.MutationObserver||r.WebkitMutationObserver,w=new o(h=>{if(h.length===1){l("observerUpdate",h[0]);return}const v=function(){l("observerUpdate",h[0])};r.requestAnimationFrame?r.requestAnimationFrame(v):r.setTimeout(v,0)});w.observe(c,{attributes:typeof p.attributes=="undefined"?!0:p.attributes,childList:typeof p.childList=="undefined"?!0:p.childList,characterData:typeof p.characterData=="undefined"?!0:p.characterData}),n.push(w)},d=()=>{if(!!e.params.observer){if(e.params.observeParents){const c=e.$el.parents();for(let p=0;p<c.length;p+=1)a(c[p])}a(e.$el[0],{childList:e.params.observeSlideChildren}),a(e.$wrapperEl[0],{attributes:!1})}},u=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",d),i("destroy",u)}var Ci={on(s,e,t){const i=this;if(typeof e!="function")return i;const l=t?"unshift":"push";return s.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][l](e)}),i},once(s,e,t){const i=this;if(typeof e!="function")return i;function l(){i.off(s,l),l.__emitterProxy&&delete l.__emitterProxy;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(i,r)}return l.__emitterProxy=e,i.on(s,l,t)},onAny(s,e){const t=this;if(typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return t.eventsListeners&&s.split(" ").forEach(i=>{typeof e=="undefined"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((l,n)=>{(l===e||l.__emitterProxy&&l.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(){const s=this;if(!s.eventsListeners)return s;let e,t,i;for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),i=s):(e=n[0].events,t=n[0].data,i=n[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(d=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(u=>{u.apply(i,[d,...t])}),s.eventsListeners&&s.eventsListeners[d]&&s.eventsListeners[d].forEach(u=>{u.apply(i,t)})}),s}};function Ei(){const s=this;let e,t;const i=s.$el;typeof s.params.width!="undefined"&&s.params.width!==null?e=s.params.width:e=i[0].clientWidth,typeof s.params.height!="undefined"&&s.params.height!==null?t=s.params.height:t=i[0].clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function Ti(){const s=this;function e(x){return s.isHorizontal()?x:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[x]}function t(x,z){return parseFloat(x.getPropertyValue(e(z))||0)}const i=s.params,{$wrapperEl:l,size:n,rtlTranslate:r,wrongRTL:a}=s,d=s.virtual&&i.virtual.enabled,u=d?s.virtual.slides.length:s.slides.length,c=l.children(`.${s.params.slideClass}`),p=d?s.virtual.slides.length:c.length;let o=[];const w=[],h=[];let v=i.slidesOffsetBefore;typeof v=="function"&&(v=i.slidesOffsetBefore.call(s));let b=i.slidesOffsetAfter;typeof b=="function"&&(b=i.slidesOffsetAfter.call(s));const S=s.snapGrid.length,y=s.slidesGrid.length;let _=i.spaceBetween,$=-v,A=0,k=0;if(typeof n=="undefined")return;typeof _=="string"&&_.indexOf("%")>=0&&(_=parseFloat(_.replace("%",""))/100*n),s.virtualSize=-_,r?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(Me(s.wrapperEl,"--swiper-centered-offset-before",""),Me(s.wrapperEl,"--swiper-centered-offset-after",""));const L=i.grid&&i.grid.rows>1&&s.grid;L&&s.grid.initSlides(p);let E;const B=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(x=>typeof i.breakpoints[x].slidesPerView!="undefined").length>0;for(let x=0;x<p;x+=1){E=0;const z=c.eq(x);if(L&&s.grid.updateSlide(x,z,p,e),z.css("display")!=="none"){if(i.slidesPerView==="auto"){B&&(c[x].style[e("width")]="");const P=getComputedStyle(z[0]),N=z[0].style.transform,j=z[0].style.webkitTransform;if(N&&(z[0].style.transform="none"),j&&(z[0].style.webkitTransform="none"),i.roundLengths)E=s.isHorizontal()?z.outerWidth(!0):z.outerHeight(!0);else{const U=t(P,"width"),J=t(P,"padding-left"),C=t(P,"padding-right"),D=t(P,"margin-left"),G=t(P,"margin-right"),Y=P.getPropertyValue("box-sizing");if(Y&&Y==="border-box")E=U+D+G;else{const{clientWidth:Z,offsetWidth:ye}=z[0];E=U+J+C+D+G+(ye-Z)}}N&&(z[0].style.transform=N),j&&(z[0].style.webkitTransform=j),i.roundLengths&&(E=Math.floor(E))}else E=(n-(i.slidesPerView-1)*_)/i.slidesPerView,i.roundLengths&&(E=Math.floor(E)),c[x]&&(c[x].style[e("width")]=`${E}px`);c[x]&&(c[x].swiperSlideSize=E),h.push(E),i.centeredSlides?($=$+E/2+A/2+_,A===0&&x!==0&&($=$-n/2-_),x===0&&($=$-n/2-_),Math.abs($)<1/1e3&&($=0),i.roundLengths&&($=Math.floor($)),k%i.slidesPerGroup===0&&o.push($),w.push($)):(i.roundLengths&&($=Math.floor($)),(k-Math.min(s.params.slidesPerGroupSkip,k))%s.params.slidesPerGroup===0&&o.push($),w.push($),$=$+E+_),s.virtualSize+=E+_,A=E,k+=1}}if(s.virtualSize=Math.max(s.virtualSize,n)+b,r&&a&&(i.effect==="slide"||i.effect==="coverflow")&&l.css({width:`${s.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&l.css({[e("width")]:`${s.virtualSize+i.spaceBetween}px`}),L&&s.grid.updateWrapperSize(E,o,e),!i.centeredSlides){const x=[];for(let z=0;z<o.length;z+=1){let P=o[z];i.roundLengths&&(P=Math.floor(P)),o[z]<=s.virtualSize-n&&x.push(P)}o=x,Math.floor(s.virtualSize-n)-Math.floor(o[o.length-1])>1&&o.push(s.virtualSize-n)}if(o.length===0&&(o=[0]),i.spaceBetween!==0){const x=s.isHorizontal()&&r?"marginLeft":e("marginRight");c.filter((z,P)=>i.cssMode?P!==c.length-1:!0).css({[x]:`${_}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let x=0;h.forEach(P=>{x+=P+(i.spaceBetween?i.spaceBetween:0)}),x-=i.spaceBetween;const z=x-n;o=o.map(P=>P<0?-v:P>z?z+b:P)}if(i.centerInsufficientSlides){let x=0;if(h.forEach(z=>{x+=z+(i.spaceBetween?i.spaceBetween:0)}),x-=i.spaceBetween,x<n){const z=(n-x)/2;o.forEach((P,N)=>{o[N]=P-z}),w.forEach((P,N)=>{w[N]=P+z})}}if(Object.assign(s,{slides:c,snapGrid:o,slidesGrid:w,slidesSizesGrid:h}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Me(s.wrapperEl,"--swiper-centered-offset-before",`${-o[0]}px`),Me(s.wrapperEl,"--swiper-centered-offset-after",`${s.size/2-h[h.length-1]/2}px`);const x=-s.snapGrid[0],z=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(P=>P+x),s.slidesGrid=s.slidesGrid.map(P=>P+z)}if(p!==u&&s.emit("slidesLengthChange"),o.length!==S&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),w.length!==y&&s.emit("slidesGridLengthChange"),i.watchSlidesProgress&&s.updateSlidesOffset(),!d&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const x=`${i.containerModifierClass}backface-hidden`,z=s.$el.hasClass(x);p<=i.maxBackfaceHiddenSlides?z||s.$el.addClass(x):z&&s.$el.removeClass(x)}}function ki(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let l=0,n;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const r=a=>i?e.slides.filter(d=>parseInt(d.getAttribute("data-swiper-slide-index"),10)===a)[0]:e.slides.eq(a)[0];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)e.visibleSlides.each(a=>{t.push(a)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const a=e.activeIndex+n;if(a>e.slides.length&&!i)break;t.push(r(a))}else t.push(r(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]!="undefined"){const a=t[n].offsetHeight;l=a>l?a:l}(l||l===0)&&e.$wrapperEl.css("height",`${l}px`)}function Pi(){const s=this,e=s.slides;for(let t=0;t<e.length;t+=1)e[t].swiperSlideOffset=s.isHorizontal()?e[t].offsetLeft:e[t].offsetTop}function Mi(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:l,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let r=-s;l&&(r=s),i.removeClass(t.slideVisibleClass),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<i.length;a+=1){const d=i[a];let u=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const c=(r+(t.centeredSlides?e.minTranslate():0)-u)/(d.swiperSlideSize+t.spaceBetween),p=(r-n[0]+(t.centeredSlides?e.minTranslate():0)-u)/(d.swiperSlideSize+t.spaceBetween),o=-(r-u),w=o+e.slidesSizesGrid[a];(o>=0&&o<e.size-1||w>1&&w<=e.size||o<=0&&w>=e.size)&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(a),i.eq(a).addClass(t.slideVisibleClass)),d.progress=l?-c:c,d.originalProgress=l?-p:p}e.visibleSlides=I(e.visibleSlides)}function zi(s){const e=this;if(typeof s=="undefined"){const u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:l,isBeginning:n,isEnd:r}=e;const a=n,d=r;i===0?(l=0,n=!0,r=!0):(l=(s-e.minTranslate())/i,n=l<=0,r=l>=1),Object.assign(e,{progress:l,isBeginning:n,isEnd:r}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),n&&!a&&e.emit("reachBeginning toEdge"),r&&!d&&e.emit("reachEnd toEdge"),(a&&!n||d&&!r)&&e.emit("fromEdge"),e.emit("progress",l)}function Ii(){const s=this,{slides:e,params:t,$wrapperEl:i,activeIndex:l,realIndex:n}=s,r=s.virtual&&t.virtual.enabled;e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);let a;r?a=s.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${l}"]`):a=e.eq(l),a.addClass(t.slideActiveClass),t.loop&&(a.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass));let d=a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);t.loop&&d.length===0&&(d=e.eq(0),d.addClass(t.slideNextClass));let u=a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);t.loop&&u.length===0&&(u=e.eq(-1),u.addClass(t.slidePrevClass)),t.loop&&(d.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass),u.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)),s.emitSlidesClasses()}function Oi(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{slidesGrid:i,snapGrid:l,params:n,activeIndex:r,realIndex:a,snapIndex:d}=e;let u=s,c;if(typeof u=="undefined"){for(let o=0;o<i.length;o+=1)typeof i[o+1]!="undefined"?t>=i[o]&&t<i[o+1]-(i[o+1]-i[o])/2?u=o:t>=i[o]&&t<i[o+1]&&(u=o+1):t>=i[o]&&(u=o);n.normalizeSlideIndex&&(u<0||typeof u=="undefined")&&(u=0)}if(l.indexOf(t)>=0)c=l.indexOf(t);else{const o=Math.min(n.slidesPerGroupSkip,u);c=o+Math.floor((u-o)/n.slidesPerGroup)}if(c>=l.length&&(c=l.length-1),u===r){c!==d&&(e.snapIndex=c,e.emit("snapIndexChange"));return}const p=parseInt(e.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(e,{snapIndex:c,realIndex:p,previousIndex:r,activeIndex:u}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),a!==p&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function Ai(s){const e=this,t=e.params,i=I(s).closest(`.${t.slideClass}`)[0];let l=!1,n;if(i){for(let r=0;r<e.slides.length;r+=1)if(e.slides[r]===i){l=!0,n=r;break}}if(i&&l)e.clickedSlide=i,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(I(i).attr("data-swiper-slide-index"),10):e.clickedIndex=n;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var Li={updateSize:Ei,updateSlides:Ti,updateAutoHeight:ki,updateSlidesOffset:Pi,updateSlidesProgress:Mi,updateProgress:zi,updateSlidesClasses:Ii,updateActiveIndex:Oi,updateClickedSlide:Ai};function Ni(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:l,$wrapperEl:n}=e;if(t.virtualTranslate)return i?-l:l;if(t.cssMode)return l;let r=ss(n[0],s);return i&&(r=-r),r||0}function ji(s,e){const t=this,{rtlTranslate:i,params:l,$wrapperEl:n,wrapperEl:r,progress:a}=t;let d=0,u=0;const c=0;t.isHorizontal()?d=i?-s:s:u=s,l.roundLengths&&(d=Math.floor(d),u=Math.floor(u)),l.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-d:-u:l.virtualTranslate||n.transform(`translate3d(${d}px, ${u}px, ${c}px)`),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?d:u;let p;const o=t.maxTranslate()-t.minTranslate();o===0?p=0:p=(s-t.minTranslate())/o,p!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function Bi(){return-this.snapGrid[0]}function Di(){return-this.snapGrid[this.snapGrid.length-1]}function Gi(s,e,t,i,l){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const n=this,{params:r,wrapperEl:a}=n;if(n.animating&&r.preventInteractionOnTransition)return!1;const d=n.minTranslate(),u=n.maxTranslate();let c;if(i&&s>d?c=d:i&&s<u?c=u:c=s,n.updateProgress(c),r.cssMode){const p=n.isHorizontal();if(e===0)a[p?"scrollLeft":"scrollTop"]=-c;else{if(!n.support.smoothScroll)return zs({swiper:n,targetPosition:-c,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(c),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(c),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(o){!n||n.destroyed||o.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,t&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}var Ri={getTranslate:Ni,setTranslate:ji,minTranslate:Bi,maxTranslate:Di,translateTo:Gi};function Hi(s,e){const t=this;t.params.cssMode||t.$wrapperEl.transition(s),t.emit("setTransition",s,e)}function Os(s){let{swiper:e,runCallbacks:t,direction:i,step:l}=s;const{activeIndex:n,previousIndex:r}=e;let a=i;if(a||(n>r?a="next":n<r?a="prev":a="reset"),e.emit(`transition${l}`),t&&n!==r){if(a==="reset"){e.emit(`slideResetTransition${l}`);return}e.emit(`slideChangeTransition${l}`),a==="next"?e.emit(`slideNextTransition${l}`):e.emit(`slidePrevTransition${l}`)}}function Vi(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Os({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function Wi(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Os({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var Fi={setTransition:Hi,transitionStart:Vi,transitionEnd:Wi};function qi(s,e,t,i,l){if(s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof s!="number"&&typeof s!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof s}] given.`);if(typeof s=="string"){const _=parseInt(s,10);if(!isFinite(_))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${s}] given.`);s=_}const n=this;let r=s;r<0&&(r=0);const{params:a,snapGrid:d,slidesGrid:u,previousIndex:c,activeIndex:p,rtlTranslate:o,wrapperEl:w,enabled:h}=n;if(n.animating&&a.preventInteractionOnTransition||!h&&!i&&!l)return!1;const v=Math.min(n.params.slidesPerGroupSkip,r);let b=v+Math.floor((r-v)/n.params.slidesPerGroup);b>=d.length&&(b=d.length-1),(p||a.initialSlide||0)===(c||0)&&t&&n.emit("beforeSlideChangeStart");const S=-d[b];if(n.updateProgress(S),a.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const $=-Math.floor(S*100),A=Math.floor(u[_]*100),k=Math.floor(u[_+1]*100);typeof u[_+1]!="undefined"?$>=A&&$<k-(k-A)/2?r=_:$>=A&&$<k&&(r=_+1):$>=A&&(r=_)}if(n.initialized&&r!==p&&(!n.allowSlideNext&&S<n.translate&&S<n.minTranslate()||!n.allowSlidePrev&&S>n.translate&&S>n.maxTranslate()&&(p||0)!==r))return!1;let y;if(r>p?y="next":r<p?y="prev":y="reset",o&&-S===n.translate||!o&&S===n.translate)return n.updateActiveIndex(r),a.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),a.effect!=="slide"&&n.setTranslate(S),y!=="reset"&&(n.transitionStart(t,y),n.transitionEnd(t,y)),!1;if(a.cssMode){const _=n.isHorizontal(),$=o?S:-S;if(e===0){const A=n.virtual&&n.params.virtual.enabled;A&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),w[_?"scrollLeft":"scrollTop"]=$,A&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._swiperImmediateVirtual=!1})}else{if(!n.support.smoothScroll)return zs({swiper:n,targetPosition:$,side:_?"left":"top"}),!0;w.scrollTo({[_?"left":"top"]:$,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(S),n.updateActiveIndex(r),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,y),e===0?n.transitionEnd(t,y):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function($){!n||n.destroyed||$.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,y))}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd)),!0}function Yi(s,e,t,i){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const l=this;let n=s;return l.params.loop&&(n+=l.loopedSlides),l.slideTo(n,e,t,i)}function Xi(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this,{animating:l,enabled:n,params:r}=i;if(!n)return i;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const d=i.activeIndex<r.slidesPerGroupSkip?1:a;if(r.loop){if(l&&r.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+d,s,e,t)}function Ui(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this,{params:l,animating:n,snapGrid:r,slidesGrid:a,rtlTranslate:d,enabled:u}=i;if(!u)return i;if(l.loop){if(n&&l.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}const c=d?i.translate:-i.translate;function p(b){return b<0?-Math.floor(Math.abs(b)):Math.floor(b)}const o=p(c),w=r.map(b=>p(b));let h=r[w.indexOf(o)-1];if(typeof h=="undefined"&&l.cssMode){let b;r.forEach((S,y)=>{o>=S&&(b=y)}),typeof b!="undefined"&&(h=r[b>0?b-1:b])}let v=0;if(typeof h!="undefined"&&(v=a.indexOf(h),v<0&&(v=i.activeIndex-1),l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(v=v-i.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),l.rewind&&i.isBeginning){const b=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(b,s,e,t)}return i.slideTo(v,s,e,t)}function Ki(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this;return i.slideTo(i.activeIndex,s,e,t)}function Zi(s,e,t,i){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0),i===void 0&&(i=.5);const l=this;let n=l.activeIndex;const r=Math.min(l.params.slidesPerGroupSkip,n),a=r+Math.floor((n-r)/l.params.slidesPerGroup),d=l.rtlTranslate?l.translate:-l.translate;if(d>=l.snapGrid[a]){const u=l.snapGrid[a],c=l.snapGrid[a+1];d-u>(c-u)*i&&(n+=l.params.slidesPerGroup)}else{const u=l.snapGrid[a-1],c=l.snapGrid[a];d-u<=(c-u)*i&&(n-=l.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,l.slidesGrid.length-1),l.slideTo(n,s,e,t)}function Ji(){const s=this,{params:e,$wrapperEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let l=s.clickedIndex,n;if(e.loop){if(s.animating)return;n=parseInt(I(s.clickedSlide).attr("data-swiper-slide-index"),10),e.centeredSlides?l<s.loopedSlides-i/2||l>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),l=t.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),xe(()=>{s.slideTo(l)})):s.slideTo(l):l>s.slides.length-i?(s.loopFix(),l=t.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),xe(()=>{s.slideTo(l)})):s.slideTo(l)}else s.slideTo(l)}var Qi={slideTo:qi,slideToLoop:Yi,slideNext:Xi,slidePrev:Ui,slideReset:Ki,slideToClosest:Zi,slideToClickedSlide:Ji};function er(){const s=this,e=se(),{params:t,$wrapperEl:i}=s,l=i.children().length>0?I(i.children()[0].parentNode):i;l.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();let n=l.children(`.${t.slideClass}`);if(t.loopFillGroupWithBlank){const d=t.slidesPerGroup-n.length%t.slidesPerGroup;if(d!==t.slidesPerGroup){for(let u=0;u<d;u+=1){const c=I(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);l.append(c)}n=l.children(`.${t.slideClass}`)}}t.slidesPerView==="auto"&&!t.loopedSlides&&(t.loopedSlides=n.length),s.loopedSlides=Math.ceil(parseFloat(t.loopedSlides||t.slidesPerView,10)),s.loopedSlides+=t.loopAdditionalSlides,s.loopedSlides>n.length&&(s.loopedSlides=n.length);const r=[],a=[];n.each((d,u)=>{const c=I(d);u<s.loopedSlides&&a.push(d),u<n.length&&u>=n.length-s.loopedSlides&&r.push(d),c.attr("data-swiper-slide-index",u)});for(let d=0;d<a.length;d+=1)l.append(I(a[d].cloneNode(!0)).addClass(t.slideDuplicateClass));for(let d=r.length-1;d>=0;d-=1)l.prepend(I(r[d].cloneNode(!0)).addClass(t.slideDuplicateClass))}function sr(){const s=this;s.emit("beforeLoopFix");const{activeIndex:e,slides:t,loopedSlides:i,allowSlidePrev:l,allowSlideNext:n,snapGrid:r,rtlTranslate:a}=s;let d;s.allowSlidePrev=!0,s.allowSlideNext=!0;const c=-r[e]-s.getTranslate();e<i?(d=t.length-i*3+e,d+=i,s.slideTo(d,0,!1,!0)&&c!==0&&s.setTranslate((a?-s.translate:s.translate)-c)):e>=t.length-i&&(d=-t.length+e+i,d+=i,s.slideTo(d,0,!1,!0)&&c!==0&&s.setTranslate((a?-s.translate:s.translate)-c)),s.allowSlidePrev=l,s.allowSlideNext=n,s.emit("loopFix")}function tr(){const s=this,{$wrapperEl:e,params:t,slides:i}=s;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}var ir={loopCreate:er,loopFix:sr,loopDestroy:tr};function rr(s){const e=this;if(e.support.touch||!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;t.style.cursor="move",t.style.cursor=s?"-webkit-grabbing":"-webkit-grab",t.style.cursor=s?"-moz-grabbin":"-moz-grab",t.style.cursor=s?"grabbing":"grab"}function nr(){const s=this;s.support.touch||s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}var lr={setGrabCursor:rr,unsetGrabCursor:nr};function ar(s,e){e===void 0&&(e=this);function t(i){return!i||i===se()||i===Q()?null:(i.assignedSlot&&(i=i.assignedSlot),i.closest(s)||t(i.getRootNode().host))}return t(e)}function or(s){const e=this,t=se(),i=Q(),l=e.touchEventsData,{params:n,touches:r,enabled:a}=e;if(!a||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let d=s;d.originalEvent&&(d=d.originalEvent);let u=I(d.target);if(n.touchEventsTarget==="wrapper"&&!u.closest(e.wrapperEl).length||(l.isTouchEvent=d.type==="touchstart",!l.isTouchEvent&&"which"in d&&d.which===3)||!l.isTouchEvent&&"button"in d&&d.button>0||l.isTouched&&l.isMoved)return;!!n.noSwipingClass&&n.noSwipingClass!==""&&d.target&&d.target.shadowRoot&&s.path&&s.path[0]&&(u=I(s.path[0]));const p=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,o=!!(d.target&&d.target.shadowRoot);if(n.noSwiping&&(o?ar(p,d.target):u.closest(p)[0])){e.allowClick=!0;return}if(n.swipeHandler&&!u.closest(n.swipeHandler)[0])return;r.currentX=d.type==="touchstart"?d.targetTouches[0].pageX:d.pageX,r.currentY=d.type==="touchstart"?d.targetTouches[0].pageY:d.pageY;const w=r.currentX,h=r.currentY,v=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,b=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(v&&(w<=b||w>=i.innerWidth-b))if(v==="prevent")s.preventDefault();else return;if(Object.assign(l,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=w,r.startY=h,l.touchStartTime=pe(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(l.allowThresholdMove=!1),d.type!=="touchstart"){let S=!0;u.is(l.focusableElements)&&(S=!1,u[0].nodeName==="SELECT"&&(l.isTouched=!1)),t.activeElement&&I(t.activeElement).is(l.focusableElements)&&t.activeElement!==u[0]&&t.activeElement.blur();const y=S&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||y)&&!u[0].isContentEditable&&d.preventDefault()}e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",d)}function dr(s){const e=se(),t=this,i=t.touchEventsData,{params:l,touches:n,rtlTranslate:r,enabled:a}=t;if(!a)return;let d=s;if(d.originalEvent&&(d=d.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",d);return}if(i.isTouchEvent&&d.type!=="touchmove")return;const u=d.type==="touchmove"&&d.targetTouches&&(d.targetTouches[0]||d.changedTouches[0]),c=d.type==="touchmove"?u.pageX:d.pageX,p=d.type==="touchmove"?u.pageY:d.pageY;if(d.preventedByNestedSwiper){n.startX=c,n.startY=p;return}if(!t.allowTouchMove){I(d.target).is(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:c,startY:p,currentX:c,currentY:p}),i.touchStartTime=pe());return}if(i.isTouchEvent&&l.touchReleaseOnEdges&&!l.loop){if(t.isVertical()){if(p<n.startY&&t.translate<=t.maxTranslate()||p>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(c<n.startX&&t.translate<=t.maxTranslate()||c>n.startX&&t.translate>=t.minTranslate())return}if(i.isTouchEvent&&e.activeElement&&d.target===e.activeElement&&I(d.target).is(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}if(i.allowTouchCallbacks&&t.emit("touchMove",d),d.targetTouches&&d.targetTouches.length>1)return;n.currentX=c,n.currentY=p;const o=n.currentX-n.startX,w=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(o**2+w**2)<t.params.threshold)return;if(typeof i.isScrolling=="undefined"){let S;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:o*o+w*w>=25&&(S=Math.atan2(Math.abs(w),Math.abs(o))*180/Math.PI,i.isScrolling=t.isHorizontal()?S>l.touchAngle:90-S>l.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",d),typeof i.startMoving=="undefined"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!l.cssMode&&d.cancelable&&d.preventDefault(),l.touchMoveStopPropagation&&!l.nested&&d.stopPropagation(),i.isMoved||(l.loop&&!l.cssMode&&t.loopFix(),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,l.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",d)),t.emit("sliderMove",d),i.isMoved=!0;let h=t.isHorizontal()?o:w;n.diff=h,h*=l.touchRatio,r&&(h=-h),t.swipeDirection=h>0?"prev":"next",i.currentTranslate=h+i.startTranslate;let v=!0,b=l.resistanceRatio;if(l.touchReleaseOnEdges&&(b=0),h>0&&i.currentTranslate>t.minTranslate()?(v=!1,l.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+h)**b)):h<0&&i.currentTranslate<t.maxTranslate()&&(v=!1,l.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-h)**b)),v&&(d.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),l.threshold>0)if(Math.abs(h)>l.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!l.followFinger||l.cssMode||((l.freeMode&&l.freeMode.enabled&&t.freeMode||l.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&l.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function pr(s){const e=this,t=e.touchEventsData,{params:i,touches:l,rtlTranslate:n,slidesGrid:r,enabled:a}=e;if(!a)return;let d=s;if(d.originalEvent&&(d=d.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",d),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&i.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}i.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=pe(),c=u-t.touchStartTime;if(e.allowClick){const y=d.path||d.composedPath&&d.composedPath();e.updateClickedSlide(y&&y[0]||d.target),e.emit("tap click",d),c<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",d)}if(t.lastClickTime=pe(),xe(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(i.followFinger?p=n?e.translate:-e.translate:p=-t.currentTranslate,i.cssMode)return;if(e.params.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}let o=0,w=e.slidesSizesGrid[0];for(let y=0;y<r.length;y+=y<i.slidesPerGroupSkip?1:i.slidesPerGroup){const _=y<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof r[y+_]!="undefined"?p>=r[y]&&p<r[y+_]&&(o=y,w=r[y+_]-r[y]):p>=r[y]&&(o=y,w=r[r.length-1]-r[r.length-2])}let h=null,v=null;i.rewind&&(e.isBeginning?v=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const b=(p-r[o])/w,S=o<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(c>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(b>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?h:o+S):e.slideTo(o)),e.swipeDirection==="prev"&&(b>1-i.longSwipesRatio?e.slideTo(o+S):v!==null&&b<0&&Math.abs(b)>i.longSwipesRatio?e.slideTo(v):e.slideTo(o))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(d.target===e.navigation.nextEl||d.target===e.navigation.prevEl)?d.target===e.navigation.nextEl?e.slideTo(o+S):e.slideTo(o):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:o+S),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:o))}}function vs(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:l,snapGrid:n}=s;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses(),(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides?s.slideTo(s.slides.length-1,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.run(),s.allowSlidePrev=l,s.allowSlideNext=i,s.params.watchOverflow&&n!==s.snapGrid&&s.checkOverflow()}function cr(s){const e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation()))}function ur(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===-0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let l;const n=s.maxTranslate()-s.minTranslate();n===0?l=0:l=(s.translate-s.minTranslate())/n,l!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}let _s=!1;function fr(){}const As=(s,e)=>{const t=se(),{params:i,touchEvents:l,el:n,wrapperEl:r,device:a,support:d}=s,u=!!i.nested,c=e==="on"?"addEventListener":"removeEventListener",p=e;if(!d.touch)n[c](l.start,s.onTouchStart,!1),t[c](l.move,s.onTouchMove,u),t[c](l.end,s.onTouchEnd,!1);else{const o=l.start==="touchstart"&&d.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;n[c](l.start,s.onTouchStart,o),n[c](l.move,s.onTouchMove,d.passiveListener?{passive:!1,capture:u}:u),n[c](l.end,s.onTouchEnd,o),l.cancel&&n[c](l.cancel,s.onTouchEnd,o)}(i.preventClicks||i.preventClicksPropagation)&&n[c]("click",s.onClick,!0),i.cssMode&&r[c]("scroll",s.onScroll),i.updateOnWindowResize?s[p](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",vs,!0):s[p]("observerUpdate",vs,!0)};function mr(){const s=this,e=se(),{params:t,support:i}=s;s.onTouchStart=or.bind(s),s.onTouchMove=dr.bind(s),s.onTouchEnd=pr.bind(s),t.cssMode&&(s.onScroll=ur.bind(s)),s.onClick=cr.bind(s),i.touch&&!_s&&(e.addEventListener("touchstart",fr),_s=!0),As(s,"on")}function hr(){As(this,"off")}var wr={attachEvents:mr,detachEvents:hr};const Ss=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function gr(){const s=this,{activeIndex:e,initialized:t,loopedSlides:i=0,params:l,$el:n}=s,r=l.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=s.getBreakpoint(r,s.params.breakpointsBase,s.el);if(!a||s.currentBreakpoint===a)return;const u=(a in r?r[a]:void 0)||s.originalParams,c=Ss(s,l),p=Ss(s,u),o=l.enabled;c&&!p?(n.removeClass(`${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`),s.emitContainerClasses()):!c&&p&&(n.addClass(`${l.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&l.grid.fill==="column")&&n.addClass(`${l.containerModifierClass}grid-column`),s.emitContainerClasses());const w=u.direction&&u.direction!==l.direction,h=l.loop&&(u.slidesPerView!==l.slidesPerView||w);w&&t&&s.changeDirection(),de(s.params,u);const v=s.params.enabled;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),o&&!v?s.disable():!o&&v&&s.enable(),s.currentBreakpoint=a,s.emit("_beforeBreakpoint",u),h&&t&&(s.loopDestroy(),s.loopCreate(),s.updateSlides(),s.slideTo(e-i+s.loopedSlides,0,!1)),s.emit("breakpoint",u)}function vr(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1;const l=Q(),n=e==="window"?l.innerHeight:t.clientHeight,r=Object.keys(s).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const d=parseFloat(a.substr(1));return{value:n*d,point:a}}return{value:a,point:a}});r.sort((a,d)=>parseInt(a.value,10)-parseInt(d.value,10));for(let a=0;a<r.length;a+=1){const{point:d,value:u}=r[a];e==="window"?l.matchMedia(`(min-width: ${u}px)`).matches&&(i=d):u<=t.clientWidth&&(i=d)}return i||"max"}var _r={setBreakpoint:gr,getBreakpoint:vr};function Sr(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(l=>{i[l]&&t.push(e+l)}):typeof i=="string"&&t.push(e+i)}),t}function br(){const s=this,{classNames:e,params:t,rtl:i,$el:l,device:n,support:r}=s,a=Sr(["initialized",t.direction,{"pointer-events":!r.touch},{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides}],t.containerModifierClass);e.push(...a),l.addClass([...e].join(" ")),s.emitContainerClasses()}function yr(){const s=this,{$el:e,classNames:t}=s;e.removeClass(t.join(" ")),s.emitContainerClasses()}var $r={addClasses:br,removeClasses:yr};function xr(s,e,t,i,l,n){const r=Q();let a;function d(){n&&n()}!I(s).parent("picture")[0]&&(!s.complete||!l)&&e?(a=new r.Image,a.onload=d,a.onerror=d,i&&(a.sizes=i),t&&(a.srcset=t),e&&(a.src=e)):d()}function Cr(){const s=this;s.imagesToLoad=s.$el.find("img");function e(){typeof s=="undefined"||s===null||!s||s.destroyed||(s.imagesLoaded!==void 0&&(s.imagesLoaded+=1),s.imagesLoaded===s.imagesToLoad.length&&(s.params.updateOnImagesReady&&s.update(),s.emit("imagesReady")))}for(let t=0;t<s.imagesToLoad.length;t+=1){const i=s.imagesToLoad[t];s.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,e)}}var Er={loadImage:xr,preloadImages:Cr};function Tr(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const l=s.slides.length-1,n=s.slidesGrid[l]+s.slidesSizesGrid[l]+i*2;s.isLocked=s.size>n}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var kr={checkOverflow:Tr},bs={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Pr(s,e){return function(i){i===void 0&&(i={});const l=Object.keys(i)[0],n=i[l];if(typeof n!="object"||n===null){de(e,i);return}if(["navigation","pagination","scrollbar"].indexOf(l)>=0&&s[l]===!0&&(s[l]={auto:!0}),!(l in s&&"enabled"in n)){de(e,i);return}s[l]===!0&&(s[l]={enabled:!0}),typeof s[l]=="object"&&!("enabled"in s[l])&&(s[l].enabled=!0),s[l]||(s[l]={enabled:!1}),de(e,i)}}const Ze={eventsEmitter:Ci,update:Li,translate:Ri,transition:Fi,slide:Qi,loop:ir,grabCursor:lr,events:wr,breakpoints:_r,checkOverflow:kr,classes:$r,images:Er},Je={};class le{constructor(){let e,t;for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];if(l.length===1&&l[0].constructor&&Object.prototype.toString.call(l[0]).slice(8,-1)==="Object"?t=l[0]:[e,t]=l,t||(t={}),t=de({},t),e&&!t.el&&(t.el=e),t.el&&I(t.el).length>1){const u=[];return I(t.el).each(c=>{const p=de({},t,{el:c});u.push(new le(p))}),u}const r=this;r.__swiper__=!0,r.support=Is(),r.device=Si({userAgent:t.userAgent}),r.browser=yi(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const a={};r.modules.forEach(u=>{u({swiper:r,extendParams:Pr(t,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const d=de({},bs,a);return r.params=de({},d,Je,t),r.originalParams=de({},r.params),r.passedParams=de({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach(u=>{r.on(u,r.params.on[u])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=I,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:I(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const c=["touchstart","touchmove","touchend","touchcancel"],p=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:c[0],move:c[1],end:c[2],cancel:c[3]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:pe(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const l=i.minTranslate(),r=(i.maxTranslate()-l)*e+l;i.translateTo(r,typeof t=="undefined"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each(i=>{const l=e.getSlideClasses(i);t.push({slideEl:i,classNames:l}),e.emit("_slideClass",i,l)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:l,slides:n,slidesGrid:r,slidesSizesGrid:a,size:d,activeIndex:u}=i;let c=1;if(l.centeredSlides){let p=n[u].swiperSlideSize,o;for(let w=u+1;w<n.length;w+=1)n[w]&&!o&&(p+=n[w].swiperSlideSize,c+=1,p>d&&(o=!0));for(let w=u-1;w>=0;w-=1)n[w]&&!o&&(p+=n[w].swiperSlideSize,c+=1,p>d&&(o=!0))}else if(e==="current")for(let p=u+1;p<n.length;p+=1)(t?r[p]+a[p]-r[u]<d:r[p]-r[u]<d)&&(c+=1);else for(let p=u-1;p>=0;p-=1)r[u]-r[p]<d&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function l(){const r=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(r,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let n;e.params.freeMode&&e.params.freeMode.enabled?(l(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?n=e.slideTo(e.slides.length-1,0,!1,!0):n=e.slideTo(e.activeIndex,0,!1,!0),n||l()),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,l=i.params.direction;return e||(e=l==="horizontal"?"vertical":"horizontal"),e===l||e!=="horizontal"&&e!=="vertical"||(i.$el.removeClass(`${i.params.containerModifierClass}${l}`).addClass(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.each(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}mount(e){const t=this;if(t.mounted)return!0;const i=I(e||t.params.el);if(e=i[0],!e)return!1;e.swiper=t;const l=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const a=I(e.shadowRoot.querySelector(l()));return a.children=d=>i.children(d),a}return i.children(l())})();if(r.length===0&&t.params.createElements){const d=se().createElement("div");r=I(d),d.className=t.params.wrapperClass,i.append(d),i.children(`.${t.params.slideClass}`).each(u=>{r.append(u)})}return Object.assign(t,{$el:i,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:e.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(e.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl"),wrongRTL:r.css("display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:l,$el:n,$wrapperEl:r,slides:a}=i;return typeof i.params=="undefined"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),l.loop&&i.loopDestroy(),t&&(i.removeClasses(),n.removeAttr("style"),r.removeAttr("style"),a&&a.length&&a.removeClass([l.slideVisibleClass,l.slideActiveClass,l.slideNextClass,l.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(d=>{i.off(d)}),e!==!1&&(i.$el[0].swiper=null,hi(i)),i.destroyed=!0),null}static extendDefaults(e){de(Je,e)}static get extendedDefaults(){return Je}static get defaults(){return bs}static installModule(e){le.prototype.__modules__||(le.prototype.__modules__=[]);const t=le.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>le.installModule(t)),le):(le.installModule(e),le)}}Object.keys(Ze).forEach(s=>{Object.keys(Ze[s]).forEach(e=>{le.prototype[e]=Ze[s][e]})});le.use([$i,xi]);function Mr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function r(o,w){const h=e.params.virtual;if(h.cache&&e.virtual.cache[w])return e.virtual.cache[w];const v=h.renderSlide?I(h.renderSlide.call(e,o,w)):I(`<div class="${e.params.slideClass}" data-swiper-slide-index="${w}">${o}</div>`);return v.attr("data-swiper-slide-index")||v.attr("data-swiper-slide-index",w),h.cache&&(e.virtual.cache[w]=v),v}function a(o){const{slidesPerView:w,slidesPerGroup:h,centeredSlides:v}=e.params,{addSlidesBefore:b,addSlidesAfter:S}=e.params.virtual,{from:y,to:_,slides:$,slidesGrid:A,offset:k}=e.virtual;e.params.cssMode||e.updateActiveIndex();const L=e.activeIndex||0;let E;e.rtlTranslate?E="right":E=e.isHorizontal()?"left":"top";let B,x;v?(B=Math.floor(w/2)+h+S,x=Math.floor(w/2)+h+b):(B=w+(h-1)+S,x=h+b);const z=Math.max((L||0)-x,0),P=Math.min((L||0)+B,$.length-1),N=(e.slidesGrid[z]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:z,to:P,offset:N,slidesGrid:e.slidesGrid});function j(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),l("virtualUpdate")}if(y===z&&_===P&&!o){e.slidesGrid!==A&&N!==k&&e.slides.css(E,`${N}px`),e.updateProgress(),l("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:N,from:z,to:P,slides:function(){const D=[];for(let G=z;G<=P;G+=1)D.push($[G]);return D}()}),e.params.virtual.renderExternalUpdate?j():l("virtualUpdate");return}const U=[],J=[];if(o)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let C=y;C<=_;C+=1)(C<z||C>P)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${C}"]`).remove();for(let C=0;C<$.length;C+=1)C>=z&&C<=P&&(typeof _=="undefined"||o?J.push(C):(C>_&&J.push(C),C<y&&U.push(C)));J.forEach(C=>{e.$wrapperEl.append(r($[C],C))}),U.sort((C,D)=>D-C).forEach(C=>{e.$wrapperEl.prepend(r($[C],C))}),e.$wrapperEl.children(".swiper-slide").css(E,`${N}px`),j()}function d(o){if(typeof o=="object"&&"length"in o)for(let w=0;w<o.length;w+=1)o[w]&&e.virtual.slides.push(o[w]);else e.virtual.slides.push(o);a(!0)}function u(o){const w=e.activeIndex;let h=w+1,v=1;if(Array.isArray(o)){for(let b=0;b<o.length;b+=1)o[b]&&e.virtual.slides.unshift(o[b]);h=w+o.length,v=o.length}else e.virtual.slides.unshift(o);if(e.params.virtual.cache){const b=e.virtual.cache,S={};Object.keys(b).forEach(y=>{const _=b[y],$=_.attr("data-swiper-slide-index");$&&_.attr("data-swiper-slide-index",parseInt($,10)+v),S[parseInt(y,10)+v]=_}),e.virtual.cache=S}a(!0),e.slideTo(h,0)}function c(o){if(typeof o=="undefined"||o===null)return;let w=e.activeIndex;if(Array.isArray(o))for(let h=o.length-1;h>=0;h-=1)e.virtual.slides.splice(o[h],1),e.params.virtual.cache&&delete e.virtual.cache[o[h]],o[h]<w&&(w-=1),w=Math.max(w,0);else e.virtual.slides.splice(o,1),e.params.virtual.cache&&delete e.virtual.cache[o],o<w&&(w-=1),w=Math.max(w,0);a(!0),e.slideTo(w,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),a(!0),e.slideTo(0,0)}i("beforeInit",()=>{!e.params.virtual.enabled||(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||a())}),i("setTranslate",()=>{!e.params.virtual.enabled||(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{a()},100)):a())}),i("init update resize",()=>{!e.params.virtual.enabled||e.params.cssMode&&Me(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:u,removeSlide:c,removeAllSlides:p,update:a})}function Ls(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=se(),r=Q();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(c){if(!e.enabled)return;const{rtlTranslate:p}=e;let o=c;o.originalEvent&&(o=o.originalEvent);const w=o.keyCode||o.charCode,h=e.params.keyboard.pageUpDown,v=h&&w===33,b=h&&w===34,S=w===37,y=w===39,_=w===38,$=w===40;if(!e.allowSlideNext&&(e.isHorizontal()&&y||e.isVertical()&&$||b)||!e.allowSlidePrev&&(e.isHorizontal()&&S||e.isVertical()&&_||v))return!1;if(!(o.shiftKey||o.altKey||o.ctrlKey||o.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(v||b||S||y||_||$)){let A=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const k=e.$el,L=k[0].clientWidth,E=k[0].clientHeight,B=r.innerWidth,x=r.innerHeight,z=e.$el.offset();p&&(z.left-=e.$el[0].scrollLeft);const P=[[z.left,z.top],[z.left+L,z.top],[z.left,z.top+E],[z.left+L,z.top+E]];for(let N=0;N<P.length;N+=1){const j=P[N];if(j[0]>=0&&j[0]<=B&&j[1]>=0&&j[1]<=x){if(j[0]===0&&j[1]===0)continue;A=!0}}if(!A)return}e.isHorizontal()?((v||b||S||y)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),((b||y)&&!p||(v||S)&&p)&&e.slideNext(),((v||S)&&!p||(b||y)&&p)&&e.slidePrev()):((v||b||_||$)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),(b||$)&&e.slideNext(),(v||_)&&e.slidePrev()),l("keyPress",w)}}function d(){e.keyboard.enabled||(I(n).on("keydown",a),e.keyboard.enabled=!0)}function u(){!e.keyboard.enabled||(I(n).off("keydown",a),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&d()}),i("destroy",()=>{e.keyboard.enabled&&u()}),Object.assign(e.keyboard,{enable:d,disable:u})}function Re(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=Q();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let r,a=pe(),d;const u=[];function c(_){let L=0,E=0,B=0,x=0;return"detail"in _&&(E=_.detail),"wheelDelta"in _&&(E=-_.wheelDelta/120),"wheelDeltaY"in _&&(E=-_.wheelDeltaY/120),"wheelDeltaX"in _&&(L=-_.wheelDeltaX/120),"axis"in _&&_.axis===_.HORIZONTAL_AXIS&&(L=E,E=0),B=L*10,x=E*10,"deltaY"in _&&(x=_.deltaY),"deltaX"in _&&(B=_.deltaX),_.shiftKey&&!B&&(B=x,x=0),(B||x)&&_.deltaMode&&(_.deltaMode===1?(B*=40,x*=40):(B*=800,x*=800)),B&&!L&&(L=B<1?-1:1),x&&!E&&(E=x<1?-1:1),{spinX:L,spinY:E,pixelX:B,pixelY:x}}function p(){!e.enabled||(e.mouseEntered=!0)}function o(){!e.enabled||(e.mouseEntered=!1)}function w(_){return e.params.mousewheel.thresholdDelta&&_.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&pe()-a<e.params.mousewheel.thresholdTime?!1:_.delta>=6&&pe()-a<60?!0:(_.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),l("scroll",_.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),l("scroll",_.raw)),a=new n.Date().getTime(),!1)}function h(_){const $=e.params.mousewheel;if(_.direction<0){if(e.isEnd&&!e.params.loop&&$.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&$.releaseOnEdges)return!0;return!1}function v(_){let $=_,A=!0;if(!e.enabled)return;const k=e.params.mousewheel;e.params.cssMode&&$.preventDefault();let L=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(L=I(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!L[0].contains($.target)&&!k.releaseOnEdges)return!0;$.originalEvent&&($=$.originalEvent);let E=0;const B=e.rtlTranslate?-1:1,x=c($);if(k.forceToAxis)if(e.isHorizontal())if(Math.abs(x.pixelX)>Math.abs(x.pixelY))E=-x.pixelX*B;else return!0;else if(Math.abs(x.pixelY)>Math.abs(x.pixelX))E=-x.pixelY;else return!0;else E=Math.abs(x.pixelX)>Math.abs(x.pixelY)?-x.pixelX*B:-x.pixelY;if(E===0)return!0;k.invert&&(E=-E);let z=e.getTranslate()+E*k.sensitivity;if(z>=e.minTranslate()&&(z=e.minTranslate()),z<=e.maxTranslate()&&(z=e.maxTranslate()),A=e.params.loop?!0:!(z===e.minTranslate()||z===e.maxTranslate()),A&&e.params.nested&&$.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const P={time:pe(),delta:Math.abs(E),direction:Math.sign(E),raw:_};u.length>=2&&u.shift();const N=u.length?u[u.length-1]:void 0;if(u.push(P),N?(P.direction!==N.direction||P.delta>N.delta||P.time>N.time+150)&&w(P):w(P),h(P))return!0}else{const P={time:pe(),delta:Math.abs(E),direction:Math.sign(E)},N=d&&P.time<d.time+500&&P.delta<=d.delta&&P.direction===d.direction;if(!N){d=void 0,e.params.loop&&e.loopFix();let j=e.getTranslate()+E*k.sensitivity;const U=e.isBeginning,J=e.isEnd;if(j>=e.minTranslate()&&(j=e.minTranslate()),j<=e.maxTranslate()&&(j=e.maxTranslate()),e.setTransition(0),e.setTranslate(j),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!U&&e.isBeginning||!J&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(r),r=void 0,u.length>=15&&u.shift();const C=u.length?u[u.length-1]:void 0,D=u[0];if(u.push(P),C&&(P.delta>C.delta||P.direction!==C.direction))u.splice(0);else if(u.length>=15&&P.time-D.time<500&&D.delta-P.delta>=1&&P.delta<=6){const G=E>0?.8:.2;d=P,u.splice(0),r=xe(()=>{e.slideToClosest(e.params.speed,!0,void 0,G)},0)}r||(r=xe(()=>{d=P,u.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(N||l("scroll",$),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),j===e.minTranslate()||j===e.maxTranslate())return!0}}return $.preventDefault?$.preventDefault():$.returnValue=!1,!1}function b(_){let $=e.$el;e.params.mousewheel.eventsTarget!=="container"&&($=I(e.params.mousewheel.eventsTarget)),$[_]("mouseenter",p),$[_]("mouseleave",o),$[_]("wheel",v)}function S(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",v),!0):e.mousewheel.enabled?!1:(b("on"),e.mousewheel.enabled=!0,!0)}function y(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,v),!0):e.mousewheel.enabled?(b("off"),e.mousewheel.enabled=!1,!0):!1}i("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&y(),e.params.mousewheel.enabled&&S()}),i("destroy",()=>{e.params.cssMode&&S(),e.mousewheel.enabled&&y()}),Object.assign(e.mousewheel,{enable:S,disable:y})}function ns(s,e,t,i){const l=se();return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=s.$el.children(`.${i[n]}`)[0];r||(r=l.createElement("div"),r.className=i[n],s.$el.append(r)),t[n]=r,e[n]=r}}),t}function ie(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function n(o){let w;return o&&(w=I(o),e.params.uniqueNavElements&&typeof o=="string"&&w.length>1&&e.$el.find(o).length===1&&(w=e.$el.find(o))),w}function r(o,w){const h=e.params.navigation;o&&o.length>0&&(o[w?"addClass":"removeClass"](h.disabledClass),o[0]&&o[0].tagName==="BUTTON"&&(o[0].disabled=w),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](h.lockClass))}function a(){if(e.params.loop)return;const{$nextEl:o,$prevEl:w}=e.navigation;r(w,e.isBeginning&&!e.params.rewind),r(o,e.isEnd&&!e.params.rewind)}function d(o){o.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&e.slidePrev()}function u(o){o.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&e.slideNext()}function c(){const o=e.params.navigation;if(e.params.navigation=ns(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(o.nextEl||o.prevEl))return;const w=n(o.nextEl),h=n(o.prevEl);w&&w.length>0&&w.on("click",u),h&&h.length>0&&h.on("click",d),Object.assign(e.navigation,{$nextEl:w,nextEl:w&&w[0],$prevEl:h,prevEl:h&&h[0]}),e.enabled||(w&&w.addClass(o.lockClass),h&&h.addClass(o.lockClass))}function p(){const{$nextEl:o,$prevEl:w}=e.navigation;o&&o.length&&(o.off("click",u),o.removeClass(e.params.navigation.disabledClass)),w&&w.length&&(w.off("click",d),w.removeClass(e.params.navigation.disabledClass))}i("init",()=>{c(),a()}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{p()}),i("enable disable",()=>{const{$nextEl:o,$prevEl:w}=e.navigation;o&&o[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),w&&w[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),i("click",(o,w)=>{const{$nextEl:h,$prevEl:v}=e.navigation,b=w.target;if(e.params.navigation.hideOnClick&&!I(b).is(v)&&!I(b).is(h)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let S;h?S=h.hasClass(e.params.navigation.hiddenClass):v&&(S=v.hasClass(e.params.navigation.hiddenClass)),l(S===!0?"navigationShow":"navigationHide"),h&&h.toggleClass(e.params.navigation.hiddenClass),v&&v.toggleClass(e.params.navigation.hiddenClass)}}),Object.assign(e.navigation,{update:a,init:c,destroy:p})}function Ee(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function X(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let r,a=0;function d(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function u(h,v){const{bulletActiveClass:b}=e.params.pagination;h[v]().addClass(`${b}-${v}`)[v]().addClass(`${b}-${v}-${v}`)}function c(){const h=e.rtl,v=e.params.pagination;if(d())return;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,S=e.pagination.$el;let y;const _=e.params.loop?Math.ceil((b-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),y>b-1-e.loopedSlides*2&&(y-=b-e.loopedSlides*2),y>_-1&&(y-=_),y<0&&e.params.paginationType!=="bullets"&&(y=_+y)):typeof e.snapIndex!="undefined"?y=e.snapIndex:y=e.activeIndex||0,v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const $=e.pagination.bullets;let A,k,L;if(v.dynamicBullets&&(r=$.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),S.css(e.isHorizontal()?"width":"height",`${r*(v.dynamicMainBullets+4)}px`),v.dynamicMainBullets>1&&e.previousIndex!==void 0&&(a+=y-(e.previousIndex-e.loopedSlides||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),A=Math.max(y-a,0),k=A+(Math.min($.length,v.dynamicMainBullets)-1),L=(k+A)/2),$.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(E=>`${v.bulletActiveClass}${E}`).join(" ")),S.length>1)$.each(E=>{const B=I(E),x=B.index();x===y&&B.addClass(v.bulletActiveClass),v.dynamicBullets&&(x>=A&&x<=k&&B.addClass(`${v.bulletActiveClass}-main`),x===A&&u(B,"prev"),x===k&&u(B,"next"))});else{const E=$.eq(y),B=E.index();if(E.addClass(v.bulletActiveClass),v.dynamicBullets){const x=$.eq(A),z=$.eq(k);for(let P=A;P<=k;P+=1)$.eq(P).addClass(`${v.bulletActiveClass}-main`);if(e.params.loop)if(B>=$.length){for(let P=v.dynamicMainBullets;P>=0;P-=1)$.eq($.length-P).addClass(`${v.bulletActiveClass}-main`);$.eq($.length-v.dynamicMainBullets-1).addClass(`${v.bulletActiveClass}-prev`)}else u(x,"prev"),u(z,"next");else u(x,"prev"),u(z,"next")}}if(v.dynamicBullets){const E=Math.min($.length,v.dynamicMainBullets+4),B=(r*E-r)/2-L*r,x=h?"right":"left";$.css(e.isHorizontal()?x:"top",`${B}px`)}}if(v.type==="fraction"&&(S.find(Ee(v.currentClass)).text(v.formatFractionCurrent(y+1)),S.find(Ee(v.totalClass)).text(v.formatFractionTotal(_))),v.type==="progressbar"){let $;v.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const A=(y+1)/_;let k=1,L=1;$==="horizontal"?k=A:L=A,S.find(Ee(v.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${L})`).transition(e.params.speed)}v.type==="custom"&&v.renderCustom?(S.html(v.renderCustom(e,y+1,_)),l("paginationRender",S[0])):l("paginationUpdate",S[0]),e.params.watchOverflow&&e.enabled&&S[e.isLocked?"addClass":"removeClass"](v.lockClass)}function p(){const h=e.params.pagination;if(d())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,b=e.pagination.$el;let S="";if(h.type==="bullets"){let y=e.params.loop?Math.ceil((v-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&y>v&&(y=v);for(let _=0;_<y;_+=1)h.renderBullet?S+=h.renderBullet.call(e,_,h.bulletClass):S+=`<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;b.html(S),e.pagination.bullets=b.find(Ee(h.bulletClass))}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,b.html(S)),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`,b.html(S)),h.type!=="custom"&&l("paginationRender",e.pagination.$el[0])}function o(){e.params.pagination=ns(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let v=I(h.el);v.length!==0&&(e.params.uniqueNavElements&&typeof h.el=="string"&&v.length>1&&(v=e.$el.find(h.el),v.length>1&&(v=v.filter(b=>I(b).parents(".swiper")[0]===e.el))),h.type==="bullets"&&h.clickable&&v.addClass(h.clickableClass),v.addClass(h.modifierClass+h.type),v.addClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(v.addClass(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&v.addClass(h.progressbarOppositeClass),h.clickable&&v.on("click",Ee(h.bulletClass),function(S){S.preventDefault();let y=I(this).index()*e.params.slidesPerGroup;e.params.loop&&(y+=e.loopedSlides),e.slideTo(y)}),Object.assign(e.pagination,{$el:v,el:v[0]}),e.enabled||v.addClass(h.lockClass))}function w(){const h=e.params.pagination;if(d())return;const v=e.pagination.$el;v.removeClass(h.hiddenClass),v.removeClass(h.modifierClass+h.type),v.removeClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(h.bulletActiveClass),h.clickable&&v.off("click",Ee(h.bulletClass))}i("init",()=>{o(),p(),c()}),i("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex=="undefined")&&c()}),i("snapIndexChange",()=>{e.params.loop||c()}),i("slidesLengthChange",()=>{e.params.loop&&(p(),c())}),i("snapGridLengthChange",()=>{e.params.loop||(p(),c())}),i("destroy",()=>{w()}),i("enable disable",()=>{const{$el:h}=e.pagination;h&&h[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),i("lock unlock",()=>{c()}),i("click",(h,v)=>{const b=v.target,{$el:S}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S.length>0&&!I(b).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const y=S.hasClass(e.params.pagination.hiddenClass);l(y===!0?"paginationShow":"paginationHide"),S.toggleClass(e.params.pagination.hiddenClass)}}),Object.assign(e.pagination,{render:p,update:c,init:o,destroy:w})}function ls(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=se();let r=!1,a=null,d=null,u,c,p,o;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function w(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:x,rtlTranslate:z,progress:P}=e,{$dragEl:N,$el:j}=x,U=e.params.scrollbar;let J=c,C=(p-c)*P;z?(C=-C,C>0?(J=c-C,C=0):-C+c>p&&(J=p+C)):C<0?(J=c+C,C=0):C+c>p&&(J=p-C),e.isHorizontal()?(N.transform(`translate3d(${C}px, 0, 0)`),N[0].style.width=`${J}px`):(N.transform(`translate3d(0px, ${C}px, 0)`),N[0].style.height=`${J}px`),U.hide&&(clearTimeout(a),j[0].style.opacity=1,a=setTimeout(()=>{j[0].style.opacity=0,j.transition(400)},1e3))}function h(x){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(x)}function v(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:x}=e,{$dragEl:z,$el:P}=x;z[0].style.width="",z[0].style.height="",p=e.isHorizontal()?P[0].offsetWidth:P[0].offsetHeight,o=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?c=p*o:c=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?z[0].style.width=`${c}px`:z[0].style.height=`${c}px`,o>=1?P[0].style.display="none":P[0].style.display="",e.params.scrollbar.hide&&(P[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&x.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function b(x){return e.isHorizontal()?x.type==="touchstart"||x.type==="touchmove"?x.targetTouches[0].clientX:x.clientX:x.type==="touchstart"||x.type==="touchmove"?x.targetTouches[0].clientY:x.clientY}function S(x){const{scrollbar:z,rtlTranslate:P}=e,{$el:N}=z;let j;j=(b(x)-N.offset()[e.isHorizontal()?"left":"top"]-(u!==null?u:c/2))/(p-c),j=Math.max(Math.min(j,1),0),P&&(j=1-j);const U=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*j;e.updateProgress(U),e.setTranslate(U),e.updateActiveIndex(),e.updateSlidesClasses()}function y(x){const z=e.params.scrollbar,{scrollbar:P,$wrapperEl:N}=e,{$el:j,$dragEl:U}=P;r=!0,u=x.target===U[0]||x.target===U?b(x)-x.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,x.preventDefault(),x.stopPropagation(),N.transition(100),U.transition(100),S(x),clearTimeout(d),j.transition(0),z.hide&&j.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),l("scrollbarDragStart",x)}function _(x){const{scrollbar:z,$wrapperEl:P}=e,{$el:N,$dragEl:j}=z;!r||(x.preventDefault?x.preventDefault():x.returnValue=!1,S(x),P.transition(0),N.transition(0),j.transition(0),l("scrollbarDragMove",x))}function $(x){const z=e.params.scrollbar,{scrollbar:P,$wrapperEl:N}=e,{$el:j}=P;!r||(r=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),N.transition("")),z.hide&&(clearTimeout(d),d=xe(()=>{j.css("opacity",0),j.transition(400)},1e3)),l("scrollbarDragEnd",x),z.snapOnRelease&&e.slideToClosest())}function A(x){const{scrollbar:z,touchEventsTouch:P,touchEventsDesktop:N,params:j,support:U}=e,C=z.$el[0],D=U.passiveListener&&j.passiveListeners?{passive:!1,capture:!1}:!1,G=U.passiveListener&&j.passiveListeners?{passive:!0,capture:!1}:!1;if(!C)return;const Y=x==="on"?"addEventListener":"removeEventListener";U.touch?(C[Y](P.start,y,D),C[Y](P.move,_,D),C[Y](P.end,$,G)):(C[Y](N.start,y,D),n[Y](N.move,_,D),n[Y](N.end,$,G))}function k(){!e.params.scrollbar.el||A("on")}function L(){!e.params.scrollbar.el||A("off")}function E(){const{scrollbar:x,$el:z}=e;e.params.scrollbar=ns(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const P=e.params.scrollbar;if(!P.el)return;let N=I(P.el);e.params.uniqueNavElements&&typeof P.el=="string"&&N.length>1&&z.find(P.el).length===1&&(N=z.find(P.el));let j=N.find(`.${e.params.scrollbar.dragClass}`);j.length===0&&(j=I(`<div class="${e.params.scrollbar.dragClass}"></div>`),N.append(j)),Object.assign(x,{$el:N,el:N[0],$dragEl:j,dragEl:j[0]}),P.draggable&&k(),N&&N[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function B(){L()}i("init",()=>{E(),v(),w()}),i("update resize observerUpdate lock unlock",()=>{v()}),i("setTranslate",()=>{w()}),i("setTransition",(x,z)=>{h(z)}),i("enable disable",()=>{const{$el:x}=e.scrollbar;x&&x[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),i("destroy",()=>{B()}),Object.assign(e.scrollbar,{updateSize:v,setTranslate:w,init:E,destroy:B})}function zr(s){let{swiper:e,extendParams:t,on:i}=s;t({parallax:{enabled:!1}});const l=(a,d)=>{const{rtl:u}=e,c=I(a),p=u?-1:1,o=c.attr("data-swiper-parallax")||"0";let w=c.attr("data-swiper-parallax-x"),h=c.attr("data-swiper-parallax-y");const v=c.attr("data-swiper-parallax-scale"),b=c.attr("data-swiper-parallax-opacity");if(w||h?(w=w||"0",h=h||"0"):e.isHorizontal()?(w=o,h="0"):(h=o,w="0"),w.indexOf("%")>=0?w=`${parseInt(w,10)*d*p}%`:w=`${w*d*p}px`,h.indexOf("%")>=0?h=`${parseInt(h,10)*d}%`:h=`${h*d}px`,typeof b!="undefined"&&b!==null){const S=b-(b-1)*(1-Math.abs(d));c[0].style.opacity=S}if(typeof v=="undefined"||v===null)c.transform(`translate3d(${w}, ${h}, 0px)`);else{const S=v-(v-1)*(1-Math.abs(d));c.transform(`translate3d(${w}, ${h}, 0px) scale(${S})`)}},n=()=>{const{$el:a,slides:d,progress:u,snapGrid:c}=e;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(p=>{l(p,u)}),d.each((p,o)=>{let w=p.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(w+=Math.ceil(o/2)-u*(c.length-1)),w=Math.min(Math.max(w,-1),1),I(p).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(h=>{l(h,w)})})},r=function(a){a===void 0&&(a=e.params.speed);const{$el:d}=e;d.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{const c=I(u);let p=parseInt(c.attr("data-swiper-parallax-duration"),10)||a;a===0&&(p=0),c.transition(p)})};i("beforeInit",()=>{!e.params.parallax.enabled||(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),i("init",()=>{!e.params.parallax.enabled||n()}),i("setTranslate",()=>{!e.params.parallax.enabled||n()}),i("setTransition",(a,d)=>{!e.params.parallax.enabled||r(d)})}function Ir(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=Q();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let r=1,a=!1,d,u,c;const p={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},o={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},w={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let h=1;Object.defineProperty(e.zoom,"scale",{get(){return h},set(C){if(h!==C){const D=p.$imageEl?p.$imageEl[0]:void 0,G=p.$slideEl?p.$slideEl[0]:void 0;l("zoomChange",C,D,G)}h=C}});function v(C){if(C.targetTouches.length<2)return 1;const D=C.targetTouches[0].pageX,G=C.targetTouches[0].pageY,Y=C.targetTouches[1].pageX,Z=C.targetTouches[1].pageY;return Math.sqrt((Y-D)**2+(Z-G)**2)}function b(C){const D=e.support,G=e.params.zoom;if(u=!1,c=!1,!D.gestures){if(C.type!=="touchstart"||C.type==="touchstart"&&C.targetTouches.length<2)return;u=!0,p.scaleStart=v(C)}if((!p.$slideEl||!p.$slideEl.length)&&(p.$slideEl=I(C.target).closest(`.${e.params.slideClass}`),p.$slideEl.length===0&&(p.$slideEl=e.slides.eq(e.activeIndex)),p.$imageEl=p.$slideEl.find(`.${G.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${G.containerClass}`),p.maxRatio=p.$imageWrapEl.attr("data-swiper-zoom")||G.maxRatio,p.$imageWrapEl.length===0)){p.$imageEl=void 0;return}p.$imageEl&&p.$imageEl.transition(0),a=!0}function S(C){const D=e.support,G=e.params.zoom,Y=e.zoom;if(!D.gestures){if(C.type!=="touchmove"||C.type==="touchmove"&&C.targetTouches.length<2)return;c=!0,p.scaleMove=v(C)}if(!p.$imageEl||p.$imageEl.length===0){C.type==="gesturechange"&&b(C);return}D.gestures?Y.scale=C.scale*r:Y.scale=p.scaleMove/p.scaleStart*r,Y.scale>p.maxRatio&&(Y.scale=p.maxRatio-1+(Y.scale-p.maxRatio+1)**.5),Y.scale<G.minRatio&&(Y.scale=G.minRatio+1-(G.minRatio-Y.scale+1)**.5),p.$imageEl.transform(`translate3d(0,0,0) scale(${Y.scale})`)}function y(C){const D=e.device,G=e.support,Y=e.params.zoom,Z=e.zoom;if(!G.gestures){if(!u||!c||C.type!=="touchend"||C.type==="touchend"&&C.changedTouches.length<2&&!D.android)return;u=!1,c=!1}!p.$imageEl||p.$imageEl.length===0||(Z.scale=Math.max(Math.min(Z.scale,p.maxRatio),Y.minRatio),p.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${Z.scale})`),r=Z.scale,a=!1,Z.scale===1&&(p.$slideEl=void 0))}function _(C){const D=e.device;!p.$imageEl||p.$imageEl.length===0||o.isTouched||(D.android&&C.cancelable&&C.preventDefault(),o.isTouched=!0,o.touchesStart.x=C.type==="touchstart"?C.targetTouches[0].pageX:C.pageX,o.touchesStart.y=C.type==="touchstart"?C.targetTouches[0].pageY:C.pageY)}function $(C){const D=e.zoom;if(!p.$imageEl||p.$imageEl.length===0||(e.allowClick=!1,!o.isTouched||!p.$slideEl))return;o.isMoved||(o.width=p.$imageEl[0].offsetWidth,o.height=p.$imageEl[0].offsetHeight,o.startX=ss(p.$imageWrapEl[0],"x")||0,o.startY=ss(p.$imageWrapEl[0],"y")||0,p.slideWidth=p.$slideEl[0].offsetWidth,p.slideHeight=p.$slideEl[0].offsetHeight,p.$imageWrapEl.transition(0));const G=o.width*D.scale,Y=o.height*D.scale;if(!(G<p.slideWidth&&Y<p.slideHeight)){if(o.minX=Math.min(p.slideWidth/2-G/2,0),o.maxX=-o.minX,o.minY=Math.min(p.slideHeight/2-Y/2,0),o.maxY=-o.minY,o.touchesCurrent.x=C.type==="touchmove"?C.targetTouches[0].pageX:C.pageX,o.touchesCurrent.y=C.type==="touchmove"?C.targetTouches[0].pageY:C.pageY,!o.isMoved&&!a){if(e.isHorizontal()&&(Math.floor(o.minX)===Math.floor(o.startX)&&o.touchesCurrent.x<o.touchesStart.x||Math.floor(o.maxX)===Math.floor(o.startX)&&o.touchesCurrent.x>o.touchesStart.x)){o.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(o.minY)===Math.floor(o.startY)&&o.touchesCurrent.y<o.touchesStart.y||Math.floor(o.maxY)===Math.floor(o.startY)&&o.touchesCurrent.y>o.touchesStart.y)){o.isTouched=!1;return}}C.cancelable&&C.preventDefault(),C.stopPropagation(),o.isMoved=!0,o.currentX=o.touchesCurrent.x-o.touchesStart.x+o.startX,o.currentY=o.touchesCurrent.y-o.touchesStart.y+o.startY,o.currentX<o.minX&&(o.currentX=o.minX+1-(o.minX-o.currentX+1)**.8),o.currentX>o.maxX&&(o.currentX=o.maxX-1+(o.currentX-o.maxX+1)**.8),o.currentY<o.minY&&(o.currentY=o.minY+1-(o.minY-o.currentY+1)**.8),o.currentY>o.maxY&&(o.currentY=o.maxY-1+(o.currentY-o.maxY+1)**.8),w.prevPositionX||(w.prevPositionX=o.touchesCurrent.x),w.prevPositionY||(w.prevPositionY=o.touchesCurrent.y),w.prevTime||(w.prevTime=Date.now()),w.x=(o.touchesCurrent.x-w.prevPositionX)/(Date.now()-w.prevTime)/2,w.y=(o.touchesCurrent.y-w.prevPositionY)/(Date.now()-w.prevTime)/2,Math.abs(o.touchesCurrent.x-w.prevPositionX)<2&&(w.x=0),Math.abs(o.touchesCurrent.y-w.prevPositionY)<2&&(w.y=0),w.prevPositionX=o.touchesCurrent.x,w.prevPositionY=o.touchesCurrent.y,w.prevTime=Date.now(),p.$imageWrapEl.transform(`translate3d(${o.currentX}px, ${o.currentY}px,0)`)}}function A(){const C=e.zoom;if(!p.$imageEl||p.$imageEl.length===0)return;if(!o.isTouched||!o.isMoved){o.isTouched=!1,o.isMoved=!1;return}o.isTouched=!1,o.isMoved=!1;let D=300,G=300;const Y=w.x*D,Z=o.currentX+Y,ye=w.y*G,Te=o.currentY+ye;w.x!==0&&(D=Math.abs((Z-o.currentX)/w.x)),w.y!==0&&(G=Math.abs((Te-o.currentY)/w.y));const Ae=Math.max(D,G);o.currentX=Z,o.currentY=Te;const Le=o.width*C.scale,he=o.height*C.scale;o.minX=Math.min(p.slideWidth/2-Le/2,0),o.maxX=-o.minX,o.minY=Math.min(p.slideHeight/2-he/2,0),o.maxY=-o.minY,o.currentX=Math.max(Math.min(o.currentX,o.maxX),o.minX),o.currentY=Math.max(Math.min(o.currentY,o.maxY),o.minY),p.$imageWrapEl.transition(Ae).transform(`translate3d(${o.currentX}px, ${o.currentY}px,0)`)}function k(){const C=e.zoom;p.$slideEl&&e.previousIndex!==e.activeIndex&&(p.$imageEl&&p.$imageEl.transform("translate3d(0,0,0) scale(1)"),p.$imageWrapEl&&p.$imageWrapEl.transform("translate3d(0,0,0)"),C.scale=1,r=1,p.$slideEl=void 0,p.$imageEl=void 0,p.$imageWrapEl=void 0)}function L(C){const D=e.zoom,G=e.params.zoom;if(p.$slideEl||(C&&C.target&&(p.$slideEl=I(C.target).closest(`.${e.params.slideClass}`)),p.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?p.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):p.$slideEl=e.slides.eq(e.activeIndex)),p.$imageEl=p.$slideEl.find(`.${G.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${G.containerClass}`)),!p.$imageEl||p.$imageEl.length===0||!p.$imageWrapEl||p.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),p.$slideEl.addClass(`${G.zoomedSlideClass}`);let Y,Z,ye,Te,Ae,Le,he,$e,os,ds,ps,cs,Ne,je,We,Fe,qe,Ye;typeof o.touchesStart.x=="undefined"&&C?(Y=C.type==="touchend"?C.changedTouches[0].pageX:C.pageX,Z=C.type==="touchend"?C.changedTouches[0].pageY:C.pageY):(Y=o.touchesStart.x,Z=o.touchesStart.y),D.scale=p.$imageWrapEl.attr("data-swiper-zoom")||G.maxRatio,r=p.$imageWrapEl.attr("data-swiper-zoom")||G.maxRatio,C?(qe=p.$slideEl[0].offsetWidth,Ye=p.$slideEl[0].offsetHeight,ye=p.$slideEl.offset().left+n.scrollX,Te=p.$slideEl.offset().top+n.scrollY,Ae=ye+qe/2-Y,Le=Te+Ye/2-Z,os=p.$imageEl[0].offsetWidth,ds=p.$imageEl[0].offsetHeight,ps=os*D.scale,cs=ds*D.scale,Ne=Math.min(qe/2-ps/2,0),je=Math.min(Ye/2-cs/2,0),We=-Ne,Fe=-je,he=Ae*D.scale,$e=Le*D.scale,he<Ne&&(he=Ne),he>We&&(he=We),$e<je&&($e=je),$e>Fe&&($e=Fe)):(he=0,$e=0),p.$imageWrapEl.transition(300).transform(`translate3d(${he}px, ${$e}px,0)`),p.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${D.scale})`)}function E(){const C=e.zoom,D=e.params.zoom;p.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?p.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):p.$slideEl=e.slides.eq(e.activeIndex),p.$imageEl=p.$slideEl.find(`.${D.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${D.containerClass}`)),!(!p.$imageEl||p.$imageEl.length===0||!p.$imageWrapEl||p.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),C.scale=1,r=1,p.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),p.$slideEl.removeClass(`${D.zoomedSlideClass}`),p.$slideEl=void 0)}function B(C){const D=e.zoom;D.scale&&D.scale!==1?E():L(C)}function x(){const C=e.support,D=e.touchEvents.start==="touchstart"&&C.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,G=C.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:D,activeListenerWithCapture:G}}function z(){return`.${e.params.slideClass}`}function P(C){const{passiveListener:D}=x(),G=z();e.$wrapperEl[C]("gesturestart",G,b,D),e.$wrapperEl[C]("gesturechange",G,S,D),e.$wrapperEl[C]("gestureend",G,y,D)}function N(){d||(d=!0,P("on"))}function j(){!d||(d=!1,P("off"))}function U(){const C=e.zoom;if(C.enabled)return;C.enabled=!0;const D=e.support,{passiveListener:G,activeListenerWithCapture:Y}=x(),Z=z();D.gestures?(e.$wrapperEl.on(e.touchEvents.start,N,G),e.$wrapperEl.on(e.touchEvents.end,j,G)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,Z,b,G),e.$wrapperEl.on(e.touchEvents.move,Z,S,Y),e.$wrapperEl.on(e.touchEvents.end,Z,y,G),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,Z,y,G)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,$,Y)}function J(){const C=e.zoom;if(!C.enabled)return;const D=e.support;C.enabled=!1;const{passiveListener:G,activeListenerWithCapture:Y}=x(),Z=z();D.gestures?(e.$wrapperEl.off(e.touchEvents.start,N,G),e.$wrapperEl.off(e.touchEvents.end,j,G)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,Z,b,G),e.$wrapperEl.off(e.touchEvents.move,Z,S,Y),e.$wrapperEl.off(e.touchEvents.end,Z,y,G),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,Z,y,G)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,$,Y)}i("init",()=>{e.params.zoom.enabled&&U()}),i("destroy",()=>{J()}),i("touchStart",(C,D)=>{!e.zoom.enabled||_(D)}),i("touchEnd",(C,D)=>{!e.zoom.enabled||A()}),i("doubleTap",(C,D)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&B(D)}),i("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&k()}),i("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&k()}),Object.assign(e.zoom,{enable:U,disable:J,in:L,out:E,toggle:B})}function Or(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let n=!1,r=!1;function a(c,p){p===void 0&&(p=!0);const o=e.params.lazy;if(typeof c=="undefined"||e.slides.length===0)return;const h=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${c}"]`):e.slides.eq(c),v=h.find(`.${o.elementClass}:not(.${o.loadedClass}):not(.${o.loadingClass})`);h.hasClass(o.elementClass)&&!h.hasClass(o.loadedClass)&&!h.hasClass(o.loadingClass)&&v.push(h[0]),v.length!==0&&v.each(b=>{const S=I(b);S.addClass(o.loadingClass);const y=S.attr("data-background"),_=S.attr("data-src"),$=S.attr("data-srcset"),A=S.attr("data-sizes"),k=S.parent("picture");e.loadImage(S[0],_||y,$,A,!1,()=>{if(!(typeof e=="undefined"||e===null||!e||e&&!e.params||e.destroyed)){if(y?(S.css("background-image",`url("${y}")`),S.removeAttr("data-background")):($&&(S.attr("srcset",$),S.removeAttr("data-srcset")),A&&(S.attr("sizes",A),S.removeAttr("data-sizes")),k.length&&k.children("source").each(L=>{const E=I(L);E.attr("data-srcset")&&(E.attr("srcset",E.attr("data-srcset")),E.removeAttr("data-srcset"))}),_&&(S.attr("src",_),S.removeAttr("data-src"))),S.addClass(o.loadedClass).removeClass(o.loadingClass),h.find(`.${o.preloaderClass}`).remove(),e.params.loop&&p){const L=h.attr("data-swiper-slide-index");if(h.hasClass(e.params.slideDuplicateClass)){const E=e.$wrapperEl.children(`[data-swiper-slide-index="${L}"]:not(.${e.params.slideDuplicateClass})`);a(E.index(),!1)}else{const E=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${L}"]`);a(E.index(),!1)}}l("lazyImageReady",h[0],S[0]),e.params.autoHeight&&e.updateAutoHeight()}}),l("lazyImageLoad",h[0],S[0])})}function d(){const{$wrapperEl:c,params:p,slides:o,activeIndex:w}=e,h=e.virtual&&p.virtual.enabled,v=p.lazy;let b=p.slidesPerView;b==="auto"&&(b=0);function S(_){if(h){if(c.children(`.${p.slideClass}[data-swiper-slide-index="${_}"]`).length)return!0}else if(o[_])return!0;return!1}function y(_){return h?I(_).attr("data-swiper-slide-index"):I(_).index()}if(r||(r=!0),e.params.watchSlidesProgress)c.children(`.${p.slideVisibleClass}`).each(_=>{const $=h?I(_).attr("data-swiper-slide-index"):I(_).index();a($)});else if(b>1)for(let _=w;_<w+b;_+=1)S(_)&&a(_);else a(w);if(v.loadPrevNext)if(b>1||v.loadPrevNextAmount&&v.loadPrevNextAmount>1){const _=v.loadPrevNextAmount,$=b,A=Math.min(w+$+Math.max(_,$),o.length),k=Math.max(w-Math.max($,_),0);for(let L=w+b;L<A;L+=1)S(L)&&a(L);for(let L=k;L<w;L+=1)S(L)&&a(L)}else{const _=c.children(`.${p.slideNextClass}`);_.length>0&&a(y(_));const $=c.children(`.${p.slidePrevClass}`);$.length>0&&a(y($))}}function u(){const c=Q();if(!e||e.destroyed)return;const p=e.params.lazy.scrollingElement?I(e.params.lazy.scrollingElement):I(c),o=p[0]===c,w=o?c.innerWidth:p[0].offsetWidth,h=o?c.innerHeight:p[0].offsetHeight,v=e.$el.offset(),{rtlTranslate:b}=e;let S=!1;b&&(v.left-=e.$el[0].scrollLeft);const y=[[v.left,v.top],[v.left+e.width,v.top],[v.left,v.top+e.height],[v.left+e.width,v.top+e.height]];for(let $=0;$<y.length;$+=1){const A=y[$];if(A[0]>=0&&A[0]<=w&&A[1]>=0&&A[1]<=h){if(A[0]===0&&A[1]===0)continue;S=!0}}const _=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;S?(d(),p.off("scroll",u,_)):n||(n=!0,p.on("scroll",u,_))}i("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),i("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?u():d())}),i("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&d()}),i("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?u():d())}),i("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!r)&&(e.params.lazy.checkInView?u():d())}),i("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?u():d())}),i("slideChange",()=>{const{lazy:c,cssMode:p,watchSlidesProgress:o,touchReleaseOnEdges:w,resistanceRatio:h}=e.params;c.enabled&&(p||o&&(w||h===0))&&d()}),Object.assign(e.lazy,{load:d,loadInSlide:a})}function Ar(s){let{swiper:e,extendParams:t,on:i,emit:l}=s,n;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function r(){const b=e.slides.eq(e.activeIndex);let S=e.params.autoplay.delay;b.attr("data-swiper-autoplay")&&(S=b.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=xe(()=>{let y;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),y=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?d():(y=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),l("autoplay")):(y=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.params.loop?(e.loopFix(),y=e.slideNext(e.params.speed,!0,!0),l("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?d():(y=e.slideTo(0,e.params.speed,!0,!0),l("autoplay")):(y=e.slideNext(e.params.speed,!0,!0),l("autoplay")),(e.params.cssMode&&e.autoplay.running||y===!1)&&r()},S)}function a(){return typeof n!="undefined"||e.autoplay.running?!1:(e.autoplay.running=!0,l("autoplayStart"),r(),!0)}function d(){return!e.autoplay.running||typeof n=="undefined"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,l("autoplayStop"),!0)}function u(b){!e.autoplay.running||e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,b===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,r()):["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].addEventListener(S,p)}))}function c(){const b=se();b.visibilityState==="hidden"&&e.autoplay.running&&u(),b.visibilityState==="visible"&&e.autoplay.paused&&(r(),e.autoplay.paused=!1)}function p(b){!e||e.destroyed||!e.$wrapperEl||b.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].removeEventListener(S,p)}),e.autoplay.paused=!1,e.autoplay.running?r():d())}function o(){e.params.autoplay.disableOnInteraction?d():(l("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(b=>{e.$wrapperEl[0].removeEventListener(b,p)})}function w(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,l("autoplayResume"),r())}function h(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",o),e.$el.on("mouseleave",w))}function v(){e.$el.off("mouseenter",o),e.$el.off("mouseleave",w)}i("init",()=>{e.params.autoplay.enabled&&(a(),se().addEventListener("visibilitychange",c),h())}),i("beforeTransitionStart",(b,S,y)=>{e.autoplay.running&&(y||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(S):d())}),i("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?d():u())}),i("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&r()}),i("destroy",()=>{v(),e.autoplay.running&&d(),se().removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:u,run:r,start:a,stop:d})}function Lr(s){let{swiper:e,extendParams:t,on:i}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let l=!1,n=!1;e.thumbs={swiper:null};function r(){const u=e.thumbs.swiper;if(!u)return;const c=u.clickedIndex,p=u.clickedSlide;if(p&&I(p).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof c=="undefined"||c===null)return;let o;if(u.params.loop?o=parseInt(I(u.clickedSlide).attr("data-swiper-slide-index"),10):o=c,e.params.loop){let w=e.activeIndex;e.slides.eq(w).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,w=e.activeIndex);const h=e.slides.eq(w).prevAll(`[data-swiper-slide-index="${o}"]`).eq(0).index(),v=e.slides.eq(w).nextAll(`[data-swiper-slide-index="${o}"]`).eq(0).index();typeof h=="undefined"?o=v:typeof v=="undefined"?o=h:v-w<w-h?o=v:o=h}e.slideTo(o)}function a(){const{thumbs:u}=e.params;if(l)return!1;l=!0;const c=e.constructor;if(u.swiper instanceof c)e.thumbs.swiper=u.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(Pe(u.swiper)){const p=Object.assign({},u.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(p),n=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function d(u){const c=e.thumbs.swiper;if(!c)return;const p=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView,o=e.params.thumbs.autoScrollOffset,w=o&&!c.params.loop;if(e.realIndex!==c.realIndex||w){let b=c.activeIndex,S,y;if(c.params.loop){c.slides.eq(b).hasClass(c.params.slideDuplicateClass)&&(c.loopFix(),c._clientLeft=c.$wrapperEl[0].clientLeft,b=c.activeIndex);const _=c.slides.eq(b).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),$=c.slides.eq(b).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof _=="undefined"?S=$:typeof $=="undefined"?S=_:$-b===b-_?S=c.params.slidesPerGroup>1?$:b:$-b<b-_?S=$:S=_,y=e.activeIndex>e.previousIndex?"next":"prev"}else S=e.realIndex,y=S>e.previousIndex?"next":"prev";w&&(S+=y==="next"?o:-1*o),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(S)<0&&(c.params.centeredSlides?S>b?S=S-Math.floor(p/2)+1:S=S+Math.floor(p/2)-1:S>b&&c.params.slidesPerGroup,c.slideTo(S,u?0:void 0))}let h=1;const v=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(h=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),c.slides.removeClass(v),c.params.loop||c.params.virtual&&c.params.virtual.enabled)for(let b=0;b<h;b+=1)c.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+b}"]`).addClass(v);else for(let b=0;b<h;b+=1)c.slides.eq(e.realIndex+b).addClass(v)}i("beforeInit",()=>{const{thumbs:u}=e.params;!u||!u.swiper||(a(),d(!0))}),i("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||d()}),i("setTransition",(u,c)=>{const p=e.thumbs.swiper;!p||p.setTransition(c)}),i("beforeDestroy",()=>{const u=e.thumbs.swiper;!u||n&&u&&u.destroy()}),Object.assign(e.thumbs,{init:a,update:d})}function Ns(s){let{swiper:e,extendParams:t,emit:i,once:l}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function r(){const{touchEventsData:d,touches:u}=e;d.velocities.length===0&&d.velocities.push({position:u[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:u[e.isHorizontal()?"currentX":"currentY"],time:pe()})}function a(d){let{currentPos:u}=d;const{params:c,$wrapperEl:p,rtlTranslate:o,snapGrid:w,touchEventsData:h}=e,b=pe()-h.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<w.length?e.slideTo(w.length-1):e.slideTo(e.slides.length-1);return}if(c.freeMode.momentum){if(h.velocities.length>1){const E=h.velocities.pop(),B=h.velocities.pop(),x=E.position-B.position,z=E.time-B.time;e.velocity=x/z,e.velocity/=2,Math.abs(e.velocity)<c.freeMode.minimumVelocity&&(e.velocity=0),(z>150||pe()-E.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=c.freeMode.momentumVelocityRatio,h.velocities.length=0;let S=1e3*c.freeMode.momentumRatio;const y=e.velocity*S;let _=e.translate+y;o&&(_=-_);let $=!1,A;const k=Math.abs(e.velocity)*20*c.freeMode.momentumBounceRatio;let L;if(_<e.maxTranslate())c.freeMode.momentumBounce?(_+e.maxTranslate()<-k&&(_=e.maxTranslate()-k),A=e.maxTranslate(),$=!0,h.allowMomentumBounce=!0):_=e.maxTranslate(),c.loop&&c.centeredSlides&&(L=!0);else if(_>e.minTranslate())c.freeMode.momentumBounce?(_-e.minTranslate()>k&&(_=e.minTranslate()+k),A=e.minTranslate(),$=!0,h.allowMomentumBounce=!0):_=e.minTranslate(),c.loop&&c.centeredSlides&&(L=!0);else if(c.freeMode.sticky){let E;for(let B=0;B<w.length;B+=1)if(w[B]>-_){E=B;break}Math.abs(w[E]-_)<Math.abs(w[E-1]-_)||e.swipeDirection==="next"?_=w[E]:_=w[E-1],_=-_}if(L&&l("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(o?S=Math.abs((-_-e.translate)/e.velocity):S=Math.abs((_-e.translate)/e.velocity),c.freeMode.sticky){const E=Math.abs((o?-_:_)-e.translate),B=e.slidesSizesGrid[e.activeIndex];E<B?S=c.speed:E<2*B?S=c.speed*1.5:S=c.speed*2.5}}else if(c.freeMode.sticky){e.slideToClosest();return}c.freeMode.momentumBounce&&$?(e.updateProgress(A),e.setTransition(S),e.setTranslate(_),e.transitionStart(!0,e.swipeDirection),e.animating=!0,p.transitionEnd(()=>{!e||e.destroyed||!h.allowMomentumBounce||(i("momentumBounce"),e.setTransition(c.speed),setTimeout(()=>{e.setTranslate(A),p.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(_),e.setTransition(S),e.setTranslate(_),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,p.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(_),e.updateActiveIndex(),e.updateSlidesClasses()}else if(c.freeMode.sticky){e.slideToClosest();return}else c.freeMode&&i("_freeModeNoMomentumRelease");(!c.freeMode.momentum||b>=c.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:r,onTouchEnd:a}})}function js(s){let{swiper:e,extendParams:t}=s;t({grid:{rows:1,fill:"column"}});let i,l,n;const r=u=>{const{slidesPerView:c}=e.params,{rows:p,fill:o}=e.params.grid;l=i/p,n=Math.floor(u/p),Math.floor(u/p)===u/p?i=u:i=Math.ceil(u/p)*p,c!=="auto"&&o==="row"&&(i=Math.max(i,c*p))},a=(u,c,p,o)=>{const{slidesPerGroup:w,spaceBetween:h}=e.params,{rows:v,fill:b}=e.params.grid;let S,y,_;if(b==="row"&&w>1){const $=Math.floor(u/(w*v)),A=u-v*w*$,k=$===0?w:Math.min(Math.ceil((p-$*v*w)/v),w);_=Math.floor(A/k),y=A-_*k+$*w,S=y+_*i/v,c.css({"-webkit-order":S,order:S})}else b==="column"?(y=Math.floor(u/v),_=u-y*v,(y>n||y===n&&_===v-1)&&(_+=1,_>=v&&(_=0,y+=1))):(_=Math.floor(u/l),y=u-_*l);c.css(o("margin-top"),_!==0?h&&`${h}px`:"")},d=(u,c,p)=>{const{spaceBetween:o,centeredSlides:w,roundLengths:h}=e.params,{rows:v}=e.params.grid;if(e.virtualSize=(u+o)*i,e.virtualSize=Math.ceil(e.virtualSize/v)-o,e.$wrapperEl.css({[p("width")]:`${e.virtualSize+o}px`}),w){c.splice(0,c.length);const b=[];for(let S=0;S<c.length;S+=1){let y=c[S];h&&(y=Math.floor(y)),c[S]<e.virtualSize+c[0]&&b.push(y)}c.push(...b)}};e.grid={initSlides:r,updateSlide:a,updateWrapperSize:d}}function Oe(s){const{effect:e,swiper:t,on:i,setTranslate:l,setTransition:n,overwriteParams:r,perspective:a}=s;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),i("setTranslate",()=>{t.params.effect===e&&l()}),i("setTransition",(u,c)=>{t.params.effect===e&&n(c)});let d;i("virtualUpdate",()=>{t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides.length&&(l(),d=!1)})})}function He(s,e){return s.transformEl?e.find(s.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function as(s){let{swiper:e,duration:t,transformEl:i,allSlides:l}=s;const{slides:n,activeIndex:r,$wrapperEl:a}=e;if(e.params.virtualTranslate&&t!==0){let d=!1,u;l?u=i?n.find(i):n:u=i?n.eq(r).find(i):n.eq(r),u.transitionEnd(()=>{if(d||!e||e.destroyed)return;d=!0,e.animating=!1;const c=["webkitTransitionEnd","transitionend"];for(let p=0;p<c.length;p+=1)a.trigger(c[p])})}}function Nr(s){let{swiper:e,extendParams:t,on:i}=s;t({fadeEffect:{crossFade:!1,transformEl:null}}),Oe({effect:"fade",swiper:e,on:i,setTranslate:()=>{const{slides:r}=e,a=e.params.fadeEffect;for(let d=0;d<r.length;d+=1){const u=e.slides.eq(d);let p=-u[0].swiperSlideOffset;e.params.virtualTranslate||(p-=e.translate);let o=0;e.isHorizontal()||(o=p,p=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(u[0].progress),0):1+Math.min(Math.max(u[0].progress,-1),0);He(a,u).css({opacity:w}).transform(`translate3d(${p}px, ${o}px, 0px)`)}},setTransition:r=>{const{transformEl:a}=e.params.fadeEffect;(a?e.slides.find(a):e.slides).transition(r),as({swiper:e,duration:r,transformEl:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function jr(s){let{swiper:e,extendParams:t,on:i}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),Oe({effect:"cube",swiper:e,on:i,setTranslate:()=>{const{$el:r,$wrapperEl:a,slides:d,width:u,height:c,rtlTranslate:p,size:o,browser:w}=e,h=e.params.cubeEffect,v=e.isHorizontal(),b=e.virtual&&e.params.virtual.enabled;let S=0,y;h.shadow&&(v?(y=a.find(".swiper-cube-shadow"),y.length===0&&(y=I('<div class="swiper-cube-shadow"></div>'),a.append(y)),y.css({height:`${u}px`})):(y=r.find(".swiper-cube-shadow"),y.length===0&&(y=I('<div class="swiper-cube-shadow"></div>'),r.append(y))));for(let $=0;$<d.length;$+=1){const A=d.eq($);let k=$;b&&(k=parseInt(A.attr("data-swiper-slide-index"),10));let L=k*90,E=Math.floor(L/360);p&&(L=-L,E=Math.floor(-L/360));const B=Math.max(Math.min(A[0].progress,1),-1);let x=0,z=0,P=0;k%4===0?(x=-E*4*o,P=0):(k-1)%4===0?(x=0,P=-E*4*o):(k-2)%4===0?(x=o+E*4*o,P=o):(k-3)%4===0&&(x=-o,P=3*o+o*4*E),p&&(x=-x),v||(z=x,x=0);const N=`rotateX(${v?0:-L}deg) rotateY(${v?L:0}deg) translate3d(${x}px, ${z}px, ${P}px)`;if(B<=1&&B>-1&&(S=k*90+B*90,p&&(S=-k*90-B*90)),A.transform(N),h.slideShadows){let j=v?A.find(".swiper-slide-shadow-left"):A.find(".swiper-slide-shadow-top"),U=v?A.find(".swiper-slide-shadow-right"):A.find(".swiper-slide-shadow-bottom");j.length===0&&(j=I(`<div class="swiper-slide-shadow-${v?"left":"top"}"></div>`),A.append(j)),U.length===0&&(U=I(`<div class="swiper-slide-shadow-${v?"right":"bottom"}"></div>`),A.append(U)),j.length&&(j[0].style.opacity=Math.max(-B,0)),U.length&&(U[0].style.opacity=Math.max(B,0))}}if(a.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),h.shadow)if(v)y.transform(`translate3d(0px, ${u/2+h.shadowOffset}px, ${-u/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);else{const $=Math.abs(S)-Math.floor(Math.abs(S)/90)*90,A=1.5-(Math.sin($*2*Math.PI/360)/2+Math.cos($*2*Math.PI/360)/2),k=h.shadowScale,L=h.shadowScale/A,E=h.shadowOffset;y.transform(`scale3d(${k}, 1, ${L}) translate3d(0px, ${c/2+E}px, ${-c/2/L}px) rotateX(-90deg)`)}const _=w.isSafari||w.isWebView?-o/2:0;a.transform(`translate3d(0px,0,${_}px) rotateX(${e.isHorizontal()?0:S}deg) rotateY(${e.isHorizontal()?-S:0}deg)`)},setTransition:r=>{const{$el:a,slides:d}=e;d.transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r),e.params.cubeEffect.shadow&&!e.isHorizontal()&&a.find(".swiper-cube-shadow").transition(r)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ze(s,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}`,l=s.transformEl?e.find(s.transformEl):e;let n=l.children(`.${i}`);return n.length||(n=I(`<div class="swiper-slide-shadow${t?`-${t}`:""}"></div>`),l.append(n)),n}function Br(s){let{swiper:e,extendParams:t,on:i}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),Oe({effect:"flip",swiper:e,on:i,setTranslate:()=>{const{slides:r,rtlTranslate:a}=e,d=e.params.flipEffect;for(let u=0;u<r.length;u+=1){const c=r.eq(u);let p=c[0].progress;e.params.flipEffect.limitRotation&&(p=Math.max(Math.min(c[0].progress,1),-1));const o=c[0].swiperSlideOffset;let h=-180*p,v=0,b=e.params.cssMode?-o-e.translate:-o,S=0;if(e.isHorizontal()?a&&(h=-h):(S=b,b=0,v=-h,h=0),c[0].style.zIndex=-Math.abs(Math.round(p))+r.length,d.slideShadows){let $=e.isHorizontal()?c.find(".swiper-slide-shadow-left"):c.find(".swiper-slide-shadow-top"),A=e.isHorizontal()?c.find(".swiper-slide-shadow-right"):c.find(".swiper-slide-shadow-bottom");$.length===0&&($=ze(d,c,e.isHorizontal()?"left":"top")),A.length===0&&(A=ze(d,c,e.isHorizontal()?"right":"bottom")),$.length&&($[0].style.opacity=Math.max(-p,0)),A.length&&(A[0].style.opacity=Math.max(p,0))}const y=`translate3d(${b}px, ${S}px, 0px) rotateX(${v}deg) rotateY(${h}deg)`;He(d,c).transform(y)}},setTransition:r=>{const{transformEl:a}=e.params.flipEffect;(a?e.slides.find(a):e.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r),as({swiper:e,duration:r,transformEl:a})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Dr(s){let{swiper:e,extendParams:t,on:i}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Oe({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{const{width:r,height:a,slides:d,slidesSizesGrid:u}=e,c=e.params.coverflowEffect,p=e.isHorizontal(),o=e.translate,w=p?-o+r/2:-o+a/2,h=p?c.rotate:-c.rotate,v=c.depth;for(let b=0,S=d.length;b<S;b+=1){const y=d.eq(b),_=u[b],$=y[0].swiperSlideOffset,A=(w-$-_/2)/_,k=typeof c.modifier=="function"?c.modifier(A):A*c.modifier;let L=p?h*k:0,E=p?0:h*k,B=-v*Math.abs(k),x=c.stretch;typeof x=="string"&&x.indexOf("%")!==-1&&(x=parseFloat(c.stretch)/100*_);let z=p?0:x*k,P=p?x*k:0,N=1-(1-c.scale)*Math.abs(k);Math.abs(P)<.001&&(P=0),Math.abs(z)<.001&&(z=0),Math.abs(B)<.001&&(B=0),Math.abs(L)<.001&&(L=0),Math.abs(E)<.001&&(E=0),Math.abs(N)<.001&&(N=0);const j=`translate3d(${P}px,${z}px,${B}px)  rotateX(${E}deg) rotateY(${L}deg) scale(${N})`;if(He(c,y).transform(j),y[0].style.zIndex=-Math.abs(Math.round(k))+1,c.slideShadows){let J=p?y.find(".swiper-slide-shadow-left"):y.find(".swiper-slide-shadow-top"),C=p?y.find(".swiper-slide-shadow-right"):y.find(".swiper-slide-shadow-bottom");J.length===0&&(J=ze(c,y,p?"left":"top")),C.length===0&&(C=ze(c,y,p?"right":"bottom")),J.length&&(J[0].style.opacity=k>0?k:0),C.length&&(C[0].style.opacity=-k>0?-k:0)}}},setTransition:r=>{const{transformEl:a}=e.params.coverflowEffect;(a?e.slides.find(a):e.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Gr(s){let{swiper:e,extendParams:t,on:i}=s;t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const l=a=>typeof a=="string"?a:`${a}px`;Oe({effect:"creative",swiper:e,on:i,setTranslate:()=>{const{slides:a,$wrapperEl:d,slidesSizesGrid:u}=e,c=e.params.creativeEffect,{progressMultiplier:p}=c,o=e.params.centeredSlides;if(o){const w=u[0]/2-e.params.slidesOffsetBefore||0;d.transform(`translateX(calc(50% - ${w}px))`)}for(let w=0;w<a.length;w+=1){const h=a.eq(w),v=h[0].progress,b=Math.min(Math.max(h[0].progress,-c.limitProgress),c.limitProgress);let S=b;o||(S=Math.min(Math.max(h[0].originalProgress,-c.limitProgress),c.limitProgress));const y=h[0].swiperSlideOffset,_=[e.params.cssMode?-y-e.translate:-y,0,0],$=[0,0,0];let A=!1;e.isHorizontal()||(_[1]=_[0],_[0]=0);let k={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(k=c.next,A=!0):b>0&&(k=c.prev,A=!0),_.forEach((N,j)=>{_[j]=`calc(${N}px + (${l(k.translate[j])} * ${Math.abs(b*p)}))`}),$.forEach((N,j)=>{$[j]=k.rotate[j]*Math.abs(b*p)}),h[0].style.zIndex=-Math.abs(Math.round(v))+a.length;const L=_.join(", "),E=`rotateX(${$[0]}deg) rotateY(${$[1]}deg) rotateZ(${$[2]}deg)`,B=S<0?`scale(${1+(1-k.scale)*S*p})`:`scale(${1-(1-k.scale)*S*p})`,x=S<0?1+(1-k.opacity)*S*p:1-(1-k.opacity)*S*p,z=`translate3d(${L}) ${E} ${B}`;if(A&&k.shadow||!A){let N=h.children(".swiper-slide-shadow");if(N.length===0&&k.shadow&&(N=ze(c,h)),N.length){const j=c.shadowPerProgress?b*(1/c.limitProgress):b;N[0].style.opacity=Math.min(Math.max(Math.abs(j),0),1)}}const P=He(c,h);P.transform(z).css({opacity:x}),k.origin&&P.css("transform-origin",k.origin)}},setTransition:a=>{const{transformEl:d}=e.params.creativeEffect;(d?e.slides.find(d):e.slides).transition(a).find(".swiper-slide-shadow").transition(a),as({swiper:e,duration:a,transformEl:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Ce(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function Se(s,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]=="undefined"?s[i]=e[i]:Ce(e[i])&&Ce(s[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?s[i]=e[i]:Se(s[i],e[i]):s[i]=e[i]})}function Bs(s){return s===void 0&&(s={}),s.navigation&&typeof s.navigation.nextEl=="undefined"&&typeof s.navigation.prevEl=="undefined"}function Ds(s){return s===void 0&&(s={}),s.pagination&&typeof s.pagination.el=="undefined"}function Gs(s){return s===void 0&&(s={}),s.scrollbar&&typeof s.scrollbar.el=="undefined"}function Rs(s){s===void 0&&(s="");const e=s.split(" ").map(i=>i.trim()).filter(i=>!!i),t=[];return e.forEach(i=>{t.indexOf(i)<0&&t.push(i)}),t.join(" ")}const Hs=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function ys(s){s===void 0&&(s={});const e={on:{}},t={};Se(e,le.defaults),Se(e,le.extendedDefaults),e._emitClasses=!0,e.init=!1;const i={},l=Hs.map(r=>r.replace(/_/,"")),n=Object.assign({},s);return Object.keys(n).forEach(r=>{typeof s[r]!="undefined"&&(l.indexOf(r)>=0?Ce(s[r])?(e[r]={},t[r]={},Se(e[r],s[r]),Se(t[r],s[r])):(e[r]=s[r],t[r]=s[r]):r.search(/on[A-Z]/)===0&&typeof s[r]=="function"?e.on[`${r[2].toLowerCase()}${r.substr(3)}`]=s[r]:i[r]=s[r])}),["navigation","pagination","scrollbar"].forEach(r=>{e[r]===!0&&(e[r]={}),e[r]===!1&&delete e[r]}),{params:e,passedParams:t,rest:i}}function Rr(s){return new le(s)}function Hr(s,e){let{el:t,nextEl:i,prevEl:l,paginationEl:n,scrollbarEl:r,swiper:a}=s;Bs(e)&&i&&l&&(a.params.navigation.nextEl=i,a.originalParams.navigation.nextEl=i,a.params.navigation.prevEl=l,a.originalParams.navigation.prevEl=l),Ds(e)&&n&&(a.params.pagination.el=n,a.originalParams.pagination.el=n),Gs(e)&&r&&(a.params.scrollbar.el=r,a.originalParams.scrollbar.el=r),a.init(t)}function Vs(s,e){let t=e.slidesPerView;if(e.breakpoints){const l=le.prototype.getBreakpoint(e.breakpoints),n=l in e.breakpoints?e.breakpoints[l]:void 0;n&&n.slidesPerView&&(t=n.slidesPerView)}let i=Math.ceil(parseFloat(e.loopedSlides||t,10));return i+=e.loopAdditionalSlides,i>s.length&&(i=s.length),i}function Vr(s,e,t){const i=e.map((d,u)=>(d.props||(d.props={}),d.props.swiperRef=s,d.props["data-swiper-slide-index"]=u,d));function l(d,u,c){return d.props||(d.props={}),re(d.type,ms(ke({},d.props),{key:`${d.key}-duplicate-${u}-${c}`,class:`${d.props.className||""} ${t.slideDuplicateClass} ${d.props.class||""}`}),d.children)}if(t.loopFillGroupWithBlank){const d=t.slidesPerGroup-i.length%t.slidesPerGroup;if(d!==t.slidesPerGroup)for(let u=0;u<d;u+=1){const c=re("div",{class:`${t.slideClass} ${t.slideBlankClass}`});i.push(c)}}t.slidesPerView==="auto"&&!t.loopedSlides&&(t.loopedSlides=i.length);const n=Vs(i,t),r=[],a=[];return i.forEach((d,u)=>{u<n&&a.push(l(d,u,"prepend")),u<i.length&&u>=i.length-n&&r.push(l(d,u,"append"))}),s.value&&(s.value.loopedSlides=n),[...r,...i,...a]}function Wr(s,e,t,i){const l=[];if(!e)return l;const n=u=>{l.indexOf(u)<0&&l.push(u)},r=i.map(u=>u.props&&u.props.key),a=t.map(u=>u.props&&u.props.key);return r.join("")!==a.join("")&&l.push("children"),i.length!==t.length&&l.push("children"),Hs.filter(u=>u[0]==="_").map(u=>u.replace(/_/,"")).forEach(u=>{if(u in s&&u in e)if(Ce(s[u])&&Ce(e[u])){const c=Object.keys(s[u]),p=Object.keys(e[u]);c.length!==p.length?n(u):(c.forEach(o=>{s[u][o]!==e[u][o]&&n(u)}),p.forEach(o=>{s[u][o]!==e[u][o]&&n(u)}))}else s[u]!==e[u]&&n(u)}),l}function Qe(s,e,t){s===void 0&&(s={});const i=[],l={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},n=(r,a)=>{!Array.isArray(r)||r.forEach(d=>{const u=typeof d.type=="symbol";a==="default"&&(a="container-end"),u&&d.children?n(d.children,"default"):d.type&&(d.type.name==="SwiperSlide"||d.type.name==="AsyncComponentWrapper")?i.push(d):l[a]&&l[a].push(d)})};return Object.keys(s).forEach(r=>{if(typeof s[r]!="function")return;const a=s[r]();n(a,r)}),t.value=e.value,e.value=i,{slides:i,slots:l}}function Fr(s){let{swiper:e,slides:t,passedParams:i,changedParams:l,nextEl:n,prevEl:r,paginationEl:a,scrollbarEl:d}=s;const u=l.filter(k=>k!=="children"&&k!=="direction"),{params:c,pagination:p,navigation:o,scrollbar:w,virtual:h,thumbs:v}=e;let b,S,y,_,$;l.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(b=!0),l.includes("controller")&&i.controller&&i.controller.control&&c.controller&&!c.controller.control&&(S=!0),l.includes("pagination")&&i.pagination&&(i.pagination.el||a)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(y=!0),l.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||d)&&(c.scrollbar||c.scrollbar===!1)&&w&&!w.el&&(_=!0),l.includes("navigation")&&i.navigation&&(i.navigation.prevEl||r)&&(i.navigation.nextEl||n)&&(c.navigation||c.navigation===!1)&&o&&!o.prevEl&&!o.nextEl&&($=!0);const A=k=>{!e[k]||(e[k].destroy(),k==="navigation"?(c[k].prevEl=void 0,c[k].nextEl=void 0,e[k].prevEl=void 0,e[k].nextEl=void 0):(c[k].el=void 0,e[k].el=void 0))};u.forEach(k=>{if(Ce(c[k])&&Ce(i[k]))Se(c[k],i[k]);else{const L=i[k];(L===!0||L===!1)&&(k==="navigation"||k==="pagination"||k==="scrollbar")?L===!1&&A(k):c[k]=i[k]}}),l.includes("children")&&h&&c.virtual.enabled?(h.slides=t,h.update(!0)):l.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),b&&v.init()&&v.update(!0),S&&(e.controller.control=c.controller.control),y&&(a&&(c.pagination.el=a),p.init(),p.render(),p.update()),_&&(d&&(c.scrollbar.el=d),w.init(),w.updateSize(),w.setTranslate()),$&&(n&&(c.navigation.nextEl=n),r&&(c.navigation.prevEl=r),o.init(),o.update()),l.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),l.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),l.includes("direction")&&e.changeDirection(i.direction,!1),e.update()}function qr(s){!s||s.destroyed||!s.params.virtual||s.params.virtual&&!s.params.virtual.enabled||(s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),s.parallax&&s.params.parallax&&s.params.parallax.enabled&&s.parallax.setTranslate())}function Yr(s,e,t){if(!t)return null;const i=s.value.isHorizontal()?{[s.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`};return e.filter((l,n)=>n>=t.from&&n<=t.to).map(l=>(l.props||(l.props={}),l.props.style||(l.props.style={}),l.props.swiperRef=s,l.props.style=i,re(l.type,ke({},l.props),l.children)))}const F={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","zoomChange"],setup(s,e){let{slots:t,emit:i}=e;const{tag:l,wrapperTag:n}=s,r=ee("swiper"),a=ee(null),d=ee(!1),u=ee(!1),c=ee(null),p=ee(null),o=ee(null),w={value:[]},h={value:[]},v=ee(null),b=ee(null),S=ee(null),y=ee(null),{params:_,passedParams:$}=ys(s);Qe(t,w,h),o.value=$,h.value=w.value;const A=()=>{Qe(t,w,h),d.value=!0};if(_.onAny=function(L){for(var E=arguments.length,B=new Array(E>1?E-1:0),x=1;x<E;x++)B[x-1]=arguments[x];i(L,...B)},Object.assign(_.on,{_beforeBreakpoint:A,_containerClasses(L,E){r.value=E}}),p.value=Rr(_),p.value.loopCreate=()=>{},p.value.loopDestroy=()=>{},_.loop&&(p.value.loopedSlides=Vs(w.value,_)),p.value.virtual&&p.value.params.virtual.enabled){p.value.virtual.slides=w.value;const L={cache:!1,slides:w.value,renderExternal:E=>{a.value=E},renderExternalUpdate:!1};Se(p.value.params.virtual,L),Se(p.value.originalParams.virtual,L)}Cs(()=>{!u.value&&p.value&&(p.value.emitSlidesClasses(),u.value=!0);const{passedParams:L}=ys(s),E=Wr(L,o.value,w.value,h.value);o.value=L,(E.length||d.value)&&p.value&&!p.value.destroyed&&Fr({swiper:p.value,slides:w.value,passedParams:L,changedParams:E,nextEl:v.value,prevEl:b.value,scrollbarEl:y.value,paginationEl:S.value}),d.value=!1}),ks("swiper",p),mt(a,()=>{es(()=>{qr(p.value)})}),Es(()=>{!c.value||(Hr({el:c.value,nextEl:v.value,prevEl:b.value,paginationEl:S.value,scrollbarEl:y.value,swiper:p.value},_),i("swiper",p.value))}),Ts(()=>{p.value&&!p.value.destroyed&&p.value.destroy(!0,!1)});function k(L){return _.virtual?Yr(p,L,a.value):!_.loop||p.value&&p.value.destroyed?(L.forEach(E=>{E.props||(E.props={}),E.props.swiperRef=p}),L):Vr(p,L,_)}return()=>{const{slides:L,slots:E}=Qe(t,w,h);return re(l,{ref:c,class:Rs(r.value)},[E["container-start"],Bs(s)&&[re("div",{ref:b,class:"swiper-button-prev"}),re("div",{ref:v,class:"swiper-button-next"})],Gs(s)&&re("div",{ref:y,class:"swiper-scrollbar"}),Ds(s)&&re("div",{ref:S,class:"swiper-pagination"}),re(n,{class:"swiper-wrapper"},[E["wrapper-start"],k(L),E["wrapper-end"]]),E["container-end"]])}}},q={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup(s,e){let{slots:t}=e,i=!1;const{swiperRef:l}=s,n=ee(null),r=ee("swiper-slide");function a(u,c,p){c===n.value&&(r.value=p)}Es(()=>{!l.value||(l.value.on("_slideClass",a),i=!0)}),ht(()=>{i||!l||!l.value||(l.value.on("_slideClass",a),i=!0)}),Cs(()=>{!n.value||!l||!l.value||l.value.destroyed&&r.value!=="swiper-slide"&&(r.value="swiper-slide")}),Ts(()=>{!l||!l.value||l.value.off("_slideClass",a)});const d=ce(()=>({isActive:r.value.indexOf("swiper-slide-active")>=0||r.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isDuplicate:r.value.indexOf("swiper-slide-duplicate")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0||r.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0||r.value.indexOf("swiper-slide-duplicate-next")>=0}));return ks("swiperSlide",d),()=>re(s.tag,{class:Rs(`${r.value}`),ref:n,"data-swiper-slide-index":s.virtualIndex},s.zoom?re("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof s.zoom=="number"?s.zoom:void 0},t.default&&t.default(d.value)):t.default&&t.default(d.value))}};const Xr=R({setup(s){return(e,t)=>{const i=M("ulink");return O(),V(ae(F),{class:"swiper-mammon",direction:"vertical","css-mode":!0,modules:[ae(X),ae(Re)],autoHeight:!0,loop:!0,pagination:{clickable:!0},autoplay:{delay:2600,disableOnInteraction:!1}},{default:f(()=>[(O(!0),W(te,null,oe(ae(Qs),(l,n)=>(O(),V(ae(q),{class:"slide",key:n},{default:f(()=>[m(i,{class:"link",href:l.url},{default:f(()=>[T("div",{style:De({backgroundImage:`url(${l.image})`}),class:"image"},null,4)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["modules"])}}});var Ur=H(Xr,[["__scopeId","data-v-3305fc5c"]]);const Kr={class:"image-mammon"},Zr=R({setup(s){return(e,t)=>{const i=M("ulink");return O(),W("div",Kr,[m(i,{class:"link",href:ae(hs).url},{default:f(()=>[T("div",{style:De({backgroundImage:`url(${ae(hs).image})`}),class:"image"},null,4)]),_:1},8,["href"])])}}});var Jr=H(Zr,[["__scopeId","data-v-b5fa196a"]]);const $s=["GoogleAdSense1","GoogleAdSense2","GoogleAdSense3"];var Ws=R({name:"mammon",props:{provider:{type:String,default:"GoogleAdSense1"}},setup(s){return()=>s.provider==="Image"?re(Jr):s.provider==="Swiper"?re(Ur):s.provider==="GoogleAdSense1"?re(xt):s.provider==="GoogleAdSense2"?re(Et):s.provider==="GoogleAdSense3"?re(kt):null}});const Qr=R({name:"skeleton",props:{width:Number,height:Number,circle:{type:Boolean,default:!1},radius:{type:Number,default:2}},setup(s){return{style:ce(()=>ke(ke({borderRadius:s.circle?"100%":`${s.radius}px`},s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"}))}}});function en(s,e,t,i,l,n){return O(),W("div",{class:"skeleton",style:De(s.style)},null,4)}var sn=H(Qr,[["render",en],["__scopeId","data-v-90d3b4d2"]]);const tn=R({name:"homepage-card",props:{title:String,titleLink:String,contentClass:{type:String,required:!1,default:""}}}),rn=s=>(fe("data-v-909866fe"),s=s(),me(),s),nn={class:"homepage-card"},ln={key:0,class:"header"},an=rn(()=>T("i",{class:"iconfont icon-link-external"},null,-1)),on={key:1};function dn(s,e,t,i,l,n){const r=M("ulink");return O(),W("div",nn,[s.title?(O(),W("div",ln,[s.titleLink?(O(),V(r,{key:0,href:s.titleLink,class:"link"},{default:f(()=>[T("span",null,ne(s.title),1),an]),_:1},8,["href"])):(O(),W("span",on,ne(s.title),1)),we(s.$slots,"actions",{},void 0,!0)])):ue("",!0),T("div",{class:be(["content",s.contentClass])},[we(s.$slots,"default",{},void 0,!0)],2)])}var Fs=H(tn,[["render",dn],["__scopeId","data-v-909866fe"]]);const pn=R({name:"homepage-button",props:{link:{type:String,required:!0},icon:{type:String,required:!0},text:{type:String,required:!1},count:{type:Number,required:!1},countIcon:{type:String,required:!1},countText:{type:String,required:!1},countLink:{type:String,required:!1}},setup(s){const e=ce(()=>Number.isFinite(s.count)||s.countText),t=ce(()=>s.countText?s.countText:e?lt(s.count):null);return{hasCount:e,countContent:t}}}),cn={class:"homepage-button"},un={key:0,class:"text"};function fn(s,e,t,i,l,n){const r=M("ulink");return O(),W("span",cn,[m(r,{href:s.link,class:"item button"},{default:f(()=>[T("i",{class:be(["iconfont",s.icon])},null,2),s.text?(O(),W("span",un,ne(s.text),1)):ue("",!0),we(s.$slots,"default",{},void 0,!0)]),_:3},8,["href"]),s.hasCount?(O(),V(r,{key:0,class:"item count",href:s.countLink||s.link},{default:f(()=>[s.countIcon?(O(),W("i",{key:0,class:be(["iconfont",s.countIcon])},null,2)):ue("",!0),m(is,{name:"module",mode:"out-in"},{default:f(()=>[(O(),W("span",{key:s.countContent||"null"},ne(s.countContent),1))]),_:1})]),_:1},8,["href"])):ue("",!0)])}var mn=H(pn,[["render",fn],["__scopeId","data-v-32882dde"]]);const hn=R({name:"homepage",components:{Mammon:Ws,Skeleton:sn,HomepageCard:Fs,GithubButton:mn},props:{repository:{type:String,required:!0},headerAdProvider:{type:String,required:!1},footerAdProvider:{type:String,required:!1}},setup(s){const e=et(),t=ce(()=>e.initialized),i=at(s.repository),l=ot(s.repository),n=ce(()=>{var c;return(c=r.value)==null?void 0:c.description}),r=ce(()=>e.getGitHubRepositoryDetail(s.repository)),a=ce(()=>e.githubRepositories),d=ce(()=>{const c=e.npmPackagesDownloadsMap.get(s.repository);return c?dt(c):"0"}),u=ce(()=>e.githubNPMRepositories.map(({name:c})=>c).includes(s.repository));return{initialized:t,isNPMPackage:u,repoUrl:l,repoDescription:n,repoDetail:r,packageDownloads:d,appRepositories:a,npmUrl:i}}}),wn=s=>(fe("data-v-15d255ff"),s=s(),me(),s),gn={class:"homepage"},vn={class:"banner"},_n={class:"banner-content",key:"skeleton"},Sn={class:"title-skeleton"},bn={class:"subtitle-skeleton"},yn={class:"buttons-skeleton"},$n={class:"banner-content",key:"content"},xn={key:0,class:"archived"},Cn=wn(()=>T("i",{class:"iconfont icon-warning-line"},null,-1)),En=g(" This repository has been archived. It is now read-only. "),Tn=[Cn,En],kn={class:"title"},Pn={class:"subtitle"},Mn={class:"buttons"},zn={class:"actions"},In={class:"container"};function On(s,e,t,i,l,n){const r=M("skeleton"),a=M("github-button"),d=M("mammon"),u=M("homepage-card");return O(),W("main",gn,[T("div",vn,[m(is,{name:"module",mode:"out-in"},{default:f(()=>{var c,p,o,w;return[s.initialized?(O(),W("div",$n,[(c=s.repoDetail)!=null&&c.archived?(O(),W("p",xn,Tn)):ue("",!0),T("h1",kn,ne(s.repository),1),T("h4",Pn,ne(s.repoDescription||"..."),1),T("div",Mn,[m(a,{link:s.repoUrl,count:((p=s.repoDetail)==null?void 0:p.stargazers_count)||0,countLink:`${s.repoUrl}/stargazers`,icon:"icon-github",class:"item",text:"Star"},null,8,["link","count","countLink"]),m(a,{link:`${s.repoUrl}/issues`,count:((o=s.repoDetail)==null?void 0:o.open_issues_count)||0,icon:"icon-issue",class:"item",text:"Issue"},null,8,["link","count"]),m(a,{link:`${s.repoUrl}/fork`,count:((w=s.repoDetail)==null?void 0:w.forks)||0,icon:"icon-fork",class:"item",text:"Fork"},null,8,["link","count"]),m(a,{class:"item",icon:"icon-download",text:"Download",link:`${s.repoUrl}/archive/master.zip`,"count-icon":s.isNPMPackage?"icon-npm":void 0,"count-link":s.isNPMPackage?s.npmUrl:void 0,"count-text":s.isNPMPackage?s.packageDownloads:void 0},null,8,["link","count-icon","count-link","count-text"])]),T("div",zn,[we(s.$slots,"actions",{},void 0,!0)])])):(O(),W("div",_n,[T("div",Sn,[m(r)]),T("div",bn,[m(r)]),T("div",yn,[(O(),W(te,null,oe(4,h=>T("div",{class:"item-skeleton",key:h},[m(r)])),64))])]))]}),_:3})]),T("div",In,[s.headerAdProvider?(O(),V(u,{key:0,class:"homepage-mammon"},{default:f(()=>[m(d,{provider:s.headerAdProvider},null,8,["provider"])]),_:1})):ue("",!0),we(s.$slots,"content",{},void 0,!0),s.footerAdProvider?(O(),V(u,{key:1,class:"homepage-mammon"},{default:f(()=>[m(d,{provider:s.footerAdProvider},null,8,["provider"])]),_:1})):ue("",!0)])])}var An=H(hn,[["render",On],["__scopeId","data-v-15d255ff"]]);const Ln=R({name:"homepage-link",props:{text:String,href:String,icon:String}}),Nn={class:"homepage-link"};function jn(s,e,t,i,l,n){const r=M("ulink");return O(),W("div",Nn,[m(r,{class:"link",href:s.href},{default:f(()=>[T("i",{class:be(["iconfont",`icon-${s.icon}`])},null,2),we(s.$slots,"default",{},()=>[T("span",null,ne(s.text),1)],!0)]),_:3},8,["href"])])}var Be=H(Ln,[["render",jn],["__scopeId","data-v-0bd1d4f6"]]);const Bn=R({name:"modal",props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},titleUrl:{type:String,required:!0}},emits:["close"]}),qs=s=>(fe("data-v-d46b4910"),s=s(),me(),s),Dn={key:0,class:"modal"},Gn={class:"wrapper"},Rn={class:"title"},Hn=qs(()=>T("i",{class:"iconfont icon-link-external"},null,-1)),Vn=qs(()=>T("i",{class:"iconfont icon-close"},null,-1)),Wn=[Vn],Fn={class:"content"};function qn(s,e,t,i,l,n){const r=M("ulink");return O(),V(wt,{to:"body"},[m(is,{name:"module"},{default:f(()=>[s.visible?(O(),W("div",Dn,[T("div",Gn,[T("p",Rn,[m(r,{class:"link",href:s.titleUrl},{default:f(()=>[T("span",null,ne(s.title),1),Hn]),_:1},8,["href"]),T("button",{class:"close",onClick:e[0]||(e[0]=a=>s.$emit("close"))},Wn)]),T("div",Fn,[we(s.$slots,"content",{},void 0,!0)])])])):ue("",!0)]),_:3})])}var Yn=H(Bn,[["render",qn],["__scopeId","data-v-d46b4910"]]);const Xn=R({name:"homepage-examples",components:{Mammon:Ws,HomepageCard:Fs,Modal:Yn},props:{examples:{type:Array,required:!0},disabledAutoAd:{type:Boolean,default:!1},contentClass:{type:String,required:!1}},setup(s){st();const e=ee(null),t=ce(()=>Number.isInteger(e.value)),i=ce(()=>s.examples[e.value]||null),l=d=>{e.value=d},n=()=>{e.value=null},r=6,a=Ge(s.examples.map(()=>null));return gt(()=>{const d=s.examples.length;if(d<=r){const u=Math.ceil(d/2);a[u-1]=$s[0]}else{const u=$s,c=d/(u.length+1);u.forEach((p,o)=>{a[Math.ceil(c*(o+1))-1]=p})}}),{adProviders:a,isVisibleExampleModal:t,activeExample:i,openExampleModal:l,closeExampleModal:n}}}),Un=s=>(fe("data-v-747627b0"),s=s(),me(),s),Kn={class:"examples"},Zn={class:"actions"},Jn=["onClick"],Qn=Un(()=>T("i",{class:"iconfont icon-code"},null,-1)),el=[Qn];function sl(s,e,t,i,l,n){var c,p;const r=M("highlightjs"),a=M("modal"),d=M("homepage-card"),u=M("mammon");return O(),W("div",Kn,[m(a,{visible:s.isVisibleExampleModal,title:`${(c=s.activeExample)==null?void 0:c.title} (Edit on GitHub)`,"title-url":((p=s.activeExample)==null?void 0:p.url)||"",onClose:s.closeExampleModal},{content:f(()=>{var o,w;return[m(r,{class:"highlight",contenteditable:"true",onkeydown:"if(event.metaKey) return true; return false;",code:(o=s.activeExample)==null?void 0:o.raw,language:(w=s.activeExample)==null?void 0:w.language},null,8,["code","language"])]}),_:1},8,["visible","title","title-url","onClose"]),(O(!0),W(te,null,oe(s.examples,(o,w)=>(O(),W("div",{class:"example-item",key:o.name},[m(d,{title:o.title||o.name,"content-class":s.contentClass},{actions:f(()=>[T("div",Zn,[we(s.$slots,"actions",{},void 0,!0),T("button",{class:"code-button",onClick:h=>s.openExampleModal(w)},el,8,Jn)])]),default:f(()=>[we(s.$slots,"component",vt(_t(o)),void 0,!0)]),_:2},1032,["title","content-class"]),s.disabledAutoAd?ue("",!0):(O(),W(te,{key:0},[s.adProviders[w]?(O(),V(d,{key:0,class:"example-mammon"},{default:f(()=>[m(u,{provider:s.adProviders[w]||void 0},null,8,["provider"])]),_:2},1024)):ue("",!0)],64))]))),128))])}var tl=H(Xn,[["render",sl],["__scopeId","data-v-747627b0"]]);const il=R({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=p=>{console.log("SwiperComponentReady!",p)},e=p=>{console.log("handleHSwiperSlideChange!",p.realIndex)},t=Ge(new Map),i=p=>t.get(p),l=p=>{t.set(p,!0),console.log("Click slide! target slide id:",p)};let n=null;const r=p=>{n=p},a=ee();return{modules:[js,X,ie,Re],handleHSwiperReady:s,handleHSwiperSlideChange:e,handleHwiperSlideClick:l,isSlideClicked:i,setVSwiperRef:r,vSwiperIndex:a,updateVSwiperIndex:()=>{a.value=n==null?void 0:n.activeIndex},prevVSwiperSlide:()=>n==null?void 0:n.slidePrev(),nextVSwiperSlide:()=>n==null?void 0:n.slideNext()}}}),ge=s=>(fe("data-v-3d3f9f92"),s=s(),me(),s),rl={class:"advance-example"},nl=ge(()=>T("span",null,"Loop Slide 1",-1)),ll=ge(()=>T("span",null,"Loop Slide 3",-1)),al=ge(()=>T("span",null,"Loop Slide 4",-1)),ol=ge(()=>T("span",null,"Loop Slide 5",-1)),dl=ge(()=>T("span",null,"Loop Slide 6",-1)),pl=g("swiperjs.com"),cl=ge(()=>T("i",{class:"iconfont icon-link-external"},null,-1)),ul=g(" discussions "),fl=ge(()=>T("i",{class:"iconfont icon-link-external"},null,-1)),ml=g("Slide 3"),hl=g("Slide 4"),wl=g("Slide 5"),gl=g("Slide 6"),vl=["disabled"],_l=ge(()=>T("i",{class:"iconfont icon-arrow-down"},null,-1)),Sl=[_l],bl=["disabled"],yl=ge(()=>T("i",{class:"iconfont icon-arrow-up"},null,-1)),$l=[yl];function xl(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper"),d=M("ulink");return O(),W("div",rl,[m(a,{class:"horizontal-swiper",modules:s.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:s.handleHSwiperReady,onSlideChange:s.handleHSwiperSlideChange},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[nl]),_:1}),m(r,{class:"slide"},{default:f(u=>[T("pre",null,ne(u),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[ll,T("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=St(u=>s.handleHwiperSlideClick(3),["prevent"]))},ne(s.isSlideClicked(3)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[al,T("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=u=>s.handleHwiperSlideClick(4))},ne(s.isSlideClicked(4)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[ol,T("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=u=>s.handleHwiperSlideClick(5))},ne(s.isSlideClicked(5)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[dl,T("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=u=>s.handleHwiperSlideClick(6))},ne(s.isSlideClicked(6)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),m(a,{class:"vertical-swiper",modules:s.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:s.setVSwiperRef,onSlideChange:s.updateVSwiperIndex},{"container-start":f(()=>[T("button",{class:"nav-button-prev",disabled:s.vSwiperIndex===0,onClick:e[4]||(e[4]=(...u)=>s.prevVSwiperSlide&&s.prevVSwiperSlide(...u))},Sl,8,vl)]),"container-end":f(()=>[T("button",{class:"nav-button-next",disabled:s.vSwiperIndex===5-1,onClick:e[5]||(e[5]=(...u)=>s.nextVSwiperSlide&&s.nextVSwiperSlide(...u))},$l,8,bl)]),default:f(()=>[m(r,{class:"slide"},{default:f(()=>[m(d,{class:"link",href:"https://swiperjs.com/"},{default:f(()=>[pl]),_:1}),cl]),_:1}),m(r,{class:"slide"},{default:f(()=>[m(d,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:f(()=>[ul]),_:1}),fl]),_:1}),m(r,{class:"slide"},{default:f(()=>[ml]),_:1}),m(r,{class:"slide"},{default:f(()=>[hl]),_:1}),m(r,{class:"slide"},{default:f(()=>[wl]),_:1}),m(r,{class:"slide"},{default:f(()=>[gl]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}var Cl=H(il,[["render",xl],["__scopeId","data-v-3d3f9f92"]]),El=Object.freeze(Object.defineProperty({__proto__:null,default:Cl},Symbol.toStringTag,{value:"Module"}));const Tl=R({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue",components:{Swiper:F,SwiperSlide:q}}),kl=g("Slide 1"),Pl=g("Slide 2"),Ml=g("Slide 3"),zl=g("Slide 4"),Il=g("Slide 5"),Ol=g("Slide 6"),Al=g("Slide 7"),Ll=g("Slide 8");function Nl(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper"},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[kl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ml]),_:1}),m(r,{class:"slide"},{default:f(()=>[zl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Il]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ol]),_:1}),m(r,{class:"slide"},{default:f(()=>[Al]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ll]),_:1})]),_:1})}var jl=H(Tl,[["render",Nl],["__scopeId","data-v-2d564e9b"]]),Bl=Object.freeze(Object.defineProperty({__proto__:null,default:jl},Symbol.toStringTag,{value:"Module"}));const Dl=R({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[ie]}}}),Gl=g("Slide 1"),Rl=g("Slide 2"),Hl=g("Slide 3"),Vl=g("Slide 4"),Wl=g("Slide 5"),Fl=g("Slide 6"),ql=g("Slide 7"),Yl=g("Slide 8");function Xl(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,navigation:""},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Gl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Rl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fl]),_:1}),m(r,{class:"slide"},{default:f(()=>[ql]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yl]),_:1})]),_:1},8,["modules"])}var Ul=H(Dl,[["render",Xl],["__scopeId","data-v-f4d71ee2"]]),Kl=Object.freeze(Object.defineProperty({__proto__:null,default:Ul},Symbol.toStringTag,{value:"Module"}));const Zl=R({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Jl=g("Slide 1"),Ql=g("Slide 2"),ea=g("Slide 3"),sa=g("Slide 4"),ta=g("Slide 5"),ia=g("Slide 6"),ra=g("Slide 7"),na=g("Slide 8");function la(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Jl]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ql]),_:1}),m(r,{class:"slide"},{default:f(()=>[ea]),_:1}),m(r,{class:"slide"},{default:f(()=>[sa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ta]),_:1}),m(r,{class:"slide"},{default:f(()=>[ia]),_:1}),m(r,{class:"slide"},{default:f(()=>[ra]),_:1}),m(r,{class:"slide"},{default:f(()=>[na]),_:1})]),_:1},8,["modules"])}var aa=H(Zl,[["render",la],["__scopeId","data-v-3d9f8f1b"]]),oa=Object.freeze(Object.defineProperty({__proto__:null,default:aa},Symbol.toStringTag,{value:"Module"}));const da=R({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),pa=g("Slide 1"),ca=g("Slide 2"),ua=g("Slide 3"),fa=g("Slide 4"),ma=g("Slide 5"),ha=g("Slide 6"),wa=g("Slide 7"),ga=g("Slide 8");function va(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[pa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ca]),_:1}),m(r,{class:"slide"},{default:f(()=>[ua]),_:1}),m(r,{class:"slide"},{default:f(()=>[fa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ma]),_:1}),m(r,{class:"slide"},{default:f(()=>[ha]),_:1}),m(r,{class:"slide"},{default:f(()=>[wa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ga]),_:1})]),_:1},8,["modules"])}var _a=H(da,[["render",va],["__scopeId","data-v-45a86f5b"]]),Sa=Object.freeze(Object.defineProperty({__proto__:null,default:_a},Symbol.toStringTag,{value:"Module"}));const ba=R({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),ya=g("Slide 1"),$a=g("Slide 2"),xa=g("Slide 3"),Ca=g("Slide 4"),Ea=g("Slide 5"),Ta=g("Slide 6"),ka=g("Slide 7"),Pa=g("Slide 8");function Ma(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{type:"progressbar"}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ya]),_:1}),m(r,{class:"slide"},{default:f(()=>[$a]),_:1}),m(r,{class:"slide"},{default:f(()=>[xa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ca]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ea]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ta]),_:1}),m(r,{class:"slide"},{default:f(()=>[ka]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pa]),_:1})]),_:1},8,["modules"])}var za=H(ba,[["render",Ma],["__scopeId","data-v-42e50b2c"]]),Ia=Object.freeze(Object.defineProperty({__proto__:null,default:za},Symbol.toStringTag,{value:"Module"}));const Oa=R({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Aa=g("Slide 1"),La=g("Slide 2"),Na=g("Slide 3"),ja=g("Slide 4"),Ba=g("Slide 5"),Da=g("Slide 6"),Ga=g("Slide 7"),Ra=g("Slide 8");function Ha(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{type:"fraction"}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Aa]),_:1}),m(r,{class:"slide"},{default:f(()=>[La]),_:1}),m(r,{class:"slide"},{default:f(()=>[Na]),_:1}),m(r,{class:"slide"},{default:f(()=>[ja]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ba]),_:1}),m(r,{class:"slide"},{default:f(()=>[Da]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ga]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ra]),_:1})]),_:1},8,["modules"])}var Va=H(Oa,[["render",Ha],["__scopeId","data-v-d2f7cb18"]]),Wa=Object.freeze(Object.defineProperty({__proto__:null,default:Va},Symbol.toStringTag,{value:"Module"}));const Fa=R({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{bulletRenderer:(e,t)=>`<span class="${`${t} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[X]}}}),qa=g("Slide 1"),Ya=g("Slide 2"),Xa=g("Slide 3"),Ua=g("Slide 4"),Ka=g("Slide 5"),Za=g("Slide 6"),Ja=g("Slide 7"),Qa=g("Slide 8");function eo(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0,renderBullet:s.bulletRenderer}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[qa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ya]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ua]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ka]),_:1}),m(r,{class:"slide"},{default:f(()=>[Za]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ja]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qa]),_:1})]),_:1},8,["modules","pagination"])}var so=H(Fa,[["render",eo],["__scopeId","data-v-4f5b0a94"]]),to=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"}));const io=R({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[ls]}}}),ro=g("Slide 1"),no=g("Slide 2"),lo=g("Slide 3"),ao=g("Slide 4"),oo=g("Slide 5"),po=g("Slide 6"),co=g("Slide 7"),uo=g("Slide 8");function fo(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,scrollbar:{hide:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ro]),_:1}),m(r,{class:"slide"},{default:f(()=>[no]),_:1}),m(r,{class:"slide"},{default:f(()=>[lo]),_:1}),m(r,{class:"slide"},{default:f(()=>[ao]),_:1}),m(r,{class:"slide"},{default:f(()=>[oo]),_:1}),m(r,{class:"slide"},{default:f(()=>[po]),_:1}),m(r,{class:"slide"},{default:f(()=>[co]),_:1}),m(r,{class:"slide"},{default:f(()=>[uo]),_:1})]),_:1},8,["modules"])}var mo=H(io,[["render",fo],["__scopeId","data-v-74bd5600"]]),ho=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"}));const wo=R({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),go=g("Slide 1"),vo=g("Slide 2"),_o=g("Slide 3"),So=g("Slide 4"),bo=g("Slide 5"),yo=g("Slide 6"),$o=g("Slide 7"),xo=g("Slide 8");function Co(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"vertical",pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[go]),_:1}),m(r,{class:"slide"},{default:f(()=>[vo]),_:1}),m(r,{class:"slide"},{default:f(()=>[_o]),_:1}),m(r,{class:"slide"},{default:f(()=>[So]),_:1}),m(r,{class:"slide"},{default:f(()=>[bo]),_:1}),m(r,{class:"slide"},{default:f(()=>[yo]),_:1}),m(r,{class:"slide"},{default:f(()=>[$o]),_:1}),m(r,{class:"slide"},{default:f(()=>[xo]),_:1})]),_:1},8,["modules"])}var Eo=H(wo,[["render",Co],["__scopeId","data-v-00c392d4"]]),To=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"}));const ko=R({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Po=g("Slide 1"),Mo=g("Slide 2"),zo=g("Slide 3"),Io=g("Slide 4"),Oo=g("Slide 5"),Ao=g("Slide 6"),Lo=g("Slide 7"),No=g("Slide 8");function jo(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Po]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mo]),_:1}),m(r,{class:"slide"},{default:f(()=>[zo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Io]),_:1}),m(r,{class:"slide"},{default:f(()=>[Oo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ao]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lo]),_:1}),m(r,{class:"slide"},{default:f(()=>[No]),_:1})]),_:1},8,["modules"])}var Bo=H(ko,[["render",jo],["__scopeId","data-v-047ec236"]]),Do=Object.freeze(Object.defineProperty({__proto__:null,default:Bo},Symbol.toStringTag,{value:"Module"}));const Go=R({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Ro=g("Slide 1"),Ho=g("Slide 2"),Vo=g("Slide 3"),Wo=g("Slide 4"),Fo=g("Slide 5"),qo=g("Slide 6"),Yo=g("Slide 7"),Xo=g("Slide 8");function Uo(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ro]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ho]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fo]),_:1}),m(r,{class:"slide"},{default:f(()=>[qo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xo]),_:1})]),_:1},8,["modules"])}var Ko=H(Go,[["render",Uo],["__scopeId","data-v-fbdc3610"]]),Zo=Object.freeze(Object.defineProperty({__proto__:null,default:Ko},Symbol.toStringTag,{value:"Module"}));const Jo=R({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Qo=g("Slide 1"),ed=g("Slide 2"),sd=g("Slide 3"),td=g("Slide 4"),id=g("Slide 5"),rd=g("Slide 6"),nd=g("Slide 7"),ld=g("Slide 8");function ad(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Qo]),_:1}),m(r,{class:"slide"},{default:f(()=>[ed]),_:1}),m(r,{class:"slide"},{default:f(()=>[sd]),_:1}),m(r,{class:"slide"},{default:f(()=>[td]),_:1}),m(r,{class:"slide"},{default:f(()=>[id]),_:1}),m(r,{class:"slide"},{default:f(()=>[rd]),_:1}),m(r,{class:"slide"},{default:f(()=>[nd]),_:1}),m(r,{class:"slide"},{default:f(()=>[ld]),_:1})]),_:1},8,["modules"])}var od=H(Jo,[["render",ad],["__scopeId","data-v-0a7f2334"]]),dd=Object.freeze(Object.defineProperty({__proto__:null,default:od},Symbol.toStringTag,{value:"Module"}));const pd=R({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),cd=g("Slide 1"),ud=g("Slide 2"),fd=g("Slide 3"),md=g("Slide 4"),hd=g("Slide 5"),wd=g("Slide 6"),gd=g("Slide 7"),vd=g("Slide 8");function _d(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[cd]),_:1}),m(r,{class:"slide"},{default:f(()=>[ud]),_:1}),m(r,{class:"slide"},{default:f(()=>[fd]),_:1}),m(r,{class:"slide"},{default:f(()=>[md]),_:1}),m(r,{class:"slide"},{default:f(()=>[hd]),_:1}),m(r,{class:"slide"},{default:f(()=>[wd]),_:1}),m(r,{class:"slide"},{default:f(()=>[gd]),_:1}),m(r,{class:"slide"},{default:f(()=>[vd]),_:1})]),_:1},8,["modules"])}var Sd=H(pd,[["render",_d],["__scopeId","data-v-42d07bd0"]]),bd=Object.freeze(Object.defineProperty({__proto__:null,default:Sd},Symbol.toStringTag,{value:"Module"}));const yd=R({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),$d=g("Slide 1"),xd=g("Slide 2"),Cd=g("Slide 3"),Ed=g("Slide 4"),Td=g("Slide 5"),kd=g("Slide 6"),Pd=g("Slide 7"),Md=g("Slide 8");function zd(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[$d]),_:1}),m(r,{class:"slide"},{default:f(()=>[xd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ed]),_:1}),m(r,{class:"slide"},{default:f(()=>[Td]),_:1}),m(r,{class:"slide"},{default:f(()=>[kd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Md]),_:1})]),_:1},8,["modules"])}var Id=H(yd,[["render",zd],["__scopeId","data-v-2ed88a62"]]),Od=Object.freeze(Object.defineProperty({__proto__:null,default:Id},Symbol.toStringTag,{value:"Module"}));const Ad=R({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Ns]}}}),Ld=g("Slide 1"),Nd=g("Slide 2"),jd=g("Slide 3"),Bd=g("Slide 4"),Dd=g("Slide 5"),Gd=g("Slide 6"),Rd=g("Slide 7"),Hd=g("Slide 8");function Vd(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ld]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nd]),_:1}),m(r,{class:"slide"},{default:f(()=>[jd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Dd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Gd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Rd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hd]),_:1})]),_:1},8,["modules"])}var Wd=H(Ad,[["render",Vd],["__scopeId","data-v-7d7432d2"]]),Fd=Object.freeze(Object.defineProperty({__proto__:null,default:Wd},Symbol.toStringTag,{value:"Module"}));const qd=R({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Ns,ls,Re]}}}),K=s=>(fe("data-v-7727eb4e"),s=s(),me(),s),Yd=K(()=>T("h2",null,"I Have a Dream",-1)),Xd=K(()=>T("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),Ud=K(()=>T("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),Kd=K(()=>T("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),Zd=K(()=>T("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),Jd=K(()=>T("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check \u2014 a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),Qd=K(()=>T("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),ep=K(()=>T("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),sp=K(()=>T("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),tp=K(()=>T("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),ip=K(()=>T("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),rp=K(()=>T("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),np=K(()=>T("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),lp=K(()=>T("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),ap=K(()=>T("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),op=K(()=>T("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),dp=K(()=>T("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),pp=K(()=>T("p",null,"I have a dream today.",-1)),cp=K(()=>T("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),up=K(()=>T("p",null,"I have a dream today.",-1)),fp=K(()=>T("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),mp=K(()=>T("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),hp=K(()=>T("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),wp=K(()=>T("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),gp=K(()=>T("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),vp=K(()=>T("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),_p=K(()=>T("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),Sp=K(()=>T("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),bp=K(()=>T("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),yp=K(()=>T("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function $p(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Yd,Xd,Ud,Kd,Zd,Jd,Qd,ep,sp,tp,ip,rp,np,lp,ap,op,dp,pp,cp,up,fp,mp,hp,wp,gp,vp,_p,Sp,bp,yp]),_:1})]),_:1},8,["modules"])}var xp=H(qd,[["render",$p],["__scopeId","data-v-7727eb4e"]]),Cp=Object.freeze(Object.defineProperty({__proto__:null,default:xp},Symbol.toStringTag,{value:"Module"}));const Ep=R({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,js]}}}),Tp=g("Slide 1"),kp=g("Slide 2"),Pp=g("Slide 3"),Mp=g("Slide 4"),zp=g("Slide 5"),Ip=g("Slide 6"),Op=g("Slide 7"),Ap=g("Slide 8"),Lp=g("Slide 9"),Np=g("Slide 10");function jp(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Tp]),_:1}),m(r,{class:"slide"},{default:f(()=>[kp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mp]),_:1}),m(r,{class:"slide"},{default:f(()=>[zp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ip]),_:1}),m(r,{class:"slide"},{default:f(()=>[Op]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ap]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Np]),_:1})]),_:1},8,["modules"])}var Bp=H(Ep,[["render",jp],["__scopeId","data-v-e0e2afd2"]]),Dp=Object.freeze(Object.defineProperty({__proto__:null,default:Bp},Symbol.toStringTag,{value:"Module"}));const Gp=R({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Rp=g("Horizontal Slide 1"),Hp=g("Vertical Slide 1"),Vp=g("Vertical Slide 2"),Wp=g("Vertical Slide 3"),Fp=g("Vertical Slide 4"),qp=g("Vertical Slide 5"),Yp=g("Horizontal Slide 3"),Xp=g("Horizontal Slide 4");function Up(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper swiper-h",modules:s.modules,"space-between":50,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Rp]),_:1}),m(r,{class:"slide"},{default:f(()=>[m(a,{class:"swiper-v",modules:s.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Hp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fp]),_:1}),m(r,{class:"slide"},{default:f(()=>[qp]),_:1})]),_:1},8,["modules"])]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xp]),_:1})]),_:1},8,["modules"])}var Kp=H(Gp,[["render",Up],["__scopeId","data-v-11d1afb5"]]),Zp=Object.freeze(Object.defineProperty({__proto__:null,default:Kp},Symbol.toStringTag,{value:"Module"}));const Jp=R({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Qp=g("Slide 1"),ec=g("Slide 2"),sc=g("Slide 3"),tc=g("Slide 4"),ic=g("Slide 5"),rc=g("Slide 6"),nc=g("Slide 7"),lc=g("Slide 8");function ac(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Qp]),_:1}),m(r,{class:"slide"},{default:f(()=>[ec]),_:1}),m(r,{class:"slide"},{default:f(()=>[sc]),_:1}),m(r,{class:"slide"},{default:f(()=>[tc]),_:1}),m(r,{class:"slide"},{default:f(()=>[ic]),_:1}),m(r,{class:"slide"},{default:f(()=>[rc]),_:1}),m(r,{class:"slide"},{default:f(()=>[nc]),_:1}),m(r,{class:"slide"},{default:f(()=>[lc]),_:1})]),_:1},8,["modules"])}var oc=H(Jp,[["render",ac],["__scopeId","data-v-2fe16efa"]]),dc=Object.freeze(Object.defineProperty({__proto__:null,default:oc},Symbol.toStringTag,{value:"Module"}));const pc=R({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),cc=g("Slide 1"),uc=g("Slide 2"),fc=g("Slide 3"),mc=g("Slide 4"),hc=g("Slide 5"),wc=g("Slide 6"),gc=g("Slide 7"),vc=g("Slide 8");function _c(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:f(()=>[m(r,null,{default:f(()=>[cc]),_:1}),m(r,null,{default:f(()=>[uc]),_:1}),m(r,null,{default:f(()=>[fc]),_:1}),m(r,null,{default:f(()=>[mc]),_:1}),m(r,null,{default:f(()=>[hc]),_:1}),m(r,null,{default:f(()=>[wc]),_:1}),m(r,null,{default:f(()=>[gc]),_:1}),m(r,null,{default:f(()=>[vc]),_:1})]),_:1},8,["modules"])}var Sc=H(pc,[["render",_c],["__scopeId","data-v-d17316b8"]]),bc=Object.freeze(Object.defineProperty({__proto__:null,default:Sc},Symbol.toStringTag,{value:"Module"}));const yc=R({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),$c=g("Slide 1"),xc=g("Slide 2"),Cc=g("Slide 3"),Ec=g("Slide 4"),Tc=g("Slide 5"),kc=g("Slide 6"),Pc=g("Slide 7"),Mc=g("Slide 8");function zc(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,null,{default:f(()=>[$c]),_:1}),m(r,null,{default:f(()=>[xc]),_:1}),m(r,null,{default:f(()=>[Cc]),_:1}),m(r,null,{default:f(()=>[Ec]),_:1}),m(r,null,{default:f(()=>[Tc]),_:1}),m(r,null,{default:f(()=>[kc]),_:1}),m(r,null,{default:f(()=>[Pc]),_:1}),m(r,null,{default:f(()=>[Mc]),_:1})]),_:1},8,["modules"])}var Ic=H(yc,[["render",zc],["__scopeId","data-v-27ac816a"]]),Oc=Object.freeze(Object.defineProperty({__proto__:null,default:Ic},Symbol.toStringTag,{value:"Module"}));const Ac=R({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Ls,ls,ie,X]}}}),Lc=g("Slide 1"),Nc=g("Slide 2"),jc=g("Slide 3"),Bc=g("Slide 4"),Dc=g("Slide 5"),Gc=g("Slide 6"),Rc=g("Slide 7");function Hc(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Lc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nc]),_:1}),m(r,{class:"slide"},{default:f(()=>[jc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Dc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Gc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Rc]),_:1})]),_:1},8,["modules"])}var Vc=H(Ac,[["render",Hc],["__scopeId","data-v-c61be192"]]),Wc=Object.freeze(Object.defineProperty({__proto__:null,default:Vc},Symbol.toStringTag,{value:"Module"}));const Fc=R({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Nr]}}}),qc=["src"];function Yc(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(O(),W(te,null,oe(5,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,qc)]),_:2},1024)),64))]),_:1},8,["modules"])}var Xc=H(Fc,[["render",Yc],["__scopeId","data-v-46fcf722"]]),Uc=Object.freeze(Object.defineProperty({__proto__:null,default:Xc},Symbol.toStringTag,{value:"Module"}));const Kc=R({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Dr]}}}),Zc={class:"coverflow-example"},Jc=["src"];function Qc(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W("div",Zc,[m(a,{class:"swiper",modules:s.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:f(()=>[(O(),W(te,null,oe(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,Jc)]),_:2},1024)),64))]),_:1},8,["modules"])])}var eu=H(Kc,[["render",Qc],["__scopeId","data-v-d2f7e430"]]),su=Object.freeze(Object.defineProperty({__proto__:null,default:eu},Symbol.toStringTag,{value:"Module"}));const tu=R({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,jr]}}}),iu={class:"cube-example"},ru=["src"];function nu(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W("div",iu,[m(a,{class:"swiper",modules:s.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:f(()=>[(O(),W(te,null,oe(5,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,ru)]),_:2},1024)),64))]),_:1},8,["modules","cube-effect"])])}var lu=H(tu,[["render",nu],["__scopeId","data-v-563f7ae5"]]),au=Object.freeze(Object.defineProperty({__proto__:null,default:lu},Symbol.toStringTag,{value:"Module"}));const ou=R({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Br]}}}),du={class:"flip-example"},pu=["src"];function cu(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W("div",du,[m(a,{class:"swiper",modules:s.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:f(()=>[(O(),W(te,null,oe(6,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,pu)]),_:2},1024)),64))]),_:1},8,["modules"])])}var uu=H(ou,[["render",cu],["__scopeId","data-v-2c7827a1"]]),fu=Object.freeze(Object.defineProperty({__proto__:null,default:uu},Symbol.toStringTag,{value:"Module"}));const mu=R({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=ee(!0),e=ee(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:s,setEffect:l=>{e.value=l,es(()=>{s.value=!1,es(()=>{s.value=!0})})},modules:[X,Gr]}}}),hu={class:"creative-example"},wu={class:"toolbar"},gu=["onClick"],vu=["src"];function _u(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W("div",hu,[T("div",wu,[(O(!0),W(te,null,oe(s.effects,(d,u)=>(O(),W("button",{key:u,onClick:c=>s.setEffect(u)}," Effect "+ne(u),9,gu))),128))]),s.render?(O(),V(a,{key:0,class:"swiper",modules:s.modules,effect:"creative","creative-effect":s.effects[s.effectIndex],"grab-cursor":!0,pagination:!0},{default:f(()=>[(O(),W(te,null,oe(6,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,vu)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):ue("",!0)])}var Su=H(mu,[["render",_u],["__scopeId","data-v-2260cdc6"]]),bu=Object.freeze(Object.defineProperty({__proto__:null,default:Su},Symbol.toStringTag,{value:"Module"}));const yu=R({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Ls]}}}),$u=g("Slide 1"),xu=g("Slide 2"),Cu=g("Slide 3"),Eu=g("Slide 4"),Tu=g("Slide 5"),ku=g("Slide 6"),Pu=g("Slide 7"),Mu=g("Slide 8");function zu(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[$u]),_:1}),m(r,{class:"slide"},{default:f(()=>[xu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Eu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Tu]),_:1}),m(r,{class:"slide"},{default:f(()=>[ku]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mu]),_:1})]),_:1},8,["modules"])}var Iu=H(yu,[["render",zu],["__scopeId","data-v-a035dc6c"]]),Ou=Object.freeze(Object.defineProperty({__proto__:null,default:Iu},Symbol.toStringTag,{value:"Module"}));const Au=R({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Re]}}}),Lu=g("Slide 1"),Nu=g("Slide 2"),ju=g("Slide 3"),Bu=g("Slide 4"),Du=g("Slide 5"),Gu=g("Slide 6"),Ru=g("Slide 7"),Hu=g("Slide 8");function Vu(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Lu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nu]),_:1}),m(r,{class:"slide"},{default:f(()=>[ju]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Du]),_:1}),m(r,{class:"slide"},{default:f(()=>[Gu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ru]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hu]),_:1})]),_:1},8,["modules"])}var Wu=H(Au,[["render",Vu],["__scopeId","data-v-6d7de3c9"]]),Fu=Object.freeze(Object.defineProperty({__proto__:null,default:Wu},Symbol.toStringTag,{value:"Module"}));const qu=R({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Ar]}}}),Yu=g("Slide 1"),Xu=g("Slide 2"),Uu=g("Slide 3"),Ku=g("Slide 4"),Zu=g("Slide 5"),Ju=g("Slide 6"),Qu=g("Slide 7"),ef=g("Slide 8");function sf(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Yu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Uu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ku]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ju]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qu]),_:1}),m(r,{class:"slide"},{default:f(()=>[ef]),_:1})]),_:1},8,["modules"])}var tf=H(qu,[["render",sf],["__scopeId","data-v-de882fd0"]]),rf=Object.freeze(Object.defineProperty({__proto__:null,default:tf},Symbol.toStringTag,{value:"Module"}));const nf=R({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=Ge([1,2,3,4,5]);return{modules:[X,ie],slides:s,appendSlide:()=>s.push(s.length+1),prependSlide:()=>s.unshift(s[0]-1),popSlide:()=>s.pop(),shiftSlide:()=>s.shift()}}}),lf={class:"dynamic-example"},af={class:"toolbar"};function of(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W("div",lf,[T("div",af,[T("button",{onClick:e[0]||(e[0]=(...d)=>s.prependSlide&&s.prependSlide(...d))},"Prepend slide"),T("button",{onClick:e[1]||(e[1]=(...d)=>s.appendSlide&&s.appendSlide(...d))},"Append slide"),T("button",{onClick:e[2]||(e[2]=(...d)=>s.popSlide&&s.popSlide(...d))},"Pop slide"),T("button",{onClick:e[3]||(e[3]=(...d)=>s.shiftSlide&&s.shiftSlide(...d))},"Shift slide")]),m(a,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:s.modules},{default:f(()=>[(O(!0),W(te,null,oe(s.slides,d=>(O(),V(r,{key:d,class:"slide"},{default:f(()=>[g(" Slide "+ne(d),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}var df=H(nf,[["render",of],["__scopeId","data-v-4c8fff06"]]),pf=Object.freeze(Object.defineProperty({__proto__:null,default:df},Symbol.toStringTag,{value:"Module"}));const cf=R({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=ee();return{modules:[ie,Lr],setThumbsSwiper:t=>{s.value=t},thumbsSwiper:s}}}),uf={class:"thumb-example"},ff=["src"],mf=["src"];function hf(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W("div",uf,[m(a,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,"space-between":10,navigation:!0,thumbs:{swiper:s.thumbsSwiper}},{default:f(()=>[(O(),W(te,null,oe(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,ff)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),m(a,{class:"thumbs-swiper",modules:s.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:s.setThumbsSwiper},{default:f(()=>[(O(),W(te,null,oe(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[T("img",{src:`/images/example/${d}.jpg`},null,8,mf)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}var wf=H(cf,[["render",hf],["__scopeId","data-v-4ade2337"]]),gf=Object.freeze(Object.defineProperty({__proto__:null,default:wf},Symbol.toStringTag,{value:"Module"}));const vf=R({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Ir]}}}),_f={class:"swiper-zoom-container"},Sf=["src"];function bf(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(O(),W(te,null,oe(8,d=>m(r,{key:d,class:"slide"},{default:f(()=>[T("div",_f,[T("img",{src:`/images/example/${d}.jpg`},null,8,Sf)])]),_:2},1024)),64))]),_:1},8,["modules"])}var yf=H(vf,[["render",bf],["__scopeId","data-v-7aeba9e8"]]),$f=Object.freeze(Object.defineProperty({__proto__:null,default:yf},Symbol.toStringTag,{value:"Module"}));const xf=R({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Or,X,ie]}}}),Cf=s=>(fe("data-v-073a65e7"),s=s(),me(),s),Ef=["data-src"],Tf=Cf(()=>T("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function kf(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(O(),W(te,null,oe(8,d=>m(r,{key:d,class:"slide"},{default:f(()=>[T("img",{"data-src":`/images/example/${d}.jpg`,class:"swiper-lazy"},null,8,Ef),Tf]),_:2},1024)),64))]),_:1},8,["modules"])}var Pf=H(xf,[["render",kf],["__scopeId","data-v-073a65e7"]]),Mf=Object.freeze(Object.defineProperty({__proto__:null,default:Pf},Symbol.toStringTag,{value:"Module"}));const zf=R({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[zr,X,ie]}}}),ve=s=>(fe("data-v-0e91a112"),s=s(),me(),s),If=ve(()=>T("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),Of=ve(()=>T("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Af=ve(()=>T("div",{class:"text","data-swiper-parallax":"-100"},[T("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Lf=ve(()=>T("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),Nf=ve(()=>T("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),jf=ve(()=>T("div",{class:"text","data-swiper-parallax":"-100"},[T("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Bf=ve(()=>T("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),Df=ve(()=>T("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Gf=ve(()=>T("div",{class:"text","data-swiper-parallax":"-100"},[T("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function Rf(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":f(()=>[T("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:De({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:f(()=>[m(r,{class:"slide"},{default:f(()=>[If,Of,Af]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lf,Nf,jf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bf,Df,Gf]),_:1})]),_:1},8,["modules"])}var Hf=H(zf,[["render",Rf],["__scopeId","data-v-0e91a112"]]),Vf=Object.freeze(Object.defineProperty({__proto__:null,default:Hf},Symbol.toStringTag,{value:"Module"}));const Wf=R({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),Ff=g("Slide 1"),qf=g("Slide 2"),Yf=g("Slide 3"),Xf=g("Slide 4"),Uf=g("Slide 5"),Kf=g("Slide 6"),Zf=g("Slide 7"),Jf=g("Slide 8");function Qf(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ff]),_:1}),m(r,{class:"slide"},{default:f(()=>[qf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Uf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Kf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jf]),_:1})]),_:1},8,["modules"])}var em=H(Wf,[["render",Qf],["__scopeId","data-v-1a8895f2"]]),sm=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"}));const tm=R({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),im=s=>(fe("data-v-5d225584"),s=s(),me(),s),rm=im(()=>T("div",{class:"tip"},"\u2192 Resize the browser window \u2190",-1)),nm=g("Slide 1"),lm=g("Slide 2"),am=g("Slide 3"),om=g("Slide 4"),dm=g("Slide 5"),pm=g("Slide 6"),cm=g("Slide 7"),um=g("Slide 8"),fm=g("Slide 9"),mm=g("Slide 10");function hm(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W(te,null,[rm,m(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{"640":{slidesPerView:2,spaceBetween:20},"768":{slidesPerView:4,spaceBetween:40},"1024":{slidesPerView:5,spaceBetween:50}}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[nm]),_:1}),m(r,{class:"slide"},{default:f(()=>[lm]),_:1}),m(r,{class:"slide"},{default:f(()=>[am]),_:1}),m(r,{class:"slide"},{default:f(()=>[om]),_:1}),m(r,{class:"slide"},{default:f(()=>[dm]),_:1}),m(r,{class:"slide"},{default:f(()=>[pm]),_:1}),m(r,{class:"slide"},{default:f(()=>[cm]),_:1}),m(r,{class:"slide"},{default:f(()=>[um]),_:1}),m(r,{class:"slide"},{default:f(()=>[fm]),_:1}),m(r,{class:"slide"},{default:f(()=>[mm]),_:1})]),_:1},8,["modules"])],64)}var wm=H(tm,[["render",hm],["__scopeId","data-v-5d225584"]]),gm=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"}));const vm=R({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),_m=g("Slide 1"),Sm=g("Slide 2"),bm=g("Slide 3"),ym=g("Slide 4"),$m=g("Slide 5"),xm=g("Slide 6"),Cm=g("Slide 7"),Em=g("Slide 8");function Tm(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[_m]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sm]),_:1}),m(r,{class:"slide"},{default:f(()=>[bm]),_:1}),m(r,{class:"slide"},{default:f(()=>[ym]),_:1}),m(r,{class:"slide"},{default:f(()=>[$m]),_:1}),m(r,{class:"slide"},{default:f(()=>[xm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Em]),_:1})]),_:1},8,["modules"])}var km=H(vm,[["render",Tm],["__scopeId","data-v-6bbdc2e0"]]),Pm=Object.freeze(Object.defineProperty({__proto__:null,default:km},Symbol.toStringTag,{value:"Module"}));const Mm=R({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;const e=n=>{s=n},t=ee(!1);return{menuOpened:t,toggleMenu:()=>{t.value?s==null||s.slideNext():s==null||s.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{t.value=(s==null?void 0:s.activeIndex)===0}}}}),Ve=s=>(fe("data-v-0d448f8d"),s=s(),me(),s),zm=g("Menu slide"),Im=Ve(()=>T("div",{class:"bar"},null,-1)),Om=Ve(()=>T("div",{class:"bar"},null,-1)),Am=Ve(()=>T("div",{class:"bar"},null,-1)),Lm=[Im,Om,Am],Nm=Ve(()=>T("div",null,"Content slide",-1));function jm(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:s.setSwiperRef,onSlideChange:s.handleSlideChange},{default:f(()=>[m(r,{class:"menu"},{default:f(()=>[zm]),_:1}),m(r,{class:"content"},{default:f(()=>[T("div",{class:be(["menu-button",{opened:s.menuOpened}]),onClick:e[0]||(e[0]=(...d)=>s.toggleMenu&&s.toggleMenu(...d))},Lm,2),Nm]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}var Bm=H(Mm,[["render",jm],["__scopeId","data-v-0d448f8d"]]),Dm=Object.freeze(Object.defineProperty({__proto__:null,default:Bm},Symbol.toStringTag,{value:"Module"}));const Gm=R({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;const e=a=>{s=a},t=a=>{s==null||s.slideTo(a-1,0)},i=Ge(Array.from({length:500}).map((a,d)=>d+1));let l=1;return{modules:[X,ie,Mr],setSwiperRef:e,slides:i,slideTo:t,append:()=>{i.push(i.length)},prepend:()=>{i.unshift(l-2,l-1),l-=2,s==null||s.slideTo(s.activeIndex+2,0)}}}}),Rm={class:"toolbar"};function Hm(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),W(te,null,[T("div",Rm,[T("button",{onClick:e[0]||(e[0]=d=>s.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),T("button",{onClick:e[1]||(e[1]=d=>s.slideTo(1)),class:"prepend-slide"},"Slide 1"),T("button",{onClick:e[2]||(e[2]=d=>s.slideTo(250)),class:"slide-250"},"Slide 250"),T("button",{onClick:e[3]||(e[3]=d=>s.slideTo(500)),class:"slide-500"},"Slide 500"),T("button",{onClick:e[4]||(e[4]=d=>s.append()),class:"append-slides"},"Append Slide")]),m(a,{class:"swiper",modules:s.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:s.setSwiperRef},{default:f(()=>[(O(!0),W(te,null,oe(s.slides,(d,u)=>(O(),V(r,{key:u,"virtual-index":u,class:"slide"},{default:f(()=>[g(" Slide "+ne(d),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}var Vm=H(Gm,[["render",Hm],["__scopeId","data-v-63faf5cc"]]),Wm=Object.freeze(Object.defineProperty({__proto__:null,default:Vm},Symbol.toStringTag,{value:"Module"}));const Fm=R({name:"swiper-example-change-direction",title:"Change direction",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;return{modules:[ie],setSwiperRef:i=>{s=i},handleResize:()=>{s==null||s.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}}),qm=g("Slide 1"),Ym=g("Slide 2"),Xm=g("Slide 3"),Um=g("Slide 4"),Km=g("Slide 5"),Zm=g("Slide 6"),Jm=g("Slide 7"),Qm=g("Slide 8");function eh(s,e,t,i,l,n){const r=M("swiper-slide"),a=M("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:s.setSwiperRef,onResize:s.handleResize},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[qm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ym]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Um]),_:1}),m(r,{class:"slide"},{default:f(()=>[Km]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jm]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qm]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}var sh=H(Fm,[["render",eh],["__scopeId","data-v-5c2d1e27"]]),th=Object.freeze(Object.defineProperty({__proto__:null,default:sh},Symbol.toStringTag,{value:"Module"}));const xs={"./01-advance.vue":El,"./02-default.vue":Bl,"./03-navigation.vue":Kl,"./04-pagination.vue":oa,"./05-pagination-dynamic.vue":Sa,"./06-pagination-progress.vue":Ia,"./07-pagination-fraction.vue":Wa,"./08-pagination-custom.vue":to,"./09-scrollbar.vue":ho,"./10-vertical.vue":To,"./11-space-between.vue":Do,"./12-slides-per-view.vue":Zo,"./13-slides-per-view-auto.vue":dd,"./14-centered.vue":bd,"./15-centered-auto.vue":Od,"./16-freemode.vue":Fd,"./17-scroll-container.vue":Cp,"./18-slides-per-column.vue":Dp,"./19-nested.vue":Zp,"./20-grab-cursor.vue":dc,"./21-infinite-loop.vue":bc,"./22-infinite-loop-with-slides-per-group.vue":Oc,"./23-slides-per-group-skip.vue":Wc,"./24-effect-fade.vue":Uc,"./25-effect-coverflow.vue":su,"./26-effect-cube.vue":au,"./27-effect-flip.vue":fu,"./28-effect-creative.vue":bu,"./29-keyboard-control.vue":Ou,"./30-mousewheel-control.vue":Fu,"./31-autoplay.vue":rf,"./32-dynamic-slides.vue":pf,"./33-thumbs-gallery.vue":gf,"./34-zoom.vue":$f,"./35-lazy-load-images.vue":Mf,"./36-parallax.vue":Vf,"./37-rtl.vue":sm,"./38-responsive-breakpoints.vue":gm,"./39-autoheight.vue":Pm,"./40-slideable-menu.vue":Dm,"./41-virtual-slides.vue":Wm,"./42-change-direction.vue":th},ih={"./01-advance.vue":`<template>\r
  <div class="advance-example">\r
    <swiper\r
      class="horizontal-swiper"\r
      :modules="modules"\r
      :loop="true"\r
      :slides-per-view="3"\r
      :slides-per-group="3"\r
      :space-between="14"\r
      :pagination="{ clickable: true }"\r
      :watch-slides-progress="true"\r
      :prevent-clicks="false"\r
      :prevent-clicks-propagation="false"\r
      wrapper-tag="div"\r
      @swiper="handleHSwiperReady"\r
      @slide-change="handleHSwiperSlideChange"\r
    >\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 1</span>\r
      </swiper-slide>\r
      <swiper-slide class="slide" v-slot="slide">\r
        <pre>{{ slide }}</pre>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 3</span>\r
        <button class="click swiper-no-swiping" @click.prevent="handleHwiperSlideClick(3)">\r
          {{ isSlideClicked(3) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 4</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(4)">\r
          {{ isSlideClicked(4) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 5</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(5)">\r
          {{ isSlideClicked(5) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 6</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(6)">\r
          {{ isSlideClicked(6) ? 'clicked \u2705' : 'click me \u{1F446}' }}\r
        </button>\r
      </swiper-slide>\r
    </swiper>\r
    <swiper\r
      class="vertical-swiper"\r
      :modules="modules"\r
      direction="vertical"\r
      :slides-per-view="2"\r
      :space-between="18"\r
      :mousewheel="true"\r
      @swiper="setVSwiperRef"\r
      @slide-change="updateVSwiperIndex"\r
    >\r
      <swiper-slide class="slide">\r
        <ulink class="link" href="https://swiperjs.com/">swiperjs.com</ulink>\r
        <i class="iconfont icon-link-external"></i>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <ulink class="link" href="https://github.com/nolimits4web/swiper/discussions">\r
          discussions\r
        </ulink>\r
        <i class="iconfont icon-link-external"></i>\r
      </swiper-slide>\r
      <swiper-slide class="slide">Slide 3</swiper-slide>\r
      <swiper-slide class="slide">Slide 4</swiper-slide>\r
      <swiper-slide class="slide">Slide 5</swiper-slide>\r
      <swiper-slide class="slide">Slide 6</swiper-slide>\r
      <template #container-start>\r
        <button\r
          class="nav-button-prev"\r
          :disabled="vSwiperIndex === 0"\r
          @click="prevVSwiperSlide"\r
        >\r
          <i class="iconfont icon-arrow-down"></i>\r
        </button>\r
      </template>\r
      <template #container-end>\r
        <button\r
          class="nav-button-next"\r
          :disabled="vSwiperIndex === 5 - 1"\r
          @click="nextVSwiperSlide"\r
        >\r
          <i class="iconfont icon-arrow-up"></i>\r
        </button>\r
      </template>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref, reactive } from 'vue'\r
  import SwiperClass, { Pagination, Navigation, Grid, Mousewheel } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-advance',\r
    title: 'Advance example',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      // horizontal swiper\r
      const handleHSwiperReady = (swiper: SwiperClass) => {\r
        console.log('SwiperComponentReady!', swiper)\r
      }\r
      const handleHSwiperSlideChange = (swiper: SwiperClass) => {\r
        console.log('handleHSwiperSlideChange!', swiper.realIndex)\r
      }\r
      const clickedMap = reactive(new Map<number, boolean>())\r
      const isSlideClicked = (id: number) => clickedMap.get(id)\r
      const handleHwiperSlideClick = (id: number) => {\r
        clickedMap.set(id, true)\r
        console.log('Click slide! target slide id:', id)\r
      }\r
\r
      // vertical swiper\r
      let vSwiperRef: SwiperClass | null = null\r
      const setVSwiperRef = (swiper: SwiperClass) => {\r
        vSwiperRef = swiper\r
      }\r
      const vSwiperIndex = ref<number>()\r
      const updateVSwiperIndex = () => {\r
        vSwiperIndex.value = vSwiperRef?.activeIndex\r
      }\r
      const prevVSwiperSlide = () => vSwiperRef?.slidePrev()\r
      const nextVSwiperSlide = () => vSwiperRef?.slideNext()\r
\r
      return {\r
        modules: [Grid, Pagination, Navigation, Mousewheel],\r
\r
        handleHSwiperReady,\r
        handleHSwiperSlideChange,\r
        handleHwiperSlideClick,\r
        isSlideClicked,\r
\r
        setVSwiperRef,\r
        vSwiperIndex,\r
        updateVSwiperIndex,\r
        prevVSwiperSlide,\r
        nextVSwiperSlide\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @use 'sass:math';\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .advance-example {\r
    height: auto;\r
\r
    .horizontal-swiper {\r
      width: 100%;\r
      height: 240px;\r
      margin-bottom: $lg-gap;\r
\r
      /* for swiper loop mode */\r
      ::v-deep(.slide) {\r
        @include swiper-slide();\r
        flex-direction: column;\r
        font-size: $font-size-huge;\r
        background-color: $banner-bg;\r
\r
        pre {\r
          font-size: $font-size-base;\r
        }\r
      }\r
    }\r
\r
    .vertical-swiper {\r
      @include swiper-wrapper($height: 200px);\r
      position: relative;\r
    }\r
\r
    .slide {\r
      @include swiper-slide();\r
      font-size: $font-size-huge;\r
\r
      .link {\r
        text-decoration: none;\r
        margin-right: $xs-gap;\r
        color: $text-color;\r
        &:hover {\r
          color: $link-color;\r
        }\r
\r
        & + .iconfont {\r
          margin-top: 0.5em;\r
          font-size: $font-size-small;\r
        }\r
      }\r
\r
      .click {\r
        padding: 0.5em 1em;\r
        border: none;\r
        margin-top: 1.4rem;\r
        color: $text-color;\r
        background-color: $header-bg;\r
        border-radius: $sm-radius;\r
        cursor: pointer;\r
        &:hover {\r
          color: $link-color;\r
          background-color: $body-bg;\r
        }\r
      }\r
    }\r
\r
    .nav-button-next,\r
    .nav-button-prev {\r
      position: absolute;\r
      z-index: 9;\r
      top: 50%;\r
      margin: 0;\r
      padding: 0;\r
      border: none;\r
      $size: 2.4rem;\r
      width: $size;\r
      height: $size;\r
      margin-top: math.div(-$size, 2);\r
      display: inline-flex;\r
      justify-content: center;\r
      align-items: center;\r
      border-radius: 100%;\r
      opacity: 0.5;\r
      color: rgba(white, 0.6);\r
      background-color: var(--swiper-theme-color);\r
      transition: opacity $transition-time, visibility $transition-time;\r
      &[disabled] {\r
        cursor: no-drop;\r
        opacity: 0.3;\r
      }\r
      &:not([disabled]) {\r
        cursor: pointer;\r
        &:hover {\r
          opacity: 1;\r
          color: white;\r
        }\r
      }\r
\r
      .iconfont {\r
        transform: rotate(180deg);\r
      }\r
    }\r
\r
    .nav-button-next {\r
      right: $lg-gap * 2;\r
    }\r
\r
    .nav-button-prev {\r
      left: $lg-gap * 2;\r
    }\r
  }\r
</style>\r
`,"./02-default.vue":`<template>\r
  <swiper class="swiper">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-default',\r
    title: 'Default',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./03-navigation.vue":`<template>\r
  <swiper class="swiper" :modules="modules" navigation>\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-navigation',\r
    title: 'Navigation',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./04-pagination.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination',\r
    title: 'Pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./05-pagination-dynamic.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :pagination="{ clickable: true, dynamicBullets: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-dynamic',\r
    title: 'Pagination / Dynamic bullets',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./06-pagination-progress.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ type: 'progressbar' }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-progress',\r
    title: 'Progress pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./07-pagination-fraction.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ type: 'fraction' }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-fraction',\r
    title: 'Fraction pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./08-pagination-custom.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :pagination="{ clickable: true, renderBullet: bulletRenderer }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-pagination-custom',\r
    title: 'Custom pagination',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const bulletRenderer = (index: number, className: string) => {\r
        const _className = \`\${className} swiper-pagination-bullet-custom\`\r
        return \`<span class="\${_className}">\${index + 1}</span>\`\r
      }\r
\r
      return {\r
        bulletRenderer,\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    ::v-deep(.swiper-pagination-bullet-custom) {\r
      $size: 20px;\r
      width: $size !important;\r
      height: $size !important;\r
      line-height: $size !important;\r
      text-align: center;\r
      background-color: $header-bg;\r
      color: $text-disabled;\r
      transition: all 0.2s;\r
      opacity: 0.6;\r
      &:hover {\r
        opacity: 1;\r
        color: $text-color;\r
      }\r
\r
      &.swiper-pagination-bullet-active {\r
        opacity: 1;\r
        color: $white;\r
        background-color: var(--swiper-theme-color);\r
      }\r
    }\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./09-scrollbar.vue":`<template>\r
  <swiper class="swiper" :modules="modules" :scrollbar="{ hide: true }">\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Scrollbar } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/scrollbar'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-scrollbar',\r
    title: 'Scrollbar',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Scrollbar]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./10-vertical.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    direction="vertical"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-vertical',\r
    title: 'Vertical slider',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./11-space-between.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-space-between',\r
    title: 'Space between slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./12-slides-per-view.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="3"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-multiple-slides-per-biew',\r
    title: 'Multiple slides per view',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./13-slides-per-view-auto.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    slides-per-view="auto"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slides-per-view-auto',\r
    title: 'Slides per view auto',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    width: 80%;\r
\r
    &:nth-child(2n) {\r
      width: 60%;\r
    }\r
    &:nth-child(3n) {\r
      width: 40%;\r
    }\r
  }\r
</style>\r
`,"./14-centered.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="4"\r
    :centered-slides="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-centered-slides',\r
    title: 'Centered slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./15-centered-auto.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    slides-per-view="auto"\r
    :centered-slides="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-centered-auto',\r
    title: 'Centered slides + auto slides per view',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    width: 80%;\r
\r
    &:nth-child(2n) {\r
      width: 60%;\r
    }\r
    &:nth-child(3n) {\r
      width: 40%;\r
    }\r
  }\r
</style>\r
`,"./16-freemode.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="3"\r
    :free-mode="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, FreeMode } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/free-mode'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-free-mode',\r
    title: 'Free mode / no fixed positions',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, FreeMode]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./17-scroll-container.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    direction="vertical"\r
    :slides-per-view="'auto'"\r
    :free-mode="true"\r
    :scrollbar="true"\r
    :mousewheel="true"\r
  >\r
    <swiper-slide class="slide">\r
      <h2>I Have a Dream</h2>\r
      <p>\r
        I am happy to join with you today in what will go down in history as the greatest\r
        demonstration for freedom in the history of our nation.\r
      </p>\r
      <p>\r
        Five score years ago, a great American, in whose symbolic shadow we stand today,\r
        signed the Emancipation Proclamation. This momentous decree came as a great beacon\r
        light of hope to millions of Negro slaves who had been seared in the flames of\r
        withering injustice. It came as a joyous daybreak to end the long night of their\r
        captivity.\r
      </p>\r
      <p>\r
        But one hundred years later, the Negro still is not free. One hundred years later,\r
        the life of the Negro is still sadly crippled by the manacles of segregation and the\r
        chains of discrimination. One hundred years later, the Negro lives on a lonely\r
        island of poverty in the midst of a vast ocean of material prosperity. One hundred\r
        years later, the Negro is still languishing in the corners of American society and\r
        finds himself an exile in his own land. So we have come here today to dramatize a\r
        shameful condition.\r
      </p>\r
      <p>\r
        In a sense we have come to our nation's capital to cash a check. When the architects\r
        of our republic wrote the magnificent words of the Constitution and the Declaration\r
        of Independence, they were signing a promissory note to which every American was to\r
        fall heir. This note was a promise that all men, yes, black men as well as white\r
        men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of\r
        happiness.\r
      </p>\r
      <p>\r
        It is obvious today that America has defaulted on this promissory note insofar as\r
        her citizens of color are concerned. Instead of honoring this sacred obligation,\r
        America has given the Negro people a bad check, a check which has come back marked\r
        "insufficient funds." But we refuse to believe that the bank of justice is bankrupt.\r
        We refuse to believe that there are insufficient funds in the great vaults of\r
        opportunity of this nation. So we have come to cash this check \u2014 a check that will\r
        give us upon demand the riches of freedom and the security of justice. We have also\r
        come to this hallowed spot to remind America of the fierce urgency of now. This is\r
        no time to engage in the luxury of cooling off or to take the tranquilizing drug of\r
        gradualism. Now is the time to make real the promises of democracy. Now is the time\r
        to rise from the dark and desolate valley of segregation to the sunlit path of\r
        racial justice. Now is the time to lift our nation from the quick sands of racial\r
        injustice to the solid rock of brotherhood. Now is the time to make justice a\r
        reality for all of God's children.\r
      </p>\r
      <p>\r
        It would be fatal for the nation to overlook the urgency of the moment. This\r
        sweltering summer of the Negro's legitimate discontent will not pass until there is\r
        an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end,\r
        but a beginning. Those who hope that the Negro needed to blow off steam and will now\r
        be content will have a rude awakening if the nation returns to business as usual.\r
        There will be neither rest nor tranquility in America until the Negro is granted his\r
        citizenship rights. The whirlwinds of revolt will continue to shake the foundations\r
        of our nation until the bright day of justice emerges.\r
      </p>\r
      <p>\r
        But there is something that I must say to my people who stand on the warm threshold\r
        which leads into the palace of justice. In the process of gaining our rightful place\r
        we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for\r
        freedom by drinking from the cup of bitterness and hatred.\r
      </p>\r
      <p>\r
        We must forever conduct our struggle on the high plane of dignity and discipline. We\r
        must not allow our creative protest to degenerate into physical violence. Again and\r
        again we must rise to the majestic heights of meeting physical force with soul\r
        force. The marvelous new militancy which has engulfed the Negro community must not\r
        lead us to distrust of all white people, for many of our white brothers, as\r
        evidenced by their presence here today, have come to realize that their destiny is\r
        tied up with our destiny and their freedom is inextricably bound to our freedom. We\r
        cannot walk alone.\r
      </p>\r
      <p>\r
        As we walk, we must make the pledge that we shall march ahead. We cannot turn back.\r
        There are those who are asking the devotees of civil rights, "When will you be\r
        satisfied?" We can never be satisfied as long as the Negro is the victim of the\r
        unspeakable horrors of police brutality. We can never be satisfied, as long as our\r
        bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the\r
        highways and the hotels of the cities. We can never be satisfied as long as a Negro\r
        in Mississippi cannot vote and a Negro in New York believes he has nothing for which\r
        to vote. No, no, we are not satisfied, and we will not be satisfied until justice\r
        rolls down like waters and righteousness like a mighty stream.\r
      </p>\r
      <p>\r
        I am not unmindful that some of you have come here out of great trials and\r
        tribulations. Some of you have come fresh from narrow jail cells. Some of you have\r
        come from areas where your quest for freedom left you battered by the storms of\r
        persecution and staggered by the winds of police brutality. You have been the\r
        veterans of creative suffering. Continue to work with the faith that unearned\r
        suffering is redemptive.\r
      </p>\r
      <p>\r
        Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to\r
        Georgia, go back to Louisiana, go back to the slums and ghettos of our northern\r
        cities, knowing that somehow this situation can and will be changed. Let us not\r
        wallow in the valley of despair.\r
      </p>\r
      <p>\r
        I say to you today, my friends, so even though we face the difficulties of today and\r
        tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.\r
      </p>\r
      <p>\r
        I have a dream that one day this nation will rise up and live out the true meaning\r
        of its creed: "We hold these truths to be self-evident: that all men are created\r
        equal."\r
      </p>\r
      <p>\r
        I have a dream that one day on the red hills of Georgia the sons of former slaves\r
        and the sons of former slave owners will be able to sit down together at the table\r
        of brotherhood.\r
      </p>\r
      <p>\r
        I have a dream that one day even the state of Mississippi, a state sweltering with\r
        the heat of injustice, sweltering with the heat of oppression, will be transformed\r
        into an oasis of freedom and justice.\r
      </p>\r
      <p>\r
        I have a dream that my four little children will one day live in a nation where they\r
        will not be judged by the color of their skin but by the content of their character.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day, down in Alabama, with its vicious racists, with its\r
        governor having his lips dripping with the words of interposition and nullification;\r
        one day right there in Alabama, little black boys and black girls will be able to\r
        join hands with little white boys and white girls as sisters and brothers.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day every valley shall be exalted, every hill and mountain\r
        shall be made low, the rough places will be made plain, and the crooked places will\r
        be made straight, and the glory of the Lord shall be revealed, and all flesh shall\r
        see it together.\r
      </p>\r
      <p>\r
        This is our hope. This is the faith that I go back to the South with. With this\r
        faith we will be able to hew out of the mountain of despair a stone of hope. With\r
        this faith we will be able to transform the jangling discords of our nation into a\r
        beautiful symphony of brotherhood. With this faith we will be able to work together,\r
        to pray together, to struggle together, to go to jail together, to stand up for\r
        freedom together, knowing that we will be free one day.\r
      </p>\r
      <p>\r
        This will be the day when all of God's children will be able to sing with a new\r
        meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land\r
        where my fathers died, land of the pilgrim's pride, from every mountainside, let\r
        freedom ring."\r
      </p>\r
      <p>\r
        And if America is to be a great nation this must become true. So let freedom ring\r
        from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty\r
        mountains of New York. Let freedom ring from the heightening Alleghenies of\r
        Pennsylvania!\r
      </p>\r
      <p>Let freedom ring from the snowcapped Rockies of Colorado!</p>\r
      <p>Let freedom ring from the curvaceous slopes of California!</p>\r
      <p>But not only that; let freedom ring from Stone Mountain of Georgia!</p>\r
      <p>Let freedom ring from Lookout Mountain of Tennessee!</p>\r
      <p>\r
        Let freedom ring from every hill and molehill of Mississippi. From every\r
        mountainside, let freedom ring.\r
      </p>\r
      <p>\r
        And when this happens, When we allow freedom to ring, when we let it ring from every\r
        village and every hamlet, from every state and every city, we will be able to speed\r
        up that day when all of God's children, black men and white men, Jews and Gentiles,\r
        Protestants and Catholics, will be able to join hands and sing in the words of the\r
        old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at\r
        last!"\r
      </p>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/free-mode'\r
  import 'swiper/css/scrollbar'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-scroll-container',\r
    title: 'Scroll container',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, FreeMode, Scrollbar, Mousewheel]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 32em);\r
\r
    .slide {\r
      height: auto;\r
      padding: 30px;\r
      box-sizing: border-box;\r
      font-size: 18px !important;\r
      text-align: left !important;\r
      background: $banner-bg;\r
\r
      p {\r
        line-height: 2;\r
      }\r
    }\r
  }\r
</style>\r
`,"./18-slides-per-column.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="3"\r
    :grid="{ rows: 2 }"\r
    :space-between="30"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
    <swiper-slide class="slide">Slide 9</swiper-slide>\r
    <swiper-slide class="slide">Slide 10</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Grid } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/grid'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slides-per-column',\r
    title: 'Multi row slides layout',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Grid]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 430px);\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    height: 200px;\r
  }\r
</style>\r
`,"./19-nested.vue":`<template>\r
  <swiper\r
    class="swiper swiper-h"\r
    :modules="modules"\r
    :space-between="50"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Horizontal Slide 1</swiper-slide>\r
    <swiper-slide class="slide">\r
      <swiper\r
        class="swiper-v"\r
        :modules="modules"\r
        direction="vertical"\r
        :spaceBetween="50"\r
        :pagination="{ clickable: true }"\r
      >\r
        <swiper-slide class="slide">Vertical Slide 1</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 2</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 3</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 4</swiper-slide>\r
        <swiper-slide class="slide">Vertical Slide 5</swiper-slide>\r
      </swiper>\r
    </swiper-slide>\r
    <swiper-slide class="slide">Horizontal Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Horizontal Slide 4</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-nested',\r
    title: 'Nested swipers',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
\r
  .swiper-v {\r
    background-color: rgb(22 27 34 / 80%);\r
  }\r
</style>\r
`,"./20-grab-cursor.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="4"\r
    :centered-slides="true"\r
    :space-between="30"\r
    :grab-cursor="true"\r
    :pagination="{\r
      clickable: true\r
    }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-grab-cursor',\r
    title: 'Grab cursor',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    width: 60%;\r
\r
    &:nth-child(2n) {\r
      width: 40%;\r
    }\r
    &:nth-child(3n) {\r
      width: 20%;\r
    }\r
  }\r
</style>\r
`,"./21-infinite-loop.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="1"\r
    :space-between="30"\r
    :loop="true"\r
    :pagination="{ clickable: true }"\r
    :navigation="true"\r
  >\r
    <swiper-slide>Slide 1</swiper-slide>\r
    <swiper-slide>Slide 2</swiper-slide>\r
    <swiper-slide>Slide 3</swiper-slide>\r
    <swiper-slide>Slide 4</swiper-slide>\r
    <swiper-slide>Slide 5</swiper-slide>\r
    <swiper-slide>Slide 6</swiper-slide>\r
    <swiper-slide>Slide 7</swiper-slide>\r
    <swiper-slide>Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-loop',\r
    title: 'Loop mode / Infinite loop',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./22-infinite-loop-with-slides-per-group.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :slides-per-view="3"\r
    :slides-per-group="3"\r
    :loop="true"\r
    :loop-fill-group-with-blank="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide>Slide 1</swiper-slide>\r
    <swiper-slide>Slide 2</swiper-slide>\r
    <swiper-slide>Slide 3</swiper-slide>\r
    <swiper-slide>Slide 4</swiper-slide>\r
    <swiper-slide>Slide 5</swiper-slide>\r
    <swiper-slide>Slide 6</swiper-slide>\r
    <swiper-slide>Slide 7</swiper-slide>\r
    <swiper-slide>Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-loop-group',\r
    title: 'Loop mode with multiple slides per group',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./23-slides-per-group-skip.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="2"\r
    :slides-per-group="2"\r
    :slides-per-group-skip="1"\r
    :centered-slides="false"\r
    :grab-cursor="true"\r
    :keyboard="{ enabled: true }"\r
    :scrollbar="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/scrollbar'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slides-per-group-skip',\r
    title: 'Slides per group skip',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Keyboard, Scrollbar, Navigation, Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    color: $white;\r
    &:nth-child(1) {\r
      background-color: #0092fd;\r
    }\r
    &:nth-child(2),\r
    &:nth-child(3) {\r
      background-color: #42d7b5;\r
    }\r
    &:nth-child(4),\r
    &:nth-child(5) {\r
      background-color: #6dd400;\r
    }\r
    &:nth-child(6),\r
    &:nth-child(7) {\r
      background-color: #f8b501;\r
    }\r
    &:nth-child(8) {\r
      background-color: #f96300;\r
    }\r
  }\r
</style>\r
`,"./24-effect-fade.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :effect="'fade'"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide" v-for="index in 5" :key="index">\r
      <img :src="\`/images/example/\${index}.jpg\`" />\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, EffectFade } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/effect-fade'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-fade-effect',\r
    title: 'Fade effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, EffectFade]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 360px);\r
\r
    .slide {\r
      @include swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
      }\r
    }\r
  }\r
</style>\r
`,"./25-effect-coverflow.vue":`<template>\r
  <div class="coverflow-example">\r
    <swiper\r
      class="swiper"\r
      :modules="modules"\r
      :pagination="true"\r
      :effect="'coverflow'"\r
      :grab-cursor="true"\r
      :centered-slides="true"\r
      :slides-per-view="'auto'"\r
      :coverflow-effect="{\r
        rotate: 50,\r
        stretch: 0,\r
        depth: 100,\r
        modifier: 1,\r
        slideShadows: true\r
      }"\r
    >\r
      <swiper-slide class="slide" v-for="index in 8" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, EffectCoverflow } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/effect-coverflow'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-3d-coverflow',\r
    title: '3D Coverflow effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, EffectCoverflow]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .coverflow-example {\r
    @include swiper-wrapper($height: 380px);\r
    position: relative;\r
  }\r
\r
  .swiper {\r
    height: 100%;\r
    width: 100%;\r
    padding-top: 50px;\r
    padding-bottom: 50px;\r
\r
    .slide {\r
      width: 300px;\r
      height: 300px;\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
</style>\r
`,"./26-effect-cube.vue":`<template>\r
  <div class="cube-example">\r
    <swiper\r
      class="swiper"\r
      :modules="modules"\r
      :pagination="true"\r
      :effect="'cube'"\r
      :grab-cursor="true"\r
      :cube-effect="{\r
        shadow: true,\r
        slideShadows: true,\r
        shadowOffset: 20,\r
        shadowScale: 0.94\r
      }"\r
    >\r
      <swiper-slide class="slide" v-for="index in 5" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, EffectCube } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/effect-cube'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-3d-cube',\r
    title: '3D Cube effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, EffectCube]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .cube-example {\r
    @include swiper-wrapper($height: 380px);\r
    position: relative;\r
  }\r
\r
  .swiper {\r
    width: 300px !important;\r
    height: 300px;\r
    position: absolute;\r
    left: 50%;\r
    top: 50%;\r
    margin-left: -150px;\r
    margin-top: -150px;\r
\r
    .slide {\r
      @include swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
</style>\r
`,"./27-effect-flip.vue":`<template>\r
  <div class="flip-example">\r
    <swiper\r
      class="swiper"\r
      :modules="modules"\r
      :effect="'flip'"\r
      :grab-cursor="true"\r
      :pagination="true"\r
      :navigation="true"\r
    >\r
      <swiper-slide class="slide" v-for="index in 6" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, EffectFlip } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/effect-flip'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-3d-flip',\r
    title: '3D Flip effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, EffectFlip]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .flip-example {\r
    position: relative;\r
  }\r
\r
  .swiper {\r
    width: 300px;\r
    height: 300px;\r
    padding: 50px;\r
    box-sizing: content-box;\r
\r
    .slide {\r
      width: 300px;\r
      height: 300px;\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
</style>\r
`,"./28-effect-creative.vue":`<template>\r
  <div class="creative-example">\r
    <div class="toolbar">\r
      <button v-for="(_, index) in effects" :key="index" @click="setEffect(index)">\r
        Effect {{ index }}\r
      </button>\r
    </div>\r
    <swiper\r
      v-if="render"\r
      class="swiper"\r
      :modules="modules"\r
      :effect="'creative'"\r
      :creative-effect="effects[effectIndex]"\r
      :grab-cursor="true"\r
      :pagination="true"\r
    >\r
      <swiper-slide class="slide" v-for="index in 6" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, nextTick, ref } from 'vue'\r
  import SwiperClass, { Pagination, EffectCreative } from 'swiper'\r
  import { CreativeEffectOptions } from 'swiper/types'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/effect-creative'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-effect-creative',\r
    title: 'Creative effect',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const render = ref(true)\r
      const effectIndex = ref(0)\r
      const setEffect = (index: number) => {\r
        effectIndex.value = index\r
        nextTick(() => {\r
          render.value = false\r
          nextTick(() => {\r
            render.value = true\r
          })\r
        })\r
      }\r
\r
      const effects: CreativeEffectOptions[] = [\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: [0, 0, -400]\r
          },\r
          next: {\r
            translate: ['100%', 0, 0]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: ['-120%', 0, -500]\r
          },\r
          next: {\r
            shadow: true,\r
            translate: ['120%', 0, -500]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: ['-20%', 0, -1]\r
          },\r
          next: {\r
            translate: ['100%', 0, 0]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: [0, 0, -800],\r
            rotate: [180, 0, 0]\r
          },\r
          next: {\r
            shadow: true,\r
            translate: [0, 0, -800],\r
            rotate: [-180, 0, 0]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            translate: ['-125%', 0, -800],\r
            rotate: [0, 0, -90]\r
          },\r
          next: {\r
            shadow: true,\r
            translate: ['125%', 0, -800],\r
            rotate: [0, 0, 90]\r
          }\r
        },\r
        {\r
          prev: {\r
            shadow: true,\r
            origin: 'left center',\r
            translate: ['-5%', 0, -200],\r
            rotate: [0, 100, 0]\r
          },\r
          next: {\r
            origin: 'right center',\r
            translate: ['5%', 0, -200],\r
            rotate: [0, -100, 0]\r
          }\r
        }\r
      ]\r
\r
      return {\r
        effects,\r
        effectIndex,\r
        render,\r
        setEffect,\r
        modules: [Pagination, EffectCreative]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .creative-example {\r
    position: relative;\r
    background-color: $banner-bg;\r
  }\r
\r
  .swiper {\r
    margin: 20px auto;\r
    width: 300px;\r
    height: 300px;\r
\r
    .slide {\r
      @include swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
\r
  .toolbar {\r
    @include toolbar();\r
\r
    button {\r
      @include toolbar-button();\r
    }\r
  }\r
</style>\r
`,"./29-keyboard-control.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="1"\r
    :space-between="30"\r
    :keyboard="{ enabled: true }"\r
    :pagination="{ clickable: true }"\r
    :navigation="true"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, Keyboard } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-keyboard-control',\r
    title: 'Keyboard control',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, Keyboard]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./30-mousewheel-control.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :direction="'vertical'"\r
    :slides-per-view="1"\r
    :space-between="30"\r
    :mousewheel="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Mousewheel } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-mousewheel-control',\r
    title: 'Mousewheel control',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Mousewheel]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./31-autoplay.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :space-between="30"\r
    :centered-slides="true"\r
    :navigation="true"\r
    :pagination="{\r
      clickable: true\r
    }"\r
    :autoplay="{\r
      delay: 2500,\r
      disableOnInteraction: false\r
    }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, Autoplay } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-autoplay',\r
    title: 'Autoplay',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, Autoplay]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./32-dynamic-slides.vue":`<template>\r
  <div class="dynamic-example">\r
    <div class="toolbar">\r
      <button @click="prependSlide">Prepend slide</button>\r
      <button @click="appendSlide">Append slide</button>\r
      <button @click="popSlide">Pop slide</button>\r
      <button @click="shiftSlide">Shift slide</button>\r
    </div>\r
    <swiper\r
      class="swiper"\r
      :slides-per-view="3"\r
      :centered-slides="true"\r
      :space-between="30"\r
      :pagination="{ type: 'fraction' }"\r
      :navigation="true"\r
      :modules="modules"\r
    >\r
      <swiper-slide v-for="slide in slides" :key="slide" class="slide">\r
        Slide {{ slide }}\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, reactive } from 'vue'\r
  // https://swiperjs.com/swiper-api#manipulation\r
  // MARK: Manipulation module adds useful Swiper methods to manipulate slides. It makes sense to use it only with Swiper Core version, not intended to be uses with Swiper Angular, React, Svelte or Vue.\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-dynamic-slides',\r
    title: 'Dynamic slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const slides = reactive([1, 2, 3, 4, 5])\r
      return {\r
        modules: [Pagination, Navigation],\r
        slides,\r
        appendSlide: () => slides.push(slides.length + 1),\r
        prependSlide: () => slides.unshift(slides[0] - 1),\r
        popSlide: () => slides.pop(),\r
        shiftSlide: () => slides.shift()\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .dynamic-example {\r
    height: auto;\r
\r
    .toolbar {\r
      @include toolbar();\r
\r
      button {\r
        @include toolbar-button();\r
      }\r
    }\r
\r
    .swiper {\r
      @include swiper-wrapper();\r
    }\r
\r
    .slide {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./33-thumbs-gallery.vue":`<template>\r
  <div class="thumb-example">\r
    <swiper\r
      class="top-swiper"\r
      :style="{\r
        '--swiper-navigation-color': '#fff',\r
        '--swiper-pagination-color': '#fff'\r
      }"\r
      :modules="modules"\r
      :space-between="10"\r
      :navigation="true"\r
      :thumbs="{ swiper: thumbsSwiper }"\r
    >\r
      <swiper-slide class="slide" v-for="index in 8" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
    <swiper\r
      class="thumbs-swiper"\r
      :modules="modules"\r
      :space-between="10"\r
      :slides-per-view="4"\r
      :watch-slides-progress="true"\r
      :prevent-clicks="false"\r
      :prevent-clicks-propagation="false"\r
      @swiper="setThumbsSwiper"\r
    >\r
      <swiper-slide class="slide" v-for="index in 8" :key="index">\r
        <img :src="\`/images/example/\${index}.jpg\`" />\r
      </swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref } from 'vue'\r
  import SwiperClass, { Navigation, Thumbs } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/thumbs'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-thumbs-gallery',\r
    title: 'Thumbs gallery with Two-way control',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      const thumbsSwiper = ref<SwiperClass>()\r
      const setThumbsSwiper = (swiper: SwiperClass) => {\r
        thumbsSwiper.value = swiper\r
      }\r
\r
      return {\r
        modules: [Navigation, Thumbs],\r
        setThumbsSwiper,\r
        thumbsSwiper\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .thumb-example {\r
    height: 480px;\r
    background-color: $black;\r
  }\r
\r
  .top-swiper,\r
  .thumbs-swiper {\r
    .slide {\r
      img {\r
        display: block;\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
    }\r
  }\r
\r
  .top-swiper {\r
    height: 80%;\r
    width: 100%;\r
  }\r
\r
  .thumbs-swiper {\r
    height: 20%;\r
    box-sizing: border-box;\r
    padding: $gap 0;\r
\r
    .slide {\r
      width: 25%;\r
      height: 100%;\r
      opacity: 1;\r
      &:not(.swiper-slide-thumb-active) {\r
        opacity: 0.4;\r
      }\r
    }\r
  }\r
</style>\r
`,"./34-zoom.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :style="{\r
      '--swiper-navigation-color': '#fff',\r
      '--swiper-pagination-color': '#fff'\r
    }"\r
    :modules="modules"\r
    :zoom="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide v-for="slide in 8" :key="slide" class="slide">\r
      <div class="swiper-zoom-container">\r
        <img :src="\`/images/example/\${slide}.jpg\`" />\r
      </div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation, Zoom } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/zoom'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-zoom',\r
    title: 'Zoom',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation, Zoom]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 400px);\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    overflow: hidden;\r
  }\r
</style>\r
`,"./35-lazy-load-images.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :style="{\r
      '--swiper-navigation-color': '#fff',\r
      '--swiper-pagination-color': '#fff'\r
    }"\r
    :modules="modules"\r
    :lazy="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide v-for="slide in 8" :key="slide" class="slide">\r
      <img :data-src="\`/images/example/\${slide}.jpg\`" class="swiper-lazy" />\r
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Lazy, Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/lazy'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-lazy-loading-image',\r
    title: 'Lazy loading images',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Lazy, Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
    background-color: black;\r
  }\r
\r
  .slide {\r
    text-align: center;\r
\r
    img {\r
      width: auto;\r
      height: auto;\r
      max-width: 100%;\r
      max-height: 100%;\r
      transform: translate(-50%, -50%);\r
      position: absolute;\r
      left: 50%;\r
      top: 50%;\r
    }\r
  }\r
</style>\r
`,"./36-parallax.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :style="{\r
      '--swiper-navigation-color': '#fff',\r
      '--swiper-pagination-color': '#fff'\r
    }"\r
    :modules="modules"\r
    :speed="600"\r
    :parallax="true"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <template #container-start>\r
      <div\r
        class="parallax-bg"\r
        data-swiper-parallax="-23%"\r
        :style="{ backgroundImage: 'url(/images/example/1.jpg)' }"\r
      ></div>\r
    </template>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 1</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis\r
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor\r
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac\r
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\r
          libero. Aenean feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 2</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis\r
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor\r
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac\r
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\r
          libero. Aenean feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 3</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis\r
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor\r
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac\r
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\r
          libero. Aenean feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Parallax, Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-parallax',\r
    title: 'Parallax',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Parallax, Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .parallax-bg {\r
    position: absolute;\r
    left: 0;\r
    top: 0;\r
    width: 130%;\r
    height: 100%;\r
    background-size: cover;\r
    background-position: center;\r
  }\r
\r
  .swiper {\r
    @include swiper-wrapper($height: 380px);\r
\r
    .slide {\r
      display: flex;\r
      flex-direction: column;\r
      justify-content: center;\r
      color: $white;\r
      box-sizing: border-box;\r
      padding: 0 100px;\r
      background-color: transparent;\r
\r
      .title {\r
        margin-top: 0;\r
        margin-bottom: $lg-gap;\r
      }\r
\r
      .subtitle {\r
        margin-top: 0;\r
        margin-bottom: $gap;\r
      }\r
\r
      .text {\r
        max-width: 430px;\r
        line-height: 1.32;\r
      }\r
    }\r
  }\r
</style>\r
`,"./37-rtl.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
    dir="rtl"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-rtl',\r
    title: 'RTL layout',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./38-responsive-breakpoints.vue":`<template>\r
  <div class="tip">\u2192 Resize the browser window \u2190</div>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :slides-per-view="1"\r
    :space-between="10"\r
    :pagination="{ clickable: true }"\r
    :breakpoints="{\r
      '640': {\r
        slidesPerView: 2,\r
        spaceBetween: 20\r
      },\r
      '768': {\r
        slidesPerView: 4,\r
        spaceBetween: 40\r
      },\r
      '1024': {\r
        slidesPerView: 5,\r
        spaceBetween: 50\r
      }\r
    }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
    <swiper-slide class="slide">Slide 9</swiper-slide>\r
    <swiper-slide class="slide">Slide 10</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-responsive-breakpoints',\r
    title: 'Responsive breakpoints',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .tip {\r
    width: 100%;\r
    line-height: 3em;\r
    text-align: center;\r
    border-bottom: 1px solid $border-color;\r
  }\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`,"./39-autoheight.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :auto-height="true"\r
    :space-between="20"\r
    :navigation="true"\r
    :pagination="{ clickable: true }"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-auto-height',\r
    title: 'Auto height',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      return {\r
        modules: [Pagination, Navigation]\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper($height: auto);\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
    height: 300px;\r
    line-height: 300px;\r
\r
    &:nth-child(2n) {\r
      height: 500px;\r
      line-height: 500px;\r
    }\r
  }\r
</style>\r
`,"./40-slideable-menu.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    slides-per-view="auto"\r
    :initial-slide="1"\r
    :resistance-ratio="0"\r
    @swiper="setSwiperRef"\r
    @slide-change="handleSlideChange"\r
  >\r
    <swiper-slide class="menu">Menu slide</swiper-slide>\r
    <swiper-slide class="content">\r
      <div class="menu-button" :class="{ opened: menuOpened }" @click="toggleMenu">\r
        <div class="bar"></div>\r
        <div class="bar"></div>\r
        <div class="bar"></div>\r
      </div>\r
      <div>Content slide</div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref } from 'vue'\r
  import SwiperClass from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-slideable-navigation-drawer',\r
    title: 'Slideable navigation drawer',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      let swiperRef: SwiperClass | null = null\r
      const setSwiperRef = (swiper: SwiperClass) => {\r
        swiperRef = swiper\r
      }\r
\r
      const menuOpened = ref(false)\r
      const toggleMenu = () => {\r
        menuOpened.value ? swiperRef?.slideNext() : swiperRef?.slidePrev()\r
      }\r
\r
      const handleSlideChange = () => {\r
        menuOpened.value = swiperRef?.activeIndex === 0\r
      }\r
\r
      return {\r
        menuOpened,\r
        toggleMenu,\r
        setSwiperRef,\r
        handleSlideChange\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    .menu,\r
    .content {\r
      @include swiper-slide();\r
    }\r
\r
    .menu {\r
      width: 320px;\r
      background-color: #2c8dfb !important;\r
      color: #fff;\r
    }\r
\r
    .menu-button {\r
      position: absolute;\r
      top: 0px;\r
      left: 0px;\r
      padding: 15px;\r
      cursor: pointer;\r
      transition: 0.3s;\r
      background-color: #2c8dfb;\r
\r
      .bar {\r
        position: relative;\r
        display: block;\r
        width: 50px;\r
        height: 5px;\r
        margin: 10px auto;\r
        background-color: #fff;\r
        border-radius: 10px;\r
        transition: 0.3s;\r
\r
        &:nth-of-type(1) {\r
          margin-top: 0px;\r
        }\r
        &:nth-of-type(3) {\r
          margin-bottom: 0px;\r
        }\r
      }\r
\r
      &:hover {\r
        .bar:nth-of-type(1) {\r
          transform: translateY(1.5px) rotate(-4.5deg);\r
        }\r
        .bar:nth-of-type(2) {\r
          opacity: 0.9;\r
        }\r
        .bar:nth-of-type(3) {\r
          transform: translateY(-1.5px) rotate(4.5deg);\r
        }\r
      }\r
\r
      &.opened {\r
        .bar:nth-of-type(1) {\r
          transform: translateY(15px) rotate(-45deg);\r
        }\r
        .bar:nth-of-type(2) {\r
          opacity: 0;\r
        }\r
        .bar:nth-of-type(3) {\r
          transform: translateY(-15px) rotate(45deg);\r
        }\r
\r
        &:hover {\r
          .bar:nth-of-type(1) {\r
            transform: translateY(13.5px) rotate(-40.5deg);\r
          }\r
          .bar:nth-of-type(2) {\r
            opacity: 0.1;\r
          }\r
          .bar:nth-of-type(3) {\r
            transform: translateY(-13.5px) rotate(40.5deg);\r
          }\r
        }\r
      }\r
    }\r
  }\r
</style>\r
`,"./41-virtual-slides.vue":`<template>\r
  <div class="toolbar">\r
    <button @click="prepend()" class="prepend-2-slides">Prepend 2 Slides</button>\r
    <button @click="slideTo(1)" class="prepend-slide">Slide 1</button>\r
    <button @click="slideTo(250)" class="slide-250">Slide 250</button>\r
    <button @click="slideTo(500)" class="slide-500">Slide 500</button>\r
    <button @click="append()" class="append-slides">Append Slide</button>\r
  </div>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    :virtual="true"\r
    :slides-per-view="3"\r
    :centered-slides="true"\r
    :space-between="30"\r
    :navigation="true"\r
    :pagination="{ type: 'fraction' }"\r
    @swiper="setSwiperRef"\r
  >\r
    <swiper-slide\r
      v-for="(slideContent, index) in slides"\r
      :key="index"\r
      :virtual-index="index"\r
      class="slide"\r
    >\r
      Slide {{ slideContent }}\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, reactive } from 'vue'\r
  import SwiperClass, { Pagination, Navigation, Virtual } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/pagination'\r
  import 'swiper/css/navigation'\r
  import 'swiper/css/virtual'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-virtual-slides',\r
    title: 'Virtual slides',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      let swiperRef: SwiperClass | null = null\r
      const setSwiperRef = (swiper: SwiperClass) => {\r
        swiperRef = swiper\r
      }\r
\r
      const slideTo = (index: number) => {\r
        swiperRef?.slideTo(index - 1, 0)\r
      }\r
\r
      // Create array with 500 slides\r
      const slides = reactive(Array.from({ length: 500 }).map((_, index) => index + 1))\r
\r
      let prependNumber = 1\r
      const prepend = () => {\r
        slides.unshift(prependNumber - 2, prependNumber - 1)\r
        prependNumber -= 2\r
        swiperRef?.slideTo(swiperRef.activeIndex + 2, 0)\r
      }\r
\r
      const append = () => {\r
        slides.push(slides.length)\r
      }\r
\r
      return {\r
        modules: [Pagination, Navigation, Virtual],\r
        setSwiperRef,\r
        slides,\r
        slideTo,\r
        append,\r
        prepend\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .toolbar {\r
    @include toolbar();\r
\r
    button {\r
      @include toolbar-button();\r
    }\r
  }\r
\r
  .swiper {\r
    height: 300px;\r
    width: 100%;\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiper-slide();\r
    }\r
  }\r
</style>\r
`,"./42-change-direction.vue":`<template>\r
  <swiper\r
    class="swiper"\r
    :modules="modules"\r
    direction="horizontal"\r
    :slides-per-view="3"\r
    :space-between="30"\r
    :navigation="true"\r
    @swiper="setSwiperRef"\r
    @resize="handleResize"\r
  >\r
    <swiper-slide class="slide">Slide 1</swiper-slide>\r
    <swiper-slide class="slide">Slide 2</swiper-slide>\r
    <swiper-slide class="slide">Slide 3</swiper-slide>\r
    <swiper-slide class="slide">Slide 4</swiper-slide>\r
    <swiper-slide class="slide">Slide 5</swiper-slide>\r
    <swiper-slide class="slide">Slide 6</swiper-slide>\r
    <swiper-slide class="slide">Slide 7</swiper-slide>\r
    <swiper-slide class="slide">Slide 8</swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import SwiperClass, { Navigation } from 'swiper'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-change-direction',\r
    title: 'Change direction',\r
    url: import.meta.url,\r
    components: {\r
      Swiper,\r
      SwiperSlide\r
    },\r
    setup() {\r
      let swiperRef: SwiperClass | null = null\r
      const setSwiperRef = (swiper: SwiperClass) => {\r
        swiperRef = swiper\r
      }\r
\r
      const handleResize = () => {\r
        swiperRef?.changeDirection(window.innerWidth <= 960 ? 'vertical' : 'horizontal')\r
      }\r
\r
      return {\r
        modules: [Navigation],\r
        setSwiperRef,\r
        handleResize\r
      }\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @import '@/styles/variables.scss';\r
  @import '@/styles/mixins.scss';\r
  @import './style.scss';\r
\r
  .swiper {\r
    @include swiper-wrapper();\r
\r
    &.swiper-vertical {\r
      ::v-deep(.swiper-button-next) {\r
        right: 20px;\r
        transform: rotate(90deg);\r
      }\r
      ::v-deep(.swiper-button-prev) {\r
        left: 20px;\r
        transform: rotate(90deg);\r
      }\r
    }\r
  }\r
\r
  .slide {\r
    @include swiper-slide();\r
  }\r
</style>\r
`};var rh=Object.keys(xs).map(s=>({component:xs[s].default,raw:ih[s],language:"vue"}));const nh={class:"swiper-example"},lh=R({setup(s){const e=tt.VueAwesomeSwiper,t=rh.map(yt);return it({title:pt(e),keywords:[ct(e),"How to use Swiper on vue3?"].join(","),description:ut(e)}),(i,l)=>(O(),V(ft,{repository:ae(e)},{default:f(()=>[m(An,{repository:ae(e)},{actions:f(()=>[m(Be,{icon:"doc",text:"Vue(2) examples",href:ae(rt)(ae(e))},null,8,["href"]),m(Be,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),m(Be,{icon:"doc",text:"Swiper Vue(3) component",href:"https://swiperjs.com/vue"}),m(Be,{icon:"discussions",text:"Swiper discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:f(()=>[m(tl,{examples:ae(t)},{component:f(n=>[T("div",nh,[(O(),V(bt(n.component)))])]),_:1},8,["examples"])]),_:1},8,["repository"])]),_:1},8,["repository"]))}});var fh=H(lh,[["__scopeId","data-v-0d6cf728"]]);export{fh as default};
