var at=Object.defineProperty,ot=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var xs=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var Cs=(s,e,t)=>e in s?at(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Me=(s,e)=>{for(var t in e||(e={}))pt.call(e,t)&&Cs(s,t,e[t]);if(xs)for(var t of xs(e))ct.call(e,t)&&Cs(s,t,e[t]);return s},Es=(s,e)=>ot(s,dt(e));import{d as ut,e as ms,S as ft,I as Ts,C as mt,c as ht,f as wt,R as gt,u as _t}from"./index.8d04f8c8.js";import{c as vt,d as hs,e as St,N as bt,f as yt,n as $t,g as xt,a as Ct,b as Et}from"./navbar.d8c5a1db.js";import{k as G,E as z,H as O,V,P as ue,m as re,u as ee,W as Ns,X as Bs,Y as Tt,Z as us,_ as Ds,$ as Gs,a0 as kt,z as ce,a1 as f,F as W,T as me,S as oe,O as $,a2 as qe,Q as te,M as ne,N as le,a3 as Se,U as fe,R as Oe,G as m,a4 as Fe,a5 as Pt,A as Ye,D as Mt,a6 as zt,a7 as It,a8 as Ot,a9 as g,aa as At}from"./vendor.5caa36e3.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";const jt=s=>{const e=s.component,t=new URL(e.url).pathname;return{name:e.name,title:e.title||e.name,path:t,url:vt(ut,t),component:e,raw:s.raw,language:s.language}};const Lt=G({props:{rootClass:String},setup(s){return(e,t)=>{const i=z("Adsense");return O(),V(i,{"root-class":`g-a-mammon ${s.rootClass}`,"data-ad-client":ue(ms),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-slot":"8733527061"},null,8,["root-class","data-ad-client"])}}});var Nt=R(Lt,[["__scopeId","data-v-4ecb3014"]]);const Bt=G({props:{rootClass:String},setup(s){return(e,t)=>{const i=z("Adsense");return O(),V(i,{"root-class":`g-a-mammon ${s.rootClass}`,"data-ad-client":ue(ms),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-slot":"7455679385"},null,8,["root-class","data-ad-client"])}}});var Dt=R(Bt,[["__scopeId","data-v-4c52745a"]]);const Gt=G({props:{rootClass:String},setup(s){return(e,t)=>{const i=z("Adsense");return O(),V(i,{"root-class":`g-a-mammon ${s.rootClass}`,"data-ad-client":ue(ms),"data-full-width-responsive":!0,"is-non-personalized-ads":!1,"data-ad-slot":"4010319351"},null,8,["root-class","data-ad-client"])}}});var Rt=R(Gt,[["__scopeId","data-v-296b74f5"]]);function ks(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function ws(s={},e={}){Object.keys(e).forEach(t=>{typeof s[t]=="undefined"?s[t]=e[t]:ks(e[t])&&ks(s[t])&&Object.keys(e[t]).length>0&&ws(s[t],e[t])})}const Rs={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function se(){const s=typeof document!="undefined"?document:{};return ws(s,Rs),s}const Ht={document:Rs,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout=="undefined"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout!="undefined"&&clearTimeout(s)}};function Q(){const s=typeof window!="undefined"?window:{};return ws(s,Ht),s}function Vt(s){const e=s.__proto__;Object.defineProperty(s,"__proto__",{get(){return e},set(t){e.__proto__=t}})}class _e extends Array{constructor(e){if(typeof e=="number")super(e);else{super(...e||[]);Vt(this)}}}function je(s=[]){const e=[];return s.forEach(t=>{Array.isArray(t)?e.push(...je(t)):e.push(t)}),e}function Hs(s,e){return Array.prototype.filter.call(s,e)}function Wt(s){const e=[];for(let t=0;t<s.length;t+=1)e.indexOf(s[t])===-1&&e.push(s[t]);return e}function Ft(s,e){if(typeof s!="string")return[s];const t=[],i=e.querySelectorAll(s);for(let l=0;l<i.length;l+=1)t.push(i[l]);return t}function I(s,e){const t=Q(),i=se();let l=[];if(!e&&s instanceof _e)return s;if(!s)return new _e(l);if(typeof s=="string"){const n=s.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let r="div";n.indexOf("<li")===0&&(r="ul"),n.indexOf("<tr")===0&&(r="tbody"),(n.indexOf("<td")===0||n.indexOf("<th")===0)&&(r="tr"),n.indexOf("<tbody")===0&&(r="table"),n.indexOf("<option")===0&&(r="select");const a=i.createElement(r);a.innerHTML=n;for(let d=0;d<a.childNodes.length;d+=1)l.push(a.childNodes[d])}else l=Ft(s.trim(),e||i)}else if(s.nodeType||s===t||s===i)l.push(s);else if(Array.isArray(s)){if(s instanceof _e)return s;l=s}return new _e(Wt(l))}I.fn=_e.prototype;function qt(...s){const e=je(s.map(t=>t.split(" ")));return this.forEach(t=>{t.classList.add(...e)}),this}function Yt(...s){const e=je(s.map(t=>t.split(" ")));return this.forEach(t=>{t.classList.remove(...e)}),this}function Xt(...s){const e=je(s.map(t=>t.split(" ")));this.forEach(t=>{e.forEach(i=>{t.classList.toggle(i)})})}function Ut(...s){const e=je(s.map(t=>t.split(" ")));return Hs(this,t=>e.filter(i=>t.classList.contains(i)).length>0).length>0}function Kt(s,e){if(arguments.length===1&&typeof s=="string")return this[0]?this[0].getAttribute(s):void 0;for(let t=0;t<this.length;t+=1)if(arguments.length===2)this[t].setAttribute(s,e);else for(const i in s)this[t][i]=s[i],this[t].setAttribute(i,s[i]);return this}function Zt(s){for(let e=0;e<this.length;e+=1)this[e].removeAttribute(s);return this}function Jt(s){for(let e=0;e<this.length;e+=1)this[e].style.transform=s;return this}function Qt(s){for(let e=0;e<this.length;e+=1)this[e].style.transitionDuration=typeof s!="string"?`${s}ms`:s;return this}function ei(...s){let[e,t,i,l]=s;typeof s[1]=="function"&&([e,i,l]=s,t=void 0),l||(l=!1);function n(u){const c=u.target;if(!c)return;const p=u.target.dom7EventData||[];if(p.indexOf(u)<0&&p.unshift(u),I(c).is(t))i.apply(c,p);else{const o=I(c).parents();for(let w=0;w<o.length;w+=1)I(o[w]).is(t)&&i.apply(o[w],p)}}function r(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),i.apply(this,c)}const a=e.split(" ");let d;for(let u=0;u<this.length;u+=1){const c=this[u];if(t)for(d=0;d<a.length;d+=1){const p=a[d];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[p]||(c.dom7LiveListeners[p]=[]),c.dom7LiveListeners[p].push({listener:i,proxyListener:n}),c.addEventListener(p,n,l)}else for(d=0;d<a.length;d+=1){const p=a[d];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[p]||(c.dom7Listeners[p]=[]),c.dom7Listeners[p].push({listener:i,proxyListener:r}),c.addEventListener(p,r,l)}}return this}function si(...s){let[e,t,i,l]=s;typeof s[1]=="function"&&([e,i,l]=s,t=void 0),l||(l=!1);const n=e.split(" ");for(let r=0;r<n.length;r+=1){const a=n[r];for(let d=0;d<this.length;d+=1){const u=this[d];let c;if(!t&&u.dom7Listeners?c=u.dom7Listeners[a]:t&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[a]),c&&c.length)for(let p=c.length-1;p>=0;p-=1){const o=c[p];i&&o.listener===i||i&&o.listener&&o.listener.dom7proxy&&o.listener.dom7proxy===i?(u.removeEventListener(a,o.proxyListener,l),c.splice(p,1)):i||(u.removeEventListener(a,o.proxyListener,l),c.splice(p,1))}}}return this}function ti(...s){const e=Q(),t=s[0].split(" "),i=s[1];for(let l=0;l<t.length;l+=1){const n=t[l];for(let r=0;r<this.length;r+=1){const a=this[r];if(e.CustomEvent){const d=new e.CustomEvent(n,{detail:i,bubbles:!0,cancelable:!0});a.dom7EventData=s.filter((u,c)=>c>0),a.dispatchEvent(d),a.dom7EventData=[],delete a.dom7EventData}}}return this}function ii(s){const e=this;function t(i){i.target===this&&(s.call(this,i),e.off("transitionend",t))}return s&&e.on("transitionend",t),this}function ri(s){if(this.length>0){if(s){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function ni(s){if(this.length>0){if(s){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function li(){if(this.length>0){const s=Q(),e=se(),t=this[0],i=t.getBoundingClientRect(),l=e.body,n=t.clientTop||l.clientTop||0,r=t.clientLeft||l.clientLeft||0,a=t===s?s.scrollY:t.scrollTop,d=t===s?s.scrollX:t.scrollLeft;return{top:i.top+a-n,left:i.left+d-r}}return null}function ai(){const s=Q();return this[0]?s.getComputedStyle(this[0],null):{}}function oi(s,e){const t=Q();let i;if(arguments.length===1)if(typeof s=="string"){if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(s)}else{for(i=0;i<this.length;i+=1)for(const l in s)this[i].style[l]=s[l];return this}if(arguments.length===2&&typeof s=="string"){for(i=0;i<this.length;i+=1)this[i].style[s]=e;return this}return this}function di(s){return s?(this.forEach((e,t)=>{s.apply(e,[e,t])}),this):this}function pi(s){const e=Hs(this,s);return I(e)}function ci(s){if(typeof s=="undefined")return this[0]?this[0].innerHTML:null;for(let e=0;e<this.length;e+=1)this[e].innerHTML=s;return this}function ui(s){if(typeof s=="undefined")return this[0]?this[0].textContent.trim():null;for(let e=0;e<this.length;e+=1)this[e].textContent=s;return this}function fi(s){const e=Q(),t=se(),i=this[0];let l,n;if(!i||typeof s=="undefined")return!1;if(typeof s=="string"){if(i.matches)return i.matches(s);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(s);if(i.msMatchesSelector)return i.msMatchesSelector(s);for(l=I(s),n=0;n<l.length;n+=1)if(l[n]===i)return!0;return!1}if(s===t)return i===t;if(s===e)return i===e;if(s.nodeType||s instanceof _e){for(l=s.nodeType?[s]:s,n=0;n<l.length;n+=1)if(l[n]===i)return!0;return!1}return!1}function mi(){let s=this[0],e;if(s){for(e=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(e+=1);return e}}function hi(s){if(typeof s=="undefined")return this;const e=this.length;if(s>e-1)return I([]);if(s<0){const t=e+s;return t<0?I([]):I([this[t]])}return I([this[s]])}function wi(...s){let e;const t=se();for(let i=0;i<s.length;i+=1){e=s[i];for(let l=0;l<this.length;l+=1)if(typeof e=="string"){const n=t.createElement("div");for(n.innerHTML=e;n.firstChild;)this[l].appendChild(n.firstChild)}else if(e instanceof _e)for(let n=0;n<e.length;n+=1)this[l].appendChild(e[n]);else this[l].appendChild(e)}return this}function gi(s){const e=se();let t,i;for(t=0;t<this.length;t+=1)if(typeof s=="string"){const l=e.createElement("div");for(l.innerHTML=s,i=l.childNodes.length-1;i>=0;i-=1)this[t].insertBefore(l.childNodes[i],this[t].childNodes[0])}else if(s instanceof _e)for(i=0;i<s.length;i+=1)this[t].insertBefore(s[i],this[t].childNodes[0]);else this[t].insertBefore(s,this[t].childNodes[0]);return this}function _i(s){return this.length>0?s?this[0].nextElementSibling&&I(this[0].nextElementSibling).is(s)?I([this[0].nextElementSibling]):I([]):this[0].nextElementSibling?I([this[0].nextElementSibling]):I([]):I([])}function vi(s){const e=[];let t=this[0];if(!t)return I([]);for(;t.nextElementSibling;){const i=t.nextElementSibling;s?I(i).is(s)&&e.push(i):e.push(i),t=i}return I(e)}function Si(s){if(this.length>0){const e=this[0];return s?e.previousElementSibling&&I(e.previousElementSibling).is(s)?I([e.previousElementSibling]):I([]):e.previousElementSibling?I([e.previousElementSibling]):I([])}return I([])}function bi(s){const e=[];let t=this[0];if(!t)return I([]);for(;t.previousElementSibling;){const i=t.previousElementSibling;s?I(i).is(s)&&e.push(i):e.push(i),t=i}return I(e)}function yi(s){const e=[];for(let t=0;t<this.length;t+=1)this[t].parentNode!==null&&(s?I(this[t].parentNode).is(s)&&e.push(this[t].parentNode):e.push(this[t].parentNode));return I(e)}function $i(s){const e=[];for(let t=0;t<this.length;t+=1){let i=this[t].parentNode;for(;i;)s?I(i).is(s)&&e.push(i):e.push(i),i=i.parentNode}return I(e)}function xi(s){let e=this;return typeof s=="undefined"?I([]):(e.is(s)||(e=e.parents(s).eq(0)),e)}function Ci(s){const e=[];for(let t=0;t<this.length;t+=1){const i=this[t].querySelectorAll(s);for(let l=0;l<i.length;l+=1)e.push(i[l])}return I(e)}function Ei(s){const e=[];for(let t=0;t<this.length;t+=1){const i=this[t].children;for(let l=0;l<i.length;l+=1)(!s||I(i[l]).is(s))&&e.push(i[l])}return I(e)}function Ti(){for(let s=0;s<this.length;s+=1)this[s].parentNode&&this[s].parentNode.removeChild(this[s]);return this}const Ps={addClass:qt,removeClass:Yt,hasClass:Ut,toggleClass:Xt,attr:Kt,removeAttr:Zt,transform:Jt,transition:Qt,on:ei,off:si,trigger:ti,transitionEnd:ii,outerWidth:ri,outerHeight:ni,styles:ai,offset:li,css:oi,each:di,html:ci,text:ui,is:fi,index:mi,eq:hi,append:wi,prepend:gi,next:_i,nextAll:vi,prev:Si,prevAll:bi,parent:yi,parents:$i,closest:xi,find:Ci,children:Ei,filter:pi,remove:Ti};Object.keys(Ps).forEach(s=>{Object.defineProperty(I.fn,s,{value:Ps[s],writable:!0})});function ki(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function xe(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function pe(){return Date.now()}function Pi(s){const e=Q();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function fs(s,e){e===void 0&&(e="x");const t=Q();let i,l,n;const r=Pi(s);return t.WebKitCSSMatrix?(l=r.transform||r.webkitTransform,l.split(",").length>6&&(l=l.split(", ").map(a=>a.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(l==="none"?"":l)):(n=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?l=n.m41:i.length===16?l=parseFloat(i[12]):l=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?l=n.m42:i.length===16?l=parseFloat(i[13]):l=parseFloat(i[5])),l||0}function ze(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function Mi(s){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function de(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!Mi(i)){const l=Object.keys(Object(i)).filter(n=>e.indexOf(n)<0);for(let n=0,r=l.length;n<r;n+=1){const a=l[n],d=Object.getOwnPropertyDescriptor(i,a);d!==void 0&&d.enumerable&&(ze(s[a])&&ze(i[a])?i[a].__swiper__?s[a]=i[a]:de(s[a],i[a]):!ze(s[a])&&ze(i[a])?(s[a]={},i[a].__swiper__?s[a]=i[a]:de(s[a],i[a])):s[a]=i[a])}}}return s}function Ie(s,e,t){s.style.setProperty(e,t)}function Vs(s){let{swiper:e,targetPosition:t,side:i}=s;const l=Q(),n=-e.translate;let r=null,a;const d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",l.cancelAnimationFrame(e.cssModeFrameID);const u=t>n?"next":"prev",c=(o,w)=>u==="next"&&o>=w||u==="prev"&&o<=w,p=()=>{a=new Date().getTime(),r===null&&(r=a);const o=Math.max(Math.min((a-r)/d,1),0),w=.5-Math.cos(o*Math.PI)/2;let h=n+w*(t-n);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[i]:h}),c(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:h})}),l.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=l.requestAnimationFrame(p)};p()}let ls;function zi(){const s=Q(),e=se();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch),passiveListener:function(){let i=!1;try{const l=Object.defineProperty({},"passive",{get(){i=!0}});s.addEventListener("testPassiveListener",null,l)}catch{}return i}(),gestures:function(){return"ongesturestart"in s}()}}function Ws(){return ls||(ls=zi()),ls}let as;function Ii(s){let{userAgent:e}=s===void 0?{}:s;const t=Ws(),i=Q(),l=i.navigator.platform,n=e||i.navigator.userAgent,r={ios:!1,android:!1},a=i.screen.width,d=i.screen.height,u=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad).*OS\s([\d_]+)/);const p=n.match(/(iPod)(.*OS\s([\d_]+))?/),o=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=l==="Win32";let h=l==="MacIntel";const _=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&t.touch&&_.indexOf(`${a}x${d}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),u&&!w&&(r.os="android",r.android=!0),(c||o||p)&&(r.os="ios",r.ios=!0),r}function Oi(s){return s===void 0&&(s={}),as||(as=Ii(s)),as}let os;function Ai(){const s=Q();function e(){const t=s.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}return{isSafari:e(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)}}function ji(){return os||(os=Ai()),os}function Li(s){let{swiper:e,on:t,emit:i}=s;const l=Q();let n=null,r=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(p=>{r=l.requestAnimationFrame(()=>{const{width:o,height:w}=e;let h=o,_=w;p.forEach(b=>{let{contentBoxSize:S,contentRect:y,target:v}=b;v&&v!==e.el||(h=y?y.width:(S[0]||S).inlineSize,_=y?y.height:(S[0]||S).blockSize)}),(h!==o||_!==w)&&a()})}),n.observe(e.el))},u=()=>{r&&l.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof l.ResizeObserver!="undefined"){d();return}l.addEventListener("resize",a),l.addEventListener("orientationchange",c)}),t("destroy",()=>{u(),l.removeEventListener("resize",a),l.removeEventListener("orientationchange",c)})}function Ni(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=[],r=Q(),a=function(c,p){p===void 0&&(p={});const o=r.MutationObserver||r.WebkitMutationObserver,w=new o(h=>{if(h.length===1){l("observerUpdate",h[0]);return}const _=function(){l("observerUpdate",h[0])};r.requestAnimationFrame?r.requestAnimationFrame(_):r.setTimeout(_,0)});w.observe(c,{attributes:typeof p.attributes=="undefined"?!0:p.attributes,childList:typeof p.childList=="undefined"?!0:p.childList,characterData:typeof p.characterData=="undefined"?!0:p.characterData}),n.push(w)},d=()=>{if(!!e.params.observer){if(e.params.observeParents){const c=e.$el.parents();for(let p=0;p<c.length;p+=1)a(c[p])}a(e.$el[0],{childList:e.params.observeSlideChildren}),a(e.$wrapperEl[0],{attributes:!1})}},u=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",d),i("destroy",u)}var Bi={on(s,e,t){const i=this;if(typeof e!="function")return i;const l=t?"unshift":"push";return s.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][l](e)}),i},once(s,e,t){const i=this;if(typeof e!="function")return i;function l(){i.off(s,l),l.__emitterProxy&&delete l.__emitterProxy;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(i,r)}return l.__emitterProxy=e,i.on(s,l,t)},onAny(s,e){const t=this;if(typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return t.eventsListeners&&s.split(" ").forEach(i=>{typeof e=="undefined"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((l,n)=>{(l===e||l.__emitterProxy&&l.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(){const s=this;if(!s.eventsListeners)return s;let e,t,i;for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),i=s):(e=n[0].events,t=n[0].data,i=n[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(d=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(u=>{u.apply(i,[d,...t])}),s.eventsListeners&&s.eventsListeners[d]&&s.eventsListeners[d].forEach(u=>{u.apply(i,t)})}),s}};function Di(){const s=this;let e,t;const i=s.$el;typeof s.params.width!="undefined"&&s.params.width!==null?e=s.params.width:e=i[0].clientWidth,typeof s.params.height!="undefined"&&s.params.height!==null?t=s.params.height:t=i[0].clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function Gi(){const s=this;function e(C){return s.isHorizontal()?C:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[C]}function t(C,M){return parseFloat(C.getPropertyValue(e(M))||0)}const i=s.params,{$wrapperEl:l,size:n,rtlTranslate:r,wrongRTL:a}=s,d=s.virtual&&i.virtual.enabled,u=d?s.virtual.slides.length:s.slides.length,c=l.children(`.${s.params.slideClass}`),p=d?s.virtual.slides.length:c.length;let o=[];const w=[],h=[];let _=i.slidesOffsetBefore;typeof _=="function"&&(_=i.slidesOffsetBefore.call(s));let b=i.slidesOffsetAfter;typeof b=="function"&&(b=i.slidesOffsetAfter.call(s));const S=s.snapGrid.length,y=s.slidesGrid.length;let v=i.spaceBetween,x=-_,A=0,k=0;if(typeof n=="undefined")return;typeof v=="string"&&v.indexOf("%")>=0&&(v=parseFloat(v.replace("%",""))/100*n),s.virtualSize=-v,r?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(Ie(s.wrapperEl,"--swiper-centered-offset-before",""),Ie(s.wrapperEl,"--swiper-centered-offset-after",""));const j=i.grid&&i.grid.rows>1&&s.grid;j&&s.grid.initSlides(p);let T;const B=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(C=>typeof i.breakpoints[C].slidesPerView!="undefined").length>0;for(let C=0;C<p;C+=1){T=0;const M=c.eq(C);if(j&&s.grid.updateSlide(C,M,p,e),M.css("display")!=="none"){if(i.slidesPerView==="auto"){B&&(c[C].style[e("width")]="");const P=getComputedStyle(M[0]),L=M[0].style.transform,N=M[0].style.webkitTransform;if(L&&(M[0].style.transform="none"),N&&(M[0].style.webkitTransform="none"),i.roundLengths)T=s.isHorizontal()?M.outerWidth(!0):M.outerHeight(!0);else{const U=t(P,"width"),J=t(P,"padding-left"),E=t(P,"padding-right"),D=t(P,"margin-left"),H=t(P,"margin-right"),Y=P.getPropertyValue("box-sizing");if(Y&&Y==="border-box")T=U+D+H;else{const{clientWidth:Z,offsetWidth:ye}=M[0];T=U+J+E+D+H+(ye-Z)}}L&&(M[0].style.transform=L),N&&(M[0].style.webkitTransform=N),i.roundLengths&&(T=Math.floor(T))}else T=(n-(i.slidesPerView-1)*v)/i.slidesPerView,i.roundLengths&&(T=Math.floor(T)),c[C]&&(c[C].style[e("width")]=`${T}px`);c[C]&&(c[C].swiperSlideSize=T),h.push(T),i.centeredSlides?(x=x+T/2+A/2+v,A===0&&C!==0&&(x=x-n/2-v),C===0&&(x=x-n/2-v),Math.abs(x)<1/1e3&&(x=0),i.roundLengths&&(x=Math.floor(x)),k%i.slidesPerGroup===0&&o.push(x),w.push(x)):(i.roundLengths&&(x=Math.floor(x)),(k-Math.min(s.params.slidesPerGroupSkip,k))%s.params.slidesPerGroup===0&&o.push(x),w.push(x),x=x+T+v),s.virtualSize+=T+v,A=T,k+=1}}if(s.virtualSize=Math.max(s.virtualSize,n)+b,r&&a&&(i.effect==="slide"||i.effect==="coverflow")&&l.css({width:`${s.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&l.css({[e("width")]:`${s.virtualSize+i.spaceBetween}px`}),j&&s.grid.updateWrapperSize(T,o,e),!i.centeredSlides){const C=[];for(let M=0;M<o.length;M+=1){let P=o[M];i.roundLengths&&(P=Math.floor(P)),o[M]<=s.virtualSize-n&&C.push(P)}o=C,Math.floor(s.virtualSize-n)-Math.floor(o[o.length-1])>1&&o.push(s.virtualSize-n)}if(o.length===0&&(o=[0]),i.spaceBetween!==0){const C=s.isHorizontal()&&r?"marginLeft":e("marginRight");c.filter((M,P)=>i.cssMode?P!==c.length-1:!0).css({[C]:`${v}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let C=0;h.forEach(P=>{C+=P+(i.spaceBetween?i.spaceBetween:0)}),C-=i.spaceBetween;const M=C-n;o=o.map(P=>P<0?-_:P>M?M+b:P)}if(i.centerInsufficientSlides){let C=0;if(h.forEach(M=>{C+=M+(i.spaceBetween?i.spaceBetween:0)}),C-=i.spaceBetween,C<n){const M=(n-C)/2;o.forEach((P,L)=>{o[L]=P-M}),w.forEach((P,L)=>{w[L]=P+M})}}if(Object.assign(s,{slides:c,snapGrid:o,slidesGrid:w,slidesSizesGrid:h}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Ie(s.wrapperEl,"--swiper-centered-offset-before",`${-o[0]}px`),Ie(s.wrapperEl,"--swiper-centered-offset-after",`${s.size/2-h[h.length-1]/2}px`);const C=-s.snapGrid[0],M=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(P=>P+C),s.slidesGrid=s.slidesGrid.map(P=>P+M)}if(p!==u&&s.emit("slidesLengthChange"),o.length!==S&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),w.length!==y&&s.emit("slidesGridLengthChange"),i.watchSlidesProgress&&s.updateSlidesOffset(),!d&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const C=`${i.containerModifierClass}backface-hidden`,M=s.$el.hasClass(C);p<=i.maxBackfaceHiddenSlides?M||s.$el.addClass(C):M&&s.$el.removeClass(C)}}function Ri(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let l=0,n;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const r=a=>i?e.slides.filter(d=>parseInt(d.getAttribute("data-swiper-slide-index"),10)===a)[0]:e.slides.eq(a)[0];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)e.visibleSlides.each(a=>{t.push(a)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const a=e.activeIndex+n;if(a>e.slides.length&&!i)break;t.push(r(a))}else t.push(r(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]!="undefined"){const a=t[n].offsetHeight;l=a>l?a:l}(l||l===0)&&e.$wrapperEl.css("height",`${l}px`)}function Hi(){const s=this,e=s.slides;for(let t=0;t<e.length;t+=1)e[t].swiperSlideOffset=s.isHorizontal()?e[t].offsetLeft:e[t].offsetTop}function Vi(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:l,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let r=-s;l&&(r=s),i.removeClass(t.slideVisibleClass),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<i.length;a+=1){const d=i[a];let u=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const c=(r+(t.centeredSlides?e.minTranslate():0)-u)/(d.swiperSlideSize+t.spaceBetween),p=(r-n[0]+(t.centeredSlides?e.minTranslate():0)-u)/(d.swiperSlideSize+t.spaceBetween),o=-(r-u),w=o+e.slidesSizesGrid[a];(o>=0&&o<e.size-1||w>1&&w<=e.size||o<=0&&w>=e.size)&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(a),i.eq(a).addClass(t.slideVisibleClass)),d.progress=l?-c:c,d.originalProgress=l?-p:p}e.visibleSlides=I(e.visibleSlides)}function Wi(s){const e=this;if(typeof s=="undefined"){const u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:l,isBeginning:n,isEnd:r}=e;const a=n,d=r;i===0?(l=0,n=!0,r=!0):(l=(s-e.minTranslate())/i,n=l<=0,r=l>=1),Object.assign(e,{progress:l,isBeginning:n,isEnd:r}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),n&&!a&&e.emit("reachBeginning toEdge"),r&&!d&&e.emit("reachEnd toEdge"),(a&&!n||d&&!r)&&e.emit("fromEdge"),e.emit("progress",l)}function Fi(){const s=this,{slides:e,params:t,$wrapperEl:i,activeIndex:l,realIndex:n}=s,r=s.virtual&&t.virtual.enabled;e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);let a;r?a=s.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${l}"]`):a=e.eq(l),a.addClass(t.slideActiveClass),t.loop&&(a.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(t.slideDuplicateActiveClass));let d=a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);t.loop&&d.length===0&&(d=e.eq(0),d.addClass(t.slideNextClass));let u=a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);t.loop&&u.length===0&&(u=e.eq(-1),u.addClass(t.slidePrevClass)),t.loop&&(d.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass),u.hasClass(t.slideDuplicateClass)?i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass):i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)),s.emitSlidesClasses()}function qi(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{slidesGrid:i,snapGrid:l,params:n,activeIndex:r,realIndex:a,snapIndex:d}=e;let u=s,c;if(typeof u=="undefined"){for(let o=0;o<i.length;o+=1)typeof i[o+1]!="undefined"?t>=i[o]&&t<i[o+1]-(i[o+1]-i[o])/2?u=o:t>=i[o]&&t<i[o+1]&&(u=o+1):t>=i[o]&&(u=o);n.normalizeSlideIndex&&(u<0||typeof u=="undefined")&&(u=0)}if(l.indexOf(t)>=0)c=l.indexOf(t);else{const o=Math.min(n.slidesPerGroupSkip,u);c=o+Math.floor((u-o)/n.slidesPerGroup)}if(c>=l.length&&(c=l.length-1),u===r){c!==d&&(e.snapIndex=c,e.emit("snapIndexChange"));return}const p=parseInt(e.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(e,{snapIndex:c,realIndex:p,previousIndex:r,activeIndex:u}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),a!==p&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function Yi(s){const e=this,t=e.params,i=I(s).closest(`.${t.slideClass}`)[0];let l=!1,n;if(i){for(let r=0;r<e.slides.length;r+=1)if(e.slides[r]===i){l=!0,n=r;break}}if(i&&l)e.clickedSlide=i,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(I(i).attr("data-swiper-slide-index"),10):e.clickedIndex=n;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var Xi={updateSize:Di,updateSlides:Gi,updateAutoHeight:Ri,updateSlidesOffset:Hi,updateSlidesProgress:Vi,updateProgress:Wi,updateSlidesClasses:Fi,updateActiveIndex:qi,updateClickedSlide:Yi};function Ui(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:l,$wrapperEl:n}=e;if(t.virtualTranslate)return i?-l:l;if(t.cssMode)return l;let r=fs(n[0],s);return i&&(r=-r),r||0}function Ki(s,e){const t=this,{rtlTranslate:i,params:l,$wrapperEl:n,wrapperEl:r,progress:a}=t;let d=0,u=0;const c=0;t.isHorizontal()?d=i?-s:s:u=s,l.roundLengths&&(d=Math.floor(d),u=Math.floor(u)),l.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-d:-u:l.virtualTranslate||n.transform(`translate3d(${d}px, ${u}px, ${c}px)`),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?d:u;let p;const o=t.maxTranslate()-t.minTranslate();o===0?p=0:p=(s-t.minTranslate())/o,p!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function Zi(){return-this.snapGrid[0]}function Ji(){return-this.snapGrid[this.snapGrid.length-1]}function Qi(s,e,t,i,l){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const n=this,{params:r,wrapperEl:a}=n;if(n.animating&&r.preventInteractionOnTransition)return!1;const d=n.minTranslate(),u=n.maxTranslate();let c;if(i&&s>d?c=d:i&&s<u?c=u:c=s,n.updateProgress(c),r.cssMode){const p=n.isHorizontal();if(e===0)a[p?"scrollLeft":"scrollTop"]=-c;else{if(!n.support.smoothScroll)return Vs({swiper:n,targetPosition:-c,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(c),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(c),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(o){!n||n.destroyed||o.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,t&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}var er={getTranslate:Ui,setTranslate:Ki,minTranslate:Zi,maxTranslate:Ji,translateTo:Qi};function sr(s,e){const t=this;t.params.cssMode||t.$wrapperEl.transition(s),t.emit("setTransition",s,e)}function Fs(s){let{swiper:e,runCallbacks:t,direction:i,step:l}=s;const{activeIndex:n,previousIndex:r}=e;let a=i;if(a||(n>r?a="next":n<r?a="prev":a="reset"),e.emit(`transition${l}`),t&&n!==r){if(a==="reset"){e.emit(`slideResetTransition${l}`);return}e.emit(`slideChangeTransition${l}`),a==="next"?e.emit(`slideNextTransition${l}`):e.emit(`slidePrevTransition${l}`)}}function tr(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Fs({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function ir(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Fs({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var rr={setTransition:sr,transitionStart:tr,transitionEnd:ir};function nr(s,e,t,i,l){if(s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof s!="number"&&typeof s!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof s}] given.`);if(typeof s=="string"){const v=parseInt(s,10);if(!isFinite(v))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${s}] given.`);s=v}const n=this;let r=s;r<0&&(r=0);const{params:a,snapGrid:d,slidesGrid:u,previousIndex:c,activeIndex:p,rtlTranslate:o,wrapperEl:w,enabled:h}=n;if(n.animating&&a.preventInteractionOnTransition||!h&&!i&&!l)return!1;const _=Math.min(n.params.slidesPerGroupSkip,r);let b=_+Math.floor((r-_)/n.params.slidesPerGroup);b>=d.length&&(b=d.length-1),(p||a.initialSlide||0)===(c||0)&&t&&n.emit("beforeSlideChangeStart");const S=-d[b];if(n.updateProgress(S),a.normalizeSlideIndex)for(let v=0;v<u.length;v+=1){const x=-Math.floor(S*100),A=Math.floor(u[v]*100),k=Math.floor(u[v+1]*100);typeof u[v+1]!="undefined"?x>=A&&x<k-(k-A)/2?r=v:x>=A&&x<k&&(r=v+1):x>=A&&(r=v)}if(n.initialized&&r!==p&&(!n.allowSlideNext&&S<n.translate&&S<n.minTranslate()||!n.allowSlidePrev&&S>n.translate&&S>n.maxTranslate()&&(p||0)!==r))return!1;let y;if(r>p?y="next":r<p?y="prev":y="reset",o&&-S===n.translate||!o&&S===n.translate)return n.updateActiveIndex(r),a.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),a.effect!=="slide"&&n.setTranslate(S),y!=="reset"&&(n.transitionStart(t,y),n.transitionEnd(t,y)),!1;if(a.cssMode){const v=n.isHorizontal(),x=o?S:-S;if(e===0){const A=n.virtual&&n.params.virtual.enabled;A&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),w[v?"scrollLeft":"scrollTop"]=x,A&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._swiperImmediateVirtual=!1})}else{if(!n.support.smoothScroll)return Vs({swiper:n,targetPosition:x,side:v?"left":"top"}),!0;w.scrollTo({[v?"left":"top"]:x,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(S),n.updateActiveIndex(r),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,y),e===0?n.transitionEnd(t,y):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(x){!n||n.destroyed||x.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,y))}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd)),!0}function lr(s,e,t,i){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const l=this;let n=s;return l.params.loop&&(n+=l.loopedSlides),l.slideTo(n,e,t,i)}function ar(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this,{animating:l,enabled:n,params:r}=i;if(!n)return i;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const d=i.activeIndex<r.slidesPerGroupSkip?1:a;if(r.loop){if(l&&r.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+d,s,e,t)}function or(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this,{params:l,animating:n,snapGrid:r,slidesGrid:a,rtlTranslate:d,enabled:u}=i;if(!u)return i;if(l.loop){if(n&&l.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}const c=d?i.translate:-i.translate;function p(b){return b<0?-Math.floor(Math.abs(b)):Math.floor(b)}const o=p(c),w=r.map(b=>p(b));let h=r[w.indexOf(o)-1];if(typeof h=="undefined"&&l.cssMode){let b;r.forEach((S,y)=>{o>=S&&(b=y)}),typeof b!="undefined"&&(h=r[b>0?b-1:b])}let _=0;if(typeof h!="undefined"&&(_=a.indexOf(h),_<0&&(_=i.activeIndex-1),l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(_=_-i.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),l.rewind&&i.isBeginning){const b=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(b,s,e,t)}return i.slideTo(_,s,e,t)}function dr(s,e,t){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0);const i=this;return i.slideTo(i.activeIndex,s,e,t)}function pr(s,e,t,i){s===void 0&&(s=this.params.speed),e===void 0&&(e=!0),i===void 0&&(i=.5);const l=this;let n=l.activeIndex;const r=Math.min(l.params.slidesPerGroupSkip,n),a=r+Math.floor((n-r)/l.params.slidesPerGroup),d=l.rtlTranslate?l.translate:-l.translate;if(d>=l.snapGrid[a]){const u=l.snapGrid[a],c=l.snapGrid[a+1];d-u>(c-u)*i&&(n+=l.params.slidesPerGroup)}else{const u=l.snapGrid[a-1],c=l.snapGrid[a];d-u<=(c-u)*i&&(n-=l.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,l.slidesGrid.length-1),l.slideTo(n,s,e,t)}function cr(){const s=this,{params:e,$wrapperEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let l=s.clickedIndex,n;if(e.loop){if(s.animating)return;n=parseInt(I(s.clickedSlide).attr("data-swiper-slide-index"),10),e.centeredSlides?l<s.loopedSlides-i/2||l>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),l=t.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),xe(()=>{s.slideTo(l)})):s.slideTo(l):l>s.slides.length-i?(s.loopFix(),l=t.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),xe(()=>{s.slideTo(l)})):s.slideTo(l)}else s.slideTo(l)}var ur={slideTo:nr,slideToLoop:lr,slideNext:ar,slidePrev:or,slideReset:dr,slideToClosest:pr,slideToClickedSlide:cr};function fr(){const s=this,e=se(),{params:t,$wrapperEl:i}=s,l=i.children().length>0?I(i.children()[0].parentNode):i;l.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();let n=l.children(`.${t.slideClass}`);if(t.loopFillGroupWithBlank){const d=t.slidesPerGroup-n.length%t.slidesPerGroup;if(d!==t.slidesPerGroup){for(let u=0;u<d;u+=1){const c=I(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);l.append(c)}n=l.children(`.${t.slideClass}`)}}t.slidesPerView==="auto"&&!t.loopedSlides&&(t.loopedSlides=n.length),s.loopedSlides=Math.ceil(parseFloat(t.loopedSlides||t.slidesPerView,10)),s.loopedSlides+=t.loopAdditionalSlides,s.loopedSlides>n.length&&(s.loopedSlides=n.length);const r=[],a=[];n.each((d,u)=>{const c=I(d);u<s.loopedSlides&&a.push(d),u<n.length&&u>=n.length-s.loopedSlides&&r.push(d),c.attr("data-swiper-slide-index",u)});for(let d=0;d<a.length;d+=1)l.append(I(a[d].cloneNode(!0)).addClass(t.slideDuplicateClass));for(let d=r.length-1;d>=0;d-=1)l.prepend(I(r[d].cloneNode(!0)).addClass(t.slideDuplicateClass))}function mr(){const s=this;s.emit("beforeLoopFix");const{activeIndex:e,slides:t,loopedSlides:i,allowSlidePrev:l,allowSlideNext:n,snapGrid:r,rtlTranslate:a}=s;let d;s.allowSlidePrev=!0,s.allowSlideNext=!0;const c=-r[e]-s.getTranslate();e<i?(d=t.length-i*3+e,d+=i,s.slideTo(d,0,!1,!0)&&c!==0&&s.setTranslate((a?-s.translate:s.translate)-c)):e>=t.length-i&&(d=-t.length+e+i,d+=i,s.slideTo(d,0,!1,!0)&&c!==0&&s.setTranslate((a?-s.translate:s.translate)-c)),s.allowSlidePrev=l,s.allowSlideNext=n,s.emit("loopFix")}function hr(){const s=this,{$wrapperEl:e,params:t,slides:i}=s;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}var wr={loopCreate:fr,loopFix:mr,loopDestroy:hr};function gr(s){const e=this;if(e.support.touch||!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;t.style.cursor="move",t.style.cursor=s?"-webkit-grabbing":"-webkit-grab",t.style.cursor=s?"-moz-grabbin":"-moz-grab",t.style.cursor=s?"grabbing":"grab"}function _r(){const s=this;s.support.touch||s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}var vr={setGrabCursor:gr,unsetGrabCursor:_r};function Sr(s,e){e===void 0&&(e=this);function t(i){return!i||i===se()||i===Q()?null:(i.assignedSlot&&(i=i.assignedSlot),i.closest(s)||t(i.getRootNode().host))}return t(e)}function br(s){const e=this,t=se(),i=Q(),l=e.touchEventsData,{params:n,touches:r,enabled:a}=e;if(!a||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let d=s;d.originalEvent&&(d=d.originalEvent);let u=I(d.target);if(n.touchEventsTarget==="wrapper"&&!u.closest(e.wrapperEl).length||(l.isTouchEvent=d.type==="touchstart",!l.isTouchEvent&&"which"in d&&d.which===3)||!l.isTouchEvent&&"button"in d&&d.button>0||l.isTouched&&l.isMoved)return;!!n.noSwipingClass&&n.noSwipingClass!==""&&d.target&&d.target.shadowRoot&&s.path&&s.path[0]&&(u=I(s.path[0]));const p=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,o=!!(d.target&&d.target.shadowRoot);if(n.noSwiping&&(o?Sr(p,d.target):u.closest(p)[0])){e.allowClick=!0;return}if(n.swipeHandler&&!u.closest(n.swipeHandler)[0])return;r.currentX=d.type==="touchstart"?d.targetTouches[0].pageX:d.pageX,r.currentY=d.type==="touchstart"?d.targetTouches[0].pageY:d.pageY;const w=r.currentX,h=r.currentY,_=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,b=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(_&&(w<=b||w>=i.innerWidth-b))if(_==="prevent")s.preventDefault();else return;if(Object.assign(l,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=w,r.startY=h,l.touchStartTime=pe(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(l.allowThresholdMove=!1),d.type!=="touchstart"){let S=!0;u.is(l.focusableElements)&&(S=!1,u[0].nodeName==="SELECT"&&(l.isTouched=!1)),t.activeElement&&I(t.activeElement).is(l.focusableElements)&&t.activeElement!==u[0]&&t.activeElement.blur();const y=S&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||y)&&!u[0].isContentEditable&&d.preventDefault()}e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",d)}function yr(s){const e=se(),t=this,i=t.touchEventsData,{params:l,touches:n,rtlTranslate:r,enabled:a}=t;if(!a)return;let d=s;if(d.originalEvent&&(d=d.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",d);return}if(i.isTouchEvent&&d.type!=="touchmove")return;const u=d.type==="touchmove"&&d.targetTouches&&(d.targetTouches[0]||d.changedTouches[0]),c=d.type==="touchmove"?u.pageX:d.pageX,p=d.type==="touchmove"?u.pageY:d.pageY;if(d.preventedByNestedSwiper){n.startX=c,n.startY=p;return}if(!t.allowTouchMove){I(d.target).is(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:c,startY:p,currentX:c,currentY:p}),i.touchStartTime=pe());return}if(i.isTouchEvent&&l.touchReleaseOnEdges&&!l.loop){if(t.isVertical()){if(p<n.startY&&t.translate<=t.maxTranslate()||p>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(c<n.startX&&t.translate<=t.maxTranslate()||c>n.startX&&t.translate>=t.minTranslate())return}if(i.isTouchEvent&&e.activeElement&&d.target===e.activeElement&&I(d.target).is(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}if(i.allowTouchCallbacks&&t.emit("touchMove",d),d.targetTouches&&d.targetTouches.length>1)return;n.currentX=c,n.currentY=p;const o=n.currentX-n.startX,w=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(o**2+w**2)<t.params.threshold)return;if(typeof i.isScrolling=="undefined"){let S;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:o*o+w*w>=25&&(S=Math.atan2(Math.abs(w),Math.abs(o))*180/Math.PI,i.isScrolling=t.isHorizontal()?S>l.touchAngle:90-S>l.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",d),typeof i.startMoving=="undefined"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!l.cssMode&&d.cancelable&&d.preventDefault(),l.touchMoveStopPropagation&&!l.nested&&d.stopPropagation(),i.isMoved||(l.loop&&!l.cssMode&&t.loopFix(),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,l.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",d)),t.emit("sliderMove",d),i.isMoved=!0;let h=t.isHorizontal()?o:w;n.diff=h,h*=l.touchRatio,r&&(h=-h),t.swipeDirection=h>0?"prev":"next",i.currentTranslate=h+i.startTranslate;let _=!0,b=l.resistanceRatio;if(l.touchReleaseOnEdges&&(b=0),h>0&&i.currentTranslate>t.minTranslate()?(_=!1,l.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+h)**b)):h<0&&i.currentTranslate<t.maxTranslate()&&(_=!1,l.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-h)**b)),_&&(d.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),l.threshold>0)if(Math.abs(h)>l.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!l.followFinger||l.cssMode||((l.freeMode&&l.freeMode.enabled&&t.freeMode||l.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&l.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function $r(s){const e=this,t=e.touchEventsData,{params:i,touches:l,rtlTranslate:n,slidesGrid:r,enabled:a}=e;if(!a)return;let d=s;if(d.originalEvent&&(d=d.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",d),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&i.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}i.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=pe(),c=u-t.touchStartTime;if(e.allowClick){const y=d.path||d.composedPath&&d.composedPath();e.updateClickedSlide(y&&y[0]||d.target),e.emit("tap click",d),c<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",d)}if(t.lastClickTime=pe(),xe(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(i.followFinger?p=n?e.translate:-e.translate:p=-t.currentTranslate,i.cssMode)return;if(e.params.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}let o=0,w=e.slidesSizesGrid[0];for(let y=0;y<r.length;y+=y<i.slidesPerGroupSkip?1:i.slidesPerGroup){const v=y<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof r[y+v]!="undefined"?p>=r[y]&&p<r[y+v]&&(o=y,w=r[y+v]-r[y]):p>=r[y]&&(o=y,w=r[r.length-1]-r[r.length-2])}let h=null,_=null;i.rewind&&(e.isBeginning?_=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const b=(p-r[o])/w,S=o<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(c>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(b>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?h:o+S):e.slideTo(o)),e.swipeDirection==="prev"&&(b>1-i.longSwipesRatio?e.slideTo(o+S):_!==null&&b<0&&Math.abs(b)>i.longSwipesRatio?e.slideTo(_):e.slideTo(o))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(d.target===e.navigation.nextEl||d.target===e.navigation.prevEl)?d.target===e.navigation.nextEl?e.slideTo(o+S):e.slideTo(o):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:o+S),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:o))}}function Ms(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:l,snapGrid:n}=s;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses(),(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides?s.slideTo(s.slides.length-1,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.run(),s.allowSlidePrev=l,s.allowSlideNext=i,s.params.watchOverflow&&n!==s.snapGrid&&s.checkOverflow()}function xr(s){const e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation()))}function Cr(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===-0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let l;const n=s.maxTranslate()-s.minTranslate();n===0?l=0:l=(s.translate-s.minTranslate())/n,l!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}let zs=!1;function Er(){}const qs=(s,e)=>{const t=se(),{params:i,touchEvents:l,el:n,wrapperEl:r,device:a,support:d}=s,u=!!i.nested,c=e==="on"?"addEventListener":"removeEventListener",p=e;if(!d.touch)n[c](l.start,s.onTouchStart,!1),t[c](l.move,s.onTouchMove,u),t[c](l.end,s.onTouchEnd,!1);else{const o=l.start==="touchstart"&&d.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;n[c](l.start,s.onTouchStart,o),n[c](l.move,s.onTouchMove,d.passiveListener?{passive:!1,capture:u}:u),n[c](l.end,s.onTouchEnd,o),l.cancel&&n[c](l.cancel,s.onTouchEnd,o)}(i.preventClicks||i.preventClicksPropagation)&&n[c]("click",s.onClick,!0),i.cssMode&&r[c]("scroll",s.onScroll),i.updateOnWindowResize?s[p](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ms,!0):s[p]("observerUpdate",Ms,!0)};function Tr(){const s=this,e=se(),{params:t,support:i}=s;s.onTouchStart=br.bind(s),s.onTouchMove=yr.bind(s),s.onTouchEnd=$r.bind(s),t.cssMode&&(s.onScroll=Cr.bind(s)),s.onClick=xr.bind(s),i.touch&&!zs&&(e.addEventListener("touchstart",Er),zs=!0),qs(s,"on")}function kr(){qs(this,"off")}var Pr={attachEvents:Tr,detachEvents:kr};const Is=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function Mr(){const s=this,{activeIndex:e,initialized:t,loopedSlides:i=0,params:l,$el:n}=s,r=l.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=s.getBreakpoint(r,s.params.breakpointsBase,s.el);if(!a||s.currentBreakpoint===a)return;const u=(a in r?r[a]:void 0)||s.originalParams,c=Is(s,l),p=Is(s,u),o=l.enabled;c&&!p?(n.removeClass(`${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`),s.emitContainerClasses()):!c&&p&&(n.addClass(`${l.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&l.grid.fill==="column")&&n.addClass(`${l.containerModifierClass}grid-column`),s.emitContainerClasses());const w=u.direction&&u.direction!==l.direction,h=l.loop&&(u.slidesPerView!==l.slidesPerView||w);w&&t&&s.changeDirection(),de(s.params,u);const _=s.params.enabled;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),o&&!_?s.disable():!o&&_&&s.enable(),s.currentBreakpoint=a,s.emit("_beforeBreakpoint",u),h&&t&&(s.loopDestroy(),s.loopCreate(),s.updateSlides(),s.slideTo(e-i+s.loopedSlides,0,!1)),s.emit("breakpoint",u)}function zr(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1;const l=Q(),n=e==="window"?l.innerHeight:t.clientHeight,r=Object.keys(s).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const d=parseFloat(a.substr(1));return{value:n*d,point:a}}return{value:a,point:a}});r.sort((a,d)=>parseInt(a.value,10)-parseInt(d.value,10));for(let a=0;a<r.length;a+=1){const{point:d,value:u}=r[a];e==="window"?l.matchMedia(`(min-width: ${u}px)`).matches&&(i=d):u<=t.clientWidth&&(i=d)}return i||"max"}var Ir={setBreakpoint:Mr,getBreakpoint:zr};function Or(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(l=>{i[l]&&t.push(e+l)}):typeof i=="string"&&t.push(e+i)}),t}function Ar(){const s=this,{classNames:e,params:t,rtl:i,$el:l,device:n,support:r}=s,a=Or(["initialized",t.direction,{"pointer-events":!r.touch},{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides}],t.containerModifierClass);e.push(...a),l.addClass([...e].join(" ")),s.emitContainerClasses()}function jr(){const s=this,{$el:e,classNames:t}=s;e.removeClass(t.join(" ")),s.emitContainerClasses()}var Lr={addClasses:Ar,removeClasses:jr};function Nr(s,e,t,i,l,n){const r=Q();let a;function d(){n&&n()}!I(s).parent("picture")[0]&&(!s.complete||!l)&&e?(a=new r.Image,a.onload=d,a.onerror=d,i&&(a.sizes=i),t&&(a.srcset=t),e&&(a.src=e)):d()}function Br(){const s=this;s.imagesToLoad=s.$el.find("img");function e(){typeof s=="undefined"||s===null||!s||s.destroyed||(s.imagesLoaded!==void 0&&(s.imagesLoaded+=1),s.imagesLoaded===s.imagesToLoad.length&&(s.params.updateOnImagesReady&&s.update(),s.emit("imagesReady")))}for(let t=0;t<s.imagesToLoad.length;t+=1){const i=s.imagesToLoad[t];s.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,e)}}var Dr={loadImage:Nr,preloadImages:Br};function Gr(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const l=s.slides.length-1,n=s.slidesGrid[l]+s.slidesSizesGrid[l]+i*2;s.isLocked=s.size>n}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Rr={checkOverflow:Gr},Os={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Hr(s,e){return function(i){i===void 0&&(i={});const l=Object.keys(i)[0],n=i[l];if(typeof n!="object"||n===null){de(e,i);return}if(["navigation","pagination","scrollbar"].indexOf(l)>=0&&s[l]===!0&&(s[l]={auto:!0}),!(l in s&&"enabled"in n)){de(e,i);return}s[l]===!0&&(s[l]={enabled:!0}),typeof s[l]=="object"&&!("enabled"in s[l])&&(s[l].enabled=!0),s[l]||(s[l]={enabled:!1}),de(e,i)}}const ds={eventsEmitter:Bi,update:Xi,translate:er,transition:rr,slide:ur,loop:wr,grabCursor:vr,events:Pr,breakpoints:Ir,checkOverflow:Rr,classes:Lr,images:Dr},ps={};class ae{constructor(){let e,t;for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];if(l.length===1&&l[0].constructor&&Object.prototype.toString.call(l[0]).slice(8,-1)==="Object"?t=l[0]:[e,t]=l,t||(t={}),t=de({},t),e&&!t.el&&(t.el=e),t.el&&I(t.el).length>1){const u=[];return I(t.el).each(c=>{const p=de({},t,{el:c});u.push(new ae(p))}),u}const r=this;r.__swiper__=!0,r.support=Ws(),r.device=Oi({userAgent:t.userAgent}),r.browser=ji(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const a={};r.modules.forEach(u=>{u({swiper:r,extendParams:Hr(t,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const d=de({},Os,a);return r.params=de({},d,ps,t),r.originalParams=de({},r.params),r.passedParams=de({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach(u=>{r.on(u,r.params.on[u])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=I,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:I(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const c=["touchstart","touchmove","touchend","touchcancel"],p=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:c[0],move:c[1],end:c[2],cancel:c[3]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:pe(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const l=i.minTranslate(),r=(i.maxTranslate()-l)*e+l;i.translateTo(r,typeof t=="undefined"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each(i=>{const l=e.getSlideClasses(i);t.push({slideEl:i,classNames:l}),e.emit("_slideClass",i,l)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:l,slides:n,slidesGrid:r,slidesSizesGrid:a,size:d,activeIndex:u}=i;let c=1;if(l.centeredSlides){let p=n[u].swiperSlideSize,o;for(let w=u+1;w<n.length;w+=1)n[w]&&!o&&(p+=n[w].swiperSlideSize,c+=1,p>d&&(o=!0));for(let w=u-1;w>=0;w-=1)n[w]&&!o&&(p+=n[w].swiperSlideSize,c+=1,p>d&&(o=!0))}else if(e==="current")for(let p=u+1;p<n.length;p+=1)(t?r[p]+a[p]-r[u]<d:r[p]-r[u]<d)&&(c+=1);else for(let p=u-1;p>=0;p-=1)r[u]-r[p]<d&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function l(){const r=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(r,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let n;e.params.freeMode&&e.params.freeMode.enabled?(l(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?n=e.slideTo(e.slides.length-1,0,!1,!0):n=e.slideTo(e.activeIndex,0,!1,!0),n||l()),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,l=i.params.direction;return e||(e=l==="horizontal"?"vertical":"horizontal"),e===l||e!=="horizontal"&&e!=="vertical"||(i.$el.removeClass(`${i.params.containerModifierClass}${l}`).addClass(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.each(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}mount(e){const t=this;if(t.mounted)return!0;const i=I(e||t.params.el);if(e=i[0],!e)return!1;e.swiper=t;const l=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const a=I(e.shadowRoot.querySelector(l()));return a.children=d=>i.children(d),a}return i.children(l())})();if(r.length===0&&t.params.createElements){const d=se().createElement("div");r=I(d),d.className=t.params.wrapperClass,i.append(d),i.children(`.${t.params.slideClass}`).each(u=>{r.append(u)})}return Object.assign(t,{$el:i,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:e.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(e.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl"),wrongRTL:r.css("display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:l,$el:n,$wrapperEl:r,slides:a}=i;return typeof i.params=="undefined"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),l.loop&&i.loopDestroy(),t&&(i.removeClasses(),n.removeAttr("style"),r.removeAttr("style"),a&&a.length&&a.removeClass([l.slideVisibleClass,l.slideActiveClass,l.slideNextClass,l.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(d=>{i.off(d)}),e!==!1&&(i.$el[0].swiper=null,ki(i)),i.destroyed=!0),null}static extendDefaults(e){de(ps,e)}static get extendedDefaults(){return ps}static get defaults(){return Os}static installModule(e){ae.prototype.__modules__||(ae.prototype.__modules__=[]);const t=ae.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>ae.installModule(t)),ae):(ae.installModule(e),ae)}}Object.keys(ds).forEach(s=>{Object.keys(ds[s]).forEach(e=>{ae.prototype[e]=ds[s][e]})});ae.use([Li,Ni]);function Vr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function r(o,w){const h=e.params.virtual;if(h.cache&&e.virtual.cache[w])return e.virtual.cache[w];const _=h.renderSlide?I(h.renderSlide.call(e,o,w)):I(`<div class="${e.params.slideClass}" data-swiper-slide-index="${w}">${o}</div>`);return _.attr("data-swiper-slide-index")||_.attr("data-swiper-slide-index",w),h.cache&&(e.virtual.cache[w]=_),_}function a(o){const{slidesPerView:w,slidesPerGroup:h,centeredSlides:_}=e.params,{addSlidesBefore:b,addSlidesAfter:S}=e.params.virtual,{from:y,to:v,slides:x,slidesGrid:A,offset:k}=e.virtual;e.params.cssMode||e.updateActiveIndex();const j=e.activeIndex||0;let T;e.rtlTranslate?T="right":T=e.isHorizontal()?"left":"top";let B,C;_?(B=Math.floor(w/2)+h+S,C=Math.floor(w/2)+h+b):(B=w+(h-1)+S,C=h+b);const M=Math.max((j||0)-C,0),P=Math.min((j||0)+B,x.length-1),L=(e.slidesGrid[M]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:M,to:P,offset:L,slidesGrid:e.slidesGrid});function N(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),l("virtualUpdate")}if(y===M&&v===P&&!o){e.slidesGrid!==A&&L!==k&&e.slides.css(T,`${L}px`),e.updateProgress(),l("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:L,from:M,to:P,slides:function(){const D=[];for(let H=M;H<=P;H+=1)D.push(x[H]);return D}()}),e.params.virtual.renderExternalUpdate?N():l("virtualUpdate");return}const U=[],J=[];if(o)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let E=y;E<=v;E+=1)(E<M||E>P)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${E}"]`).remove();for(let E=0;E<x.length;E+=1)E>=M&&E<=P&&(typeof v=="undefined"||o?J.push(E):(E>v&&J.push(E),E<y&&U.push(E)));J.forEach(E=>{e.$wrapperEl.append(r(x[E],E))}),U.sort((E,D)=>D-E).forEach(E=>{e.$wrapperEl.prepend(r(x[E],E))}),e.$wrapperEl.children(".swiper-slide").css(T,`${L}px`),N()}function d(o){if(typeof o=="object"&&"length"in o)for(let w=0;w<o.length;w+=1)o[w]&&e.virtual.slides.push(o[w]);else e.virtual.slides.push(o);a(!0)}function u(o){const w=e.activeIndex;let h=w+1,_=1;if(Array.isArray(o)){for(let b=0;b<o.length;b+=1)o[b]&&e.virtual.slides.unshift(o[b]);h=w+o.length,_=o.length}else e.virtual.slides.unshift(o);if(e.params.virtual.cache){const b=e.virtual.cache,S={};Object.keys(b).forEach(y=>{const v=b[y],x=v.attr("data-swiper-slide-index");x&&v.attr("data-swiper-slide-index",parseInt(x,10)+_),S[parseInt(y,10)+_]=v}),e.virtual.cache=S}a(!0),e.slideTo(h,0)}function c(o){if(typeof o=="undefined"||o===null)return;let w=e.activeIndex;if(Array.isArray(o))for(let h=o.length-1;h>=0;h-=1)e.virtual.slides.splice(o[h],1),e.params.virtual.cache&&delete e.virtual.cache[o[h]],o[h]<w&&(w-=1),w=Math.max(w,0);else e.virtual.slides.splice(o,1),e.params.virtual.cache&&delete e.virtual.cache[o],o<w&&(w-=1),w=Math.max(w,0);a(!0),e.slideTo(w,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),a(!0),e.slideTo(0,0)}i("beforeInit",()=>{!e.params.virtual.enabled||(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||a())}),i("setTranslate",()=>{!e.params.virtual.enabled||(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{a()},100)):a())}),i("init update resize",()=>{!e.params.virtual.enabled||e.params.cssMode&&Ie(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:u,removeSlide:c,removeAllSlides:p,update:a})}function Ys(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=se(),r=Q();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(c){if(!e.enabled)return;const{rtlTranslate:p}=e;let o=c;o.originalEvent&&(o=o.originalEvent);const w=o.keyCode||o.charCode,h=e.params.keyboard.pageUpDown,_=h&&w===33,b=h&&w===34,S=w===37,y=w===39,v=w===38,x=w===40;if(!e.allowSlideNext&&(e.isHorizontal()&&y||e.isVertical()&&x||b)||!e.allowSlidePrev&&(e.isHorizontal()&&S||e.isVertical()&&v||_))return!1;if(!(o.shiftKey||o.altKey||o.ctrlKey||o.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(_||b||S||y||v||x)){let A=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const k=e.$el,j=k[0].clientWidth,T=k[0].clientHeight,B=r.innerWidth,C=r.innerHeight,M=e.$el.offset();p&&(M.left-=e.$el[0].scrollLeft);const P=[[M.left,M.top],[M.left+j,M.top],[M.left,M.top+T],[M.left+j,M.top+T]];for(let L=0;L<P.length;L+=1){const N=P[L];if(N[0]>=0&&N[0]<=B&&N[1]>=0&&N[1]<=C){if(N[0]===0&&N[1]===0)continue;A=!0}}if(!A)return}e.isHorizontal()?((_||b||S||y)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),((b||y)&&!p||(_||S)&&p)&&e.slideNext(),((_||S)&&!p||(b||y)&&p)&&e.slidePrev()):((_||b||v||x)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),(b||x)&&e.slideNext(),(_||v)&&e.slidePrev()),l("keyPress",w)}}function d(){e.keyboard.enabled||(I(n).on("keydown",a),e.keyboard.enabled=!0)}function u(){!e.keyboard.enabled||(I(n).off("keydown",a),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&d()}),i("destroy",()=>{e.keyboard.enabled&&u()}),Object.assign(e.keyboard,{enable:d,disable:u})}function Xe(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=Q();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let r,a=pe(),d;const u=[];function c(v){let j=0,T=0,B=0,C=0;return"detail"in v&&(T=v.detail),"wheelDelta"in v&&(T=-v.wheelDelta/120),"wheelDeltaY"in v&&(T=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(j=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(j=T,T=0),B=j*10,C=T*10,"deltaY"in v&&(C=v.deltaY),"deltaX"in v&&(B=v.deltaX),v.shiftKey&&!B&&(B=C,C=0),(B||C)&&v.deltaMode&&(v.deltaMode===1?(B*=40,C*=40):(B*=800,C*=800)),B&&!j&&(j=B<1?-1:1),C&&!T&&(T=C<1?-1:1),{spinX:j,spinY:T,pixelX:B,pixelY:C}}function p(){!e.enabled||(e.mouseEntered=!0)}function o(){!e.enabled||(e.mouseEntered=!1)}function w(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&pe()-a<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&pe()-a<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),l("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),l("scroll",v.raw)),a=new n.Date().getTime(),!1)}function h(v){const x=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&x.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&x.releaseOnEdges)return!0;return!1}function _(v){let x=v,A=!0;if(!e.enabled)return;const k=e.params.mousewheel;e.params.cssMode&&x.preventDefault();let j=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(j=I(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!j[0].contains(x.target)&&!k.releaseOnEdges)return!0;x.originalEvent&&(x=x.originalEvent);let T=0;const B=e.rtlTranslate?-1:1,C=c(x);if(k.forceToAxis)if(e.isHorizontal())if(Math.abs(C.pixelX)>Math.abs(C.pixelY))T=-C.pixelX*B;else return!0;else if(Math.abs(C.pixelY)>Math.abs(C.pixelX))T=-C.pixelY;else return!0;else T=Math.abs(C.pixelX)>Math.abs(C.pixelY)?-C.pixelX*B:-C.pixelY;if(T===0)return!0;k.invert&&(T=-T);let M=e.getTranslate()+T*k.sensitivity;if(M>=e.minTranslate()&&(M=e.minTranslate()),M<=e.maxTranslate()&&(M=e.maxTranslate()),A=e.params.loop?!0:!(M===e.minTranslate()||M===e.maxTranslate()),A&&e.params.nested&&x.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const P={time:pe(),delta:Math.abs(T),direction:Math.sign(T),raw:v};u.length>=2&&u.shift();const L=u.length?u[u.length-1]:void 0;if(u.push(P),L?(P.direction!==L.direction||P.delta>L.delta||P.time>L.time+150)&&w(P):w(P),h(P))return!0}else{const P={time:pe(),delta:Math.abs(T),direction:Math.sign(T)},L=d&&P.time<d.time+500&&P.delta<=d.delta&&P.direction===d.direction;if(!L){d=void 0,e.params.loop&&e.loopFix();let N=e.getTranslate()+T*k.sensitivity;const U=e.isBeginning,J=e.isEnd;if(N>=e.minTranslate()&&(N=e.minTranslate()),N<=e.maxTranslate()&&(N=e.maxTranslate()),e.setTransition(0),e.setTranslate(N),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!U&&e.isBeginning||!J&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(r),r=void 0,u.length>=15&&u.shift();const E=u.length?u[u.length-1]:void 0,D=u[0];if(u.push(P),E&&(P.delta>E.delta||P.direction!==E.direction))u.splice(0);else if(u.length>=15&&P.time-D.time<500&&D.delta-P.delta>=1&&P.delta<=6){const H=T>0?.8:.2;d=P,u.splice(0),r=xe(()=>{e.slideToClosest(e.params.speed,!0,void 0,H)},0)}r||(r=xe(()=>{d=P,u.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(L||l("scroll",x),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),N===e.minTranslate()||N===e.maxTranslate())return!0}}return x.preventDefault?x.preventDefault():x.returnValue=!1,!1}function b(v){let x=e.$el;e.params.mousewheel.eventsTarget!=="container"&&(x=I(e.params.mousewheel.eventsTarget)),x[v]("mouseenter",p),x[v]("mouseleave",o),x[v]("wheel",_)}function S(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",_),!0):e.mousewheel.enabled?!1:(b("on"),e.mousewheel.enabled=!0,!0)}function y(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,_),!0):e.mousewheel.enabled?(b("off"),e.mousewheel.enabled=!1,!0):!1}i("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&y(),e.params.mousewheel.enabled&&S()}),i("destroy",()=>{e.params.cssMode&&S(),e.mousewheel.enabled&&y()}),Object.assign(e.mousewheel,{enable:S,disable:y})}function gs(s,e,t,i){const l=se();return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=s.$el.children(`.${i[n]}`)[0];r||(r=l.createElement("div"),r.className=i[n],s.$el.append(r)),t[n]=r,e[n]=r}}),t}function ie(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function n(o){let w;return o&&(w=I(o),e.params.uniqueNavElements&&typeof o=="string"&&w.length>1&&e.$el.find(o).length===1&&(w=e.$el.find(o))),w}function r(o,w){const h=e.params.navigation;o&&o.length>0&&(o[w?"addClass":"removeClass"](h.disabledClass),o[0]&&o[0].tagName==="BUTTON"&&(o[0].disabled=w),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](h.lockClass))}function a(){if(e.params.loop)return;const{$nextEl:o,$prevEl:w}=e.navigation;r(w,e.isBeginning&&!e.params.rewind),r(o,e.isEnd&&!e.params.rewind)}function d(o){o.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&e.slidePrev()}function u(o){o.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&e.slideNext()}function c(){const o=e.params.navigation;if(e.params.navigation=gs(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(o.nextEl||o.prevEl))return;const w=n(o.nextEl),h=n(o.prevEl);w&&w.length>0&&w.on("click",u),h&&h.length>0&&h.on("click",d),Object.assign(e.navigation,{$nextEl:w,nextEl:w&&w[0],$prevEl:h,prevEl:h&&h[0]}),e.enabled||(w&&w.addClass(o.lockClass),h&&h.addClass(o.lockClass))}function p(){const{$nextEl:o,$prevEl:w}=e.navigation;o&&o.length&&(o.off("click",u),o.removeClass(e.params.navigation.disabledClass)),w&&w.length&&(w.off("click",d),w.removeClass(e.params.navigation.disabledClass))}i("init",()=>{c(),a()}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{p()}),i("enable disable",()=>{const{$nextEl:o,$prevEl:w}=e.navigation;o&&o[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),w&&w[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),i("click",(o,w)=>{const{$nextEl:h,$prevEl:_}=e.navigation,b=w.target;if(e.params.navigation.hideOnClick&&!I(b).is(_)&&!I(b).is(h)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let S;h?S=h.hasClass(e.params.navigation.hiddenClass):_&&(S=_.hasClass(e.params.navigation.hiddenClass)),l(S===!0?"navigationShow":"navigationHide"),h&&h.toggleClass(e.params.navigation.hiddenClass),_&&_.toggleClass(e.params.navigation.hiddenClass)}}),Object.assign(e.navigation,{update:a,init:c,destroy:p})}function Ee(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function X(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let r,a=0;function d(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function u(h,_){const{bulletActiveClass:b}=e.params.pagination;h[_]().addClass(`${b}-${_}`)[_]().addClass(`${b}-${_}-${_}`)}function c(){const h=e.rtl,_=e.params.pagination;if(d())return;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,S=e.pagination.$el;let y;const v=e.params.loop?Math.ceil((b-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),y>b-1-e.loopedSlides*2&&(y-=b-e.loopedSlides*2),y>v-1&&(y-=v),y<0&&e.params.paginationType!=="bullets"&&(y=v+y)):typeof e.snapIndex!="undefined"?y=e.snapIndex:y=e.activeIndex||0,_.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const x=e.pagination.bullets;let A,k,j;if(_.dynamicBullets&&(r=x.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),S.css(e.isHorizontal()?"width":"height",`${r*(_.dynamicMainBullets+4)}px`),_.dynamicMainBullets>1&&e.previousIndex!==void 0&&(a+=y-(e.previousIndex-e.loopedSlides||0),a>_.dynamicMainBullets-1?a=_.dynamicMainBullets-1:a<0&&(a=0)),A=Math.max(y-a,0),k=A+(Math.min(x.length,_.dynamicMainBullets)-1),j=(k+A)/2),x.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(T=>`${_.bulletActiveClass}${T}`).join(" ")),S.length>1)x.each(T=>{const B=I(T),C=B.index();C===y&&B.addClass(_.bulletActiveClass),_.dynamicBullets&&(C>=A&&C<=k&&B.addClass(`${_.bulletActiveClass}-main`),C===A&&u(B,"prev"),C===k&&u(B,"next"))});else{const T=x.eq(y),B=T.index();if(T.addClass(_.bulletActiveClass),_.dynamicBullets){const C=x.eq(A),M=x.eq(k);for(let P=A;P<=k;P+=1)x.eq(P).addClass(`${_.bulletActiveClass}-main`);if(e.params.loop)if(B>=x.length){for(let P=_.dynamicMainBullets;P>=0;P-=1)x.eq(x.length-P).addClass(`${_.bulletActiveClass}-main`);x.eq(x.length-_.dynamicMainBullets-1).addClass(`${_.bulletActiveClass}-prev`)}else u(C,"prev"),u(M,"next");else u(C,"prev"),u(M,"next")}}if(_.dynamicBullets){const T=Math.min(x.length,_.dynamicMainBullets+4),B=(r*T-r)/2-j*r,C=h?"right":"left";x.css(e.isHorizontal()?C:"top",`${B}px`)}}if(_.type==="fraction"&&(S.find(Ee(_.currentClass)).text(_.formatFractionCurrent(y+1)),S.find(Ee(_.totalClass)).text(_.formatFractionTotal(v))),_.type==="progressbar"){let x;_.progressbarOpposite?x=e.isHorizontal()?"vertical":"horizontal":x=e.isHorizontal()?"horizontal":"vertical";const A=(y+1)/v;let k=1,j=1;x==="horizontal"?k=A:j=A,S.find(Ee(_.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${j})`).transition(e.params.speed)}_.type==="custom"&&_.renderCustom?(S.html(_.renderCustom(e,y+1,v)),l("paginationRender",S[0])):l("paginationUpdate",S[0]),e.params.watchOverflow&&e.enabled&&S[e.isLocked?"addClass":"removeClass"](_.lockClass)}function p(){const h=e.params.pagination;if(d())return;const _=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,b=e.pagination.$el;let S="";if(h.type==="bullets"){let y=e.params.loop?Math.ceil((_-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&y>_&&(y=_);for(let v=0;v<y;v+=1)h.renderBullet?S+=h.renderBullet.call(e,v,h.bulletClass):S+=`<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;b.html(S),e.pagination.bullets=b.find(Ee(h.bulletClass))}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(e,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,b.html(S)),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(e,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`,b.html(S)),h.type!=="custom"&&l("paginationRender",e.pagination.$el[0])}function o(){e.params.pagination=gs(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let _=I(h.el);_.length!==0&&(e.params.uniqueNavElements&&typeof h.el=="string"&&_.length>1&&(_=e.$el.find(h.el),_.length>1&&(_=_.filter(b=>I(b).parents(".swiper")[0]===e.el))),h.type==="bullets"&&h.clickable&&_.addClass(h.clickableClass),_.addClass(h.modifierClass+h.type),_.addClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(_.addClass(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&_.addClass(h.progressbarOppositeClass),h.clickable&&_.on("click",Ee(h.bulletClass),function(S){S.preventDefault();let y=I(this).index()*e.params.slidesPerGroup;e.params.loop&&(y+=e.loopedSlides),e.slideTo(y)}),Object.assign(e.pagination,{$el:_,el:_[0]}),e.enabled||_.addClass(h.lockClass))}function w(){const h=e.params.pagination;if(d())return;const _=e.pagination.$el;_.removeClass(h.hiddenClass),_.removeClass(h.modifierClass+h.type),_.removeClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(h.bulletActiveClass),h.clickable&&_.off("click",Ee(h.bulletClass))}i("init",()=>{o(),p(),c()}),i("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex=="undefined")&&c()}),i("snapIndexChange",()=>{e.params.loop||c()}),i("slidesLengthChange",()=>{e.params.loop&&(p(),c())}),i("snapGridLengthChange",()=>{e.params.loop||(p(),c())}),i("destroy",()=>{w()}),i("enable disable",()=>{const{$el:h}=e.pagination;h&&h[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),i("lock unlock",()=>{c()}),i("click",(h,_)=>{const b=_.target,{$el:S}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S.length>0&&!I(b).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const y=S.hasClass(e.params.pagination.hiddenClass);l(y===!0?"paginationShow":"paginationHide"),S.toggleClass(e.params.pagination.hiddenClass)}}),Object.assign(e.pagination,{render:p,update:c,init:o,destroy:w})}function _s(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=se();let r=!1,a=null,d=null,u,c,p,o;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function w(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:C,rtlTranslate:M,progress:P}=e,{$dragEl:L,$el:N}=C,U=e.params.scrollbar;let J=c,E=(p-c)*P;M?(E=-E,E>0?(J=c-E,E=0):-E+c>p&&(J=p+E)):E<0?(J=c+E,E=0):E+c>p&&(J=p-E),e.isHorizontal()?(L.transform(`translate3d(${E}px, 0, 0)`),L[0].style.width=`${J}px`):(L.transform(`translate3d(0px, ${E}px, 0)`),L[0].style.height=`${J}px`),U.hide&&(clearTimeout(a),N[0].style.opacity=1,a=setTimeout(()=>{N[0].style.opacity=0,N.transition(400)},1e3))}function h(C){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(C)}function _(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:C}=e,{$dragEl:M,$el:P}=C;M[0].style.width="",M[0].style.height="",p=e.isHorizontal()?P[0].offsetWidth:P[0].offsetHeight,o=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?c=p*o:c=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?M[0].style.width=`${c}px`:M[0].style.height=`${c}px`,o>=1?P[0].style.display="none":P[0].style.display="",e.params.scrollbar.hide&&(P[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&C.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function b(C){return e.isHorizontal()?C.type==="touchstart"||C.type==="touchmove"?C.targetTouches[0].clientX:C.clientX:C.type==="touchstart"||C.type==="touchmove"?C.targetTouches[0].clientY:C.clientY}function S(C){const{scrollbar:M,rtlTranslate:P}=e,{$el:L}=M;let N;N=(b(C)-L.offset()[e.isHorizontal()?"left":"top"]-(u!==null?u:c/2))/(p-c),N=Math.max(Math.min(N,1),0),P&&(N=1-N);const U=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*N;e.updateProgress(U),e.setTranslate(U),e.updateActiveIndex(),e.updateSlidesClasses()}function y(C){const M=e.params.scrollbar,{scrollbar:P,$wrapperEl:L}=e,{$el:N,$dragEl:U}=P;r=!0,u=C.target===U[0]||C.target===U?b(C)-C.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,C.preventDefault(),C.stopPropagation(),L.transition(100),U.transition(100),S(C),clearTimeout(d),N.transition(0),M.hide&&N.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),l("scrollbarDragStart",C)}function v(C){const{scrollbar:M,$wrapperEl:P}=e,{$el:L,$dragEl:N}=M;!r||(C.preventDefault?C.preventDefault():C.returnValue=!1,S(C),P.transition(0),L.transition(0),N.transition(0),l("scrollbarDragMove",C))}function x(C){const M=e.params.scrollbar,{scrollbar:P,$wrapperEl:L}=e,{$el:N}=P;!r||(r=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),L.transition("")),M.hide&&(clearTimeout(d),d=xe(()=>{N.css("opacity",0),N.transition(400)},1e3)),l("scrollbarDragEnd",C),M.snapOnRelease&&e.slideToClosest())}function A(C){const{scrollbar:M,touchEventsTouch:P,touchEventsDesktop:L,params:N,support:U}=e,E=M.$el[0],D=U.passiveListener&&N.passiveListeners?{passive:!1,capture:!1}:!1,H=U.passiveListener&&N.passiveListeners?{passive:!0,capture:!1}:!1;if(!E)return;const Y=C==="on"?"addEventListener":"removeEventListener";U.touch?(E[Y](P.start,y,D),E[Y](P.move,v,D),E[Y](P.end,x,H)):(E[Y](L.start,y,D),n[Y](L.move,v,D),n[Y](L.end,x,H))}function k(){!e.params.scrollbar.el||A("on")}function j(){!e.params.scrollbar.el||A("off")}function T(){const{scrollbar:C,$el:M}=e;e.params.scrollbar=gs(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const P=e.params.scrollbar;if(!P.el)return;let L=I(P.el);e.params.uniqueNavElements&&typeof P.el=="string"&&L.length>1&&M.find(P.el).length===1&&(L=M.find(P.el));let N=L.find(`.${e.params.scrollbar.dragClass}`);N.length===0&&(N=I(`<div class="${e.params.scrollbar.dragClass}"></div>`),L.append(N)),Object.assign(C,{$el:L,el:L[0],$dragEl:N,dragEl:N[0]}),P.draggable&&k(),L&&L[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function B(){j()}i("init",()=>{T(),_(),w()}),i("update resize observerUpdate lock unlock",()=>{_()}),i("setTranslate",()=>{w()}),i("setTransition",(C,M)=>{h(M)}),i("enable disable",()=>{const{$el:C}=e.scrollbar;C&&C[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),i("destroy",()=>{B()}),Object.assign(e.scrollbar,{updateSize:_,setTranslate:w,init:T,destroy:B})}function Wr(s){let{swiper:e,extendParams:t,on:i}=s;t({parallax:{enabled:!1}});const l=(a,d)=>{const{rtl:u}=e,c=I(a),p=u?-1:1,o=c.attr("data-swiper-parallax")||"0";let w=c.attr("data-swiper-parallax-x"),h=c.attr("data-swiper-parallax-y");const _=c.attr("data-swiper-parallax-scale"),b=c.attr("data-swiper-parallax-opacity");if(w||h?(w=w||"0",h=h||"0"):e.isHorizontal()?(w=o,h="0"):(h=o,w="0"),w.indexOf("%")>=0?w=`${parseInt(w,10)*d*p}%`:w=`${w*d*p}px`,h.indexOf("%")>=0?h=`${parseInt(h,10)*d}%`:h=`${h*d}px`,typeof b!="undefined"&&b!==null){const S=b-(b-1)*(1-Math.abs(d));c[0].style.opacity=S}if(typeof _=="undefined"||_===null)c.transform(`translate3d(${w}, ${h}, 0px)`);else{const S=_-(_-1)*(1-Math.abs(d));c.transform(`translate3d(${w}, ${h}, 0px) scale(${S})`)}},n=()=>{const{$el:a,slides:d,progress:u,snapGrid:c}=e;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(p=>{l(p,u)}),d.each((p,o)=>{let w=p.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(w+=Math.ceil(o/2)-u*(c.length-1)),w=Math.min(Math.max(w,-1),1),I(p).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(h=>{l(h,w)})})},r=function(a){a===void 0&&(a=e.params.speed);const{$el:d}=e;d.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{const c=I(u);let p=parseInt(c.attr("data-swiper-parallax-duration"),10)||a;a===0&&(p=0),c.transition(p)})};i("beforeInit",()=>{!e.params.parallax.enabled||(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),i("init",()=>{!e.params.parallax.enabled||n()}),i("setTranslate",()=>{!e.params.parallax.enabled||n()}),i("setTransition",(a,d)=>{!e.params.parallax.enabled||r(d)})}function Fr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;const n=Q();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let r=1,a=!1,d,u,c;const p={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},o={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},w={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let h=1;Object.defineProperty(e.zoom,"scale",{get(){return h},set(E){if(h!==E){const D=p.$imageEl?p.$imageEl[0]:void 0,H=p.$slideEl?p.$slideEl[0]:void 0;l("zoomChange",E,D,H)}h=E}});function _(E){if(E.targetTouches.length<2)return 1;const D=E.targetTouches[0].pageX,H=E.targetTouches[0].pageY,Y=E.targetTouches[1].pageX,Z=E.targetTouches[1].pageY;return Math.sqrt((Y-D)**2+(Z-H)**2)}function b(E){const D=e.support,H=e.params.zoom;if(u=!1,c=!1,!D.gestures){if(E.type!=="touchstart"||E.type==="touchstart"&&E.targetTouches.length<2)return;u=!0,p.scaleStart=_(E)}if((!p.$slideEl||!p.$slideEl.length)&&(p.$slideEl=I(E.target).closest(`.${e.params.slideClass}`),p.$slideEl.length===0&&(p.$slideEl=e.slides.eq(e.activeIndex)),p.$imageEl=p.$slideEl.find(`.${H.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${H.containerClass}`),p.maxRatio=p.$imageWrapEl.attr("data-swiper-zoom")||H.maxRatio,p.$imageWrapEl.length===0)){p.$imageEl=void 0;return}p.$imageEl&&p.$imageEl.transition(0),a=!0}function S(E){const D=e.support,H=e.params.zoom,Y=e.zoom;if(!D.gestures){if(E.type!=="touchmove"||E.type==="touchmove"&&E.targetTouches.length<2)return;c=!0,p.scaleMove=_(E)}if(!p.$imageEl||p.$imageEl.length===0){E.type==="gesturechange"&&b(E);return}D.gestures?Y.scale=E.scale*r:Y.scale=p.scaleMove/p.scaleStart*r,Y.scale>p.maxRatio&&(Y.scale=p.maxRatio-1+(Y.scale-p.maxRatio+1)**.5),Y.scale<H.minRatio&&(Y.scale=H.minRatio+1-(H.minRatio-Y.scale+1)**.5),p.$imageEl.transform(`translate3d(0,0,0) scale(${Y.scale})`)}function y(E){const D=e.device,H=e.support,Y=e.params.zoom,Z=e.zoom;if(!H.gestures){if(!u||!c||E.type!=="touchend"||E.type==="touchend"&&E.changedTouches.length<2&&!D.android)return;u=!1,c=!1}!p.$imageEl||p.$imageEl.length===0||(Z.scale=Math.max(Math.min(Z.scale,p.maxRatio),Y.minRatio),p.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${Z.scale})`),r=Z.scale,a=!1,Z.scale===1&&(p.$slideEl=void 0))}function v(E){const D=e.device;!p.$imageEl||p.$imageEl.length===0||o.isTouched||(D.android&&E.cancelable&&E.preventDefault(),o.isTouched=!0,o.touchesStart.x=E.type==="touchstart"?E.targetTouches[0].pageX:E.pageX,o.touchesStart.y=E.type==="touchstart"?E.targetTouches[0].pageY:E.pageY)}function x(E){const D=e.zoom;if(!p.$imageEl||p.$imageEl.length===0||(e.allowClick=!1,!o.isTouched||!p.$slideEl))return;o.isMoved||(o.width=p.$imageEl[0].offsetWidth,o.height=p.$imageEl[0].offsetHeight,o.startX=fs(p.$imageWrapEl[0],"x")||0,o.startY=fs(p.$imageWrapEl[0],"y")||0,p.slideWidth=p.$slideEl[0].offsetWidth,p.slideHeight=p.$slideEl[0].offsetHeight,p.$imageWrapEl.transition(0));const H=o.width*D.scale,Y=o.height*D.scale;if(!(H<p.slideWidth&&Y<p.slideHeight)){if(o.minX=Math.min(p.slideWidth/2-H/2,0),o.maxX=-o.minX,o.minY=Math.min(p.slideHeight/2-Y/2,0),o.maxY=-o.minY,o.touchesCurrent.x=E.type==="touchmove"?E.targetTouches[0].pageX:E.pageX,o.touchesCurrent.y=E.type==="touchmove"?E.targetTouches[0].pageY:E.pageY,!o.isMoved&&!a){if(e.isHorizontal()&&(Math.floor(o.minX)===Math.floor(o.startX)&&o.touchesCurrent.x<o.touchesStart.x||Math.floor(o.maxX)===Math.floor(o.startX)&&o.touchesCurrent.x>o.touchesStart.x)){o.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(o.minY)===Math.floor(o.startY)&&o.touchesCurrent.y<o.touchesStart.y||Math.floor(o.maxY)===Math.floor(o.startY)&&o.touchesCurrent.y>o.touchesStart.y)){o.isTouched=!1;return}}E.cancelable&&E.preventDefault(),E.stopPropagation(),o.isMoved=!0,o.currentX=o.touchesCurrent.x-o.touchesStart.x+o.startX,o.currentY=o.touchesCurrent.y-o.touchesStart.y+o.startY,o.currentX<o.minX&&(o.currentX=o.minX+1-(o.minX-o.currentX+1)**.8),o.currentX>o.maxX&&(o.currentX=o.maxX-1+(o.currentX-o.maxX+1)**.8),o.currentY<o.minY&&(o.currentY=o.minY+1-(o.minY-o.currentY+1)**.8),o.currentY>o.maxY&&(o.currentY=o.maxY-1+(o.currentY-o.maxY+1)**.8),w.prevPositionX||(w.prevPositionX=o.touchesCurrent.x),w.prevPositionY||(w.prevPositionY=o.touchesCurrent.y),w.prevTime||(w.prevTime=Date.now()),w.x=(o.touchesCurrent.x-w.prevPositionX)/(Date.now()-w.prevTime)/2,w.y=(o.touchesCurrent.y-w.prevPositionY)/(Date.now()-w.prevTime)/2,Math.abs(o.touchesCurrent.x-w.prevPositionX)<2&&(w.x=0),Math.abs(o.touchesCurrent.y-w.prevPositionY)<2&&(w.y=0),w.prevPositionX=o.touchesCurrent.x,w.prevPositionY=o.touchesCurrent.y,w.prevTime=Date.now(),p.$imageWrapEl.transform(`translate3d(${o.currentX}px, ${o.currentY}px,0)`)}}function A(){const E=e.zoom;if(!p.$imageEl||p.$imageEl.length===0)return;if(!o.isTouched||!o.isMoved){o.isTouched=!1,o.isMoved=!1;return}o.isTouched=!1,o.isMoved=!1;let D=300,H=300;const Y=w.x*D,Z=o.currentX+Y,ye=w.y*H,Pe=o.currentY+ye;w.x!==0&&(D=Math.abs((Z-o.currentX)/w.x)),w.y!==0&&(H=Math.abs((Pe-o.currentY)/w.y));const Ge=Math.max(D,H);o.currentX=Z,o.currentY=Pe;const Re=o.width*E.scale,we=o.height*E.scale;o.minX=Math.min(p.slideWidth/2-Re/2,0),o.maxX=-o.minX,o.minY=Math.min(p.slideHeight/2-we/2,0),o.maxY=-o.minY,o.currentX=Math.max(Math.min(o.currentX,o.maxX),o.minX),o.currentY=Math.max(Math.min(o.currentY,o.maxY),o.minY),p.$imageWrapEl.transition(Ge).transform(`translate3d(${o.currentX}px, ${o.currentY}px,0)`)}function k(){const E=e.zoom;p.$slideEl&&e.previousIndex!==e.activeIndex&&(p.$imageEl&&p.$imageEl.transform("translate3d(0,0,0) scale(1)"),p.$imageWrapEl&&p.$imageWrapEl.transform("translate3d(0,0,0)"),E.scale=1,r=1,p.$slideEl=void 0,p.$imageEl=void 0,p.$imageWrapEl=void 0)}function j(E){const D=e.zoom,H=e.params.zoom;if(p.$slideEl||(E&&E.target&&(p.$slideEl=I(E.target).closest(`.${e.params.slideClass}`)),p.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?p.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):p.$slideEl=e.slides.eq(e.activeIndex)),p.$imageEl=p.$slideEl.find(`.${H.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${H.containerClass}`)),!p.$imageEl||p.$imageEl.length===0||!p.$imageWrapEl||p.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),p.$slideEl.addClass(`${H.zoomedSlideClass}`);let Y,Z,ye,Pe,Ge,Re,we,$e,Ss,bs,ys,$s,He,Ve,ts,is,rs,ns;typeof o.touchesStart.x=="undefined"&&E?(Y=E.type==="touchend"?E.changedTouches[0].pageX:E.pageX,Z=E.type==="touchend"?E.changedTouches[0].pageY:E.pageY):(Y=o.touchesStart.x,Z=o.touchesStart.y),D.scale=p.$imageWrapEl.attr("data-swiper-zoom")||H.maxRatio,r=p.$imageWrapEl.attr("data-swiper-zoom")||H.maxRatio,E?(rs=p.$slideEl[0].offsetWidth,ns=p.$slideEl[0].offsetHeight,ye=p.$slideEl.offset().left+n.scrollX,Pe=p.$slideEl.offset().top+n.scrollY,Ge=ye+rs/2-Y,Re=Pe+ns/2-Z,Ss=p.$imageEl[0].offsetWidth,bs=p.$imageEl[0].offsetHeight,ys=Ss*D.scale,$s=bs*D.scale,He=Math.min(rs/2-ys/2,0),Ve=Math.min(ns/2-$s/2,0),ts=-He,is=-Ve,we=Ge*D.scale,$e=Re*D.scale,we<He&&(we=He),we>ts&&(we=ts),$e<Ve&&($e=Ve),$e>is&&($e=is)):(we=0,$e=0),p.$imageWrapEl.transition(300).transform(`translate3d(${we}px, ${$e}px,0)`),p.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${D.scale})`)}function T(){const E=e.zoom,D=e.params.zoom;p.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?p.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):p.$slideEl=e.slides.eq(e.activeIndex),p.$imageEl=p.$slideEl.find(`.${D.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),p.$imageWrapEl=p.$imageEl.parent(`.${D.containerClass}`)),!(!p.$imageEl||p.$imageEl.length===0||!p.$imageWrapEl||p.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),E.scale=1,r=1,p.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),p.$slideEl.removeClass(`${D.zoomedSlideClass}`),p.$slideEl=void 0)}function B(E){const D=e.zoom;D.scale&&D.scale!==1?T():j(E)}function C(){const E=e.support,D=e.touchEvents.start==="touchstart"&&E.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,H=E.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:D,activeListenerWithCapture:H}}function M(){return`.${e.params.slideClass}`}function P(E){const{passiveListener:D}=C(),H=M();e.$wrapperEl[E]("gesturestart",H,b,D),e.$wrapperEl[E]("gesturechange",H,S,D),e.$wrapperEl[E]("gestureend",H,y,D)}function L(){d||(d=!0,P("on"))}function N(){!d||(d=!1,P("off"))}function U(){const E=e.zoom;if(E.enabled)return;E.enabled=!0;const D=e.support,{passiveListener:H,activeListenerWithCapture:Y}=C(),Z=M();D.gestures?(e.$wrapperEl.on(e.touchEvents.start,L,H),e.$wrapperEl.on(e.touchEvents.end,N,H)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,Z,b,H),e.$wrapperEl.on(e.touchEvents.move,Z,S,Y),e.$wrapperEl.on(e.touchEvents.end,Z,y,H),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,Z,y,H)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,x,Y)}function J(){const E=e.zoom;if(!E.enabled)return;const D=e.support;E.enabled=!1;const{passiveListener:H,activeListenerWithCapture:Y}=C(),Z=M();D.gestures?(e.$wrapperEl.off(e.touchEvents.start,L,H),e.$wrapperEl.off(e.touchEvents.end,N,H)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,Z,b,H),e.$wrapperEl.off(e.touchEvents.move,Z,S,Y),e.$wrapperEl.off(e.touchEvents.end,Z,y,H),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,Z,y,H)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,x,Y)}i("init",()=>{e.params.zoom.enabled&&U()}),i("destroy",()=>{J()}),i("touchStart",(E,D)=>{!e.zoom.enabled||v(D)}),i("touchEnd",(E,D)=>{!e.zoom.enabled||A()}),i("doubleTap",(E,D)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&B(D)}),i("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&k()}),i("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&k()}),Object.assign(e.zoom,{enable:U,disable:J,in:j,out:T,toggle:B})}function qr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s;t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let n=!1,r=!1;function a(c,p){p===void 0&&(p=!0);const o=e.params.lazy;if(typeof c=="undefined"||e.slides.length===0)return;const h=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${c}"]`):e.slides.eq(c),_=h.find(`.${o.elementClass}:not(.${o.loadedClass}):not(.${o.loadingClass})`);h.hasClass(o.elementClass)&&!h.hasClass(o.loadedClass)&&!h.hasClass(o.loadingClass)&&_.push(h[0]),_.length!==0&&_.each(b=>{const S=I(b);S.addClass(o.loadingClass);const y=S.attr("data-background"),v=S.attr("data-src"),x=S.attr("data-srcset"),A=S.attr("data-sizes"),k=S.parent("picture");e.loadImage(S[0],v||y,x,A,!1,()=>{if(!(typeof e=="undefined"||e===null||!e||e&&!e.params||e.destroyed)){if(y?(S.css("background-image",`url("${y}")`),S.removeAttr("data-background")):(x&&(S.attr("srcset",x),S.removeAttr("data-srcset")),A&&(S.attr("sizes",A),S.removeAttr("data-sizes")),k.length&&k.children("source").each(j=>{const T=I(j);T.attr("data-srcset")&&(T.attr("srcset",T.attr("data-srcset")),T.removeAttr("data-srcset"))}),v&&(S.attr("src",v),S.removeAttr("data-src"))),S.addClass(o.loadedClass).removeClass(o.loadingClass),h.find(`.${o.preloaderClass}`).remove(),e.params.loop&&p){const j=h.attr("data-swiper-slide-index");if(h.hasClass(e.params.slideDuplicateClass)){const T=e.$wrapperEl.children(`[data-swiper-slide-index="${j}"]:not(.${e.params.slideDuplicateClass})`);a(T.index(),!1)}else{const T=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${j}"]`);a(T.index(),!1)}}l("lazyImageReady",h[0],S[0]),e.params.autoHeight&&e.updateAutoHeight()}}),l("lazyImageLoad",h[0],S[0])})}function d(){const{$wrapperEl:c,params:p,slides:o,activeIndex:w}=e,h=e.virtual&&p.virtual.enabled,_=p.lazy;let b=p.slidesPerView;b==="auto"&&(b=0);function S(v){if(h){if(c.children(`.${p.slideClass}[data-swiper-slide-index="${v}"]`).length)return!0}else if(o[v])return!0;return!1}function y(v){return h?I(v).attr("data-swiper-slide-index"):I(v).index()}if(r||(r=!0),e.params.watchSlidesProgress)c.children(`.${p.slideVisibleClass}`).each(v=>{const x=h?I(v).attr("data-swiper-slide-index"):I(v).index();a(x)});else if(b>1)for(let v=w;v<w+b;v+=1)S(v)&&a(v);else a(w);if(_.loadPrevNext)if(b>1||_.loadPrevNextAmount&&_.loadPrevNextAmount>1){const v=_.loadPrevNextAmount,x=b,A=Math.min(w+x+Math.max(v,x),o.length),k=Math.max(w-Math.max(x,v),0);for(let j=w+b;j<A;j+=1)S(j)&&a(j);for(let j=k;j<w;j+=1)S(j)&&a(j)}else{const v=c.children(`.${p.slideNextClass}`);v.length>0&&a(y(v));const x=c.children(`.${p.slidePrevClass}`);x.length>0&&a(y(x))}}function u(){const c=Q();if(!e||e.destroyed)return;const p=e.params.lazy.scrollingElement?I(e.params.lazy.scrollingElement):I(c),o=p[0]===c,w=o?c.innerWidth:p[0].offsetWidth,h=o?c.innerHeight:p[0].offsetHeight,_=e.$el.offset(),{rtlTranslate:b}=e;let S=!1;b&&(_.left-=e.$el[0].scrollLeft);const y=[[_.left,_.top],[_.left+e.width,_.top],[_.left,_.top+e.height],[_.left+e.width,_.top+e.height]];for(let x=0;x<y.length;x+=1){const A=y[x];if(A[0]>=0&&A[0]<=w&&A[1]>=0&&A[1]<=h){if(A[0]===0&&A[1]===0)continue;S=!0}}const v=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;S?(d(),p.off("scroll",u,v)):n||(n=!0,p.on("scroll",u,v))}i("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),i("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?u():d())}),i("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&d()}),i("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?u():d())}),i("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!r)&&(e.params.lazy.checkInView?u():d())}),i("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?u():d())}),i("slideChange",()=>{const{lazy:c,cssMode:p,watchSlidesProgress:o,touchReleaseOnEdges:w,resistanceRatio:h}=e.params;c.enabled&&(p||o&&(w||h===0))&&d()}),Object.assign(e.lazy,{load:d,loadInSlide:a})}function Yr(s){let{swiper:e,extendParams:t,on:i,emit:l}=s,n;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function r(){const b=e.slides.eq(e.activeIndex);let S=e.params.autoplay.delay;b.attr("data-swiper-autoplay")&&(S=b.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=xe(()=>{let y;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),y=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?d():(y=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),l("autoplay")):(y=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.params.loop?(e.loopFix(),y=e.slideNext(e.params.speed,!0,!0),l("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?d():(y=e.slideTo(0,e.params.speed,!0,!0),l("autoplay")):(y=e.slideNext(e.params.speed,!0,!0),l("autoplay")),(e.params.cssMode&&e.autoplay.running||y===!1)&&r()},S)}function a(){return typeof n!="undefined"||e.autoplay.running?!1:(e.autoplay.running=!0,l("autoplayStart"),r(),!0)}function d(){return!e.autoplay.running||typeof n=="undefined"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,l("autoplayStop"),!0)}function u(b){!e.autoplay.running||e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,b===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,r()):["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].addEventListener(S,p)}))}function c(){const b=se();b.visibilityState==="hidden"&&e.autoplay.running&&u(),b.visibilityState==="visible"&&e.autoplay.paused&&(r(),e.autoplay.paused=!1)}function p(b){!e||e.destroyed||!e.$wrapperEl||b.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].removeEventListener(S,p)}),e.autoplay.paused=!1,e.autoplay.running?r():d())}function o(){e.params.autoplay.disableOnInteraction?d():(l("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(b=>{e.$wrapperEl[0].removeEventListener(b,p)})}function w(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,l("autoplayResume"),r())}function h(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",o),e.$el.on("mouseleave",w))}function _(){e.$el.off("mouseenter",o),e.$el.off("mouseleave",w)}i("init",()=>{e.params.autoplay.enabled&&(a(),se().addEventListener("visibilitychange",c),h())}),i("beforeTransitionStart",(b,S,y)=>{e.autoplay.running&&(y||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(S):d())}),i("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?d():u())}),i("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&r()}),i("destroy",()=>{_(),e.autoplay.running&&d(),se().removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:u,run:r,start:a,stop:d})}function Xr(s){let{swiper:e,extendParams:t,on:i}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let l=!1,n=!1;e.thumbs={swiper:null};function r(){const u=e.thumbs.swiper;if(!u)return;const c=u.clickedIndex,p=u.clickedSlide;if(p&&I(p).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof c=="undefined"||c===null)return;let o;if(u.params.loop?o=parseInt(I(u.clickedSlide).attr("data-swiper-slide-index"),10):o=c,e.params.loop){let w=e.activeIndex;e.slides.eq(w).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,w=e.activeIndex);const h=e.slides.eq(w).prevAll(`[data-swiper-slide-index="${o}"]`).eq(0).index(),_=e.slides.eq(w).nextAll(`[data-swiper-slide-index="${o}"]`).eq(0).index();typeof h=="undefined"?o=_:typeof _=="undefined"?o=h:_-w<w-h?o=_:o=h}e.slideTo(o)}function a(){const{thumbs:u}=e.params;if(l)return!1;l=!0;const c=e.constructor;if(u.swiper instanceof c)e.thumbs.swiper=u.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(ze(u.swiper)){const p=Object.assign({},u.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(p),n=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function d(u){const c=e.thumbs.swiper;if(!c)return;const p=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView,o=e.params.thumbs.autoScrollOffset,w=o&&!c.params.loop;if(e.realIndex!==c.realIndex||w){let b=c.activeIndex,S,y;if(c.params.loop){c.slides.eq(b).hasClass(c.params.slideDuplicateClass)&&(c.loopFix(),c._clientLeft=c.$wrapperEl[0].clientLeft,b=c.activeIndex);const v=c.slides.eq(b).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),x=c.slides.eq(b).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof v=="undefined"?S=x:typeof x=="undefined"?S=v:x-b===b-v?S=c.params.slidesPerGroup>1?x:b:x-b<b-v?S=x:S=v,y=e.activeIndex>e.previousIndex?"next":"prev"}else S=e.realIndex,y=S>e.previousIndex?"next":"prev";w&&(S+=y==="next"?o:-1*o),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(S)<0&&(c.params.centeredSlides?S>b?S=S-Math.floor(p/2)+1:S=S+Math.floor(p/2)-1:S>b&&c.params.slidesPerGroup,c.slideTo(S,u?0:void 0))}let h=1;const _=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(h=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),c.slides.removeClass(_),c.params.loop||c.params.virtual&&c.params.virtual.enabled)for(let b=0;b<h;b+=1)c.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+b}"]`).addClass(_);else for(let b=0;b<h;b+=1)c.slides.eq(e.realIndex+b).addClass(_)}i("beforeInit",()=>{const{thumbs:u}=e.params;!u||!u.swiper||(a(),d(!0))}),i("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||d()}),i("setTransition",(u,c)=>{const p=e.thumbs.swiper;!p||p.setTransition(c)}),i("beforeDestroy",()=>{const u=e.thumbs.swiper;!u||n&&u&&u.destroy()}),Object.assign(e.thumbs,{init:a,update:d})}function Xs(s){let{swiper:e,extendParams:t,emit:i,once:l}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function r(){const{touchEventsData:d,touches:u}=e;d.velocities.length===0&&d.velocities.push({position:u[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:u[e.isHorizontal()?"currentX":"currentY"],time:pe()})}function a(d){let{currentPos:u}=d;const{params:c,$wrapperEl:p,rtlTranslate:o,snapGrid:w,touchEventsData:h}=e,b=pe()-h.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<w.length?e.slideTo(w.length-1):e.slideTo(e.slides.length-1);return}if(c.freeMode.momentum){if(h.velocities.length>1){const T=h.velocities.pop(),B=h.velocities.pop(),C=T.position-B.position,M=T.time-B.time;e.velocity=C/M,e.velocity/=2,Math.abs(e.velocity)<c.freeMode.minimumVelocity&&(e.velocity=0),(M>150||pe()-T.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=c.freeMode.momentumVelocityRatio,h.velocities.length=0;let S=1e3*c.freeMode.momentumRatio;const y=e.velocity*S;let v=e.translate+y;o&&(v=-v);let x=!1,A;const k=Math.abs(e.velocity)*20*c.freeMode.momentumBounceRatio;let j;if(v<e.maxTranslate())c.freeMode.momentumBounce?(v+e.maxTranslate()<-k&&(v=e.maxTranslate()-k),A=e.maxTranslate(),x=!0,h.allowMomentumBounce=!0):v=e.maxTranslate(),c.loop&&c.centeredSlides&&(j=!0);else if(v>e.minTranslate())c.freeMode.momentumBounce?(v-e.minTranslate()>k&&(v=e.minTranslate()+k),A=e.minTranslate(),x=!0,h.allowMomentumBounce=!0):v=e.minTranslate(),c.loop&&c.centeredSlides&&(j=!0);else if(c.freeMode.sticky){let T;for(let B=0;B<w.length;B+=1)if(w[B]>-v){T=B;break}Math.abs(w[T]-v)<Math.abs(w[T-1]-v)||e.swipeDirection==="next"?v=w[T]:v=w[T-1],v=-v}if(j&&l("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(o?S=Math.abs((-v-e.translate)/e.velocity):S=Math.abs((v-e.translate)/e.velocity),c.freeMode.sticky){const T=Math.abs((o?-v:v)-e.translate),B=e.slidesSizesGrid[e.activeIndex];T<B?S=c.speed:T<2*B?S=c.speed*1.5:S=c.speed*2.5}}else if(c.freeMode.sticky){e.slideToClosest();return}c.freeMode.momentumBounce&&x?(e.updateProgress(A),e.setTransition(S),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating=!0,p.transitionEnd(()=>{!e||e.destroyed||!h.allowMomentumBounce||(i("momentumBounce"),e.setTransition(c.speed),setTimeout(()=>{e.setTranslate(A),p.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(v),e.setTransition(S),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,p.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(v),e.updateActiveIndex(),e.updateSlidesClasses()}else if(c.freeMode.sticky){e.slideToClosest();return}else c.freeMode&&i("_freeModeNoMomentumRelease");(!c.freeMode.momentum||b>=c.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:r,onTouchEnd:a}})}function Us(s){let{swiper:e,extendParams:t}=s;t({grid:{rows:1,fill:"column"}});let i,l,n;const r=u=>{const{slidesPerView:c}=e.params,{rows:p,fill:o}=e.params.grid;l=i/p,n=Math.floor(u/p),Math.floor(u/p)===u/p?i=u:i=Math.ceil(u/p)*p,c!=="auto"&&o==="row"&&(i=Math.max(i,c*p))},a=(u,c,p,o)=>{const{slidesPerGroup:w,spaceBetween:h}=e.params,{rows:_,fill:b}=e.params.grid;let S,y,v;if(b==="row"&&w>1){const x=Math.floor(u/(w*_)),A=u-_*w*x,k=x===0?w:Math.min(Math.ceil((p-x*_*w)/_),w);v=Math.floor(A/k),y=A-v*k+x*w,S=y+v*i/_,c.css({"-webkit-order":S,order:S})}else b==="column"?(y=Math.floor(u/_),v=u-y*_,(y>n||y===n&&v===_-1)&&(v+=1,v>=_&&(v=0,y+=1))):(v=Math.floor(u/l),y=u-v*l);c.css(o("margin-top"),v!==0?h&&`${h}px`:"")},d=(u,c,p)=>{const{spaceBetween:o,centeredSlides:w,roundLengths:h}=e.params,{rows:_}=e.params.grid;if(e.virtualSize=(u+o)*i,e.virtualSize=Math.ceil(e.virtualSize/_)-o,e.$wrapperEl.css({[p("width")]:`${e.virtualSize+o}px`}),w){c.splice(0,c.length);const b=[];for(let S=0;S<c.length;S+=1){let y=c[S];h&&(y=Math.floor(y)),c[S]<e.virtualSize+c[0]&&b.push(y)}c.push(...b)}};e.grid={initSlides:r,updateSlide:a,updateWrapperSize:d}}function Le(s){const{effect:e,swiper:t,on:i,setTranslate:l,setTransition:n,overwriteParams:r,perspective:a}=s;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),i("setTranslate",()=>{t.params.effect===e&&l()}),i("setTransition",(u,c)=>{t.params.effect===e&&n(c)});let d;i("virtualUpdate",()=>{t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides.length&&(l(),d=!1)})})}function Ue(s,e){return s.transformEl?e.find(s.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function vs(s){let{swiper:e,duration:t,transformEl:i,allSlides:l}=s;const{slides:n,activeIndex:r,$wrapperEl:a}=e;if(e.params.virtualTranslate&&t!==0){let d=!1,u;l?u=i?n.find(i):n:u=i?n.eq(r).find(i):n.eq(r),u.transitionEnd(()=>{if(d||!e||e.destroyed)return;d=!0,e.animating=!1;const c=["webkitTransitionEnd","transitionend"];for(let p=0;p<c.length;p+=1)a.trigger(c[p])})}}function Ur(s){let{swiper:e,extendParams:t,on:i}=s;t({fadeEffect:{crossFade:!1,transformEl:null}}),Le({effect:"fade",swiper:e,on:i,setTranslate:()=>{const{slides:r}=e,a=e.params.fadeEffect;for(let d=0;d<r.length;d+=1){const u=e.slides.eq(d);let p=-u[0].swiperSlideOffset;e.params.virtualTranslate||(p-=e.translate);let o=0;e.isHorizontal()||(o=p,p=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(u[0].progress),0):1+Math.min(Math.max(u[0].progress,-1),0);Ue(a,u).css({opacity:w}).transform(`translate3d(${p}px, ${o}px, 0px)`)}},setTransition:r=>{const{transformEl:a}=e.params.fadeEffect;(a?e.slides.find(a):e.slides).transition(r),vs({swiper:e,duration:r,transformEl:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Kr(s){let{swiper:e,extendParams:t,on:i}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),Le({effect:"cube",swiper:e,on:i,setTranslate:()=>{const{$el:r,$wrapperEl:a,slides:d,width:u,height:c,rtlTranslate:p,size:o,browser:w}=e,h=e.params.cubeEffect,_=e.isHorizontal(),b=e.virtual&&e.params.virtual.enabled;let S=0,y;h.shadow&&(_?(y=a.find(".swiper-cube-shadow"),y.length===0&&(y=I('<div class="swiper-cube-shadow"></div>'),a.append(y)),y.css({height:`${u}px`})):(y=r.find(".swiper-cube-shadow"),y.length===0&&(y=I('<div class="swiper-cube-shadow"></div>'),r.append(y))));for(let x=0;x<d.length;x+=1){const A=d.eq(x);let k=x;b&&(k=parseInt(A.attr("data-swiper-slide-index"),10));let j=k*90,T=Math.floor(j/360);p&&(j=-j,T=Math.floor(-j/360));const B=Math.max(Math.min(A[0].progress,1),-1);let C=0,M=0,P=0;k%4===0?(C=-T*4*o,P=0):(k-1)%4===0?(C=0,P=-T*4*o):(k-2)%4===0?(C=o+T*4*o,P=o):(k-3)%4===0&&(C=-o,P=3*o+o*4*T),p&&(C=-C),_||(M=C,C=0);const L=`rotateX(${_?0:-j}deg) rotateY(${_?j:0}deg) translate3d(${C}px, ${M}px, ${P}px)`;if(B<=1&&B>-1&&(S=k*90+B*90,p&&(S=-k*90-B*90)),A.transform(L),h.slideShadows){let N=_?A.find(".swiper-slide-shadow-left"):A.find(".swiper-slide-shadow-top"),U=_?A.find(".swiper-slide-shadow-right"):A.find(".swiper-slide-shadow-bottom");N.length===0&&(N=I(`<div class="swiper-slide-shadow-${_?"left":"top"}"></div>`),A.append(N)),U.length===0&&(U=I(`<div class="swiper-slide-shadow-${_?"right":"bottom"}"></div>`),A.append(U)),N.length&&(N[0].style.opacity=Math.max(-B,0)),U.length&&(U[0].style.opacity=Math.max(B,0))}}if(a.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),h.shadow)if(_)y.transform(`translate3d(0px, ${u/2+h.shadowOffset}px, ${-u/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);else{const x=Math.abs(S)-Math.floor(Math.abs(S)/90)*90,A=1.5-(Math.sin(x*2*Math.PI/360)/2+Math.cos(x*2*Math.PI/360)/2),k=h.shadowScale,j=h.shadowScale/A,T=h.shadowOffset;y.transform(`scale3d(${k}, 1, ${j}) translate3d(0px, ${c/2+T}px, ${-c/2/j}px) rotateX(-90deg)`)}const v=w.isSafari||w.isWebView?-o/2:0;a.transform(`translate3d(0px,0,${v}px) rotateX(${e.isHorizontal()?0:S}deg) rotateY(${e.isHorizontal()?-S:0}deg)`)},setTransition:r=>{const{$el:a,slides:d}=e;d.transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r),e.params.cubeEffect.shadow&&!e.isHorizontal()&&a.find(".swiper-cube-shadow").transition(r)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Ae(s,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}`,l=s.transformEl?e.find(s.transformEl):e;let n=l.children(`.${i}`);return n.length||(n=I(`<div class="swiper-slide-shadow${t?`-${t}`:""}"></div>`),l.append(n)),n}function Zr(s){let{swiper:e,extendParams:t,on:i}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),Le({effect:"flip",swiper:e,on:i,setTranslate:()=>{const{slides:r,rtlTranslate:a}=e,d=e.params.flipEffect;for(let u=0;u<r.length;u+=1){const c=r.eq(u);let p=c[0].progress;e.params.flipEffect.limitRotation&&(p=Math.max(Math.min(c[0].progress,1),-1));const o=c[0].swiperSlideOffset;let h=-180*p,_=0,b=e.params.cssMode?-o-e.translate:-o,S=0;if(e.isHorizontal()?a&&(h=-h):(S=b,b=0,_=-h,h=0),c[0].style.zIndex=-Math.abs(Math.round(p))+r.length,d.slideShadows){let x=e.isHorizontal()?c.find(".swiper-slide-shadow-left"):c.find(".swiper-slide-shadow-top"),A=e.isHorizontal()?c.find(".swiper-slide-shadow-right"):c.find(".swiper-slide-shadow-bottom");x.length===0&&(x=Ae(d,c,e.isHorizontal()?"left":"top")),A.length===0&&(A=Ae(d,c,e.isHorizontal()?"right":"bottom")),x.length&&(x[0].style.opacity=Math.max(-p,0)),A.length&&(A[0].style.opacity=Math.max(p,0))}const y=`translate3d(${b}px, ${S}px, 0px) rotateX(${_}deg) rotateY(${h}deg)`;Ue(d,c).transform(y)}},setTransition:r=>{const{transformEl:a}=e.params.flipEffect;(a?e.slides.find(a):e.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r),vs({swiper:e,duration:r,transformEl:a})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Jr(s){let{swiper:e,extendParams:t,on:i}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Le({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{const{width:r,height:a,slides:d,slidesSizesGrid:u}=e,c=e.params.coverflowEffect,p=e.isHorizontal(),o=e.translate,w=p?-o+r/2:-o+a/2,h=p?c.rotate:-c.rotate,_=c.depth;for(let b=0,S=d.length;b<S;b+=1){const y=d.eq(b),v=u[b],x=y[0].swiperSlideOffset,A=(w-x-v/2)/v,k=typeof c.modifier=="function"?c.modifier(A):A*c.modifier;let j=p?h*k:0,T=p?0:h*k,B=-_*Math.abs(k),C=c.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(c.stretch)/100*v);let M=p?0:C*k,P=p?C*k:0,L=1-(1-c.scale)*Math.abs(k);Math.abs(P)<.001&&(P=0),Math.abs(M)<.001&&(M=0),Math.abs(B)<.001&&(B=0),Math.abs(j)<.001&&(j=0),Math.abs(T)<.001&&(T=0),Math.abs(L)<.001&&(L=0);const N=`translate3d(${P}px,${M}px,${B}px)  rotateX(${T}deg) rotateY(${j}deg) scale(${L})`;if(Ue(c,y).transform(N),y[0].style.zIndex=-Math.abs(Math.round(k))+1,c.slideShadows){let J=p?y.find(".swiper-slide-shadow-left"):y.find(".swiper-slide-shadow-top"),E=p?y.find(".swiper-slide-shadow-right"):y.find(".swiper-slide-shadow-bottom");J.length===0&&(J=Ae(c,y,p?"left":"top")),E.length===0&&(E=Ae(c,y,p?"right":"bottom")),J.length&&(J[0].style.opacity=k>0?k:0),E.length&&(E[0].style.opacity=-k>0?-k:0)}}},setTransition:r=>{const{transformEl:a}=e.params.coverflowEffect;(a?e.slides.find(a):e.slides).transition(r).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(r)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Qr(s){let{swiper:e,extendParams:t,on:i}=s;t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const l=a=>typeof a=="string"?a:`${a}px`;Le({effect:"creative",swiper:e,on:i,setTranslate:()=>{const{slides:a,$wrapperEl:d,slidesSizesGrid:u}=e,c=e.params.creativeEffect,{progressMultiplier:p}=c,o=e.params.centeredSlides;if(o){const w=u[0]/2-e.params.slidesOffsetBefore||0;d.transform(`translateX(calc(50% - ${w}px))`)}for(let w=0;w<a.length;w+=1){const h=a.eq(w),_=h[0].progress,b=Math.min(Math.max(h[0].progress,-c.limitProgress),c.limitProgress);let S=b;o||(S=Math.min(Math.max(h[0].originalProgress,-c.limitProgress),c.limitProgress));const y=h[0].swiperSlideOffset,v=[e.params.cssMode?-y-e.translate:-y,0,0],x=[0,0,0];let A=!1;e.isHorizontal()||(v[1]=v[0],v[0]=0);let k={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(k=c.next,A=!0):b>0&&(k=c.prev,A=!0),v.forEach((L,N)=>{v[N]=`calc(${L}px + (${l(k.translate[N])} * ${Math.abs(b*p)}))`}),x.forEach((L,N)=>{x[N]=k.rotate[N]*Math.abs(b*p)}),h[0].style.zIndex=-Math.abs(Math.round(_))+a.length;const j=v.join(", "),T=`rotateX(${x[0]}deg) rotateY(${x[1]}deg) rotateZ(${x[2]}deg)`,B=S<0?`scale(${1+(1-k.scale)*S*p})`:`scale(${1-(1-k.scale)*S*p})`,C=S<0?1+(1-k.opacity)*S*p:1-(1-k.opacity)*S*p,M=`translate3d(${j}) ${T} ${B}`;if(A&&k.shadow||!A){let L=h.children(".swiper-slide-shadow");if(L.length===0&&k.shadow&&(L=Ae(c,h)),L.length){const N=c.shadowPerProgress?b*(1/c.limitProgress):b;L[0].style.opacity=Math.min(Math.max(Math.abs(N),0),1)}}const P=Ue(c,h);P.transform(M).css({opacity:C}),k.origin&&P.css("transform-origin",k.origin)}},setTransition:a=>{const{transformEl:d}=e.params.creativeEffect;(d?e.slides.find(d):e.slides).transition(a).find(".swiper-slide-shadow").transition(a),vs({swiper:e,duration:a,transformEl:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Ce(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function ve(s,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]=="undefined"?s[i]=e[i]:Ce(e[i])&&Ce(s[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?s[i]=e[i]:ve(s[i],e[i]):s[i]=e[i]})}function Ks(s){return s===void 0&&(s={}),s.navigation&&typeof s.navigation.nextEl=="undefined"&&typeof s.navigation.prevEl=="undefined"}function Zs(s){return s===void 0&&(s={}),s.pagination&&typeof s.pagination.el=="undefined"}function Js(s){return s===void 0&&(s={}),s.scrollbar&&typeof s.scrollbar.el=="undefined"}function Qs(s){s===void 0&&(s="");const e=s.split(" ").map(i=>i.trim()).filter(i=>!!i),t=[];return e.forEach(i=>{t.indexOf(i)<0&&t.push(i)}),t.join(" ")}const et=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function As(s){s===void 0&&(s={});const e={on:{}},t={};ve(e,ae.defaults),ve(e,ae.extendedDefaults),e._emitClasses=!0,e.init=!1;const i={},l=et.map(r=>r.replace(/_/,"")),n=Object.assign({},s);return Object.keys(n).forEach(r=>{typeof s[r]!="undefined"&&(l.indexOf(r)>=0?Ce(s[r])?(e[r]={},t[r]={},ve(e[r],s[r]),ve(t[r],s[r])):(e[r]=s[r],t[r]=s[r]):r.search(/on[A-Z]/)===0&&typeof s[r]=="function"?e.on[`${r[2].toLowerCase()}${r.substr(3)}`]=s[r]:i[r]=s[r])}),["navigation","pagination","scrollbar"].forEach(r=>{e[r]===!0&&(e[r]={}),e[r]===!1&&delete e[r]}),{params:e,passedParams:t,rest:i}}function en(s){return new ae(s)}function sn(s,e){let{el:t,nextEl:i,prevEl:l,paginationEl:n,scrollbarEl:r,swiper:a}=s;Ks(e)&&i&&l&&(a.params.navigation.nextEl=i,a.originalParams.navigation.nextEl=i,a.params.navigation.prevEl=l,a.originalParams.navigation.prevEl=l),Zs(e)&&n&&(a.params.pagination.el=n,a.originalParams.pagination.el=n),Js(e)&&r&&(a.params.scrollbar.el=r,a.originalParams.scrollbar.el=r),a.init(t)}function st(s,e){let t=e.slidesPerView;if(e.breakpoints){const l=ae.prototype.getBreakpoint(e.breakpoints),n=l in e.breakpoints?e.breakpoints[l]:void 0;n&&n.slidesPerView&&(t=n.slidesPerView)}let i=Math.ceil(parseFloat(e.loopedSlides||t,10));return i+=e.loopAdditionalSlides,i>s.length&&(i=s.length),i}function tn(s,e,t){const i=e.map((d,u)=>(d.props||(d.props={}),d.props.swiperRef=s,d.props["data-swiper-slide-index"]=u,d));function l(d,u,c){return d.props||(d.props={}),re(d.type,Es(Me({},d.props),{key:`${d.key}-duplicate-${u}-${c}`,class:`${d.props.className||""} ${t.slideDuplicateClass} ${d.props.class||""}`}),d.children)}if(t.loopFillGroupWithBlank){const d=t.slidesPerGroup-i.length%t.slidesPerGroup;if(d!==t.slidesPerGroup)for(let u=0;u<d;u+=1){const c=re("div",{class:`${t.slideClass} ${t.slideBlankClass}`});i.push(c)}}t.slidesPerView==="auto"&&!t.loopedSlides&&(t.loopedSlides=i.length);const n=st(i,t),r=[],a=[];return i.forEach((d,u)=>{u<n&&a.push(l(d,u,"prepend")),u<i.length&&u>=i.length-n&&r.push(l(d,u,"append"))}),s.value&&(s.value.loopedSlides=n),[...r,...i,...a]}function rn(s,e,t,i){const l=[];if(!e)return l;const n=u=>{l.indexOf(u)<0&&l.push(u)},r=i.map(u=>u.props&&u.props.key),a=t.map(u=>u.props&&u.props.key);return r.join("")!==a.join("")&&l.push("children"),i.length!==t.length&&l.push("children"),et.filter(u=>u[0]==="_").map(u=>u.replace(/_/,"")).forEach(u=>{if(u in s&&u in e)if(Ce(s[u])&&Ce(e[u])){const c=Object.keys(s[u]),p=Object.keys(e[u]);c.length!==p.length?n(u):(c.forEach(o=>{s[u][o]!==e[u][o]&&n(u)}),p.forEach(o=>{s[u][o]!==e[u][o]&&n(u)}))}else s[u]!==e[u]&&n(u)}),l}function cs(s,e,t){s===void 0&&(s={});const i=[],l={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},n=(r,a)=>{!Array.isArray(r)||r.forEach(d=>{const u=typeof d.type=="symbol";a==="default"&&(a="container-end"),u&&d.children?n(d.children,"default"):d.type&&(d.type.name==="SwiperSlide"||d.type.name==="AsyncComponentWrapper")?i.push(d):l[a]&&l[a].push(d)})};return Object.keys(s).forEach(r=>{if(typeof s[r]!="function")return;const a=s[r]();n(a,r)}),t.value=e.value,e.value=i,{slides:i,slots:l}}function nn(s){let{swiper:e,slides:t,passedParams:i,changedParams:l,nextEl:n,prevEl:r,paginationEl:a,scrollbarEl:d}=s;const u=l.filter(k=>k!=="children"&&k!=="direction"),{params:c,pagination:p,navigation:o,scrollbar:w,virtual:h,thumbs:_}=e;let b,S,y,v,x;l.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(b=!0),l.includes("controller")&&i.controller&&i.controller.control&&c.controller&&!c.controller.control&&(S=!0),l.includes("pagination")&&i.pagination&&(i.pagination.el||a)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(y=!0),l.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||d)&&(c.scrollbar||c.scrollbar===!1)&&w&&!w.el&&(v=!0),l.includes("navigation")&&i.navigation&&(i.navigation.prevEl||r)&&(i.navigation.nextEl||n)&&(c.navigation||c.navigation===!1)&&o&&!o.prevEl&&!o.nextEl&&(x=!0);const A=k=>{!e[k]||(e[k].destroy(),k==="navigation"?(c[k].prevEl=void 0,c[k].nextEl=void 0,e[k].prevEl=void 0,e[k].nextEl=void 0):(c[k].el=void 0,e[k].el=void 0))};u.forEach(k=>{if(Ce(c[k])&&Ce(i[k]))ve(c[k],i[k]);else{const j=i[k];(j===!0||j===!1)&&(k==="navigation"||k==="pagination"||k==="scrollbar")?j===!1&&A(k):c[k]=i[k]}}),l.includes("children")&&h&&c.virtual.enabled?(h.slides=t,h.update(!0)):l.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),b&&_.init()&&_.update(!0),S&&(e.controller.control=c.controller.control),y&&(a&&(c.pagination.el=a),p.init(),p.render(),p.update()),v&&(d&&(c.scrollbar.el=d),w.init(),w.updateSize(),w.setTranslate()),x&&(n&&(c.navigation.nextEl=n),r&&(c.navigation.prevEl=r),o.init(),o.update()),l.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),l.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),l.includes("direction")&&e.changeDirection(i.direction,!1),e.update()}function ln(s){!s||s.destroyed||!s.params.virtual||s.params.virtual&&!s.params.virtual.enabled||(s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),s.parallax&&s.params.parallax&&s.params.parallax.enabled&&s.parallax.setTranslate())}function an(s,e,t){if(!t)return null;const i=s.value.isHorizontal()?{[s.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`};return e.filter((l,n)=>n>=t.from&&n<=t.to).map(l=>(l.props||(l.props={}),l.props.style||(l.props.style={}),l.props.swiperRef=s,l.props.style=i,re(l.type,Me({},l.props),l.children)))}const F={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","zoomChange"],setup(s,e){let{slots:t,emit:i}=e;const{tag:l,wrapperTag:n}=s,r=ee("swiper"),a=ee(null),d=ee(!1),u=ee(!1),c=ee(null),p=ee(null),o=ee(null),w={value:[]},h={value:[]},_=ee(null),b=ee(null),S=ee(null),y=ee(null),{params:v,passedParams:x}=As(s);cs(t,w,h),o.value=x,h.value=w.value;const A=()=>{cs(t,w,h),d.value=!0};if(v.onAny=function(j){for(var T=arguments.length,B=new Array(T>1?T-1:0),C=1;C<T;C++)B[C-1]=arguments[C];i(j,...B)},Object.assign(v.on,{_beforeBreakpoint:A,_containerClasses(j,T){r.value=T}}),p.value=en(v),p.value.loopCreate=()=>{},p.value.loopDestroy=()=>{},v.loop&&(p.value.loopedSlides=st(w.value,v)),p.value.virtual&&p.value.params.virtual.enabled){p.value.virtual.slides=w.value;const j={cache:!1,slides:w.value,renderExternal:T=>{a.value=T},renderExternalUpdate:!1};ve(p.value.params.virtual,j),ve(p.value.originalParams.virtual,j)}Ns(()=>{!u.value&&p.value&&(p.value.emitSlidesClasses(),u.value=!0);const{passedParams:j}=As(s),T=rn(j,o.value,w.value,h.value);o.value=j,(T.length||d.value)&&p.value&&!p.value.destroyed&&nn({swiper:p.value,slides:w.value,passedParams:j,changedParams:T,nextEl:_.value,prevEl:b.value,scrollbarEl:y.value,paginationEl:S.value}),d.value=!1}),Bs("swiper",p),Tt(a,()=>{us(()=>{ln(p.value)})}),Ds(()=>{!c.value||(sn({el:c.value,nextEl:_.value,prevEl:b.value,paginationEl:S.value,scrollbarEl:y.value,swiper:p.value},v),i("swiper",p.value))}),Gs(()=>{p.value&&!p.value.destroyed&&p.value.destroy(!0,!1)});function k(j){return v.virtual?an(p,j,a.value):!v.loop||p.value&&p.value.destroyed?(j.forEach(T=>{T.props||(T.props={}),T.props.swiperRef=p}),j):tn(p,j,v)}return()=>{const{slides:j,slots:T}=cs(t,w,h);return re(l,{ref:c,class:Qs(r.value)},[T["container-start"],Ks(s)&&[re("div",{ref:b,class:"swiper-button-prev"}),re("div",{ref:_,class:"swiper-button-next"})],Js(s)&&re("div",{ref:y,class:"swiper-scrollbar"}),Zs(s)&&re("div",{ref:S,class:"swiper-pagination"}),re(n,{class:"swiper-wrapper"},[T["wrapper-start"],k(j),T["wrapper-end"]]),T["container-end"]])}}},q={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup(s,e){let{slots:t}=e,i=!1;const{swiperRef:l}=s,n=ee(null),r=ee("swiper-slide");function a(u,c,p){c===n.value&&(r.value=p)}Ds(()=>{!l.value||(l.value.on("_slideClass",a),i=!0)}),kt(()=>{i||!l||!l.value||(l.value.on("_slideClass",a),i=!0)}),Ns(()=>{!n.value||!l||!l.value||l.value.destroyed&&r.value!=="swiper-slide"&&(r.value="swiper-slide")}),Gs(()=>{!l||!l.value||l.value.off("_slideClass",a)});const d=ce(()=>({isActive:r.value.indexOf("swiper-slide-active")>=0||r.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isDuplicate:r.value.indexOf("swiper-slide-duplicate")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0||r.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0||r.value.indexOf("swiper-slide-duplicate-next")>=0}));return Bs("swiperSlide",d),()=>re(s.tag,{class:Qs(`${r.value}`),ref:n,"data-swiper-slide-index":s.virtualIndex},s.zoom?re("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof s.zoom=="number"?s.zoom:void 0},t.default&&t.default(d.value)):t.default&&t.default(d.value))}};const on=["href"],dn=G({setup(s){return(e,t)=>(O(),V(ue(F),{class:"swiper-mammon",direction:"vertical","css-mode":!0,modules:[ue(X),ue(Xe)],autoHeight:!0,loop:!0,pagination:{clickable:!0},autoplay:{delay:2600,disableOnInteraction:!1}},{default:f(()=>[(O(!0),W(oe,null,me(ue(ft),(i,l)=>(O(),V(ue(q),{class:"slide",key:l},{default:f(()=>[$("a",{href:i.url,class:"link",target:"_blank"},[$("div",{style:qe({backgroundImage:`url(${i.image})`}),class:"image"},null,4)],8,on)]),_:2},1024))),128))]),_:1},8,["modules"]))}});var pn=R(dn,[["__scopeId","data-v-729b5492"]]);const cn={class:"image-mammon"},un=["href"],fn=G({setup(s){return(e,t)=>(O(),W("div",cn,[$("a",{href:ue(Ts).url,class:"link",target:"_blank"},[$("div",{style:qe({backgroundImage:`url(${ue(Ts).image})`}),class:"image"},null,4)],8,un)]))}});var mn=R(fn,[["__scopeId","data-v-5d732cfb"]]);const js=["GoogleAdSense1","GoogleAdSense2","GoogleAdSense3"];var tt=G({name:"mammon",props:{provider:{type:String,default:"GoogleAdSense1"}},setup(s){return()=>s.provider==="Image"?re(mn):s.provider==="Swiper"?re(pn):s.provider==="GoogleAdSense1"?re(Nt):s.provider==="GoogleAdSense2"?re(Dt):s.provider==="GoogleAdSense3"?re(Rt):null}});const hn=G({name:"skeleton",props:{width:Number,height:Number,circle:{type:Boolean,default:!1},radius:{type:Number,default:2}},setup(s){return{style:ce(()=>Me(Me({borderRadius:s.circle?"100%":`${s.radius}px`},s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"}))}}});function wn(s,e,t,i,l,n){return O(),W("div",{class:"skeleton",style:qe(s.style)},null,4)}var gn=R(hn,[["render",wn],["__scopeId","data-v-1b87521a"]]);const _n=G({name:"homepage-footer",props:{repository:{type:String,required:!0}},setup(){return{CONFIG:mt,getGitHubRepositoryURL:hs}}}),vn=s=>(ne("data-v-0f9a6bb1"),s=s(),le(),s),Sn={class:"footer"},bn={class:"container"},yn={class:"footer-content"},$n=["href"],xn=vn(()=>$("span",null," is maintained by ",-1)),Cn=["href"];function En(s,e,t,i,l,n){return O(),W("footer",Sn,[$("div",bn,[$("span",yn,[$("a",{href:s.getGitHubRepositoryURL(s.repository),target:"_blank"},te(s.repository),9,$n),xn,$("a",{href:s.CONFIG.GITHUB_USER_URL,target:"_blank"},"@"+te(s.CONFIG.GITHUB_UID),9,Cn)])])])}var Tn=R(_n,[["render",En],["__scopeId","data-v-0f9a6bb1"]]);const kn=G({name:"homepage-card",props:{title:String,titleLink:String,contentClass:{type:String,required:!1,default:""}}}),Pn=s=>(ne("data-v-1bb8737f"),s=s(),le(),s),Mn={class:"homepage-card"},zn={key:0,class:"header"},In=["href"],On=Pn(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),An={key:1};function jn(s,e,t,i,l,n){return O(),W("div",Mn,[s.title?(O(),W("div",zn,[s.titleLink?(O(),W("a",{key:0,href:s.titleLink,target:"_blank",class:"link"},[$("span",null,te(s.title),1),On],8,In)):(O(),W("span",An,te(s.title),1)),Se(s.$slots,"actions",{},void 0,!0)])):fe("",!0),$("div",{class:Oe(["content",s.contentClass])},[Se(s.$slots,"default",{},void 0,!0)],2)])}var it=R(kn,[["render",jn],["__scopeId","data-v-1bb8737f"]]);const Ln=G({name:"homepage-toolbox",props:{repository:{type:String,required:!0}},setup(s){return{repoURL:hs(s.repository),handleToPageTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}}}),rt=s=>(ne("data-v-ed3a4404"),s=s(),le(),s),Nn={id:"toolbox"},Bn={class:"container"},Dn={class:"tools"},Gn=["href"],Rn=rt(()=>$("i",{class:"iconfont icon-github"},null,-1)),Hn=[Rn],Vn=rt(()=>$("i",{class:"iconfont icon-arrow-up"},null,-1)),Wn=[Vn];function Fn(s,e,t,i,l,n){return O(),W("div",Nn,[$("div",Bn,[$("div",Dn,[$("a",{class:"item github",title:"to GitHub homepage",target:"_blank",href:s.repoURL},Hn,8,Gn),$("button",{class:"item to-top",onClick:e[0]||(e[0]=(...r)=>s.handleToPageTop&&s.handleToPageTop(...r))},Wn)])])])}var qn=R(Ln,[["render",Fn],["__scopeId","data-v-ed3a4404"]]);const Yn=G({name:"homepage-button",props:{link:{type:String,required:!0},icon:{type:String,required:!0},text:{type:String,required:!1},count:{type:Number,required:!1},countIcon:{type:String,required:!1},countText:{type:String,required:!1},countLink:{type:String,required:!1}},setup(s){const e=ce(()=>Number.isFinite(s.count)||s.countText),t=ce(()=>s.countText?s.countText:e?St(s.count):null);return{hasCount:e,countContent:t}}}),Xn={class:"homepage-button"},Un=["href"],Kn={key:0,class:"text"},Zn=["href"];function Jn(s,e,t,i,l,n){return O(),W("span",Xn,[$("a",{href:s.link,class:"item button",target:"_blank"},[$("i",{class:Oe(["iconfont",s.icon])},null,2),s.text?(O(),W("span",Kn,te(s.text),1)):fe("",!0),Se(s.$slots,"default",{},void 0,!0)],8,Un),s.hasCount?(O(),W("a",{key:0,class:"item count",href:s.countLink||s.link,target:"_blank"},[s.countIcon?(O(),W("i",{key:0,class:Oe(["iconfont",s.countIcon])},null,2)):fe("",!0),m(Fe,{name:"module",mode:"out-in"},{default:f(()=>[(O(),W("span",{key:s.countContent||"null"},te(s.countContent),1))]),_:1})],8,Zn)):fe("",!0)])}var Qn=R(Yn,[["render",Jn],["__scopeId","data-v-fcc2769a"]]);const el=G({name:"loading"}),sl={class:"loading"},tl={class:"animation"};function il(s,e,t,i,l,n){return O(),W("div",sl,[$("div",tl,[(O(),W(oe,null,me(5,r=>$("div",{key:r})),64))])])}var rl=R(el,[["render",il],["__scopeId","data-v-37e37832"]]);const nl=G({name:"homepage",components:{Mammon:tt,Loading:rl,Skeleton:gn,Navbar:bt,HomepageFooter:Tn,HomepageCard:it,HomepageToolbox:qn,GithubButton:Qn},props:{repository:{type:String,required:!0},headerAdProvider:{type:String,required:!1},footerAdProvider:{type:String,required:!1}},setup(s){const e=ht(),t=ce(()=>e.initialized),i=yt(s.repository),l=hs(s.repository),n=ce(()=>{var c;return(c=r.value)==null?void 0:c.description}),r=ce(()=>e.getGitHubRepositoryDetail(s.repository)),a=ce(()=>e.githubRepositories),d=ce(()=>{const c=e.npmPackagesDownloadsMap.get(s.repository);return c?$t(c):"0"}),u=ce(()=>e.githubNPMRepositories.map(({name:c})=>c).includes(s.repository));return{initialized:t,isNPMPackage:u,repoUrl:l,repoDescription:n,repoDetail:r,packageDownloads:d,appRepositories:a,npmUrl:i}}}),ll={class:"home-page"},al={class:"main"},ol={class:"banner",key:"skeleton"},dl={class:"title-skeleton"},pl={class:"subtitle-skeleton"},cl={class:"buttons-skeleton"},ul={class:"banner",key:"banner"},fl={key:0,class:"archived"},ml={class:"title"},hl={class:"subtitle"},wl={class:"buttons"},gl={class:"actions"},_l={class:"container"};function vl(s,e,t,i,l,n){const r=z("navbar"),a=z("skeleton"),d=z("github-button"),u=z("mammon"),c=z("homepage-card"),p=z("Loading"),o=z("homepage-footer"),w=z("homepage-toolbox");return O(),W("div",ll,[m(r,{repository:s.repository},null,8,["repository"]),$("main",al,[m(Fe,{name:"module",mode:"out-in"},{default:f(()=>{var h,_,b,S;return[s.initialized?(O(),W("div",ul,[(h=s.repoDetail)!=null&&h.archived?(O(),W("p",fl," \u26A0\uFE0F This repository has been archived. It is now read-only. ")):fe("",!0),$("h1",ml,te(s.repository),1),$("h4",hl,te(s.repoDescription||"..."),1),$("div",wl,[m(d,{link:s.repoUrl,count:((_=s.repoDetail)==null?void 0:_.stargazers_count)||0,countLink:`${s.repoUrl}/stargazers`,icon:"icon-github",class:"item",text:"Star"},null,8,["link","count","countLink"]),m(d,{link:`${s.repoUrl}/issues`,count:((b=s.repoDetail)==null?void 0:b.open_issues_count)||0,icon:"icon-issue",class:"item",text:"Issue"},null,8,["link","count"]),m(d,{link:`${s.repoUrl}/fork`,count:((S=s.repoDetail)==null?void 0:S.forks)||0,icon:"icon-fork",class:"item",text:"Fork"},null,8,["link","count"]),m(d,{class:"item",icon:"icon-download",text:"Download",link:`${s.repoUrl}/archive/master.zip`,"count-icon":s.isNPMPackage?"icon-npm":void 0,"count-link":s.isNPMPackage?s.npmUrl:void 0,"count-text":s.isNPMPackage?s.packageDownloads:void 0},null,8,["link","count-icon","count-link","count-text"])]),$("div",gl,[Se(s.$slots,"actions",{},void 0,!0)])])):(O(),W("div",ol,[$("div",dl,[m(a)]),$("div",pl,[m(a)]),$("div",cl,[(O(),W(oe,null,me(4,y=>$("div",{class:"item-skeleton",key:y},[m(a)])),64))])]))]}),_:3}),$("div",_l,[s.headerAdProvider?(O(),V(c,{key:0,class:"homepage-mammon"},{default:f(()=>[m(u,{provider:s.headerAdProvider},null,8,["provider"])]),_:1})):fe("",!0),m(Fe,{name:"module",mode:"out-in"},{default:f(()=>[s.initialized?Se(s.$slots,"content",{key:0},void 0,!0):(O(),V(p,{key:1,class:"loading"}))]),_:3}),s.footerAdProvider?(O(),V(c,{key:1,class:"homepage-mammon"},{default:f(()=>[m(u,{provider:s.footerAdProvider},null,8,["provider"])]),_:1})):fe("",!0)])]),s.initialized?(O(),W(oe,{key:0},[m(o,{repository:s.repository},null,8,["repository"]),m(w,{repository:s.repository},null,8,["repository"])],64)):fe("",!0)])}var Sl=R(nl,[["render",vl],["__scopeId","data-v-4f1dc4f8"]]);const bl=G({name:"homepage-link",props:{text:String,href:String,icon:String}}),yl={class:"homepage-link"},$l=["href"];function xl(s,e,t,i,l,n){return O(),W("div",yl,[$("a",{class:"link",target:"_blank",href:s.href},[$("i",{class:Oe(["iconfont",`icon-${s.icon}`])},null,2),$("span",null,te(s.text),1)],8,$l)])}var We=R(bl,[["render",xl],["__scopeId","data-v-b1d4c940"]]);const Cl=G({name:"modal",props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},titleUrl:{type:String,required:!0}},emits:["close"]}),nt=s=>(ne("data-v-7cf31fc0"),s=s(),le(),s),El={key:0,class:"modal"},Tl={class:"wrapper"},kl={class:"title"},Pl=["href"],Ml=nt(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),zl=nt(()=>$("i",{class:"iconfont icon-close"},null,-1)),Il=[zl],Ol={class:"content"};function Al(s,e,t,i,l,n){return O(),V(Pt,{to:"body"},[m(Fe,{name:"module"},{default:f(()=>[s.visible?(O(),W("div",El,[$("div",Tl,[$("p",kl,[$("a",{href:s.titleUrl,class:"link",target:"_blank"},[$("span",null,te(s.title),1),Ml],8,Pl),$("button",{class:"close",onClick:e[0]||(e[0]=r=>s.$emit("close"))},Il)]),$("div",Ol,[Se(s.$slots,"content",{},void 0,!0)])])])):fe("",!0)]),_:3})])}var jl=R(Cl,[["render",Al],["__scopeId","data-v-7cf31fc0"]]);const Ll=G({name:"example-list",components:{Mammon:tt,HomepageCard:it,Modal:jl},props:{examples:{type:Array,required:!0},disabledAutoAd:{type:Boolean,default:!1},contentClass:{type:String,required:!1}},setup(s){wt();const e=ee(null),t=ce(()=>Number.isInteger(e.value)),i=ce(()=>s.examples[e.value]||null),l=d=>{e.value=d},n=()=>{e.value=null},r=6,a=Ye(s.examples.map(()=>null));return Mt(()=>{const d=s.examples.length;if(d<=r){const u=Math.ceil(d/2);a[u-1]=js[0]}else{const u=js,c=d/(u.length+1);u.forEach((p,o)=>{a[Math.ceil(c*(o+1))-1]=p})}console.log("AutoMammonProviders",a.slice())}),{adProviders:a,isVisibleExampleModal:t,activeExample:i,openExampleModal:l,closeExampleModal:n}}}),Nl=s=>(ne("data-v-4c555b10"),s=s(),le(),s),Bl={class:"examples"},Dl={class:"actions"},Gl=["onClick"],Rl=Nl(()=>$("i",{class:"iconfont icon-code"},null,-1)),Hl=[Rl];function Vl(s,e,t,i,l,n){var c,p,o;const r=z("highlightjs"),a=z("modal"),d=z("homepage-card"),u=z("mammon");return O(),W("div",Bl,[m(a,{visible:s.isVisibleExampleModal,title:`${(c=s.activeExample)==null?void 0:c.title} (${(p=s.activeExample)==null?void 0:p.path})`,"title-url":((o=s.activeExample)==null?void 0:o.url)||"",onClose:s.closeExampleModal},{content:f(()=>{var w,h;return[m(r,{class:"highlight",contenteditable:"true",onkeydown:"if(event.metaKey) return true; return false;",code:(w=s.activeExample)==null?void 0:w.raw,language:(h=s.activeExample)==null?void 0:h.language},null,8,["code","language"])]}),_:1},8,["visible","title","title-url","onClose"]),(O(!0),W(oe,null,me(s.examples,(w,h)=>(O(),W("div",{class:"example-item",key:w.name},[m(d,{title:w.title||w.name,"content-class":s.contentClass},{actions:f(()=>[$("div",Dl,[Se(s.$slots,"actions",{},void 0,!0),$("button",{class:"code-button",onClick:_=>s.openExampleModal(h)},Hl,8,Gl)])]),default:f(()=>[Se(s.$slots,"component",zt(It(w)),void 0,!0)]),_:2},1032,["title","content-class"]),s.disabledAutoAd?fe("",!0):(O(),W(oe,{key:0},[s.adProviders[h]?(O(),V(d,{key:0,class:"example-mammon"},{default:f(()=>[m(u,{provider:s.adProviders[h]||void 0},null,8,["provider"])]),_:2},1024)):fe("",!0)],64))]))),128))])}var Wl=R(Ll,[["render",Vl],["__scopeId","data-v-4c555b10"]]);const Fl=G({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=p=>{console.log("SwiperComponentReady!",p)},e=p=>{console.log("handleHSwiperSlideChange!",p.realIndex)},t=Ye(new Map),i=p=>t.get(p),l=p=>{t.set(p,!0),console.log("Click slide! target slide id:",p)};let n=null;const r=p=>{n=p},a=ee();return{modules:[Us,X,ie,Xe],handleHSwiperReady:s,handleHSwiperSlideChange:e,handleHwiperSlideClick:l,isSlideClicked:i,setVSwiperRef:r,vSwiperIndex:a,updateVSwiperIndex:()=>{a.value=n==null?void 0:n.activeIndex},prevVSwiperSlide:()=>n==null?void 0:n.slidePrev(),nextVSwiperSlide:()=>n==null?void 0:n.slideNext()}}}),he=s=>(ne("data-v-287364e4"),s=s(),le(),s),ql={class:"advance-example"},Yl=he(()=>$("span",null,"Loop Slide 1",-1)),Xl=he(()=>$("span",null,"Loop Slide 3",-1)),Ul=he(()=>$("span",null,"Loop Slide 4",-1)),Kl=he(()=>$("span",null,"Loop Slide 5",-1)),Zl=he(()=>$("span",null,"Loop Slide 6",-1)),Jl=he(()=>$("a",{class:"link",href:"https://swiperjs.com/",target:"_blank"},"swiperjs.com",-1)),Ql=he(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),ea=he(()=>$("a",{class:"link",href:"https://github.com/nolimits4web/swiper/discussions",target:"_blank"}," discussions ",-1)),sa=he(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),ta=g("Slide 3"),ia=g("Slide 4"),ra=g("Slide 5"),na=g("Slide 6"),la=["disabled"],aa=he(()=>$("i",{class:"iconfont icon-arrow-down"},null,-1)),oa=[aa],da=["disabled"],pa=he(()=>$("i",{class:"iconfont icon-arrow-up"},null,-1)),ca=[pa];function ua(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",ql,[m(a,{class:"horizontal-swiper",modules:s.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:s.handleHSwiperReady,onSlideChange:s.handleHSwiperSlideChange},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Yl]),_:1}),m(r,{class:"slide"},{default:f(d=>[$("pre",null,te(d),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xl,$("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=Ot(d=>s.handleHwiperSlideClick(3),["prevent"]))},te(s.isSlideClicked(3)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ul,$("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=d=>s.handleHwiperSlideClick(4))},te(s.isSlideClicked(4)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[Kl,$("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=d=>s.handleHwiperSlideClick(5))},te(s.isSlideClicked(5)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zl,$("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=d=>s.handleHwiperSlideClick(6))},te(s.isSlideClicked(6)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),m(a,{class:"vertical-swiper",modules:s.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:s.setVSwiperRef,onSlideChange:s.updateVSwiperIndex},{"container-start":f(()=>[$("button",{class:"nav-button-prev",disabled:s.vSwiperIndex===0,onClick:e[4]||(e[4]=(...d)=>s.prevVSwiperSlide&&s.prevVSwiperSlide(...d))},oa,8,la)]),"container-end":f(()=>[$("button",{class:"nav-button-next",disabled:s.vSwiperIndex===5-1,onClick:e[5]||(e[5]=(...d)=>s.nextVSwiperSlide&&s.nextVSwiperSlide(...d))},ca,8,da)]),default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Jl,Ql]),_:1}),m(r,{class:"slide"},{default:f(()=>[ea,sa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ta]),_:1}),m(r,{class:"slide"},{default:f(()=>[ia]),_:1}),m(r,{class:"slide"},{default:f(()=>[ra]),_:1}),m(r,{class:"slide"},{default:f(()=>[na]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}var fa=R(Fl,[["render",ua],["__scopeId","data-v-287364e4"]]),ma=Object.freeze(Object.defineProperty({__proto__:null,default:fa},Symbol.toStringTag,{value:"Module"}));const ha=G({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue",components:{Swiper:F,SwiperSlide:q}}),wa=g("Slide 1"),ga=g("Slide 2"),_a=g("Slide 3"),va=g("Slide 4"),Sa=g("Slide 5"),ba=g("Slide 6"),ya=g("Slide 7"),$a=g("Slide 8");function xa(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper"},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[wa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ga]),_:1}),m(r,{class:"slide"},{default:f(()=>[_a]),_:1}),m(r,{class:"slide"},{default:f(()=>[va]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ba]),_:1}),m(r,{class:"slide"},{default:f(()=>[ya]),_:1}),m(r,{class:"slide"},{default:f(()=>[$a]),_:1})]),_:1})}var Ca=R(ha,[["render",xa],["__scopeId","data-v-230cad07"]]),Ea=Object.freeze(Object.defineProperty({__proto__:null,default:Ca},Symbol.toStringTag,{value:"Module"}));const Ta=G({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[ie]}}}),ka=g("Slide 1"),Pa=g("Slide 2"),Ma=g("Slide 3"),za=g("Slide 4"),Ia=g("Slide 5"),Oa=g("Slide 6"),Aa=g("Slide 7"),ja=g("Slide 8");function La(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,navigation:""},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[ka]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ma]),_:1}),m(r,{class:"slide"},{default:f(()=>[za]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ia]),_:1}),m(r,{class:"slide"},{default:f(()=>[Oa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Aa]),_:1}),m(r,{class:"slide"},{default:f(()=>[ja]),_:1})]),_:1},8,["modules"])}var Na=R(Ta,[["render",La],["__scopeId","data-v-fb2a5a0a"]]),Ba=Object.freeze(Object.defineProperty({__proto__:null,default:Na},Symbol.toStringTag,{value:"Module"}));const Da=G({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Ga=g("Slide 1"),Ra=g("Slide 2"),Ha=g("Slide 3"),Va=g("Slide 4"),Wa=g("Slide 5"),Fa=g("Slide 6"),qa=g("Slide 7"),Ya=g("Slide 8");function Xa(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ga]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ra]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ha]),_:1}),m(r,{class:"slide"},{default:f(()=>[Va]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fa]),_:1}),m(r,{class:"slide"},{default:f(()=>[qa]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ya]),_:1})]),_:1},8,["modules"])}var Ua=R(Da,[["render",Xa],["__scopeId","data-v-1bff24f2"]]),Ka=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"}));const Za=G({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Ja=g("Slide 1"),Qa=g("Slide 2"),eo=g("Slide 3"),so=g("Slide 4"),to=g("Slide 5"),io=g("Slide 6"),ro=g("Slide 7"),no=g("Slide 8");function lo(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ja]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qa]),_:1}),m(r,{class:"slide"},{default:f(()=>[eo]),_:1}),m(r,{class:"slide"},{default:f(()=>[so]),_:1}),m(r,{class:"slide"},{default:f(()=>[to]),_:1}),m(r,{class:"slide"},{default:f(()=>[io]),_:1}),m(r,{class:"slide"},{default:f(()=>[ro]),_:1}),m(r,{class:"slide"},{default:f(()=>[no]),_:1})]),_:1},8,["modules"])}var ao=R(Za,[["render",lo],["__scopeId","data-v-429e8dc7"]]),oo=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"}));const po=G({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),co=g("Slide 1"),uo=g("Slide 2"),fo=g("Slide 3"),mo=g("Slide 4"),ho=g("Slide 5"),wo=g("Slide 6"),go=g("Slide 7"),_o=g("Slide 8");function vo(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{type:"progressbar"}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[co]),_:1}),m(r,{class:"slide"},{default:f(()=>[uo]),_:1}),m(r,{class:"slide"},{default:f(()=>[fo]),_:1}),m(r,{class:"slide"},{default:f(()=>[mo]),_:1}),m(r,{class:"slide"},{default:f(()=>[ho]),_:1}),m(r,{class:"slide"},{default:f(()=>[wo]),_:1}),m(r,{class:"slide"},{default:f(()=>[go]),_:1}),m(r,{class:"slide"},{default:f(()=>[_o]),_:1})]),_:1},8,["modules"])}var So=R(po,[["render",vo],["__scopeId","data-v-70c1d854"]]),bo=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"}));const yo=G({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),$o=g("Slide 1"),xo=g("Slide 2"),Co=g("Slide 3"),Eo=g("Slide 4"),To=g("Slide 5"),ko=g("Slide 6"),Po=g("Slide 7"),Mo=g("Slide 8");function zo(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{type:"fraction"}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[$o]),_:1}),m(r,{class:"slide"},{default:f(()=>[xo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Co]),_:1}),m(r,{class:"slide"},{default:f(()=>[Eo]),_:1}),m(r,{class:"slide"},{default:f(()=>[To]),_:1}),m(r,{class:"slide"},{default:f(()=>[ko]),_:1}),m(r,{class:"slide"},{default:f(()=>[Po]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mo]),_:1})]),_:1},8,["modules"])}var Io=R(yo,[["render",zo],["__scopeId","data-v-3eae05e0"]]),Oo=Object.freeze(Object.defineProperty({__proto__:null,default:Io},Symbol.toStringTag,{value:"Module"}));const Ao=G({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{bulletRenderer:(e,t)=>`<span class="${`${t} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[X]}}}),jo=g("Slide 1"),Lo=g("Slide 2"),No=g("Slide 3"),Bo=g("Slide 4"),Do=g("Slide 5"),Go=g("Slide 6"),Ro=g("Slide 7"),Ho=g("Slide 8");function Vo(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,pagination:{clickable:!0,renderBullet:s.bulletRenderer}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[jo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lo]),_:1}),m(r,{class:"slide"},{default:f(()=>[No]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Do]),_:1}),m(r,{class:"slide"},{default:f(()=>[Go]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ro]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ho]),_:1})]),_:1},8,["modules","pagination"])}var Wo=R(Ao,[["render",Vo],["__scopeId","data-v-01c15eb0"]]),Fo=Object.freeze(Object.defineProperty({__proto__:null,default:Wo},Symbol.toStringTag,{value:"Module"}));const qo=G({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[_s]}}}),Yo=g("Slide 1"),Xo=g("Slide 2"),Uo=g("Slide 3"),Ko=g("Slide 4"),Zo=g("Slide 5"),Jo=g("Slide 6"),Qo=g("Slide 7"),ed=g("Slide 8");function sd(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,scrollbar:{hide:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Yo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Uo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ko]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jo]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qo]),_:1}),m(r,{class:"slide"},{default:f(()=>[ed]),_:1})]),_:1},8,["modules"])}var td=R(qo,[["render",sd],["__scopeId","data-v-6a92bd6c"]]),id=Object.freeze(Object.defineProperty({__proto__:null,default:td},Symbol.toStringTag,{value:"Module"}));const rd=G({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),nd=g("Slide 1"),ld=g("Slide 2"),ad=g("Slide 3"),od=g("Slide 4"),dd=g("Slide 5"),pd=g("Slide 6"),cd=g("Slide 7"),ud=g("Slide 8");function fd(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"vertical",pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[nd]),_:1}),m(r,{class:"slide"},{default:f(()=>[ld]),_:1}),m(r,{class:"slide"},{default:f(()=>[ad]),_:1}),m(r,{class:"slide"},{default:f(()=>[od]),_:1}),m(r,{class:"slide"},{default:f(()=>[dd]),_:1}),m(r,{class:"slide"},{default:f(()=>[pd]),_:1}),m(r,{class:"slide"},{default:f(()=>[cd]),_:1}),m(r,{class:"slide"},{default:f(()=>[ud]),_:1})]),_:1},8,["modules"])}var md=R(rd,[["render",fd],["__scopeId","data-v-43606c02"]]),hd=Object.freeze(Object.defineProperty({__proto__:null,default:md},Symbol.toStringTag,{value:"Module"}));const wd=G({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),gd=g("Slide 1"),_d=g("Slide 2"),vd=g("Slide 3"),Sd=g("Slide 4"),bd=g("Slide 5"),yd=g("Slide 6"),$d=g("Slide 7"),xd=g("Slide 8");function Cd(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[gd]),_:1}),m(r,{class:"slide"},{default:f(()=>[_d]),_:1}),m(r,{class:"slide"},{default:f(()=>[vd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sd]),_:1}),m(r,{class:"slide"},{default:f(()=>[bd]),_:1}),m(r,{class:"slide"},{default:f(()=>[yd]),_:1}),m(r,{class:"slide"},{default:f(()=>[$d]),_:1}),m(r,{class:"slide"},{default:f(()=>[xd]),_:1})]),_:1},8,["modules"])}var Ed=R(wd,[["render",Cd],["__scopeId","data-v-5a348f51"]]),Td=Object.freeze(Object.defineProperty({__proto__:null,default:Ed},Symbol.toStringTag,{value:"Module"}));const kd=G({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Pd=g("Slide 1"),Md=g("Slide 2"),zd=g("Slide 3"),Id=g("Slide 4"),Od=g("Slide 5"),Ad=g("Slide 6"),jd=g("Slide 7"),Ld=g("Slide 8");function Nd(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Pd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Md]),_:1}),m(r,{class:"slide"},{default:f(()=>[zd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Id]),_:1}),m(r,{class:"slide"},{default:f(()=>[Od]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ad]),_:1}),m(r,{class:"slide"},{default:f(()=>[jd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ld]),_:1})]),_:1},8,["modules"])}var Bd=R(kd,[["render",Nd],["__scopeId","data-v-7e1ba464"]]),Dd=Object.freeze(Object.defineProperty({__proto__:null,default:Bd},Symbol.toStringTag,{value:"Module"}));const Gd=G({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Rd=g("Slide 1"),Hd=g("Slide 2"),Vd=g("Slide 3"),Wd=g("Slide 4"),Fd=g("Slide 5"),qd=g("Slide 6"),Yd=g("Slide 7"),Xd=g("Slide 8");function Ud(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Rd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fd]),_:1}),m(r,{class:"slide"},{default:f(()=>[qd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yd]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xd]),_:1})]),_:1},8,["modules"])}var Kd=R(Gd,[["render",Ud],["__scopeId","data-v-1f41b97a"]]),Zd=Object.freeze(Object.defineProperty({__proto__:null,default:Kd},Symbol.toStringTag,{value:"Module"}));const Jd=G({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Qd=g("Slide 1"),ep=g("Slide 2"),sp=g("Slide 3"),tp=g("Slide 4"),ip=g("Slide 5"),rp=g("Slide 6"),np=g("Slide 7"),lp=g("Slide 8");function ap(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Qd]),_:1}),m(r,{class:"slide"},{default:f(()=>[ep]),_:1}),m(r,{class:"slide"},{default:f(()=>[sp]),_:1}),m(r,{class:"slide"},{default:f(()=>[tp]),_:1}),m(r,{class:"slide"},{default:f(()=>[ip]),_:1}),m(r,{class:"slide"},{default:f(()=>[rp]),_:1}),m(r,{class:"slide"},{default:f(()=>[np]),_:1}),m(r,{class:"slide"},{default:f(()=>[lp]),_:1})]),_:1},8,["modules"])}var op=R(Jd,[["render",ap],["__scopeId","data-v-669d2184"]]),dp=Object.freeze(Object.defineProperty({__proto__:null,default:op},Symbol.toStringTag,{value:"Module"}));const pp=G({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),cp=g("Slide 1"),up=g("Slide 2"),fp=g("Slide 3"),mp=g("Slide 4"),hp=g("Slide 5"),wp=g("Slide 6"),gp=g("Slide 7"),_p=g("Slide 8");function vp(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[cp]),_:1}),m(r,{class:"slide"},{default:f(()=>[up]),_:1}),m(r,{class:"slide"},{default:f(()=>[fp]),_:1}),m(r,{class:"slide"},{default:f(()=>[mp]),_:1}),m(r,{class:"slide"},{default:f(()=>[hp]),_:1}),m(r,{class:"slide"},{default:f(()=>[wp]),_:1}),m(r,{class:"slide"},{default:f(()=>[gp]),_:1}),m(r,{class:"slide"},{default:f(()=>[_p]),_:1})]),_:1},8,["modules"])}var Sp=R(pp,[["render",vp],["__scopeId","data-v-64428176"]]),bp=Object.freeze(Object.defineProperty({__proto__:null,default:Sp},Symbol.toStringTag,{value:"Module"}));const yp=G({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Xs]}}}),$p=g("Slide 1"),xp=g("Slide 2"),Cp=g("Slide 3"),Ep=g("Slide 4"),Tp=g("Slide 5"),kp=g("Slide 6"),Pp=g("Slide 7"),Mp=g("Slide 8");function zp(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[$p]),_:1}),m(r,{class:"slide"},{default:f(()=>[xp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ep]),_:1}),m(r,{class:"slide"},{default:f(()=>[Tp]),_:1}),m(r,{class:"slide"},{default:f(()=>[kp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pp]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mp]),_:1})]),_:1},8,["modules"])}var Ip=R(yp,[["render",zp],["__scopeId","data-v-98975784"]]),Op=Object.freeze(Object.defineProperty({__proto__:null,default:Ip},Symbol.toStringTag,{value:"Module"}));const Ap=G({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Xs,_s,Xe]}}}),K=s=>(ne("data-v-7727eb4e"),s=s(),le(),s),jp=K(()=>$("h2",null,"I Have a Dream",-1)),Lp=K(()=>$("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),Np=K(()=>$("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),Bp=K(()=>$("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),Dp=K(()=>$("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),Gp=K(()=>$("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check \u2014 a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),Rp=K(()=>$("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),Hp=K(()=>$("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),Vp=K(()=>$("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),Wp=K(()=>$("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),Fp=K(()=>$("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),qp=K(()=>$("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),Yp=K(()=>$("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),Xp=K(()=>$("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),Up=K(()=>$("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),Kp=K(()=>$("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),Zp=K(()=>$("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),Jp=K(()=>$("p",null,"I have a dream today.",-1)),Qp=K(()=>$("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),ec=K(()=>$("p",null,"I have a dream today.",-1)),sc=K(()=>$("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),tc=K(()=>$("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),ic=K(()=>$("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),rc=K(()=>$("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),nc=K(()=>$("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),lc=K(()=>$("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),ac=K(()=>$("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),oc=K(()=>$("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),dc=K(()=>$("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),pc=K(()=>$("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function cc(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[jp,Lp,Np,Bp,Dp,Gp,Rp,Hp,Vp,Wp,Fp,qp,Yp,Xp,Up,Kp,Zp,Jp,Qp,ec,sc,tc,ic,rc,nc,lc,ac,oc,dc,pc]),_:1})]),_:1},8,["modules"])}var uc=R(Ap,[["render",cc],["__scopeId","data-v-7727eb4e"]]),fc=Object.freeze(Object.defineProperty({__proto__:null,default:uc},Symbol.toStringTag,{value:"Module"}));const mc=G({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Us]}}}),hc=g("Slide 1"),wc=g("Slide 2"),gc=g("Slide 3"),_c=g("Slide 4"),vc=g("Slide 5"),Sc=g("Slide 6"),bc=g("Slide 7"),yc=g("Slide 8"),$c=g("Slide 9"),xc=g("Slide 10");function Cc(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[hc]),_:1}),m(r,{class:"slide"},{default:f(()=>[wc]),_:1}),m(r,{class:"slide"},{default:f(()=>[gc]),_:1}),m(r,{class:"slide"},{default:f(()=>[_c]),_:1}),m(r,{class:"slide"},{default:f(()=>[vc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sc]),_:1}),m(r,{class:"slide"},{default:f(()=>[bc]),_:1}),m(r,{class:"slide"},{default:f(()=>[yc]),_:1}),m(r,{class:"slide"},{default:f(()=>[$c]),_:1}),m(r,{class:"slide"},{default:f(()=>[xc]),_:1})]),_:1},8,["modules"])}var Ec=R(mc,[["render",Cc],["__scopeId","data-v-3a52d683"]]),Tc=Object.freeze(Object.defineProperty({__proto__:null,default:Ec},Symbol.toStringTag,{value:"Module"}));const kc=G({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Pc=g("Horizontal Slide 1"),Mc=g("Vertical Slide 1"),zc=g("Vertical Slide 2"),Ic=g("Vertical Slide 3"),Oc=g("Vertical Slide 4"),Ac=g("Vertical Slide 5"),jc=g("Horizontal Slide 3"),Lc=g("Horizontal Slide 4");function Nc(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper swiper-h",modules:s.modules,"space-between":50,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Pc]),_:1}),m(r,{class:"slide"},{default:f(()=>[m(a,{class:"swiper-v",modules:s.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Mc]),_:1}),m(r,{class:"slide"},{default:f(()=>[zc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ic]),_:1}),m(r,{class:"slide"},{default:f(()=>[Oc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ac]),_:1})]),_:1},8,["modules"])]),_:1}),m(r,{class:"slide"},{default:f(()=>[jc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lc]),_:1})]),_:1},8,["modules"])}var Bc=R(kc,[["render",Nc],["__scopeId","data-v-be61ddbe"]]),Dc=Object.freeze(Object.defineProperty({__proto__:null,default:Bc},Symbol.toStringTag,{value:"Module"}));const Gc=G({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),Rc=g("Slide 1"),Hc=g("Slide 2"),Vc=g("Slide 3"),Wc=g("Slide 4"),Fc=g("Slide 5"),qc=g("Slide 6"),Yc=g("Slide 7"),Xc=g("Slide 8");function Uc(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Rc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Fc]),_:1}),m(r,{class:"slide"},{default:f(()=>[qc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yc]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xc]),_:1})]),_:1},8,["modules"])}var Kc=R(Gc,[["render",Uc],["__scopeId","data-v-0060480e"]]),Zc=Object.freeze(Object.defineProperty({__proto__:null,default:Kc},Symbol.toStringTag,{value:"Module"}));const Jc=G({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),Qc=g("Slide 1"),eu=g("Slide 2"),su=g("Slide 3"),tu=g("Slide 4"),iu=g("Slide 5"),ru=g("Slide 6"),nu=g("Slide 7"),lu=g("Slide 8");function au(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:f(()=>[m(r,null,{default:f(()=>[Qc]),_:1}),m(r,null,{default:f(()=>[eu]),_:1}),m(r,null,{default:f(()=>[su]),_:1}),m(r,null,{default:f(()=>[tu]),_:1}),m(r,null,{default:f(()=>[iu]),_:1}),m(r,null,{default:f(()=>[ru]),_:1}),m(r,null,{default:f(()=>[nu]),_:1}),m(r,null,{default:f(()=>[lu]),_:1})]),_:1},8,["modules"])}var ou=R(Jc,[["render",au],["__scopeId","data-v-270eda90"]]),du=Object.freeze(Object.defineProperty({__proto__:null,default:ou},Symbol.toStringTag,{value:"Module"}));const pu=G({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),cu=g("Slide 1"),uu=g("Slide 2"),fu=g("Slide 3"),mu=g("Slide 4"),hu=g("Slide 5"),wu=g("Slide 6"),gu=g("Slide 7"),_u=g("Slide 8");function vu(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,null,{default:f(()=>[cu]),_:1}),m(r,null,{default:f(()=>[uu]),_:1}),m(r,null,{default:f(()=>[fu]),_:1}),m(r,null,{default:f(()=>[mu]),_:1}),m(r,null,{default:f(()=>[hu]),_:1}),m(r,null,{default:f(()=>[wu]),_:1}),m(r,null,{default:f(()=>[gu]),_:1}),m(r,null,{default:f(()=>[_u]),_:1})]),_:1},8,["modules"])}var Su=R(pu,[["render",vu],["__scopeId","data-v-babe5f42"]]),bu=Object.freeze(Object.defineProperty({__proto__:null,default:Su},Symbol.toStringTag,{value:"Module"}));const yu=G({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Ys,_s,ie,X]}}}),$u=g("Slide 1"),xu=g("Slide 2"),Cu=g("Slide 3"),Eu=g("Slide 4"),Tu=g("Slide 5"),ku=g("Slide 6"),Pu=g("Slide 7");function Mu(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[$u]),_:1}),m(r,{class:"slide"},{default:f(()=>[xu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Cu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Eu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Tu]),_:1}),m(r,{class:"slide"},{default:f(()=>[ku]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pu]),_:1})]),_:1},8,["modules"])}var zu=R(yu,[["render",Mu],["__scopeId","data-v-99849cba"]]),Iu=Object.freeze(Object.defineProperty({__proto__:null,default:zu},Symbol.toStringTag,{value:"Module"}));var Ke="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/1.jpg",Ze="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/2.jpg",Ne="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/3.jpg",Je="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/4.jpg",Be="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/5.jpg";const Ou=G({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Ur]}}}),De=s=>(ne("data-v-79500bac"),s=s(),le(),s),Au=De(()=>$("img",{src:Ke},null,-1)),ju=De(()=>$("img",{src:Ze},null,-1)),Lu=De(()=>$("img",{src:Ne},null,-1)),Nu=De(()=>$("img",{src:Je},null,-1)),Bu=De(()=>$("img",{src:Be},null,-1));function Du(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Au]),_:1}),m(r,{class:"slide"},{default:f(()=>[ju]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bu]),_:1})]),_:1},8,["modules"])}var Gu=R(Ou,[["render",Du],["__scopeId","data-v-79500bac"]]),Ru=Object.freeze(Object.defineProperty({__proto__:null,default:Gu},Symbol.toStringTag,{value:"Module"}));var Qe="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/6.jpg",lt="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/7.jpg",Hu="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/images/example/8.jpg";const Vu=G({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Jr]}}}),be=s=>(ne("data-v-e66792e2"),s=s(),le(),s),Wu={class:"coverflow-example"},Fu=be(()=>$("img",{src:Ke},null,-1)),qu=be(()=>$("img",{src:Ze},null,-1)),Yu=be(()=>$("img",{src:Ne},null,-1)),Xu=be(()=>$("img",{src:Je},null,-1)),Uu=be(()=>$("img",{src:Be},null,-1)),Ku=be(()=>$("img",{src:Qe},null,-1)),Zu=be(()=>$("img",{src:lt},null,-1)),Ju=be(()=>$("img",{src:Hu},null,-1));function Qu(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",Wu,[m(a,{class:"swiper",modules:s.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Fu]),_:1}),m(r,{class:"slide"},{default:f(()=>[qu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Yu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Uu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ku]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zu]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ju]),_:1})]),_:1},8,["modules"])])}var ef=R(Vu,[["render",Qu],["__scopeId","data-v-e66792e2"]]),sf=Object.freeze(Object.defineProperty({__proto__:null,default:ef},Symbol.toStringTag,{value:"Module"}));const tf=G({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Kr]}}}),es=s=>(ne("data-v-bc7726c8"),s=s(),le(),s),rf={class:"cube-example"},nf=es(()=>$("img",{src:Ne},null,-1)),lf=es(()=>$("img",{src:Be},null,-1)),af=es(()=>$("img",{src:Qe},null,-1)),of=es(()=>$("img",{src:lt},null,-1));function df(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",rf,[m(a,{class:"swiper",modules:s.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[nf]),_:1}),m(r,{class:"slide"},{default:f(()=>[lf]),_:1}),m(r,{class:"slide"},{default:f(()=>[af]),_:1}),m(r,{class:"slide"},{default:f(()=>[of]),_:1})]),_:1},8,["modules","cube-effect"])])}var pf=R(tf,[["render",df],["__scopeId","data-v-bc7726c8"]]),cf=Object.freeze(Object.defineProperty({__proto__:null,default:pf},Symbol.toStringTag,{value:"Module"}));const uf=G({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Zr]}}}),Te=s=>(ne("data-v-016bc8e6"),s=s(),le(),s),ff={class:"flip-example"},mf=Te(()=>$("img",{src:Ke},null,-1)),hf=Te(()=>$("img",{src:Ze},null,-1)),wf=Te(()=>$("img",{src:Ne},null,-1)),gf=Te(()=>$("img",{src:Je},null,-1)),_f=Te(()=>$("img",{src:Be},null,-1)),vf=Te(()=>$("img",{src:Qe},null,-1));function Sf(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",ff,[m(a,{class:"swiper",modules:s.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[mf]),_:1}),m(r,{class:"slide"},{default:f(()=>[hf]),_:1}),m(r,{class:"slide"},{default:f(()=>[wf]),_:1}),m(r,{class:"slide"},{default:f(()=>[gf]),_:1}),m(r,{class:"slide"},{default:f(()=>[_f]),_:1}),m(r,{class:"slide"},{default:f(()=>[vf]),_:1})]),_:1},8,["modules"])])}var bf=R(uf,[["render",Sf],["__scopeId","data-v-016bc8e6"]]),yf=Object.freeze(Object.defineProperty({__proto__:null,default:bf},Symbol.toStringTag,{value:"Module"}));const $f=G({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=ee(!0),e=ee(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:s,setEffect:l=>{e.value=l,us(()=>{s.value=!1,us(()=>{s.value=!0})})},modules:[X,Qr]}}}),ke=s=>(ne("data-v-766b8db1"),s=s(),le(),s),xf={class:"creative-example"},Cf={class:"toolbar"},Ef=["onClick"],Tf=ke(()=>$("img",{src:Ke},null,-1)),kf=ke(()=>$("img",{src:Ze},null,-1)),Pf=ke(()=>$("img",{src:Ne},null,-1)),Mf=ke(()=>$("img",{src:Je},null,-1)),zf=ke(()=>$("img",{src:Be},null,-1)),If=ke(()=>$("img",{src:Qe},null,-1));function Of(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",xf,[$("div",Cf,[(O(!0),W(oe,null,me(s.effects,(d,u)=>(O(),W("button",{key:u,onClick:c=>s.setEffect(u)}," Effect "+te(u),9,Ef))),128))]),s.render?(O(),V(a,{key:0,class:"swiper",modules:s.modules,effect:"creative","creative-effect":s.effects[s.effectIndex],"grab-cursor":!0,pagination:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Tf]),_:1}),m(r,{class:"slide"},{default:f(()=>[kf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Pf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Mf]),_:1}),m(r,{class:"slide"},{default:f(()=>[zf]),_:1}),m(r,{class:"slide"},{default:f(()=>[If]),_:1})]),_:1},8,["modules","creative-effect"])):fe("",!0)])}var Af=R($f,[["render",Of],["__scopeId","data-v-766b8db1"]]),jf=Object.freeze(Object.defineProperty({__proto__:null,default:Af},Symbol.toStringTag,{value:"Module"}));const Lf=G({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Ys]}}}),Nf=g("Slide 1"),Bf=g("Slide 2"),Df=g("Slide 3"),Gf=g("Slide 4"),Rf=g("Slide 5"),Hf=g("Slide 6"),Vf=g("Slide 7"),Wf=g("Slide 8");function Ff(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Nf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Df]),_:1}),m(r,{class:"slide"},{default:f(()=>[Gf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Rf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Hf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Vf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Wf]),_:1})]),_:1},8,["modules"])}var qf=R(Lf,[["render",Ff],["__scopeId","data-v-0a2ce994"]]),Yf=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"}));const Xf=G({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,Xe]}}}),Uf=g("Slide 1"),Kf=g("Slide 2"),Zf=g("Slide 3"),Jf=g("Slide 4"),Qf=g("Slide 5"),em=g("Slide 6"),sm=g("Slide 7"),tm=g("Slide 8");function im(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Uf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Kf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Jf]),_:1}),m(r,{class:"slide"},{default:f(()=>[Qf]),_:1}),m(r,{class:"slide"},{default:f(()=>[em]),_:1}),m(r,{class:"slide"},{default:f(()=>[sm]),_:1}),m(r,{class:"slide"},{default:f(()=>[tm]),_:1})]),_:1},8,["modules"])}var rm=R(Xf,[["render",im],["__scopeId","data-v-30b8ef96"]]),nm=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"}));const lm=G({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Yr]}}}),am=g("Slide 1"),om=g("Slide 2"),dm=g("Slide 3"),pm=g("Slide 4"),cm=g("Slide 5"),um=g("Slide 6"),fm=g("Slide 7"),mm=g("Slide 8");function hm(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[am]),_:1}),m(r,{class:"slide"},{default:f(()=>[om]),_:1}),m(r,{class:"slide"},{default:f(()=>[dm]),_:1}),m(r,{class:"slide"},{default:f(()=>[pm]),_:1}),m(r,{class:"slide"},{default:f(()=>[cm]),_:1}),m(r,{class:"slide"},{default:f(()=>[um]),_:1}),m(r,{class:"slide"},{default:f(()=>[fm]),_:1}),m(r,{class:"slide"},{default:f(()=>[mm]),_:1})]),_:1},8,["modules"])}var wm=R(lm,[["render",hm],["__scopeId","data-v-874170f8"]]),gm=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"}));const _m=G({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=Ye([1,2,3,4,5]);return{modules:[X,ie],slides:s,appendSlide:()=>s.push(s.length+1),prependSlide:()=>s.unshift(s[0]-1),popSlide:()=>s.pop(),shiftSlide:()=>s.shift()}}}),vm={class:"dynamic-example"},Sm={class:"toolbar"};function bm(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",vm,[$("div",Sm,[$("button",{onClick:e[0]||(e[0]=(...d)=>s.prependSlide&&s.prependSlide(...d))},"Prepend slide"),$("button",{onClick:e[1]||(e[1]=(...d)=>s.appendSlide&&s.appendSlide(...d))},"Append slide"),$("button",{onClick:e[2]||(e[2]=(...d)=>s.popSlide&&s.popSlide(...d))},"Pop slide"),$("button",{onClick:e[3]||(e[3]=(...d)=>s.shiftSlide&&s.shiftSlide(...d))},"Shift slide")]),m(a,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:s.modules},{default:f(()=>[(O(!0),W(oe,null,me(s.slides,d=>(O(),V(r,{key:d,class:"slide"},{default:f(()=>[g(" Slide "+te(d),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}var ym=R(_m,[["render",bm],["__scopeId","data-v-0e6b8991"]]),$m=Object.freeze(Object.defineProperty({__proto__:null,default:ym},Symbol.toStringTag,{value:"Module"}));const xm=G({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue",components:{Swiper:F,SwiperSlide:q},setup(){const s=ee();return{modules:[ie,Xr],setThumbsSwiper:t=>{s.value=t},thumbsSwiper:s}}}),Cm={class:"thumb-example"},Em=["src"],Tm=["src"];function km(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W("div",Cm,[m(a,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,"space-between":10,navigation:!0,thumbs:{swiper:s.thumbsSwiper}},{default:f(()=>[(O(),W(oe,null,me(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[$("img",{src:`/images/example/${d}.jpg`},null,8,Em)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),m(a,{class:"thumbs-swiper",modules:s.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:s.setThumbsSwiper},{default:f(()=>[(O(),W(oe,null,me(8,d=>m(r,{class:"slide",key:d},{default:f(()=>[$("img",{src:`/images/example/${d}.jpg`},null,8,Tm)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}var Pm=R(xm,[["render",km],["__scopeId","data-v-265460a3"]]),Mm=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"}));const zm=G({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie,Fr]}}}),Im={class:"swiper-zoom-container"},Om=["src"];function Am(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(O(),W(oe,null,me(8,d=>m(r,{key:d,class:"slide"},{default:f(()=>[$("div",Im,[$("img",{src:`/images/example/${d}.jpg`},null,8,Om)])]),_:2},1024)),64))]),_:1},8,["modules"])}var jm=R(zm,[["render",Am],["__scopeId","data-v-6a92bcfc"]]),Lm=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"}));const Nm=G({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[qr,X,ie]}}}),Bm=s=>(ne("data-v-69b43b5a"),s=s(),le(),s),Dm=["data-src"],Gm=Bm(()=>$("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function Rm(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[(O(),W(oe,null,me(8,d=>m(r,{key:d,class:"slide"},{default:f(()=>[$("img",{"data-src":`/images/example/${d}.jpg`,class:"swiper-lazy"},null,8,Dm),Gm]),_:2},1024)),64))]),_:1},8,["modules"])}var Hm=R(Nm,[["render",Rm],["__scopeId","data-v-69b43b5a"]]),Vm=Object.freeze(Object.defineProperty({__proto__:null,default:Hm},Symbol.toStringTag,{value:"Module"}));const Wm=G({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[Wr,X,ie]}}}),ge=s=>(ne("data-v-163db58b"),s=s(),le(),s),Fm=ge(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),qm=ge(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Ym=ge(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Xm=ge(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),Um=ge(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Km=ge(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Zm=ge(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),Jm=ge(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Qm=ge(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function eh(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:s.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":f(()=>[$("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:qe({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Fm,qm,Ym]),_:1}),m(r,{class:"slide"},{default:f(()=>[Xm,Um,Km]),_:1}),m(r,{class:"slide"},{default:f(()=>[Zm,Jm,Qm]),_:1})]),_:1},8,["modules"])}var sh=R(Wm,[["render",eh],["__scopeId","data-v-163db58b"]]),th=Object.freeze(Object.defineProperty({__proto__:null,default:sh},Symbol.toStringTag,{value:"Module"}));const ih=G({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),rh=g("Slide 1"),nh=g("Slide 2"),lh=g("Slide 3"),ah=g("Slide 4"),oh=g("Slide 5"),dh=g("Slide 6"),ph=g("Slide 7"),ch=g("Slide 8");function uh(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[rh]),_:1}),m(r,{class:"slide"},{default:f(()=>[nh]),_:1}),m(r,{class:"slide"},{default:f(()=>[lh]),_:1}),m(r,{class:"slide"},{default:f(()=>[ah]),_:1}),m(r,{class:"slide"},{default:f(()=>[oh]),_:1}),m(r,{class:"slide"},{default:f(()=>[dh]),_:1}),m(r,{class:"slide"},{default:f(()=>[ph]),_:1}),m(r,{class:"slide"},{default:f(()=>[ch]),_:1})]),_:1},8,["modules"])}var fh=R(ih,[["render",uh],["__scopeId","data-v-ea6c211a"]]),mh=Object.freeze(Object.defineProperty({__proto__:null,default:fh},Symbol.toStringTag,{value:"Module"}));const hh=G({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X]}}}),wh=s=>(ne("data-v-57e2a420"),s=s(),le(),s),gh=wh(()=>$("div",{class:"tip"},"\u2192 Resize the browser window \u2190",-1)),_h=g("Slide 1"),vh=g("Slide 2"),Sh=g("Slide 3"),bh=g("Slide 4"),yh=g("Slide 5"),$h=g("Slide 6"),xh=g("Slide 7"),Ch=g("Slide 8"),Eh=g("Slide 9"),Th=g("Slide 10");function kh(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W(oe,null,[gh,m(a,{class:"swiper",modules:s.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{"640":{slidesPerView:2,spaceBetween:20},"768":{slidesPerView:4,spaceBetween:40},"1024":{slidesPerView:5,spaceBetween:50}}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[_h]),_:1}),m(r,{class:"slide"},{default:f(()=>[vh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Sh]),_:1}),m(r,{class:"slide"},{default:f(()=>[bh]),_:1}),m(r,{class:"slide"},{default:f(()=>[yh]),_:1}),m(r,{class:"slide"},{default:f(()=>[$h]),_:1}),m(r,{class:"slide"},{default:f(()=>[xh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ch]),_:1}),m(r,{class:"slide"},{default:f(()=>[Eh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Th]),_:1})]),_:1},8,["modules"])],64)}var Ph=R(hh,[["render",kh],["__scopeId","data-v-57e2a420"]]),Mh=Object.freeze(Object.defineProperty({__proto__:null,default:Ph},Symbol.toStringTag,{value:"Module"}));const zh=G({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue",components:{Swiper:F,SwiperSlide:q},setup(){return{modules:[X,ie]}}}),Ih=g("Slide 1"),Oh=g("Slide 2"),Ah=g("Slide 3"),jh=g("Slide 4"),Lh=g("Slide 5"),Nh=g("Slide 6"),Bh=g("Slide 7"),Dh=g("Slide 8");function Gh(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[Ih]),_:1}),m(r,{class:"slide"},{default:f(()=>[Oh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Ah]),_:1}),m(r,{class:"slide"},{default:f(()=>[jh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Lh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Nh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Bh]),_:1}),m(r,{class:"slide"},{default:f(()=>[Dh]),_:1})]),_:1},8,["modules"])}var Rh=R(zh,[["render",Gh],["__scopeId","data-v-1a9a2aa4"]]),Hh=Object.freeze(Object.defineProperty({__proto__:null,default:Rh},Symbol.toStringTag,{value:"Module"}));const Vh=G({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;const e=n=>{s=n},t=ee(!1);return{menuOpened:t,toggleMenu:()=>{t.value?s==null||s.slideNext():s==null||s.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{t.value=(s==null?void 0:s.activeIndex)===0}}}}),ss=s=>(ne("data-v-383a6c0e"),s=s(),le(),s),Wh=g("Menu slide"),Fh=ss(()=>$("div",{class:"bar"},null,-1)),qh=ss(()=>$("div",{class:"bar"},null,-1)),Yh=ss(()=>$("div",{class:"bar"},null,-1)),Xh=[Fh,qh,Yh],Uh=ss(()=>$("div",null,"Content slide",-1));function Kh(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:s.setSwiperRef,onSlideChange:s.handleSlideChange},{default:f(()=>[m(r,{class:"menu"},{default:f(()=>[Wh]),_:1}),m(r,{class:"content"},{default:f(()=>[$("div",{class:Oe(["menu-button",{opened:s.menuOpened}]),onClick:e[0]||(e[0]=(...d)=>s.toggleMenu&&s.toggleMenu(...d))},Xh,2),Uh]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}var Zh=R(Vh,[["render",Kh],["__scopeId","data-v-383a6c0e"]]),Jh=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"}));const Qh=G({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;const e=a=>{s=a},t=a=>{s==null||s.slideTo(a-1,0)},i=Ye(Array.from({length:500}).map((a,d)=>d+1));let l=1;return{modules:[X,ie,Vr],setSwiperRef:e,slides:i,slideTo:t,append:()=>{i.push(i.length)},prepend:()=>{i.unshift(l-2,l-1),l-=2,s==null||s.slideTo(s.activeIndex+2,0)}}}}),ew={class:"toolbar"};function sw(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),W(oe,null,[$("div",ew,[$("button",{onClick:e[0]||(e[0]=d=>s.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),$("button",{onClick:e[1]||(e[1]=d=>s.slideTo(1)),class:"prepend-slide"},"Slide 1"),$("button",{onClick:e[2]||(e[2]=d=>s.slideTo(250)),class:"slide-250"},"Slide 250"),$("button",{onClick:e[3]||(e[3]=d=>s.slideTo(500)),class:"slide-500"},"Slide 500"),$("button",{onClick:e[4]||(e[4]=d=>s.append()),class:"append-slides"},"Append Slide")]),m(a,{class:"swiper",modules:s.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:s.setSwiperRef},{default:f(()=>[(O(!0),W(oe,null,me(s.slides,(d,u)=>(O(),V(r,{key:u,"virtual-index":u,class:"slide"},{default:f(()=>[g(" Slide "+te(d),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}var tw=R(Qh,[["render",sw],["__scopeId","data-v-03f46738"]]),iw=Object.freeze(Object.defineProperty({__proto__:null,default:tw},Symbol.toStringTag,{value:"Module"}));const rw=G({name:"swiper-example-change-direction",title:"Change direction",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue",components:{Swiper:F,SwiperSlide:q},setup(){let s=null;return{modules:[ie],setSwiperRef:i=>{s=i},handleResize:()=>{s==null||s.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}}),nw=g("Slide 1"),lw=g("Slide 2"),aw=g("Slide 3"),ow=g("Slide 4"),dw=g("Slide 5"),pw=g("Slide 6"),cw=g("Slide 7"),uw=g("Slide 8");function fw(s,e,t,i,l,n){const r=z("swiper-slide"),a=z("swiper");return O(),V(a,{class:"swiper",modules:s.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:s.setSwiperRef,onResize:s.handleResize},{default:f(()=>[m(r,{class:"slide"},{default:f(()=>[nw]),_:1}),m(r,{class:"slide"},{default:f(()=>[lw]),_:1}),m(r,{class:"slide"},{default:f(()=>[aw]),_:1}),m(r,{class:"slide"},{default:f(()=>[ow]),_:1}),m(r,{class:"slide"},{default:f(()=>[dw]),_:1}),m(r,{class:"slide"},{default:f(()=>[pw]),_:1}),m(r,{class:"slide"},{default:f(()=>[cw]),_:1}),m(r,{class:"slide"},{default:f(()=>[uw]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}var mw=R(rw,[["render",fw],["__scopeId","data-v-f3b6458a"]]),hw=Object.freeze(Object.defineProperty({__proto__:null,default:mw},Symbol.toStringTag,{value:"Module"}));const Ls={"./01-advance.vue":ma,"./02-default.vue":Ea,"./03-navigation.vue":Ba,"./04-pagination.vue":Ka,"./05-pagination-dynamic.vue":oo,"./06-pagination-progress.vue":bo,"./07-pagination-fraction.vue":Oo,"./08-pagination-custom.vue":Fo,"./09-scrollbar.vue":id,"./10-vertical.vue":hd,"./11-space-between.vue":Td,"./12-slides-per-view.vue":Dd,"./13-slides-per-view-auto.vue":Zd,"./14-centered.vue":dp,"./15-centered-auto.vue":bp,"./16-freemode.vue":Op,"./17-scroll-container.vue":fc,"./18-slides-per-column.vue":Tc,"./19-nested.vue":Dc,"./20-grab-cursor.vue":Zc,"./21-infinite-loop.vue":du,"./22-infinite-loop-with-slides-per-group.vue":bu,"./23-slides-per-group-skip.vue":Iu,"./24-effect-fade.vue":Ru,"./25-effect-coverflow.vue":sf,"./26-effect-cube.vue":cf,"./27-effect-flip.vue":yf,"./28-effect-creative.vue":jf,"./29-keyboard-control.vue":Yf,"./30-mousewheel-control.vue":nm,"./31-autoplay.vue":gm,"./32-dynamic-slides.vue":$m,"./33-thumbs-gallery.vue":Mm,"./34-zoom.vue":Lm,"./35-lazy-load-images.vue":Vm,"./36-parallax.vue":th,"./37-rtl.vue":mh,"./38-responsive-breakpoints.vue":Mh,"./39-autoheight.vue":Hh,"./40-slideable-menu.vue":Jh,"./41-virtual-slides.vue":iw,"./42-change-direction.vue":hw},ww={"./01-advance.vue":`<template>\r
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
        <a class="link" href="https://swiperjs.com/" target="_blank">swiperjs.com</a>\r
        <i class="iconfont icon-link-external"></i>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <a\r
          class="link"\r
          href="https://github.com/nolimits4web/swiper/discussions"\r
          target="_blank"\r
        >\r
          discussions\r
        </a>\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
    <swiper-slide class="slide">\r
      <img src="/images/example/1.jpg" />\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <img src="/images/example/2.jpg" />\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <img src="/images/example/3.jpg" />\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <img src="/images/example/4.jpg" />\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <img src="/images/example/5.jpg" />\r
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
  @import '@/styles/init.scss';\r
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
      <swiper-slide class="slide">\r
        <img src="/images/example/1.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/2.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/3.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/4.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/5.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/6.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/7.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/8.jpg" />\r
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
  @import '@/styles/init.scss';\r
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
      <swiper-slide class="slide">\r
        <img src="/images/example/3.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/5.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/6.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/7.jpg" />\r
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
  @import '@/styles/init.scss';\r
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
      <swiper-slide class="slide">\r
        <img src="/images/example/1.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/2.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/3.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/4.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/5.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/6.jpg" />\r
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
  @import '@/styles/init.scss';\r
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
      <swiper-slide class="slide">\r
        <img src="/images/example/1.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/2.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/3.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/4.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/5.jpg" />\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <img src="/images/example/6.jpg" />\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
  @import '@/styles/init.scss';\r
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
`};var gw=Object.keys(Ls).map(s=>({component:Ls[s].default,raw:ww[s],language:"vue"}));const _w={class:"page"},vw={class:"swiper-example"},Sw=G({setup(s){const e=gt.VueAwesomeSwiper,t=gw.map(jt);return _t({title:xt(e),keywords:[Ct(e),"How to use Swiper on vue3?"].join(","),description:Et(e)}),(i,l)=>(O(),W("div",_w,[m(Sl,{repository:ue(e)},{actions:f(()=>[m(We,{icon:"doc",text:"Swiper API Document",href:"https://swiperjs.com/swiper-api"}),m(We,{icon:"doc",text:"Swiper Vue component",href:"https://swiperjs.com/vue"}),m(We,{icon:"doc",text:"Original Swiper Demos",href:"https://swiperjs.com/demos"}),m(We,{icon:"discussions",text:"Swiper discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:f(()=>[m(Wl,{examples:ue(t)},{component:f(n=>[$("div",vw,[(O(),V(At(n.component)))])]),_:1},8,["examples"])]),_:1},8,["repository"])]))}});var Ew=R(Sw,[["__scopeId","data-v-099fc573"]]);export{Ew as default};
