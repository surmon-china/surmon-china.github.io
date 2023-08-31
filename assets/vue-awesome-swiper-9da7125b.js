import{d as V,r as Ae,f as be,j as C,a as I,c as J,s as i,y as r,e as k,t as le,S as Ze,k as l,p as fe,b as we,x as B,m as re,F as se,n as We,q as Je,O as Qe,K as es,z as ce,B as ss,P as rs}from"./index-baa80be9.js";import{_ as Y,u as is}from"./_plugin-vue_export-helper-82d2a2e3.js";import{a as ue,s as ns,e as me,c as de,b as Be,d as ve,f as Ee,h as Fe,n as ts,i as qe,j as ls,k as Oe,l as Ce,m as _e,S as W,o as q,P as F,p as Le,g as as,M as os,H as ds}from"./index-70e4e160.js";import{n as ps,g as cs,a as us,b as ms,c as fs,d as ws,e as _s}from"./navbar-9b0548be.js";import{V as gs}from"./vue-b9233ceb.js";import{H as ke}from"./link-18df5f07.js";import{H as hs}from"./examples-23eda06e.js";function vs(t){let{swiper:e,extendParams:v,on:m,emit:b}=t;v({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let g;const s=ue();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const p=s.createElement("div");function d(f,w){const u=e.params.virtual;if(u.cache&&e.virtual.cache[w])return e.virtual.cache[w];let _;return u.renderSlide?(_=u.renderSlide.call(e,f,w),typeof _=="string"&&(p.innerHTML=_,_=p.children[0])):e.isElement?_=de("swiper-slide"):_=de("div",e.params.slideClass),_.setAttribute("data-swiper-slide-index",w),u.renderSlide||(_.innerHTML=f),u.cache&&(e.virtual.cache[w]=_),_}function c(f){const{slidesPerView:w,slidesPerGroup:u,centeredSlides:_,loop:$}=e.params,{addSlidesBefore:y,addSlidesAfter:M}=e.params.virtual,{from:A,to:z,slides:D,slidesGrid:L,offset:R}=e.virtual;e.params.cssMode||e.updateActiveIndex();const G=e.activeIndex||0;let X;e.rtlTranslate?X="right":X=e.isHorizontal()?"left":"top";let T,j;_?(T=Math.floor(w/2)+u+M,j=Math.floor(w/2)+u+y):(T=w+(u-1)+M,j=($?w:u)+y);let P=G-j,O=G+T;$||(P=Math.max(P,0),O=Math.min(O,D.length-1));let H=(e.slidesGrid[P]||0)-(e.slidesGrid[0]||0);$&&G>=j?(P-=j,_||(H+=e.slidesGrid[0])):$&&G<j&&(P=-j,_&&(H+=e.slidesGrid[0])),Object.assign(e.virtual,{from:P,to:O,offset:H,slidesGrid:e.slidesGrid,slidesBefore:j,slidesAfter:T});function h(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),b("virtualUpdate")}if(A===P&&z===O&&!f){e.slidesGrid!==L&&H!==R&&e.slides.forEach(N=>{N.style[X]=`${H-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),b("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:H,from:P,to:O,slides:function(){const Z=[];for(let ie=P;ie<=O;ie+=1)Z.push(D[ie]);return Z}()}),e.params.virtual.renderExternalUpdate?h():b("virtualUpdate");return}const E=[],x=[],U=N=>{let Z=N;return N<0?Z=D.length+N:Z>=D.length&&(Z=Z-D.length),Z};if(f)e.slidesEl.querySelectorAll(`.${e.params.slideClass}, swiper-slide`).forEach(N=>{N.remove()});else for(let N=A;N<=z;N+=1)if(N<P||N>O){const Z=U(N);e.slidesEl.querySelectorAll(`.${e.params.slideClass}[data-swiper-slide-index="${Z}"], swiper-slide[data-swiper-slide-index="${Z}"]`).forEach(ie=>{ie.remove()})}const Q=$?-D.length:0,ne=$?D.length*2:D.length;for(let N=Q;N<ne;N+=1)if(N>=P&&N<=O){const Z=U(N);typeof z>"u"||f?x.push(Z):(N>z&&x.push(Z),N<A&&E.push(Z))}if(x.forEach(N=>{e.slidesEl.append(d(D[N],N))}),$)for(let N=E.length-1;N>=0;N-=1){const Z=E[N];e.slidesEl.prepend(d(D[Z],Z))}else E.sort((N,Z)=>Z-N),E.forEach(N=>{e.slidesEl.prepend(d(D[N],N))});me(e.slidesEl,".swiper-slide, swiper-slide").forEach(N=>{N.style[X]=`${H-Math.abs(e.cssOverflowAdjustment())}px`}),h()}function o(f){if(typeof f=="object"&&"length"in f)for(let w=0;w<f.length;w+=1)f[w]&&e.virtual.slides.push(f[w]);else e.virtual.slides.push(f);c(!0)}function n(f){const w=e.activeIndex;let u=w+1,_=1;if(Array.isArray(f)){for(let $=0;$<f.length;$+=1)f[$]&&e.virtual.slides.unshift(f[$]);u=w+f.length,_=f.length}else e.virtual.slides.unshift(f);if(e.params.virtual.cache){const $=e.virtual.cache,y={};Object.keys($).forEach(M=>{const A=$[M],z=A.getAttribute("data-swiper-slide-index");z&&A.setAttribute("data-swiper-slide-index",parseInt(z,10)+_),y[parseInt(M,10)+_]=A}),e.virtual.cache=y}c(!0),e.slideTo(u,0)}function a(f){if(typeof f>"u"||f===null)return;let w=e.activeIndex;if(Array.isArray(f))for(let u=f.length-1;u>=0;u-=1)e.virtual.slides.splice(f[u],1),e.params.virtual.cache&&delete e.virtual.cache[f[u]],f[u]<w&&(w-=1),w=Math.max(w,0);else e.virtual.slides.splice(f,1),e.params.virtual.cache&&delete e.virtual.cache[f],f<w&&(w-=1),w=Math.max(w,0);c(!0),e.slideTo(w,0)}function S(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}m("beforeInit",()=>{if(!e.params.virtual.enabled)return;let f;if(typeof e.passedParams.virtual.slides>"u"){const w=[...e.slidesEl.children].filter(u=>u.matches(`.${e.params.slideClass}, swiper-slide`));w&&w.length&&(e.virtual.slides=[...w],f=!0,w.forEach((u,_)=>{u.setAttribute("data-swiper-slide-index",_),e.virtual.cache[_]=u,u.remove()}))}f||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||c()}),m("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(g),g=setTimeout(()=>{c()},100)):c())}),m("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&ns(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:o,prependSlide:n,removeSlide:a,removeAllSlides:S,update:c})}function Ge(t){let{swiper:e,extendParams:v,on:m,emit:b}=t;const g=ue(),s=Be();e.keyboard={enabled:!1},v({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(o){if(!e.enabled)return;const{rtlTranslate:n}=e;let a=o;a.originalEvent&&(a=a.originalEvent);const S=a.keyCode||a.charCode,f=e.params.keyboard.pageUpDown,w=f&&S===33,u=f&&S===34,_=S===37,$=S===39,y=S===38,M=S===40;if(!e.allowSlideNext&&(e.isHorizontal()&&$||e.isVertical()&&M||u)||!e.allowSlidePrev&&(e.isHorizontal()&&_||e.isVertical()&&y||w))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)&&!(g.activeElement&&g.activeElement.nodeName&&(g.activeElement.nodeName.toLowerCase()==="input"||g.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(w||u||_||$||y||M)){let A=!1;if(ve(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&ve(e.el,`.${e.params.slideActiveClass}`).length===0)return;const z=e.el,D=z.clientWidth,L=z.clientHeight,R=s.innerWidth,G=s.innerHeight,X=Ee(z);n&&(X.left-=z.scrollLeft);const T=[[X.left,X.top],[X.left+D,X.top],[X.left,X.top+L],[X.left+D,X.top+L]];for(let j=0;j<T.length;j+=1){const P=T[j];if(P[0]>=0&&P[0]<=R&&P[1]>=0&&P[1]<=G){if(P[0]===0&&P[1]===0)continue;A=!0}}if(!A)return}e.isHorizontal()?((w||u||_||$)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((u||$)&&!n||(w||_)&&n)&&e.slideNext(),((w||_)&&!n||(u||$)&&n)&&e.slidePrev()):((w||u||y||M)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(u||M)&&e.slideNext(),(w||y)&&e.slidePrev()),b("keyPress",S)}}function d(){e.keyboard.enabled||(g.addEventListener("keydown",p),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(g.removeEventListener("keydown",p),e.keyboard.enabled=!1)}m("init",()=>{e.params.keyboard.enabled&&d()}),m("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:d,disable:c})}function ee(t){let{swiper:e,extendParams:v,on:m,emit:b}=t;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const g=w=>(Array.isArray(w)?w:[w]).filter(u=>!!u);function s(w){let u;return w&&typeof w=="string"&&e.isElement&&(u=e.el.querySelector(w),u)?u:(w&&(typeof w=="string"&&(u=[...document.querySelectorAll(w)]),e.params.uniqueNavElements&&typeof w=="string"&&u.length>1&&e.el.querySelectorAll(w).length===1&&(u=e.el.querySelector(w))),w&&!u?w:u)}function p(w,u){const _=e.params.navigation;w=g(w),w.forEach($=>{$&&($.classList[u?"add":"remove"](..._.disabledClass.split(" ")),$.tagName==="BUTTON"&&($.disabled=u),e.params.watchOverflow&&e.enabled&&$.classList[e.isLocked?"add":"remove"](_.lockClass))})}function d(){const{nextEl:w,prevEl:u}=e.navigation;if(e.params.loop){p(u,!1),p(w,!1);return}p(u,e.isBeginning&&!e.params.rewind),p(w,e.isEnd&&!e.params.rewind)}function c(w){w.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),b("navigationPrev"))}function o(w){w.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),b("navigationNext"))}function n(){const w=e.params.navigation;if(e.params.navigation=Fe(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(w.nextEl||w.prevEl))return;let u=s(w.nextEl),_=s(w.prevEl);Object.assign(e.navigation,{nextEl:u,prevEl:_}),u=g(u),_=g(_);const $=(y,M)=>{y&&y.addEventListener("click",M==="next"?o:c),!e.enabled&&y&&y.classList.add(...w.lockClass.split(" "))};u.forEach(y=>$(y,"next")),_.forEach(y=>$(y,"prev"))}function a(){let{nextEl:w,prevEl:u}=e.navigation;w=g(w),u=g(u);const _=($,y)=>{$.removeEventListener("click",y==="next"?o:c),$.classList.remove(...e.params.navigation.disabledClass.split(" "))};w.forEach($=>_($,"next")),u.forEach($=>_($,"prev"))}m("init",()=>{e.params.navigation.enabled===!1?f():(n(),d())}),m("toEdge fromEdge lock unlock",()=>{d()}),m("destroy",()=>{a()}),m("enable disable",()=>{let{nextEl:w,prevEl:u}=e.navigation;w=g(w),u=g(u),[...w,...u].filter(_=>!!_).forEach(_=>_.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),m("click",(w,u)=>{let{nextEl:_,prevEl:$}=e.navigation;_=g(_),$=g($);const y=u.target;if(e.params.navigation.hideOnClick&&!$.includes(y)&&!_.includes(y)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===y||e.pagination.el.contains(y)))return;let M;_.length?M=_[0].classList.contains(e.params.navigation.hiddenClass):$.length&&(M=$[0].classList.contains(e.params.navigation.hiddenClass)),b(M===!0?"navigationShow":"navigationHide"),[..._,...$].filter(A=>!!A).forEach(A=>A.classList.toggle(e.params.navigation.hiddenClass))}});const S=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),n(),d()},f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),a()};Object.assign(e.navigation,{enable:S,disable:f,update:d,init:n,destroy:a})}function Ne(t){let{swiper:e,extendParams:v,on:m,emit:b}=t;const g=ue();let s=!1,p=null,d=null,c,o,n,a;v({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function S(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:T,rtlTranslate:j}=e,{dragEl:P,el:O}=T,H=e.params.scrollbar,h=e.params.loop?e.progressLoop:e.progress;let E=o,x=(n-o)*h;j?(x=-x,x>0?(E=o-x,x=0):-x+o>n&&(E=n+x)):x<0?(E=o+x,x=0):x+o>n&&(E=n-x),e.isHorizontal()?(P.style.transform=`translate3d(${x}px, 0, 0)`,P.style.width=`${E}px`):(P.style.transform=`translate3d(0px, ${x}px, 0)`,P.style.height=`${E}px`),H.hide&&(clearTimeout(p),O.style.opacity=1,p=setTimeout(()=>{O.style.opacity=0,O.style.transitionDuration="400ms"},1e3))}function f(T){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${T}ms`)}function w(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:T}=e,{dragEl:j,el:P}=T;j.style.width="",j.style.height="",n=e.isHorizontal()?P.offsetWidth:P.offsetHeight,a=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?o=n*a:o=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?j.style.width=`${o}px`:j.style.height=`${o}px`,a>=1?P.style.display="none":P.style.display="",e.params.scrollbar.hide&&(P.style.opacity=0),e.params.watchOverflow&&e.enabled&&T.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function u(T){return e.isHorizontal()?T.clientX:T.clientY}function _(T){const{scrollbar:j,rtlTranslate:P}=e,{el:O}=j;let H;H=(u(T)-Ee(O)[e.isHorizontal()?"left":"top"]-(c!==null?c:o/2))/(n-o),H=Math.max(Math.min(H,1),0),P&&(H=1-H);const h=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*H;e.updateProgress(h),e.setTranslate(h),e.updateActiveIndex(),e.updateSlidesClasses()}function $(T){const j=e.params.scrollbar,{scrollbar:P,wrapperEl:O}=e,{el:H,dragEl:h}=P;s=!0,c=T.target===h?u(T)-T.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,T.preventDefault(),T.stopPropagation(),O.style.transitionDuration="100ms",h.style.transitionDuration="100ms",_(T),clearTimeout(d),H.style.transitionDuration="0ms",j.hide&&(H.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),b("scrollbarDragStart",T)}function y(T){const{scrollbar:j,wrapperEl:P}=e,{el:O,dragEl:H}=j;s&&(T.preventDefault?T.preventDefault():T.returnValue=!1,_(T),P.style.transitionDuration="0ms",O.style.transitionDuration="0ms",H.style.transitionDuration="0ms",b("scrollbarDragMove",T))}function M(T){const j=e.params.scrollbar,{scrollbar:P,wrapperEl:O}=e,{el:H}=P;s&&(s=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",O.style.transitionDuration=""),j.hide&&(clearTimeout(d),d=ts(()=>{H.style.opacity=0,H.style.transitionDuration="400ms"},1e3)),b("scrollbarDragEnd",T),j.snapOnRelease&&e.slideToClosest())}function A(T){const{scrollbar:j,params:P}=e,O=j.el;if(!O)return;const H=O,h=P.passiveListeners?{passive:!1,capture:!1}:!1,E=P.passiveListeners?{passive:!0,capture:!1}:!1;if(!H)return;const x=T==="on"?"addEventListener":"removeEventListener";H[x]("pointerdown",$,h),g[x]("pointermove",y,h),g[x]("pointerup",M,E)}function z(){!e.params.scrollbar.el||!e.scrollbar.el||A("on")}function D(){!e.params.scrollbar.el||!e.scrollbar.el||A("off")}function L(){const{scrollbar:T,el:j}=e;e.params.scrollbar=Fe(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const P=e.params.scrollbar;if(!P.el)return;let O;typeof P.el=="string"&&e.isElement&&(O=e.el.querySelector(P.el)),!O&&typeof P.el=="string"?O=g.querySelectorAll(P.el):O||(O=P.el),e.params.uniqueNavElements&&typeof P.el=="string"&&O.length>1&&j.querySelectorAll(P.el).length===1&&(O=j.querySelector(P.el)),O.length>0&&(O=O[0]),O.classList.add(e.isHorizontal()?P.horizontalClass:P.verticalClass);let H;O&&(H=O.querySelector(`.${e.params.scrollbar.dragClass}`),H||(H=de("div",e.params.scrollbar.dragClass),O.append(H))),Object.assign(T,{el:O,dragEl:H}),P.draggable&&z(),O&&O.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}function R(){const T=e.params.scrollbar,j=e.scrollbar.el;j&&j.classList.remove(e.isHorizontal()?T.horizontalClass:T.verticalClass),D()}m("init",()=>{e.params.scrollbar.enabled===!1?X():(L(),w(),S())}),m("update resize observerUpdate lock unlock",()=>{w()}),m("setTranslate",()=>{S()}),m("setTransition",(T,j)=>{f(j)}),m("enable disable",()=>{const{el:T}=e.scrollbar;T&&T.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}),m("destroy",()=>{R()});const G=()=>{e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),L(),w(),S()},X=()=>{e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),R()};Object.assign(e.scrollbar,{enable:G,disable:X,updateSize:w,setTranslate:S,init:L,destroy:R})}function bs(t){let{swiper:e,extendParams:v,on:m}=t;v({parallax:{enabled:!1}});const b="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",g=(d,c)=>{const{rtl:o}=e,n=o?-1:1,a=d.getAttribute("data-swiper-parallax")||"0";let S=d.getAttribute("data-swiper-parallax-x"),f=d.getAttribute("data-swiper-parallax-y");const w=d.getAttribute("data-swiper-parallax-scale"),u=d.getAttribute("data-swiper-parallax-opacity"),_=d.getAttribute("data-swiper-parallax-rotate");if(S||f?(S=S||"0",f=f||"0"):e.isHorizontal()?(S=a,f="0"):(f=a,S="0"),S.indexOf("%")>=0?S=`${parseInt(S,10)*c*n}%`:S=`${S*c*n}px`,f.indexOf("%")>=0?f=`${parseInt(f,10)*c}%`:f=`${f*c}px`,typeof u<"u"&&u!==null){const y=u-(u-1)*(1-Math.abs(c));d.style.opacity=y}let $=`translate3d(${S}, ${f}, 0px)`;if(typeof w<"u"&&w!==null){const y=w-(w-1)*(1-Math.abs(c));$+=` scale(${y})`}if(_&&typeof _<"u"&&_!==null){const y=_*c*-1;$+=` rotate(${y}deg)`}d.style.transform=$},s=()=>{const{el:d,slides:c,progress:o,snapGrid:n,isElement:a}=e,S=me(d,b);e.isElement&&S.push(...me(e.hostEl,b)),S.forEach(f=>{g(f,o)}),c.forEach((f,w)=>{let u=f.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(u+=Math.ceil(w/2)-o*(n.length-1)),u=Math.min(Math.max(u,-1),1),f.querySelectorAll(`${b}, [data-swiper-parallax-rotate]`).forEach(_=>{g(_,u)})})},p=function(d){d===void 0&&(d=e.params.speed);const{el:c,hostEl:o}=e,n=[...c.querySelectorAll(b)];e.isElement&&n.push(...o.querySelectorAll(b)),n.forEach(a=>{let S=parseInt(a.getAttribute("data-swiper-parallax-duration"),10)||d;d===0&&(S=0),a.style.transitionDuration=`${S}ms`})};m("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),m("init",()=>{e.params.parallax.enabled&&s()}),m("setTranslate",()=>{e.params.parallax.enabled&&s()}),m("setTransition",(d,c)=>{e.params.parallax.enabled&&p(c)})}function Ss(t){let{swiper:e,extendParams:v,on:m,emit:b}=t;const g=Be();v({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let s=1,p=!1,d,c;const o=[],n={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},a={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},S={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let f=1;Object.defineProperty(e.zoom,"scale",{get(){return f},set(h){if(f!==h){const E=n.imageEl,x=n.slideEl;b("zoomChange",h,E,x)}f=h}});function w(){if(o.length<2)return 1;const h=o[0].pageX,E=o[0].pageY,x=o[1].pageX,U=o[1].pageY;return Math.sqrt((x-h)**2+(U-E)**2)}function u(){if(o.length<2)return{x:null,y:null};const h=n.imageEl.getBoundingClientRect();return[(o[0].pageX+(o[1].pageX-o[0].pageX)/2-h.x)/s,(o[0].pageY+(o[1].pageY-o[0].pageY)/2-h.y)/s]}function _(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function $(h){const E=_();return!!(h.target.matches(E)||e.slides.filter(x=>x.contains(h.target)).length>0)}function y(h){const E=`.${e.params.zoom.containerClass}`;return!!(h.target.matches(E)||[...e.hostEl.querySelectorAll(E)].filter(x=>x.contains(h.target)).length>0)}function M(h){if(h.pointerType==="mouse"&&o.splice(0,o.length),!$(h))return;const E=e.params.zoom;if(d=!1,c=!1,o.push(h),!(o.length<2)){if(d=!0,n.scaleStart=w(),!n.slideEl){n.slideEl=h.target.closest(`.${e.params.slideClass}, swiper-slide`),n.slideEl||(n.slideEl=e.slides[e.activeIndex]);let x=n.slideEl.querySelector(`.${E.containerClass}`);if(x&&(x=x.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=x,x?n.imageWrapEl=ve(n.imageEl,`.${E.containerClass}`)[0]:n.imageWrapEl=void 0,!n.imageWrapEl){n.imageEl=void 0;return}n.maxRatio=n.imageWrapEl.getAttribute("data-swiper-zoom")||E.maxRatio}if(n.imageEl){const[x,U]=u();n.originX=x,n.originY=U,n.imageEl.style.transitionDuration="0ms"}p=!0}}function A(h){if(!$(h))return;const E=e.params.zoom,x=e.zoom,U=o.findIndex(Q=>Q.pointerId===h.pointerId);U>=0&&(o[U]=h),!(o.length<2)&&(c=!0,n.scaleMove=w(),n.imageEl&&(x.scale=n.scaleMove/n.scaleStart*s,x.scale>n.maxRatio&&(x.scale=n.maxRatio-1+(x.scale-n.maxRatio+1)**.5),x.scale<E.minRatio&&(x.scale=E.minRatio+1-(E.minRatio-x.scale+1)**.5),n.imageEl.style.transform=`translate3d(0,0,0) scale(${x.scale})`))}function z(h){if(!$(h)||h.pointerType==="mouse"&&h.type==="pointerout")return;const E=e.params.zoom,x=e.zoom,U=o.findIndex(Q=>Q.pointerId===h.pointerId);U>=0&&o.splice(U,1),!(!d||!c)&&(d=!1,c=!1,n.imageEl&&(x.scale=Math.max(Math.min(x.scale,n.maxRatio),E.minRatio),n.imageEl.style.transitionDuration=`${e.params.speed}ms`,n.imageEl.style.transform=`translate3d(0,0,0) scale(${x.scale})`,s=x.scale,p=!1,x.scale>1&&n.slideEl?n.slideEl.classList.add(`${E.zoomedSlideClass}`):x.scale<=1&&n.slideEl&&n.slideEl.classList.remove(`${E.zoomedSlideClass}`),x.scale===1&&(n.originX=0,n.originY=0,n.slideEl=void 0)))}function D(h){const E=e.device;if(!n.imageEl||a.isTouched)return;E.android&&h.cancelable&&h.preventDefault(),a.isTouched=!0;const x=o.length>0?o[0]:h;a.touchesStart.x=x.pageX,a.touchesStart.y=x.pageY}function L(h){if(!$(h)||!y(h))return;const E=e.zoom;if(!n.imageEl||!a.isTouched||!n.slideEl)return;a.isMoved||(a.width=n.imageEl.offsetWidth,a.height=n.imageEl.offsetHeight,a.startX=qe(n.imageWrapEl,"x")||0,a.startY=qe(n.imageWrapEl,"y")||0,n.slideWidth=n.slideEl.offsetWidth,n.slideHeight=n.slideEl.offsetHeight,n.imageWrapEl.style.transitionDuration="0ms");const x=a.width*E.scale,U=a.height*E.scale;if(x<n.slideWidth&&U<n.slideHeight)return;if(a.minX=Math.min(n.slideWidth/2-x/2,0),a.maxX=-a.minX,a.minY=Math.min(n.slideHeight/2-U/2,0),a.maxY=-a.minY,a.touchesCurrent.x=o.length>0?o[0].pageX:h.pageX,a.touchesCurrent.y=o.length>0?o[0].pageY:h.pageY,Math.max(Math.abs(a.touchesCurrent.x-a.touchesStart.x),Math.abs(a.touchesCurrent.y-a.touchesStart.y))>5&&(e.allowClick=!1),!a.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(a.minX)===Math.floor(a.startX)&&a.touchesCurrent.x<a.touchesStart.x||Math.floor(a.maxX)===Math.floor(a.startX)&&a.touchesCurrent.x>a.touchesStart.x)){a.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(a.minY)===Math.floor(a.startY)&&a.touchesCurrent.y<a.touchesStart.y||Math.floor(a.maxY)===Math.floor(a.startY)&&a.touchesCurrent.y>a.touchesStart.y)){a.isTouched=!1;return}}h.cancelable&&h.preventDefault(),h.stopPropagation(),a.isMoved=!0;const ne=(E.scale-s)/(n.maxRatio-e.params.zoom.minRatio),{originX:N,originY:Z}=n;a.currentX=a.touchesCurrent.x-a.touchesStart.x+a.startX+ne*(a.width-N*2),a.currentY=a.touchesCurrent.y-a.touchesStart.y+a.startY+ne*(a.height-Z*2),a.currentX<a.minX&&(a.currentX=a.minX+1-(a.minX-a.currentX+1)**.8),a.currentX>a.maxX&&(a.currentX=a.maxX-1+(a.currentX-a.maxX+1)**.8),a.currentY<a.minY&&(a.currentY=a.minY+1-(a.minY-a.currentY+1)**.8),a.currentY>a.maxY&&(a.currentY=a.maxY-1+(a.currentY-a.maxY+1)**.8),S.prevPositionX||(S.prevPositionX=a.touchesCurrent.x),S.prevPositionY||(S.prevPositionY=a.touchesCurrent.y),S.prevTime||(S.prevTime=Date.now()),S.x=(a.touchesCurrent.x-S.prevPositionX)/(Date.now()-S.prevTime)/2,S.y=(a.touchesCurrent.y-S.prevPositionY)/(Date.now()-S.prevTime)/2,Math.abs(a.touchesCurrent.x-S.prevPositionX)<2&&(S.x=0),Math.abs(a.touchesCurrent.y-S.prevPositionY)<2&&(S.y=0),S.prevPositionX=a.touchesCurrent.x,S.prevPositionY=a.touchesCurrent.y,S.prevTime=Date.now(),n.imageWrapEl.style.transform=`translate3d(${a.currentX}px, ${a.currentY}px,0)`}function R(){const h=e.zoom;if(!n.imageEl)return;if(!a.isTouched||!a.isMoved){a.isTouched=!1,a.isMoved=!1;return}a.isTouched=!1,a.isMoved=!1;let E=300,x=300;const U=S.x*E,Q=a.currentX+U,ne=S.y*x,N=a.currentY+ne;S.x!==0&&(E=Math.abs((Q-a.currentX)/S.x)),S.y!==0&&(x=Math.abs((N-a.currentY)/S.y));const Z=Math.max(E,x);a.currentX=Q,a.currentY=N;const ie=a.width*h.scale,te=a.height*h.scale;a.minX=Math.min(n.slideWidth/2-ie/2,0),a.maxX=-a.minX,a.minY=Math.min(n.slideHeight/2-te/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),n.imageWrapEl.style.transitionDuration=`${Z}ms`,n.imageWrapEl.style.transform=`translate3d(${a.currentX}px, ${a.currentY}px,0)`}function G(){const h=e.zoom;n.slideEl&&e.activeIndex!==e.slides.indexOf(n.slideEl)&&(n.imageEl&&(n.imageEl.style.transform="translate3d(0,0,0) scale(1)"),n.imageWrapEl&&(n.imageWrapEl.style.transform="translate3d(0,0,0)"),n.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),h.scale=1,s=1,n.slideEl=void 0,n.imageEl=void 0,n.imageWrapEl=void 0,n.originX=0,n.originY=0)}function X(h){const E=e.zoom,x=e.params.zoom;if(!n.slideEl){h&&h.target&&(n.slideEl=h.target.closest(`.${e.params.slideClass}, swiper-slide`)),n.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=me(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex]);let he=n.slideEl.querySelector(`.${x.containerClass}`);he&&(he=he.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=he,he?n.imageWrapEl=ve(n.imageEl,`.${x.containerClass}`)[0]:n.imageWrapEl=void 0}if(!n.imageEl||!n.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),n.slideEl.classList.add(`${x.zoomedSlideClass}`);let U,Q,ne,N,Z,ie,te,pe,Re,He,Ve,Ye,xe,$e,Me,ze,Ie,je;typeof a.touchesStart.x>"u"&&h?(U=h.pageX,Q=h.pageY):(U=a.touchesStart.x,Q=a.touchesStart.y);const ge=typeof h=="number"?h:null;s===1&&ge&&(U=void 0,Q=void 0),E.scale=ge||n.imageWrapEl.getAttribute("data-swiper-zoom")||x.maxRatio,s=ge||n.imageWrapEl.getAttribute("data-swiper-zoom")||x.maxRatio,h&&!(s===1&&ge)?(Ie=n.slideEl.offsetWidth,je=n.slideEl.offsetHeight,ne=Ee(n.slideEl).left+g.scrollX,N=Ee(n.slideEl).top+g.scrollY,Z=ne+Ie/2-U,ie=N+je/2-Q,Re=n.imageEl.offsetWidth,He=n.imageEl.offsetHeight,Ve=Re*E.scale,Ye=He*E.scale,xe=Math.min(Ie/2-Ve/2,0),$e=Math.min(je/2-Ye/2,0),Me=-xe,ze=-$e,te=Z*E.scale,pe=ie*E.scale,te<xe&&(te=xe),te>Me&&(te=Me),pe<$e&&(pe=$e),pe>ze&&(pe=ze)):(te=0,pe=0),ge&&E.scale===1&&(n.originX=0,n.originY=0),n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform=`translate3d(${te}px, ${pe}px,0)`,n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform=`translate3d(0,0,0) scale(${E.scale})`}function T(){const h=e.zoom,E=e.params.zoom;if(!n.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=me(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex];let x=n.slideEl.querySelector(`.${E.containerClass}`);x&&(x=x.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=x,x?n.imageWrapEl=ve(n.imageEl,`.${E.containerClass}`)[0]:n.imageWrapEl=void 0}!n.imageEl||!n.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),h.scale=1,s=1,n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform="translate3d(0,0,0)",n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform="translate3d(0,0,0) scale(1)",n.slideEl.classList.remove(`${E.zoomedSlideClass}`),n.slideEl=void 0,n.originX=0,n.originY=0)}function j(h){const E=e.zoom;E.scale&&E.scale!==1?T():X(h)}function P(){const h=e.params.passiveListeners?{passive:!0,capture:!1}:!1,E=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:h,activeListenerWithCapture:E}}function O(){const h=e.zoom;if(h.enabled)return;h.enabled=!0;const{passiveListener:E,activeListenerWithCapture:x}=P();e.wrapperEl.addEventListener("pointerdown",M,E),e.wrapperEl.addEventListener("pointermove",A,x),["pointerup","pointercancel","pointerout"].forEach(U=>{e.wrapperEl.addEventListener(U,z,E)}),e.wrapperEl.addEventListener("pointermove",L,x)}function H(){const h=e.zoom;if(!h.enabled)return;h.enabled=!1;const{passiveListener:E,activeListenerWithCapture:x}=P();e.wrapperEl.removeEventListener("pointerdown",M,E),e.wrapperEl.removeEventListener("pointermove",A,x),["pointerup","pointercancel","pointerout"].forEach(U=>{e.wrapperEl.removeEventListener(U,z,E)}),e.wrapperEl.removeEventListener("pointermove",L,x)}m("init",()=>{e.params.zoom.enabled&&O()}),m("destroy",()=>{H()}),m("touchStart",(h,E)=>{e.zoom.enabled&&D(E)}),m("touchEnd",(h,E)=>{e.zoom.enabled&&R()}),m("doubleTap",(h,E)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&j(E)}),m("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&G()}),m("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&G()}),Object.assign(e.zoom,{enable:O,disable:H,in:X,out:T,toggle:j})}function ys(t){let{swiper:e,extendParams:v,on:m,emit:b,params:g}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},v({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,p,d=g&&g.autoplay?g.autoplay.delay:3e3,c=g&&g.autoplay?g.autoplay.delay:3e3,o,n=new Date().getTime,a,S,f,w,u,_;function $(h){!e||e.destroyed||!e.wrapperEl||h.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",$),R())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?a=!0:a&&(c=o,a=!1);const h=e.autoplay.paused?o:n+c-new Date().getTime();e.autoplay.timeLeft=h,b("autoplayTimeLeft",h,h/d),p=requestAnimationFrame(()=>{y()})},M=()=>{let h;return e.virtual&&e.params.virtual.enabled?h=e.slides.filter(x=>x.classList.contains("swiper-slide-active"))[0]:h=e.slides[e.activeIndex],h?parseInt(h.getAttribute("data-swiper-autoplay"),10):void 0},A=h=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),y();let E=typeof h>"u"?e.params.autoplay.delay:h;d=e.params.autoplay.delay,c=e.params.autoplay.delay;const x=M();!Number.isNaN(x)&&x>0&&typeof h>"u"&&(E=x,d=x,c=x),o=E;const U=e.params.speed,Q=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(U,!0,!0),b("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,U,!0,!0),b("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(U,!0,!0),b("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,U,!0,!0),b("autoplay")),e.params.cssMode&&(n=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return E>0?(clearTimeout(s),s=setTimeout(()=>{Q()},E)):requestAnimationFrame(()=>{Q()}),E},z=()=>{e.autoplay.running=!0,A(),b("autoplayStart")},D=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(p),b("autoplayStop")},L=(h,E)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),h||(_=!0);const x=()=>{b("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",$):R()};if(e.autoplay.paused=!0,E){u&&(o=e.params.autoplay.delay),u=!1,x();return}o=(o||e.params.autoplay.delay)-(new Date().getTime()-n),!(e.isEnd&&o<0&&!e.params.loop)&&(o<0&&(o=0),x())},R=()=>{e.isEnd&&o<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(n=new Date().getTime(),_?(_=!1,A(o)):A(),e.autoplay.paused=!1,b("autoplayResume"))},G=()=>{if(e.destroyed||!e.autoplay.running)return;const h=ue();h.visibilityState==="hidden"&&(_=!0,L(!0)),h.visibilityState==="visible"&&R()},X=h=>{h.pointerType==="mouse"&&(_=!0,!(e.animating||e.autoplay.paused)&&L(!0))},T=h=>{h.pointerType==="mouse"&&e.autoplay.paused&&R()},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",X),e.el.addEventListener("pointerleave",T))},P=()=>{e.el.removeEventListener("pointerenter",X),e.el.removeEventListener("pointerleave",T)},O=()=>{ue().addEventListener("visibilitychange",G)},H=()=>{ue().removeEventListener("visibilitychange",G)};m("init",()=>{e.params.autoplay.enabled&&(j(),O(),n=new Date().getTime(),z())}),m("destroy",()=>{P(),H(),e.autoplay.running&&D()}),m("beforeTransitionStart",(h,E,x)=>{e.destroyed||!e.autoplay.running||(x||!e.params.autoplay.disableOnInteraction?L(!0,!0):D())}),m("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){D();return}S=!0,f=!1,_=!1,w=setTimeout(()=>{_=!0,f=!0,L(!0)},200)}}),m("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(w),clearTimeout(s),e.params.autoplay.disableOnInteraction){f=!1,S=!1;return}f&&e.params.cssMode&&R(),f=!1,S=!1}}),m("slideChange",()=>{e.destroyed||!e.autoplay.running||(u=!0)}),Object.assign(e.autoplay,{start:z,stop:D,pause:L,resume:R})}function xs(t){let{swiper:e,extendParams:v,on:m}=t;v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let b=!1,g=!1;e.thumbs={swiper:null};function s(){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const o=c.clickedIndex,n=c.clickedSlide;if(n&&n.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof o>"u"||o===null)return;let a;c.params.loop?a=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):a=o,e.params.loop?e.slideToLoop(a):e.slideTo(a)}function p(){const{thumbs:c}=e.params;if(b)return!1;b=!0;const o=e.constructor;if(c.swiper instanceof o)e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(ls(c.swiper)){const n=Object.assign({},c.swiper);Object.assign(n,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(n),g=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",s),!0}function d(c){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const n=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView;let a=1;const S=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),o.slides.forEach(u=>u.classList.remove(S)),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let u=0;u<a;u+=1)me(o.slidesEl,`[data-swiper-slide-index="${e.realIndex+u}"]`).forEach(_=>{_.classList.add(S)});else for(let u=0;u<a;u+=1)o.slides[e.realIndex+u]&&o.slides[e.realIndex+u].classList.add(S);const f=e.params.thumbs.autoScrollOffset,w=f&&!o.params.loop;if(e.realIndex!==o.realIndex||w){const u=o.activeIndex;let _,$;if(o.params.loop){const y=o.slides.filter(M=>M.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];_=o.slides.indexOf(y),$=e.activeIndex>e.previousIndex?"next":"prev"}else _=e.realIndex,$=_>e.previousIndex?"next":"prev";w&&(_+=$==="next"?f:-1*f),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(_)<0&&(o.params.centeredSlides?_>u?_=_-Math.floor(n/2)+1:_=_+Math.floor(n/2)-1:_>u&&o.params.slidesPerGroup,o.slideTo(_,c?0:void 0))}}m("beforeInit",()=>{const{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){const o=ue(),n=()=>{const S=typeof c.swiper=="string"?o.querySelector(c.swiper):c.swiper;if(S&&S.swiper)c.swiper=S.swiper,p(),d(!0);else if(S){const f=w=>{c.swiper=w.detail[0],S.removeEventListener("init",f),p(),d(!0),c.swiper.update(),e.update()};S.addEventListener("init",f)}return S},a=()=>{if(e.destroyed)return;n()||requestAnimationFrame(a)};requestAnimationFrame(a)}else p(),d(!0)}),m("slideChange update resize observerUpdate",()=>{d()}),m("setTransition",(c,o)=>{const n=e.thumbs.swiper;!n||n.destroyed||n.setTransition(o)}),m("beforeDestroy",()=>{const c=e.thumbs.swiper;!c||c.destroyed||g&&c.destroy()}),Object.assign(e.thumbs,{init:p,update:d})}function Ue(t){let{swiper:e,extendParams:v,emit:m,once:b}=t;v({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function g(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function s(){if(e.params.cssMode)return;const{touchEventsData:d,touches:c}=e;d.velocities.length===0&&d.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:Oe()})}function p(d){let{currentPos:c}=d;if(e.params.cssMode)return;const{params:o,wrapperEl:n,rtlTranslate:a,snapGrid:S,touchEventsData:f}=e,u=Oe()-f.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<S.length?e.slideTo(S.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(f.velocities.length>1){const L=f.velocities.pop(),R=f.velocities.pop(),G=L.position-R.position,X=L.time-R.time;e.velocity=G/X,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(X>150||Oe()-L.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,f.velocities.length=0;let _=1e3*o.freeMode.momentumRatio;const $=e.velocity*_;let y=e.translate+$;a&&(y=-y);let M=!1,A;const z=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let D;if(y<e.maxTranslate())o.freeMode.momentumBounce?(y+e.maxTranslate()<-z&&(y=e.maxTranslate()-z),A=e.maxTranslate(),M=!0,f.allowMomentumBounce=!0):y=e.maxTranslate(),o.loop&&o.centeredSlides&&(D=!0);else if(y>e.minTranslate())o.freeMode.momentumBounce?(y-e.minTranslate()>z&&(y=e.minTranslate()+z),A=e.minTranslate(),M=!0,f.allowMomentumBounce=!0):y=e.minTranslate(),o.loop&&o.centeredSlides&&(D=!0);else if(o.freeMode.sticky){let L;for(let R=0;R<S.length;R+=1)if(S[R]>-y){L=R;break}Math.abs(S[L]-y)<Math.abs(S[L-1]-y)||e.swipeDirection==="next"?y=S[L]:y=S[L-1],y=-y}if(D&&b("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(a?_=Math.abs((-y-e.translate)/e.velocity):_=Math.abs((y-e.translate)/e.velocity),o.freeMode.sticky){const L=Math.abs((a?-y:y)-e.translate),R=e.slidesSizesGrid[e.activeIndex];L<R?_=o.speed:L<2*R?_=o.speed*1.5:_=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&M?(e.updateProgress(A),e.setTransition(_),e.setTranslate(y),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Ce(n,()=>{!e||e.destroyed||!f.allowMomentumBounce||(m("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(A),Ce(n,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(m("_freeModeNoMomentumRelease"),e.updateProgress(y),e.setTransition(_),e.setTranslate(y),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Ce(n,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(y),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&m("_freeModeNoMomentumRelease");(!o.freeMode.momentum||u>=o.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:g,onTouchMove:s,onTouchEnd:p}})}function Ke(t){let{swiper:e,extendParams:v}=t;v({grid:{rows:1,fill:"column"}});let m,b,g;const s=()=>{let o=e.params.spaceBetween;return typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o)),o},p=o=>{const{slidesPerView:n}=e.params,{rows:a,fill:S}=e.params.grid;g=Math.floor(o/a),Math.floor(o/a)===o/a?m=o:m=Math.ceil(o/a)*a,n!=="auto"&&S==="row"&&(m=Math.max(m,n*a)),b=m/a},d=(o,n,a,S)=>{const{slidesPerGroup:f}=e.params,w=s(),{rows:u,fill:_}=e.params.grid;let $,y,M;if(_==="row"&&f>1){const A=Math.floor(o/(f*u)),z=o-u*f*A,D=A===0?f:Math.min(Math.ceil((a-A*u*f)/u),f);M=Math.floor(z/D),y=z-M*D+A*f,$=y+M*m/u,n.style.order=$}else _==="column"?(y=Math.floor(o/u),M=o-y*u,(y>g||y===g&&M===u-1)&&(M+=1,M>=u&&(M=0,y+=1))):(M=Math.floor(o/b),y=o-M*b);n.row=M,n.column=y,n.style[S("margin-top")]=M!==0?w&&`${w}px`:""},c=(o,n,a)=>{const{centeredSlides:S,roundLengths:f}=e.params,w=s(),{rows:u}=e.params.grid;if(e.virtualSize=(o+w)*m,e.virtualSize=Math.ceil(e.virtualSize/u)-w,e.wrapperEl.style[a("width")]=`${e.virtualSize+w}px`,S){const _=[];for(let $=0;$<n.length;$+=1){let y=n[$];f&&(y=Math.floor(y)),n[$]<e.virtualSize+n[0]&&_.push(y)}n.splice(0,n.length),n.push(..._)}};e.grid={initSlides:p,updateSlide:d,updateWrapperSize:c}}function ye(t){const{effect:e,swiper:v,on:m,setTranslate:b,setTransition:g,overwriteParams:s,perspective:p,recreateShadows:d,getEffectParams:c}=t;m("beforeInit",()=>{if(v.params.effect!==e)return;v.classNames.push(`${v.params.containerModifierClass}${e}`),p&&p()&&v.classNames.push(`${v.params.containerModifierClass}3d`);const n=s?s():{};Object.assign(v.params,n),Object.assign(v.originalParams,n)}),m("setTranslate",()=>{v.params.effect===e&&b()}),m("setTransition",(n,a)=>{v.params.effect===e&&g(a)}),m("transitionEnd",()=>{if(v.params.effect===e&&d){if(!c||!c().slideShadows)return;v.slides.forEach(n=>{n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>a.remove())}),d()}});let o;m("virtualUpdate",()=>{v.params.effect===e&&(v.slides.length||(o=!0),requestAnimationFrame(()=>{o&&v.slides&&v.slides.length&&(b(),o=!1)}))})}function Pe(t,e){const v=_e(e);return v!==e&&(v.style.backfaceVisibility="hidden",v.style["-webkit-backface-visibility"]="hidden"),v}function De(t){let{swiper:e,duration:v,transformElements:m,allSlides:b}=t;const{activeIndex:g}=e,s=p=>p.parentElement?p.parentElement:e.slides.filter(c=>c.shadowRoot&&c.shadowRoot===p.parentNode)[0];if(e.params.virtualTranslate&&v!==0){let p=!1,d;b?d=m:d=m.filter(c=>{const o=c.classList.contains("swiper-slide-transform")?s(c):c;return e.getSlideIndex(o)===g}),d.forEach(c=>{Ce(c,()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const o=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(o)})})}}function $s(t){let{swiper:e,extendParams:v,on:m}=t;v({fadeEffect:{crossFade:!1}}),ye({effect:"fade",swiper:e,on:m,setTranslate:()=>{const{slides:s}=e,p=e.params.fadeEffect;for(let d=0;d<s.length;d+=1){const c=e.slides[d];let n=-c.swiperSlideOffset;e.params.virtualTranslate||(n-=e.translate);let a=0;e.isHorizontal()||(a=n,n=0);const S=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),f=Pe(p,c);f.style.opacity=S,f.style.transform=`translate3d(${n}px, ${a}px, 0px)`}},setTransition:s=>{const p=e.slides.map(d=>_e(d));p.forEach(d=>{d.style.transitionDuration=`${s}ms`}),De({swiper:e,duration:s,transformElements:p,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ks(t){let{swiper:e,extendParams:v,on:m}=t;v({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const b=(d,c,o)=>{let n=o?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),a=o?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");n||(n=de("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"left":"top"}`.split(" ")),d.append(n)),a||(a=de("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"right":"bottom"}`.split(" ")),d.append(a)),n&&(n.style.opacity=Math.max(-c,0)),a&&(a.style.opacity=Math.max(c,0))};ye({effect:"cube",swiper:e,on:m,setTranslate:()=>{const{el:d,wrapperEl:c,slides:o,width:n,height:a,rtlTranslate:S,size:f,browser:w}=e,u=e.params.cubeEffect,_=e.isHorizontal(),$=e.virtual&&e.params.virtual.enabled;let y=0,M;u.shadow&&(_?(M=e.wrapperEl.querySelector(".swiper-cube-shadow"),M||(M=de("div","swiper-cube-shadow"),e.wrapperEl.append(M)),M.style.height=`${n}px`):(M=d.querySelector(".swiper-cube-shadow"),M||(M=de("div","swiper-cube-shadow"),d.append(M))));for(let z=0;z<o.length;z+=1){const D=o[z];let L=z;$&&(L=parseInt(D.getAttribute("data-swiper-slide-index"),10));let R=L*90,G=Math.floor(R/360);S&&(R=-R,G=Math.floor(-R/360));const X=Math.max(Math.min(D.progress,1),-1);let T=0,j=0,P=0;L%4===0?(T=-G*4*f,P=0):(L-1)%4===0?(T=0,P=-G*4*f):(L-2)%4===0?(T=f+G*4*f,P=f):(L-3)%4===0&&(T=-f,P=3*f+f*4*G),S&&(T=-T),_||(j=T,T=0);const O=`rotateX(${_?0:-R}deg) rotateY(${_?R:0}deg) translate3d(${T}px, ${j}px, ${P}px)`;X<=1&&X>-1&&(y=L*90+X*90,S&&(y=-L*90-X*90)),D.style.transform=O,u.slideShadows&&b(D,X,_)}if(c.style.transformOrigin=`50% 50% -${f/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${f/2}px`,u.shadow)if(_)M.style.transform=`translate3d(0px, ${n/2+u.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`;else{const z=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,D=1.5-(Math.sin(z*2*Math.PI/360)/2+Math.cos(z*2*Math.PI/360)/2),L=u.shadowScale,R=u.shadowScale/D,G=u.shadowOffset;M.style.transform=`scale3d(${L}, 1, ${R}) translate3d(0px, ${a/2+G}px, ${-a/2/R}px) rotateX(-90deg)`}const A=(w.isSafari||w.isWebView)&&w.needPerspectiveFix?-f/2:0;c.style.transform=`translate3d(0px,0,${A}px) rotateX(${e.isHorizontal()?0:y}deg) rotateY(${e.isHorizontal()?-y:0}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${A}px`)},setTransition:d=>{const{el:c,slides:o}=e;if(o.forEach(n=>{n.style.transitionDuration=`${d}ms`,n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>{a.style.transitionDuration=`${d}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const n=c.querySelector(".swiper-cube-shadow");n&&(n.style.transitionDuration=`${d}ms`)}},recreateShadows:()=>{const d=e.isHorizontal();e.slides.forEach(c=>{const o=Math.max(Math.min(c.progress,1),-1);b(c,o,d)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Se(t,e,v){const m=`swiper-slide-shadow${v?`-${v}`:""}${t?` swiper-slide-shadow-${t}`:""}`,b=_e(e);let g=b.querySelector(`.${m.split(" ").join(".")}`);return g||(g=de("div",m.split(" ")),b.append(g)),g}function Cs(t){let{swiper:e,extendParams:v,on:m}=t;v({flipEffect:{slideShadows:!0,limitRotation:!0}});const b=(d,c)=>{let o=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),n=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");o||(o=Se("flip",d,e.isHorizontal()?"left":"top")),n||(n=Se("flip",d,e.isHorizontal()?"right":"bottom")),o&&(o.style.opacity=Math.max(-c,0)),n&&(n.style.opacity=Math.max(c,0))};ye({effect:"flip",swiper:e,on:m,setTranslate:()=>{const{slides:d,rtlTranslate:c}=e,o=e.params.flipEffect;for(let n=0;n<d.length;n+=1){const a=d[n];let S=a.progress;e.params.flipEffect.limitRotation&&(S=Math.max(Math.min(a.progress,1),-1));const f=a.swiperSlideOffset;let u=-180*S,_=0,$=e.params.cssMode?-f-e.translate:-f,y=0;e.isHorizontal()?c&&(u=-u):(y=$,$=0,_=-u,u=0),a.style.zIndex=-Math.abs(Math.round(S))+d.length,o.slideShadows&&b(a,S);const M=`translate3d(${$}px, ${y}px, 0px) rotateX(${_}deg) rotateY(${u}deg)`,A=Pe(o,a);A.style.transform=M}},setTransition:d=>{const c=e.slides.map(o=>_e(o));c.forEach(o=>{o.style.transitionDuration=`${d}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(n=>{n.style.transitionDuration=`${d}ms`})}),De({swiper:e,duration:d,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(d=>{let c=d.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(d.progress,1),-1)),b(d,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Es(t){let{swiper:e,extendParams:v,on:m}=t;v({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ye({effect:"coverflow",swiper:e,on:m,setTranslate:()=>{const{width:s,height:p,slides:d,slidesSizesGrid:c}=e,o=e.params.coverflowEffect,n=e.isHorizontal(),a=e.translate,S=n?-a+s/2:-a+p/2,f=n?o.rotate:-o.rotate,w=o.depth;for(let u=0,_=d.length;u<_;u+=1){const $=d[u],y=c[u],M=$.swiperSlideOffset,A=(S-M-y/2)/y,z=typeof o.modifier=="function"?o.modifier(A):A*o.modifier;let D=n?f*z:0,L=n?0:f*z,R=-w*Math.abs(z),G=o.stretch;typeof G=="string"&&G.indexOf("%")!==-1&&(G=parseFloat(o.stretch)/100*y);let X=n?0:G*z,T=n?G*z:0,j=1-(1-o.scale)*Math.abs(z);Math.abs(T)<.001&&(T=0),Math.abs(X)<.001&&(X=0),Math.abs(R)<.001&&(R=0),Math.abs(D)<.001&&(D=0),Math.abs(L)<.001&&(L=0),Math.abs(j)<.001&&(j=0);const P=`translate3d(${T}px,${X}px,${R}px)  rotateX(${L}deg) rotateY(${D}deg) scale(${j})`,O=Pe(o,$);if(O.style.transform=P,$.style.zIndex=-Math.abs(Math.round(z))+1,o.slideShadows){let H=n?$.querySelector(".swiper-slide-shadow-left"):$.querySelector(".swiper-slide-shadow-top"),h=n?$.querySelector(".swiper-slide-shadow-right"):$.querySelector(".swiper-slide-shadow-bottom");H||(H=Se("coverflow",$,n?"left":"top")),h||(h=Se("coverflow",$,n?"right":"bottom")),H&&(H.style.opacity=z>0?z:0),h&&(h.style.opacity=-z>0?-z:0)}}},setTransition:s=>{e.slides.map(d=>_e(d)).forEach(d=>{d.style.transitionDuration=`${s}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Ps(t){let{swiper:e,extendParams:v,on:m}=t;v({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const b=p=>typeof p=="string"?p:`${p}px`;ye({effect:"creative",swiper:e,on:m,setTranslate:()=>{const{slides:p,wrapperEl:d,slidesSizesGrid:c}=e,o=e.params.creativeEffect,{progressMultiplier:n}=o,a=e.params.centeredSlides;if(a){const S=c[0]/2-e.params.slidesOffsetBefore||0;d.style.transform=`translateX(calc(50% - ${S}px))`}for(let S=0;S<p.length;S+=1){const f=p[S],w=f.progress,u=Math.min(Math.max(f.progress,-o.limitProgress),o.limitProgress);let _=u;a||(_=Math.min(Math.max(f.originalProgress,-o.limitProgress),o.limitProgress));const $=f.swiperSlideOffset,y=[e.params.cssMode?-$-e.translate:-$,0,0],M=[0,0,0];let A=!1;e.isHorizontal()||(y[1]=y[0],y[0]=0);let z={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};u<0?(z=o.next,A=!0):u>0&&(z=o.prev,A=!0),y.forEach((j,P)=>{y[P]=`calc(${j}px + (${b(z.translate[P])} * ${Math.abs(u*n)}))`}),M.forEach((j,P)=>{M[P]=z.rotate[P]*Math.abs(u*n)}),f.style.zIndex=-Math.abs(Math.round(w))+p.length;const D=y.join(", "),L=`rotateX(${M[0]}deg) rotateY(${M[1]}deg) rotateZ(${M[2]}deg)`,R=_<0?`scale(${1+(1-z.scale)*_*n})`:`scale(${1-(1-z.scale)*_*n})`,G=_<0?1+(1-z.opacity)*_*n:1-(1-z.opacity)*_*n,X=`translate3d(${D}) ${L} ${R}`;if(A&&z.shadow||!A){let j=f.querySelector(".swiper-slide-shadow");if(!j&&z.shadow&&(j=Se("creative",f)),j){const P=o.shadowPerProgress?u*(1/o.limitProgress):u;j.style.opacity=Math.min(Math.max(Math.abs(P),0),1)}}const T=Pe(o,f);T.style.transform=X,T.style.opacity=G,z.origin&&(T.style.transformOrigin=z.origin)}},setTransition:p=>{const d=e.slides.map(c=>_e(c));d.forEach(c=>{c.style.transitionDuration=`${p}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(o=>{o.style.transitionDuration=`${p}ms`})}),De({swiper:e,duration:p,transformElements:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const Ts=V({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){const t=n=>{console.log("SwiperComponentReady!",n)},e=n=>{console.log("handleHSwiperSlideChange!",n.realIndex)},v=Ae(new Map),m=n=>v.get(n),b=n=>{v.set(n,!0),console.log("Click slide! target slide id:",n)};let g=null;const s=n=>{g=n},p=be();return{modules:[Ke,F,ee,Le],handleHSwiperReady:t,handleHSwiperSlideChange:e,handleHwiperSlideClick:b,isSlideClicked:m,setVSwiperRef:s,vSwiperIndex:p,updateVSwiperIndex:()=>{p.value=g==null?void 0:g.activeIndex},prevVSwiperSlide:()=>g==null?void 0:g.slidePrev(),nextVSwiperSlide:()=>g==null?void 0:g.slideNext()}}});const ae=t=>(fe("data-v-432a73ba"),t=t(),we(),t),Ms={class:"advance-example"},zs=ae(()=>k("span",null,"Loop Slide 1",-1)),Is=ae(()=>k("span",null,"Loop Slide 3",-1)),js=ae(()=>k("span",null,"Loop Slide 4",-1)),Os=ae(()=>k("span",null,"Loop Slide 5",-1)),As=ae(()=>k("span",null,"Loop Slide 6",-1)),Ls=ae(()=>k("i",{class:"iconfont icon-link-external"},null,-1)),Ns=ae(()=>k("i",{class:"iconfont icon-link-external"},null,-1)),Ds=["disabled"],Rs=ae(()=>k("i",{class:"iconfont icon-arrow-down"},null,-1)),Hs=[Rs],Vs=["disabled"],Ys=ae(()=>k("i",{class:"iconfont icon-arrow-up"},null,-1)),Ws=[Ys];function qs(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper"),d=C("ulink");return I(),J("div",Ms,[i(p,{class:"horizontal-swiper",modules:t.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:t.handleHSwiperReady,onSlideChange:t.handleHSwiperSlideChange},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[zs]),_:1}),i(s,{class:"slide"},{default:r(c=>[k("pre",null,le(c),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Is,k("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=Ze(c=>t.handleHwiperSlideClick(3),["prevent"]))},le(t.isSlideClicked(3)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[js,k("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=c=>t.handleHwiperSlideClick(4))},le(t.isSlideClicked(4)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Os,k("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=c=>t.handleHwiperSlideClick(5))},le(t.isSlideClicked(5)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[As,k("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=c=>t.handleHwiperSlideClick(6))},le(t.isSlideClicked(6)?"clicked ✅":"click me 👆"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),i(p,{class:"vertical-swiper",modules:t.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:t.setVSwiperRef,onSlideChange:t.updateVSwiperIndex},{"container-start":r(()=>[k("button",{class:"nav-button-prev",disabled:t.vSwiperIndex===0,onClick:e[4]||(e[4]=(...c)=>t.prevVSwiperSlide&&t.prevVSwiperSlide(...c))},Hs,8,Ds)]),"container-end":r(()=>[k("button",{class:"nav-button-next",disabled:t.vSwiperIndex===5-1,onClick:e[5]||(e[5]=(...c)=>t.nextVSwiperSlide&&t.nextVSwiperSlide(...c))},Ws,8,Vs)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[i(d,{class:"link",href:"https://swiperjs.com/"},{default:r(()=>[l("swiperjs.com")]),_:1}),Ls]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(d,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:r(()=>[l("discussions")]),_:1}),Ns]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}const Xs=Y(Ts,[["render",qs],["__scopeId","data-v-432a73ba"]]),Bs=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),Fs=V({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q}});function Gs(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1})}const Us=Y(Fs,[["render",Gs],["__scopeId","data-v-d379a297"]]),Ks=Object.freeze(Object.defineProperty({__proto__:null,default:Us},Symbol.toStringTag,{value:"Module"})),Zs=V({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[ee]}}});function Js(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,navigation:""},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Qs=Y(Zs,[["render",Js],["__scopeId","data-v-cffe600e"]]),er=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"})),sr=V({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function rr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const ir=Y(sr,[["render",rr],["__scopeId","data-v-26f77f8c"]]),nr=Object.freeze(Object.defineProperty({__proto__:null,default:ir},Symbol.toStringTag,{value:"Module"})),tr=V({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function lr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const ar=Y(tr,[["render",lr],["__scopeId","data-v-52d6c96d"]]),or=Object.freeze(Object.defineProperty({__proto__:null,default:ar},Symbol.toStringTag,{value:"Module"})),dr=V({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function pr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,pagination:{type:"progressbar"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const cr=Y(dr,[["render",pr],["__scopeId","data-v-876af3f6"]]),ur=Object.freeze(Object.defineProperty({__proto__:null,default:cr},Symbol.toStringTag,{value:"Module"})),mr=V({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function fr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,pagination:{type:"fraction"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const wr=Y(mr,[["render",fr],["__scopeId","data-v-9f260ff0"]]),_r=Object.freeze(Object.defineProperty({__proto__:null,default:wr},Symbol.toStringTag,{value:"Module"})),gr=V({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{bulletRenderer:(e,v)=>`<span class="${`${v} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[F]}}});function hr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,pagination:{clickable:!0,renderBullet:t.bulletRenderer}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","pagination"])}const vr=Y(gr,[["render",hr],["__scopeId","data-v-d269ecf7"]]),br=Object.freeze(Object.defineProperty({__proto__:null,default:vr},Symbol.toStringTag,{value:"Module"}));const Sr=V({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[Ne]}}});function yr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,scrollbar:{hide:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const xr=Y(Sr,[["render",yr],["__scopeId","data-v-b04ce778"]]),$r=Object.freeze(Object.defineProperty({__proto__:null,default:xr},Symbol.toStringTag,{value:"Module"})),kr=V({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Cr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,direction:"vertical",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Er=Y(kr,[["render",Cr],["__scopeId","data-v-301a455b"]]),Pr=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"})),Tr=V({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Mr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const zr=Y(Tr,[["render",Mr],["__scopeId","data-v-bd9523a7"]]),Ir=Object.freeze(Object.defineProperty({__proto__:null,default:zr},Symbol.toStringTag,{value:"Module"})),jr=V({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Or(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ar=Y(jr,[["render",Or],["__scopeId","data-v-cb4d22d6"]]),Lr=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),Nr=V({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Dr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Rr=Y(Nr,[["render",Dr],["__scopeId","data-v-8a142e1d"]]),Hr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),Vr=V({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Yr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Wr=Y(Vr,[["render",Yr],["__scopeId","data-v-ccd983d5"]]),qr=Object.freeze(Object.defineProperty({__proto__:null,default:Wr},Symbol.toStringTag,{value:"Module"})),Xr=V({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Br(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Fr=Y(Xr,[["render",Br],["__scopeId","data-v-41931b82"]]),Gr=Object.freeze(Object.defineProperty({__proto__:null,default:Fr},Symbol.toStringTag,{value:"Module"}));const Ur=V({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,Ue]}}});function Kr(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Zr=Y(Ur,[["render",Kr],["__scopeId","data-v-7676ad29"]]),Jr=Object.freeze(Object.defineProperty({__proto__:null,default:Zr},Symbol.toStringTag,{value:"Module"})),Qr=V({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,Ue,Ne,Le]}}});const K=t=>(fe("data-v-2a53ceff"),t=t(),we(),t),ei=K(()=>k("h2",null,"I Have a Dream",-1)),si=K(()=>k("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),ri=K(()=>k("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),ii=K(()=>k("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),ni=K(()=>k("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),ti=K(()=>k("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check — a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),li=K(()=>k("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),ai=K(()=>k("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),oi=K(()=>k("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),di=K(()=>k("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),pi=K(()=>k("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),ci=K(()=>k("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),ui=K(()=>k("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),mi=K(()=>k("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),fi=K(()=>k("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),wi=K(()=>k("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),_i=K(()=>k("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),gi=K(()=>k("p",null,"I have a dream today.",-1)),hi=K(()=>k("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),vi=K(()=>k("p",null,"I have a dream today.",-1)),bi=K(()=>k("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),Si=K(()=>k("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),yi=K(()=>k("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),xi=K(()=>k("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),$i=K(()=>k("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),ki=K(()=>k("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),Ci=K(()=>k("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),Ei=K(()=>k("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),Pi=K(()=>k("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),Ti=K(()=>k("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function Mi(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[ei,si,ri,ii,ni,ti,li,ai,oi,di,pi,ci,ui,mi,fi,wi,_i,gi,hi,vi,bi,Si,yi,xi,$i,ki,Ci,Ei,Pi,Ti]),_:1})]),_:1},8,["modules"])}const zi=Y(Qr,[["render",Mi],["__scopeId","data-v-2a53ceff"]]),Ii=Object.freeze(Object.defineProperty({__proto__:null,default:zi},Symbol.toStringTag,{value:"Module"}));const ji=V({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,Ke]}}});function Oi(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])}const Ai=Y(ji,[["render",Oi],["__scopeId","data-v-0f84704e"]]),Li=Object.freeze(Object.defineProperty({__proto__:null,default:Ai},Symbol.toStringTag,{value:"Module"})),Ni=V({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Di(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper swiper-h",modules:t.modules,"space-between":50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(p,{class:"swiper-v",modules:t.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 5")]),_:1})]),_:1},8,["modules"])]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 4")]),_:1})]),_:1},8,["modules"])}const Ri=Y(Ni,[["render",Di],["__scopeId","data-v-67c368d3"]]),Hi=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"})),Vi=V({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});function Yi(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Wi=Y(Vi,[["render",Yi],["__scopeId","data-v-aafb0697"]]),qi=Object.freeze(Object.defineProperty({__proto__:null,default:Wi},Symbol.toStringTag,{value:"Module"})),Xi=V({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee]}}});function Bi(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Fi=Y(Xi,[["render",Bi],["__scopeId","data-v-552c3fe4"]]),Gi=Object.freeze(Object.defineProperty({__proto__:null,default:Fi},Symbol.toStringTag,{value:"Module"})),Ui=V({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee]}}});function Ki(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Zi=Y(Ui,[["render",Ki],["__scopeId","data-v-8b814072"]]),Ji=Object.freeze(Object.defineProperty({__proto__:null,default:Zi},Symbol.toStringTag,{value:"Module"})),Qi=V({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[Ge,Ne,ee,F]}}});function en(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1})]),_:1},8,["modules"])}const sn=Y(Qi,[["render",en],["__scopeId","data-v-9f7d3491"]]),rn=Object.freeze(Object.defineProperty({__proto__:null,default:sn},Symbol.toStringTag,{value:"Module"}));const nn=V({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee,$s]}}});const tn=["src"];function ln(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(I(),J(se,null,re(5,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,tn)]),_:2},1024)),64))]),_:1},8,["modules"])}const an=Y(nn,[["render",ln],["__scopeId","data-v-85fd2afe"]]),on=Object.freeze(Object.defineProperty({__proto__:null,default:an},Symbol.toStringTag,{value:"Module"}));const dn=V({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,Es]}}});const pn={class:"coverflow-example"},cn=["src"];function un(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J("div",pn,[i(p,{class:"swiper",modules:t.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:r(()=>[(I(),J(se,null,re(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,cn)]),_:2},1024)),64))]),_:1},8,["modules"])])}const mn=Y(dn,[["render",un],["__scopeId","data-v-0b6b889c"]]),fn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"}));const wn=V({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ks]}}});const _n={class:"cube-example"},gn=["src"];function hn(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J("div",_n,[i(p,{class:"swiper",modules:t.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:r(()=>[(I(),J(se,null,re(5,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,gn)]),_:2},1024)),64))]),_:1},8,["modules"])])}const vn=Y(wn,[["render",hn],["__scopeId","data-v-8a8272d9"]]),bn=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"}));const Sn=V({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee,Cs]}}});const yn={class:"flip-example"},xn=["src"];function $n(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J("div",yn,[i(p,{class:"swiper",modules:t.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:r(()=>[(I(),J(se,null,re(6,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,xn)]),_:2},1024)),64))]),_:1},8,["modules"])])}const kn=Y(Sn,[["render",$n],["__scopeId","data-v-c8bceb45"]]),Cn=Object.freeze(Object.defineProperty({__proto__:null,default:kn},Symbol.toStringTag,{value:"Module"}));const En=V({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){const t=be(!0),e=be(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:t,setEffect:b=>{e.value=b,We(()=>{t.value=!1,We(()=>{t.value=!0})})},modules:[F,Ps]}}});const Pn={class:"creative-example"},Tn={class:"toolbar"},Mn=["onClick"],zn=["src"];function In(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J("div",Pn,[k("div",Tn,[(I(!0),J(se,null,re(t.effects,(d,c)=>(I(),J("button",{key:c,onClick:o=>t.setEffect(c)}," Effect "+le(c+1)+" "+le(c===t.effectIndex?"⎷":""),9,Mn))),128))]),t.render?(I(),B(p,{key:0,class:"swiper",modules:t.modules,effect:"creative","creative-effect":t.effects[t.effectIndex],"grab-cursor":!0,pagination:!0},{default:r(()=>[(I(),J(se,null,re(6,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,zn)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):Je("",!0)])}const jn=Y(En,[["render",In],["__scopeId","data-v-7cba39b3"]]),On=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"})),An=V({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee,Ge]}}});function Ln(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Nn=Y(An,[["render",Ln],["__scopeId","data-v-3dd6253f"]]),Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"})),Rn=V({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,Le]}}});function Hn(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Vn=Y(Rn,[["render",Hn],["__scopeId","data-v-9f7cf33b"]]),Yn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn},Symbol.toStringTag,{value:"Module"})),Wn=V({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee,ys]}}});function qn(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Xn=Y(Wn,[["render",qn],["__scopeId","data-v-be476c90"]]),Bn=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"})),Fn=V({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){const t=Ae([1,2,3,4,5]);return{slides:t,modules:[F,ee],appendSlide:()=>t.push(t.length+1),prependSlide:()=>t.unshift(t[0]-1),popSlide:()=>t.pop(),shiftSlide:()=>t.shift()}}});const Gn={class:"dynamic-example"},Un={class:"toolbar"};function Kn(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J("div",Gn,[k("div",Un,[k("button",{onClick:e[0]||(e[0]=(...d)=>t.prependSlide&&t.prependSlide(...d))},"Prepend slide"),k("button",{onClick:e[1]||(e[1]=(...d)=>t.appendSlide&&t.appendSlide(...d))},"Append slide"),k("button",{onClick:e[2]||(e[2]=(...d)=>t.popSlide&&t.popSlide(...d))},"Pop slide"),k("button",{onClick:e[3]||(e[3]=(...d)=>t.shiftSlide&&t.shiftSlide(...d))},"Shift slide")]),i(p,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:t.modules},{default:r(()=>[(I(!0),J(se,null,re(t.slides,d=>(I(),B(s,{key:d,class:"slide"},{default:r(()=>[l("Slide "+le(d),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}const Zn=Y(Fn,[["render",Kn],["__scopeId","data-v-f7a94b3e"]]),Jn=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"}));const Qn=V({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){const t=be();return{modules:[ee,xs],setThumbsSwiper:v=>{t.value=v},thumbsSwiper:t}}});const et={class:"thumb-example"},st=["src"],rt=["src"];function it(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J("div",et,[i(p,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,"space-between":10,navigation:!0,thumbs:{swiper:t.thumbsSwiper}},{default:r(()=>[(I(),J(se,null,re(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,st)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),i(p,{class:"thumbs-swiper",modules:t.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:t.setThumbsSwiper},{default:r(()=>[(I(),J(se,null,re(8,d=>i(s,{class:"slide",key:d},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`},null,8,rt)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}const nt=Y(Qn,[["render",it],["__scopeId","data-v-1631fe8d"]]),tt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const lt=V({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee,Ss]}}});const at={class:"swiper-zoom-container"},ot=["src"];function dt(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(I(),J(se,null,re(8,d=>i(s,{key:d,class:"slide"},{default:r(()=>[k("div",at,[k("img",{src:`/images/example/${d}.jpg`},null,8,ot)])]),_:2},1024)),64))]),_:1},8,["modules"])}const pt=Y(lt,[["render",dt],["__scopeId","data-v-9a97aa17"]]),ct=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"})),ut=V({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee]}}});const mt=t=>(fe("data-v-047325fd"),t=t(),we(),t),ft=["src"],wt=mt(()=>k("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function _t(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(I(),J(se,null,re(8,d=>i(s,{key:d,class:"slide",lazy:!0},{default:r(()=>[k("img",{src:`/images/example/${d}.jpg`,loading:"lazy",class:"swiper-lazy"},null,8,ft),wt]),_:2},1024)),64))]),_:1},8,["modules"])}const gt=Y(ut,[["render",_t],["__scopeId","data-v-047325fd"]]),ht=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),vt=V({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[bs,F,ee]}}});const oe=t=>(fe("data-v-075234b6"),t=t(),we(),t),bt=oe(()=>k("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),St=oe(()=>k("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),yt=oe(()=>k("div",{class:"text","data-swiper-parallax":"-100"},[k("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),xt=oe(()=>k("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),$t=oe(()=>k("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),kt=oe(()=>k("div",{class:"text","data-swiper-parallax":"-100"},[k("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Ct=oe(()=>k("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),Et=oe(()=>k("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Pt=oe(()=>k("div",{class:"text","data-swiper-parallax":"-100"},[k("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function Tt(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":r(()=>[k("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:Qe({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[bt,St,yt]),_:1}),i(s,{class:"slide"},{default:r(()=>[xt,$t,kt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ct,Et,Pt]),_:1})]),_:1},8,["modules"])}const Mt=Y(vt,[["render",Tt],["__scopeId","data-v-075234b6"]]),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),It=V({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee]}}});function jt(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ot=Y(It,[["render",jt],["__scopeId","data-v-8263ad4d"]]),At=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"})),Lt=V({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F]}}});const Nt=t=>(fe("data-v-57e729e2"),t=t(),we(),t),Dt=Nt(()=>k("div",{class:"tip"},"→ Resize the browser window ←",-1));function Rt(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J(se,null,[Dt,i(p,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])],64)}const Ht=Y(Lt,[["render",Rt],["__scopeId","data-v-57e729e2"]]),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"})),Yt=V({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){return{modules:[F,ee]}}});function Wt(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const qt=Y(Yt,[["render",Wt],["__scopeId","data-v-6c1d9970"]]),Xt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"})),Bt=V({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){let t=null;const e=g=>{t=g},v=be(!1);return{menuOpened:v,toggleMenu:()=>{v.value?t==null||t.slideNext():t==null||t.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{v.value=(t==null?void 0:t.activeIndex)===0}}}});const Te=t=>(fe("data-v-03bb8b06"),t=t(),we(),t),Ft=Te(()=>k("div",{class:"bar"},null,-1)),Gt=Te(()=>k("div",{class:"bar"},null,-1)),Ut=Te(()=>k("div",{class:"bar"},null,-1)),Kt=[Ft,Gt,Ut],Zt=Te(()=>k("div",null,"Content slide",-1));function Jt(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:t.setSwiperRef,onSlideChange:t.handleSlideChange},{default:r(()=>[i(s,{class:"menu"},{default:r(()=>[l("Menu slide")]),_:1}),i(s,{class:"content"},{default:r(()=>[k("div",{class:es(["menu-button",{opened:t.menuOpened}]),onClick:e[0]||(e[0]=(...d)=>t.toggleMenu&&t.toggleMenu(...d))},Kt,2),Zt]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}const Qt=Y(Bt,[["render",Jt],["__scopeId","data-v-03bb8b06"]]),el=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"}));const sl=V({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){let t=null;const e=p=>{t=p},v=p=>{t==null||t.slideTo(p-1,0)},m=Ae(Array.from({length:500}).map((p,d)=>d+1));let b=1;return{modules:[F,ee,vs],setSwiperRef:e,slides:m,slideTo:v,append:()=>{m.push(m.length)},prepend:()=>{m.unshift(b-2,b-1),b-=2,t==null||t.slideTo(t.activeIndex+2,0)}}}});const rl={class:"toolbar"};function il(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),J(se,null,[k("div",rl,[k("button",{onClick:e[0]||(e[0]=d=>t.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),k("button",{onClick:e[1]||(e[1]=d=>t.slideTo(1)),class:"prepend-slide"},"Slide 1"),k("button",{onClick:e[2]||(e[2]=d=>t.slideTo(250)),class:"slide-250"},"Slide 250"),k("button",{onClick:e[3]||(e[3]=d=>t.slideTo(500)),class:"slide-500"},"Slide 500"),k("button",{onClick:e[4]||(e[4]=d=>t.append()),class:"append-slides"},"Append Slide")]),i(p,{class:"swiper",modules:t.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:t.setSwiperRef},{default:r(()=>[(I(!0),J(se,null,re(t.slides,(d,c)=>(I(),B(s,{key:c,"virtual-index":c,class:"slide"},{default:r(()=>[l(" Slide "+le(d),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}const nl=Y(sl,[["render",il],["__scopeId","data-v-4192059a"]]),tl=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"})),ll=V({name:"swiper-example-change-direction",title:"Change direction (→ resize ←)",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue?vue&type=script&lang.ts",components:{Swiper:W,SwiperSlide:q},setup(){let t=null;return{modules:[ee],setSwiperRef:m=>{t=m},handleResize:()=>{t==null||t.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}});function al(t,e,v,m,b,g){const s=C("swiper-slide"),p=C("swiper");return I(),B(p,{class:"swiper",modules:t.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:t.setSwiperRef,onResize:t.handleResize},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}const ol=Y(ll,[["render",al],["__scopeId","data-v-855e23ab"]]),dl=Object.freeze(Object.defineProperty({__proto__:null,default:ol},Symbol.toStringTag,{value:"Module"})),pl=`<template>\r
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
`,cl=`<template>\r
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
`,ul=`<template>\r
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
`,ml=`<template>\r
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
`,fl=`<template>\r
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
`,wl=`<template>\r
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
`,_l=`<template>\r
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
`,gl=`<template>\r
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
`,hl=`<template>\r
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
`,vl=`<template>\r
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
`,bl=`<template>\r
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
`,Sl=`<template>\r
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
`,yl=`<template>\r
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
`,xl=`<template>\r
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
`,$l=`<template>\r
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
`,kl=`<template>\r
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
`,Cl=`<template>\r
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
`,El=`<template>\r
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
`,Pl=`<template>\r
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
`,Tl=`<template>\r
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
`,Ml=`<template>\r
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
`,zl=`<template>\r
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
`,Il=`<template>\r
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
`,jl=`<template>\r
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
`,Ol=`<template>\r
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
`,Al=`<template>\r
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
`,Ll=`<template>\r
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
`,Nl=`<template>\r
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
`,Dl=`<template>\r
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
`,Rl=`<template>\r
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
`,Hl=`<template>\r
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
`,Vl=`<template>\r
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
`,Yl=`<template>\r
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
`,Wl=`<template>\r
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
`,ql=`<template>\r
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
`,Xl=`<template>\r
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
`,Bl=`<template>\r
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
`,Fl=`<template>\r
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
`,Gl=`<template>\r
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
`,Ul=`<template>\r
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
`,Kl=`<template>\r
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
`,Zl=`<template>\r
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
`,Xe=Object.assign({"./01-advance.vue":Bs,"./02-default.vue":Ks,"./03-navigation.vue":er,"./04-pagination.vue":nr,"./05-pagination-dynamic.vue":or,"./06-pagination-progress.vue":ur,"./07-pagination-fraction.vue":_r,"./08-pagination-custom.vue":br,"./09-scrollbar.vue":$r,"./10-vertical.vue":Pr,"./11-space-between.vue":Ir,"./12-slides-per-view.vue":Lr,"./13-slides-per-view-auto.vue":Hr,"./14-centered.vue":qr,"./15-centered-auto.vue":Gr,"./16-freemode.vue":Jr,"./17-scroll-container.vue":Ii,"./18-slides-per-column.vue":Li,"./19-nested.vue":Hi,"./20-grab-cursor.vue":qi,"./21-infinite-loop.vue":Gi,"./22-infinite-loop-with-slides-per-group.vue":Ji,"./23-slides-per-group-skip.vue":rn,"./24-effect-fade.vue":on,"./25-effect-coverflow.vue":fn,"./26-effect-cube.vue":bn,"./27-effect-flip.vue":Cn,"./28-effect-creative.vue":On,"./29-keyboard-control.vue":Dn,"./30-mousewheel-control.vue":Yn,"./31-autoplay.vue":Bn,"./32-dynamic-slides.vue":Jn,"./33-thumbs-gallery.vue":tt,"./34-zoom.vue":ct,"./35-lazy-load-images.vue":ht,"./36-parallax.vue":zt,"./37-rtl.vue":At,"./38-responsive-breakpoints.vue":Vt,"./39-autoheight.vue":Xt,"./40-slideable-menu.vue":el,"./41-virtual-slides.vue":tl,"./42-change-direction.vue":dl}),Jl=Object.assign({"./01-advance.vue":pl,"./02-default.vue":cl,"./03-navigation.vue":ul,"./04-pagination.vue":ml,"./05-pagination-dynamic.vue":fl,"./06-pagination-progress.vue":wl,"./07-pagination-fraction.vue":_l,"./08-pagination-custom.vue":gl,"./09-scrollbar.vue":hl,"./10-vertical.vue":vl,"./11-space-between.vue":bl,"./12-slides-per-view.vue":Sl,"./13-slides-per-view-auto.vue":yl,"./14-centered.vue":xl,"./15-centered-auto.vue":$l,"./16-freemode.vue":kl,"./17-scroll-container.vue":Cl,"./18-slides-per-column.vue":El,"./19-nested.vue":Pl,"./20-grab-cursor.vue":Tl,"./21-infinite-loop.vue":Ml,"./22-infinite-loop-with-slides-per-group.vue":zl,"./23-slides-per-group-skip.vue":Il,"./24-effect-fade.vue":jl,"./25-effect-coverflow.vue":Ol,"./26-effect-cube.vue":Al,"./27-effect-flip.vue":Ll,"./28-effect-creative.vue":Nl,"./29-keyboard-control.vue":Dl,"./30-mousewheel-control.vue":Rl,"./31-autoplay.vue":Hl,"./32-dynamic-slides.vue":Vl,"./33-thumbs-gallery.vue":Yl,"./34-zoom.vue":Wl,"./35-lazy-load-images.vue":ql,"./36-parallax.vue":Xl,"./37-rtl.vue":Bl,"./38-responsive-breakpoints.vue":Fl,"./39-autoheight.vue":Gl,"./40-slideable-menu.vue":Ul,"./41-virtual-slides.vue":Kl,"./42-change-direction.vue":Zl}),Ql=Object.keys(Xe).map(t=>({component:Xe[t].default,raw:Jl[t],language:"vue"})),ea={class:"swiper-example"},sa=V({__name:"vue-awesome-swiper",setup(t){const{repository:e,route:v,packages:m}=rs.VueAwesomeSwiper,b=Ql.map(as);return is(ps({title:cs(e),keywords:[us(e),"How to use Swiper on vue3?"].join(","),description:ms(e),ogUrl:fs(v),ogImage:ws(e),ogImageWidth:1200,ogImageHeight:600})),(g,s)=>(I(),B(gs,{repository:ce(e)},{default:r(()=>[i(ds,{repository:ce(e),packages:ce(m),"header-ad-provider":ce(os).GoogleAdSense},{actions:r(()=>[i(ke,{icon:"doc",text:"Vue(2) Examples",href:ce(_s)(ce(e))},null,8,["href"]),i(ke,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),i(ke,{icon:"doc",text:"Swiper Vue(3) Component",href:"https://swiperjs.com/vue"}),i(ke,{icon:"discussions",text:"Swiper Discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:r(()=>[i(hs,{examples:ce(b)},{component:r(p=>[k("div",ea,[(I(),B(ss(p.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages","header-ad-provider"])]),_:1},8,["repository"]))}});const da=Y(sa,[["__scopeId","data-v-b2748395"]]);export{da as default};
