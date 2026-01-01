import{d as W,r as We,f as ke,j as x,a as L,c as se,s as i,z as r,e as y,t as pe,S as ts,k as l,p as _e,b as Se,x as G,m as le,F as te,n as Ze,q as ls,K as as,y as fe,B as os,P as ds}from"./index-CCOKqeRu.js";import{_ as V,u as ps}from"./_plugin-vue_export-helper-CM-WDk98.js";import{a as he,s as cs,e as ve,c as ue,b as es,d as $e,f as Ae,m as ae,h as ss,i as we,j as us,n as ms,k as Je,l as fs,o as Ye,p as Ie,q as be,r as Le,S as q,t as X,P as U,u as Ve,g as ws,V as hs,M as gs,H as vs}from"./index-DUKek6yJ.js";import{n as _s,g as Ss,a as bs,b as ys,c as xs,d as $s,e as ks}from"./navbar-DLTAu9NC.js";import{H as ze}from"./link-DTq6wR1n.js";import{H as Es}from"./examples-94udZIMW.js";function Cs(t){let{swiper:e,extendParams:v,on:h,emit:g}=t;v({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let _;const s=he();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const p=s.createElement("div");function d(c,m){const w=e.params.virtual;if(w.cache&&e.virtual.cache[m])return e.virtual.cache[m];let f;return w.renderSlide?(f=w.renderSlide.call(e,c,m),typeof f=="string"&&(p.innerHTML=f,f=p.children[0])):e.isElement?f=ue("swiper-slide"):f=ue("div",e.params.slideClass),f.setAttribute("data-swiper-slide-index",m),w.renderSlide||(f.innerHTML=c),w.cache&&(e.virtual.cache[m]=f),f}function u(c,m){const{slidesPerView:w,slidesPerGroup:f,centeredSlides:$,loop:b,initialSlide:P}=e.params;if(m&&!b&&P>0)return;const{addSlidesBefore:D,addSlidesAfter:Y}=e.params.virtual,{from:N,to:j,slides:C,slidesGrid:F,offset:B}=e.virtual;e.params.cssMode||e.updateActiveIndex();const E=e.activeIndex||0;let I;e.rtlTranslate?I="right":I=e.isHorizontal()?"left":"top";let M,z;$?(M=Math.floor(w/2)+f+Y,z=Math.floor(w/2)+f+D):(M=w+(f-1)+Y,z=(b?w:f)+D);let H=E-z,J=E+M;b||(H=Math.max(H,0),J=Math.min(J,C.length-1));let R=(e.slidesGrid[H]||0)-(e.slidesGrid[0]||0);b&&E>=z?(H-=z,$||(R+=e.slidesGrid[0])):b&&E<z&&(H=-z,$&&(R+=e.slidesGrid[0])),Object.assign(e.virtual,{from:H,to:J,offset:R,slidesGrid:e.slidesGrid,slidesBefore:z,slidesAfter:M});function K(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),g("virtualUpdate")}if(N===H&&j===J&&!c){e.slidesGrid!==F&&R!==B&&e.slides.forEach(O=>{O.style[I]=`${R-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),g("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:R,from:H,to:J,slides:function(){const Q=[];for(let ne=H;ne<=J;ne+=1)Q.push(C[ne]);return Q}()}),e.params.virtual.renderExternalUpdate?K():g("virtualUpdate");return}const re=[],k=[],T=O=>{let Q=O;return O<0?Q=C.length+O:Q>=C.length&&(Q=Q-C.length),Q};if(c)e.slides.filter(O=>O.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(O=>{O.remove()});else for(let O=N;O<=j;O+=1)if(O<H||O>J){const Q=T(O);e.slides.filter(ne=>ne.matches(`.${e.params.slideClass}[data-swiper-slide-index="${Q}"], swiper-slide[data-swiper-slide-index="${Q}"]`)).forEach(ne=>{ne.remove()})}const A=b?-C.length:0,ee=b?C.length*2:C.length;for(let O=A;O<ee;O+=1)if(O>=H&&O<=J){const Q=T(O);typeof j>"u"||c?k.push(Q):(O>j&&k.push(Q),O<N&&re.push(Q))}if(k.forEach(O=>{e.slidesEl.append(d(C[O],O))}),b)for(let O=re.length-1;O>=0;O-=1){const Q=re[O];e.slidesEl.prepend(d(C[Q],Q))}else re.sort((O,Q)=>Q-O),re.forEach(O=>{e.slidesEl.prepend(d(C[O],O))});ve(e.slidesEl,".swiper-slide, swiper-slide").forEach(O=>{O.style[I]=`${R-Math.abs(e.cssOverflowAdjustment())}px`}),K()}function o(c){if(typeof c=="object"&&"length"in c)for(let m=0;m<c.length;m+=1)c[m]&&e.virtual.slides.push(c[m]);else e.virtual.slides.push(c);u(!0)}function n(c){const m=e.activeIndex;let w=m+1,f=1;if(Array.isArray(c)){for(let $=0;$<c.length;$+=1)c[$]&&e.virtual.slides.unshift(c[$]);w=m+c.length,f=c.length}else e.virtual.slides.unshift(c);if(e.params.virtual.cache){const $=e.virtual.cache,b={};Object.keys($).forEach(P=>{const D=$[P],Y=D.getAttribute("data-swiper-slide-index");Y&&D.setAttribute("data-swiper-slide-index",parseInt(Y,10)+f),b[parseInt(P,10)+f]=D}),e.virtual.cache=b}u(!0),e.slideTo(w,0)}function a(c){if(typeof c>"u"||c===null)return;let m=e.activeIndex;if(Array.isArray(c))for(let w=c.length-1;w>=0;w-=1)e.params.virtual.cache&&(delete e.virtual.cache[c[w]],Object.keys(e.virtual.cache).forEach(f=>{f>c&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(c[w],1),c[w]<m&&(m-=1),m=Math.max(m,0);else e.params.virtual.cache&&(delete e.virtual.cache[c],Object.keys(e.virtual.cache).forEach(w=>{w>c&&(e.virtual.cache[w-1]=e.virtual.cache[w],e.virtual.cache[w-1].setAttribute("data-swiper-slide-index",w-1),delete e.virtual.cache[w])})),e.virtual.slides.splice(c,1),c<m&&(m-=1),m=Math.max(m,0);u(!0),e.slideTo(m,0)}function S(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),u(!0),e.slideTo(0,0)}h("beforeInit",()=>{if(!e.params.virtual.enabled)return;let c;if(typeof e.passedParams.virtual.slides>"u"){const m=[...e.slidesEl.children].filter(w=>w.matches(`.${e.params.slideClass}, swiper-slide`));m&&m.length&&(e.virtual.slides=[...m],c=!0,m.forEach((w,f)=>{w.setAttribute("data-swiper-slide-index",f),e.virtual.cache[f]=w,w.remove()}))}c||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,u(!1,!0)}),h("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(_),_=setTimeout(()=>{u()},100)):u())}),h("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&cs(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:o,prependSlide:n,removeSlide:a,removeAllSlides:S,update:u})}function rs(t){let{swiper:e,extendParams:v,on:h,emit:g}=t;const _=he(),s=es();e.keyboard={enabled:!1},v({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(o){if(!e.enabled)return;const{rtlTranslate:n}=e;let a=o;a.originalEvent&&(a=a.originalEvent);const S=a.keyCode||a.charCode,c=e.params.keyboard.pageUpDown,m=c&&S===33,w=c&&S===34,f=S===37,$=S===39,b=S===38,P=S===40;if(!e.allowSlideNext&&(e.isHorizontal()&&$||e.isVertical()&&P||w)||!e.allowSlidePrev&&(e.isHorizontal()&&f||e.isVertical()&&b||m))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)&&!(_.activeElement&&_.activeElement.nodeName&&(_.activeElement.nodeName.toLowerCase()==="input"||_.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(m||w||f||$||b||P)){let D=!1;if($e(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&$e(e.el,`.${e.params.slideActiveClass}`).length===0)return;const Y=e.el,N=Y.clientWidth,j=Y.clientHeight,C=s.innerWidth,F=s.innerHeight,B=Ae(Y);n&&(B.left-=Y.scrollLeft);const E=[[B.left,B.top],[B.left+N,B.top],[B.left,B.top+j],[B.left+N,B.top+j]];for(let I=0;I<E.length;I+=1){const M=E[I];if(M[0]>=0&&M[0]<=C&&M[1]>=0&&M[1]<=F){if(M[0]===0&&M[1]===0)continue;D=!0}}if(!D)return}e.isHorizontal()?((m||w||f||$)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((w||$)&&!n||(m||f)&&n)&&e.slideNext(),((m||f)&&!n||(w||$)&&n)&&e.slidePrev()):((m||w||b||P)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(w||P)&&e.slideNext(),(m||b)&&e.slidePrev()),g("keyPress",S)}}function d(){e.keyboard.enabled||(_.addEventListener("keydown",p),e.keyboard.enabled=!0)}function u(){e.keyboard.enabled&&(_.removeEventListener("keydown",p),e.keyboard.enabled=!1)}h("init",()=>{e.params.keyboard.enabled&&d()}),h("destroy",()=>{e.keyboard.enabled&&u()}),Object.assign(e.keyboard,{enable:d,disable:u})}function ie(t){let{swiper:e,extendParams:v,on:h,emit:g}=t;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function _(c){let m;return c&&typeof c=="string"&&e.isElement&&(m=e.el.querySelector(c),m)?m:(c&&(typeof c=="string"&&(m=[...document.querySelectorAll(c)]),e.params.uniqueNavElements&&typeof c=="string"&&m&&m.length>1&&e.el.querySelectorAll(c).length===1?m=e.el.querySelector(c):m&&m.length===1&&(m=m[0])),c&&!m?c:m)}function s(c,m){const w=e.params.navigation;c=ae(c),c.forEach(f=>{f&&(f.classList[m?"add":"remove"](...w.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=m),e.params.watchOverflow&&e.enabled&&f.classList[e.isLocked?"add":"remove"](w.lockClass))})}function p(){const{nextEl:c,prevEl:m}=e.navigation;if(e.params.loop){s(m,!1),s(c,!1);return}s(m,e.isBeginning&&!e.params.rewind),s(c,e.isEnd&&!e.params.rewind)}function d(c){c.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),g("navigationPrev"))}function u(c){c.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),g("navigationNext"))}function o(){const c=e.params.navigation;if(e.params.navigation=ss(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(c.nextEl||c.prevEl))return;let m=_(c.nextEl),w=_(c.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:w}),m=ae(m),w=ae(w);const f=($,b)=>{$&&$.addEventListener("click",b==="next"?u:d),!e.enabled&&$&&$.classList.add(...c.lockClass.split(" "))};m.forEach($=>f($,"next")),w.forEach($=>f($,"prev"))}function n(){let{nextEl:c,prevEl:m}=e.navigation;c=ae(c),m=ae(m);const w=(f,$)=>{f.removeEventListener("click",$==="next"?u:d),f.classList.remove(...e.params.navigation.disabledClass.split(" "))};c.forEach(f=>w(f,"next")),m.forEach(f=>w(f,"prev"))}h("init",()=>{e.params.navigation.enabled===!1?S():(o(),p())}),h("toEdge fromEdge lock unlock",()=>{p()}),h("destroy",()=>{n()}),h("enable disable",()=>{let{nextEl:c,prevEl:m}=e.navigation;if(c=ae(c),m=ae(m),e.enabled){p();return}[...c,...m].filter(w=>!!w).forEach(w=>w.classList.add(e.params.navigation.lockClass))}),h("click",(c,m)=>{let{nextEl:w,prevEl:f}=e.navigation;w=ae(w),f=ae(f);const $=m.target;let b=f.includes($)||w.includes($);if(e.isElement&&!b){const P=m.path||m.composedPath&&m.composedPath();P&&(b=P.find(D=>w.includes(D)||f.includes(D)))}if(e.params.navigation.hideOnClick&&!b){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===$||e.pagination.el.contains($)))return;let P;w.length?P=w[0].classList.contains(e.params.navigation.hiddenClass):f.length&&(P=f[0].classList.contains(e.params.navigation.hiddenClass)),g(P===!0?"navigationShow":"navigationHide"),[...w,...f].filter(D=>!!D).forEach(D=>D.classList.toggle(e.params.navigation.hiddenClass))}});const a=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),o(),p()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),n()};Object.assign(e.navigation,{enable:a,disable:S,update:p,init:o,destroy:n})}function qe(t){let{swiper:e,extendParams:v,on:h,emit:g}=t;const _=he();let s=!1,p=null,d=null,u,o,n,a;v({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function S(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E,rtlTranslate:I}=e,{dragEl:M,el:z}=E,H=e.params.scrollbar,J=e.params.loop?e.progressLoop:e.progress;let R=o,K=(n-o)*J;I?(K=-K,K>0?(R=o-K,K=0):-K+o>n&&(R=n+K)):K<0?(R=o+K,K=0):K+o>n&&(R=n-K),e.isHorizontal()?(M.style.transform=`translate3d(${K}px, 0, 0)`,M.style.width=`${R}px`):(M.style.transform=`translate3d(0px, ${K}px, 0)`,M.style.height=`${R}px`),H.hide&&(clearTimeout(p),z.style.opacity=1,p=setTimeout(()=>{z.style.opacity=0,z.style.transitionDuration="400ms"},1e3))}function c(E){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${E}ms`)}function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E}=e,{dragEl:I,el:M}=E;I.style.width="",I.style.height="",n=e.isHorizontal()?M.offsetWidth:M.offsetHeight,a=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?o=n*a:o=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?I.style.width=`${o}px`:I.style.height=`${o}px`,a>=1?M.style.display="none":M.style.display="",e.params.scrollbar.hide&&(M.style.opacity=0),e.params.watchOverflow&&e.enabled&&E.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function w(E){return e.isHorizontal()?E.clientX:E.clientY}function f(E){const{scrollbar:I,rtlTranslate:M}=e,{el:z}=I;let H;H=(w(E)-Ae(z)[e.isHorizontal()?"left":"top"]-(u!==null?u:o/2))/(n-o),H=Math.max(Math.min(H,1),0),M&&(H=1-H);const J=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*H;e.updateProgress(J),e.setTranslate(J),e.updateActiveIndex(),e.updateSlidesClasses()}function $(E){const I=e.params.scrollbar,{scrollbar:M,wrapperEl:z}=e,{el:H,dragEl:J}=M;s=!0,u=E.target===J?w(E)-E.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,E.preventDefault(),E.stopPropagation(),z.style.transitionDuration="100ms",J.style.transitionDuration="100ms",f(E),clearTimeout(d),H.style.transitionDuration="0ms",I.hide&&(H.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),g("scrollbarDragStart",E)}function b(E){const{scrollbar:I,wrapperEl:M}=e,{el:z,dragEl:H}=I;s&&(E.preventDefault&&E.cancelable?E.preventDefault():E.returnValue=!1,f(E),M.style.transitionDuration="0ms",z.style.transitionDuration="0ms",H.style.transitionDuration="0ms",g("scrollbarDragMove",E))}function P(E){const I=e.params.scrollbar,{scrollbar:M,wrapperEl:z}=e,{el:H}=M;s&&(s=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",z.style.transitionDuration=""),I.hide&&(clearTimeout(d),d=ms(()=>{H.style.opacity=0,H.style.transitionDuration="400ms"},1e3)),g("scrollbarDragEnd",E),I.snapOnRelease&&e.slideToClosest())}function D(E){const{scrollbar:I,params:M}=e,z=I.el;if(!z)return;const H=z,J=M.passiveListeners?{passive:!1,capture:!1}:!1,R=M.passiveListeners?{passive:!0,capture:!1}:!1;if(!H)return;const K=E==="on"?"addEventListener":"removeEventListener";H[K]("pointerdown",$,J),_[K]("pointermove",b,J),_[K]("pointerup",P,R)}function Y(){!e.params.scrollbar.el||!e.scrollbar.el||D("on")}function N(){!e.params.scrollbar.el||!e.scrollbar.el||D("off")}function j(){const{scrollbar:E,el:I}=e;e.params.scrollbar=ss(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const M=e.params.scrollbar;if(!M.el)return;let z;if(typeof M.el=="string"&&e.isElement&&(z=e.el.querySelector(M.el)),!z&&typeof M.el=="string"){if(z=_.querySelectorAll(M.el),!z.length)return}else z||(z=M.el);e.params.uniqueNavElements&&typeof M.el=="string"&&z.length>1&&I.querySelectorAll(M.el).length===1&&(z=I.querySelector(M.el)),z.length>0&&(z=z[0]),z.classList.add(e.isHorizontal()?M.horizontalClass:M.verticalClass);let H;z&&(H=z.querySelector(us(e.params.scrollbar.dragClass)),H||(H=ue("div",e.params.scrollbar.dragClass),z.append(H))),Object.assign(E,{el:z,dragEl:H}),M.draggable&&Y(),z&&z.classList[e.enabled?"remove":"add"](...we(e.params.scrollbar.lockClass))}function C(){const E=e.params.scrollbar,I=e.scrollbar.el;I&&I.classList.remove(...we(e.isHorizontal()?E.horizontalClass:E.verticalClass)),N()}h("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const E=e.params.scrollbar;let{el:I}=e.scrollbar;I=ae(I),I.forEach(M=>{M.classList.remove(E.horizontalClass,E.verticalClass),M.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass)})}),h("init",()=>{e.params.scrollbar.enabled===!1?B():(j(),m(),S())}),h("update resize observerUpdate lock unlock changeDirection",()=>{m()}),h("setTranslate",()=>{S()}),h("setTransition",(E,I)=>{c(I)}),h("enable disable",()=>{const{el:E}=e.scrollbar;E&&E.classList[e.enabled?"remove":"add"](...we(e.params.scrollbar.lockClass))}),h("destroy",()=>{C()});const F=()=>{e.el.classList.remove(...we(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...we(e.params.scrollbar.scrollbarDisabledClass)),j(),m(),S()},B=()=>{e.el.classList.add(...we(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...we(e.params.scrollbar.scrollbarDisabledClass)),C()};Object.assign(e.scrollbar,{enable:F,disable:B,updateSize:m,setTranslate:S,init:j,destroy:C})}function Ms(t){let{swiper:e,extendParams:v,on:h}=t;v({parallax:{enabled:!1}});const g="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",_=(d,u)=>{const{rtl:o}=e,n=o?-1:1,a=d.getAttribute("data-swiper-parallax")||"0";let S=d.getAttribute("data-swiper-parallax-x"),c=d.getAttribute("data-swiper-parallax-y");const m=d.getAttribute("data-swiper-parallax-scale"),w=d.getAttribute("data-swiper-parallax-opacity"),f=d.getAttribute("data-swiper-parallax-rotate");if(S||c?(S=S||"0",c=c||"0"):e.isHorizontal()?(S=a,c="0"):(c=a,S="0"),S.indexOf("%")>=0?S=`${parseInt(S,10)*u*n}%`:S=`${S*u*n}px`,c.indexOf("%")>=0?c=`${parseInt(c,10)*u}%`:c=`${c*u}px`,typeof w<"u"&&w!==null){const b=w-(w-1)*(1-Math.abs(u));d.style.opacity=b}let $=`translate3d(${S}, ${c}, 0px)`;if(typeof m<"u"&&m!==null){const b=m-(m-1)*(1-Math.abs(u));$+=` scale(${b})`}if(f&&typeof f<"u"&&f!==null){const b=f*u*-1;$+=` rotate(${b}deg)`}d.style.transform=$},s=()=>{const{el:d,slides:u,progress:o,snapGrid:n,isElement:a}=e,S=ve(d,g);e.isElement&&S.push(...ve(e.hostEl,g)),S.forEach(c=>{_(c,o)}),u.forEach((c,m)=>{let w=c.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(w+=Math.ceil(m/2)-o*(n.length-1)),w=Math.min(Math.max(w,-1),1),c.querySelectorAll(`${g}, [data-swiper-parallax-rotate]`).forEach(f=>{_(f,w)})})},p=function(d){d===void 0&&(d=e.params.speed);const{el:u,hostEl:o}=e,n=[...u.querySelectorAll(g)];e.isElement&&n.push(...o.querySelectorAll(g)),n.forEach(a=>{let S=parseInt(a.getAttribute("data-swiper-parallax-duration"),10)||d;d===0&&(S=0),a.style.transitionDuration=`${S}ms`})};h("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),h("init",()=>{e.params.parallax.enabled&&s()}),h("setTranslate",()=>{e.params.parallax.enabled&&s()}),h("setTransition",(d,u)=>{e.params.parallax.enabled&&p(u)})}function Ts(t){let{swiper:e,extendParams:v,on:h,emit:g}=t;const _=es();v({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let s=1,p=!1,d,u;const o=[],n={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},a={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},S={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let c=1;Object.defineProperty(e.zoom,"scale",{get(){return c},set(k){if(c!==k){const T=n.imageEl,A=n.slideEl;g("zoomChange",k,T,A)}c=k}});function m(){if(o.length<2)return 1;const k=o[0].pageX,T=o[0].pageY,A=o[1].pageX,ee=o[1].pageY;return Math.sqrt((A-k)**2+(ee-T)**2)}function w(){const k=e.params.zoom,T=n.imageWrapEl.getAttribute("data-swiper-zoom")||k.maxRatio;if(k.limitToOriginalSize&&n.imageEl&&n.imageEl.naturalWidth){const A=n.imageEl.naturalWidth/n.imageEl.offsetWidth;return Math.min(A,T)}return T}function f(){if(o.length<2)return{x:null,y:null};const k=n.imageEl.getBoundingClientRect();return[(o[0].pageX+(o[1].pageX-o[0].pageX)/2-k.x-_.scrollX)/s,(o[0].pageY+(o[1].pageY-o[0].pageY)/2-k.y-_.scrollY)/s]}function $(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function b(k){const T=$();return!!(k.target.matches(T)||e.slides.filter(A=>A.contains(k.target)).length>0)}function P(k){const T=`.${e.params.zoom.containerClass}`;return!!(k.target.matches(T)||[...e.hostEl.querySelectorAll(T)].filter(A=>A.contains(k.target)).length>0)}function D(k){if(k.pointerType==="mouse"&&o.splice(0,o.length),!b(k))return;const T=e.params.zoom;if(d=!1,u=!1,o.push(k),!(o.length<2)){if(d=!0,n.scaleStart=m(),!n.slideEl){n.slideEl=k.target.closest(`.${e.params.slideClass}, swiper-slide`),n.slideEl||(n.slideEl=e.slides[e.activeIndex]);let A=n.slideEl.querySelector(`.${T.containerClass}`);if(A&&(A=A.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=A,A?n.imageWrapEl=$e(n.imageEl,`.${T.containerClass}`)[0]:n.imageWrapEl=void 0,!n.imageWrapEl){n.imageEl=void 0;return}n.maxRatio=w()}if(n.imageEl){const[A,ee]=f();n.originX=A,n.originY=ee,n.imageEl.style.transitionDuration="0ms"}p=!0}}function Y(k){if(!b(k))return;const T=e.params.zoom,A=e.zoom,ee=o.findIndex(O=>O.pointerId===k.pointerId);ee>=0&&(o[ee]=k),!(o.length<2)&&(u=!0,n.scaleMove=m(),n.imageEl&&(A.scale=n.scaleMove/n.scaleStart*s,A.scale>n.maxRatio&&(A.scale=n.maxRatio-1+(A.scale-n.maxRatio+1)**.5),A.scale<T.minRatio&&(A.scale=T.minRatio+1-(T.minRatio-A.scale+1)**.5),n.imageEl.style.transform=`translate3d(0,0,0) scale(${A.scale})`))}function N(k){if(!b(k)||k.pointerType==="mouse"&&k.type==="pointerout")return;const T=e.params.zoom,A=e.zoom,ee=o.findIndex(O=>O.pointerId===k.pointerId);ee>=0&&o.splice(ee,1),!(!d||!u)&&(d=!1,u=!1,n.imageEl&&(A.scale=Math.max(Math.min(A.scale,n.maxRatio),T.minRatio),n.imageEl.style.transitionDuration=`${e.params.speed}ms`,n.imageEl.style.transform=`translate3d(0,0,0) scale(${A.scale})`,s=A.scale,p=!1,A.scale>1&&n.slideEl?n.slideEl.classList.add(`${T.zoomedSlideClass}`):A.scale<=1&&n.slideEl&&n.slideEl.classList.remove(`${T.zoomedSlideClass}`),A.scale===1&&(n.originX=0,n.originY=0,n.slideEl=void 0)))}let j;function C(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function F(){clearTimeout(j),e.touchEventsData.preventTouchMoveFromPointerMove=!0,j=setTimeout(()=>{C()})}function B(k){const T=e.device;if(!n.imageEl||a.isTouched)return;T.android&&k.cancelable&&k.preventDefault(),a.isTouched=!0;const A=o.length>0?o[0]:k;a.touchesStart.x=A.pageX,a.touchesStart.y=A.pageY}function E(k){if(!b(k)||!P(k))return;const T=e.zoom;if(!n.imageEl||!a.isTouched||!n.slideEl)return;a.isMoved||(a.width=n.imageEl.offsetWidth||n.imageEl.clientWidth,a.height=n.imageEl.offsetHeight||n.imageEl.clientHeight,a.startX=Je(n.imageWrapEl,"x")||0,a.startY=Je(n.imageWrapEl,"y")||0,n.slideWidth=n.slideEl.offsetWidth,n.slideHeight=n.slideEl.offsetHeight,n.imageWrapEl.style.transitionDuration="0ms");const A=a.width*T.scale,ee=a.height*T.scale;if(a.minX=Math.min(n.slideWidth/2-A/2,0),a.maxX=-a.minX,a.minY=Math.min(n.slideHeight/2-ee/2,0),a.maxY=-a.minY,a.touchesCurrent.x=o.length>0?o[0].pageX:k.pageX,a.touchesCurrent.y=o.length>0?o[0].pageY:k.pageY,Math.max(Math.abs(a.touchesCurrent.x-a.touchesStart.x),Math.abs(a.touchesCurrent.y-a.touchesStart.y))>5&&(e.allowClick=!1),!a.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(a.minX)===Math.floor(a.startX)&&a.touchesCurrent.x<a.touchesStart.x||Math.floor(a.maxX)===Math.floor(a.startX)&&a.touchesCurrent.x>a.touchesStart.x)){a.isTouched=!1,C();return}if(!e.isHorizontal()&&(Math.floor(a.minY)===Math.floor(a.startY)&&a.touchesCurrent.y<a.touchesStart.y||Math.floor(a.maxY)===Math.floor(a.startY)&&a.touchesCurrent.y>a.touchesStart.y)){a.isTouched=!1,C();return}}k.cancelable&&k.preventDefault(),k.stopPropagation(),F(),a.isMoved=!0;const Q=(T.scale-s)/(n.maxRatio-e.params.zoom.minRatio),{originX:ne,originY:ge}=n;a.currentX=a.touchesCurrent.x-a.touchesStart.x+a.startX+Q*(a.width-ne*2),a.currentY=a.touchesCurrent.y-a.touchesStart.y+a.startY+Q*(a.height-ge*2),a.currentX<a.minX&&(a.currentX=a.minX+1-(a.minX-a.currentX+1)**.8),a.currentX>a.maxX&&(a.currentX=a.maxX-1+(a.currentX-a.maxX+1)**.8),a.currentY<a.minY&&(a.currentY=a.minY+1-(a.minY-a.currentY+1)**.8),a.currentY>a.maxY&&(a.currentY=a.maxY-1+(a.currentY-a.maxY+1)**.8),S.prevPositionX||(S.prevPositionX=a.touchesCurrent.x),S.prevPositionY||(S.prevPositionY=a.touchesCurrent.y),S.prevTime||(S.prevTime=Date.now()),S.x=(a.touchesCurrent.x-S.prevPositionX)/(Date.now()-S.prevTime)/2,S.y=(a.touchesCurrent.y-S.prevPositionY)/(Date.now()-S.prevTime)/2,Math.abs(a.touchesCurrent.x-S.prevPositionX)<2&&(S.x=0),Math.abs(a.touchesCurrent.y-S.prevPositionY)<2&&(S.y=0),S.prevPositionX=a.touchesCurrent.x,S.prevPositionY=a.touchesCurrent.y,S.prevTime=Date.now(),n.imageWrapEl.style.transform=`translate3d(${a.currentX}px, ${a.currentY}px,0)`}function I(){const k=e.zoom;if(!n.imageEl)return;if(!a.isTouched||!a.isMoved){a.isTouched=!1,a.isMoved=!1;return}a.isTouched=!1,a.isMoved=!1;let T=300,A=300;const ee=S.x*T,O=a.currentX+ee,Q=S.y*A,ne=a.currentY+Q;S.x!==0&&(T=Math.abs((O-a.currentX)/S.x)),S.y!==0&&(A=Math.abs((ne-a.currentY)/S.y));const ge=Math.max(T,A);a.currentX=O,a.currentY=ne;const Me=a.width*k.scale,de=a.height*k.scale;a.minX=Math.min(n.slideWidth/2-Me/2,0),a.maxX=-a.minX,a.minY=Math.min(n.slideHeight/2-de/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),n.imageWrapEl.style.transitionDuration=`${ge}ms`,n.imageWrapEl.style.transform=`translate3d(${a.currentX}px, ${a.currentY}px,0)`}function M(){const k=e.zoom;n.slideEl&&e.activeIndex!==e.slides.indexOf(n.slideEl)&&(n.imageEl&&(n.imageEl.style.transform="translate3d(0,0,0) scale(1)"),n.imageWrapEl&&(n.imageWrapEl.style.transform="translate3d(0,0,0)"),n.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),k.scale=1,s=1,n.slideEl=void 0,n.imageEl=void 0,n.imageWrapEl=void 0,n.originX=0,n.originY=0)}function z(k){const T=e.zoom,A=e.params.zoom;if(!n.slideEl){k&&k.target&&(n.slideEl=k.target.closest(`.${e.params.slideClass}, swiper-slide`)),n.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=ve(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex]);let xe=n.slideEl.querySelector(`.${A.containerClass}`);xe&&(xe=xe.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=xe,xe?n.imageWrapEl=$e(n.imageEl,`.${A.containerClass}`)[0]:n.imageWrapEl=void 0}if(!n.imageEl||!n.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),n.slideEl.classList.add(`${A.zoomedSlideClass}`);let ee,O,Q,ne,ge,Me,de,me,Be,Fe,Ge,Ue,Te,Pe,je,Re,Oe,He;typeof a.touchesStart.x>"u"&&k?(ee=k.pageX,O=k.pageY):(ee=a.touchesStart.x,O=a.touchesStart.y);const ye=typeof k=="number"?k:null;s===1&&ye&&(ee=void 0,O=void 0);const Ke=w();T.scale=ye||Ke,s=ye||Ke,k&&!(s===1&&ye)?(Oe=n.slideEl.offsetWidth,He=n.slideEl.offsetHeight,Q=Ae(n.slideEl).left+_.scrollX,ne=Ae(n.slideEl).top+_.scrollY,ge=Q+Oe/2-ee,Me=ne+He/2-O,Be=n.imageEl.offsetWidth||n.imageEl.clientWidth,Fe=n.imageEl.offsetHeight||n.imageEl.clientHeight,Ge=Be*T.scale,Ue=Fe*T.scale,Te=Math.min(Oe/2-Ge/2,0),Pe=Math.min(He/2-Ue/2,0),je=-Te,Re=-Pe,de=ge*T.scale,me=Me*T.scale,de<Te&&(de=Te),de>je&&(de=je),me<Pe&&(me=Pe),me>Re&&(me=Re)):(de=0,me=0),ye&&T.scale===1&&(n.originX=0,n.originY=0),n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform=`translate3d(${de}px, ${me}px,0)`,n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform=`translate3d(0,0,0) scale(${T.scale})`}function H(){const k=e.zoom,T=e.params.zoom;if(!n.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=ve(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex];let A=n.slideEl.querySelector(`.${T.containerClass}`);A&&(A=A.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=A,A?n.imageWrapEl=$e(n.imageEl,`.${T.containerClass}`)[0]:n.imageWrapEl=void 0}!n.imageEl||!n.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),k.scale=1,s=1,n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform="translate3d(0,0,0)",n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform="translate3d(0,0,0) scale(1)",n.slideEl.classList.remove(`${T.zoomedSlideClass}`),n.slideEl=void 0,n.originX=0,n.originY=0)}function J(k){const T=e.zoom;T.scale&&T.scale!==1?H():z(k)}function R(){const k=e.params.passiveListeners?{passive:!0,capture:!1}:!1,T=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:k,activeListenerWithCapture:T}}function K(){const k=e.zoom;if(k.enabled)return;k.enabled=!0;const{passiveListener:T,activeListenerWithCapture:A}=R();e.wrapperEl.addEventListener("pointerdown",D,T),e.wrapperEl.addEventListener("pointermove",Y,A),["pointerup","pointercancel","pointerout"].forEach(ee=>{e.wrapperEl.addEventListener(ee,N,T)}),e.wrapperEl.addEventListener("pointermove",E,A)}function re(){const k=e.zoom;if(!k.enabled)return;k.enabled=!1;const{passiveListener:T,activeListenerWithCapture:A}=R();e.wrapperEl.removeEventListener("pointerdown",D,T),e.wrapperEl.removeEventListener("pointermove",Y,A),["pointerup","pointercancel","pointerout"].forEach(ee=>{e.wrapperEl.removeEventListener(ee,N,T)}),e.wrapperEl.removeEventListener("pointermove",E,A)}h("init",()=>{e.params.zoom.enabled&&K()}),h("destroy",()=>{re()}),h("touchStart",(k,T)=>{e.zoom.enabled&&B(T)}),h("touchEnd",(k,T)=>{e.zoom.enabled&&I()}),h("doubleTap",(k,T)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&J(T)}),h("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&M()}),h("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&M()}),Object.assign(e.zoom,{enable:K,disable:re,in:z,out:H,toggle:J})}function Ps(t){let{swiper:e,extendParams:v,on:h,emit:g,params:_}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},v({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,p,d=_&&_.autoplay?_.autoplay.delay:3e3,u=_&&_.autoplay?_.autoplay.delay:3e3,o,n=new Date().getTime(),a,S,c,m,w,f,$;function b(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",b),!($||R.detail&&R.detail.bySwiperTouchMove)&&F())}const P=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?a=!0:a&&(u=o,a=!1);const R=e.autoplay.paused?o:n+u-new Date().getTime();e.autoplay.timeLeft=R,g("autoplayTimeLeft",R,R/d),p=requestAnimationFrame(()=>{P()})},D=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.filter(re=>re.classList.contains("swiper-slide-active"))[0]:R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},Y=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),P();let K=typeof R>"u"?e.params.autoplay.delay:R;d=e.params.autoplay.delay,u=e.params.autoplay.delay;const re=D();!Number.isNaN(re)&&re>0&&typeof R>"u"&&(K=re,d=re,u=re),o=K;const k=e.params.speed,T=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(k,!0,!0),g("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,k,!0,!0),g("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(k,!0,!0),g("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,k,!0,!0),g("autoplay")),e.params.cssMode&&(n=new Date().getTime(),requestAnimationFrame(()=>{Y()})))};return K>0?(clearTimeout(s),s=setTimeout(()=>{T()},K)):requestAnimationFrame(()=>{T()}),K},N=()=>{n=new Date().getTime(),e.autoplay.running=!0,Y(),g("autoplayStart")},j=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(p),g("autoplayStop")},C=(R,K)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),R||(f=!0);const re=()=>{g("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",b):F()};if(e.autoplay.paused=!0,K){w&&(o=e.params.autoplay.delay),w=!1,re();return}o=(o||e.params.autoplay.delay)-(new Date().getTime()-n),!(e.isEnd&&o<0&&!e.params.loop)&&(o<0&&(o=0),re())},F=()=>{e.isEnd&&o<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(n=new Date().getTime(),f?(f=!1,Y(o)):Y(),e.autoplay.paused=!1,g("autoplayResume"))},B=()=>{if(e.destroyed||!e.autoplay.running)return;const R=he();R.visibilityState==="hidden"&&(f=!0,C(!0)),R.visibilityState==="visible"&&F()},E=R=>{R.pointerType==="mouse"&&(f=!0,$=!0,!(e.animating||e.autoplay.paused)&&C(!0))},I=R=>{R.pointerType==="mouse"&&($=!1,e.autoplay.paused&&F())},M=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",E),e.el.addEventListener("pointerleave",I))},z=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",E),e.el.removeEventListener("pointerleave",I))},H=()=>{he().addEventListener("visibilitychange",B)},J=()=>{he().removeEventListener("visibilitychange",B)};h("init",()=>{e.params.autoplay.enabled&&(M(),H(),N())}),h("destroy",()=>{z(),J(),e.autoplay.running&&j()}),h("_freeModeStaticRelease",()=>{(c||f)&&F()}),h("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?j():C(!0,!0)}),h("beforeTransitionStart",(R,K,re)=>{e.destroyed||!e.autoplay.running||(re||!e.params.autoplay.disableOnInteraction?C(!0,!0):j())}),h("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){j();return}S=!0,c=!1,f=!1,m=setTimeout(()=>{f=!0,c=!0,C(!0)},200)}}),h("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(m),clearTimeout(s),e.params.autoplay.disableOnInteraction){c=!1,S=!1;return}c&&e.params.cssMode&&F(),c=!1,S=!1}}),h("slideChange",()=>{e.destroyed||!e.autoplay.running||(w=!0)}),Object.assign(e.autoplay,{start:N,stop:j,pause:C,resume:F})}function zs(t){let{swiper:e,extendParams:v,on:h}=t;v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let g=!1,_=!1;e.thumbs={swiper:null};function s(){const u=e.thumbs.swiper;if(!u||u.destroyed)return;const o=u.clickedIndex,n=u.clickedSlide;if(n&&n.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof o>"u"||o===null)return;let a;u.params.loop?a=parseInt(u.clickedSlide.getAttribute("data-swiper-slide-index"),10):a=o,e.params.loop?e.slideToLoop(a):e.slideTo(a)}function p(){const{thumbs:u}=e.params;if(g)return!1;g=!0;const o=e.constructor;if(u.swiper instanceof o)e.thumbs.swiper=u.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(fs(u.swiper)){const n=Object.assign({},u.swiper);Object.assign(n,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(n),_=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",s),!0}function d(u){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const n=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView;let a=1;const S=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),o.slides.forEach(w=>w.classList.remove(S)),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let w=0;w<a;w+=1)ve(o.slidesEl,`[data-swiper-slide-index="${e.realIndex+w}"]`).forEach(f=>{f.classList.add(S)});else for(let w=0;w<a;w+=1)o.slides[e.realIndex+w]&&o.slides[e.realIndex+w].classList.add(S);const c=e.params.thumbs.autoScrollOffset,m=c&&!o.params.loop;if(e.realIndex!==o.realIndex||m){const w=o.activeIndex;let f,$;if(o.params.loop){const b=o.slides.filter(P=>P.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];f=o.slides.indexOf(b),$=e.activeIndex>e.previousIndex?"next":"prev"}else f=e.realIndex,$=f>e.previousIndex?"next":"prev";m&&(f+=$==="next"?c:-1*c),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(f)<0&&(o.params.centeredSlides?f>w?f=f-Math.floor(n/2)+1:f=f+Math.floor(n/2)-1:f>w&&o.params.slidesPerGroup,o.slideTo(f,u?0:void 0))}}h("beforeInit",()=>{const{thumbs:u}=e.params;if(!(!u||!u.swiper))if(typeof u.swiper=="string"||u.swiper instanceof HTMLElement){const o=he(),n=()=>{const S=typeof u.swiper=="string"?o.querySelector(u.swiper):u.swiper;if(S&&S.swiper)u.swiper=S.swiper,p(),d(!0);else if(S){const c=`${e.params.eventsPrefix}init`,m=w=>{u.swiper=w.detail[0],S.removeEventListener(c,m),p(),d(!0),u.swiper.update(),e.update()};S.addEventListener(c,m)}return S},a=()=>{if(e.destroyed)return;n()||requestAnimationFrame(a)};requestAnimationFrame(a)}else p(),d(!0)}),h("slideChange update resize observerUpdate",()=>{d()}),h("setTransition",(u,o)=>{const n=e.thumbs.swiper;!n||n.destroyed||n.setTransition(o)}),h("beforeDestroy",()=>{const u=e.thumbs.swiper;!u||u.destroyed||_&&u.destroy()}),Object.assign(e.thumbs,{init:p,update:d})}function is(t){let{swiper:e,extendParams:v,emit:h,once:g}=t;v({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function _(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function s(){if(e.params.cssMode)return;const{touchEventsData:d,touches:u}=e;d.velocities.length===0&&d.velocities.push({position:u[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:u[e.isHorizontal()?"currentX":"currentY"],time:Ye()})}function p(d){let{currentPos:u}=d;if(e.params.cssMode)return;const{params:o,wrapperEl:n,rtlTranslate:a,snapGrid:S,touchEventsData:c}=e,w=Ye()-c.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<S.length?e.slideTo(S.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(c.velocities.length>1){const j=c.velocities.pop(),C=c.velocities.pop(),F=j.position-C.position,B=j.time-C.time;e.velocity=F/B,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(B>150||Ye()-j.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,c.velocities.length=0;let f=1e3*o.freeMode.momentumRatio;const $=e.velocity*f;let b=e.translate+$;a&&(b=-b);let P=!1,D;const Y=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let N;if(b<e.maxTranslate())o.freeMode.momentumBounce?(b+e.maxTranslate()<-Y&&(b=e.maxTranslate()-Y),D=e.maxTranslate(),P=!0,c.allowMomentumBounce=!0):b=e.maxTranslate(),o.loop&&o.centeredSlides&&(N=!0);else if(b>e.minTranslate())o.freeMode.momentumBounce?(b-e.minTranslate()>Y&&(b=e.minTranslate()+Y),D=e.minTranslate(),P=!0,c.allowMomentumBounce=!0):b=e.minTranslate(),o.loop&&o.centeredSlides&&(N=!0);else if(o.freeMode.sticky){let j;for(let C=0;C<S.length;C+=1)if(S[C]>-b){j=C;break}Math.abs(S[j]-b)<Math.abs(S[j-1]-b)||e.swipeDirection==="next"?b=S[j]:b=S[j-1],b=-b}if(N&&g("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(a?f=Math.abs((-b-e.translate)/e.velocity):f=Math.abs((b-e.translate)/e.velocity),o.freeMode.sticky){const j=Math.abs((a?-b:b)-e.translate),C=e.slidesSizesGrid[e.activeIndex];j<C?f=o.speed:j<2*C?f=o.speed*1.5:f=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&P?(e.updateProgress(D),e.setTransition(f),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Ie(n,()=>{!e||e.destroyed||!c.allowMomentumBounce||(h("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(D),Ie(n,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(h("_freeModeNoMomentumRelease"),e.updateProgress(b),e.setTransition(f),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Ie(n,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(b),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&h("_freeModeNoMomentumRelease");(!o.freeMode.momentum||w>=o.longSwipesMs)&&(h("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:_,onTouchMove:s,onTouchEnd:p}})}function ns(t){let{swiper:e,extendParams:v,on:h}=t;v({grid:{rows:1,fill:"column"}});let g,_,s,p;const d=()=>{let m=e.params.spaceBetween;return typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*e.size:typeof m=="string"&&(m=parseFloat(m)),m},u=m=>{const{slidesPerView:w}=e.params,{rows:f,fill:$}=e.params.grid,b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:m.length;s=Math.floor(b/f),Math.floor(b/f)===b/f?g=b:g=Math.ceil(b/f)*f,w!=="auto"&&$==="row"&&(g=Math.max(g,w*f)),_=g/f},o=()=>{e.slides&&e.slides.forEach(m=>{m.swiperSlideGridSet&&(m.style.height="",m.style[e.getDirectionLabel("margin-top")]="")})},n=(m,w,f)=>{const{slidesPerGroup:$}=e.params,b=d(),{rows:P,fill:D}=e.params.grid,Y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:f.length;let N,j,C;if(D==="row"&&$>1){const F=Math.floor(m/($*P)),B=m-P*$*F,E=F===0?$:Math.min(Math.ceil((Y-F*P*$)/P),$);C=Math.floor(B/E),j=B-C*E+F*$,N=j+C*g/P,w.style.order=N}else D==="column"?(j=Math.floor(m/P),C=m-j*P,(j>s||j===s&&C===P-1)&&(C+=1,C>=P&&(C=0,j+=1))):(C=Math.floor(m/_),j=m-C*_);w.row=C,w.column=j,w.style.height=`calc((100% - ${(P-1)*b}px) / ${P})`,w.style[e.getDirectionLabel("margin-top")]=C!==0?b&&`${b}px`:"",w.swiperSlideGridSet=!0},a=(m,w)=>{const{centeredSlides:f,roundLengths:$}=e.params,b=d(),{rows:P}=e.params.grid;if(e.virtualSize=(m+b)*g,e.virtualSize=Math.ceil(e.virtualSize/P)-b,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),f){const D=[];for(let Y=0;Y<w.length;Y+=1){let N=w[Y];$&&(N=Math.floor(N)),w[Y]<e.virtualSize+w[0]&&D.push(N)}w.splice(0,w.length),w.push(...D)}},S=()=>{p=e.params.grid&&e.params.grid.rows>1},c=()=>{const{params:m,el:w}=e,f=m.grid&&m.grid.rows>1;p&&!f?(w.classList.remove(`${m.containerModifierClass}grid`,`${m.containerModifierClass}grid-column`),s=1,e.emitContainerClasses()):!p&&f&&(w.classList.add(`${m.containerModifierClass}grid`),m.grid.fill==="column"&&w.classList.add(`${m.containerModifierClass}grid-column`),e.emitContainerClasses()),p=f};h("init",S),h("update",c),e.grid={initSlides:u,unsetSlides:o,updateSlide:n,updateWrapperSize:a}}function Ce(t){const{effect:e,swiper:v,on:h,setTranslate:g,setTransition:_,overwriteParams:s,perspective:p,recreateShadows:d,getEffectParams:u}=t;h("beforeInit",()=>{if(v.params.effect!==e)return;v.classNames.push(`${v.params.containerModifierClass}${e}`),p&&p()&&v.classNames.push(`${v.params.containerModifierClass}3d`);const n=s?s():{};Object.assign(v.params,n),Object.assign(v.originalParams,n)}),h("setTranslate",()=>{v.params.effect===e&&g()}),h("setTransition",(n,a)=>{v.params.effect===e&&_(a)}),h("transitionEnd",()=>{if(v.params.effect===e&&d){if(!u||!u().slideShadows)return;v.slides.forEach(n=>{n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>a.remove())}),d()}});let o;h("virtualUpdate",()=>{v.params.effect===e&&(v.slides.length||(o=!0),requestAnimationFrame(()=>{o&&v.slides&&v.slides.length&&(g(),o=!1)}))})}function Ne(t,e){const v=be(e);return v!==e&&(v.style.backfaceVisibility="hidden",v.style["-webkit-backface-visibility"]="hidden"),v}function Xe(t){let{swiper:e,duration:v,transformElements:h,allSlides:g}=t;const{activeIndex:_}=e,s=p=>p.parentElement?p.parentElement:e.slides.filter(u=>u.shadowRoot&&u.shadowRoot===p.parentNode)[0];if(e.params.virtualTranslate&&v!==0){let p=!1,d;g?d=h:d=h.filter(u=>{const o=u.classList.contains("swiper-slide-transform")?s(u):u;return e.getSlideIndex(o)===_}),d.forEach(u=>{Ie(u,()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const o=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(o)})})}}function Is(t){let{swiper:e,extendParams:v,on:h}=t;v({fadeEffect:{crossFade:!1}}),Ce({effect:"fade",swiper:e,on:h,setTranslate:()=>{const{slides:s}=e,p=e.params.fadeEffect;for(let d=0;d<s.length;d+=1){const u=e.slides[d];let n=-u.swiperSlideOffset;e.params.virtualTranslate||(n-=e.translate);let a=0;e.isHorizontal()||(a=n,n=0);const S=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(u.progress),0):1+Math.min(Math.max(u.progress,-1),0),c=Ne(p,u);c.style.opacity=S,c.style.transform=`translate3d(${n}px, ${a}px, 0px)`}},setTransition:s=>{const p=e.slides.map(d=>be(d));p.forEach(d=>{d.style.transitionDuration=`${s}ms`}),Xe({swiper:e,duration:s,transformElements:p,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function As(t){let{swiper:e,extendParams:v,on:h}=t;v({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const g=(d,u,o)=>{let n=o?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),a=o?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");n||(n=ue("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"left":"top"}`.split(" ")),d.append(n)),a||(a=ue("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"right":"bottom"}`.split(" ")),d.append(a)),n&&(n.style.opacity=Math.max(-u,0)),a&&(a.style.opacity=Math.max(u,0))};Ce({effect:"cube",swiper:e,on:h,setTranslate:()=>{const{el:d,wrapperEl:u,slides:o,width:n,height:a,rtlTranslate:S,size:c,browser:m}=e,w=Le(e),f=e.params.cubeEffect,$=e.isHorizontal(),b=e.virtual&&e.params.virtual.enabled;let P=0,D;f.shadow&&($?(D=e.wrapperEl.querySelector(".swiper-cube-shadow"),D||(D=ue("div","swiper-cube-shadow"),e.wrapperEl.append(D)),D.style.height=`${n}px`):(D=d.querySelector(".swiper-cube-shadow"),D||(D=ue("div","swiper-cube-shadow"),d.append(D))));for(let N=0;N<o.length;N+=1){const j=o[N];let C=N;b&&(C=parseInt(j.getAttribute("data-swiper-slide-index"),10));let F=C*90,B=Math.floor(F/360);S&&(F=-F,B=Math.floor(-F/360));const E=Math.max(Math.min(j.progress,1),-1);let I=0,M=0,z=0;C%4===0?(I=-B*4*c,z=0):(C-1)%4===0?(I=0,z=-B*4*c):(C-2)%4===0?(I=c+B*4*c,z=c):(C-3)%4===0&&(I=-c,z=3*c+c*4*B),S&&(I=-I),$||(M=I,I=0);const H=`rotateX(${w($?0:-F)}deg) rotateY(${w($?F:0)}deg) translate3d(${I}px, ${M}px, ${z}px)`;E<=1&&E>-1&&(P=C*90+E*90,S&&(P=-C*90-E*90)),j.style.transform=H,f.slideShadows&&g(j,E,$)}if(u.style.transformOrigin=`50% 50% -${c/2}px`,u.style["-webkit-transform-origin"]=`50% 50% -${c/2}px`,f.shadow)if($)D.style.transform=`translate3d(0px, ${n/2+f.shadowOffset}px, ${-n/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${f.shadowScale})`;else{const N=Math.abs(P)-Math.floor(Math.abs(P)/90)*90,j=1.5-(Math.sin(N*2*Math.PI/360)/2+Math.cos(N*2*Math.PI/360)/2),C=f.shadowScale,F=f.shadowScale/j,B=f.shadowOffset;D.style.transform=`scale3d(${C}, 1, ${F}) translate3d(0px, ${a/2+B}px, ${-a/2/F}px) rotateX(-89.99deg)`}const Y=(m.isSafari||m.isWebView)&&m.needPerspectiveFix?-c/2:0;u.style.transform=`translate3d(0px,0,${Y}px) rotateX(${w(e.isHorizontal()?0:P)}deg) rotateY(${w(e.isHorizontal()?-P:0)}deg)`,u.style.setProperty("--swiper-cube-translate-z",`${Y}px`)},setTransition:d=>{const{el:u,slides:o}=e;if(o.forEach(n=>{n.style.transitionDuration=`${d}ms`,n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${d}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const n=u.querySelector(".swiper-cube-shadow");n&&(n.style.transitionDuration=`${d}ms`)}},recreateShadows:()=>{const d=e.isHorizontal();e.slides.forEach(u=>{const o=Math.max(Math.min(u.progress,1),-1);g(u,o,d)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Ee(t,e,v){const h=`swiper-slide-shadow${v?`-${v}`:""}${t?` swiper-slide-shadow-${t}`:""}`,g=be(e);let _=g.querySelector(`.${h.split(" ").join(".")}`);return _||(_=ue("div",h.split(" ")),g.append(_)),_}function Ls(t){let{swiper:e,extendParams:v,on:h}=t;v({flipEffect:{slideShadows:!0,limitRotation:!0}});const g=(d,u)=>{let o=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),n=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");o||(o=Ee("flip",d,e.isHorizontal()?"left":"top")),n||(n=Ee("flip",d,e.isHorizontal()?"right":"bottom")),o&&(o.style.opacity=Math.max(-u,0)),n&&(n.style.opacity=Math.max(u,0))};Ce({effect:"flip",swiper:e,on:h,setTranslate:()=>{const{slides:d,rtlTranslate:u}=e,o=e.params.flipEffect,n=Le(e);for(let a=0;a<d.length;a+=1){const S=d[a];let c=S.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(S.progress,1),-1));const m=S.swiperSlideOffset;let f=-180*c,$=0,b=e.params.cssMode?-m-e.translate:-m,P=0;e.isHorizontal()?u&&(f=-f):(P=b,b=0,$=-f,f=0),S.style.zIndex=-Math.abs(Math.round(c))+d.length,o.slideShadows&&g(S,c);const D=`translate3d(${b}px, ${P}px, 0px) rotateX(${n($)}deg) rotateY(${n(f)}deg)`,Y=Ne(o,S);Y.style.transform=D}},setTransition:d=>{const u=e.slides.map(o=>be(o));u.forEach(o=>{o.style.transitionDuration=`${d}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(n=>{n.style.transitionDuration=`${d}ms`})}),Xe({swiper:e,duration:d,transformElements:u})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(d=>{let u=d.progress;e.params.flipEffect.limitRotation&&(u=Math.max(Math.min(d.progress,1),-1)),g(d,u)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Ns(t){let{swiper:e,extendParams:v,on:h}=t;v({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Ce({effect:"coverflow",swiper:e,on:h,setTranslate:()=>{const{width:s,height:p,slides:d,slidesSizesGrid:u}=e,o=e.params.coverflowEffect,n=e.isHorizontal(),a=e.translate,S=n?-a+s/2:-a+p/2,c=n?o.rotate:-o.rotate,m=o.depth,w=Le(e);for(let f=0,$=d.length;f<$;f+=1){const b=d[f],P=u[f],D=b.swiperSlideOffset,Y=(S-D-P/2)/P,N=typeof o.modifier=="function"?o.modifier(Y):Y*o.modifier;let j=n?c*N:0,C=n?0:c*N,F=-m*Math.abs(N),B=o.stretch;typeof B=="string"&&B.indexOf("%")!==-1&&(B=parseFloat(o.stretch)/100*P);let E=n?0:B*N,I=n?B*N:0,M=1-(1-o.scale)*Math.abs(N);Math.abs(I)<.001&&(I=0),Math.abs(E)<.001&&(E=0),Math.abs(F)<.001&&(F=0),Math.abs(j)<.001&&(j=0),Math.abs(C)<.001&&(C=0),Math.abs(M)<.001&&(M=0);const z=`translate3d(${I}px,${E}px,${F}px)  rotateX(${w(C)}deg) rotateY(${w(j)}deg) scale(${M})`,H=Ne(o,b);if(H.style.transform=z,b.style.zIndex=-Math.abs(Math.round(N))+1,o.slideShadows){let J=n?b.querySelector(".swiper-slide-shadow-left"):b.querySelector(".swiper-slide-shadow-top"),R=n?b.querySelector(".swiper-slide-shadow-right"):b.querySelector(".swiper-slide-shadow-bottom");J||(J=Ee("coverflow",b,n?"left":"top")),R||(R=Ee("coverflow",b,n?"right":"bottom")),J&&(J.style.opacity=N>0?N:0),R&&(R.style.opacity=-N>0?-N:0)}}},setTransition:s=>{e.slides.map(d=>be(d)).forEach(d=>{d.style.transitionDuration=`${s}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Ds(t){let{swiper:e,extendParams:v,on:h}=t;v({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const g=p=>typeof p=="string"?p:`${p}px`;Ce({effect:"creative",swiper:e,on:h,setTranslate:()=>{const{slides:p,wrapperEl:d,slidesSizesGrid:u}=e,o=e.params.creativeEffect,{progressMultiplier:n}=o,a=e.params.centeredSlides,S=Le(e);if(a){const c=u[0]/2-e.params.slidesOffsetBefore||0;d.style.transform=`translateX(calc(50% - ${c}px))`}for(let c=0;c<p.length;c+=1){const m=p[c],w=m.progress,f=Math.min(Math.max(m.progress,-o.limitProgress),o.limitProgress);let $=f;a||($=Math.min(Math.max(m.originalProgress,-o.limitProgress),o.limitProgress));const b=m.swiperSlideOffset,P=[e.params.cssMode?-b-e.translate:-b,0,0],D=[0,0,0];let Y=!1;e.isHorizontal()||(P[1]=P[0],P[0]=0);let N={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};f<0?(N=o.next,Y=!0):f>0&&(N=o.prev,Y=!0),P.forEach((M,z)=>{P[z]=`calc(${M}px + (${g(N.translate[z])} * ${Math.abs(f*n)}))`}),D.forEach((M,z)=>{let H=N.rotate[z]*Math.abs(f*n);D[z]=H}),m.style.zIndex=-Math.abs(Math.round(w))+p.length;const j=P.join(", "),C=`rotateX(${S(D[0])}deg) rotateY(${S(D[1])}deg) rotateZ(${S(D[2])}deg)`,F=$<0?`scale(${1+(1-N.scale)*$*n})`:`scale(${1-(1-N.scale)*$*n})`,B=$<0?1+(1-N.opacity)*$*n:1-(1-N.opacity)*$*n,E=`translate3d(${j}) ${C} ${F}`;if(Y&&N.shadow||!Y){let M=m.querySelector(".swiper-slide-shadow");if(!M&&N.shadow&&(M=Ee("creative",m)),M){const z=o.shadowPerProgress?f*(1/o.limitProgress):f;M.style.opacity=Math.min(Math.max(Math.abs(z),0),1)}}const I=Ne(o,m);I.style.transform=E,I.style.opacity=B,N.origin&&(I.style.transformOrigin=N.origin)}},setTransition:p=>{const d=e.slides.map(u=>be(u));d.forEach(u=>{u.style.transitionDuration=`${p}ms`,u.querySelectorAll(".swiper-slide-shadow").forEach(o=>{o.style.transitionDuration=`${p}ms`})}),Xe({swiper:e,duration:p,transformElements:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const js=W({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const t=n=>{console.log("SwiperComponentReady!",n)},e=n=>{console.log("handleHSwiperSlideChange!",n.realIndex)},v=We(new Map),h=n=>v.get(n),g=n=>{v.set(n,!0),console.log("Click slide! target slide id:",n)};let _=null;const s=n=>{_=n},p=ke();return{modules:[ns,U,ie,Ve],handleHSwiperReady:t,handleHSwiperSlideChange:e,handleHwiperSlideClick:g,isSlideClicked:h,setVSwiperRef:s,vSwiperIndex:p,updateVSwiperIndex:()=>{p.value=_==null?void 0:_.activeIndex},prevVSwiperSlide:()=>_==null?void 0:_.slidePrev(),nextVSwiperSlide:()=>_==null?void 0:_.slideNext()}}}),ce=t=>(_e("data-v-432a73ba"),t=t(),Se(),t),Rs={class:"advance-example"},Os=ce(()=>y("span",null,"Loop Slide 1",-1)),Hs=ce(()=>y("span",null,"Loop Slide 3",-1)),Ys=ce(()=>y("span",null,"Loop Slide 4",-1)),Ws=ce(()=>y("span",null,"Loop Slide 5",-1)),Vs=ce(()=>y("span",null,"Loop Slide 6",-1)),qs=ce(()=>y("i",{class:"iconfont icon-link-external"},null,-1)),Xs=ce(()=>y("i",{class:"iconfont icon-link-external"},null,-1)),Bs=["disabled"],Fs=ce(()=>y("i",{class:"iconfont icon-arrow-down"},null,-1)),Gs=[Fs],Us=["disabled"],Ks=ce(()=>y("i",{class:"iconfont icon-arrow-up"},null,-1)),Zs=[Ks];function Js(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper"),d=x("ulink");return L(),se("div",Rs,[i(p,{class:"horizontal-swiper",modules:t.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:t.handleHSwiperReady,onSlideChange:t.handleHSwiperSlideChange},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Os]),_:1}),i(s,{class:"slide"},{default:r(u=>[y("pre",null,pe(u),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Hs,y("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=ts(u=>t.handleHwiperSlideClick(3),["prevent"]))},pe(t.isSlideClicked(3)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ys,y("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=u=>t.handleHwiperSlideClick(4))},pe(t.isSlideClicked(4)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ws,y("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=u=>t.handleHwiperSlideClick(5))},pe(t.isSlideClicked(5)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Vs,y("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=u=>t.handleHwiperSlideClick(6))},pe(t.isSlideClicked(6)?"clicked ✅":"click me 👆"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),i(p,{class:"vertical-swiper",modules:t.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:t.setVSwiperRef,onSlideChange:t.updateVSwiperIndex},{"container-start":r(()=>[y("button",{class:"nav-button-prev",disabled:t.vSwiperIndex===0,onClick:e[4]||(e[4]=(...u)=>t.prevVSwiperSlide&&t.prevVSwiperSlide(...u))},Gs,8,Bs)]),"container-end":r(()=>[y("button",{class:"nav-button-next",disabled:t.vSwiperIndex===4,onClick:e[5]||(e[5]=(...u)=>t.nextVSwiperSlide&&t.nextVSwiperSlide(...u))},Zs,8,Us)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[i(d,{class:"link",href:"https://swiperjs.com/"},{default:r(()=>[l("swiperjs.com")]),_:1}),qs]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(d,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:r(()=>[l("discussions")]),_:1}),Xs]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}const Qs=V(js,[["render",Js],["__scopeId","data-v-432a73ba"]]),er=W({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X}});function sr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1})}const rr=V(er,[["render",sr],["__scopeId","data-v-d379a297"]]),ir=W({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[ie]}}});function nr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,navigation:""},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const tr=V(ir,[["render",nr],["__scopeId","data-v-cffe600e"]]),lr=W({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function ar(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const or=V(lr,[["render",ar],["__scopeId","data-v-26f77f8c"]]),dr=W({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function pr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const cr=V(dr,[["render",pr],["__scopeId","data-v-52d6c96d"]]),ur=W({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function mr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,pagination:{type:"progressbar"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const fr=V(ur,[["render",mr],["__scopeId","data-v-876af3f6"]]),wr=W({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function hr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,pagination:{type:"fraction"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const gr=V(wr,[["render",hr],["__scopeId","data-v-9f260ff0"]]),vr=W({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{bulletRenderer:(e,v)=>`<span class="${`${v} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[U]}}});function _r(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,pagination:{clickable:!0,renderBullet:t.bulletRenderer}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","pagination"])}const Sr=V(vr,[["render",_r],["__scopeId","data-v-d269ecf7"]]),br=W({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[qe]}}});function yr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,scrollbar:{hide:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const xr=V(br,[["render",yr],["__scopeId","data-v-b04ce778"]]),$r=W({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function kr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,direction:"vertical",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Er=V($r,[["render",kr],["__scopeId","data-v-301a455b"]]),Cr=W({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Mr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Tr=V(Cr,[["render",Mr],["__scopeId","data-v-bd9523a7"]]),Pr=W({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function zr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ir=V(Pr,[["render",zr],["__scopeId","data-v-cb4d22d6"]]),Ar=W({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Lr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Nr=V(Ar,[["render",Lr],["__scopeId","data-v-8a142e1d"]]),Dr=W({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function jr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Rr=V(Dr,[["render",jr],["__scopeId","data-v-ccd983d5"]]),Or=W({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Hr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Yr=V(Or,[["render",Hr],["__scopeId","data-v-41931b82"]]),Wr=W({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,is]}}});function Vr(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const qr=V(Wr,[["render",Vr],["__scopeId","data-v-7676ad29"]]),Xr=W({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,is,qe,Ve]}}}),Z=t=>(_e("data-v-2a53ceff"),t=t(),Se(),t),Br=Z(()=>y("h2",null,"I Have a Dream",-1)),Fr=Z(()=>y("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),Gr=Z(()=>y("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),Ur=Z(()=>y("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),Kr=Z(()=>y("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),Zr=Z(()=>y("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check — a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),Jr=Z(()=>y("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),Qr=Z(()=>y("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),ei=Z(()=>y("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),si=Z(()=>y("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),ri=Z(()=>y("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),ii=Z(()=>y("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),ni=Z(()=>y("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),ti=Z(()=>y("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),li=Z(()=>y("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),ai=Z(()=>y("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),oi=Z(()=>y("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),di=Z(()=>y("p",null,"I have a dream today.",-1)),pi=Z(()=>y("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),ci=Z(()=>y("p",null,"I have a dream today.",-1)),ui=Z(()=>y("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),mi=Z(()=>y("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),fi=Z(()=>y("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),wi=Z(()=>y("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),hi=Z(()=>y("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),gi=Z(()=>y("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),vi=Z(()=>y("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),_i=Z(()=>y("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),Si=Z(()=>y("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),bi=Z(()=>y("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function yi(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Br,Fr,Gr,Ur,Kr,Zr,Jr,Qr,ei,si,ri,ii,ni,ti,li,ai,oi,di,pi,ci,ui,mi,fi,wi,hi,gi,vi,_i,Si,bi]),_:1})]),_:1},8,["modules"])}const xi=V(Xr,[["render",yi],["__scopeId","data-v-2a53ceff"]]),$i=W({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ns]}}});function ki(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])}const Ei=V($i,[["render",ki],["__scopeId","data-v-0f84704e"]]),Ci=W({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Mi(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper swiper-h",modules:t.modules,"space-between":50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(p,{class:"swiper-v",modules:t.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 5")]),_:1})]),_:1},8,["modules"])]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 4")]),_:1})]),_:1},8,["modules"])}const Ti=V(Ci,[["render",Mi],["__scopeId","data-v-67c368d3"]]),Pi=W({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function zi(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ii=V(Pi,[["render",zi],["__scopeId","data-v-aafb0697"]]),Ai=W({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie]}}});function Li(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ni=V(Ai,[["render",Li],["__scopeId","data-v-552c3fe4"]]),Di=W({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie]}}});function ji(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ri=V(Di,[["render",ji],["__scopeId","data-v-8b814072"]]),Oi=W({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[rs,qe,ie,U]}}});function Hi(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1})]),_:1},8,["modules"])}const Yi=V(Oi,[["render",Hi],["__scopeId","data-v-9f7d3491"]]),Wi=W({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie,Is]}}}),Vi=["src"];function qi(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(L(),se(te,null,le(5,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,Vi)]),_:2},1024)),64))]),_:1},8,["modules"])}const Xi=V(Wi,[["render",qi],["__scopeId","data-v-85fd2afe"]]),Bi=W({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ns]}}}),Fi={class:"coverflow-example"},Gi=["src"];function Ui(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se("div",Fi,[i(p,{class:"swiper",modules:t.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:r(()=>[(L(),se(te,null,le(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,Gi)]),_:2},1024)),64))]),_:1},8,["modules"])])}const Ki=V(Bi,[["render",Ui],["__scopeId","data-v-0b6b889c"]]),Zi=W({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,As]}}}),Ji={class:"cube-example"},Qi=["src"];function en(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se("div",Ji,[i(p,{class:"swiper",modules:t.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:r(()=>[(L(),se(te,null,le(5,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,Qi)]),_:2},1024)),64))]),_:1},8,["modules"])])}const sn=V(Zi,[["render",en],["__scopeId","data-v-8a8272d9"]]),rn=W({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie,Ls]}}}),nn={class:"flip-example"},tn=["src"];function ln(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se("div",nn,[i(p,{class:"swiper",modules:t.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:r(()=>[(L(),se(te,null,le(6,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,tn)]),_:2},1024)),64))]),_:1},8,["modules"])])}const an=V(rn,[["render",ln],["__scopeId","data-v-c8bceb45"]]),on=W({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const t=ke(!0),e=ke(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:t,setEffect:g=>{e.value=g,Ze(()=>{t.value=!1,Ze(()=>{t.value=!0})})},modules:[U,Ds]}}}),dn={class:"creative-example"},pn={class:"toolbar"},cn=["onClick"],un=["src"];function mn(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se("div",dn,[y("div",pn,[(L(!0),se(te,null,le(t.effects,(d,u)=>(L(),se("button",{key:u,onClick:o=>t.setEffect(u)}," Effect "+pe(u+1)+" "+pe(u===t.effectIndex?"⎷":""),9,cn))),128))]),t.render?(L(),G(p,{key:0,class:"swiper",modules:t.modules,effect:"creative","creative-effect":t.effects[t.effectIndex],"grab-cursor":!0,pagination:!0},{default:r(()=>[(L(),se(te,null,le(6,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,un)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):ls("",!0)])}const fn=V(on,[["render",mn],["__scopeId","data-v-7cba39b3"]]),wn=W({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie,rs]}}});function hn(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const gn=V(wn,[["render",hn],["__scopeId","data-v-3dd6253f"]]),vn=W({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ve]}}});function _n(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Sn=V(vn,[["render",_n],["__scopeId","data-v-9f7cf33b"]]),bn=W({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie,Ps]}}});function yn(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const xn=V(bn,[["render",yn],["__scopeId","data-v-be476c90"]]),$n=W({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const t=We([1,2,3,4,5]);return{slides:t,modules:[U,ie],appendSlide:()=>t.push(t.length+1),prependSlide:()=>t.unshift(t[0]-1),popSlide:()=>t.pop(),shiftSlide:()=>t.shift()}}}),kn={class:"dynamic-example"},En={class:"toolbar"};function Cn(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se("div",kn,[y("div",En,[y("button",{onClick:e[0]||(e[0]=(...d)=>t.prependSlide&&t.prependSlide(...d))},"Prepend slide"),y("button",{onClick:e[1]||(e[1]=(...d)=>t.appendSlide&&t.appendSlide(...d))},"Append slide"),y("button",{onClick:e[2]||(e[2]=(...d)=>t.popSlide&&t.popSlide(...d))},"Pop slide"),y("button",{onClick:e[3]||(e[3]=(...d)=>t.shiftSlide&&t.shiftSlide(...d))},"Shift slide")]),i(p,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:t.modules},{default:r(()=>[(L(!0),se(te,null,le(t.slides,d=>(L(),G(s,{key:d,class:"slide"},{default:r(()=>[l("Slide "+pe(d),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}const Mn=V($n,[["render",Cn],["__scopeId","data-v-f7a94b3e"]]),Tn=W({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const t=ke();return{modules:[ie,zs],setThumbsSwiper:v=>{t.value=v},thumbsSwiper:t}}}),Pn={class:"thumb-example"},zn=["src"],In=["src"];function An(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se("div",Pn,[i(p,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,"space-between":10,navigation:!0,thumbs:{swiper:t.thumbsSwiper}},{default:r(()=>[(L(),se(te,null,le(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,zn)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),i(p,{class:"thumbs-swiper",modules:t.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:t.setThumbsSwiper},{default:r(()=>[(L(),se(te,null,le(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`},null,8,In)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}const Ln=V(Tn,[["render",An],["__scopeId","data-v-1631fe8d"]]),Nn=W({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie,Ts]}}}),Dn={class:"swiper-zoom-container"},jn=["src"];function Rn(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(L(),se(te,null,le(8,d=>i(s,{key:d,class:"slide"},{default:r(()=>[y("div",Dn,[y("img",{src:`/images/example/${d}.jpg`},null,8,jn)])]),_:2},1024)),64))]),_:1},8,["modules"])}const On=V(Nn,[["render",Rn],["__scopeId","data-v-9a97aa17"]]),Hn=W({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie]}}}),Yn=t=>(_e("data-v-047325fd"),t=t(),Se(),t),Wn=["src"],Vn=Yn(()=>y("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function qn(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(L(),se(te,null,le(8,d=>i(s,{key:d,class:"slide",lazy:!0},{default:r(()=>[y("img",{src:`/images/example/${d}.jpg`,loading:"lazy",class:"swiper-lazy"},null,8,Wn),Vn]),_:2},1024)),64))]),_:1},8,["modules"])}const Xn=V(Hn,[["render",qn],["__scopeId","data-v-047325fd"]]),Bn=W({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[Ms,U,ie]}}}),oe=t=>(_e("data-v-075234b6"),t=t(),Se(),t),Fn=oe(()=>y("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:{backgroundImage:"url(/images/example/1.jpg)"}},null,-1)),Gn=oe(()=>y("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),Un=oe(()=>y("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Kn=oe(()=>y("div",{class:"text","data-swiper-parallax":"-100"},[y("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Zn=oe(()=>y("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),Jn=oe(()=>y("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Qn=oe(()=>y("div",{class:"text","data-swiper-parallax":"-100"},[y("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),et=oe(()=>y("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),st=oe(()=>y("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),rt=oe(()=>y("div",{class:"text","data-swiper-parallax":"-100"},[y("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function it(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":r(()=>[Fn]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Gn,Un,Kn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Zn,Jn,Qn]),_:1}),i(s,{class:"slide"},{default:r(()=>[et,st,rt]),_:1})]),_:1},8,["modules"])}const nt=V(Bn,[["render",it],["__scopeId","data-v-075234b6"]]),tt=W({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie]}}});function lt(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const at=V(tt,[["render",lt],["__scopeId","data-v-8263ad4d"]]),ot=W({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}}),dt=t=>(_e("data-v-57e729e2"),t=t(),Se(),t),pt=dt(()=>y("div",{class:"tip"},"→ Resize the browser window ←",-1));function ct(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se(te,null,[pt,i(p,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])],64)}const ut=V(ot,[["render",ct],["__scopeId","data-v-57e729e2"]]),mt=W({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ie]}}});function ft(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const wt=V(mt,[["render",ft],["__scopeId","data-v-6c1d9970"]]),ht=W({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){let t=null;const e=_=>{t=_},v=ke(!1);return{menuOpened:v,toggleMenu:()=>{v.value?t==null||t.slideNext():t==null||t.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{v.value=(t==null?void 0:t.activeIndex)===0}}}}),De=t=>(_e("data-v-03bb8b06"),t=t(),Se(),t),gt=De(()=>y("div",{class:"bar"},null,-1)),vt=De(()=>y("div",{class:"bar"},null,-1)),_t=De(()=>y("div",{class:"bar"},null,-1)),St=[gt,vt,_t],bt=De(()=>y("div",null,"Content slide",-1));function yt(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:t.setSwiperRef,onSlideChange:t.handleSlideChange},{default:r(()=>[i(s,{class:"menu"},{default:r(()=>[l("Menu slide")]),_:1}),i(s,{class:"content"},{default:r(()=>[y("div",{class:as(["menu-button",{opened:t.menuOpened}]),onClick:e[0]||(e[0]=(...d)=>t.toggleMenu&&t.toggleMenu(...d))},St,2),bt]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}const xt=V(ht,[["render",yt],["__scopeId","data-v-03bb8b06"]]),$t=W({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){let t=null;const e=p=>{t=p},v=p=>{t==null||t.slideTo(p-1,0)},h=We(Array.from({length:500}).map((p,d)=>d+1));let g=1;return{modules:[U,ie,Cs],setSwiperRef:e,slides:h,slideTo:v,append:()=>{h.push(h.length)},prepend:()=>{h.unshift(g-2,g-1),g-=2,t==null||t.slideTo(t.activeIndex+2,0)}}}}),kt={class:"toolbar"};function Et(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),se(te,null,[y("div",kt,[y("button",{onClick:e[0]||(e[0]=d=>t.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),y("button",{onClick:e[1]||(e[1]=d=>t.slideTo(1)),class:"prepend-slide"},"Slide 1"),y("button",{onClick:e[2]||(e[2]=d=>t.slideTo(250)),class:"slide-250"},"Slide 250"),y("button",{onClick:e[3]||(e[3]=d=>t.slideTo(500)),class:"slide-500"},"Slide 500"),y("button",{onClick:e[4]||(e[4]=d=>t.append()),class:"append-slides"},"Append Slide")]),i(p,{class:"swiper",modules:t.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:t.setSwiperRef},{default:r(()=>[(L(!0),se(te,null,le(t.slides,(d,u)=>(L(),G(s,{key:u,"virtual-index":u,class:"slide"},{default:r(()=>[l(" Slide "+pe(d),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}const Ct=V($t,[["render",Et],["__scopeId","data-v-4192059a"]]),Mt=W({name:"swiper-example-change-direction",title:"Change direction (→ resize ←)",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){let t=null;return{modules:[ie],setSwiperRef:h=>{t=h},handleResize:()=>{t==null||t.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}});function Tt(t,e,v,h,g,_){const s=x("swiper-slide"),p=x("swiper");return L(),G(p,{class:"swiper",modules:t.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:t.setSwiperRef,onResize:t.handleResize},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}const Pt=V(Mt,[["render",Tt],["__scopeId","data-v-855e23ab"]]),zt=`<template>\r
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
          {{ isSlideClicked(3) ? 'clicked ✅' : 'click me 👆' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 4</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(4)">\r
          {{ isSlideClicked(4) ? 'clicked ✅' : 'click me 👆' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 5</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(5)">\r
          {{ isSlideClicked(5) ? 'clicked ✅' : 'click me 👆' }}\r
        </button>\r
      </swiper-slide>\r
      <swiper-slide class="slide">\r
        <span>Loop Slide 6</span>\r
        <button class="click swiper-no-swiping" @click="handleHwiperSlideClick(6)">\r
          {{ isSlideClicked(6) ? 'clicked ✅' : 'click me 👆' }}\r
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
        <ulink class="link" href="https://github.com/nolimits4web/swiper/discussions">discussions</ulink>\r
        <i class="iconfont icon-link-external"></i>\r
      </swiper-slide>\r
      <swiper-slide class="slide">Slide 3</swiper-slide>\r
      <swiper-slide class="slide">Slide 4</swiper-slide>\r
      <swiper-slide class="slide">Slide 5</swiper-slide>\r
      <swiper-slide class="slide">Slide 6</swiper-slide>\r
      <template #container-start>\r
        <button class="nav-button-prev" :disabled="vSwiperIndex === 0" @click="prevVSwiperSlide">\r
          <i class="iconfont icon-arrow-down"></i>\r
        </button>\r
      </template>\r
      <template #container-end>\r
        <button class="nav-button-next" :disabled="vSwiperIndex === 5 - 1" @click="nextVSwiperSlide">\r
          <i class="iconfont icon-arrow-up"></i>\r
        </button>\r
      </template>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, ref, reactive } from 'vue'\r
  import { Pagination, Navigation, Grid, Mousewheel } from 'swiper/modules'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import type SwiperClass from 'swiper'\r
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
        margin-top: 1.4rem;\r
        padding: 0.5em 1em;\r
        border: 1px dashed $text-divider;\r
        border-radius: $sm-radius;\r
        color: $text-color;\r
        background-color: $header-bg;\r
        opacity: 0.8;\r
        cursor: pointer;\r
        &:hover {\r
          color: $link-color;\r
          opacity: 1;\r
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
      transition:\r
        opacity $transition-time,\r
        visibility $transition-time;\r
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
`,It=`<template>\r
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
`,At=`<template>\r
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
  import { Navigation } from 'swiper/modules'\r
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
`,Lt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Nt=`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ clickable: true, dynamicBullets: true }">\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Dt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,jt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Rt=`<template>\r
  <swiper class="swiper" :modules="modules" :pagination="{ clickable: true, renderBullet: bulletRenderer }">\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Ot=`<template>\r
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
  import { Scrollbar } from 'swiper/modules'\r
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
`,Ht=`<template>\r
  <swiper class="swiper" :modules="modules" direction="vertical" :pagination="{ clickable: true }">\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Yt=`<template>\r
  <swiper class="swiper" :modules="modules" :space-between="30" :pagination="{ clickable: true }">\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Wt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Vt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,qt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Xt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Bt=`<template>\r
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
  import { Pagination, FreeMode } from 'swiper/modules'\r
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
`,Ft=`<template>\r
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
        I am happy to join with you today in what will go down in history as the greatest demonstration for freedom\r
        in the history of our nation.\r
      </p>\r
      <p>\r
        Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation\r
        Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had\r
        been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of\r
        their captivity.\r
      </p>\r
      <p>\r
        But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is\r
        still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years\r
        later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity.\r
        One hundred years later, the Negro is still languishing in the corners of American society and finds himself\r
        an exile in his own land. So we have come here today to dramatize a shameful condition.\r
      </p>\r
      <p>\r
        In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote\r
        the magnificent words of the Constitution and the Declaration of Independence, they were signing a\r
        promissory note to which every American was to fall heir. This note was a promise that all men, yes, black\r
        men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of\r
        happiness.\r
      </p>\r
      <p>\r
        It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are\r
        concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a\r
        check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is\r
        bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this\r
        nation. So we have come to cash this check — a check that will give us upon demand the riches of freedom and\r
        the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of\r
        now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism.\r
        Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate\r
        valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the\r
        quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality\r
        for all of God's children.\r
      </p>\r
      <p>\r
        It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the\r
        Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality.\r
        Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam\r
        and will now be content will have a rude awakening if the nation returns to business as usual. There will be\r
        neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of\r
        revolt will continue to shake the foundations of our nation until the bright day of justice emerges.\r
      </p>\r
      <p>\r
        But there is something that I must say to my people who stand on the warm threshold which leads into the\r
        palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let\r
        us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred.\r
      </p>\r
      <p>\r
        We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our\r
        creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights\r
        of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro\r
        community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by\r
        their presence here today, have come to realize that their destiny is tied up with our destiny and their\r
        freedom is inextricably bound to our freedom. We cannot walk alone.\r
      </p>\r
      <p>\r
        As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are\r
        asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the\r
        Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as\r
        our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the\r
        hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in\r
        New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be\r
        satisfied until justice rolls down like waters and righteousness like a mighty stream.\r
      </p>\r
      <p>\r
        I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have\r
        come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you\r
        battered by the storms of persecution and staggered by the winds of police brutality. You have been the\r
        veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive.\r
      </p>\r
      <p>\r
        Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to\r
        Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can\r
        and will be changed. Let us not wallow in the valley of despair.\r
      </p>\r
      <p>\r
        I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have\r
        a dream. It is a dream deeply rooted in the American dream.\r
      </p>\r
      <p>\r
        I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold\r
        these truths to be self-evident: that all men are created equal."\r
      </p>\r
      <p>\r
        I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former\r
        slave owners will be able to sit down together at the table of brotherhood.\r
      </p>\r
      <p>\r
        I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice,\r
        sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.\r
      </p>\r
      <p>\r
        I have a dream that my four little children will one day live in a nation where they will not be judged by\r
        the color of their skin but by the content of their character.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips\r
        dripping with the words of interposition and nullification; one day right there in Alabama, little black\r
        boys and black girls will be able to join hands with little white boys and white girls as sisters and\r
        brothers.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the\r
        rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord\r
        shall be revealed, and all flesh shall see it together.\r
      </p>\r
      <p>\r
        This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew\r
        out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling\r
        discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work\r
        together, to pray together, to struggle together, to go to jail together, to stand up for freedom together,\r
        knowing that we will be free one day.\r
      </p>\r
      <p>\r
        This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis\r
        of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride,\r
        from every mountainside, let freedom ring."\r
      </p>\r
      <p>\r
        And if America is to be a great nation this must become true. So let freedom ring from the prodigious\r
        hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the\r
        heightening Alleghenies of Pennsylvania!\r
      </p>\r
      <p>Let freedom ring from the snowcapped Rockies of Colorado!</p>\r
      <p>Let freedom ring from the curvaceous slopes of California!</p>\r
      <p>But not only that; let freedom ring from Stone Mountain of Georgia!</p>\r
      <p>Let freedom ring from Lookout Mountain of Tennessee!</p>\r
      <p>\r
        Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring.\r
      </p>\r
      <p>\r
        And when this happens, When we allow freedom to ring, when we let it ring from every village and every\r
        hamlet, from every state and every city, we will be able to speed up that day when all of God's children,\r
        black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing\r
        in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at\r
        last!"\r
      </p>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules'\r
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
`,Gt=`<template>\r
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
  import { Pagination, Grid } from 'swiper/modules'\r
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
`,Ut=`<template>\r
  <swiper class="swiper swiper-h" :modules="modules" :space-between="50" :pagination="{ clickable: true }">\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Kt=`<template>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,Zt=`<template>\r
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
  import { Pagination, Navigation } from 'swiper/modules'\r
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
`,Jt=`<template>\r
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
  import { Pagination, Navigation } from 'swiper/modules'\r
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
`,Qt=`<template>\r
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
  import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules'\r
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
`,el=`<template>\r
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
  import { Pagination, Navigation, EffectFade } from 'swiper/modules'\r
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
`,sl=`<template>\r
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
  import { Pagination, EffectCoverflow } from 'swiper/modules'\r
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
`,rl=`<template>\r
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
  import { Pagination, EffectCube } from 'swiper/modules'\r
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
`,il=`<template>\r
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
  import { Pagination, Navigation, EffectFlip } from 'swiper/modules'\r
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
`,nl=`<template>\r
  <div class="creative-example">\r
    <div class="toolbar">\r
      <button v-for="(_, index) in effects" :key="index" @click="setEffect(index)">\r
        Effect {{ index + 1 }}\r
        {{ index === effectIndex ? '⎷' : '' }}\r
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
  import { Pagination, EffectCreative } from 'swiper/modules'\r
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
`,tl=`<template>\r
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
  import { Pagination, Navigation, Keyboard } from 'swiper/modules'\r
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
`,ll=`<template>\r
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
  import { Pagination, Mousewheel } from 'swiper/modules'\r
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
`,al=`<template>\r
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
  import { Pagination, Navigation, Autoplay } from 'swiper/modules'\r
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
`,ol=`<template>\r
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
      <swiper-slide v-for="slide in slides" :key="slide" class="slide">Slide {{ slide }}</swiper-slide>\r
    </swiper>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, reactive } from 'vue'\r
  // https://swiperjs.com/swiper-api#manipulation\r
  // MARK: Manipulation module adds useful Swiper methods to manipulate slides. It makes sense to use it only with Swiper Core version, not intended to be uses with Swiper Angular, React, Svelte or Vue.\r
  import { Pagination, Navigation } from 'swiper/modules'\r
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
        slides,\r
        modules: [Pagination, Navigation],\r
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
`,dl=`<template>\r
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
  import { Navigation, Thumbs } from 'swiper/modules'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import type SwiperClass from 'swiper'\r
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
`,pl=`<template>\r
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
  import { Pagination, Navigation, Zoom } from 'swiper/modules'\r
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
`,cl=`<template>\r
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
    <swiper-slide v-for="slide in 8" :key="slide" class="slide" :lazy="true">\r
      <img :src="\`/images/example/\${slide}.jpg\`" loading="lazy" class="swiper-lazy" />\r
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Pagination, Navigation } from 'swiper/modules'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import 'swiper/css'\r
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
`,ul=`<template>\r
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus\r
          felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer\r
          laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis\r
          rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean\r
          feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 2</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus\r
          felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer\r
          laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis\r
          rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean\r
          feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 3</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus\r
          felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer\r
          laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis\r
          rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean\r
          feugiat non eros quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent } from 'vue'\r
  import { Parallax, Pagination, Navigation } from 'swiper/modules'\r
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
`,ml=`<template>\r
  <swiper class="swiper" :modules="modules" :navigation="true" :pagination="{ clickable: true }" dir="rtl">\r
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
  import { Pagination, Navigation } from 'swiper/modules'\r
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
`,fl=`<template>\r
  <div class="tip">→ Resize the browser window ←</div>\r
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
  import { Pagination } from 'swiper/modules'\r
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
`,wl=`<template>\r
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
  import { Pagination, Navigation } from 'swiper/modules'\r
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
`,hl=`<template>\r
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
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import type SwiperClass from 'swiper'\r
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
`,gl=`<template>\r
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
    <swiper-slide v-for="(slideContent, index) in slides" :key="index" :virtual-index="index" class="slide">\r
      Slide {{ slideContent }}\r
    </swiper-slide>\r
  </swiper>\r
</template>\r
\r
<script lang="ts">\r
  import { defineComponent, reactive } from 'vue'\r
  import { Pagination, Navigation, Virtual } from 'swiper/modules'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import type SwiperClass from 'swiper'\r
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
`,vl=`<template>\r
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
  import { Navigation } from 'swiper/modules'\r
  import { Swiper, SwiperSlide } from 'swiper/vue'\r
  import type SwiperClass from 'swiper'\r
  import 'swiper/css'\r
  import 'swiper/css/navigation'\r
\r
  export default defineComponent({\r
    name: 'swiper-example-change-direction',\r
    title: 'Change direction (→ resize ←)',\r
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
`,Qe=Object.assign({"./01-advance.vue":Qs,"./02-default.vue":rr,"./03-navigation.vue":tr,"./04-pagination.vue":or,"./05-pagination-dynamic.vue":cr,"./06-pagination-progress.vue":fr,"./07-pagination-fraction.vue":gr,"./08-pagination-custom.vue":Sr,"./09-scrollbar.vue":xr,"./10-vertical.vue":Er,"./11-space-between.vue":Tr,"./12-slides-per-view.vue":Ir,"./13-slides-per-view-auto.vue":Nr,"./14-centered.vue":Rr,"./15-centered-auto.vue":Yr,"./16-freemode.vue":qr,"./17-scroll-container.vue":xi,"./18-slides-per-column.vue":Ei,"./19-nested.vue":Ti,"./20-grab-cursor.vue":Ii,"./21-infinite-loop.vue":Ni,"./22-infinite-loop-with-slides-per-group.vue":Ri,"./23-slides-per-group-skip.vue":Yi,"./24-effect-fade.vue":Xi,"./25-effect-coverflow.vue":Ki,"./26-effect-cube.vue":sn,"./27-effect-flip.vue":an,"./28-effect-creative.vue":fn,"./29-keyboard-control.vue":gn,"./30-mousewheel-control.vue":Sn,"./31-autoplay.vue":xn,"./32-dynamic-slides.vue":Mn,"./33-thumbs-gallery.vue":Ln,"./34-zoom.vue":On,"./35-lazy-load-images.vue":Xn,"./36-parallax.vue":nt,"./37-rtl.vue":at,"./38-responsive-breakpoints.vue":ut,"./39-autoheight.vue":wt,"./40-slideable-menu.vue":xt,"./41-virtual-slides.vue":Ct,"./42-change-direction.vue":Pt}),_l=Object.assign({"./01-advance.vue":zt,"./02-default.vue":It,"./03-navigation.vue":At,"./04-pagination.vue":Lt,"./05-pagination-dynamic.vue":Nt,"./06-pagination-progress.vue":Dt,"./07-pagination-fraction.vue":jt,"./08-pagination-custom.vue":Rt,"./09-scrollbar.vue":Ot,"./10-vertical.vue":Ht,"./11-space-between.vue":Yt,"./12-slides-per-view.vue":Wt,"./13-slides-per-view-auto.vue":Vt,"./14-centered.vue":qt,"./15-centered-auto.vue":Xt,"./16-freemode.vue":Bt,"./17-scroll-container.vue":Ft,"./18-slides-per-column.vue":Gt,"./19-nested.vue":Ut,"./20-grab-cursor.vue":Kt,"./21-infinite-loop.vue":Zt,"./22-infinite-loop-with-slides-per-group.vue":Jt,"./23-slides-per-group-skip.vue":Qt,"./24-effect-fade.vue":el,"./25-effect-coverflow.vue":sl,"./26-effect-cube.vue":rl,"./27-effect-flip.vue":il,"./28-effect-creative.vue":nl,"./29-keyboard-control.vue":tl,"./30-mousewheel-control.vue":ll,"./31-autoplay.vue":al,"./32-dynamic-slides.vue":ol,"./33-thumbs-gallery.vue":dl,"./34-zoom.vue":pl,"./35-lazy-load-images.vue":cl,"./36-parallax.vue":ul,"./37-rtl.vue":ml,"./38-responsive-breakpoints.vue":fl,"./39-autoheight.vue":wl,"./40-slideable-menu.vue":hl,"./41-virtual-slides.vue":gl,"./42-change-direction.vue":vl}),Sl=Object.keys(Qe).map(t=>({component:Qe[t],raw:_l[t],language:"vue"})),bl={class:"swiper-example"},yl=W({__name:"vue-awesome-swiper",setup(t){const{repository:e,route:v,packages:h}=ds.VueAwesomeSwiper,g=Sl.map(ws);return ps(_s({title:Ss(e),keywords:[bs(e),"How to use Swiper on vue3?"].join(","),description:ys(e),ogUrl:xs(v),ogImage:$s(e),ogImageWidth:1200,ogImageHeight:600})),(_,s)=>(L(),G(hs,{repository:fe(e)},{default:r(()=>[i(vs,{repository:fe(e),packages:fe(h),"header-ad-provider":fe(gs).GoogleAdSense},{actions:r(()=>[i(ze,{icon:"doc",text:"Vue(2) Examples",href:fe(ks)(fe(e))},null,8,["href"]),i(ze,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),i(ze,{icon:"doc",text:"Swiper Vue(3) Component",href:"https://swiperjs.com/vue"}),i(ze,{icon:"discussions",text:"Swiper Discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:r(()=>[i(Es,{examples:fe(g)},{component:r(p=>[y("div",bl,[(L(),G(os(p.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages","header-ad-provider"])]),_:1},8,["repository"]))}}),Tl=V(yl,[["__scopeId","data-v-b2748395"]]);export{Tl as default};
