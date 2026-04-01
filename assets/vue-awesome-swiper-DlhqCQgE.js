import{$ as e,A as t,Ct as n,E as r,F as i,G as a,Ht as o,I as s,L as c,M as l,N as u,Wt as d,Z as f,ct as p,gt as m,j as h,nt as g,t as _,tt as v,u as y,vt as b}from"./head-DEUNXC35.js";import{d as x}from"./index-BBC4X0b_.js";import{t as S}from"./_plugin-vue_export-helper-wiDke0Jd.js";import{c as C,f as w,m as T,o as E,s as D,u as O}from"./navbar-wp0BaDxa.js";import{A as k,C as A,D as j,E as M,O as N,S as P,T as ee,_ as F,b as te,c as I,d as L,f as R,g as z,h as B,k as ne,l as re,m as V,o as H,p as U,r as ie,s as W,t as ae,u as oe,v as G,w as K,x as se,y as q}from"./homepage-uqo_hEKE.js";import{t as J}from"./link-Cq_l_0ON.js";import{t as ce}from"./examples-BstGXAem.js";function le({swiper:e,extendParams:t,on:n,emit:r}){t({virtual:{enabled:!1,slides:[],cache:!0,slidesPerViewAutoSlideSize:320,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let i,a=j();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};let o=a.createElement(`div`);function s(t,n){let r=e.params.virtual;if(r.cache&&e.virtual.cache[n])return e.virtual.cache[n];let i;return r.renderSlide?(i=r.renderSlide.call(e,t,n),typeof i==`string`&&(M(o,i),i=o.children[0])):i=e.isElement?U(`swiper-slide`):U(`div`,e.params.slideClass),i.setAttribute(`data-swiper-slide-index`,n),r.renderSlide||M(i,t),r.cache&&(e.virtual.cache[n]=i),i}function c(t,n,i){let{slidesPerGroup:a,centeredSlides:o,slidesPerView:c,loop:l,initialSlide:u}=e.params;if(n&&!l&&u>0)return;let{addSlidesBefore:d,addSlidesAfter:f,slidesPerViewAutoSlideSize:p}=e.params.virtual,{from:m,to:h,slides:g,slidesGrid:_,offset:v}=e.virtual;e.params.cssMode||e.updateActiveIndex();let y=i===void 0?e.activeIndex||0:i,b;b=e.rtlTranslate?`right`:e.isHorizontal()?`left`:`top`;let x;if(c===`auto`)if(p){let t=e.size;t||=e.isHorizontal()?e.el.getBoundingClientRect().width:e.el.getBoundingClientRect().height,x=Math.max(1,Math.ceil(t/p))}else x=1;else x=c;let S,C;o?(S=Math.floor(x/2)+a+f,C=Math.floor(x/2)+a+d):(S=x+(a-1)+f,C=(l?x:a)+d);let w=y-C,T=y+S;l||(w=Math.max(w,0),T=Math.min(T,g.length-1));let E=(e.slidesGrid[w]||0)-(e.slidesGrid[0]||0);l&&y>=C?(w-=C,o||(E+=e.slidesGrid[0])):l&&y<C&&(w=-C,o&&(E+=e.slidesGrid[0])),Object.assign(e.virtual,{from:w,to:T,offset:E,slidesGrid:e.slidesGrid,slidesBefore:C,slidesAfter:S});function D(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),r(`virtualUpdate`)}if(m===w&&h===T&&!t){e.slidesGrid!==_&&E!==v&&e.slides.forEach(t=>{t.style[b]=`${E-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),r(`virtualUpdate`);return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:E,from:w,to:T,slides:function(){let e=[];for(let t=w;t<=T;t+=1)e.push(g[t]);return e}()}),e.params.virtual.renderExternalUpdate?D():r(`virtualUpdate`);return}let O=[],k=[],A=e=>{let t=e;return e<0?t=g.length+e:t>=g.length&&(t-=g.length),t};if(t)e.slides.filter(t=>t.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(e=>{e.remove()});else for(let t=m;t<=h;t+=1)if(t<w||t>T){let n=A(t);e.slides.filter(t=>t.matches(`.${e.params.slideClass}[data-swiper-slide-index="${n}"], swiper-slide[data-swiper-slide-index="${n}"]`)).forEach(e=>{e.remove()})}let j=l?-g.length:0,M=l?g.length*2:g.length;for(let e=j;e<M;e+=1)if(e>=w&&e<=T){let n=A(e);h===void 0||t?k.push(n):(e>h&&k.push(n),e<m&&O.push(n))}if(k.forEach(t=>{e.slidesEl.append(s(g[t],t))}),l)for(let t=O.length-1;t>=0;--t){let n=O[t];e.slidesEl.prepend(s(g[n],n))}else O.sort((e,t)=>t-e),O.forEach(t=>{e.slidesEl.prepend(s(g[t],t))});V(e.slidesEl,`.swiper-slide, swiper-slide`).forEach(t=>{t.style[b]=`${E-Math.abs(e.cssOverflowAdjustment())}px`}),D()}function l(t){if(typeof t==`object`&&`length`in t)for(let n=0;n<t.length;n+=1)t[n]&&e.virtual.slides.push(t[n]);else e.virtual.slides.push(t);c(!0)}function u(t){let n=e.activeIndex,r=n+1,i=1;if(Array.isArray(t)){for(let n=0;n<t.length;n+=1)t[n]&&e.virtual.slides.unshift(t[n]);r=n+t.length,i=t.length}else e.virtual.slides.unshift(t);if(e.params.virtual.cache){let t=e.virtual.cache,n={};Object.keys(t).forEach(e=>{let r=t[e],a=r.getAttribute(`data-swiper-slide-index`);a&&r.setAttribute(`data-swiper-slide-index`,parseInt(a,10)+i),n[parseInt(e,10)+i]=r}),e.virtual.cache=n}c(!0),e.slideTo(r,0)}function d(t){if(t==null)return;let n=e.activeIndex;if(Array.isArray(t))for(let r=t.length-1;r>=0;--r)e.params.virtual.cache&&(delete e.virtual.cache[t[r]],Object.keys(e.virtual.cache).forEach(n=>{n>t&&(e.virtual.cache[n-1]=e.virtual.cache[n],e.virtual.cache[n-1].setAttribute(`data-swiper-slide-index`,n-1),delete e.virtual.cache[n])})),e.virtual.slides.splice(t[r],1),t[r]<n&&--n,n=Math.max(n,0);else e.params.virtual.cache&&(delete e.virtual.cache[t],Object.keys(e.virtual.cache).forEach(n=>{n>t&&(e.virtual.cache[n-1]=e.virtual.cache[n],e.virtual.cache[n-1].setAttribute(`data-swiper-slide-index`,n-1),delete e.virtual.cache[n])})),e.virtual.slides.splice(t,1),t<n&&--n,n=Math.max(n,0);c(!0),e.slideTo(n,0)}function f(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}n(`beforeInit`,()=>{if(!e.params.virtual.enabled)return;let t;if(e.passedParams.virtual.slides===void 0){let n=[...e.slidesEl.children].filter(t=>t.matches(`.${e.params.slideClass}, swiper-slide`));n&&n.length&&(e.virtual.slides=[...n],t=!0,n.forEach((t,n)=>{t.setAttribute(`data-swiper-slide-index`,n),e.virtual.cache[n]=t,t.remove()}))}t||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c(!1,!0)}),n(`setTranslate`,()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(i),i=setTimeout(()=>{c()},100)):c())}),n(`init update resize`,()=>{e.params.virtual.enabled&&e.params.cssMode&&ee(e.wrapperEl,`--swiper-virtual-size`,`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:l,prependSlide:u,removeSlide:d,removeAllSlides:f,update:c})}function ue({swiper:e,extendParams:t,on:n,emit:r}){let i=j(),a=N();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0,speed:void 0}});function o(t){if(!e.enabled)return;let{rtlTranslate:n}=e,o=t;o.originalEvent&&(o=o.originalEvent);let s=o.keyCode||o.charCode,c=e.params.keyboard.pageUpDown,l=c&&s===33,u=c&&s===34,d=s===37,f=s===39,p=s===38,m=s===40;if(!e.allowSlideNext&&(e.isHorizontal()&&f||e.isVertical()&&m||u)||!e.allowSlidePrev&&(e.isHorizontal()&&d||e.isVertical()&&p||l))return!1;if(o.shiftKey||o.altKey||o.ctrlKey||o.metaKey||i.activeElement&&(i.activeElement.isContentEditable||i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()===`input`||i.activeElement.nodeName.toLowerCase()===`textarea`)))return;if(e.params.keyboard.onlyInViewport&&(l||u||d||f||p||m)){let t=!1;if(z(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&z(e.el,`.${e.params.slideActiveClass}`).length===0)return;let r=e.el,i=r.clientWidth,o=r.clientHeight,s=a.innerWidth,c=a.innerHeight,l=B(r);n&&(l.left-=r.scrollLeft);let u=[[l.left,l.top],[l.left+i,l.top],[l.left,l.top+o],[l.left+i,l.top+o]];for(let e=0;e<u.length;e+=1){let n=u[e];if(n[0]>=0&&n[0]<=s&&n[1]>=0&&n[1]<=c){if(n[0]===0&&n[1]===0)continue;t=!0}}if(!t)return}let h=e.params.keyboard.speed;e.isHorizontal()?((l||u||d||f)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),((u||f)&&!n||(l||d)&&n)&&e.slideNext(h),((l||d)&&!n||(u||f)&&n)&&e.slidePrev(h)):((l||u||p||m)&&(o.preventDefault?o.preventDefault():o.returnValue=!1),(u||m)&&e.slideNext(h),(l||p)&&e.slidePrev(h)),r(`keyPress`,s)}function s(){e.keyboard.enabled||(i.addEventListener(`keydown`,o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(i.removeEventListener(`keydown`,o),e.keyboard.enabled=!1)}n(`init`,()=>{e.params.keyboard.enabled&&s()}),n(`destroy`,()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:s,disable:c})}var de=`<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;function Y({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:`swiper-button-disabled`,hiddenClass:`swiper-button-hidden`,lockClass:`swiper-button-lock`,navigationDisabledClass:`swiper-navigation-disabled`}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:de};function i(t){let n;return t&&typeof t==`string`&&e.isElement&&(n=e.el.querySelector(t)||e.hostEl.querySelector(t),n)?n:(t&&(typeof t==`string`&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t==`string`&&n&&n.length>1&&e.el.querySelectorAll(t).length===1?n=e.el.querySelector(t):n&&n.length===1&&(n=n[0])),t&&!n?t:n)}function a(t,n){let r=e.params.navigation;t=P(t),t.forEach(t=>{t&&(t.classList[n?`add`:`remove`](...r.disabledClass.split(` `)),t.tagName===`BUTTON`&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](r.lockClass))})}function o(){let{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop){a(n,!1),a(t,!1);return}a(n,e.isBeginning&&!e.params.rewind),a(t,e.isEnd&&!e.params.rewind)}function s(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r(`navigationPrev`))}function c(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r(`navigationNext`))}function l(){let t=e.params.navigation;if(e.params.navigation=oe(e,e.originalParams.navigation,e.params.navigation,{nextEl:`swiper-button-next`,prevEl:`swiper-button-prev`}),!(t.nextEl||t.prevEl))return;let n=i(t.nextEl),r=i(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r}),n=P(n),r=P(r);let a=(n,r)=>{if(n){if(t.addIcons&&n.matches(`.swiper-button-next,.swiper-button-prev`)&&!n.querySelector(`svg`)){let e=document.createElement(`div`);M(e,de),n.appendChild(e.querySelector(`svg`)),e.remove()}n.addEventListener(`click`,r===`next`?c:s)}!e.enabled&&n&&n.classList.add(...t.lockClass.split(` `))};n.forEach(e=>a(e,`next`)),r.forEach(e=>a(e,`prev`))}function u(){let{nextEl:t,prevEl:n}=e.navigation;t=P(t),n=P(n);let r=(t,n)=>{t.removeEventListener(`click`,n===`next`?c:s),t.classList.remove(...e.params.navigation.disabledClass.split(` `))};t.forEach(e=>r(e,`next`)),n.forEach(e=>r(e,`prev`))}n(`init`,()=>{e.params.navigation.enabled===!1?f():(l(),o())}),n(`toEdge fromEdge lock unlock`,()=>{o()}),n(`destroy`,()=>{u()}),n(`enable disable`,()=>{let{nextEl:t,prevEl:n}=e.navigation;if(t=P(t),n=P(n),e.enabled){o();return}[...t,...n].filter(e=>!!e).forEach(t=>t.classList.add(e.params.navigation.lockClass))}),n(`click`,(t,n)=>{let{nextEl:i,prevEl:a}=e.navigation;i=P(i),a=P(a);let o=n.target,s=a.includes(o)||i.includes(o);if(e.isElement&&!s){let e=n.path||n.composedPath&&n.composedPath();e&&(s=e.find(e=>i.includes(e)||a.includes(e)))}if(e.params.navigation.hideOnClick&&!s){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;let t;i.length?t=i[0].classList.contains(e.params.navigation.hiddenClass):a.length&&(t=a[0].classList.contains(e.params.navigation.hiddenClass)),r(t===!0?`navigationShow`:`navigationHide`),[...i,...a].filter(e=>!!e).forEach(t=>t.classList.toggle(e.params.navigation.hiddenClass))}});let d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(` `)),l(),o()},f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(` `)),u()};Object.assign(e.navigation,{enable:d,disable:f,update:o,init:l,destroy:u})}function X({swiper:e,extendParams:t,on:n,emit:r}){let i=j(),a=!1,o=null,s=null,c,l,u,d;t({scrollbar:{el:null,dragSize:`auto`,hide:!1,draggable:!1,snapOnRelease:!0,lockClass:`swiper-scrollbar-lock`,dragClass:`swiper-scrollbar-drag`,scrollbarDisabledClass:`swiper-scrollbar-disabled`,horizontalClass:`swiper-scrollbar-horizontal`,verticalClass:`swiper-scrollbar-vertical`}}),e.scrollbar={el:null,dragEl:null};function f(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:t,rtlTranslate:n}=e,{dragEl:r,el:i}=t,a=e.params.scrollbar,s=e.params.loop?e.progressLoop:e.progress,c=l,d=(u-l)*s;n?(d=-d,d>0?(c=l-d,d=0):-d+l>u&&(c=u+d)):d<0?(c=l+d,d=0):d+l>u&&(c=u-d),e.isHorizontal()?(r.style.transform=`translate3d(${d}px, 0, 0)`,r.style.width=`${c}px`):(r.style.transform=`translate3d(0px, ${d}px, 0)`,r.style.height=`${c}px`),a.hide&&(clearTimeout(o),i.style.opacity=1,o=setTimeout(()=>{i.style.opacity=0,i.style.transitionDuration=`400ms`},1e3))}function p(t){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${t}ms`)}function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:t}=e,{dragEl:n,el:r}=t;n.style.width=``,n.style.height=``,u=e.isHorizontal()?r.offsetWidth:r.offsetHeight,d=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),l=e.params.scrollbar.dragSize===`auto`?u*d:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?n.style.width=`${l}px`:n.style.height=`${l}px`,d>=1?r.style.display=`none`:r.style.display=``,e.params.scrollbar.hide&&(r.style.opacity=0),e.params.watchOverflow&&e.enabled&&t.el.classList[e.isLocked?`add`:`remove`](e.params.scrollbar.lockClass)}function h(t){return e.isHorizontal()?t.clientX:t.clientY}function g(t){let{scrollbar:n,rtlTranslate:r}=e,{el:i}=n,a;a=(h(t)-B(i)[e.isHorizontal()?`left`:`top`]-(c===null?l/2:c))/(u-l),a=Math.max(Math.min(a,1),0),r&&(a=1-a);let o=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*a;e.updateProgress(o),e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}function _(t){let n=e.params.scrollbar,{scrollbar:i,wrapperEl:o}=e,{el:l,dragEl:u}=i;a=!0,c=t.target===u?h(t)-t.target.getBoundingClientRect()[e.isHorizontal()?`left`:`top`]:null,t.preventDefault(),t.stopPropagation(),o.style.transitionDuration=`100ms`,u.style.transitionDuration=`100ms`,g(t),clearTimeout(s),l.style.transitionDuration=`0ms`,n.hide&&(l.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style[`scroll-snap-type`]=`none`),r(`scrollbarDragStart`,t)}function v(t){let{scrollbar:n,wrapperEl:i}=e,{el:o,dragEl:s}=n;a&&(t.preventDefault&&t.cancelable?t.preventDefault():t.returnValue=!1,g(t),i.style.transitionDuration=`0ms`,o.style.transitionDuration=`0ms`,s.style.transitionDuration=`0ms`,r(`scrollbarDragMove`,t))}function y(t){let n=e.params.scrollbar,{scrollbar:i,wrapperEl:o}=e,{el:c}=i;a&&(a=!1,e.params.cssMode&&(e.wrapperEl.style[`scroll-snap-type`]=``,o.style.transitionDuration=``),n.hide&&(clearTimeout(s),s=A(()=>{c.style.opacity=0,c.style.transitionDuration=`400ms`},1e3)),r(`scrollbarDragEnd`,t),n.snapOnRelease&&e.slideToClosest())}function b(t){let{scrollbar:n,params:r}=e,a=n.el;if(!a)return;let o=a,s=r.passiveListeners?{passive:!1,capture:!1}:!1,c=r.passiveListeners?{passive:!0,capture:!1}:!1;if(!o)return;let l=t===`on`?`addEventListener`:`removeEventListener`;o[l](`pointerdown`,_,s),i[l](`pointermove`,v,s),i[l](`pointerup`,y,c)}function x(){!e.params.scrollbar.el||!e.scrollbar.el||b(`on`)}function S(){!e.params.scrollbar.el||!e.scrollbar.el||b(`off`)}function C(){let{scrollbar:t,el:n}=e;e.params.scrollbar=oe(e,e.originalParams.scrollbar,e.params.scrollbar,{el:`swiper-scrollbar`});let r=e.params.scrollbar;if(!r.el)return;let a;if(typeof r.el==`string`&&e.isElement&&(a=e.el.querySelector(r.el)),!a&&typeof r.el==`string`){if(a=i.querySelectorAll(r.el),!a.length)return}else a||=r.el;e.params.uniqueNavElements&&typeof r.el==`string`&&a.length>1&&n.querySelectorAll(r.el).length===1&&(a=n.querySelector(r.el)),a.length>0&&(a=a[0]),a.classList.add(e.isHorizontal()?r.horizontalClass:r.verticalClass);let o;a&&(o=a.querySelector(re(e.params.scrollbar.dragClass)),o||(o=U(`div`,e.params.scrollbar.dragClass),a.append(o))),Object.assign(t,{el:a,dragEl:o}),r.draggable&&x(),a&&a.classList[e.enabled?`remove`:`add`](...R(e.params.scrollbar.lockClass))}function w(){let t=e.params.scrollbar,n=e.scrollbar.el;n&&n.classList.remove(...R(e.isHorizontal()?t.horizontalClass:t.verticalClass)),S()}n(`changeDirection`,()=>{if(!e.scrollbar||!e.scrollbar.el)return;let t=e.params.scrollbar,{el:n}=e.scrollbar;n=P(n),n.forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n(`init`,()=>{e.params.scrollbar.enabled===!1?E():(C(),m(),f())}),n(`update resize observerUpdate lock unlock changeDirection`,()=>{m()}),n(`setTranslate`,()=>{f()}),n(`setTransition`,(e,t)=>{p(t)}),n(`enable disable`,()=>{let{el:t}=e.scrollbar;t&&t.classList[e.enabled?`remove`:`add`](...R(e.params.scrollbar.lockClass))}),n(`destroy`,()=>{w()});let T=()=>{e.el.classList.remove(...R(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...R(e.params.scrollbar.scrollbarDisabledClass)),C(),m(),f()},E=()=>{e.el.classList.add(...R(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...R(e.params.scrollbar.scrollbarDisabledClass)),w()};Object.assign(e.scrollbar,{enable:T,disable:E,updateSize:m,setTranslate:f,init:C,destroy:w})}function fe({swiper:e,extendParams:t,on:n}){t({parallax:{enabled:!1}});let r=`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]`,i=(t,n)=>{let{rtl:r}=e,i=r?-1:1,a=t.getAttribute(`data-swiper-parallax`)||`0`,o=t.getAttribute(`data-swiper-parallax-x`),s=t.getAttribute(`data-swiper-parallax-y`),c=t.getAttribute(`data-swiper-parallax-scale`),l=t.getAttribute(`data-swiper-parallax-opacity`),u=t.getAttribute(`data-swiper-parallax-rotate`);if(o||s?(o||=`0`,s||=`0`):e.isHorizontal()?(o=a,s=`0`):(s=a,o=`0`),o=o.indexOf(`%`)>=0?`${parseInt(o,10)*n*i}%`:`${o*n*i}px`,s=s.indexOf(`%`)>=0?`${parseInt(s,10)*n}%`:`${s*n}px`,l!=null){let e=l-(l-1)*(1-Math.abs(n));t.style.opacity=e}let d=`translate3d(${o}, ${s}, 0px)`;if(c!=null){let e=c-(c-1)*(1-Math.abs(n));d+=` scale(${e})`}if(u&&u!=null){let e=u*n*-1;d+=` rotate(${e}deg)`}t.style.transform=d},a=()=>{let{el:t,slides:n,progress:a,snapGrid:o,isElement:s}=e,c=V(t,r);e.isElement&&c.push(...V(e.hostEl,r)),c.forEach(e=>{i(e,a)}),n.forEach((t,n)=>{let s=t.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!==`auto`&&(s+=Math.ceil(n/2)-a*(o.length-1)),s=Math.min(Math.max(s,-1),1),t.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(e=>{i(e,s)})})},o=(t=e.params.speed)=>{let{el:n,hostEl:i}=e,a=[...n.querySelectorAll(r)];e.isElement&&a.push(...i.querySelectorAll(r)),a.forEach(e=>{let n=parseInt(e.getAttribute(`data-swiper-parallax-duration`),10)||t;t===0&&(n=0),e.style.transitionDuration=`${n}ms`})};n(`beforeInit`,()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),n(`init`,()=>{e.params.parallax.enabled&&a()}),n(`setTranslate`,()=>{e.params.parallax.enabled&&a()}),n(`setTransition`,(t,n)=>{e.params.parallax.enabled&&o(n)})}function pe({swiper:e,extendParams:t,on:n,emit:r}){let i=N();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:`swiper-zoom-container`,zoomedSlideClass:`swiper-slide-zoomed`}}),e.zoom={enabled:!1};let a=1,o=!1,s=!1,c={x:0,y:0},l,u,d=[],f={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},p={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},m={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},h=1;Object.defineProperty(e.zoom,`scale`,{get(){return h},set(e){if(h!==e){let t=f.imageEl,n=f.slideEl;r(`zoomChange`,e,t,n)}h=e}});function g(){if(d.length<2)return 1;let e=d[0].pageX,t=d[0].pageY,n=d[1].pageX,r=d[1].pageY;return Math.sqrt((n-e)**2+(r-t)**2)}function _(){let t=e.params.zoom,n=f.imageWrapEl.getAttribute(`data-swiper-zoom`)||t.maxRatio;if(t.limitToOriginalSize&&f.imageEl&&f.imageEl.naturalWidth){let e=f.imageEl.naturalWidth/f.imageEl.offsetWidth;return Math.min(e,n)}return n}function v(){if(d.length<2)return{x:null,y:null};let e=f.imageEl.getBoundingClientRect();return[(d[0].pageX+(d[1].pageX-d[0].pageX)/2-e.x-i.scrollX)/a,(d[0].pageY+(d[1].pageY-d[0].pageY)/2-e.y-i.scrollY)/a]}function y(){return e.isElement?`swiper-slide`:`.${e.params.slideClass}`}function b(t){let n=y();return!!(t.target.matches(n)||e.slides.filter(e=>e.contains(t.target)).length>0)}function x(t){let n=`.${e.params.zoom.containerClass}`;return!!(t.target.matches(n)||[...e.hostEl.querySelectorAll(n)].filter(e=>e.contains(t.target)).length>0)}function S(t){if(t.pointerType===`mouse`&&d.splice(0,d.length),!b(t))return;let n=e.params.zoom;if(l=!1,u=!1,d.push(t),!(d.length<2)){if(l=!0,f.scaleStart=g(),!f.slideEl){f.slideEl=t.target.closest(`.${e.params.slideClass}, swiper-slide`),f.slideEl||=e.slides[e.activeIndex];let r=f.slideEl.querySelector(`.${n.containerClass}`);if(r&&=r.querySelectorAll(`picture, img, svg, canvas, .swiper-zoom-target`)[0],f.imageEl=r,r?f.imageWrapEl=z(f.imageEl,`.${n.containerClass}`)[0]:f.imageWrapEl=void 0,!f.imageWrapEl){f.imageEl=void 0;return}f.maxRatio=_()}if(f.imageEl){let[e,t]=v();f.originX=e,f.originY=t,f.imageEl.style.transitionDuration=`0ms`}o=!0}}function C(t){if(!b(t))return;let n=e.params.zoom,r=e.zoom,i=d.findIndex(e=>e.pointerId===t.pointerId);i>=0&&(d[i]=t),!(d.length<2)&&(u=!0,f.scaleMove=g(),f.imageEl&&(r.scale=f.scaleMove/f.scaleStart*a,r.scale>f.maxRatio&&(r.scale=f.maxRatio-1+(r.scale-f.maxRatio+1)**.5),r.scale<n.minRatio&&(r.scale=n.minRatio+1-(n.minRatio-r.scale+1)**.5),f.imageEl.style.transform=`translate3d(0,0,0) scale(${r.scale})`))}function w(t){if(!b(t)||t.pointerType===`mouse`&&t.type===`pointerout`)return;let n=e.params.zoom,r=e.zoom,i=d.findIndex(e=>e.pointerId===t.pointerId);i>=0&&d.splice(i,1),!(!l||!u)&&(l=!1,u=!1,f.imageEl&&(r.scale=Math.max(Math.min(r.scale,f.maxRatio),n.minRatio),f.imageEl.style.transitionDuration=`${e.params.speed}ms`,f.imageEl.style.transform=`translate3d(0,0,0) scale(${r.scale})`,a=r.scale,o=!1,r.scale>1&&f.slideEl?f.slideEl.classList.add(`${n.zoomedSlideClass}`):r.scale<=1&&f.slideEl&&f.slideEl.classList.remove(`${n.zoomedSlideClass}`),r.scale===1&&(f.originX=0,f.originY=0,f.slideEl=void 0)))}let T;function E(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function D(){clearTimeout(T),e.touchEventsData.preventTouchMoveFromPointerMove=!0,T=setTimeout(()=>{e.destroyed||E()})}function O(t){let n=e.device;if(!f.imageEl||p.isTouched)return;n.android&&t.cancelable&&t.preventDefault(),p.isTouched=!0;let r=d.length>0?d[0]:t;p.touchesStart.x=r.pageX,p.touchesStart.y=r.pageY}function k(t){let n=t.pointerType===`mouse`&&e.params.zoom.panOnMouseMove;if(!b(t)||!x(t))return;let r=e.zoom;if(!f.imageEl)return;if(!p.isTouched||!f.slideEl){n&&M(t);return}if(n){M(t);return}p.isMoved||(p.width=f.imageEl.offsetWidth||f.imageEl.clientWidth,p.height=f.imageEl.offsetHeight||f.imageEl.clientHeight,p.startX=te(f.imageWrapEl,`x`)||0,p.startY=te(f.imageWrapEl,`y`)||0,f.slideWidth=f.slideEl.offsetWidth,f.slideHeight=f.slideEl.offsetHeight,f.imageWrapEl.style.transitionDuration=`0ms`);let i=p.width*r.scale,s=p.height*r.scale;if(p.minX=Math.min(f.slideWidth/2-i/2,0),p.maxX=-p.minX,p.minY=Math.min(f.slideHeight/2-s/2,0),p.maxY=-p.minY,p.touchesCurrent.x=d.length>0?d[0].pageX:t.pageX,p.touchesCurrent.y=d.length>0?d[0].pageY:t.pageY,Math.max(Math.abs(p.touchesCurrent.x-p.touchesStart.x),Math.abs(p.touchesCurrent.y-p.touchesStart.y))>5&&(e.allowClick=!1),!p.isMoved&&!o){if(e.isHorizontal()&&(Math.floor(p.minX)===Math.floor(p.startX)&&p.touchesCurrent.x<p.touchesStart.x||Math.floor(p.maxX)===Math.floor(p.startX)&&p.touchesCurrent.x>p.touchesStart.x)){p.isTouched=!1,E();return}if(!e.isHorizontal()&&(Math.floor(p.minY)===Math.floor(p.startY)&&p.touchesCurrent.y<p.touchesStart.y||Math.floor(p.maxY)===Math.floor(p.startY)&&p.touchesCurrent.y>p.touchesStart.y)){p.isTouched=!1,E();return}}t.cancelable&&t.preventDefault(),t.stopPropagation(),D(),p.isMoved=!0;let c=(r.scale-a)/(f.maxRatio-e.params.zoom.minRatio),{originX:l,originY:u}=f;p.currentX=p.touchesCurrent.x-p.touchesStart.x+p.startX+c*(p.width-l*2),p.currentY=p.touchesCurrent.y-p.touchesStart.y+p.startY+c*(p.height-u*2),p.currentX<p.minX&&(p.currentX=p.minX+1-(p.minX-p.currentX+1)**.8),p.currentX>p.maxX&&(p.currentX=p.maxX-1+(p.currentX-p.maxX+1)**.8),p.currentY<p.minY&&(p.currentY=p.minY+1-(p.minY-p.currentY+1)**.8),p.currentY>p.maxY&&(p.currentY=p.maxY-1+(p.currentY-p.maxY+1)**.8),m.prevPositionX||=p.touchesCurrent.x,m.prevPositionY||=p.touchesCurrent.y,m.prevTime||=Date.now(),m.x=(p.touchesCurrent.x-m.prevPositionX)/(Date.now()-m.prevTime)/2,m.y=(p.touchesCurrent.y-m.prevPositionY)/(Date.now()-m.prevTime)/2,Math.abs(p.touchesCurrent.x-m.prevPositionX)<2&&(m.x=0),Math.abs(p.touchesCurrent.y-m.prevPositionY)<2&&(m.y=0),m.prevPositionX=p.touchesCurrent.x,m.prevPositionY=p.touchesCurrent.y,m.prevTime=Date.now(),f.imageWrapEl.style.transform=`translate3d(${p.currentX}px, ${p.currentY}px,0)`}function A(){let t=e.zoom;if(d.length=0,!f.imageEl)return;if(!p.isTouched||!p.isMoved){p.isTouched=!1,p.isMoved=!1;return}p.isTouched=!1,p.isMoved=!1;let n=300,r=300,i=m.x*n,a=p.currentX+i,o=m.y*r,s=p.currentY+o;m.x!==0&&(n=Math.abs((a-p.currentX)/m.x)),m.y!==0&&(r=Math.abs((s-p.currentY)/m.y));let c=Math.max(n,r);p.currentX=a,p.currentY=s;let l=p.width*t.scale,u=p.height*t.scale;p.minX=Math.min(f.slideWidth/2-l/2,0),p.maxX=-p.minX,p.minY=Math.min(f.slideHeight/2-u/2,0),p.maxY=-p.minY,p.currentX=Math.max(Math.min(p.currentX,p.maxX),p.minX),p.currentY=Math.max(Math.min(p.currentY,p.maxY),p.minY),f.imageWrapEl.style.transitionDuration=`${c}ms`,f.imageWrapEl.style.transform=`translate3d(${p.currentX}px, ${p.currentY}px,0)`}function j(){let t=e.zoom;f.slideEl&&e.activeIndex!==e.slides.indexOf(f.slideEl)&&(f.imageEl&&(f.imageEl.style.transform=`translate3d(0,0,0) scale(1)`),f.imageWrapEl&&(f.imageWrapEl.style.transform=`translate3d(0,0,0)`),f.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),t.scale=1,a=1,f.slideEl=void 0,f.imageEl=void 0,f.imageWrapEl=void 0,f.originX=0,f.originY=0)}function M(e){if(a<=1||!f.imageWrapEl||!b(e)||!x(e))return;let t=i.getComputedStyle(f.imageWrapEl).transform,n=new i.DOMMatrix(t);if(!s){s=!0,c.x=e.clientX,c.y=e.clientY,p.startX=n.e,p.startY=n.f,p.width=f.imageEl.offsetWidth||f.imageEl.clientWidth,p.height=f.imageEl.offsetHeight||f.imageEl.clientHeight,f.slideWidth=f.slideEl.offsetWidth,f.slideHeight=f.slideEl.offsetHeight;return}let r=(e.clientX-c.x)*-3,o=(e.clientY-c.y)*-3,l=p.width*a,u=p.height*a,d=f.slideWidth,m=f.slideHeight,h=Math.min(d/2-l/2,0),g=-h,_=Math.min(m/2-u/2,0),v=-_,y=Math.max(Math.min(p.startX+r,g),h),S=Math.max(Math.min(p.startY+o,v),_);f.imageWrapEl.style.transitionDuration=`0ms`,f.imageWrapEl.style.transform=`translate3d(${y}px, ${S}px, 0)`,c.x=e.clientX,c.y=e.clientY,p.startX=y,p.startY=S,p.currentX=y,p.currentY=S}function P(t){let n=e.zoom,r=e.params.zoom;if(!f.slideEl){t&&t.target&&(f.slideEl=t.target.closest(`.${e.params.slideClass}, swiper-slide`)),f.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?f.slideEl=V(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:f.slideEl=e.slides[e.activeIndex]);let n=f.slideEl.querySelector(`.${r.containerClass}`);n&&=n.querySelectorAll(`picture, img, svg, canvas, .swiper-zoom-target`)[0],f.imageEl=n,n?f.imageWrapEl=z(f.imageEl,`.${r.containerClass}`)[0]:f.imageWrapEl=void 0}if(!f.imageEl||!f.imageWrapEl)return;f.maxRatio=_(),e.params.cssMode&&(e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.touchAction=`none`),f.slideEl.classList.add(`${r.zoomedSlideClass}`);let o,s,c,l,u,d,m,h,g,v,y,b,x,S,C,w,T,E;p.touchesStart.x===void 0&&t?(o=t.pageX,s=t.pageY):(o=p.touchesStart.x,s=p.touchesStart.y);let D=a,O=typeof t==`number`?t:null;a===1&&O&&(o=void 0,s=void 0,p.touchesStart.x=void 0,p.touchesStart.y=void 0);let k=_();n.scale=O||k,a=O||k,t&&!(a===1&&O)?(T=f.slideEl.offsetWidth,E=f.slideEl.offsetHeight,c=B(f.slideEl).left+i.scrollX,l=B(f.slideEl).top+i.scrollY,u=c+T/2-o,d=l+E/2-s,g=f.imageEl.offsetWidth||f.imageEl.clientWidth,v=f.imageEl.offsetHeight||f.imageEl.clientHeight,y=g*n.scale,b=v*n.scale,x=Math.min(T/2-y/2,0),S=Math.min(E/2-b/2,0),C=-x,w=-S,D>0&&O&&typeof p.currentX==`number`&&typeof p.currentY==`number`?(m=p.currentX*n.scale/D,h=p.currentY*n.scale/D):(m=u*n.scale,h=d*n.scale),m<x&&(m=x),m>C&&(m=C),h<S&&(h=S),h>w&&(h=w)):(m=0,h=0),O&&n.scale===1&&(f.originX=0,f.originY=0),p.currentX=m,p.currentY=h,f.imageWrapEl.style.transitionDuration=`300ms`,f.imageWrapEl.style.transform=`translate3d(${m}px, ${h}px,0)`,f.imageEl.style.transitionDuration=`300ms`,f.imageEl.style.transform=`translate3d(0,0,0) scale(${n.scale})`}function ee(){let t=e.zoom,n=e.params.zoom;if(!f.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?f.slideEl=V(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:f.slideEl=e.slides[e.activeIndex];let t=f.slideEl.querySelector(`.${n.containerClass}`);t&&=t.querySelectorAll(`picture, img, svg, canvas, .swiper-zoom-target`)[0],f.imageEl=t,t?f.imageWrapEl=z(f.imageEl,`.${n.containerClass}`)[0]:f.imageWrapEl=void 0}!f.imageEl||!f.imageWrapEl||(f.maxRatio=_(),e.params.cssMode&&(e.wrapperEl.style.overflow=``,e.wrapperEl.style.touchAction=``),t.scale=1,a=1,p.currentX=void 0,p.currentY=void 0,p.touchesStart.x=void 0,p.touchesStart.y=void 0,f.imageWrapEl.style.transitionDuration=`300ms`,f.imageWrapEl.style.transform=`translate3d(0,0,0)`,f.imageEl.style.transitionDuration=`300ms`,f.imageEl.style.transform=`translate3d(0,0,0) scale(1)`,f.slideEl.classList.remove(`${n.zoomedSlideClass}`),f.slideEl=void 0,f.originX=0,f.originY=0,e.params.zoom.panOnMouseMove&&(c={x:0,y:0},s&&(s=!1,p.startX=0,p.startY=0)))}function F(t){let n=e.zoom;n.scale&&n.scale!==1?ee():P(t)}function I(){return{passiveListener:e.params.passiveListeners?{passive:!0,capture:!1}:!1,activeListenerWithCapture:e.params.passiveListeners?{passive:!1,capture:!0}:!0}}function L(){let t=e.zoom;if(t.enabled)return;t.enabled=!0;let{passiveListener:n,activeListenerWithCapture:r}=I();e.wrapperEl.addEventListener(`pointerdown`,S,n),e.wrapperEl.addEventListener(`pointermove`,C,r),[`pointerup`,`pointercancel`,`pointerout`].forEach(t=>{e.wrapperEl.addEventListener(t,w,n)}),e.wrapperEl.addEventListener(`pointermove`,k,r)}function R(){let t=e.zoom;if(!t.enabled)return;t.enabled=!1;let{passiveListener:n,activeListenerWithCapture:r}=I();e.wrapperEl.removeEventListener(`pointerdown`,S,n),e.wrapperEl.removeEventListener(`pointermove`,C,r),[`pointerup`,`pointercancel`,`pointerout`].forEach(t=>{e.wrapperEl.removeEventListener(t,w,n)}),e.wrapperEl.removeEventListener(`pointermove`,k,r)}n(`init`,()=>{e.params.zoom.enabled&&L()}),n(`destroy`,()=>{R()}),n(`touchStart`,(t,n)=>{e.zoom.enabled&&O(n)}),n(`touchEnd`,(t,n)=>{e.zoom.enabled&&A()}),n(`doubleTap`,(t,n)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&F(n)}),n(`transitionEnd`,()=>{e.zoom.enabled&&e.params.zoom.enabled&&j()}),n(`slideChange`,()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&j()}),Object.assign(e.zoom,{enable:L,disable:R,in:P,out:ee,toggle:F})}function me({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,s=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,l,u=new Date().getTime(),d,f,p,m,h,g;function _(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener(`transitionend`,_),!(g||t.detail&&t.detail.bySwiperTouchMove)&&T())}let v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&=(c=l,!1);let t=e.autoplay.paused?l:u+c-new Date().getTime();e.autoplay.timeLeft=t,r(`autoplayTimeLeft`,t,t/s),o=requestAnimationFrame(()=>{v()})},y=()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.find(e=>e.classList.contains(`swiper-slide-active`)):e.slides[e.activeIndex],t)return parseInt(t.getAttribute(`data-swiper-autoplay`),10)},b=()=>{let t=e.params.autoplay.delay,n=y();return!Number.isNaN(n)&&n>0&&(t=n),t},x=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let n=t;n===void 0&&(n=b(),s=n,c=n),l=n;let i=e.params.speed,d=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,i,!0,!0),r(`autoplay`)):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,i,!0,!0),r(`autoplay`)),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return n>0?(clearTimeout(a),a=setTimeout(()=>{d()},n)):requestAnimationFrame(()=>{d()}),n},S=()=>{u=new Date().getTime(),e.autoplay.running=!0,x(),r(`autoplayStart`)},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r(`autoplayStop`)},w=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),t||(h=!0);let i=()=>{r(`autoplayPause`),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener(`transitionend`,_):T()};if(e.autoplay.paused=!0,n){i();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),i())},T=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,x(l)):x(),e.autoplay.paused=!1,r(`autoplayResume`))},E=()=>{if(e.destroyed||!e.autoplay.running)return;let t=j();t.visibilityState===`hidden`&&(h=!0,w(!0)),t.visibilityState===`visible`&&T()},D=t=>{t.pointerType===`mouse`&&(h=!0,g=!0,!(e.animating||e.autoplay.paused)&&w(!0))},O=t=>{t.pointerType===`mouse`&&(g=!1,e.autoplay.paused&&T())},k=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener(`pointerenter`,D),e.el.addEventListener(`pointerleave`,O))},A=()=>{e.el&&typeof e.el!=`string`&&(e.el.removeEventListener(`pointerenter`,D),e.el.removeEventListener(`pointerleave`,O))},M=()=>{j().addEventListener(`visibilitychange`,E)},N=()=>{j().removeEventListener(`visibilitychange`,E)};n(`init`,()=>{e.params.autoplay.enabled&&(k(),M(),S())}),n(`destroy`,()=>{A(),N(),e.autoplay.running&&C()}),n(`_freeModeStaticRelease`,()=>{(p||h)&&T()}),n(`_freeModeNoMomentumRelease`,()=>{e.params.autoplay.disableOnInteraction?C():w(!0,!0)}),n(`beforeTransitionStart`,(t,n,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?w(!0,!0):C())}),n(`sliderFirstMove`,()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}f=!0,p=!1,h=!1,m=setTimeout(()=>{h=!0,p=!0,w(!0)},200)}}),n(`touchEnd`,()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(a),e.params.autoplay.disableOnInteraction){p=!1,f=!1;return}p&&e.params.cssMode&&T(),p=!1,f=!1}}),n(`slideChange`,()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(l=b(),s=b())}),Object.assign(e.autoplay,{start:S,stop:C,pause:w,resume:T})}function he({swiper:e,extendParams:t,on:n}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:`swiper-slide-thumb-active`,thumbsContainerClass:`swiper-thumbs`}});let r=!1,i=!1;e.thumbs={swiper:null};function a(){let t=e.thumbs.swiper;return!t||t.destroyed?!1:t.params.virtual&&t.params.virtual.enabled}function o(){let t=e.thumbs.swiper;if(!t||t.destroyed)return;let n=t.clickedIndex,r=t.clickedSlide;if(r&&r.classList.contains(e.params.thumbs.slideThumbActiveClass)||n==null)return;let i;i=t.params.loop?parseInt(t.clickedSlide.getAttribute(`data-swiper-slide-index`),10):n,e.params.loop?e.slideToLoop(i):e.slideTo(i)}function s(){let{thumbs:t}=e.params;if(r)return!1;r=!0;let n=e.constructor;if(t.swiper instanceof n){if(t.swiper.destroyed)return r=!1,!1;e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(se(t.swiper)){let r=Object.assign({},t.swiper);Object.assign(r,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new n(r),i=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on(`tap`,o),a()&&e.thumbs.swiper.on(`virtualUpdate`,()=>{c(!1,{autoScroll:!1})}),!0}function c(t,n){let r=e.thumbs.swiper;if(!r||r.destroyed)return;let i=1,o=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(i=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),r.slides.forEach(e=>e.classList.remove(o)),r.params.loop||a())for(let t=0;t<i;t+=1)V(r.slidesEl,`[data-swiper-slide-index="${e.realIndex+t}"]`).forEach(e=>{e.classList.add(o)});else for(let t=0;t<i;t+=1)r.slides[e.realIndex+t]&&r.slides[e.realIndex+t].classList.add(o);(n?.autoScroll??!0)&&l(t?0:void 0)}function l(t){let n=e.thumbs.swiper;if(!n||n.destroyed)return;let r=n.params.slidesPerView===`auto`?n.slidesPerViewDynamic():n.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,a=i&&!n.params.loop;if(e.realIndex!==n.realIndex||a){let o=n.activeIndex,s,c;if(n.params.loop){let t=n.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)===`${e.realIndex}`);s=n.slides.indexOf(t),c=e.activeIndex>e.previousIndex?`next`:`prev`}else s=e.realIndex,c=s>e.previousIndex?`next`:`prev`;a&&(s+=c===`next`?i:-1*i),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(s)<0&&(n.params.centeredSlides?s=s>o?s-Math.floor(r/2)+1:s+Math.floor(r/2)-1:s>o&&n.params.slidesPerGroup,n.slideTo(s,t))}}n(`beforeInit`,()=>{let{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper==`string`||t.swiper instanceof HTMLElement){let n=j(),r=()=>{let r=typeof t.swiper==`string`?n.querySelector(t.swiper):t.swiper;if(r&&r.swiper)t.swiper=r.swiper,s(),c(!0);else if(r){let n=`${e.params.eventsPrefix}init`,i=a=>{t.swiper=a.detail[0],r.removeEventListener(n,i),s(),c(!0),t.swiper.update(),e.update()};r.addEventListener(n,i)}return r},i=()=>{e.destroyed||r()||requestAnimationFrame(i)};requestAnimationFrame(i)}else s(),c(!0)}),n(`slideChange update resize observerUpdate`,()=>{c()}),n(`setTransition`,(t,n)=>{let r=e.thumbs.swiper;!r||r.destroyed||r.setTransition(n)}),n(`beforeDestroy`,()=>{let t=e.thumbs.swiper;!t||t.destroyed||i&&t.destroy()}),Object.assign(e.thumbs,{init:s,update:c})}function ge({swiper:e,extendParams:t,emit:n,once:r}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function i(){if(e.params.cssMode)return;let t=e.getTranslate();e.setTranslate(t),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;let{touchEventsData:t,touches:n}=e;t.velocities.length===0&&t.velocities.push({position:n[e.isHorizontal()?`startX`:`startY`],time:t.touchStartTime}),t.velocities.push({position:n[e.isHorizontal()?`currentX`:`currentY`],time:K()})}function o({currentPos:t}){if(e.params.cssMode)return;let{params:i,wrapperEl:a,rtlTranslate:o,snapGrid:s,touchEventsData:c}=e,l=K()-c.touchStartTime;if(t<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(t>-e.maxTranslate()){e.slides.length<s.length?e.slideTo(s.length-1):e.slideTo(e.slides.length-1);return}if(i.freeMode.momentum){if(c.velocities.length>1){let t=c.velocities.pop(),n=c.velocities.pop(),r=t.position-n.position,a=t.time-n.time;e.velocity=r/a,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(a>150||K()-t.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,c.velocities.length=0;let t=1e3*i.freeMode.momentumRatio,l=e.velocity*t,u=e.translate+l;o&&(u=-u);let d=!1,f,p=Math.abs(e.velocity)*20*i.freeMode.momentumBounceRatio,m;if(u<e.maxTranslate())i.freeMode.momentumBounce?(u+e.maxTranslate()<-p&&(u=e.maxTranslate()-p),f=e.maxTranslate(),d=!0,c.allowMomentumBounce=!0):u=e.maxTranslate(),i.loop&&i.centeredSlides&&(m=!0);else if(u>e.minTranslate())i.freeMode.momentumBounce?(u-e.minTranslate()>p&&(u=e.minTranslate()+p),f=e.minTranslate(),d=!0,c.allowMomentumBounce=!0):u=e.minTranslate(),i.loop&&i.centeredSlides&&(m=!0);else if(i.freeMode.sticky){let t;for(let e=0;e<s.length;e+=1)if(s[e]>-u){t=e;break}u=Math.abs(s[t]-u)<Math.abs(s[t-1]-u)||e.swipeDirection===`next`?s[t]:s[t-1],u=-u}if(m&&r(`transitionEnd`,()=>{e.loopFix()}),e.velocity!==0){if(t=Math.abs(o?(-u-e.translate)/e.velocity:(u-e.translate)/e.velocity),i.freeMode.sticky){let n=Math.abs((o?-u:u)-e.translate),r=e.slidesSizesGrid[e.activeIndex];t=n<r?i.speed:n<2*r?i.speed*1.5:i.speed*2.5}}else if(i.freeMode.sticky){e.slideToClosest();return}i.freeMode.momentumBounce&&d?(e.updateProgress(f),e.setTransition(t),e.setTranslate(u),e.transitionStart(!0,e.swipeDirection),e.animating=!0,F(a,()=>{!e||e.destroyed||!c.allowMomentumBounce||(n(`momentumBounce`),e.setTransition(i.speed),setTimeout(()=>{e.setTranslate(f),F(a,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(n(`_freeModeNoMomentumRelease`),e.updateProgress(u),e.setTransition(t),e.setTranslate(u),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,F(a,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(u),e.updateActiveIndex(),e.updateSlidesClasses()}else if(i.freeMode.sticky){e.slideToClosest();return}else i.freeMode&&n(`_freeModeNoMomentumRelease`);(!i.freeMode.momentum||l>=i.longSwipesMs)&&(n(`_freeModeStaticRelease`),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:i,onTouchMove:a,onTouchEnd:o}})}function _e({swiper:e,extendParams:t,on:n}){t({grid:{rows:1,fill:`column`}});let r,i,a,o,s=()=>{let t=e.params.spaceBetween;return typeof t==`string`&&t.indexOf(`%`)>=0?t=parseFloat(t.replace(`%`,``))/100*e.size:typeof t==`string`&&(t=parseFloat(t)),t};n(`init`,()=>{o=e.params.grid&&e.params.grid.rows>1}),n(`update`,()=>{let{params:t,el:n}=e,r=t.grid&&t.grid.rows>1;o&&!r?(n.classList.remove(`${t.containerModifierClass}grid`,`${t.containerModifierClass}grid-column`),a=1,e.emitContainerClasses()):!o&&r&&(n.classList.add(`${t.containerModifierClass}grid`),t.grid.fill===`column`&&n.classList.add(`${t.containerModifierClass}grid-column`),e.emitContainerClasses()),o=r}),e.grid={initSlides:t=>{let{slidesPerView:n}=e.params,{rows:o,fill:s}=e.params.grid,c=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:t.length;a=Math.floor(c/o),r=Math.floor(c/o)===c/o?c:Math.ceil(c/o)*o,n!==`auto`&&s===`row`&&(r=Math.max(r,Math.floor(n)*o)),i=r/o},unsetSlides:()=>{e.slides&&e.slides.forEach(t=>{t.swiperSlideGridSet&&(t.style.height=``,t.style[e.getDirectionLabel(`margin-top`)]=``)})},updateSlide:(t,n,o)=>{let{slidesPerGroup:c}=e.params,l=s(),{rows:u,fill:d}=e.params.grid,f=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:o.length,p,m,h;if(d===`row`&&c>1){let e=Math.floor(t/(c*u)),i=t-u*c*e,a=e===0?c:Math.min(Math.ceil((f-e*u*c)/u),c);h=Math.floor(i/a),m=i-h*a+e*c,p=m+h*r/u,n.style.order=p}else d===`column`?(m=Math.floor(t/u),h=t-m*u,(m>a||m===a&&h===u-1)&&(h+=1,h>=u&&(h=0,m+=1))):(h=Math.floor(t/i),m=t-h*i);n.row=h,n.column=m,n.style.height=`calc((100% - ${(u-1)*l}px) / ${u})`,n.style[e.getDirectionLabel(`margin-top`)]=h===0?``:l&&`${l}px`,n.swiperSlideGridSet=!0},updateWrapperSize:(t,n)=>{let{centeredSlides:i,roundLengths:a}=e.params,o=s(),{rows:c}=e.params.grid;if(e.virtualSize=(t+o)*r,e.virtualSize=Math.ceil(e.virtualSize/c)-o,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+o}px`),i){let t=[];for(let r=0;r<n.length;r+=1){let i=n[r];a&&(i=Math.floor(i)),n[r]<e.virtualSize+n[0]&&t.push(i)}n.splice(0,n.length),n.push(...t)}}}}function Z(e){let{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:c,getEffectParams:l}=e;r(`beforeInit`,()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);let e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)}),r(`setTranslate _virtualUpdated`,()=>{n.params.effect===t&&i()}),r(`setTransition`,(e,r)=>{n.params.effect===t&&a(r)}),r(`transitionEnd`,()=>{if(n.params.effect===t&&c){if(!l||!l().slideShadows)return;n.slides.forEach(e=>{e.querySelectorAll(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).forEach(e=>e.remove())}),c()}});let u;r(`virtualUpdate`,()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function Q(e,t){let n=q(t);return n!==t&&(n.style.backfaceVisibility=`hidden`,n.style[`-webkit-backface-visibility`]=`hidden`),n}function ve({swiper:e,duration:t,transformElements:n,allSlides:r}){let{activeIndex:i}=e,a=t=>t.parentElement?t.parentElement:e.slides.find(e=>e.shadowRoot&&e.shadowRoot===t.parentNode);if(e.params.virtualTranslate&&t!==0){let t=!1,o;o=r?n:n.filter(t=>{let n=t.classList.contains(`swiper-slide-transform`)?a(t):t;return e.getSlideIndex(n)===i}),o.forEach(n=>{F(n,()=>{if(t||!e||e.destroyed)return;t=!0,e.animating=!1;let n=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(n)})})}}function ye({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1}}),Z({effect:`fade`,swiper:e,on:n,setTranslate:()=>{let{slides:t}=e,n=e.params.fadeEffect;for(let r=0;r<t.length;r+=1){let t=e.slides[r],i=-t.swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let a=0;e.isHorizontal()||(a=i,i=0);let o=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t.progress),0):1+Math.min(Math.max(t.progress,-1),0),s=Q(n,t);s.style.opacity=o,s.style.transform=`translate3d(${i}px, ${a}px, 0px)`}},setTransition:t=>{let n=e.slides.map(e=>q(e));n.forEach(e=>{e.style.transitionDuration=`${t}ms`}),ve({swiper:e,duration:t,transformElements:n,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function be({swiper:e,extendParams:t,on:n}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});let r=(e,t,n)=>{let r=n?e.querySelector(`.swiper-slide-shadow-left`):e.querySelector(`.swiper-slide-shadow-top`),i=n?e.querySelector(`.swiper-slide-shadow-right`):e.querySelector(`.swiper-slide-shadow-bottom`);r||(r=U(`div`,`swiper-slide-shadow-cube swiper-slide-shadow-${n?`left`:`top`}`.split(` `)),e.append(r)),i||(i=U(`div`,`swiper-slide-shadow-cube swiper-slide-shadow-${n?`right`:`bottom`}`.split(` `)),e.append(i)),r&&(r.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};Z({effect:`cube`,swiper:e,on:n,setTranslate:()=>{let{el:t,wrapperEl:n,slides:i,width:a,height:o,rtlTranslate:s,size:c,browser:l}=e,u=G(e),d=e.params.cubeEffect,f=e.isHorizontal(),p=e.virtual&&e.params.virtual.enabled,m=0,h;d.shadow&&(f?(h=e.wrapperEl.querySelector(`.swiper-cube-shadow`),h||(h=U(`div`,`swiper-cube-shadow`),e.wrapperEl.append(h)),h.style.height=`${a}px`):(h=t.querySelector(`.swiper-cube-shadow`),h||(h=U(`div`,`swiper-cube-shadow`),t.append(h))));for(let e=0;e<i.length;e+=1){let t=i[e],n=e;p&&(n=parseInt(t.getAttribute(`data-swiper-slide-index`),10));let a=n*90,o=Math.floor(a/360);s&&(a=-a,o=Math.floor(-a/360));let l=Math.max(Math.min(t.progress,1),-1),h=0,g=0,_=0;n%4==0?(h=-o*4*c,_=0):(n-1)%4==0?(h=0,_=-o*4*c):(n-2)%4==0?(h=c+o*4*c,_=c):(n-3)%4==0&&(h=-c,_=3*c+c*4*o),s&&(h=-h),f||(g=h,h=0);let v=`rotateX(${u(f?0:-a)}deg) rotateY(${u(f?a:0)}deg) translate3d(${h}px, ${g}px, ${_}px)`;l<=1&&l>-1&&(m=n*90+l*90,s&&(m=-n*90-l*90)),t.style.transform=v,d.slideShadows&&r(t,l,f)}if(n.style.transformOrigin=`50% 50% -${c/2}px`,n.style[`-webkit-transform-origin`]=`50% 50% -${c/2}px`,d.shadow)if(f)h.style.transform=`translate3d(0px, ${a/2+d.shadowOffset}px, ${-a/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${d.shadowScale})`;else{let e=Math.abs(m)-Math.floor(Math.abs(m)/90)*90,t=1.5-(Math.sin(e*2*Math.PI/360)/2+Math.cos(e*2*Math.PI/360)/2),n=d.shadowScale,r=d.shadowScale/t,i=d.shadowOffset;h.style.transform=`scale3d(${n}, 1, ${r}) translate3d(0px, ${o/2+i}px, ${-o/2/r}px) rotateX(-89.99deg)`}let g=(l.isSafari||l.isWebView)&&l.needPerspectiveFix?-c/2:0;n.style.transform=`translate3d(0px,0,${g}px) rotateX(${u(e.isHorizontal()?0:m)}deg) rotateY(${u(e.isHorizontal()?-m:0)}deg)`,n.style.setProperty(`--swiper-cube-translate-z`,`${g}px`)},setTransition:t=>{let{el:n,slides:r}=e;if(r.forEach(e=>{e.style.transitionDuration=`${t}ms`,e.querySelectorAll(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).forEach(e=>{e.style.transitionDuration=`${t}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){let e=n.querySelector(`.swiper-cube-shadow`);e&&(e.style.transitionDuration=`${t}ms`)}},recreateShadows:()=>{let t=e.isHorizontal();e.slides.forEach(e=>{r(e,Math.max(Math.min(e.progress,1),-1),t)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function $(e,t,n){let r=`swiper-slide-shadow${n?`-${n}`:``}${e?` swiper-slide-shadow-${e}`:``}`,i=q(t),a=i.querySelector(`.${r.split(` `).join(`.`)}`);return a||(a=U(`div`,r.split(` `)),i.append(a)),a}function xe({swiper:e,extendParams:t,on:n}){t({flipEffect:{slideShadows:!0,limitRotation:!0}});let r=(t,n)=>{let r=e.isHorizontal()?t.querySelector(`.swiper-slide-shadow-left`):t.querySelector(`.swiper-slide-shadow-top`),i=e.isHorizontal()?t.querySelector(`.swiper-slide-shadow-right`):t.querySelector(`.swiper-slide-shadow-bottom`);r||=$(`flip`,t,e.isHorizontal()?`left`:`top`),i||=$(`flip`,t,e.isHorizontal()?`right`:`bottom`),r&&(r.style.opacity=Math.max(-n,0)),i&&(i.style.opacity=Math.max(n,0))};Z({effect:`flip`,swiper:e,on:n,setTranslate:()=>{let{slides:t,rtlTranslate:n}=e,i=e.params.flipEffect,a=G(e);for(let o=0;o<t.length;o+=1){let s=t[o],c=s.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(s.progress,1),-1));let l=s.swiperSlideOffset,u=-180*c,d=0,f=e.params.cssMode?-l-e.translate:-l,p=0;e.isHorizontal()?n&&(u=-u):(p=f,f=0,d=-u,u=0),s.style.zIndex=-Math.abs(Math.round(c))+t.length,i.slideShadows&&r(s,c);let m=`translate3d(${f}px, ${p}px, 0px) rotateX(${a(d)}deg) rotateY(${a(u)}deg)`,h=Q(i,s);h.style.transform=m}},setTransition:t=>{let n=e.slides.map(e=>q(e));n.forEach(e=>{e.style.transitionDuration=`${t}ms`,e.querySelectorAll(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).forEach(e=>{e.style.transitionDuration=`${t}ms`})}),ve({swiper:e,duration:t,transformElements:n})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(t=>{let n=t.progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(t.progress,1),-1)),r(t,n)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Se({swiper:e,extendParams:t,on:n}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Z({effect:`coverflow`,swiper:e,on:n,setTranslate:()=>{let{width:t,height:n,slides:r,slidesSizesGrid:i}=e,a=e.params.coverflowEffect,o=e.isHorizontal(),s=e.translate,c=o?-s+t/2:-s+n/2,l=o?a.rotate:-a.rotate,u=a.depth,d=G(e);for(let e=0,t=r.length;e<t;e+=1){let t=r[e],n=i[e],s=(c-t.swiperSlideOffset-n/2)/n,f=typeof a.modifier==`function`?a.modifier(s):s*a.modifier,p=o?l*f:0,m=o?0:l*f,h=-u*Math.abs(f),g=a.stretch;typeof g==`string`&&g.indexOf(`%`)!==-1&&(g=parseFloat(a.stretch)/100*n);let _=o?0:g*f,v=o?g*f:0,y=1-(1-a.scale)*Math.abs(f);Math.abs(v)<.001&&(v=0),Math.abs(_)<.001&&(_=0),Math.abs(h)<.001&&(h=0),Math.abs(p)<.001&&(p=0),Math.abs(m)<.001&&(m=0),Math.abs(y)<.001&&(y=0);let b=`translate3d(${v}px,${_}px,${h}px)  rotateX(${d(m)}deg) rotateY(${d(p)}deg) scale(${y})`,x=Q(a,t);if(x.style.transform=b,t.style.zIndex=-Math.abs(Math.round(f))+1,a.slideShadows){let e=o?t.querySelector(`.swiper-slide-shadow-left`):t.querySelector(`.swiper-slide-shadow-top`),n=o?t.querySelector(`.swiper-slide-shadow-right`):t.querySelector(`.swiper-slide-shadow-bottom`);e||=$(`coverflow`,t,o?`left`:`top`),n||=$(`coverflow`,t,o?`right`:`bottom`),e&&(e.style.opacity=f>0?f:0),n&&(n.style.opacity=-f>0?-f:0)}}},setTransition:t=>{e.slides.map(e=>q(e)).forEach(e=>{e.style.transitionDuration=`${t}ms`,e.querySelectorAll(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).forEach(e=>{e.style.transitionDuration=`${t}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Ce({swiper:e,extendParams:t,on:n}){t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let r=e=>typeof e==`string`?e:`${e}px`;Z({effect:`creative`,swiper:e,on:n,setTranslate:()=>{let{slides:t,wrapperEl:n,slidesSizesGrid:i}=e,a=e.params.creativeEffect,{progressMultiplier:o}=a,s=e.params.centeredSlides,c=G(e);if(s){let t=i[0]/2-e.params.slidesOffsetBefore||0;n.style.transform=`translateX(calc(50% - ${t}px))`}for(let n=0;n<t.length;n+=1){let i=t[n],l=i.progress,u=Math.min(Math.max(i.progress,-a.limitProgress),a.limitProgress),d=u;s||(d=Math.min(Math.max(i.originalProgress,-a.limitProgress),a.limitProgress));let f=i.swiperSlideOffset,p=[e.params.cssMode?-f-e.translate:-f,0,0],m=[0,0,0],h=!1;e.isHorizontal()||(p[1]=p[0],p[0]=0);let g={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};u<0?(g=a.next,h=!0):u>0&&(g=a.prev,h=!0),p.forEach((e,t)=>{p[t]=`calc(${e}px + (${r(g.translate[t])} * ${Math.abs(u*o)}))`}),m.forEach((e,t)=>{m[t]=g.rotate[t]*Math.abs(u*o)}),i.style.zIndex=-Math.abs(Math.round(l))+t.length;let _=p.join(`, `),v=`rotateX(${c(m[0])}deg) rotateY(${c(m[1])}deg) rotateZ(${c(m[2])}deg)`,y=d<0?`scale(${1+(1-g.scale)*d*o})`:`scale(${1-(1-g.scale)*d*o})`,b=d<0?1+(1-g.opacity)*d*o:1-(1-g.opacity)*d*o,x=`translate3d(${_}) ${v} ${y}`;if(h&&g.shadow||!h){let e=i.querySelector(`.swiper-slide-shadow`);if(!e&&g.shadow&&(e=$(`creative`,i)),e){let t=a.shadowPerProgress?u*(1/a.limitProgress):u;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}let S=Q(a,i);S.style.transform=x,S.style.opacity=b,g.origin&&(S.style.transformOrigin=g.origin)}},setTransition:t=>{let n=e.slides.map(e=>q(e));n.forEach(e=>{e.style.transitionDuration=`${t}ms`,e.querySelectorAll(`.swiper-slide-shadow`).forEach(e=>{e.style.transitionDuration=`${t}ms`})}),ve({swiper:e,duration:t,transformElements:n,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}var we=c({name:`swiper-example-advance`,title:`Advance example`,components:{Swiper:H,SwiperSlide:W},setup(){let e=e=>{console.log(`SwiperComponentReady!`,e)},t=e=>{console.log(`handleHSwiperSlideChange!`,e.realIndex)},n=m(new Map),r=e=>n.get(e),i=e=>{n.set(e,!0),console.log(`Click slide! target slide id:`,e)},a=null,o=e=>{a=e},s=b();return{modules:[_e,I,Y,L],handleHSwiperReady:e,handleHSwiperSlideChange:t,handleHwiperSlideClick:i,isSlideClicked:r,setVSwiperRef:o,vSwiperIndex:s,updateVSwiperIndex:()=>{s.value=a?.activeIndex},prevVSwiperSlide:()=>a?.slidePrev(),nextVSwiperSlide:()=>a?.slideNext()}}}),Te={class:`advance-example`},Ee=[`disabled`],De=[`disabled`];function Oe(e,n,r,a,o,c){let l=v(`swiper-slide`),m=v(`swiper`),h=v(`ulink`);return f(),u(`div`,Te,[s(m,{class:`horizontal-swiper`,modules:e.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":`div`,onSwiper:e.handleHSwiperReady,onSlideChange:e.handleHSwiperSlideChange},{default:p(()=>[s(l,{class:`slide`},{default:p(()=>[...n[6]||=[t(`span`,null,`Loop Slide 1`,-1)]]),_:1}),s(l,{class:`slide`},{default:p(e=>[t(`pre`,null,d(e),1)]),_:1}),s(l,{class:`slide`},{default:p(()=>[n[7]||=t(`span`,null,`Loop Slide 3`,-1),t(`button`,{class:`click swiper-no-swiping`,onClick:n[0]||=x(t=>e.handleHwiperSlideClick(3),[`prevent`])},d(e.isSlideClicked(3)?`clicked ✅`:`click me 👆`),1)]),_:1}),s(l,{class:`slide`},{default:p(()=>[n[8]||=t(`span`,null,`Loop Slide 4`,-1),t(`button`,{class:`click swiper-no-swiping`,onClick:n[1]||=t=>e.handleHwiperSlideClick(4)},d(e.isSlideClicked(4)?`clicked ✅`:`click me 👆`),1)]),_:1}),s(l,{class:`slide`},{default:p(()=>[n[9]||=t(`span`,null,`Loop Slide 5`,-1),t(`button`,{class:`click swiper-no-swiping`,onClick:n[2]||=t=>e.handleHwiperSlideClick(5)},d(e.isSlideClicked(5)?`clicked ✅`:`click me 👆`),1)]),_:1}),s(l,{class:`slide`},{default:p(()=>[n[10]||=t(`span`,null,`Loop Slide 6`,-1),t(`button`,{class:`click swiper-no-swiping`,onClick:n[3]||=t=>e.handleHwiperSlideClick(6)},d(e.isSlideClicked(6)?`clicked ✅`:`click me 👆`),1)]),_:1})]),_:1},8,[`modules`,`onSwiper`,`onSlideChange`]),s(m,{class:`vertical-swiper`,modules:e.modules,direction:`vertical`,"slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:e.setVSwiperRef,onSlideChange:e.updateVSwiperIndex},{"container-start":p(()=>[t(`button`,{class:`nav-button-prev`,disabled:e.vSwiperIndex===0,onClick:n[4]||=(...t)=>e.prevVSwiperSlide&&e.prevVSwiperSlide(...t)},[...n[19]||=[t(`i`,{class:`iconfont icon-arrow-down`},null,-1)]],8,Ee)]),"container-end":p(()=>[t(`button`,{class:`nav-button-next`,disabled:e.vSwiperIndex===4,onClick:n[5]||=(...t)=>e.nextVSwiperSlide&&e.nextVSwiperSlide(...t)},[...n[20]||=[t(`i`,{class:`iconfont icon-arrow-up`},null,-1)]],8,De)]),default:p(()=>[s(l,{class:`slide`},{default:p(()=>[s(h,{class:`link`,href:`https://swiperjs.com/`},{default:p(()=>[...n[11]||=[i(`swiperjs.com`,-1)]]),_:1}),n[12]||=t(`i`,{class:`iconfont icon-link-external`},null,-1)]),_:1}),s(l,{class:`slide`},{default:p(()=>[s(h,{class:`link`,href:`https://github.com/nolimits4web/swiper/discussions`},{default:p(()=>[...n[13]||=[i(`discussions`,-1)]]),_:1}),n[14]||=t(`i`,{class:`iconfont icon-link-external`},null,-1)]),_:1}),s(l,{class:`slide`},{default:p(()=>[...n[15]||=[i(`Slide 3`,-1)]]),_:1}),s(l,{class:`slide`},{default:p(()=>[...n[16]||=[i(`Slide 4`,-1)]]),_:1}),s(l,{class:`slide`},{default:p(()=>[...n[17]||=[i(`Slide 5`,-1)]]),_:1}),s(l,{class:`slide`},{default:p(()=>[...n[18]||=[i(`Slide 6`,-1)]]),_:1})]),_:1},8,[`modules`,`onSwiper`,`onSlideChange`])])}var ke=S(we,[[`render`,Oe],[`__scopeId`,`data-v-b71aaecd`]]),Ae=c({name:`swiper-example-default`,title:`Default`,components:{Swiper:H,SwiperSlide:W}});function je(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1})}var Me=S(Ae,[[`render`,je],[`__scopeId`,`data-v-9c8bd496`]]),Ne=c({name:`swiper-example-navigation`,title:`Navigation`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[Y]}}});function Pe(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,navigation:``},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Fe=S(Ne,[[`render`,Pe],[`__scopeId`,`data-v-a0837cc2`]]),Ie=c({name:`swiper-example-pagination`,title:`Pagination`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function Le(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Re=S(Ie,[[`render`,Le],[`__scopeId`,`data-v-c90515b6`]]),ze=c({name:`swiper-example-pagination-dynamic`,title:`Pagination / Dynamic bullets`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function Be(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Ve=S(ze,[[`render`,Be],[`__scopeId`,`data-v-d684d039`]]),He=c({name:`swiper-example-pagination-progress`,title:`Progress pagination`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function Ue(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,pagination:{type:`progressbar`}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var We=S(He,[[`render`,Ue],[`__scopeId`,`data-v-b25cc0b3`]]),Ge=c({name:`swiper-example-pagination-fraction`,title:`Fraction pagination`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function Ke(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,pagination:{type:`fraction`}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var qe=S(Ge,[[`render`,Ke],[`__scopeId`,`data-v-4cb8fce9`]]),Je=c({name:`swiper-example-pagination-custom`,title:`Custom pagination`,components:{Swiper:H,SwiperSlide:W},setup(){return{bulletRenderer:(e,t)=>`<span class="${`${t} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[I]}}});function Ye(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,pagination:{clickable:!0,renderBullet:e.bulletRenderer}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`,`pagination`])}var Xe=S(Je,[[`render`,Ye],[`__scopeId`,`data-v-065625ff`]]),Ze=c({name:`swiper-example-scrollbar`,title:`Scrollbar`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[X]}}});function Qe(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,scrollbar:{hide:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var $e=S(Ze,[[`render`,Qe],[`__scopeId`,`data-v-f742d8df`]]),et=c({name:`swiper-example-vertical`,title:`Vertical slider`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function tt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,direction:`vertical`,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var nt=S(et,[[`render`,tt],[`__scopeId`,`data-v-54fc3b61`]]),rt=c({name:`swiper-example-space-between`,title:`Space between slides`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function it(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var at=S(rt,[[`render`,it],[`__scopeId`,`data-v-bfb03c1c`]]),ot=c({name:`swiper-example-multiple-slides-per-biew`,title:`Multiple slides per view`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function st(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var ct=S(ot,[[`render`,st],[`__scopeId`,`data-v-20d2d83f`]]),lt=c({name:`swiper-example-slides-per-view-auto`,title:`Slides per view auto`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function ut(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"slides-per-view":`auto`,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var dt=S(lt,[[`render`,ut],[`__scopeId`,`data-v-2adb801d`]]),ft=c({name:`swiper-example-centered-slides`,title:`Centered slides`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function pt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var mt=S(ft,[[`render`,pt],[`__scopeId`,`data-v-fc08fd33`]]),ht=c({name:`swiper-example-centered-auto`,title:`Centered slides + auto slides per view`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function gt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"slides-per-view":`auto`,"centered-slides":!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var _t=S(ht,[[`render`,gt],[`__scopeId`,`data-v-f7d796be`]]),vt=c({name:`swiper-example-free-mode`,title:`Free mode / no fixed positions`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,ge]}}});function yt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var bt=S(vt,[[`render`,yt],[`__scopeId`,`data-v-1d12d1c5`]]),xt=c({name:`swiper-example-scroll-container`,title:`Scroll container`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,ge,X,L]}}});function St(e,n,r,i,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,direction:`vertical`,"slides-per-view":`auto`,"free-mode":!0,scrollbar:!0,mousewheel:!0},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...n[0]||=[t(`h2`,null,`I Have a Dream`,-1),t(`p`,null,` I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. `,-1),t(`p`,null,` Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. `,-1),t(`p`,null,` But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. `,-1),t(`p`,null,` In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. `,-1),t(`p`,null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check — a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1),t(`p`,null,` It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. `,-1),t(`p`,null,` But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. `,-1),t(`p`,null,` We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. `,-1),t(`p`,null,` As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. `,-1),t(`p`,null,` I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. `,-1),t(`p`,null,` Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. `,-1),t(`p`,null,` I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. `,-1),t(`p`,null,` I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." `,-1),t(`p`,null,` I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. `,-1),t(`p`,null,` I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. `,-1),t(`p`,null,` I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. `,-1),t(`p`,null,`I have a dream today.`,-1),t(`p`,null,` I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. `,-1),t(`p`,null,`I have a dream today.`,-1),t(`p`,null,` I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. `,-1),t(`p`,null,` This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. `,-1),t(`p`,null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1),t(`p`,null,` And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! `,-1),t(`p`,null,`Let freedom ring from the snowcapped Rockies of Colorado!`,-1),t(`p`,null,`Let freedom ring from the curvaceous slopes of California!`,-1),t(`p`,null,`But not only that; let freedom ring from Stone Mountain of Georgia!`,-1),t(`p`,null,`Let freedom ring from Lookout Mountain of Tennessee!`,-1),t(`p`,null,`Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring.`,-1),t(`p`,null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1)]]),_:1})]),_:1},8,[`modules`])}var Ct=S(xt,[[`render`,St],[`__scopeId`,`data-v-ebd46f91`]]),wt=c({name:`swiper-example-slides-per-column`,title:`Multi row slides layout`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,_e]}}});function Tt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[8]||=[i(`Slide 9`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[9]||=[i(`Slide 10`,-1)]]),_:1})]),_:1},8,[`modules`])}var Et=S(wt,[[`render`,Tt],[`__scopeId`,`data-v-aae10726`]]),Dt=c({name:`swiper-example-nested`,title:`Nested swipers`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function Ot(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper swiper-h`,modules:e.modules,"space-between":50,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Horizontal Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[s(l,{class:`swiper-v`,modules:e.modules,direction:`vertical`,spaceBetween:50,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Vertical Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Vertical Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Vertical Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Vertical Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Vertical Slide 5`,-1)]]),_:1})]),_:1},8,[`modules`])]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Horizontal Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Horizontal Slide 4`,-1)]]),_:1})]),_:1},8,[`modules`])}var kt=S(Dt,[[`render`,Ot],[`__scopeId`,`data-v-71385f46`]]),At=c({name:`swiper-example-grab-cursor`,title:`Grab cursor`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function jt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Mt=S(At,[[`render`,jt],[`__scopeId`,`data-v-da29dbfc`]]),Nt=c({name:`swiper-example-loop`,title:`Loop mode / Infinite loop`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y]}}});function Pt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:p(()=>[s(c,null,{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Ft=S(Nt,[[`render`,Pt],[`__scopeId`,`data-v-68bfc3e9`]]),It=c({name:`swiper-example-loop-group`,title:`Loop mode with multiple slides per group`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y]}}});function Lt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:p(()=>[s(c,null,{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,null,{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Rt=S(It,[[`render`,Lt],[`__scopeId`,`data-v-a0f7eba6`]]),zt=c({name:`swiper-example-slides-per-group-skip`,title:`Slides per group skip`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[ue,X,Y,I]}}});function Bt(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1})]),_:1},8,[`modules`])}var Vt=S(zt,[[`render`,Bt],[`__scopeId`,`data-v-34510fa7`]]),Ht=c({name:`swiper-example-fade-effect`,title:`Fade effect`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y,ye]}}}),Ut=[`src`];function Wt(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),h(m,{class:`swiper`,modules:n.modules,"space-between":30,effect:`fade`,navigation:!0,pagination:{clickable:!0}},{default:p(()=>[(f(),u(r,null,e(5,e=>s(d,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,Ut)]),_:2},1024)),64))]),_:1},8,[`modules`])}var Gt=S(Ht,[[`render`,Wt],[`__scopeId`,`data-v-e94726ff`]]),Kt=c({name:`swiper-example-3d-coverflow`,title:`3D Coverflow effect`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Se]}}}),qt={class:`coverflow-example`},Jt=[`src`];function Yt(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),u(`div`,qt,[s(m,{class:`swiper`,modules:n.modules,pagination:!0,effect:`coverflow`,"grab-cursor":!0,"centered-slides":!0,"slides-per-view":`auto`,"coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:p(()=>[(f(),u(r,null,e(8,e=>s(d,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,Jt)]),_:2},1024)),64))]),_:1},8,[`modules`])])}var Xt=S(Kt,[[`render`,Yt],[`__scopeId`,`data-v-70706294`]]),Zt=c({name:`swiper-example-3d-cube`,title:`3D Cube effect`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,be]}}}),Qt={class:`cube-example`},$t=[`src`];function en(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),u(`div`,Qt,[s(m,{class:`swiper`,modules:n.modules,pagination:!0,effect:`cube`,"grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:p(()=>[(f(),u(r,null,e(5,e=>s(d,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,$t)]),_:2},1024)),64))]),_:1},8,[`modules`])])}var tn=S(Zt,[[`render`,en],[`__scopeId`,`data-v-f5f0929c`]]),nn=c({name:`swiper-example-3d-flip`,title:`3D Flip effect`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y,xe]}}}),rn={class:`flip-example`},an=[`src`];function on(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),u(`div`,rn,[s(m,{class:`swiper`,modules:n.modules,effect:`flip`,"grab-cursor":!0,pagination:!0,navigation:!0},{default:p(()=>[(f(),u(r,null,e(6,e=>s(d,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,an)]),_:2},1024)),64))]),_:1},8,[`modules`])])}var sn=S(nn,[[`render`,on],[`__scopeId`,`data-v-7a87b38c`]]),cn=c({name:`swiper-example-effect-creative`,title:`Creative effect`,components:{Swiper:H,SwiperSlide:W},setup(){let e=b(!0),t=b(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:[`100%`,0,0]}},{prev:{shadow:!0,translate:[`-120%`,0,-500]},next:{shadow:!0,translate:[`120%`,0,-500]}},{prev:{shadow:!0,translate:[`-20%`,0,-1]},next:{translate:[`100%`,0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:[`-125%`,0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:[`125%`,0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:`left center`,translate:[`-5%`,0,-200],rotate:[0,100,0]},next:{origin:`right center`,translate:[`5%`,0,-200],rotate:[0,-100,0]}}],effectIndex:t,render:e,setEffect:n=>{t.value=n,a(()=>{e.value=!1,a(()=>{e.value=!0})})},modules:[I,Ce]}}}),ln={class:`creative-example`},un={class:`toolbar`},dn=[`onClick`],fn=[`src`];function pn(n,i,a,o,c,m){let g=v(`swiper-slide`),_=v(`swiper`);return f(),u(`div`,ln,[t(`div`,un,[(f(!0),u(r,null,e(n.effects,(e,t)=>(f(),u(`button`,{key:t,onClick:e=>n.setEffect(t)},` Effect `+d(t+1)+` `+d(t===n.effectIndex?`⎷`:``),9,dn))),128))]),n.render?(f(),h(_,{key:0,class:`swiper`,modules:n.modules,effect:`creative`,"creative-effect":n.effects[n.effectIndex],"grab-cursor":!0,pagination:!0},{default:p(()=>[(f(),u(r,null,e(6,e=>s(g,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,fn)]),_:2},1024)),64))]),_:1},8,[`modules`,`creative-effect`])):l(``,!0)])}var mn=S(cn,[[`render`,pn],[`__scopeId`,`data-v-6143766e`]]),hn=c({name:`swiper-example-keyboard-control`,title:`Keyboard control`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y,ue]}}});function gn(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var _n=S(hn,[[`render`,gn],[`__scopeId`,`data-v-8c102e50`]]),vn=c({name:`swiper-example-mousewheel-control`,title:`Mousewheel control`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,L]}}});function yn(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,direction:`vertical`,"slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var bn=S(vn,[[`render`,yn],[`__scopeId`,`data-v-59b74d44`]]),xn=c({name:`swiper-example-autoplay`,title:`Autoplay`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y,me]}}});function Sn(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Cn=S(xn,[[`render`,Sn],[`__scopeId`,`data-v-90526367`]]),wn=c({name:`swiper-example-dynamic-slides`,title:`Dynamic slides`,components:{Swiper:H,SwiperSlide:W},setup(){let e=m([1,2,3,4,5]);return{slides:e,modules:[I,Y],appendSlide:()=>e.push(e.length+1),prependSlide:()=>e.unshift(e[0]-1),popSlide:()=>e.pop(),shiftSlide:()=>e.shift()}}}),Tn={class:`dynamic-example`},En={class:`toolbar`};function Dn(n,a,o,c,l,m){let g=v(`swiper-slide`),_=v(`swiper`);return f(),u(`div`,Tn,[t(`div`,En,[t(`button`,{onClick:a[0]||=(...e)=>n.prependSlide&&n.prependSlide(...e)},`Prepend slide`),t(`button`,{onClick:a[1]||=(...e)=>n.appendSlide&&n.appendSlide(...e)},`Append slide`),t(`button`,{onClick:a[2]||=(...e)=>n.popSlide&&n.popSlide(...e)},`Pop slide`),t(`button`,{onClick:a[3]||=(...e)=>n.shiftSlide&&n.shiftSlide(...e)},`Shift slide`)]),s(_,{class:`swiper`,"slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:`fraction`},navigation:!0,modules:n.modules},{default:p(()=>[(f(!0),u(r,null,e(n.slides,e=>(f(),h(g,{key:e,class:`slide`},{default:p(()=>[i(`Slide `+d(e),1)]),_:2},1024))),128))]),_:1},8,[`modules`])])}var On=S(wn,[[`render`,Dn],[`__scopeId`,`data-v-bd861822`]]),kn=c({name:`swiper-example-thumbs-gallery`,title:`Thumbs gallery with Two-way control`,components:{Swiper:H,SwiperSlide:W},setup(){let e=b();return{modules:[Y,he],setThumbsSwiper:t=>{e.value=t},thumbsSwiper:e}}}),An={class:`thumb-example`},jn=[`src`],Mn=[`src`];function Nn(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),u(`div`,An,[s(m,{class:`top-swiper`,style:{"--swiper-navigation-color":`#fff`,"--swiper-pagination-color":`#fff`},modules:n.modules,"space-between":10,navigation:!0,thumbs:{swiper:n.thumbsSwiper}},{default:p(()=>[(f(),u(r,null,e(8,e=>s(d,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,jn)]),_:2},1024)),64))]),_:1},8,[`modules`,`thumbs`]),s(m,{class:`thumbs-swiper`,modules:n.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:n.setThumbsSwiper},{default:p(()=>[(f(),u(r,null,e(8,e=>s(d,{class:`slide`,key:e},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`},null,8,Mn)]),_:2},1024)),64))]),_:1},8,[`modules`,`onSwiper`])])}var Pn=S(kn,[[`render`,Nn],[`__scopeId`,`data-v-4f49b25f`]]),Fn=c({name:`swiper-example-zoom`,title:`Zoom`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y,pe]}}}),In={class:`swiper-zoom-container`},Ln=[`src`];function Rn(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),h(m,{class:`swiper`,style:{"--swiper-navigation-color":`#fff`,"--swiper-pagination-color":`#fff`},modules:n.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:p(()=>[(f(),u(r,null,e(8,e=>s(d,{key:e,class:`slide`},{default:p(()=>[t(`div`,In,[t(`img`,{src:`/images/example/${e}.jpg`},null,8,Ln)])]),_:2},1024)),64))]),_:1},8,[`modules`])}var zn=S(Fn,[[`render`,Rn],[`__scopeId`,`data-v-a541362f`]]),Bn=c({name:`swiper-example-lazy-loading-image`,title:`Lazy loading images`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y]}}}),Vn=[`src`];function Hn(n,i,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),h(m,{class:`swiper`,style:{"--swiper-navigation-color":`#fff`,"--swiper-pagination-color":`#fff`},modules:n.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:p(()=>[(f(),u(r,null,e(8,e=>s(d,{key:e,class:`slide`,lazy:!0},{default:p(()=>[t(`img`,{src:`/images/example/${e}.jpg`,loading:`lazy`,class:`swiper-lazy`},null,8,Vn),i[0]||=t(`div`,{class:`swiper-lazy-preloader swiper-lazy-preloader-white`},null,-1)]),_:2},1024)),64))]),_:1},8,[`modules`])}var Un=S(Bn,[[`render`,Hn],[`__scopeId`,`data-v-c13a27aa`]]),Wn=c({name:`swiper-example-parallax`,title:`Parallax`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[fe,I,Y]}}});function Gn(e,n,r,i,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,style:{"--swiper-navigation-color":`#fff`,"--swiper-pagination-color":`#fff`},modules:e.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":p(()=>[...n[0]||=[t(`div`,{class:`parallax-bg`,"data-swiper-parallax":`-23%`,style:{backgroundImage:`url(/images/example/1.jpg)`}},null,-1)]]),default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...n[1]||=[t(`h1`,{class:`title`,"data-swiper-parallax":`-300`},`Slide 1`,-1),t(`h2`,{class:`subtitle`,"data-swiper-parallax":`-200`},`Subtitle`,-1),t(`div`,{class:`text`,"data-swiper-parallax":`-100`},[t(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. `)],-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...n[2]||=[t(`h1`,{class:`title`,"data-swiper-parallax":`-300`},`Slide 2`,-1),t(`h2`,{class:`subtitle`,"data-swiper-parallax":`-200`},`Subtitle`,-1),t(`div`,{class:`text`,"data-swiper-parallax":`-100`},[t(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. `)],-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...n[3]||=[t(`h1`,{class:`title`,"data-swiper-parallax":`-300`},`Slide 3`,-1),t(`h2`,{class:`subtitle`,"data-swiper-parallax":`-200`},`Subtitle`,-1),t(`div`,{class:`text`,"data-swiper-parallax":`-100`},[t(`p`,null,` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. `)],-1)]]),_:1})]),_:1},8,[`modules`])}var Kn=S(Wn,[[`render`,Gn],[`__scopeId`,`data-v-ff1d5f6d`]]),qn=c({name:`swiper-example-rtl`,title:`RTL layout`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y]}}});function Jn(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,navigation:!0,pagination:{clickable:!0},dir:`rtl`},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var Yn=S(qn,[[`render`,Jn],[`__scopeId`,`data-v-dac62a9d`]]),Xn=c({name:`swiper-example-responsive-breakpoints`,title:`Responsive breakpoints`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I]}}});function Zn(e,n,a,o,c,l){let d=v(`swiper-slide`),m=v(`swiper`);return f(),u(r,null,[n[10]||=t(`div`,{class:`tip`},`→ Resize the browser window ←`,-1),s(m,{class:`swiper`,modules:e.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:p(()=>[s(d,{class:`slide`},{default:p(()=>[...n[0]||=[i(`Slide 1`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[1]||=[i(`Slide 2`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[2]||=[i(`Slide 3`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[3]||=[i(`Slide 4`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[4]||=[i(`Slide 5`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[5]||=[i(`Slide 6`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[6]||=[i(`Slide 7`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[7]||=[i(`Slide 8`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[8]||=[i(`Slide 9`,-1)]]),_:1}),s(d,{class:`slide`},{default:p(()=>[...n[9]||=[i(`Slide 10`,-1)]]),_:1})]),_:1},8,[`modules`])],64)}var Qn=S(Xn,[[`render`,Zn],[`__scopeId`,`data-v-5e6f7df0`]]),$n=c({name:`swiper-example-auto-height`,title:`Auto height`,components:{Swiper:H,SwiperSlide:W},setup(){return{modules:[I,Y]}}});function er(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`])}var tr=S($n,[[`render`,er],[`__scopeId`,`data-v-f259dca8`]]),nr=c({name:`swiper-example-slideable-navigation-drawer`,title:`Slideable navigation drawer`,components:{Swiper:H,SwiperSlide:W},setup(){let e=null,t=t=>{e=t},n=b(!1);return{menuOpened:n,toggleMenu:()=>{n.value?e?.slideNext():e?.slidePrev()},setSwiperRef:t,handleSlideChange:()=>{n.value=e?.activeIndex===0}}}});function rr(e,n,r,a,c,l){let u=v(`swiper-slide`),d=v(`swiper`);return f(),h(d,{class:`swiper`,"slides-per-view":`auto`,"initial-slide":1,"resistance-ratio":0,onSwiper:e.setSwiperRef,onSlideChange:e.handleSlideChange},{default:p(()=>[s(u,{class:`menu`},{default:p(()=>[...n[1]||=[i(`Menu slide`,-1)]]),_:1}),s(u,{class:`content`},{default:p(()=>[t(`div`,{class:o([`menu-button`,{opened:e.menuOpened}]),onClick:n[0]||=(...t)=>e.toggleMenu&&e.toggleMenu(...t)},[...n[2]||=[t(`div`,{class:`bar`},null,-1),t(`div`,{class:`bar`},null,-1),t(`div`,{class:`bar`},null,-1)]],2),n[3]||=t(`div`,null,`Content slide`,-1)]),_:1})]),_:1},8,[`onSwiper`,`onSlideChange`])}var ir=S(nr,[[`render`,rr],[`__scopeId`,`data-v-170a05ae`]]),ar=c({name:`swiper-example-virtual-slides`,title:`Virtual slides`,components:{Swiper:H,SwiperSlide:W},setup(){let e=null,t=t=>{e=t},n=t=>{e?.slideTo(t-1,0)},r=m(Array.from({length:500}).map((e,t)=>t+1)),i=1;return{modules:[I,Y,le],setSwiperRef:t,slides:r,slideTo:n,append:()=>{r.push(r.length)},prepend:()=>{r.unshift(i-2,i-1),i-=2,e?.slideTo(e.activeIndex+2,0)}}}}),or={class:`toolbar`};function sr(n,a,o,c,l,m){let g=v(`swiper-slide`),_=v(`swiper`);return f(),u(r,null,[t(`div`,or,[t(`button`,{onClick:a[0]||=e=>n.prepend(),class:`prepend-2-slides`},`Prepend 2 Slides`),t(`button`,{onClick:a[1]||=e=>n.slideTo(1),class:`prepend-slide`},`Slide 1`),t(`button`,{onClick:a[2]||=e=>n.slideTo(250),class:`slide-250`},`Slide 250`),t(`button`,{onClick:a[3]||=e=>n.slideTo(500),class:`slide-500`},`Slide 500`),t(`button`,{onClick:a[4]||=e=>n.append(),class:`append-slides`},`Append Slide`)]),s(_,{class:`swiper`,modules:n.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:`fraction`},onSwiper:n.setSwiperRef},{default:p(()=>[(f(!0),u(r,null,e(n.slides,(e,t)=>(f(),h(g,{key:t,"virtual-index":t,class:`slide`},{default:p(()=>[i(` Slide `+d(e),1)]),_:2},1032,[`virtual-index`]))),128))]),_:1},8,[`modules`,`onSwiper`])],64)}var cr=S(ar,[[`render`,sr],[`__scopeId`,`data-v-c833c870`]]),lr=c({name:`swiper-example-change-direction`,title:`Change direction (→ resize ←)`,components:{Swiper:H,SwiperSlide:W},setup(){let e=null;return{modules:[Y],setSwiperRef:t=>{e=t},handleResize:()=>{e?.changeDirection(window.innerWidth<=960?`vertical`:`horizontal`)}}}});function ur(e,t,n,r,a,o){let c=v(`swiper-slide`),l=v(`swiper`);return f(),h(l,{class:`swiper`,modules:e.modules,direction:`horizontal`,"slides-per-view":3,"space-between":30,navigation:!0,onSwiper:e.setSwiperRef,onResize:e.handleResize},{default:p(()=>[s(c,{class:`slide`},{default:p(()=>[...t[0]||=[i(`Slide 1`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[1]||=[i(`Slide 2`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[2]||=[i(`Slide 3`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[3]||=[i(`Slide 4`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[4]||=[i(`Slide 5`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[5]||=[i(`Slide 6`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[6]||=[i(`Slide 7`,-1)]]),_:1}),s(c,{class:`slide`},{default:p(()=>[...t[7]||=[i(`Slide 8`,-1)]]),_:1})]),_:1},8,[`modules`,`onSwiper`,`onResize`])}var dr=S(lr,[[`render`,ur],[`__scopeId`,`data-v-a49ae2de`]]),fr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .advance-example {\r
    height: auto;\r
\r
    .horizontal-swiper {\r
      width: 100%;\r
      height: 240px;\r
      margin-bottom: $gap-lg;\r
\r
      /* for swiper loop mode */\r
      ::v-deep(.slide) {\r
        @include swiperMix.swiper-slide();\r
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
      @include swiperMix.swiper-wrapper($height: 200px);\r
      position: relative;\r
    }\r
\r
    .slide {\r
      @include swiperMix.swiper-slide();\r
      font-size: $font-size-huge;\r
\r
      .link {\r
        text-decoration: none;\r
        margin-right: $gap-xs;\r
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
        border-radius: $radius-xs;\r
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
        opacity $motion-duration,\r
        visibility $motion-duration;\r
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
      right: $gap-lg * 2;\r
    }\r
\r
    .nav-button-prev {\r
      left: $gap-lg * 2;\r
    }\r
  }\r
</style>\r
`,pr=`<template>\r
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
    components: {\r
      Swiper,\r
      SwiperSlide\r
    }\r
  })\r
<\/script>\r
\r
<style lang="scss" scoped>\r
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,mr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,hr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,gr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,_r=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,vr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,yr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
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
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,br=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,xr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Sr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Cr=`<template>\r
  <swiper class="swiper" :modules="modules" :space-between="30" :slides-per-view="3" :pagination="{ clickable: true }">\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,wr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
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
`,Tr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Er=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
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
`,Dr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Or=`<template>\r
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
        I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in\r
        the history of our nation.\r
      </p>\r
      <p>\r
        Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation\r
        Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had\r
        been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their\r
        captivity.\r
      </p>\r
      <p>\r
        But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is\r
        still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later,\r
        the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred\r
        years later, the Negro is still languishing in the corners of American society and finds himself an exile in his\r
        own land. So we have come here today to dramatize a shameful condition.\r
      </p>\r
      <p>\r
        In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the\r
        magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note\r
        to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white\r
        men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness.\r
      </p>\r
      <p>\r
        It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are\r
        concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check\r
        which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt.\r
        We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we\r
        have come to cash this check — a check that will give us upon demand the riches of freedom and the security of\r
        justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time\r
        to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make\r
        real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the\r
        sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to\r
        the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children.\r
      </p>\r
      <p>\r
        It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's\r
        legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen\r
        sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now\r
        be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor\r
        tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue\r
        to shake the foundations of our nation until the bright day of justice emerges.\r
      </p>\r
      <p>\r
        But there is something that I must say to my people who stand on the warm threshold which leads into the palace\r
        of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not\r
        seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred.\r
      </p>\r
      <p>\r
        We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative\r
        protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting\r
        physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead\r
        us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today,\r
        have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to\r
        our freedom. We cannot walk alone.\r
      </p>\r
      <p>\r
        As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are\r
        asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the\r
        Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our\r
        bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of\r
        the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York\r
        believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until\r
        justice rolls down like waters and righteousness like a mighty stream.\r
      </p>\r
      <p>\r
        I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come\r
        fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by\r
        the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative\r
        suffering. Continue to work with the faith that unearned suffering is redemptive.\r
      </p>\r
      <p>\r
        Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana,\r
        go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be\r
        changed. Let us not wallow in the valley of despair.\r
      </p>\r
      <p>\r
        I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a\r
        dream. It is a dream deeply rooted in the American dream.\r
      </p>\r
      <p>\r
        I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these\r
        truths to be self-evident: that all men are created equal."\r
      </p>\r
      <p>\r
        I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave\r
        owners will be able to sit down together at the table of brotherhood.\r
      </p>\r
      <p>\r
        I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice,\r
        sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.\r
      </p>\r
      <p>\r
        I have a dream that my four little children will one day live in a nation where they will not be judged by the\r
        color of their skin but by the content of their character.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips\r
        dripping with the words of interposition and nullification; one day right there in Alabama, little black boys\r
        and black girls will be able to join hands with little white boys and white girls as sisters and brothers.\r
      </p>\r
      <p>I have a dream today.</p>\r
      <p>\r
        I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough\r
        places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be\r
        revealed, and all flesh shall see it together.\r
      </p>\r
      <p>\r
        This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out\r
        of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords\r
        of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to\r
        pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we\r
        will be free one day.\r
      </p>\r
      <p>\r
        This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of\r
        thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every\r
        mountainside, let freedom ring."\r
      </p>\r
      <p>\r
        And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops\r
        of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening\r
        Alleghenies of Pennsylvania!\r
      </p>\r
      <p>Let freedom ring from the snowcapped Rockies of Colorado!</p>\r
      <p>Let freedom ring from the curvaceous slopes of California!</p>\r
      <p>But not only that; let freedom ring from Stone Mountain of Georgia!</p>\r
      <p>Let freedom ring from Lookout Mountain of Tennessee!</p>\r
      <p>Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring.</p>\r
      <p>\r
        And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet,\r
        from every state and every city, we will be able to speed up that day when all of God's children, black men and\r
        white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the\r
        old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!"\r
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
  @use '@/styles/variables.scss' as *;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper($height: 32em);\r
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
`,kr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper($height: 430px);\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
    height: 200px;\r
  }\r
</style>\r
`,Ar=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
\r
  .swiper-v {\r
    background-color: rgb(22 27 34 / 80%);\r
  }\r
</style>\r
`,jr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
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
`,Mr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiperMix.swiper-slide();\r
    }\r
  }\r
</style>\r
`,Nr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiperMix.swiper-slide();\r
    }\r
  }\r
</style>\r
`,Pr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
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
`,Fr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper($height: 360px);\r
\r
    .slide {\r
      @include swiperMix.swiper-slide();\r
\r
      img {\r
        display: block;\r
        width: 100%;\r
      }\r
    }\r
  }\r
</style>\r
`,Ir=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .coverflow-example {\r
    @include swiperMix.swiper-wrapper($height: 380px);\r
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
`,Lr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .cube-example {\r
    @include swiperMix.swiper-wrapper($height: 380px);\r
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
      @include swiperMix.swiper-slide();\r
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
`,Rr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
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
`,zr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
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
      @include swiperMix.swiper-slide();\r
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
    @include swiperMix.toolbar();\r
\r
    button {\r
      @include swiperMix.toolbar-button();\r
    }\r
  }\r
</style>\r
`,Br=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Vr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Hr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Ur=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .dynamic-example {\r
    height: auto;\r
\r
    .toolbar {\r
      @include swiperMix.toolbar();\r
\r
      button {\r
        @include swiperMix.toolbar-button();\r
      }\r
    }\r
\r
    .swiper {\r
      @include swiperMix.swiper-wrapper();\r
    }\r
\r
    .slide {\r
      @include swiperMix.swiper-slide();\r
    }\r
  }\r
</style>\r
`,Wr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
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
`,Gr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper($height: 400px);\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
    overflow: hidden;\r
  }\r
</style>\r
`,Kr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
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
`,qr=`<template>\r
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis\r
          iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna\r
          nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros\r
          quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 2</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis\r
          iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna\r
          nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros\r
          quis feugiat.\r
        </p>\r
      </div>\r
    </swiper-slide>\r
    <swiper-slide class="slide">\r
      <h1 class="title" data-swiper-parallax="-300">Slide 3</h1>\r
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>\r
      <div class="text" data-swiper-parallax="-100">\r
        <p>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis\r
          iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna\r
          nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at\r
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros\r
          quis feugiat.\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
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
    @include swiperMix.swiper-wrapper($height: 380px);\r
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
        margin-bottom: $gap-lg;\r
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
`,Jr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Yr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .tip {\r
    width: 100%;\r
    line-height: 3em;\r
    text-align: center;\r
    border-bottom: 1px solid $border-color-secondary;\r
  }\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,Xr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper($height: auto);\r
  }\r
\r
  .slide {\r
    @include swiperMix.swiper-slide();\r
    height: 300px;\r
    line-height: 300px;\r
\r
    &:nth-child(2n) {\r
      height: 500px;\r
      line-height: 500px;\r
    }\r
  }\r
</style>\r
`,Zr=`<template>\r
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
        if (menuOpened.value) {\r
          swiperRef?.slideNext()\r
        } else {\r
          swiperRef?.slidePrev()\r
        }\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
\r
    .menu,\r
    .content {\r
      @include swiperMix.swiper-slide();\r
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
`,Qr=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .toolbar {\r
    @include swiperMix.toolbar();\r
\r
    button {\r
      @include swiperMix.toolbar-button();\r
    }\r
  }\r
\r
  .swiper {\r
    height: 300px;\r
    width: 100%;\r
\r
    ::v-deep(.swiper-slide) {\r
      @include swiperMix.swiper-slide();\r
    }\r
  }\r
</style>\r
`,$r=`<template>\r
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
  @use '@/styles/variables.scss' as *;\r
  @use '@/styles/mixins.scss' as mix;\r
  @use './mixins.scss' as swiperMix;\r
\r
  .swiper {\r
    @include swiperMix.swiper-wrapper();\r
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
    @include swiperMix.swiper-slide();\r
  }\r
</style>\r
`,ei=Object.assign({"./01-advance.vue":ke,"./02-default.vue":Me,"./03-navigation.vue":Fe,"./04-pagination.vue":Re,"./05-pagination-dynamic.vue":Ve,"./06-pagination-progress.vue":We,"./07-pagination-fraction.vue":qe,"./08-pagination-custom.vue":Xe,"./09-scrollbar.vue":$e,"./10-vertical.vue":nt,"./11-space-between.vue":at,"./12-slides-per-view.vue":ct,"./13-slides-per-view-auto.vue":dt,"./14-centered.vue":mt,"./15-centered-auto.vue":_t,"./16-freemode.vue":bt,"./17-scroll-container.vue":Ct,"./18-slides-per-column.vue":Et,"./19-nested.vue":kt,"./20-grab-cursor.vue":Mt,"./21-infinite-loop.vue":Ft,"./22-infinite-loop-with-slides-per-group.vue":Rt,"./23-slides-per-group-skip.vue":Vt,"./24-effect-fade.vue":Gt,"./25-effect-coverflow.vue":Xt,"./26-effect-cube.vue":tn,"./27-effect-flip.vue":sn,"./28-effect-creative.vue":mn,"./29-keyboard-control.vue":_n,"./30-mousewheel-control.vue":bn,"./31-autoplay.vue":Cn,"./32-dynamic-slides.vue":On,"./33-thumbs-gallery.vue":Pn,"./34-zoom.vue":zn,"./35-lazy-load-images.vue":Un,"./36-parallax.vue":Kn,"./37-rtl.vue":Yn,"./38-responsive-breakpoints.vue":Qn,"./39-autoheight.vue":tr,"./40-slideable-menu.vue":ir,"./41-virtual-slides.vue":cr,"./42-change-direction.vue":dr}),ti=Object.assign({"./01-advance.vue":fr,"./02-default.vue":pr,"./03-navigation.vue":mr,"./04-pagination.vue":hr,"./05-pagination-dynamic.vue":gr,"./06-pagination-progress.vue":_r,"./07-pagination-fraction.vue":vr,"./08-pagination-custom.vue":yr,"./09-scrollbar.vue":br,"./10-vertical.vue":xr,"./11-space-between.vue":Sr,"./12-slides-per-view.vue":Cr,"./13-slides-per-view-auto.vue":wr,"./14-centered.vue":Tr,"./15-centered-auto.vue":Er,"./16-freemode.vue":Dr,"./17-scroll-container.vue":Or,"./18-slides-per-column.vue":kr,"./19-nested.vue":Ar,"./20-grab-cursor.vue":jr,"./21-infinite-loop.vue":Mr,"./22-infinite-loop-with-slides-per-group.vue":Nr,"./23-slides-per-group-skip.vue":Pr,"./24-effect-fade.vue":Fr,"./25-effect-coverflow.vue":Ir,"./26-effect-cube.vue":Lr,"./27-effect-flip.vue":Rr,"./28-effect-creative.vue":zr,"./29-keyboard-control.vue":Br,"./30-mousewheel-control.vue":Vr,"./31-autoplay.vue":Hr,"./32-dynamic-slides.vue":Ur,"./33-thumbs-gallery.vue":Wr,"./34-zoom.vue":Gr,"./35-lazy-load-images.vue":Kr,"./36-parallax.vue":qr,"./37-rtl.vue":Jr,"./38-responsive-breakpoints.vue":Yr,"./39-autoheight.vue":Xr,"./40-slideable-menu.vue":Zr,"./41-virtual-slides.vue":Qr,"./42-change-direction.vue":$r}),ni=Object.keys(ei).map(e=>({component:ei[e],raw:ti[e],language:`vue`,path:`examples/vue-awesome-swiper/${e.replace(`./`,``)}`})),ri={class:`swiper-example`},ii=S(c({__name:`vue-awesome-swiper`,setup(e){let{repository:r,route:i,packages:a}=y.VueAwesomeSwiper,o=ni.map(k);return _({title:C(r),keywords:[D(r),`How to use Swiper on vue3?`].join(`,`),description:E(r),ogUrl:T(i),ogImage:O(r),ogImageWidth:1200,ogImageHeight:600}),(e,i)=>(f(),h(ne,{repository:n(r)},{default:p(()=>[s(ae,{repository:n(r),packages:n(a),"header-ad-provider":n(ie).GoogleAdSense},{actions:p(()=>[s(J,{icon:`doc`,text:`Vue(2) Examples`,href:n(w)(n(r))},null,8,[`href`]),s(J,{icon:`doc`,text:`Swiper API Documentation`,href:`https://swiperjs.com/swiper-api`}),s(J,{icon:`doc`,text:`Swiper Vue(3) Component`,href:`https://swiperjs.com/vue`}),s(J,{icon:`discussions`,text:`Swiper Discussions`,href:`https://github.com/nolimits4web/swiper/discussions`})]),content:p(()=>[s(ce,{examples:n(o)},{component:p(e=>[t(`div`,ri,[(f(),h(g(e.component)))])]),_:1},8,[`examples`])]),_:1},8,[`repository`,`packages`,`header-ad-provider`])]),_:1},8,[`repository`]))}}),[[`__scopeId`,`data-v-9e34b551`]]);export{ii as default};