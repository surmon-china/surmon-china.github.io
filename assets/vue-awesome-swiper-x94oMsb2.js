import{d as Y,r as Le,f as Se,j as E,a as I,c as J,s as i,y as r,e as C,t as le,S as Je,k as l,p as we,b as he,x as F,m as te,F as se,n as qe,q as Qe,O as es,K as ss,z as ce,B as rs,P as is}from"./index-OftrGeBT.js";import{_ as V,u as ts}from"./_plugin-vue_export-helper-tg6UUEsf.js";import{a as me,s as ns,e as fe,c as de,b as Ge,d as be,f as Me,h as Fe,i as ue,j as ls,n as as,k as Xe,l as os,m as Ae,o as Ee,p as ge,S as q,q as X,P as U,r as Ne,g as ds,M as ps,H as cs}from"./index-v_z_4G4c.js";import{n as us,g as ms,a as fs,b as ws,c as hs,d as gs,e as vs}from"./navbar-pKqhJM5o.js";import{V as _s}from"./vue-qV_GW2VR.js";import{H as Ce}from"./link-7AcicRzc.js";import{H as bs}from"./examples-VwG8KTjk.js";function Ss(n){let{swiper:e,extendParams:_,on:w,emit:v}=n;_({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let g;const s=me();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const p=s.createElement("div");function d(h,m){const c=e.params.virtual;if(c.cache&&e.virtual.cache[m])return e.virtual.cache[m];let f;return c.renderSlide?(f=c.renderSlide.call(e,h,m),typeof f=="string"&&(p.innerHTML=f,f=p.children[0])):e.isElement?f=de("swiper-slide"):f=de("div",e.params.slideClass),f.setAttribute("data-swiper-slide-index",m),c.renderSlide||(f.innerHTML=h),c.cache&&(e.virtual.cache[m]=f),f}function u(h){const{slidesPerView:m,slidesPerGroup:c,centeredSlides:f,loop:x}=e.params,{addSlidesBefore:S,addSlidesAfter:z}=e.params.virtual,{from:D,to:T,slides:N,slidesGrid:j,offset:A}=e.virtual;e.params.cssMode||e.updateActiveIndex();const W=e.activeIndex||0;let B;e.rtlTranslate?B="right":B=e.isHorizontal()?"left":"top";let P,O;f?(P=Math.floor(m/2)+c+z,O=Math.floor(m/2)+c+S):(P=m+(c-1)+z,O=(x?m:c)+S);let M=W-O,L=W+P;x||(M=Math.max(M,0),L=Math.min(L,N.length-1));let H=(e.slidesGrid[M]||0)-(e.slidesGrid[0]||0);x&&W>=O?(M-=O,f||(H+=e.slidesGrid[0])):x&&W<O&&(M=-O,f&&(H+=e.slidesGrid[0])),Object.assign(e.virtual,{from:M,to:L,offset:H,slidesGrid:e.slidesGrid,slidesBefore:O,slidesAfter:P});function k(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),v("virtualUpdate")}if(D===M&&T===L&&!h){e.slidesGrid!==j&&H!==A&&e.slides.forEach(R=>{R.style[B]=`${H-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),v("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:H,from:M,to:L,slides:function(){const Z=[];for(let ie=M;ie<=L;ie+=1)Z.push(N[ie]);return Z}()}),e.params.virtual.renderExternalUpdate?k():v("virtualUpdate");return}const y=[],$=[],G=R=>{let Z=R;return R<0?Z=N.length+R:Z>=N.length&&(Z=Z-N.length),Z};if(h)e.slides.filter(R=>R.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(R=>{R.remove()});else for(let R=D;R<=T;R+=1)if(R<M||R>L){const Z=G(R);e.slides.filter(ie=>ie.matches(`.${e.params.slideClass}[data-swiper-slide-index="${Z}"], swiper-slide[data-swiper-slide-index="${Z}"]`)).forEach(ie=>{ie.remove()})}const Q=x?-N.length:0,re=x?N.length*2:N.length;for(let R=Q;R<re;R+=1)if(R>=M&&R<=L){const Z=G(R);typeof T>"u"||h?$.push(Z):(R>T&&$.push(Z),R<D&&y.push(Z))}if($.forEach(R=>{e.slidesEl.append(d(N[R],R))}),x)for(let R=y.length-1;R>=0;R-=1){const Z=y[R];e.slidesEl.prepend(d(N[Z],Z))}else y.sort((R,Z)=>Z-R),y.forEach(R=>{e.slidesEl.prepend(d(N[R],R))});fe(e.slidesEl,".swiper-slide, swiper-slide").forEach(R=>{R.style[B]=`${H-Math.abs(e.cssOverflowAdjustment())}px`}),k()}function o(h){if(typeof h=="object"&&"length"in h)for(let m=0;m<h.length;m+=1)h[m]&&e.virtual.slides.push(h[m]);else e.virtual.slides.push(h);u(!0)}function t(h){const m=e.activeIndex;let c=m+1,f=1;if(Array.isArray(h)){for(let x=0;x<h.length;x+=1)h[x]&&e.virtual.slides.unshift(h[x]);c=m+h.length,f=h.length}else e.virtual.slides.unshift(h);if(e.params.virtual.cache){const x=e.virtual.cache,S={};Object.keys(x).forEach(z=>{const D=x[z],T=D.getAttribute("data-swiper-slide-index");T&&D.setAttribute("data-swiper-slide-index",parseInt(T,10)+f),S[parseInt(z,10)+f]=D}),e.virtual.cache=S}u(!0),e.slideTo(c,0)}function a(h){if(typeof h>"u"||h===null)return;let m=e.activeIndex;if(Array.isArray(h))for(let c=h.length-1;c>=0;c-=1)e.params.virtual.cache&&(delete e.virtual.cache[h[c]],Object.keys(e.virtual.cache).forEach(f=>{f>h&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(h[c],1),h[c]<m&&(m-=1),m=Math.max(m,0);else e.params.virtual.cache&&(delete e.virtual.cache[h],Object.keys(e.virtual.cache).forEach(c=>{c>h&&(e.virtual.cache[c-1]=e.virtual.cache[c],e.virtual.cache[c-1].setAttribute("data-swiper-slide-index",c-1),delete e.virtual.cache[c])})),e.virtual.slides.splice(h,1),h<m&&(m-=1),m=Math.max(m,0);u(!0),e.slideTo(m,0)}function b(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),u(!0),e.slideTo(0,0)}w("beforeInit",()=>{if(!e.params.virtual.enabled)return;let h;if(typeof e.passedParams.virtual.slides>"u"){const m=[...e.slidesEl.children].filter(c=>c.matches(`.${e.params.slideClass}, swiper-slide`));m&&m.length&&(e.virtual.slides=[...m],h=!0,m.forEach((c,f)=>{c.setAttribute("data-swiper-slide-index",f),e.virtual.cache[f]=c,c.remove()}))}h||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,u()}),w("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(g),g=setTimeout(()=>{u()},100)):u())}),w("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&ns(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:o,prependSlide:t,removeSlide:a,removeAllSlides:b,update:u})}function Ue(n){let{swiper:e,extendParams:_,on:w,emit:v}=n;const g=me(),s=Ge();e.keyboard={enabled:!1},_({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(o){if(!e.enabled)return;const{rtlTranslate:t}=e;let a=o;a.originalEvent&&(a=a.originalEvent);const b=a.keyCode||a.charCode,h=e.params.keyboard.pageUpDown,m=h&&b===33,c=h&&b===34,f=b===37,x=b===39,S=b===38,z=b===40;if(!e.allowSlideNext&&(e.isHorizontal()&&x||e.isVertical()&&z||c)||!e.allowSlidePrev&&(e.isHorizontal()&&f||e.isVertical()&&S||m))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)&&!(g.activeElement&&g.activeElement.nodeName&&(g.activeElement.nodeName.toLowerCase()==="input"||g.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(m||c||f||x||S||z)){let D=!1;if(be(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&be(e.el,`.${e.params.slideActiveClass}`).length===0)return;const T=e.el,N=T.clientWidth,j=T.clientHeight,A=s.innerWidth,W=s.innerHeight,B=Me(T);t&&(B.left-=T.scrollLeft);const P=[[B.left,B.top],[B.left+N,B.top],[B.left,B.top+j],[B.left+N,B.top+j]];for(let O=0;O<P.length;O+=1){const M=P[O];if(M[0]>=0&&M[0]<=A&&M[1]>=0&&M[1]<=W){if(M[0]===0&&M[1]===0)continue;D=!0}}if(!D)return}e.isHorizontal()?((m||c||f||x)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||x)&&!t||(m||f)&&t)&&e.slideNext(),((m||f)&&!t||(c||x)&&t)&&e.slidePrev()):((m||c||S||z)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||z)&&e.slideNext(),(m||S)&&e.slidePrev()),v("keyPress",b)}}function d(){e.keyboard.enabled||(g.addEventListener("keydown",p),e.keyboard.enabled=!0)}function u(){e.keyboard.enabled&&(g.removeEventListener("keydown",p),e.keyboard.enabled=!1)}w("init",()=>{e.params.keyboard.enabled&&d()}),w("destroy",()=>{e.keyboard.enabled&&u()}),Object.assign(e.keyboard,{enable:d,disable:u})}function ee(n){let{swiper:e,extendParams:_,on:w,emit:v}=n;_({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const g=m=>(Array.isArray(m)?m:[m]).filter(c=>!!c);function s(m){let c;return m&&typeof m=="string"&&e.isElement&&(c=e.el.querySelector(m),c)?c:(m&&(typeof m=="string"&&(c=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&c.length>1&&e.el.querySelectorAll(m).length===1&&(c=e.el.querySelector(m))),m&&!c?m:c)}function p(m,c){const f=e.params.navigation;m=g(m),m.forEach(x=>{x&&(x.classList[c?"add":"remove"](...f.disabledClass.split(" ")),x.tagName==="BUTTON"&&(x.disabled=c),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](f.lockClass))})}function d(){const{nextEl:m,prevEl:c}=e.navigation;if(e.params.loop){p(c,!1),p(m,!1);return}p(c,e.isBeginning&&!e.params.rewind),p(m,e.isEnd&&!e.params.rewind)}function u(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),v("navigationPrev"))}function o(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),v("navigationNext"))}function t(){const m=e.params.navigation;if(e.params.navigation=Fe(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let c=s(m.nextEl),f=s(m.prevEl);Object.assign(e.navigation,{nextEl:c,prevEl:f}),c=g(c),f=g(f);const x=(S,z)=>{S&&S.addEventListener("click",z==="next"?o:u),!e.enabled&&S&&S.classList.add(...m.lockClass.split(" "))};c.forEach(S=>x(S,"next")),f.forEach(S=>x(S,"prev"))}function a(){let{nextEl:m,prevEl:c}=e.navigation;m=g(m),c=g(c);const f=(x,S)=>{x.removeEventListener("click",S==="next"?o:u),x.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(x=>f(x,"next")),c.forEach(x=>f(x,"prev"))}w("init",()=>{e.params.navigation.enabled===!1?h():(t(),d())}),w("toEdge fromEdge lock unlock",()=>{d()}),w("destroy",()=>{a()}),w("enable disable",()=>{let{nextEl:m,prevEl:c}=e.navigation;if(m=g(m),c=g(c),e.enabled){d();return}[...m,...c].filter(f=>!!f).forEach(f=>f.classList.add(e.params.navigation.lockClass))}),w("click",(m,c)=>{let{nextEl:f,prevEl:x}=e.navigation;f=g(f),x=g(x);const S=c.target;if(e.params.navigation.hideOnClick&&!x.includes(S)&&!f.includes(S)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===S||e.pagination.el.contains(S)))return;let z;f.length?z=f[0].classList.contains(e.params.navigation.hiddenClass):x.length&&(z=x[0].classList.contains(e.params.navigation.hiddenClass)),v(z===!0?"navigationShow":"navigationHide"),[...f,...x].filter(D=>!!D).forEach(D=>D.classList.toggle(e.params.navigation.hiddenClass))}});const b=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),t(),d()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),a()};Object.assign(e.navigation,{enable:b,disable:h,update:d,init:t,destroy:a})}function De(n){let{swiper:e,extendParams:_,on:w,emit:v}=n;const g=me();let s=!1,p=null,d=null,u,o,t,a;_({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function b(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:P,rtlTranslate:O}=e,{dragEl:M,el:L}=P,H=e.params.scrollbar,k=e.params.loop?e.progressLoop:e.progress;let y=o,$=(t-o)*k;O?($=-$,$>0?(y=o-$,$=0):-$+o>t&&(y=t+$)):$<0?(y=o+$,$=0):$+o>t&&(y=t-$),e.isHorizontal()?(M.style.transform=`translate3d(${$}px, 0, 0)`,M.style.width=`${y}px`):(M.style.transform=`translate3d(0px, ${$}px, 0)`,M.style.height=`${y}px`),H.hide&&(clearTimeout(p),L.style.opacity=1,p=setTimeout(()=>{L.style.opacity=0,L.style.transitionDuration="400ms"},1e3))}function h(P){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${P}ms`)}function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:P}=e,{dragEl:O,el:M}=P;O.style.width="",O.style.height="",t=e.isHorizontal()?M.offsetWidth:M.offsetHeight,a=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?o=t*a:o=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?O.style.width=`${o}px`:O.style.height=`${o}px`,a>=1?M.style.display="none":M.style.display="",e.params.scrollbar.hide&&(M.style.opacity=0),e.params.watchOverflow&&e.enabled&&P.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function c(P){return e.isHorizontal()?P.clientX:P.clientY}function f(P){const{scrollbar:O,rtlTranslate:M}=e,{el:L}=O;let H;H=(c(P)-Me(L)[e.isHorizontal()?"left":"top"]-(u!==null?u:o/2))/(t-o),H=Math.max(Math.min(H,1),0),M&&(H=1-H);const k=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*H;e.updateProgress(k),e.setTranslate(k),e.updateActiveIndex(),e.updateSlidesClasses()}function x(P){const O=e.params.scrollbar,{scrollbar:M,wrapperEl:L}=e,{el:H,dragEl:k}=M;s=!0,u=P.target===k?c(P)-P.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,P.preventDefault(),P.stopPropagation(),L.style.transitionDuration="100ms",k.style.transitionDuration="100ms",f(P),clearTimeout(d),H.style.transitionDuration="0ms",O.hide&&(H.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),v("scrollbarDragStart",P)}function S(P){const{scrollbar:O,wrapperEl:M}=e,{el:L,dragEl:H}=O;s&&(P.preventDefault?P.preventDefault():P.returnValue=!1,f(P),M.style.transitionDuration="0ms",L.style.transitionDuration="0ms",H.style.transitionDuration="0ms",v("scrollbarDragMove",P))}function z(P){const O=e.params.scrollbar,{scrollbar:M,wrapperEl:L}=e,{el:H}=M;s&&(s=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",L.style.transitionDuration=""),O.hide&&(clearTimeout(d),d=as(()=>{H.style.opacity=0,H.style.transitionDuration="400ms"},1e3)),v("scrollbarDragEnd",P),O.snapOnRelease&&e.slideToClosest())}function D(P){const{scrollbar:O,params:M}=e,L=O.el;if(!L)return;const H=L,k=M.passiveListeners?{passive:!1,capture:!1}:!1,y=M.passiveListeners?{passive:!0,capture:!1}:!1;if(!H)return;const $=P==="on"?"addEventListener":"removeEventListener";H[$]("pointerdown",x,k),g[$]("pointermove",S,k),g[$]("pointerup",z,y)}function T(){!e.params.scrollbar.el||!e.scrollbar.el||D("on")}function N(){!e.params.scrollbar.el||!e.scrollbar.el||D("off")}function j(){const{scrollbar:P,el:O}=e;e.params.scrollbar=Fe(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const M=e.params.scrollbar;if(!M.el)return;let L;if(typeof M.el=="string"&&e.isElement&&(L=e.el.querySelector(M.el)),!L&&typeof M.el=="string"){if(L=g.querySelectorAll(M.el),!L.length)return}else L||(L=M.el);e.params.uniqueNavElements&&typeof M.el=="string"&&L.length>1&&O.querySelectorAll(M.el).length===1&&(L=O.querySelector(M.el)),L.length>0&&(L=L[0]),L.classList.add(e.isHorizontal()?M.horizontalClass:M.verticalClass);let H;L&&(H=L.querySelector(ls(e.params.scrollbar.dragClass)),H||(H=de("div",e.params.scrollbar.dragClass),L.append(H))),Object.assign(P,{el:L,dragEl:H}),M.draggable&&T(),L&&L.classList[e.enabled?"remove":"add"](...ue(e.params.scrollbar.lockClass))}function A(){const P=e.params.scrollbar,O=e.scrollbar.el;O&&O.classList.remove(...ue(e.isHorizontal()?P.horizontalClass:P.verticalClass)),N()}w("init",()=>{e.params.scrollbar.enabled===!1?B():(j(),m(),b())}),w("update resize observerUpdate lock unlock",()=>{m()}),w("setTranslate",()=>{b()}),w("setTransition",(P,O)=>{h(O)}),w("enable disable",()=>{const{el:P}=e.scrollbar;P&&P.classList[e.enabled?"remove":"add"](...ue(e.params.scrollbar.lockClass))}),w("destroy",()=>{A()});const W=()=>{e.el.classList.remove(...ue(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...ue(e.params.scrollbar.scrollbarDisabledClass)),j(),m(),b()},B=()=>{e.el.classList.add(...ue(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...ue(e.params.scrollbar.scrollbarDisabledClass)),A()};Object.assign(e.scrollbar,{enable:W,disable:B,updateSize:m,setTranslate:b,init:j,destroy:A})}function ys(n){let{swiper:e,extendParams:_,on:w}=n;_({parallax:{enabled:!1}});const v="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",g=(d,u)=>{const{rtl:o}=e,t=o?-1:1,a=d.getAttribute("data-swiper-parallax")||"0";let b=d.getAttribute("data-swiper-parallax-x"),h=d.getAttribute("data-swiper-parallax-y");const m=d.getAttribute("data-swiper-parallax-scale"),c=d.getAttribute("data-swiper-parallax-opacity"),f=d.getAttribute("data-swiper-parallax-rotate");if(b||h?(b=b||"0",h=h||"0"):e.isHorizontal()?(b=a,h="0"):(h=a,b="0"),b.indexOf("%")>=0?b=`${parseInt(b,10)*u*t}%`:b=`${b*u*t}px`,h.indexOf("%")>=0?h=`${parseInt(h,10)*u}%`:h=`${h*u}px`,typeof c<"u"&&c!==null){const S=c-(c-1)*(1-Math.abs(u));d.style.opacity=S}let x=`translate3d(${b}, ${h}, 0px)`;if(typeof m<"u"&&m!==null){const S=m-(m-1)*(1-Math.abs(u));x+=` scale(${S})`}if(f&&typeof f<"u"&&f!==null){const S=f*u*-1;x+=` rotate(${S}deg)`}d.style.transform=x},s=()=>{const{el:d,slides:u,progress:o,snapGrid:t,isElement:a}=e,b=fe(d,v);e.isElement&&b.push(...fe(e.hostEl,v)),b.forEach(h=>{g(h,o)}),u.forEach((h,m)=>{let c=h.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(c+=Math.ceil(m/2)-o*(t.length-1)),c=Math.min(Math.max(c,-1),1),h.querySelectorAll(`${v}, [data-swiper-parallax-rotate]`).forEach(f=>{g(f,c)})})},p=function(d){d===void 0&&(d=e.params.speed);const{el:u,hostEl:o}=e,t=[...u.querySelectorAll(v)];e.isElement&&t.push(...o.querySelectorAll(v)),t.forEach(a=>{let b=parseInt(a.getAttribute("data-swiper-parallax-duration"),10)||d;d===0&&(b=0),a.style.transitionDuration=`${b}ms`})};w("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),w("init",()=>{e.params.parallax.enabled&&s()}),w("setTranslate",()=>{e.params.parallax.enabled&&s()}),w("setTransition",(d,u)=>{e.params.parallax.enabled&&p(u)})}function xs(n){let{swiper:e,extendParams:_,on:w,emit:v}=n;const g=Ge();_({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let s=1,p=!1,d,u;const o=[],t={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},a={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},b={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let h=1;Object.defineProperty(e.zoom,"scale",{get(){return h},set(k){if(h!==k){const y=t.imageEl,$=t.slideEl;v("zoomChange",k,y,$)}h=k}});function m(){if(o.length<2)return 1;const k=o[0].pageX,y=o[0].pageY,$=o[1].pageX,G=o[1].pageY;return Math.sqrt(($-k)**2+(G-y)**2)}function c(){if(o.length<2)return{x:null,y:null};const k=t.imageEl.getBoundingClientRect();return[(o[0].pageX+(o[1].pageX-o[0].pageX)/2-k.x-g.scrollX)/s,(o[0].pageY+(o[1].pageY-o[0].pageY)/2-k.y-g.scrollY)/s]}function f(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function x(k){const y=f();return!!(k.target.matches(y)||e.slides.filter($=>$.contains(k.target)).length>0)}function S(k){const y=`.${e.params.zoom.containerClass}`;return!!(k.target.matches(y)||[...e.hostEl.querySelectorAll(y)].filter($=>$.contains(k.target)).length>0)}function z(k){if(k.pointerType==="mouse"&&o.splice(0,o.length),!x(k))return;const y=e.params.zoom;if(d=!1,u=!1,o.push(k),!(o.length<2)){if(d=!0,t.scaleStart=m(),!t.slideEl){t.slideEl=k.target.closest(`.${e.params.slideClass}, swiper-slide`),t.slideEl||(t.slideEl=e.slides[e.activeIndex]);let $=t.slideEl.querySelector(`.${y.containerClass}`);if($&&($=$.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),t.imageEl=$,$?t.imageWrapEl=be(t.imageEl,`.${y.containerClass}`)[0]:t.imageWrapEl=void 0,!t.imageWrapEl){t.imageEl=void 0;return}t.maxRatio=t.imageWrapEl.getAttribute("data-swiper-zoom")||y.maxRatio}if(t.imageEl){const[$,G]=c();t.originX=$,t.originY=G,t.imageEl.style.transitionDuration="0ms"}p=!0}}function D(k){if(!x(k))return;const y=e.params.zoom,$=e.zoom,G=o.findIndex(Q=>Q.pointerId===k.pointerId);G>=0&&(o[G]=k),!(o.length<2)&&(u=!0,t.scaleMove=m(),t.imageEl&&($.scale=t.scaleMove/t.scaleStart*s,$.scale>t.maxRatio&&($.scale=t.maxRatio-1+($.scale-t.maxRatio+1)**.5),$.scale<y.minRatio&&($.scale=y.minRatio+1-(y.minRatio-$.scale+1)**.5),t.imageEl.style.transform=`translate3d(0,0,0) scale(${$.scale})`))}function T(k){if(!x(k)||k.pointerType==="mouse"&&k.type==="pointerout")return;const y=e.params.zoom,$=e.zoom,G=o.findIndex(Q=>Q.pointerId===k.pointerId);G>=0&&o.splice(G,1),!(!d||!u)&&(d=!1,u=!1,t.imageEl&&($.scale=Math.max(Math.min($.scale,t.maxRatio),y.minRatio),t.imageEl.style.transitionDuration=`${e.params.speed}ms`,t.imageEl.style.transform=`translate3d(0,0,0) scale(${$.scale})`,s=$.scale,p=!1,$.scale>1&&t.slideEl?t.slideEl.classList.add(`${y.zoomedSlideClass}`):$.scale<=1&&t.slideEl&&t.slideEl.classList.remove(`${y.zoomedSlideClass}`),$.scale===1&&(t.originX=0,t.originY=0,t.slideEl=void 0)))}function N(k){const y=e.device;if(!t.imageEl||a.isTouched)return;y.android&&k.cancelable&&k.preventDefault(),a.isTouched=!0;const $=o.length>0?o[0]:k;a.touchesStart.x=$.pageX,a.touchesStart.y=$.pageY}function j(k){if(!x(k)||!S(k))return;const y=e.zoom;if(!t.imageEl||!a.isTouched||!t.slideEl)return;a.isMoved||(a.width=t.imageEl.offsetWidth,a.height=t.imageEl.offsetHeight,a.startX=Xe(t.imageWrapEl,"x")||0,a.startY=Xe(t.imageWrapEl,"y")||0,t.slideWidth=t.slideEl.offsetWidth,t.slideHeight=t.slideEl.offsetHeight,t.imageWrapEl.style.transitionDuration="0ms");const $=a.width*y.scale,G=a.height*y.scale;if($<t.slideWidth&&G<t.slideHeight)return;if(a.minX=Math.min(t.slideWidth/2-$/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-G/2,0),a.maxY=-a.minY,a.touchesCurrent.x=o.length>0?o[0].pageX:k.pageX,a.touchesCurrent.y=o.length>0?o[0].pageY:k.pageY,Math.max(Math.abs(a.touchesCurrent.x-a.touchesStart.x),Math.abs(a.touchesCurrent.y-a.touchesStart.y))>5&&(e.allowClick=!1),!a.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(a.minX)===Math.floor(a.startX)&&a.touchesCurrent.x<a.touchesStart.x||Math.floor(a.maxX)===Math.floor(a.startX)&&a.touchesCurrent.x>a.touchesStart.x)){a.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(a.minY)===Math.floor(a.startY)&&a.touchesCurrent.y<a.touchesStart.y||Math.floor(a.maxY)===Math.floor(a.startY)&&a.touchesCurrent.y>a.touchesStart.y)){a.isTouched=!1;return}}k.cancelable&&k.preventDefault(),k.stopPropagation(),a.isMoved=!0;const re=(y.scale-s)/(t.maxRatio-e.params.zoom.minRatio),{originX:R,originY:Z}=t;a.currentX=a.touchesCurrent.x-a.touchesStart.x+a.startX+re*(a.width-R*2),a.currentY=a.touchesCurrent.y-a.touchesStart.y+a.startY+re*(a.height-Z*2),a.currentX<a.minX&&(a.currentX=a.minX+1-(a.minX-a.currentX+1)**.8),a.currentX>a.maxX&&(a.currentX=a.maxX-1+(a.currentX-a.maxX+1)**.8),a.currentY<a.minY&&(a.currentY=a.minY+1-(a.minY-a.currentY+1)**.8),a.currentY>a.maxY&&(a.currentY=a.maxY-1+(a.currentY-a.maxY+1)**.8),b.prevPositionX||(b.prevPositionX=a.touchesCurrent.x),b.prevPositionY||(b.prevPositionY=a.touchesCurrent.y),b.prevTime||(b.prevTime=Date.now()),b.x=(a.touchesCurrent.x-b.prevPositionX)/(Date.now()-b.prevTime)/2,b.y=(a.touchesCurrent.y-b.prevPositionY)/(Date.now()-b.prevTime)/2,Math.abs(a.touchesCurrent.x-b.prevPositionX)<2&&(b.x=0),Math.abs(a.touchesCurrent.y-b.prevPositionY)<2&&(b.y=0),b.prevPositionX=a.touchesCurrent.x,b.prevPositionY=a.touchesCurrent.y,b.prevTime=Date.now(),t.imageWrapEl.style.transform=`translate3d(${a.currentX}px, ${a.currentY}px,0)`}function A(){const k=e.zoom;if(!t.imageEl)return;if(!a.isTouched||!a.isMoved){a.isTouched=!1,a.isMoved=!1;return}a.isTouched=!1,a.isMoved=!1;let y=300,$=300;const G=b.x*y,Q=a.currentX+G,re=b.y*$,R=a.currentY+re;b.x!==0&&(y=Math.abs((Q-a.currentX)/b.x)),b.y!==0&&($=Math.abs((R-a.currentY)/b.y));const Z=Math.max(y,$);a.currentX=Q,a.currentY=R;const ie=a.width*k.scale,ne=a.height*k.scale;a.minX=Math.min(t.slideWidth/2-ie/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-ne/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.imageWrapEl.style.transitionDuration=`${Z}ms`,t.imageWrapEl.style.transform=`translate3d(${a.currentX}px, ${a.currentY}px,0)`}function W(){const k=e.zoom;t.slideEl&&e.activeIndex!==e.slides.indexOf(t.slideEl)&&(t.imageEl&&(t.imageEl.style.transform="translate3d(0,0,0) scale(1)"),t.imageWrapEl&&(t.imageWrapEl.style.transform="translate3d(0,0,0)"),t.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),k.scale=1,s=1,t.slideEl=void 0,t.imageEl=void 0,t.imageWrapEl=void 0,t.originX=0,t.originY=0)}function B(k){const y=e.zoom,$=e.params.zoom;if(!t.slideEl){k&&k.target&&(t.slideEl=k.target.closest(`.${e.params.slideClass}, swiper-slide`)),t.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?t.slideEl=fe(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:t.slideEl=e.slides[e.activeIndex]);let _e=t.slideEl.querySelector(`.${$.containerClass}`);_e&&(_e=_e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),t.imageEl=_e,_e?t.imageWrapEl=be(t.imageEl,`.${$.containerClass}`)[0]:t.imageWrapEl=void 0}if(!t.imageEl||!t.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),t.slideEl.classList.add(`${$.zoomedSlideClass}`);let G,Q,re,R,Z,ie,ne,pe,He,Ye,Ve,We,$e,ke,ze,Ie,je,Oe;typeof a.touchesStart.x>"u"&&k?(G=k.pageX,Q=k.pageY):(G=a.touchesStart.x,Q=a.touchesStart.y);const ve=typeof k=="number"?k:null;s===1&&ve&&(G=void 0,Q=void 0),y.scale=ve||t.imageWrapEl.getAttribute("data-swiper-zoom")||$.maxRatio,s=ve||t.imageWrapEl.getAttribute("data-swiper-zoom")||$.maxRatio,k&&!(s===1&&ve)?(je=t.slideEl.offsetWidth,Oe=t.slideEl.offsetHeight,re=Me(t.slideEl).left+g.scrollX,R=Me(t.slideEl).top+g.scrollY,Z=re+je/2-G,ie=R+Oe/2-Q,He=t.imageEl.offsetWidth,Ye=t.imageEl.offsetHeight,Ve=He*y.scale,We=Ye*y.scale,$e=Math.min(je/2-Ve/2,0),ke=Math.min(Oe/2-We/2,0),ze=-$e,Ie=-ke,ne=Z*y.scale,pe=ie*y.scale,ne<$e&&(ne=$e),ne>ze&&(ne=ze),pe<ke&&(pe=ke),pe>Ie&&(pe=Ie)):(ne=0,pe=0),ve&&y.scale===1&&(t.originX=0,t.originY=0),t.imageWrapEl.style.transitionDuration="300ms",t.imageWrapEl.style.transform=`translate3d(${ne}px, ${pe}px,0)`,t.imageEl.style.transitionDuration="300ms",t.imageEl.style.transform=`translate3d(0,0,0) scale(${y.scale})`}function P(){const k=e.zoom,y=e.params.zoom;if(!t.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?t.slideEl=fe(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:t.slideEl=e.slides[e.activeIndex];let $=t.slideEl.querySelector(`.${y.containerClass}`);$&&($=$.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),t.imageEl=$,$?t.imageWrapEl=be(t.imageEl,`.${y.containerClass}`)[0]:t.imageWrapEl=void 0}!t.imageEl||!t.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),k.scale=1,s=1,t.imageWrapEl.style.transitionDuration="300ms",t.imageWrapEl.style.transform="translate3d(0,0,0)",t.imageEl.style.transitionDuration="300ms",t.imageEl.style.transform="translate3d(0,0,0) scale(1)",t.slideEl.classList.remove(`${y.zoomedSlideClass}`),t.slideEl=void 0,t.originX=0,t.originY=0)}function O(k){const y=e.zoom;y.scale&&y.scale!==1?P():B(k)}function M(){const k=e.params.passiveListeners?{passive:!0,capture:!1}:!1,y=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:k,activeListenerWithCapture:y}}function L(){const k=e.zoom;if(k.enabled)return;k.enabled=!0;const{passiveListener:y,activeListenerWithCapture:$}=M();e.wrapperEl.addEventListener("pointerdown",z,y),e.wrapperEl.addEventListener("pointermove",D,$),["pointerup","pointercancel","pointerout"].forEach(G=>{e.wrapperEl.addEventListener(G,T,y)}),e.wrapperEl.addEventListener("pointermove",j,$)}function H(){const k=e.zoom;if(!k.enabled)return;k.enabled=!1;const{passiveListener:y,activeListenerWithCapture:$}=M();e.wrapperEl.removeEventListener("pointerdown",z,y),e.wrapperEl.removeEventListener("pointermove",D,$),["pointerup","pointercancel","pointerout"].forEach(G=>{e.wrapperEl.removeEventListener(G,T,y)}),e.wrapperEl.removeEventListener("pointermove",j,$)}w("init",()=>{e.params.zoom.enabled&&L()}),w("destroy",()=>{H()}),w("touchStart",(k,y)=>{e.zoom.enabled&&N(y)}),w("touchEnd",(k,y)=>{e.zoom.enabled&&A()}),w("doubleTap",(k,y)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&O(y)}),w("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&W()}),w("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&W()}),Object.assign(e.zoom,{enable:L,disable:H,in:B,out:P,toggle:O})}function $s(n){let{swiper:e,extendParams:_,on:w,emit:v,params:g}=n;e.autoplay={running:!1,paused:!1,timeLeft:0},_({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,p,d=g&&g.autoplay?g.autoplay.delay:3e3,u=g&&g.autoplay?g.autoplay.delay:3e3,o,t=new Date().getTime(),a,b,h,m,c,f,x;function S(y){!e||e.destroyed||!e.wrapperEl||y.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",S),!x&&W())}const z=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?a=!0:a&&(u=o,a=!1);const y=e.autoplay.paused?o:t+u-new Date().getTime();e.autoplay.timeLeft=y,v("autoplayTimeLeft",y,y/d),p=requestAnimationFrame(()=>{z()})},D=()=>{let y;return e.virtual&&e.params.virtual.enabled?y=e.slides.filter(G=>G.classList.contains("swiper-slide-active"))[0]:y=e.slides[e.activeIndex],y?parseInt(y.getAttribute("data-swiper-autoplay"),10):void 0},T=y=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),z();let $=typeof y>"u"?e.params.autoplay.delay:y;d=e.params.autoplay.delay,u=e.params.autoplay.delay;const G=D();!Number.isNaN(G)&&G>0&&typeof y>"u"&&($=G,d=G,u=G),o=$;const Q=e.params.speed,re=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Q,!0,!0),v("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Q,!0,!0),v("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Q,!0,!0),v("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Q,!0,!0),v("autoplay")),e.params.cssMode&&(t=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return $>0?(clearTimeout(s),s=setTimeout(()=>{re()},$)):requestAnimationFrame(()=>{re()}),$},N=()=>{t=new Date().getTime(),e.autoplay.running=!0,T(),v("autoplayStart")},j=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(p),v("autoplayStop")},A=(y,$)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),y||(f=!0);const G=()=>{v("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",S):W()};if(e.autoplay.paused=!0,$){c&&(o=e.params.autoplay.delay),c=!1,G();return}o=(o||e.params.autoplay.delay)-(new Date().getTime()-t),!(e.isEnd&&o<0&&!e.params.loop)&&(o<0&&(o=0),G())},W=()=>{e.isEnd&&o<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(t=new Date().getTime(),f?(f=!1,T(o)):T(),e.autoplay.paused=!1,v("autoplayResume"))},B=()=>{if(e.destroyed||!e.autoplay.running)return;const y=me();y.visibilityState==="hidden"&&(f=!0,A(!0)),y.visibilityState==="visible"&&W()},P=y=>{y.pointerType==="mouse"&&(f=!0,x=!0,!(e.animating||e.autoplay.paused)&&A(!0))},O=y=>{y.pointerType==="mouse"&&(x=!1,e.autoplay.paused&&W())},M=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",P),e.el.addEventListener("pointerleave",O))},L=()=>{e.el.removeEventListener("pointerenter",P),e.el.removeEventListener("pointerleave",O)},H=()=>{me().addEventListener("visibilitychange",B)},k=()=>{me().removeEventListener("visibilitychange",B)};w("init",()=>{e.params.autoplay.enabled&&(M(),H(),N())}),w("destroy",()=>{L(),k(),e.autoplay.running&&j()}),w("_freeModeStaticRelease",()=>{(h||f)&&W()}),w("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?j():A(!0,!0)}),w("beforeTransitionStart",(y,$,G)=>{e.destroyed||!e.autoplay.running||(G||!e.params.autoplay.disableOnInteraction?A(!0,!0):j())}),w("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){j();return}b=!0,h=!1,f=!1,m=setTimeout(()=>{f=!0,h=!0,A(!0)},200)}}),w("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!b)){if(clearTimeout(m),clearTimeout(s),e.params.autoplay.disableOnInteraction){h=!1,b=!1;return}h&&e.params.cssMode&&W(),h=!1,b=!1}}),w("slideChange",()=>{e.destroyed||!e.autoplay.running||(c=!0)}),Object.assign(e.autoplay,{start:N,stop:j,pause:A,resume:W})}function ks(n){let{swiper:e,extendParams:_,on:w}=n;_({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let v=!1,g=!1;e.thumbs={swiper:null};function s(){const u=e.thumbs.swiper;if(!u||u.destroyed)return;const o=u.clickedIndex,t=u.clickedSlide;if(t&&t.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof o>"u"||o===null)return;let a;u.params.loop?a=parseInt(u.clickedSlide.getAttribute("data-swiper-slide-index"),10):a=o,e.params.loop?e.slideToLoop(a):e.slideTo(a)}function p(){const{thumbs:u}=e.params;if(v)return!1;v=!0;const o=e.constructor;if(u.swiper instanceof o)e.thumbs.swiper=u.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(os(u.swiper)){const t=Object.assign({},u.swiper);Object.assign(t,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(t),g=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",s),!0}function d(u){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const t=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView;let a=1;const b=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),o.slides.forEach(c=>c.classList.remove(b)),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let c=0;c<a;c+=1)fe(o.slidesEl,`[data-swiper-slide-index="${e.realIndex+c}"]`).forEach(f=>{f.classList.add(b)});else for(let c=0;c<a;c+=1)o.slides[e.realIndex+c]&&o.slides[e.realIndex+c].classList.add(b);const h=e.params.thumbs.autoScrollOffset,m=h&&!o.params.loop;if(e.realIndex!==o.realIndex||m){const c=o.activeIndex;let f,x;if(o.params.loop){const S=o.slides.filter(z=>z.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];f=o.slides.indexOf(S),x=e.activeIndex>e.previousIndex?"next":"prev"}else f=e.realIndex,x=f>e.previousIndex?"next":"prev";m&&(f+=x==="next"?h:-1*h),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(f)<0&&(o.params.centeredSlides?f>c?f=f-Math.floor(t/2)+1:f=f+Math.floor(t/2)-1:f>c&&o.params.slidesPerGroup,o.slideTo(f,u?0:void 0))}}w("beforeInit",()=>{const{thumbs:u}=e.params;if(!(!u||!u.swiper))if(typeof u.swiper=="string"||u.swiper instanceof HTMLElement){const o=me(),t=()=>{const b=typeof u.swiper=="string"?o.querySelector(u.swiper):u.swiper;if(b&&b.swiper)u.swiper=b.swiper,p(),d(!0);else if(b){const h=m=>{u.swiper=m.detail[0],b.removeEventListener("init",h),p(),d(!0),u.swiper.update(),e.update()};b.addEventListener("init",h)}return b},a=()=>{if(e.destroyed)return;t()||requestAnimationFrame(a)};requestAnimationFrame(a)}else p(),d(!0)}),w("slideChange update resize observerUpdate",()=>{d()}),w("setTransition",(u,o)=>{const t=e.thumbs.swiper;!t||t.destroyed||t.setTransition(o)}),w("beforeDestroy",()=>{const u=e.thumbs.swiper;!u||u.destroyed||g&&u.destroy()}),Object.assign(e.thumbs,{init:p,update:d})}function Ke(n){let{swiper:e,extendParams:_,emit:w,once:v}=n;_({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function g(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function s(){if(e.params.cssMode)return;const{touchEventsData:d,touches:u}=e;d.velocities.length===0&&d.velocities.push({position:u[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:u[e.isHorizontal()?"currentX":"currentY"],time:Ae()})}function p(d){let{currentPos:u}=d;if(e.params.cssMode)return;const{params:o,wrapperEl:t,rtlTranslate:a,snapGrid:b,touchEventsData:h}=e,c=Ae()-h.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<b.length?e.slideTo(b.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(h.velocities.length>1){const j=h.velocities.pop(),A=h.velocities.pop(),W=j.position-A.position,B=j.time-A.time;e.velocity=W/B,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(B>150||Ae()-j.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,h.velocities.length=0;let f=1e3*o.freeMode.momentumRatio;const x=e.velocity*f;let S=e.translate+x;a&&(S=-S);let z=!1,D;const T=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let N;if(S<e.maxTranslate())o.freeMode.momentumBounce?(S+e.maxTranslate()<-T&&(S=e.maxTranslate()-T),D=e.maxTranslate(),z=!0,h.allowMomentumBounce=!0):S=e.maxTranslate(),o.loop&&o.centeredSlides&&(N=!0);else if(S>e.minTranslate())o.freeMode.momentumBounce?(S-e.minTranslate()>T&&(S=e.minTranslate()+T),D=e.minTranslate(),z=!0,h.allowMomentumBounce=!0):S=e.minTranslate(),o.loop&&o.centeredSlides&&(N=!0);else if(o.freeMode.sticky){let j;for(let A=0;A<b.length;A+=1)if(b[A]>-S){j=A;break}Math.abs(b[j]-S)<Math.abs(b[j-1]-S)||e.swipeDirection==="next"?S=b[j]:S=b[j-1],S=-S}if(N&&v("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(a?f=Math.abs((-S-e.translate)/e.velocity):f=Math.abs((S-e.translate)/e.velocity),o.freeMode.sticky){const j=Math.abs((a?-S:S)-e.translate),A=e.slidesSizesGrid[e.activeIndex];j<A?f=o.speed:j<2*A?f=o.speed*1.5:f=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&z?(e.updateProgress(D),e.setTransition(f),e.setTranslate(S),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Ee(t,()=>{!e||e.destroyed||!h.allowMomentumBounce||(w("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(D),Ee(t,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(w("_freeModeNoMomentumRelease"),e.updateProgress(S),e.setTransition(f),e.setTranslate(S),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Ee(t,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(S),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&w("_freeModeNoMomentumRelease");(!o.freeMode.momentum||c>=o.longSwipesMs)&&(w("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:g,onTouchMove:s,onTouchEnd:p}})}function Ze(n){let{swiper:e,extendParams:_,on:w}=n;_({grid:{rows:1,fill:"column"}});let v,g,s,p;const d=()=>{let m=e.params.spaceBetween;return typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*e.size:typeof m=="string"&&(m=parseFloat(m)),m},u=m=>{const{slidesPerView:c}=e.params,{rows:f,fill:x}=e.params.grid,S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:m.length;s=Math.floor(S/f),Math.floor(S/f)===S/f?v=S:v=Math.ceil(S/f)*f,c!=="auto"&&x==="row"&&(v=Math.max(v,c*f)),g=v/f},o=()=>{e.slides&&e.slides.forEach(m=>{m.swiperSlideGridSet&&(m.style.height="",m.style[e.getDirectionLabel("margin-top")]="")})},t=(m,c,f)=>{const{slidesPerGroup:x}=e.params,S=d(),{rows:z,fill:D}=e.params.grid,T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:f.length;let N,j,A;if(D==="row"&&x>1){const W=Math.floor(m/(x*z)),B=m-z*x*W,P=W===0?x:Math.min(Math.ceil((T-W*z*x)/z),x);A=Math.floor(B/P),j=B-A*P+W*x,N=j+A*v/z,c.style.order=N}else D==="column"?(j=Math.floor(m/z),A=m-j*z,(j>s||j===s&&A===z-1)&&(A+=1,A>=z&&(A=0,j+=1))):(A=Math.floor(m/g),j=m-A*g);c.row=A,c.column=j,c.style.height=`calc((100% - ${(z-1)*S}px) / ${z})`,c.style[e.getDirectionLabel("margin-top")]=A!==0?S&&`${S}px`:"",c.swiperSlideGridSet=!0},a=(m,c)=>{const{centeredSlides:f,roundLengths:x}=e.params,S=d(),{rows:z}=e.params.grid;if(e.virtualSize=(m+S)*v,e.virtualSize=Math.ceil(e.virtualSize/z)-S,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+S}px`),f){const D=[];for(let T=0;T<c.length;T+=1){let N=c[T];x&&(N=Math.floor(N)),c[T]<e.virtualSize+c[0]&&D.push(N)}c.splice(0,c.length),c.push(...D)}},b=()=>{p=e.params.grid&&e.params.grid.rows>1},h=()=>{const{params:m,el:c}=e,f=m.grid&&m.grid.rows>1;p&&!f?(c.classList.remove(`${m.containerModifierClass}grid`,`${m.containerModifierClass}grid-column`),s=1,e.emitContainerClasses()):!p&&f&&(c.classList.add(`${m.containerModifierClass}grid`),m.grid.fill==="column"&&c.classList.add(`${m.containerModifierClass}grid-column`),e.emitContainerClasses()),p=f};w("init",b),w("update",h),e.grid={initSlides:u,unsetSlides:o,updateSlide:t,updateWrapperSize:a}}function xe(n){const{effect:e,swiper:_,on:w,setTranslate:v,setTransition:g,overwriteParams:s,perspective:p,recreateShadows:d,getEffectParams:u}=n;w("beforeInit",()=>{if(_.params.effect!==e)return;_.classNames.push(`${_.params.containerModifierClass}${e}`),p&&p()&&_.classNames.push(`${_.params.containerModifierClass}3d`);const t=s?s():{};Object.assign(_.params,t),Object.assign(_.originalParams,t)}),w("setTranslate",()=>{_.params.effect===e&&v()}),w("setTransition",(t,a)=>{_.params.effect===e&&g(a)}),w("transitionEnd",()=>{if(_.params.effect===e&&d){if(!u||!u().slideShadows)return;_.slides.forEach(t=>{t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>a.remove())}),d()}});let o;w("virtualUpdate",()=>{_.params.effect===e&&(_.slides.length||(o=!0),requestAnimationFrame(()=>{o&&_.slides&&_.slides.length&&(v(),o=!1)}))})}function Pe(n,e){const _=ge(e);return _!==e&&(_.style.backfaceVisibility="hidden",_.style["-webkit-backface-visibility"]="hidden"),_}function Re(n){let{swiper:e,duration:_,transformElements:w,allSlides:v}=n;const{activeIndex:g}=e,s=p=>p.parentElement?p.parentElement:e.slides.filter(u=>u.shadowRoot&&u.shadowRoot===p.parentNode)[0];if(e.params.virtualTranslate&&_!==0){let p=!1,d;v?d=w:d=w.filter(u=>{const o=u.classList.contains("swiper-slide-transform")?s(u):u;return e.getSlideIndex(o)===g}),d.forEach(u=>{Ee(u,()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const o=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(o)})})}}function Cs(n){let{swiper:e,extendParams:_,on:w}=n;_({fadeEffect:{crossFade:!1}}),xe({effect:"fade",swiper:e,on:w,setTranslate:()=>{const{slides:s}=e,p=e.params.fadeEffect;for(let d=0;d<s.length;d+=1){const u=e.slides[d];let t=-u.swiperSlideOffset;e.params.virtualTranslate||(t-=e.translate);let a=0;e.isHorizontal()||(a=t,t=0);const b=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(u.progress),0):1+Math.min(Math.max(u.progress,-1),0),h=Pe(p,u);h.style.opacity=b,h.style.transform=`translate3d(${t}px, ${a}px, 0px)`}},setTransition:s=>{const p=e.slides.map(d=>ge(d));p.forEach(d=>{d.style.transitionDuration=`${s}ms`}),Re({swiper:e,duration:s,transformElements:p,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Es(n){let{swiper:e,extendParams:_,on:w}=n;_({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const v=(d,u,o)=>{let t=o?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),a=o?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");t||(t=de("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"left":"top"}`.split(" ")),d.append(t)),a||(a=de("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"right":"bottom"}`.split(" ")),d.append(a)),t&&(t.style.opacity=Math.max(-u,0)),a&&(a.style.opacity=Math.max(u,0))};xe({effect:"cube",swiper:e,on:w,setTranslate:()=>{const{el:d,wrapperEl:u,slides:o,width:t,height:a,rtlTranslate:b,size:h,browser:m}=e,c=e.params.cubeEffect,f=e.isHorizontal(),x=e.virtual&&e.params.virtual.enabled;let S=0,z;c.shadow&&(f?(z=e.wrapperEl.querySelector(".swiper-cube-shadow"),z||(z=de("div","swiper-cube-shadow"),e.wrapperEl.append(z)),z.style.height=`${t}px`):(z=d.querySelector(".swiper-cube-shadow"),z||(z=de("div","swiper-cube-shadow"),d.append(z))));for(let T=0;T<o.length;T+=1){const N=o[T];let j=T;x&&(j=parseInt(N.getAttribute("data-swiper-slide-index"),10));let A=j*90,W=Math.floor(A/360);b&&(A=-A,W=Math.floor(-A/360));const B=Math.max(Math.min(N.progress,1),-1);let P=0,O=0,M=0;j%4===0?(P=-W*4*h,M=0):(j-1)%4===0?(P=0,M=-W*4*h):(j-2)%4===0?(P=h+W*4*h,M=h):(j-3)%4===0&&(P=-h,M=3*h+h*4*W),b&&(P=-P),f||(O=P,P=0);const L=`rotateX(${f?0:-A}deg) rotateY(${f?A:0}deg) translate3d(${P}px, ${O}px, ${M}px)`;B<=1&&B>-1&&(S=j*90+B*90,b&&(S=-j*90-B*90),e.browser&&e.browser.isSafari&&Math.abs(S)/90%2===1&&(S+=.001)),N.style.transform=L,c.slideShadows&&v(N,B,f)}if(u.style.transformOrigin=`50% 50% -${h/2}px`,u.style["-webkit-transform-origin"]=`50% 50% -${h/2}px`,c.shadow)if(f)z.style.transform=`translate3d(0px, ${t/2+c.shadowOffset}px, ${-t/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const T=Math.abs(S)-Math.floor(Math.abs(S)/90)*90,N=1.5-(Math.sin(T*2*Math.PI/360)/2+Math.cos(T*2*Math.PI/360)/2),j=c.shadowScale,A=c.shadowScale/N,W=c.shadowOffset;z.style.transform=`scale3d(${j}, 1, ${A}) translate3d(0px, ${a/2+W}px, ${-a/2/A}px) rotateX(-89.99deg)`}const D=(m.isSafari||m.isWebView)&&m.needPerspectiveFix?-h/2:0;u.style.transform=`translate3d(0px,0,${D}px) rotateX(${e.isHorizontal()?0:S}deg) rotateY(${e.isHorizontal()?-S:0}deg)`,u.style.setProperty("--swiper-cube-translate-z",`${D}px`)},setTransition:d=>{const{el:u,slides:o}=e;if(o.forEach(t=>{t.style.transitionDuration=`${d}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${d}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const t=u.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${d}ms`)}},recreateShadows:()=>{const d=e.isHorizontal();e.slides.forEach(u=>{const o=Math.max(Math.min(u.progress,1),-1);v(u,o,d)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ye(n,e,_){const w=`swiper-slide-shadow${_?`-${_}`:""}${n?` swiper-slide-shadow-${n}`:""}`,v=ge(e);let g=v.querySelector(`.${w.split(" ").join(".")}`);return g||(g=de("div",w.split(" ")),v.append(g)),g}function Ms(n){let{swiper:e,extendParams:_,on:w}=n;_({flipEffect:{slideShadows:!0,limitRotation:!0}});const v=(d,u)=>{let o=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),t=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");o||(o=ye("flip",d,e.isHorizontal()?"left":"top")),t||(t=ye("flip",d,e.isHorizontal()?"right":"bottom")),o&&(o.style.opacity=Math.max(-u,0)),t&&(t.style.opacity=Math.max(u,0))};xe({effect:"flip",swiper:e,on:w,setTranslate:()=>{const{slides:d,rtlTranslate:u}=e,o=e.params.flipEffect;for(let t=0;t<d.length;t+=1){const a=d[t];let b=a.progress;e.params.flipEffect.limitRotation&&(b=Math.max(Math.min(a.progress,1),-1));const h=a.swiperSlideOffset;let c=-180*b,f=0,x=e.params.cssMode?-h-e.translate:-h,S=0;e.isHorizontal()?u&&(c=-c):(S=x,x=0,f=-c,c=0),e.browser&&e.browser.isSafari&&(Math.abs(c)/90%2===1&&(c+=.001),Math.abs(f)/90%2===1&&(f+=.001)),a.style.zIndex=-Math.abs(Math.round(b))+d.length,o.slideShadows&&v(a,b);const z=`translate3d(${x}px, ${S}px, 0px) rotateX(${f}deg) rotateY(${c}deg)`,D=Pe(o,a);D.style.transform=z}},setTransition:d=>{const u=e.slides.map(o=>ge(o));u.forEach(o=>{o.style.transitionDuration=`${d}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t=>{t.style.transitionDuration=`${d}ms`})}),Re({swiper:e,duration:d,transformElements:u})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(d=>{let u=d.progress;e.params.flipEffect.limitRotation&&(u=Math.max(Math.min(d.progress,1),-1)),v(d,u)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Ps(n){let{swiper:e,extendParams:_,on:w}=n;_({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),xe({effect:"coverflow",swiper:e,on:w,setTranslate:()=>{const{width:s,height:p,slides:d,slidesSizesGrid:u}=e,o=e.params.coverflowEffect,t=e.isHorizontal(),a=e.translate,b=t?-a+s/2:-a+p/2,h=t?o.rotate:-o.rotate,m=o.depth;for(let c=0,f=d.length;c<f;c+=1){const x=d[c],S=u[c],z=x.swiperSlideOffset,D=(b-z-S/2)/S,T=typeof o.modifier=="function"?o.modifier(D):D*o.modifier;let N=t?h*T:0,j=t?0:h*T,A=-m*Math.abs(T),W=o.stretch;typeof W=="string"&&W.indexOf("%")!==-1&&(W=parseFloat(o.stretch)/100*S);let B=t?0:W*T,P=t?W*T:0,O=1-(1-o.scale)*Math.abs(T);Math.abs(P)<.001&&(P=0),Math.abs(B)<.001&&(B=0),Math.abs(A)<.001&&(A=0),Math.abs(N)<.001&&(N=0),Math.abs(j)<.001&&(j=0),Math.abs(O)<.001&&(O=0),e.browser&&e.browser.isSafari&&(Math.abs(N)/90%2===1&&(N+=.001),Math.abs(j)/90%2===1&&(j+=.001));const M=`translate3d(${P}px,${B}px,${A}px)  rotateX(${j}deg) rotateY(${N}deg) scale(${O})`,L=Pe(o,x);if(L.style.transform=M,x.style.zIndex=-Math.abs(Math.round(T))+1,o.slideShadows){let H=t?x.querySelector(".swiper-slide-shadow-left"):x.querySelector(".swiper-slide-shadow-top"),k=t?x.querySelector(".swiper-slide-shadow-right"):x.querySelector(".swiper-slide-shadow-bottom");H||(H=ye("coverflow",x,t?"left":"top")),k||(k=ye("coverflow",x,t?"right":"bottom")),H&&(H.style.opacity=T>0?T:0),k&&(k.style.opacity=-T>0?-T:0)}}},setTransition:s=>{e.slides.map(d=>ge(d)).forEach(d=>{d.style.transitionDuration=`${s}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Ts(n){let{swiper:e,extendParams:_,on:w}=n;_({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const v=p=>typeof p=="string"?p:`${p}px`;xe({effect:"creative",swiper:e,on:w,setTranslate:()=>{const{slides:p,wrapperEl:d,slidesSizesGrid:u}=e,o=e.params.creativeEffect,{progressMultiplier:t}=o,a=e.params.centeredSlides;if(a){const b=u[0]/2-e.params.slidesOffsetBefore||0;d.style.transform=`translateX(calc(50% - ${b}px))`}for(let b=0;b<p.length;b+=1){const h=p[b],m=h.progress,c=Math.min(Math.max(h.progress,-o.limitProgress),o.limitProgress);let f=c;a||(f=Math.min(Math.max(h.originalProgress,-o.limitProgress),o.limitProgress));const x=h.swiperSlideOffset,S=[e.params.cssMode?-x-e.translate:-x,0,0],z=[0,0,0];let D=!1;e.isHorizontal()||(S[1]=S[0],S[0]=0);let T={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(T=o.next,D=!0):c>0&&(T=o.prev,D=!0),S.forEach((O,M)=>{S[M]=`calc(${O}px + (${v(T.translate[M])} * ${Math.abs(c*t)}))`}),z.forEach((O,M)=>{let L=T.rotate[M]*Math.abs(c*t);e.browser&&e.browser.isSafari&&Math.abs(L)/90%2===1&&(L+=.001),z[M]=L}),h.style.zIndex=-Math.abs(Math.round(m))+p.length;const N=S.join(", "),j=`rotateX(${z[0]}deg) rotateY(${z[1]}deg) rotateZ(${z[2]}deg)`,A=f<0?`scale(${1+(1-T.scale)*f*t})`:`scale(${1-(1-T.scale)*f*t})`,W=f<0?1+(1-T.opacity)*f*t:1-(1-T.opacity)*f*t,B=`translate3d(${N}) ${j} ${A}`;if(D&&T.shadow||!D){let O=h.querySelector(".swiper-slide-shadow");if(!O&&T.shadow&&(O=ye("creative",h)),O){const M=o.shadowPerProgress?c*(1/o.limitProgress):c;O.style.opacity=Math.min(Math.max(Math.abs(M),0),1)}}const P=Pe(o,h);P.style.transform=B,P.style.opacity=W,T.origin&&(P.style.transformOrigin=T.origin)}},setTransition:p=>{const d=e.slides.map(u=>ge(u));d.forEach(u=>{u.style.transitionDuration=`${p}ms`,u.querySelectorAll(".swiper-slide-shadow").forEach(o=>{o.style.transitionDuration=`${p}ms`})}),Re({swiper:e,duration:p,transformElements:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const zs=Y({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const n=t=>{console.log("SwiperComponentReady!",t)},e=t=>{console.log("handleHSwiperSlideChange!",t.realIndex)},_=Le(new Map),w=t=>_.get(t),v=t=>{_.set(t,!0),console.log("Click slide! target slide id:",t)};let g=null;const s=t=>{g=t},p=Se();return{modules:[Ze,U,ee,Ne],handleHSwiperReady:n,handleHSwiperSlideChange:e,handleHwiperSlideClick:v,isSlideClicked:w,setVSwiperRef:s,vSwiperIndex:p,updateVSwiperIndex:()=>{p.value=g==null?void 0:g.activeIndex},prevVSwiperSlide:()=>g==null?void 0:g.slidePrev(),nextVSwiperSlide:()=>g==null?void 0:g.slideNext()}}}),ae=n=>(we("data-v-432a73ba"),n=n(),he(),n),Is={class:"advance-example"},js=ae(()=>C("span",null,"Loop Slide 1",-1)),Os=ae(()=>C("span",null,"Loop Slide 3",-1)),As=ae(()=>C("span",null,"Loop Slide 4",-1)),Ls=ae(()=>C("span",null,"Loop Slide 5",-1)),Ns=ae(()=>C("span",null,"Loop Slide 6",-1)),Ds=ae(()=>C("i",{class:"iconfont icon-link-external"},null,-1)),Rs=ae(()=>C("i",{class:"iconfont icon-link-external"},null,-1)),Hs=["disabled"],Ys=ae(()=>C("i",{class:"iconfont icon-arrow-down"},null,-1)),Vs=[Ys],Ws=["disabled"],qs=ae(()=>C("i",{class:"iconfont icon-arrow-up"},null,-1)),Xs=[qs];function Bs(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper"),d=E("ulink");return I(),J("div",Is,[i(p,{class:"horizontal-swiper",modules:n.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:n.handleHSwiperReady,onSlideChange:n.handleHSwiperSlideChange},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[js]),_:1}),i(s,{class:"slide"},{default:r(u=>[C("pre",null,le(u),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Os,C("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=Je(u=>n.handleHwiperSlideClick(3),["prevent"]))},le(n.isSlideClicked(3)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[As,C("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=u=>n.handleHwiperSlideClick(4))},le(n.isSlideClicked(4)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ls,C("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=u=>n.handleHwiperSlideClick(5))},le(n.isSlideClicked(5)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ns,C("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=u=>n.handleHwiperSlideClick(6))},le(n.isSlideClicked(6)?"clicked ✅":"click me 👆"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),i(p,{class:"vertical-swiper",modules:n.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:n.setVSwiperRef,onSlideChange:n.updateVSwiperIndex},{"container-start":r(()=>[C("button",{class:"nav-button-prev",disabled:n.vSwiperIndex===0,onClick:e[4]||(e[4]=(...u)=>n.prevVSwiperSlide&&n.prevVSwiperSlide(...u))},Vs,8,Hs)]),"container-end":r(()=>[C("button",{class:"nav-button-next",disabled:n.vSwiperIndex===4,onClick:e[5]||(e[5]=(...u)=>n.nextVSwiperSlide&&n.nextVSwiperSlide(...u))},Xs,8,Ws)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[i(d,{class:"link",href:"https://swiperjs.com/"},{default:r(()=>[l("swiperjs.com")]),_:1}),Ds]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(d,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:r(()=>[l("discussions")]),_:1}),Rs]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}const Gs=V(zs,[["render",Bs],["__scopeId","data-v-432a73ba"]]),Fs=Object.freeze(Object.defineProperty({__proto__:null,default:Gs},Symbol.toStringTag,{value:"Module"})),Us=Y({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X}});function Ks(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1})}const Zs=V(Us,[["render",Ks],["__scopeId","data-v-d379a297"]]),Js=Object.freeze(Object.defineProperty({__proto__:null,default:Zs},Symbol.toStringTag,{value:"Module"})),Qs=Y({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[ee]}}});function er(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,navigation:""},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const sr=V(Qs,[["render",er],["__scopeId","data-v-cffe600e"]]),rr=Object.freeze(Object.defineProperty({__proto__:null,default:sr},Symbol.toStringTag,{value:"Module"})),ir=Y({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function tr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const nr=V(ir,[["render",tr],["__scopeId","data-v-26f77f8c"]]),lr=Object.freeze(Object.defineProperty({__proto__:null,default:nr},Symbol.toStringTag,{value:"Module"})),ar=Y({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function or(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const dr=V(ar,[["render",or],["__scopeId","data-v-52d6c96d"]]),pr=Object.freeze(Object.defineProperty({__proto__:null,default:dr},Symbol.toStringTag,{value:"Module"})),cr=Y({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function ur(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,pagination:{type:"progressbar"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const mr=V(cr,[["render",ur],["__scopeId","data-v-876af3f6"]]),fr=Object.freeze(Object.defineProperty({__proto__:null,default:mr},Symbol.toStringTag,{value:"Module"})),wr=Y({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function hr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,pagination:{type:"fraction"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const gr=V(wr,[["render",hr],["__scopeId","data-v-9f260ff0"]]),vr=Object.freeze(Object.defineProperty({__proto__:null,default:gr},Symbol.toStringTag,{value:"Module"})),_r=Y({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{bulletRenderer:(e,_)=>`<span class="${`${_} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[U]}}});function br(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,pagination:{clickable:!0,renderBullet:n.bulletRenderer}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","pagination"])}const Sr=V(_r,[["render",br],["__scopeId","data-v-d269ecf7"]]),yr=Object.freeze(Object.defineProperty({__proto__:null,default:Sr},Symbol.toStringTag,{value:"Module"})),xr=Y({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[De]}}});function $r(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,scrollbar:{hide:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const kr=V(xr,[["render",$r],["__scopeId","data-v-b04ce778"]]),Cr=Object.freeze(Object.defineProperty({__proto__:null,default:kr},Symbol.toStringTag,{value:"Module"})),Er=Y({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Mr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,direction:"vertical",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Pr=V(Er,[["render",Mr],["__scopeId","data-v-301a455b"]]),Tr=Object.freeze(Object.defineProperty({__proto__:null,default:Pr},Symbol.toStringTag,{value:"Module"})),zr=Y({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Ir(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const jr=V(zr,[["render",Ir],["__scopeId","data-v-bd9523a7"]]),Or=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Ar=Y({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Lr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Nr=V(Ar,[["render",Lr],["__scopeId","data-v-cb4d22d6"]]),Dr=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"})),Rr=Y({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Hr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Yr=V(Rr,[["render",Hr],["__scopeId","data-v-8a142e1d"]]),Vr=Object.freeze(Object.defineProperty({__proto__:null,default:Yr},Symbol.toStringTag,{value:"Module"})),Wr=Y({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function qr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Xr=V(Wr,[["render",qr],["__scopeId","data-v-ccd983d5"]]),Br=Object.freeze(Object.defineProperty({__proto__:null,default:Xr},Symbol.toStringTag,{value:"Module"})),Gr=Y({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Fr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ur=V(Gr,[["render",Fr],["__scopeId","data-v-41931b82"]]),Kr=Object.freeze(Object.defineProperty({__proto__:null,default:Ur},Symbol.toStringTag,{value:"Module"})),Zr=Y({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ke]}}});function Jr(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Qr=V(Zr,[["render",Jr],["__scopeId","data-v-7676ad29"]]),ei=Object.freeze(Object.defineProperty({__proto__:null,default:Qr},Symbol.toStringTag,{value:"Module"})),si=Y({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ke,De,Ne]}}}),K=n=>(we("data-v-2a53ceff"),n=n(),he(),n),ri=K(()=>C("h2",null,"I Have a Dream",-1)),ii=K(()=>C("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),ti=K(()=>C("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),ni=K(()=>C("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),li=K(()=>C("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),ai=K(()=>C("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check — a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),oi=K(()=>C("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),di=K(()=>C("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),pi=K(()=>C("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),ci=K(()=>C("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),ui=K(()=>C("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),mi=K(()=>C("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),fi=K(()=>C("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),wi=K(()=>C("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),hi=K(()=>C("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),gi=K(()=>C("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),vi=K(()=>C("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),_i=K(()=>C("p",null,"I have a dream today.",-1)),bi=K(()=>C("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),Si=K(()=>C("p",null,"I have a dream today.",-1)),yi=K(()=>C("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),xi=K(()=>C("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),$i=K(()=>C("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),ki=K(()=>C("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),Ci=K(()=>C("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),Ei=K(()=>C("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),Mi=K(()=>C("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),Pi=K(()=>C("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),Ti=K(()=>C("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),zi=K(()=>C("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function Ii(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[ri,ii,ti,ni,li,ai,oi,di,pi,ci,ui,mi,fi,wi,hi,gi,vi,_i,bi,Si,yi,xi,$i,ki,Ci,Ei,Mi,Pi,Ti,zi]),_:1})]),_:1},8,["modules"])}const ji=V(si,[["render",Ii],["__scopeId","data-v-2a53ceff"]]),Oi=Object.freeze(Object.defineProperty({__proto__:null,default:ji},Symbol.toStringTag,{value:"Module"})),Ai=Y({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ze]}}});function Li(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])}const Ni=V(Ai,[["render",Li],["__scopeId","data-v-0f84704e"]]),Di=Object.freeze(Object.defineProperty({__proto__:null,default:Ni},Symbol.toStringTag,{value:"Module"})),Ri=Y({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function Hi(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper swiper-h",modules:n.modules,"space-between":50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(p,{class:"swiper-v",modules:n.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 5")]),_:1})]),_:1},8,["modules"])]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 4")]),_:1})]),_:1},8,["modules"])}const Yi=V(Ri,[["render",Hi],["__scopeId","data-v-67c368d3"]]),Vi=Object.freeze(Object.defineProperty({__proto__:null,default:Yi},Symbol.toStringTag,{value:"Module"})),Wi=Y({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}});function qi(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Xi=V(Wi,[["render",qi],["__scopeId","data-v-aafb0697"]]),Bi=Object.freeze(Object.defineProperty({__proto__:null,default:Xi},Symbol.toStringTag,{value:"Module"})),Gi=Y({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee]}}});function Fi(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ui=V(Gi,[["render",Fi],["__scopeId","data-v-552c3fe4"]]),Ki=Object.freeze(Object.defineProperty({__proto__:null,default:Ui},Symbol.toStringTag,{value:"Module"})),Zi=Y({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee]}}});function Ji(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Qi=V(Zi,[["render",Ji],["__scopeId","data-v-8b814072"]]),et=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"})),st=Y({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[Ue,De,ee,U]}}});function rt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1})]),_:1},8,["modules"])}const it=V(st,[["render",rt],["__scopeId","data-v-9f7d3491"]]),tt=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),nt=Y({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee,Cs]}}}),lt=["src"];function at(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(I(),J(se,null,te(5,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,lt)]),_:2},1024)),64))]),_:1},8,["modules"])}const ot=V(nt,[["render",at],["__scopeId","data-v-85fd2afe"]]),dt=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),pt=Y({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ps]}}}),ct={class:"coverflow-example"},ut=["src"];function mt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J("div",ct,[i(p,{class:"swiper",modules:n.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:r(()=>[(I(),J(se,null,te(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,ut)]),_:2},1024)),64))]),_:1},8,["modules"])])}const ft=V(pt,[["render",mt],["__scopeId","data-v-0b6b889c"]]),wt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),ht=Y({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Es]}}}),gt={class:"cube-example"},vt=["src"];function _t(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J("div",gt,[i(p,{class:"swiper",modules:n.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:r(()=>[(I(),J(se,null,te(5,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,vt)]),_:2},1024)),64))]),_:1},8,["modules"])])}const bt=V(ht,[["render",_t],["__scopeId","data-v-8a8272d9"]]),St=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),yt=Y({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee,Ms]}}}),xt={class:"flip-example"},$t=["src"];function kt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J("div",xt,[i(p,{class:"swiper",modules:n.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:r(()=>[(I(),J(se,null,te(6,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,$t)]),_:2},1024)),64))]),_:1},8,["modules"])])}const Ct=V(yt,[["render",kt],["__scopeId","data-v-c8bceb45"]]),Et=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"})),Mt=Y({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const n=Se(!0),e=Se(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:n,setEffect:v=>{e.value=v,qe(()=>{n.value=!1,qe(()=>{n.value=!0})})},modules:[U,Ts]}}}),Pt={class:"creative-example"},Tt={class:"toolbar"},zt=["onClick"],It=["src"];function jt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J("div",Pt,[C("div",Tt,[(I(!0),J(se,null,te(n.effects,(d,u)=>(I(),J("button",{key:u,onClick:o=>n.setEffect(u)}," Effect "+le(u+1)+" "+le(u===n.effectIndex?"⎷":""),9,zt))),128))]),n.render?(I(),F(p,{key:0,class:"swiper",modules:n.modules,effect:"creative","creative-effect":n.effects[n.effectIndex],"grab-cursor":!0,pagination:!0},{default:r(()=>[(I(),J(se,null,te(6,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,It)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):Qe("",!0)])}const Ot=V(Mt,[["render",jt],["__scopeId","data-v-7cba39b3"]]),At=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"})),Lt=Y({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee,Ue]}}});function Nt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Dt=V(Lt,[["render",Nt],["__scopeId","data-v-3dd6253f"]]),Rt=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"})),Ht=Y({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,Ne]}}});function Yt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Vt=V(Ht,[["render",Yt],["__scopeId","data-v-9f7cf33b"]]),Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"})),qt=Y({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee,$s]}}});function Xt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Bt=V(qt,[["render",Xt],["__scopeId","data-v-be476c90"]]),Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"})),Ft=Y({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const n=Le([1,2,3,4,5]);return{slides:n,modules:[U,ee],appendSlide:()=>n.push(n.length+1),prependSlide:()=>n.unshift(n[0]-1),popSlide:()=>n.pop(),shiftSlide:()=>n.shift()}}}),Ut={class:"dynamic-example"},Kt={class:"toolbar"};function Zt(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J("div",Ut,[C("div",Kt,[C("button",{onClick:e[0]||(e[0]=(...d)=>n.prependSlide&&n.prependSlide(...d))},"Prepend slide"),C("button",{onClick:e[1]||(e[1]=(...d)=>n.appendSlide&&n.appendSlide(...d))},"Append slide"),C("button",{onClick:e[2]||(e[2]=(...d)=>n.popSlide&&n.popSlide(...d))},"Pop slide"),C("button",{onClick:e[3]||(e[3]=(...d)=>n.shiftSlide&&n.shiftSlide(...d))},"Shift slide")]),i(p,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:n.modules},{default:r(()=>[(I(!0),J(se,null,te(n.slides,d=>(I(),F(s,{key:d,class:"slide"},{default:r(()=>[l("Slide "+le(d),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}const Jt=V(Ft,[["render",Zt],["__scopeId","data-v-f7a94b3e"]]),Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Jt},Symbol.toStringTag,{value:"Module"})),en=Y({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){const n=Se();return{modules:[ee,ks],setThumbsSwiper:_=>{n.value=_},thumbsSwiper:n}}}),sn={class:"thumb-example"},rn=["src"],tn=["src"];function nn(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J("div",sn,[i(p,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:n.modules,"space-between":10,navigation:!0,thumbs:{swiper:n.thumbsSwiper}},{default:r(()=>[(I(),J(se,null,te(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,rn)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),i(p,{class:"thumbs-swiper",modules:n.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:n.setThumbsSwiper},{default:r(()=>[(I(),J(se,null,te(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`},null,8,tn)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}const ln=V(en,[["render",nn],["__scopeId","data-v-1631fe8d"]]),an=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"})),on=Y({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee,xs]}}}),dn={class:"swiper-zoom-container"},pn=["src"];function cn(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:n.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(I(),J(se,null,te(8,d=>i(s,{key:d,class:"slide"},{default:r(()=>[C("div",dn,[C("img",{src:`/images/example/${d}.jpg`},null,8,pn)])]),_:2},1024)),64))]),_:1},8,["modules"])}const un=V(on,[["render",cn],["__scopeId","data-v-9a97aa17"]]),mn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),fn=Y({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee]}}}),wn=n=>(we("data-v-047325fd"),n=n(),he(),n),hn=["src"],gn=wn(()=>C("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function vn(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:n.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(I(),J(se,null,te(8,d=>i(s,{key:d,class:"slide",lazy:!0},{default:r(()=>[C("img",{src:`/images/example/${d}.jpg`,loading:"lazy",class:"swiper-lazy"},null,8,hn),gn]),_:2},1024)),64))]),_:1},8,["modules"])}const _n=V(fn,[["render",vn],["__scopeId","data-v-047325fd"]]),bn=Object.freeze(Object.defineProperty({__proto__:null,default:_n},Symbol.toStringTag,{value:"Module"})),Sn=Y({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[ys,U,ee]}}}),oe=n=>(we("data-v-075234b6"),n=n(),he(),n),yn=oe(()=>C("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),xn=oe(()=>C("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),$n=oe(()=>C("div",{class:"text","data-swiper-parallax":"-100"},[C("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),kn=oe(()=>C("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),Cn=oe(()=>C("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),En=oe(()=>C("div",{class:"text","data-swiper-parallax":"-100"},[C("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Mn=oe(()=>C("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),Pn=oe(()=>C("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Tn=oe(()=>C("div",{class:"text","data-swiper-parallax":"-100"},[C("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function zn(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:n.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":r(()=>[C("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:es({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[yn,xn,$n]),_:1}),i(s,{class:"slide"},{default:r(()=>[kn,Cn,En]),_:1}),i(s,{class:"slide"},{default:r(()=>[Mn,Pn,Tn]),_:1})]),_:1},8,["modules"])}const In=V(Sn,[["render",zn],["__scopeId","data-v-075234b6"]]),jn=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"})),On=Y({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee]}}});function An(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ln=V(On,[["render",An],["__scopeId","data-v-8263ad4d"]]),Nn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"})),Dn=Y({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U]}}}),Rn=n=>(we("data-v-57e729e2"),n=n(),he(),n),Hn=Rn(()=>C("div",{class:"tip"},"→ Resize the browser window ←",-1));function Yn(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J(se,null,[Hn,i(p,{class:"swiper",modules:n.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])],64)}const Vn=V(Dn,[["render",Yn],["__scopeId","data-v-57e729e2"]]),Wn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn},Symbol.toStringTag,{value:"Module"})),qn=Y({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){return{modules:[U,ee]}}});function Xn(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Bn=V(qn,[["render",Xn],["__scopeId","data-v-6c1d9970"]]),Gn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"})),Fn=Y({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){let n=null;const e=g=>{n=g},_=Se(!1);return{menuOpened:_,toggleMenu:()=>{_.value?n==null||n.slideNext():n==null||n.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{_.value=(n==null?void 0:n.activeIndex)===0}}}}),Te=n=>(we("data-v-03bb8b06"),n=n(),he(),n),Un=Te(()=>C("div",{class:"bar"},null,-1)),Kn=Te(()=>C("div",{class:"bar"},null,-1)),Zn=Te(()=>C("div",{class:"bar"},null,-1)),Jn=[Un,Kn,Zn],Qn=Te(()=>C("div",null,"Content slide",-1));function el(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:n.setSwiperRef,onSlideChange:n.handleSlideChange},{default:r(()=>[i(s,{class:"menu"},{default:r(()=>[l("Menu slide")]),_:1}),i(s,{class:"content"},{default:r(()=>[C("div",{class:ss(["menu-button",{opened:n.menuOpened}]),onClick:e[0]||(e[0]=(...d)=>n.toggleMenu&&n.toggleMenu(...d))},Jn,2),Qn]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}const sl=V(Fn,[["render",el],["__scopeId","data-v-03bb8b06"]]),rl=Object.freeze(Object.defineProperty({__proto__:null,default:sl},Symbol.toStringTag,{value:"Module"})),il=Y({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){let n=null;const e=p=>{n=p},_=p=>{n==null||n.slideTo(p-1,0)},w=Le(Array.from({length:500}).map((p,d)=>d+1));let v=1;return{modules:[U,ee,Ss],setSwiperRef:e,slides:w,slideTo:_,append:()=>{w.push(w.length)},prepend:()=>{w.unshift(v-2,v-1),v-=2,n==null||n.slideTo(n.activeIndex+2,0)}}}}),tl={class:"toolbar"};function nl(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),J(se,null,[C("div",tl,[C("button",{onClick:e[0]||(e[0]=d=>n.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),C("button",{onClick:e[1]||(e[1]=d=>n.slideTo(1)),class:"prepend-slide"},"Slide 1"),C("button",{onClick:e[2]||(e[2]=d=>n.slideTo(250)),class:"slide-250"},"Slide 250"),C("button",{onClick:e[3]||(e[3]=d=>n.slideTo(500)),class:"slide-500"},"Slide 500"),C("button",{onClick:e[4]||(e[4]=d=>n.append()),class:"append-slides"},"Append Slide")]),i(p,{class:"swiper",modules:n.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:n.setSwiperRef},{default:r(()=>[(I(!0),J(se,null,te(n.slides,(d,u)=>(I(),F(s,{key:u,"virtual-index":u,class:"slide"},{default:r(()=>[l(" Slide "+le(d),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}const ll=V(il,[["render",nl],["__scopeId","data-v-4192059a"]]),al=Object.freeze(Object.defineProperty({__proto__:null,default:ll},Symbol.toStringTag,{value:"Module"})),ol=Y({name:"swiper-example-change-direction",title:"Change direction (→ resize ←)",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue?vue&type=script&lang.ts",components:{Swiper:q,SwiperSlide:X},setup(){let n=null;return{modules:[ee],setSwiperRef:w=>{n=w},handleResize:()=>{n==null||n.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}});function dl(n,e,_,w,v,g){const s=E("swiper-slide"),p=E("swiper");return I(),F(p,{class:"swiper",modules:n.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:n.setSwiperRef,onResize:n.handleResize},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}const pl=V(ol,[["render",dl],["__scopeId","data-v-855e23ab"]]),cl=Object.freeze(Object.defineProperty({__proto__:null,default:pl},Symbol.toStringTag,{value:"Module"})),ul=`<template>\r
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
`,ml=`<template>\r
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
`,fl=`<template>\r
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
`,wl=`<template>\r
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
`,hl=`<template>\r
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
`,gl=`<template>\r
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
`,vl=`<template>\r
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
`,_l=`<template>\r
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
`,bl=`<template>\r
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
`,Sl=`<template>\r
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
`,yl=`<template>\r
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
`,xl=`<template>\r
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
`,$l=`<template>\r
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
`,kl=`<template>\r
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
`,Cl=`<template>\r
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
`,El=`<template>\r
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
`,Ml=`<template>\r
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
`,Pl=`<template>\r
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
`,Tl=`<template>\r
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
`,zl=`<template>\r
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
`,Il=`<template>\r
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
`,jl=`<template>\r
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
`,Ol=`<template>\r
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
`,Al=`<template>\r
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
`,Ll=`<template>\r
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
`,Nl=`<template>\r
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
`,Dl=`<template>\r
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
`,Rl=`<template>\r
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
`,Hl=`<template>\r
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
`,Yl=`<template>\r
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
`,Vl=`<template>\r
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
`,Wl=`<template>\r
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
`,ql=`<template>\r
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
`,Xl=`<template>\r
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
`,Bl=`<template>\r
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
`,Gl=`<template>\r
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
`,Fl=`<template>\r
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
`,Ul=`<template>\r
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
`,Kl=`<template>\r
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
`,Zl=`<template>\r
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
`,Jl=`<template>\r
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
`,Ql=`<template>\r
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
`,Be=Object.assign({"./01-advance.vue":Fs,"./02-default.vue":Js,"./03-navigation.vue":rr,"./04-pagination.vue":lr,"./05-pagination-dynamic.vue":pr,"./06-pagination-progress.vue":fr,"./07-pagination-fraction.vue":vr,"./08-pagination-custom.vue":yr,"./09-scrollbar.vue":Cr,"./10-vertical.vue":Tr,"./11-space-between.vue":Or,"./12-slides-per-view.vue":Dr,"./13-slides-per-view-auto.vue":Vr,"./14-centered.vue":Br,"./15-centered-auto.vue":Kr,"./16-freemode.vue":ei,"./17-scroll-container.vue":Oi,"./18-slides-per-column.vue":Di,"./19-nested.vue":Vi,"./20-grab-cursor.vue":Bi,"./21-infinite-loop.vue":Ki,"./22-infinite-loop-with-slides-per-group.vue":et,"./23-slides-per-group-skip.vue":tt,"./24-effect-fade.vue":dt,"./25-effect-coverflow.vue":wt,"./26-effect-cube.vue":St,"./27-effect-flip.vue":Et,"./28-effect-creative.vue":At,"./29-keyboard-control.vue":Rt,"./30-mousewheel-control.vue":Wt,"./31-autoplay.vue":Gt,"./32-dynamic-slides.vue":Qt,"./33-thumbs-gallery.vue":an,"./34-zoom.vue":mn,"./35-lazy-load-images.vue":bn,"./36-parallax.vue":jn,"./37-rtl.vue":Nn,"./38-responsive-breakpoints.vue":Wn,"./39-autoheight.vue":Gn,"./40-slideable-menu.vue":rl,"./41-virtual-slides.vue":al,"./42-change-direction.vue":cl}),ea=Object.assign({"./01-advance.vue":ul,"./02-default.vue":ml,"./03-navigation.vue":fl,"./04-pagination.vue":wl,"./05-pagination-dynamic.vue":hl,"./06-pagination-progress.vue":gl,"./07-pagination-fraction.vue":vl,"./08-pagination-custom.vue":_l,"./09-scrollbar.vue":bl,"./10-vertical.vue":Sl,"./11-space-between.vue":yl,"./12-slides-per-view.vue":xl,"./13-slides-per-view-auto.vue":$l,"./14-centered.vue":kl,"./15-centered-auto.vue":Cl,"./16-freemode.vue":El,"./17-scroll-container.vue":Ml,"./18-slides-per-column.vue":Pl,"./19-nested.vue":Tl,"./20-grab-cursor.vue":zl,"./21-infinite-loop.vue":Il,"./22-infinite-loop-with-slides-per-group.vue":jl,"./23-slides-per-group-skip.vue":Ol,"./24-effect-fade.vue":Al,"./25-effect-coverflow.vue":Ll,"./26-effect-cube.vue":Nl,"./27-effect-flip.vue":Dl,"./28-effect-creative.vue":Rl,"./29-keyboard-control.vue":Hl,"./30-mousewheel-control.vue":Yl,"./31-autoplay.vue":Vl,"./32-dynamic-slides.vue":Wl,"./33-thumbs-gallery.vue":ql,"./34-zoom.vue":Xl,"./35-lazy-load-images.vue":Bl,"./36-parallax.vue":Gl,"./37-rtl.vue":Fl,"./38-responsive-breakpoints.vue":Ul,"./39-autoheight.vue":Kl,"./40-slideable-menu.vue":Zl,"./41-virtual-slides.vue":Jl,"./42-change-direction.vue":Ql}),sa=Object.keys(Be).map(n=>({component:Be[n].default,raw:ea[n],language:"vue"})),ra={class:"swiper-example"},ia=Y({__name:"vue-awesome-swiper",setup(n){const{repository:e,route:_,packages:w}=is.VueAwesomeSwiper,v=sa.map(ds);return ts(us({title:ms(e),keywords:[fs(e),"How to use Swiper on vue3?"].join(","),description:ws(e),ogUrl:hs(_),ogImage:gs(e),ogImageWidth:1200,ogImageHeight:600})),(g,s)=>(I(),F(_s,{repository:ce(e)},{default:r(()=>[i(cs,{repository:ce(e),packages:ce(w),"header-ad-provider":ce(ps).GoogleAdSense},{actions:r(()=>[i(Ce,{icon:"doc",text:"Vue(2) Examples",href:ce(vs)(ce(e))},null,8,["href"]),i(Ce,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),i(Ce,{icon:"doc",text:"Swiper Vue(3) Component",href:"https://swiperjs.com/vue"}),i(Ce,{icon:"discussions",text:"Swiper Discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:r(()=>[i(bs,{examples:ce(v)},{component:r(p=>[C("div",ra,[(I(),F(rs(p.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages","header-ad-provider"])]),_:1},8,["repository"]))}}),ca=V(ia,[["__scopeId","data-v-b2748395"]]);export{ca as default};
