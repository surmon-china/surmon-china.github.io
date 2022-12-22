import{d as N,r as Ee,f as ue,a as z,c as Z,q as i,y as r,e as x,t as te,a8 as Xe,j as l,s as $,p as oe,b as de,x as H,l as se,F as Q,n as Ae,m as qe,M as Ge,D as Be,P as Fe,u as Ue,z as ae,B as Ke}from"./index-00925d93.js";import{s as Ze,$ as G,b as ce,c as Pe,d as Le,n as De,e as Ve,i as Je,f as Ce,S as R,h as L,P as Y,j as ze,g as Qe,H as es}from"./index-1abbf20c.js";import{g as ss,a as rs,b as ns,c as is,d as ts,j as ls}from"./navbar-8b47ce90.js";import{V as as}from"./vue-c82dd579.js";import{H as ve}from"./link-07308c14.js";import{H as os}from"./examples-9611f8be.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";function ds({swiper:e,extendParams:m,on:p,emit:g}){m({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let _;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function h(n,c){const u=e.params.virtual;if(u.cache&&e.virtual.cache[c])return e.virtual.cache[c];const v=u.renderSlide?G(u.renderSlide.call(e,n,c)):G(`<div class="${e.params.slideClass}" data-swiper-slide-index="${c}">${n}</div>`);return v.attr("data-swiper-slide-index")||v.attr("data-swiper-slide-index",c),u.cache&&(e.virtual.cache[c]=v),v}function s(n){const{slidesPerView:c,slidesPerGroup:u,centeredSlides:v}=e.params,{addSlidesBefore:f,addSlidesAfter:b}=e.params.virtual,{from:S,to:y,slides:k,slidesGrid:V,offset:T}=e.virtual;e.params.cssMode||e.updateActiveIndex();const j=e.activeIndex||0;let O;e.rtlTranslate?O="right":O=e.isHorizontal()?"left":"top";let B,F;v?(B=Math.floor(c/2)+u+b,F=Math.floor(c/2)+u+f):(B=c+(u-1)+b,F=u+f);const W=Math.max((j||0)-F,0),C=Math.min((j||0)+B,k.length-1),I=(e.slidesGrid[W]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:W,to:C,offset:I,slidesGrid:e.slidesGrid});function M(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),g("virtualUpdate")}if(S===W&&y===C&&!n){e.slidesGrid!==V&&I!==T&&e.slides.css(O,`${I}px`),e.updateProgress(),g("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:I,from:W,to:C,slides:function(){const P=[];for(let E=W;E<=C;E+=1)P.push(k[E]);return P}()}),e.params.virtual.renderExternalUpdate?M():g("virtualUpdate");return}const X=[],D=[];if(n)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let w=S;w<=y;w+=1)(w<W||w>C)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${w}"]`).remove();for(let w=0;w<k.length;w+=1)w>=W&&w<=C&&(typeof y>"u"||n?D.push(w):(w>y&&D.push(w),w<S&&X.push(w)));D.forEach(w=>{e.$wrapperEl.append(h(k[w],w))}),X.sort((w,P)=>P-w).forEach(w=>{e.$wrapperEl.prepend(h(k[w],w))}),e.$wrapperEl.children(".swiper-slide").css(O,`${I}px`),M()}function a(n){if(typeof n=="object"&&"length"in n)for(let c=0;c<n.length;c+=1)n[c]&&e.virtual.slides.push(n[c]);else e.virtual.slides.push(n);s(!0)}function o(n){const c=e.activeIndex;let u=c+1,v=1;if(Array.isArray(n)){for(let f=0;f<n.length;f+=1)n[f]&&e.virtual.slides.unshift(n[f]);u=c+n.length,v=n.length}else e.virtual.slides.unshift(n);if(e.params.virtual.cache){const f=e.virtual.cache,b={};Object.keys(f).forEach(S=>{const y=f[S],k=y.attr("data-swiper-slide-index");k&&y.attr("data-swiper-slide-index",parseInt(k,10)+v),b[parseInt(S,10)+v]=y}),e.virtual.cache=b}s(!0),e.slideTo(u,0)}function d(n){if(typeof n>"u"||n===null)return;let c=e.activeIndex;if(Array.isArray(n))for(let u=n.length-1;u>=0;u-=1)e.virtual.slides.splice(n[u],1),e.params.virtual.cache&&delete e.virtual.cache[n[u]],n[u]<c&&(c-=1),c=Math.max(c,0);else e.virtual.slides.splice(n,1),e.params.virtual.cache&&delete e.virtual.cache[n],n<c&&(c-=1),c=Math.max(c,0);s(!0),e.slideTo(c,0)}function t(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),s(!0),e.slideTo(0,0)}p("beforeInit",()=>{e.params.virtual.enabled&&(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||s())}),p("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(_),_=setTimeout(()=>{s()},100)):s())}),p("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&Ze(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:a,prependSlide:o,removeSlide:d,removeAllSlides:t,update:s})}function He({swiper:e,extendParams:m,on:p,emit:g}){const _=ce(),h=Pe();e.keyboard={enabled:!1},m({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function s(d){if(!e.enabled)return;const{rtlTranslate:t}=e;let n=d;n.originalEvent&&(n=n.originalEvent);const c=n.keyCode||n.charCode,u=e.params.keyboard.pageUpDown,v=u&&c===33,f=u&&c===34,b=c===37,S=c===39,y=c===38,k=c===40;if(!e.allowSlideNext&&(e.isHorizontal()&&S||e.isVertical()&&k||f)||!e.allowSlidePrev&&(e.isHorizontal()&&b||e.isVertical()&&y||v))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey)&&!(_.activeElement&&_.activeElement.nodeName&&(_.activeElement.nodeName.toLowerCase()==="input"||_.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(v||f||b||S||y||k)){let V=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const T=e.$el,j=T[0].clientWidth,O=T[0].clientHeight,B=h.innerWidth,F=h.innerHeight,W=e.$el.offset();t&&(W.left-=e.$el[0].scrollLeft);const C=[[W.left,W.top],[W.left+j,W.top],[W.left,W.top+O],[W.left+j,W.top+O]];for(let I=0;I<C.length;I+=1){const M=C[I];if(M[0]>=0&&M[0]<=B&&M[1]>=0&&M[1]<=F){if(M[0]===0&&M[1]===0)continue;V=!0}}if(!V)return}e.isHorizontal()?((v||f||b||S)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((f||S)&&!t||(v||b)&&t)&&e.slideNext(),((v||b)&&!t||(f||S)&&t)&&e.slidePrev()):((v||f||y||k)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(f||k)&&e.slideNext(),(v||y)&&e.slidePrev()),g("keyPress",c)}}function a(){e.keyboard.enabled||(G(_).on("keydown",s),e.keyboard.enabled=!0)}function o(){e.keyboard.enabled&&(G(_).off("keydown",s),e.keyboard.enabled=!1)}p("init",()=>{e.params.keyboard.enabled&&a()}),p("destroy",()=>{e.keyboard.enabled&&o()}),Object.assign(e.keyboard,{enable:a,disable:o})}function J({swiper:e,extendParams:m,on:p,emit:g}){m({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function _(u){let v;return u&&(v=G(u),e.params.uniqueNavElements&&typeof u=="string"&&v.length>1&&e.$el.find(u).length===1&&(v=e.$el.find(u))),v}function h(u,v){const f=e.params.navigation;u&&u.length>0&&(u[v?"addClass":"removeClass"](f.disabledClass),u[0]&&u[0].tagName==="BUTTON"&&(u[0].disabled=v),e.params.watchOverflow&&e.enabled&&u[e.isLocked?"addClass":"removeClass"](f.lockClass))}function s(){if(e.params.loop)return;const{$nextEl:u,$prevEl:v}=e.navigation;h(v,e.isBeginning&&!e.params.rewind),h(u,e.isEnd&&!e.params.rewind)}function a(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),g("navigationPrev"))}function o(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),g("navigationNext"))}function d(){const u=e.params.navigation;if(e.params.navigation=Le(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;const v=_(u.nextEl),f=_(u.prevEl);v&&v.length>0&&v.on("click",o),f&&f.length>0&&f.on("click",a),Object.assign(e.navigation,{$nextEl:v,nextEl:v&&v[0],$prevEl:f,prevEl:f&&f[0]}),e.enabled||(v&&v.addClass(u.lockClass),f&&f.addClass(u.lockClass))}function t(){const{$nextEl:u,$prevEl:v}=e.navigation;u&&u.length&&(u.off("click",o),u.removeClass(e.params.navigation.disabledClass)),v&&v.length&&(v.off("click",a),v.removeClass(e.params.navigation.disabledClass))}p("init",()=>{e.params.navigation.enabled===!1?c():(d(),s())}),p("toEdge fromEdge lock unlock",()=>{s()}),p("destroy",()=>{t()}),p("enable disable",()=>{const{$nextEl:u,$prevEl:v}=e.navigation;u&&u[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),v&&v[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),p("click",(u,v)=>{const{$nextEl:f,$prevEl:b}=e.navigation,S=v.target;if(e.params.navigation.hideOnClick&&!G(S).is(b)&&!G(S).is(f)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===S||e.pagination.el.contains(S)))return;let y;f?y=f.hasClass(e.params.navigation.hiddenClass):b&&(y=b.hasClass(e.params.navigation.hiddenClass)),g(y===!0?"navigationShow":"navigationHide"),f&&f.toggleClass(e.params.navigation.hiddenClass),b&&b.toggleClass(e.params.navigation.hiddenClass)}});const n=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),d(),s()},c=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),t()};Object.assign(e.navigation,{enable:n,disable:c,update:s,init:d,destroy:t})}function Me({swiper:e,extendParams:m,on:p,emit:g}){const _=ce();let h=!1,s=null,a=null,o,d,t,n;m({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function c(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:C,rtlTranslate:I,progress:M}=e,{$dragEl:X,$el:D}=C,w=e.params.scrollbar;let P=d,E=(t-d)*M;I?(E=-E,E>0?(P=d-E,E=0):-E+d>t&&(P=t+E)):E<0?(P=d+E,E=0):E+d>t&&(P=t-E),e.isHorizontal()?(X.transform(`translate3d(${E}px, 0, 0)`),X[0].style.width=`${P}px`):(X.transform(`translate3d(0px, ${E}px, 0)`),X[0].style.height=`${P}px`),w.hide&&(clearTimeout(s),D[0].style.opacity=1,s=setTimeout(()=>{D[0].style.opacity=0,D.transition(400)},1e3))}function u(C){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(C)}function v(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:C}=e,{$dragEl:I,$el:M}=C;I[0].style.width="",I[0].style.height="",t=e.isHorizontal()?M[0].offsetWidth:M[0].offsetHeight,n=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?d=t*n:d=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?I[0].style.width=`${d}px`:I[0].style.height=`${d}px`,n>=1?M[0].style.display="none":M[0].style.display="",e.params.scrollbar.hide&&(M[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&C.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function f(C){return e.isHorizontal()?C.type==="touchstart"||C.type==="touchmove"?C.targetTouches[0].clientX:C.clientX:C.type==="touchstart"||C.type==="touchmove"?C.targetTouches[0].clientY:C.clientY}function b(C){const{scrollbar:I,rtlTranslate:M}=e,{$el:X}=I;let D;D=(f(C)-X.offset()[e.isHorizontal()?"left":"top"]-(o!==null?o:d/2))/(t-d),D=Math.max(Math.min(D,1),0),M&&(D=1-D);const w=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*D;e.updateProgress(w),e.setTranslate(w),e.updateActiveIndex(),e.updateSlidesClasses()}function S(C){const I=e.params.scrollbar,{scrollbar:M,$wrapperEl:X}=e,{$el:D,$dragEl:w}=M;h=!0,o=C.target===w[0]||C.target===w?f(C)-C.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,C.preventDefault(),C.stopPropagation(),X.transition(100),w.transition(100),b(C),clearTimeout(a),D.transition(0),I.hide&&D.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),g("scrollbarDragStart",C)}function y(C){const{scrollbar:I,$wrapperEl:M}=e,{$el:X,$dragEl:D}=I;h&&(C.preventDefault?C.preventDefault():C.returnValue=!1,b(C),M.transition(0),X.transition(0),D.transition(0),g("scrollbarDragMove",C))}function k(C){const I=e.params.scrollbar,{scrollbar:M,$wrapperEl:X}=e,{$el:D}=M;h&&(h=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),X.transition("")),I.hide&&(clearTimeout(a),a=De(()=>{D.css("opacity",0),D.transition(400)},1e3)),g("scrollbarDragEnd",C),I.snapOnRelease&&e.slideToClosest())}function V(C){const{scrollbar:I,touchEventsTouch:M,touchEventsDesktop:X,params:D,support:w}=e,P=I.$el;if(!P)return;const E=P[0],q=w.passiveListener&&D.passiveListeners?{passive:!1,capture:!1}:!1,K=w.passiveListener&&D.passiveListeners?{passive:!0,capture:!1}:!1;if(!E)return;const ee=C==="on"?"addEventListener":"removeEventListener";w.touch?(E[ee](M.start,S,q),E[ee](M.move,y,q),E[ee](M.end,k,K)):(E[ee](X.start,S,q),_[ee](X.move,y,q),_[ee](X.end,k,K))}function T(){!e.params.scrollbar.el||!e.scrollbar.el||V("on")}function j(){!e.params.scrollbar.el||!e.scrollbar.el||V("off")}function O(){const{scrollbar:C,$el:I}=e;e.params.scrollbar=Le(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const M=e.params.scrollbar;if(!M.el)return;let X=G(M.el);e.params.uniqueNavElements&&typeof M.el=="string"&&X.length>1&&I.find(M.el).length===1&&(X=I.find(M.el)),X.addClass(e.isHorizontal()?M.horizontalClass:M.verticalClass);let D=X.find(`.${e.params.scrollbar.dragClass}`);D.length===0&&(D=G(`<div class="${e.params.scrollbar.dragClass}"></div>`),X.append(D)),Object.assign(C,{$el:X,el:X[0],$dragEl:D,dragEl:D[0]}),M.draggable&&T(),X&&X[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function B(){const C=e.params.scrollbar,I=e.scrollbar.$el;I&&I.removeClass(e.isHorizontal()?C.horizontalClass:C.verticalClass),j()}p("init",()=>{e.params.scrollbar.enabled===!1?W():(O(),v(),c())}),p("update resize observerUpdate lock unlock",()=>{v()}),p("setTranslate",()=>{c()}),p("setTransition",(C,I)=>{u(I)}),p("enable disable",()=>{const{$el:C}=e.scrollbar;C&&C[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),p("destroy",()=>{B()});const F=()=>{e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),O(),v(),c()},W=()=>{e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),B()};Object.assign(e.scrollbar,{enable:F,disable:W,updateSize:v,setTranslate:c,init:O,destroy:B})}function ps({swiper:e,extendParams:m,on:p}){m({parallax:{enabled:!1}});const g=(s,a)=>{const{rtl:o}=e,d=G(s),t=o?-1:1,n=d.attr("data-swiper-parallax")||"0";let c=d.attr("data-swiper-parallax-x"),u=d.attr("data-swiper-parallax-y");const v=d.attr("data-swiper-parallax-scale"),f=d.attr("data-swiper-parallax-opacity");if(c||u?(c=c||"0",u=u||"0"):e.isHorizontal()?(c=n,u="0"):(u=n,c="0"),c.indexOf("%")>=0?c=`${parseInt(c,10)*a*t}%`:c=`${c*a*t}px`,u.indexOf("%")>=0?u=`${parseInt(u,10)*a}%`:u=`${u*a}px`,typeof f<"u"&&f!==null){const b=f-(f-1)*(1-Math.abs(a));d[0].style.opacity=b}if(typeof v>"u"||v===null)d.transform(`translate3d(${c}, ${u}, 0px)`);else{const b=v-(v-1)*(1-Math.abs(a));d.transform(`translate3d(${c}, ${u}, 0px) scale(${b})`)}},_=()=>{const{$el:s,slides:a,progress:o,snapGrid:d}=e;s.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t=>{g(t,o)}),a.each((t,n)=>{let c=t.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(c+=Math.ceil(n/2)-o*(d.length-1)),c=Math.min(Math.max(c,-1),1),G(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{g(u,c)})})},h=(s=e.params.speed)=>{const{$el:a}=e;a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(o=>{const d=G(o);let t=parseInt(d.attr("data-swiper-parallax-duration"),10)||s;s===0&&(t=0),d.transition(t)})};p("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),p("init",()=>{e.params.parallax.enabled&&_()}),p("setTranslate",()=>{e.params.parallax.enabled&&_()}),p("setTransition",(s,a)=>{e.params.parallax.enabled&&h(a)})}function cs({swiper:e,extendParams:m,on:p,emit:g}){const _=Pe();m({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let h=1,s=!1,a,o,d;const t={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},n={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},c={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let u=1;Object.defineProperty(e.zoom,"scale",{get(){return u},set(w){if(u!==w){const P=t.$imageEl?t.$imageEl[0]:void 0,E=t.$slideEl?t.$slideEl[0]:void 0;g("zoomChange",w,P,E)}u=w}});function v(w){if(w.targetTouches.length<2)return 1;const P=w.targetTouches[0].pageX,E=w.targetTouches[0].pageY,q=w.targetTouches[1].pageX,K=w.targetTouches[1].pageY;return Math.sqrt((q-P)**2+(K-E)**2)}function f(w){const P=e.support,E=e.params.zoom;if(o=!1,d=!1,!P.gestures){if(w.type!=="touchstart"||w.type==="touchstart"&&w.targetTouches.length<2)return;o=!0,t.scaleStart=v(w)}if((!t.$slideEl||!t.$slideEl.length)&&(t.$slideEl=G(w.target).closest(`.${e.params.slideClass}`),t.$slideEl.length===0&&(t.$slideEl=e.slides.eq(e.activeIndex)),t.$imageEl=t.$slideEl.find(`.${E.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),t.$imageWrapEl=t.$imageEl.parent(`.${E.containerClass}`),t.maxRatio=t.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,t.$imageWrapEl.length===0)){t.$imageEl=void 0;return}t.$imageEl&&t.$imageEl.transition(0),s=!0}function b(w){const P=e.support,E=e.params.zoom,q=e.zoom;if(!P.gestures){if(w.type!=="touchmove"||w.type==="touchmove"&&w.targetTouches.length<2)return;d=!0,t.scaleMove=v(w)}if(!t.$imageEl||t.$imageEl.length===0){w.type==="gesturechange"&&f(w);return}P.gestures?q.scale=w.scale*h:q.scale=t.scaleMove/t.scaleStart*h,q.scale>t.maxRatio&&(q.scale=t.maxRatio-1+(q.scale-t.maxRatio+1)**.5),q.scale<E.minRatio&&(q.scale=E.minRatio+1-(E.minRatio-q.scale+1)**.5),t.$imageEl.transform(`translate3d(0,0,0) scale(${q.scale})`)}function S(w){const P=e.device,E=e.support,q=e.params.zoom,K=e.zoom;if(!E.gestures){if(!o||!d||w.type!=="touchend"||w.type==="touchend"&&w.changedTouches.length<2&&!P.android)return;o=!1,d=!1}!t.$imageEl||t.$imageEl.length===0||(K.scale=Math.max(Math.min(K.scale,t.maxRatio),q.minRatio),t.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${K.scale})`),h=K.scale,s=!1,K.scale===1&&(t.$slideEl=void 0))}function y(w){const P=e.device;!t.$imageEl||t.$imageEl.length===0||n.isTouched||(P.android&&w.cancelable&&w.preventDefault(),n.isTouched=!0,n.touchesStart.x=w.type==="touchstart"?w.targetTouches[0].pageX:w.pageX,n.touchesStart.y=w.type==="touchstart"?w.targetTouches[0].pageY:w.pageY)}function k(w){const P=e.zoom;if(!t.$imageEl||t.$imageEl.length===0||(e.allowClick=!1,!n.isTouched||!t.$slideEl))return;n.isMoved||(n.width=t.$imageEl[0].offsetWidth,n.height=t.$imageEl[0].offsetHeight,n.startX=Ve(t.$imageWrapEl[0],"x")||0,n.startY=Ve(t.$imageWrapEl[0],"y")||0,t.slideWidth=t.$slideEl[0].offsetWidth,t.slideHeight=t.$slideEl[0].offsetHeight,t.$imageWrapEl.transition(0));const E=n.width*P.scale,q=n.height*P.scale;if(!(E<t.slideWidth&&q<t.slideHeight)){if(n.minX=Math.min(t.slideWidth/2-E/2,0),n.maxX=-n.minX,n.minY=Math.min(t.slideHeight/2-q/2,0),n.maxY=-n.minY,n.touchesCurrent.x=w.type==="touchmove"?w.targetTouches[0].pageX:w.pageX,n.touchesCurrent.y=w.type==="touchmove"?w.targetTouches[0].pageY:w.pageY,!n.isMoved&&!s){if(e.isHorizontal()&&(Math.floor(n.minX)===Math.floor(n.startX)&&n.touchesCurrent.x<n.touchesStart.x||Math.floor(n.maxX)===Math.floor(n.startX)&&n.touchesCurrent.x>n.touchesStart.x)){n.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(n.minY)===Math.floor(n.startY)&&n.touchesCurrent.y<n.touchesStart.y||Math.floor(n.maxY)===Math.floor(n.startY)&&n.touchesCurrent.y>n.touchesStart.y)){n.isTouched=!1;return}}w.cancelable&&w.preventDefault(),w.stopPropagation(),n.isMoved=!0,n.currentX=n.touchesCurrent.x-n.touchesStart.x+n.startX,n.currentY=n.touchesCurrent.y-n.touchesStart.y+n.startY,n.currentX<n.minX&&(n.currentX=n.minX+1-(n.minX-n.currentX+1)**.8),n.currentX>n.maxX&&(n.currentX=n.maxX-1+(n.currentX-n.maxX+1)**.8),n.currentY<n.minY&&(n.currentY=n.minY+1-(n.minY-n.currentY+1)**.8),n.currentY>n.maxY&&(n.currentY=n.maxY-1+(n.currentY-n.maxY+1)**.8),c.prevPositionX||(c.prevPositionX=n.touchesCurrent.x),c.prevPositionY||(c.prevPositionY=n.touchesCurrent.y),c.prevTime||(c.prevTime=Date.now()),c.x=(n.touchesCurrent.x-c.prevPositionX)/(Date.now()-c.prevTime)/2,c.y=(n.touchesCurrent.y-c.prevPositionY)/(Date.now()-c.prevTime)/2,Math.abs(n.touchesCurrent.x-c.prevPositionX)<2&&(c.x=0),Math.abs(n.touchesCurrent.y-c.prevPositionY)<2&&(c.y=0),c.prevPositionX=n.touchesCurrent.x,c.prevPositionY=n.touchesCurrent.y,c.prevTime=Date.now(),t.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)}}function V(){const w=e.zoom;if(!t.$imageEl||t.$imageEl.length===0)return;if(!n.isTouched||!n.isMoved){n.isTouched=!1,n.isMoved=!1;return}n.isTouched=!1,n.isMoved=!1;let P=300,E=300;const q=c.x*P,K=n.currentX+q,ee=c.y*E,pe=n.currentY+ee;c.x!==0&&(P=Math.abs((K-n.currentX)/c.x)),c.y!==0&&(E=Math.abs((pe-n.currentY)/c.y));const we=Math.max(P,E);n.currentX=K,n.currentY=pe;const he=n.width*w.scale,re=n.height*w.scale;n.minX=Math.min(t.slideWidth/2-he/2,0),n.maxX=-n.minX,n.minY=Math.min(t.slideHeight/2-re/2,0),n.maxY=-n.minY,n.currentX=Math.max(Math.min(n.currentX,n.maxX),n.minX),n.currentY=Math.max(Math.min(n.currentY,n.maxY),n.minY),t.$imageWrapEl.transition(we).transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)}function T(){const w=e.zoom;t.$slideEl&&e.previousIndex!==e.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),w.scale=1,h=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)}function j(w){const P=e.zoom,E=e.params.zoom;if(t.$slideEl||(w&&w.target&&(t.$slideEl=G(w.target).closest(`.${e.params.slideClass}`)),t.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?t.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):t.$slideEl=e.slides.eq(e.activeIndex)),t.$imageEl=t.$slideEl.find(`.${E.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),t.$imageWrapEl=t.$imageEl.parent(`.${E.containerClass}`)),!t.$imageEl||t.$imageEl.length===0||!t.$imageWrapEl||t.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),t.$slideEl.addClass(`${E.zoomedSlideClass}`);let q,K,ee,pe,we,he,re,le,Ie,je,Oe,Ne,ge,_e,ye,xe,$e,ke;typeof n.touchesStart.x>"u"&&w?(q=w.type==="touchend"?w.changedTouches[0].pageX:w.pageX,K=w.type==="touchend"?w.changedTouches[0].pageY:w.pageY):(q=n.touchesStart.x,K=n.touchesStart.y),P.scale=t.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,h=t.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,w?($e=t.$slideEl[0].offsetWidth,ke=t.$slideEl[0].offsetHeight,ee=t.$slideEl.offset().left+_.scrollX,pe=t.$slideEl.offset().top+_.scrollY,we=ee+$e/2-q,he=pe+ke/2-K,Ie=t.$imageEl[0].offsetWidth,je=t.$imageEl[0].offsetHeight,Oe=Ie*P.scale,Ne=je*P.scale,ge=Math.min($e/2-Oe/2,0),_e=Math.min(ke/2-Ne/2,0),ye=-ge,xe=-_e,re=we*P.scale,le=he*P.scale,re<ge&&(re=ge),re>ye&&(re=ye),le<_e&&(le=_e),le>xe&&(le=xe)):(re=0,le=0),t.$imageWrapEl.transition(300).transform(`translate3d(${re}px, ${le}px,0)`),t.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${P.scale})`)}function O(){const w=e.zoom,P=e.params.zoom;t.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?t.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):t.$slideEl=e.slides.eq(e.activeIndex),t.$imageEl=t.$slideEl.find(`.${P.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),t.$imageWrapEl=t.$imageEl.parent(`.${P.containerClass}`)),!(!t.$imageEl||t.$imageEl.length===0||!t.$imageWrapEl||t.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),w.scale=1,h=1,t.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),t.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),t.$slideEl.removeClass(`${P.zoomedSlideClass}`),t.$slideEl=void 0)}function B(w){const P=e.zoom;P.scale&&P.scale!==1?O():j(w)}function F(){const w=e.support,P=e.touchEvents.start==="touchstart"&&w.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,E=w.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:P,activeListenerWithCapture:E}}function W(){return`.${e.params.slideClass}`}function C(w){const{passiveListener:P}=F(),E=W();e.$wrapperEl[w]("gesturestart",E,f,P),e.$wrapperEl[w]("gesturechange",E,b,P),e.$wrapperEl[w]("gestureend",E,S,P)}function I(){a||(a=!0,C("on"))}function M(){a&&(a=!1,C("off"))}function X(){const w=e.zoom;if(w.enabled)return;w.enabled=!0;const P=e.support,{passiveListener:E,activeListenerWithCapture:q}=F(),K=W();P.gestures?(e.$wrapperEl.on(e.touchEvents.start,I,E),e.$wrapperEl.on(e.touchEvents.end,M,E)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,K,f,E),e.$wrapperEl.on(e.touchEvents.move,K,b,q),e.$wrapperEl.on(e.touchEvents.end,K,S,E),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,K,S,E)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,k,q)}function D(){const w=e.zoom;if(!w.enabled)return;const P=e.support;w.enabled=!1;const{passiveListener:E,activeListenerWithCapture:q}=F(),K=W();P.gestures?(e.$wrapperEl.off(e.touchEvents.start,I,E),e.$wrapperEl.off(e.touchEvents.end,M,E)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,K,f,E),e.$wrapperEl.off(e.touchEvents.move,K,b,q),e.$wrapperEl.off(e.touchEvents.end,K,S,E),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,K,S,E)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,k,q)}p("init",()=>{e.params.zoom.enabled&&X()}),p("destroy",()=>{D()}),p("touchStart",(w,P)=>{e.zoom.enabled&&y(P)}),p("touchEnd",(w,P)=>{e.zoom.enabled&&V()}),p("doubleTap",(w,P)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&B(P)}),p("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&T()}),p("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&T()}),Object.assign(e.zoom,{enable:X,disable:D,in:j,out:O,toggle:B})}function us({swiper:e,extendParams:m,on:p,emit:g}){m({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let _=!1,h=!1;function s(d,t=!0){const n=e.params.lazy;if(typeof d>"u"||e.slides.length===0)return;const u=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${d}"]`):e.slides.eq(d),v=u.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);u.hasClass(n.elementClass)&&!u.hasClass(n.loadedClass)&&!u.hasClass(n.loadingClass)&&v.push(u[0]),v.length!==0&&v.each(f=>{const b=G(f);b.addClass(n.loadingClass);const S=b.attr("data-background"),y=b.attr("data-src"),k=b.attr("data-srcset"),V=b.attr("data-sizes"),T=b.parent("picture");e.loadImage(b[0],y||S,k,V,!1,()=>{if(!(typeof e>"u"||e===null||!e||e&&!e.params||e.destroyed)){if(S?(b.css("background-image",`url("${S}")`),b.removeAttr("data-background")):(k&&(b.attr("srcset",k),b.removeAttr("data-srcset")),V&&(b.attr("sizes",V),b.removeAttr("data-sizes")),T.length&&T.children("source").each(j=>{const O=G(j);O.attr("data-srcset")&&(O.attr("srcset",O.attr("data-srcset")),O.removeAttr("data-srcset"))}),y&&(b.attr("src",y),b.removeAttr("data-src"))),b.addClass(n.loadedClass).removeClass(n.loadingClass),u.find(`.${n.preloaderClass}`).remove(),e.params.loop&&t){const j=u.attr("data-swiper-slide-index");if(u.hasClass(e.params.slideDuplicateClass)){const O=e.$wrapperEl.children(`[data-swiper-slide-index="${j}"]:not(.${e.params.slideDuplicateClass})`);s(O.index(),!1)}else{const O=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${j}"]`);s(O.index(),!1)}}g("lazyImageReady",u[0],b[0]),e.params.autoHeight&&e.updateAutoHeight()}}),g("lazyImageLoad",u[0],b[0])})}function a(){const{$wrapperEl:d,params:t,slides:n,activeIndex:c}=e,u=e.virtual&&t.virtual.enabled,v=t.lazy;let f=t.slidesPerView;f==="auto"&&(f=0);function b(y){if(u){if(d.children(`.${t.slideClass}[data-swiper-slide-index="${y}"]`).length)return!0}else if(n[y])return!0;return!1}function S(y){return u?G(y).attr("data-swiper-slide-index"):G(y).index()}if(h||(h=!0),e.params.watchSlidesProgress)d.children(`.${t.slideVisibleClass}`).each(y=>{const k=u?G(y).attr("data-swiper-slide-index"):G(y).index();s(k)});else if(f>1)for(let y=c;y<c+f;y+=1)b(y)&&s(y);else s(c);if(v.loadPrevNext)if(f>1||v.loadPrevNextAmount&&v.loadPrevNextAmount>1){const y=v.loadPrevNextAmount,k=Math.ceil(f),V=Math.min(c+k+Math.max(y,k),n.length),T=Math.max(c-Math.max(k,y),0);for(let j=c+k;j<V;j+=1)b(j)&&s(j);for(let j=T;j<c;j+=1)b(j)&&s(j)}else{const y=d.children(`.${t.slideNextClass}`);y.length>0&&s(S(y));const k=d.children(`.${t.slidePrevClass}`);k.length>0&&s(S(k))}}function o(){const d=Pe();if(!e||e.destroyed)return;const t=e.params.lazy.scrollingElement?G(e.params.lazy.scrollingElement):G(d),n=t[0]===d,c=n?d.innerWidth:t[0].offsetWidth,u=n?d.innerHeight:t[0].offsetHeight,v=e.$el.offset(),{rtlTranslate:f}=e;let b=!1;f&&(v.left-=e.$el[0].scrollLeft);const S=[[v.left,v.top],[v.left+e.width,v.top],[v.left,v.top+e.height],[v.left+e.width,v.top+e.height]];for(let k=0;k<S.length;k+=1){const V=S[k];if(V[0]>=0&&V[0]<=c&&V[1]>=0&&V[1]<=u){if(V[0]===0&&V[1]===0)continue;b=!0}}const y=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;b?(a(),t.off("scroll",o,y)):_||(_=!0,t.on("scroll",o,y))}p("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),p("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?o():a())}),p("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&a()}),p("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?o():a())}),p("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!h)&&(e.params.lazy.checkInView?o():a())}),p("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?o():a())}),p("slideChange",()=>{const{lazy:d,cssMode:t,watchSlidesProgress:n,touchReleaseOnEdges:c,resistanceRatio:u}=e.params;d.enabled&&(t||n&&(c||u===0))&&a()}),p("destroy",()=>{e.$el&&e.$el.find(`.${e.params.lazy.loadingClass}`).removeClass(e.params.lazy.loadingClass)}),Object.assign(e.lazy,{load:a,loadInSlide:s})}function ms({swiper:e,extendParams:m,on:p,emit:g}){let _;e.autoplay={running:!1,paused:!1},m({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function h(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const f=e.slides.eq(e.activeIndex);let b=e.params.autoplay.delay;f.attr("data-swiper-autoplay")&&(b=f.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(_),_=De(()=>{let S;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),S=e.slidePrev(e.params.speed,!0,!0),g("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?a():(S=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),g("autoplay")):(S=e.slidePrev(e.params.speed,!0,!0),g("autoplay")):e.params.loop?(e.loopFix(),S=e.slideNext(e.params.speed,!0,!0),g("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?a():(S=e.slideTo(0,e.params.speed,!0,!0),g("autoplay")):(S=e.slideNext(e.params.speed,!0,!0),g("autoplay")),(e.params.cssMode&&e.autoplay.running||S===!1)&&h()},b)}function s(){return typeof _<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,g("autoplayStart"),h(),!0)}function a(){return!e.autoplay.running||typeof _>"u"?!1:(_&&(clearTimeout(_),_=void 0),e.autoplay.running=!1,g("autoplayStop"),!0)}function o(f){e.autoplay.running&&(e.autoplay.paused||(_&&clearTimeout(_),e.autoplay.paused=!0,f===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,h()):["transitionend","webkitTransitionEnd"].forEach(b=>{e.$wrapperEl[0].addEventListener(b,t)})))}function d(){const f=ce();f.visibilityState==="hidden"&&e.autoplay.running&&o(),f.visibilityState==="visible"&&e.autoplay.paused&&(h(),e.autoplay.paused=!1)}function t(f){!e||e.destroyed||!e.$wrapperEl||f.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(b=>{e.$wrapperEl[0].removeEventListener(b,t)}),e.autoplay.paused=!1,e.autoplay.running?h():a())}function n(){e.params.autoplay.disableOnInteraction?a():(g("autoplayPause"),o()),["transitionend","webkitTransitionEnd"].forEach(f=>{e.$wrapperEl[0].removeEventListener(f,t)})}function c(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,g("autoplayResume"),h())}function u(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",n),e.$el.on("mouseleave",c))}function v(){e.$el.off("mouseenter",n),e.$el.off("mouseleave",c)}p("init",()=>{e.params.autoplay.enabled&&(s(),ce().addEventListener("visibilitychange",d),u())}),p("beforeTransitionStart",(f,b,S)=>{e.autoplay.running&&(S||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(b):a())}),p("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?a():o())}),p("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&h()}),p("destroy",()=>{v(),e.autoplay.running&&a(),ce().removeEventListener("visibilitychange",d)}),Object.assign(e.autoplay,{pause:o,run:h,start:s,stop:a})}function fs({swiper:e,extendParams:m,on:p}){m({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let g=!1,_=!1;e.thumbs={swiper:null};function h(){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const d=o.clickedIndex,t=o.clickedSlide;if(t&&G(t).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof d>"u"||d===null)return;let n;if(o.params.loop?n=parseInt(G(o.clickedSlide).attr("data-swiper-slide-index"),10):n=d,e.params.loop){let c=e.activeIndex;e.slides.eq(c).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,c=e.activeIndex);const u=e.slides.eq(c).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),v=e.slides.eq(c).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();typeof u>"u"?n=v:typeof v>"u"?n=u:v-c<c-u?n=v:n=u}e.slideTo(n)}function s(){const{thumbs:o}=e.params;if(g)return!1;g=!0;const d=e.constructor;if(o.swiper instanceof d)e.thumbs.swiper=o.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(Je(o.swiper)){const t=Object.assign({},o.swiper);Object.assign(t,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new d(t),_=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",h),!0}function a(o){const d=e.thumbs.swiper;if(!d||d.destroyed)return;const t=d.params.slidesPerView==="auto"?d.slidesPerViewDynamic():d.params.slidesPerView;let n=1;const c=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),d.slides.removeClass(c),d.params.loop||d.params.virtual&&d.params.virtual.enabled)for(let f=0;f<n;f+=1)d.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+f}"]`).addClass(c);else for(let f=0;f<n;f+=1)d.slides.eq(e.realIndex+f).addClass(c);const u=e.params.thumbs.autoScrollOffset,v=u&&!d.params.loop;if(e.realIndex!==d.realIndex||v){let f=d.activeIndex,b,S;if(d.params.loop){d.slides.eq(f).hasClass(d.params.slideDuplicateClass)&&(d.loopFix(),d._clientLeft=d.$wrapperEl[0].clientLeft,f=d.activeIndex);const y=d.slides.eq(f).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),k=d.slides.eq(f).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof y>"u"?b=k:typeof k>"u"?b=y:k-f===f-y?b=d.params.slidesPerGroup>1?k:f:k-f<f-y?b=k:b=y,S=e.activeIndex>e.previousIndex?"next":"prev"}else b=e.realIndex,S=b>e.previousIndex?"next":"prev";v&&(b+=S==="next"?u:-1*u),d.visibleSlidesIndexes&&d.visibleSlidesIndexes.indexOf(b)<0&&(d.params.centeredSlides?b>f?b=b-Math.floor(t/2)+1:b=b+Math.floor(t/2)-1:b>f&&d.params.slidesPerGroup,d.slideTo(b,o?0:void 0))}}p("beforeInit",()=>{const{thumbs:o}=e.params;!o||!o.swiper||(s(),a(!0))}),p("slideChange update resize observerUpdate",()=>{a()}),p("setTransition",(o,d)=>{const t=e.thumbs.swiper;!t||t.destroyed||t.setTransition(d)}),p("beforeDestroy",()=>{const o=e.thumbs.swiper;!o||o.destroyed||_&&o.destroy()}),Object.assign(e.thumbs,{init:s,update:a})}function We({swiper:e,extendParams:m,emit:p,once:g}){m({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function _(){const a=e.getTranslate();e.setTranslate(a),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function h(){const{touchEventsData:a,touches:o}=e;a.velocities.length===0&&a.velocities.push({position:o[e.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:o[e.isHorizontal()?"currentX":"currentY"],time:Ce()})}function s({currentPos:a}){const{params:o,$wrapperEl:d,rtlTranslate:t,snapGrid:n,touchEventsData:c}=e,v=Ce()-c.touchStartTime;if(a<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(a>-e.maxTranslate()){e.slides.length<n.length?e.slideTo(n.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(c.velocities.length>1){const j=c.velocities.pop(),O=c.velocities.pop(),B=j.position-O.position,F=j.time-O.time;e.velocity=B/F,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(F>150||Ce()-j.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,c.velocities.length=0;let f=1e3*o.freeMode.momentumRatio;const b=e.velocity*f;let S=e.translate+b;t&&(S=-S);let y=!1,k;const V=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let T;if(S<e.maxTranslate())o.freeMode.momentumBounce?(S+e.maxTranslate()<-V&&(S=e.maxTranslate()-V),k=e.maxTranslate(),y=!0,c.allowMomentumBounce=!0):S=e.maxTranslate(),o.loop&&o.centeredSlides&&(T=!0);else if(S>e.minTranslate())o.freeMode.momentumBounce?(S-e.minTranslate()>V&&(S=e.minTranslate()+V),k=e.minTranslate(),y=!0,c.allowMomentumBounce=!0):S=e.minTranslate(),o.loop&&o.centeredSlides&&(T=!0);else if(o.freeMode.sticky){let j;for(let O=0;O<n.length;O+=1)if(n[O]>-S){j=O;break}Math.abs(n[j]-S)<Math.abs(n[j-1]-S)||e.swipeDirection==="next"?S=n[j]:S=n[j-1],S=-S}if(T&&g("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(t?f=Math.abs((-S-e.translate)/e.velocity):f=Math.abs((S-e.translate)/e.velocity),o.freeMode.sticky){const j=Math.abs((t?-S:S)-e.translate),O=e.slidesSizesGrid[e.activeIndex];j<O?f=o.speed:j<2*O?f=o.speed*1.5:f=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&y?(e.updateProgress(k),e.setTransition(f),e.setTranslate(S),e.transitionStart(!0,e.swipeDirection),e.animating=!0,d.transitionEnd(()=>{!e||e.destroyed||!c.allowMomentumBounce||(p("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(k),d.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(p("_freeModeNoMomentumRelease"),e.updateProgress(S),e.setTransition(f),e.setTranslate(S),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,d.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(S),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&p("_freeModeNoMomentumRelease");(!o.freeMode.momentum||v>=o.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:_,onTouchMove:h,onTouchEnd:s}})}function Ye({swiper:e,extendParams:m}){m({grid:{rows:1,fill:"column"}});let p,g,_;const h=o=>{const{slidesPerView:d}=e.params,{rows:t,fill:n}=e.params.grid;g=p/t,_=Math.floor(o/t),Math.floor(o/t)===o/t?p=o:p=Math.ceil(o/t)*t,d!=="auto"&&n==="row"&&(p=Math.max(p,d*t))},s=(o,d,t,n)=>{const{slidesPerGroup:c,spaceBetween:u}=e.params,{rows:v,fill:f}=e.params.grid;let b,S,y;if(f==="row"&&c>1){const k=Math.floor(o/(c*v)),V=o-v*c*k,T=k===0?c:Math.min(Math.ceil((t-k*v*c)/v),c);y=Math.floor(V/T),S=V-y*T+k*c,b=S+y*p/v,d.css({"-webkit-order":b,order:b})}else f==="column"?(S=Math.floor(o/v),y=o-S*v,(S>_||S===_&&y===v-1)&&(y+=1,y>=v&&(y=0,S+=1))):(y=Math.floor(o/g),S=o-y*g);d.css(n("margin-top"),y!==0?u&&`${u}px`:"")},a=(o,d,t)=>{const{spaceBetween:n,centeredSlides:c,roundLengths:u}=e.params,{rows:v}=e.params.grid;if(e.virtualSize=(o+n)*p,e.virtualSize=Math.ceil(e.virtualSize/v)-n,e.$wrapperEl.css({[t("width")]:`${e.virtualSize+n}px`}),c){d.splice(0,d.length);const f=[];for(let b=0;b<d.length;b+=1){let S=d[b];u&&(S=Math.floor(S)),d[b]<e.virtualSize+d[0]&&f.push(S)}d.push(...f)}};e.grid={initSlides:h,updateSlide:s,updateWrapperSize:a}}function fe(e){const{effect:m,swiper:p,on:g,setTranslate:_,setTransition:h,overwriteParams:s,perspective:a,recreateShadows:o,getEffectParams:d}=e;g("beforeInit",()=>{if(p.params.effect!==m)return;p.classNames.push(`${p.params.containerModifierClass}${m}`),a&&a()&&p.classNames.push(`${p.params.containerModifierClass}3d`);const n=s?s():{};Object.assign(p.params,n),Object.assign(p.originalParams,n)}),g("setTranslate",()=>{p.params.effect===m&&_()}),g("setTransition",(n,c)=>{p.params.effect===m&&h(c)}),g("transitionEnd",()=>{if(p.params.effect===m&&o){if(!d||!d().slideShadows)return;p.slides.each(n=>{p.$(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),o()}});let t;g("virtualUpdate",()=>{p.params.effect===m&&(p.slides.length||(t=!0),requestAnimationFrame(()=>{t&&p.slides&&p.slides.length&&(_(),t=!1)}))})}function be(e,m){return e.transformEl?m.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):m}function Te({swiper:e,duration:m,transformEl:p,allSlides:g}){const{slides:_,activeIndex:h,$wrapperEl:s}=e;if(e.params.virtualTranslate&&m!==0){let a=!1,o;g?o=p?_.find(p):_:o=p?_.eq(h).find(p):_.eq(h),o.transitionEnd(()=>{if(a||!e||e.destroyed)return;a=!0,e.animating=!1;const d=["webkitTransitionEnd","transitionend"];for(let t=0;t<d.length;t+=1)s.trigger(d[t])})}}function ws({swiper:e,extendParams:m,on:p}){m({fadeEffect:{crossFade:!1,transformEl:null}}),fe({effect:"fade",swiper:e,on:p,setTranslate:()=>{const{slides:h}=e,s=e.params.fadeEffect;for(let a=0;a<h.length;a+=1){const o=e.slides.eq(a);let t=-o[0].swiperSlideOffset;e.params.virtualTranslate||(t-=e.translate);let n=0;e.isHorizontal()||(n=t,t=0);const c=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(o[0].progress),0):1+Math.min(Math.max(o[0].progress,-1),0);be(s,o).css({opacity:c}).transform(`translate3d(${t}px, ${n}px, 0px)`)}},setTransition:h=>{const{transformEl:s}=e.params.fadeEffect;(s?e.slides.find(s):e.slides).transition(h),Te({swiper:e,duration:h,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function hs({swiper:e,extendParams:m,on:p}){m({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const g=(a,o,d)=>{let t=d?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),n=d?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");t.length===0&&(t=G(`<div class="swiper-slide-shadow-${d?"left":"top"}"></div>`),a.append(t)),n.length===0&&(n=G(`<div class="swiper-slide-shadow-${d?"right":"bottom"}"></div>`),a.append(n)),t.length&&(t[0].style.opacity=Math.max(-o,0)),n.length&&(n[0].style.opacity=Math.max(o,0))};fe({effect:"cube",swiper:e,on:p,setTranslate:()=>{const{$el:a,$wrapperEl:o,slides:d,width:t,height:n,rtlTranslate:c,size:u,browser:v}=e,f=e.params.cubeEffect,b=e.isHorizontal(),S=e.virtual&&e.params.virtual.enabled;let y=0,k;f.shadow&&(b?(k=o.find(".swiper-cube-shadow"),k.length===0&&(k=G('<div class="swiper-cube-shadow"></div>'),o.append(k)),k.css({height:`${t}px`})):(k=a.find(".swiper-cube-shadow"),k.length===0&&(k=G('<div class="swiper-cube-shadow"></div>'),a.append(k))));for(let T=0;T<d.length;T+=1){const j=d.eq(T);let O=T;S&&(O=parseInt(j.attr("data-swiper-slide-index"),10));let B=O*90,F=Math.floor(B/360);c&&(B=-B,F=Math.floor(-B/360));const W=Math.max(Math.min(j[0].progress,1),-1);let C=0,I=0,M=0;O%4===0?(C=-F*4*u,M=0):(O-1)%4===0?(C=0,M=-F*4*u):(O-2)%4===0?(C=u+F*4*u,M=u):(O-3)%4===0&&(C=-u,M=3*u+u*4*F),c&&(C=-C),b||(I=C,C=0);const X=`rotateX(${b?0:-B}deg) rotateY(${b?B:0}deg) translate3d(${C}px, ${I}px, ${M}px)`;W<=1&&W>-1&&(y=O*90+W*90,c&&(y=-O*90-W*90)),j.transform(X),f.slideShadows&&g(j,W,b)}if(o.css({"-webkit-transform-origin":`50% 50% -${u/2}px`,"transform-origin":`50% 50% -${u/2}px`}),f.shadow)if(b)k.transform(`translate3d(0px, ${t/2+f.shadowOffset}px, ${-t/2}px) rotateX(90deg) rotateZ(0deg) scale(${f.shadowScale})`);else{const T=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,j=1.5-(Math.sin(T*2*Math.PI/360)/2+Math.cos(T*2*Math.PI/360)/2),O=f.shadowScale,B=f.shadowScale/j,F=f.shadowOffset;k.transform(`scale3d(${O}, 1, ${B}) translate3d(0px, ${n/2+F}px, ${-n/2/B}px) rotateX(-90deg)`)}const V=v.isSafari||v.isWebView?-u/2:0;o.transform(`translate3d(0px,0,${V}px) rotateX(${e.isHorizontal()?0:y}deg) rotateY(${e.isHorizontal()?-y:0}deg)`),o[0].style.setProperty("--swiper-cube-translate-z",`${V}px`)},setTransition:a=>{const{$el:o,slides:d}=e;d.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),e.params.cubeEffect.shadow&&!e.isHorizontal()&&o.find(".swiper-cube-shadow").transition(a)},recreateShadows:()=>{const a=e.isHorizontal();e.slides.each(o=>{const d=Math.max(Math.min(o.progress,1),-1);g(G(o),d,a)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function me(e,m,p){const g=`swiper-slide-shadow${p?`-${p}`:""}`,_=e.transformEl?m.find(e.transformEl):m;let h=_.children(`.${g}`);return h.length||(h=G(`<div class="swiper-slide-shadow${p?`-${p}`:""}"></div>`),_.append(h)),h}function gs({swiper:e,extendParams:m,on:p}){m({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const g=(a,o,d)=>{let t=e.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),n=e.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");t.length===0&&(t=me(d,a,e.isHorizontal()?"left":"top")),n.length===0&&(n=me(d,a,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-o,0)),n.length&&(n[0].style.opacity=Math.max(o,0))};fe({effect:"flip",swiper:e,on:p,setTranslate:()=>{const{slides:a,rtlTranslate:o}=e,d=e.params.flipEffect;for(let t=0;t<a.length;t+=1){const n=a.eq(t);let c=n[0].progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(n[0].progress,1),-1));const u=n[0].swiperSlideOffset;let f=-180*c,b=0,S=e.params.cssMode?-u-e.translate:-u,y=0;e.isHorizontal()?o&&(f=-f):(y=S,S=0,b=-f,f=0),n[0].style.zIndex=-Math.abs(Math.round(c))+a.length,d.slideShadows&&g(n,c,d);const k=`translate3d(${S}px, ${y}px, 0px) rotateX(${b}deg) rotateY(${f}deg)`;be(d,n).transform(k)}},setTransition:a=>{const{transformEl:o}=e.params.flipEffect;(o?e.slides.find(o):e.slides).transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),Te({swiper:e,duration:a,transformEl:o})},recreateShadows:()=>{const a=e.params.flipEffect;e.slides.each(o=>{const d=G(o);let t=d[0].progress;e.params.flipEffect.limitRotation&&(t=Math.max(Math.min(o.progress,1),-1)),g(d,t,a)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function _s({swiper:e,extendParams:m,on:p}){m({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),fe({effect:"coverflow",swiper:e,on:p,setTranslate:()=>{const{width:h,height:s,slides:a,slidesSizesGrid:o}=e,d=e.params.coverflowEffect,t=e.isHorizontal(),n=e.translate,c=t?-n+h/2:-n+s/2,u=t?d.rotate:-d.rotate,v=d.depth;for(let f=0,b=a.length;f<b;f+=1){const S=a.eq(f),y=o[f],k=S[0].swiperSlideOffset,V=(c-k-y/2)/y,T=typeof d.modifier=="function"?d.modifier(V):V*d.modifier;let j=t?u*T:0,O=t?0:u*T,B=-v*Math.abs(T),F=d.stretch;typeof F=="string"&&F.indexOf("%")!==-1&&(F=parseFloat(d.stretch)/100*y);let W=t?0:F*T,C=t?F*T:0,I=1-(1-d.scale)*Math.abs(T);Math.abs(C)<.001&&(C=0),Math.abs(W)<.001&&(W=0),Math.abs(B)<.001&&(B=0),Math.abs(j)<.001&&(j=0),Math.abs(O)<.001&&(O=0),Math.abs(I)<.001&&(I=0);const M=`translate3d(${C}px,${W}px,${B}px)  rotateX(${O}deg) rotateY(${j}deg) scale(${I})`;if(be(d,S).transform(M),S[0].style.zIndex=-Math.abs(Math.round(T))+1,d.slideShadows){let D=t?S.find(".swiper-slide-shadow-left"):S.find(".swiper-slide-shadow-top"),w=t?S.find(".swiper-slide-shadow-right"):S.find(".swiper-slide-shadow-bottom");D.length===0&&(D=me(d,S,t?"left":"top")),w.length===0&&(w=me(d,S,t?"right":"bottom")),D.length&&(D[0].style.opacity=T>0?T:0),w.length&&(w[0].style.opacity=-T>0?-T:0)}}},setTransition:h=>{const{transformEl:s}=e.params.coverflowEffect;(s?e.slides.find(s):e.slides).transition(h).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(h)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function vs({swiper:e,extendParams:m,on:p}){m({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const g=s=>typeof s=="string"?s:`${s}px`;fe({effect:"creative",swiper:e,on:p,setTranslate:()=>{const{slides:s,$wrapperEl:a,slidesSizesGrid:o}=e,d=e.params.creativeEffect,{progressMultiplier:t}=d,n=e.params.centeredSlides;if(n){const c=o[0]/2-e.params.slidesOffsetBefore||0;a.transform(`translateX(calc(50% - ${c}px))`)}for(let c=0;c<s.length;c+=1){const u=s.eq(c),v=u[0].progress,f=Math.min(Math.max(u[0].progress,-d.limitProgress),d.limitProgress);let b=f;n||(b=Math.min(Math.max(u[0].originalProgress,-d.limitProgress),d.limitProgress));const S=u[0].swiperSlideOffset,y=[e.params.cssMode?-S-e.translate:-S,0,0],k=[0,0,0];let V=!1;e.isHorizontal()||(y[1]=y[0],y[0]=0);let T={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};f<0?(T=d.next,V=!0):f>0&&(T=d.prev,V=!0),y.forEach((I,M)=>{y[M]=`calc(${I}px + (${g(T.translate[M])} * ${Math.abs(f*t)}))`}),k.forEach((I,M)=>{k[M]=T.rotate[M]*Math.abs(f*t)}),u[0].style.zIndex=-Math.abs(Math.round(v))+s.length;const j=y.join(", "),O=`rotateX(${k[0]}deg) rotateY(${k[1]}deg) rotateZ(${k[2]}deg)`,B=b<0?`scale(${1+(1-T.scale)*b*t})`:`scale(${1-(1-T.scale)*b*t})`,F=b<0?1+(1-T.opacity)*b*t:1-(1-T.opacity)*b*t,W=`translate3d(${j}) ${O} ${B}`;if(V&&T.shadow||!V){let I=u.children(".swiper-slide-shadow");if(I.length===0&&T.shadow&&(I=me(d,u)),I.length){const M=d.shadowPerProgress?f*(1/d.limitProgress):f;I[0].style.opacity=Math.min(Math.max(Math.abs(M),0),1)}}const C=be(d,u);C.transform(W).css({opacity:F}),T.origin&&C.css("transform-origin",T.origin)}},setTransition:s=>{const{transformEl:a}=e.params.creativeEffect;(a?e.slides.find(a):e.slides).transition(s).find(".swiper-slide-shadow").transition(s),Te({swiper:e,duration:s,transformEl:a,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const bs=N({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){const e=n=>{console.log("SwiperComponentReady!",n)},m=n=>{console.log("handleHSwiperSlideChange!",n.realIndex)},p=Ee(new Map),g=n=>p.get(n),_=n=>{p.set(n,!0),console.log("Click slide! target slide id:",n)};let h=null;const s=n=>{h=n},a=ue();return{modules:[Ye,Y,J,ze],handleHSwiperReady:e,handleHSwiperSlideChange:m,handleHwiperSlideClick:_,isSlideClicked:g,setVSwiperRef:s,vSwiperIndex:a,updateVSwiperIndex:()=>{a.value=h==null?void 0:h.activeIndex},prevVSwiperSlide:()=>h==null?void 0:h.slidePrev(),nextVSwiperSlide:()=>h==null?void 0:h.slideNext()}}});const ne=e=>(oe("data-v-e485d71c"),e=e(),de(),e),Ss={class:"advance-example"},ys=ne(()=>x("span",null,"Loop Slide 1",-1)),xs=ne(()=>x("span",null,"Loop Slide 3",-1)),$s=ne(()=>x("span",null,"Loop Slide 4",-1)),ks=ne(()=>x("span",null,"Loop Slide 5",-1)),Cs=ne(()=>x("span",null,"Loop Slide 6",-1)),Es=ne(()=>x("i",{class:"iconfont icon-link-external"},null,-1)),Ps=ne(()=>x("i",{class:"iconfont icon-link-external"},null,-1)),zs=["disabled"],Ms=ne(()=>x("i",{class:"iconfont icon-arrow-down"},null,-1)),Ts=[Ms],Is=["disabled"],js=ne(()=>x("i",{class:"iconfont icon-arrow-up"},null,-1)),Os=[js];function Ns(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper"),o=$("ulink");return z(),Z("div",Ss,[i(a,{class:"horizontal-swiper",modules:e.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:e.handleHSwiperReady,onSlideChange:e.handleHSwiperSlideChange},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[ys]),_:1}),i(s,{class:"slide"},{default:r(d=>[x("pre",null,te(d),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[xs,x("button",{class:"click swiper-no-swiping",onClick:m[0]||(m[0]=Xe(d=>e.handleHwiperSlideClick(3),["prevent"]))},te(e.isSlideClicked(3)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[$s,x("button",{class:"click swiper-no-swiping",onClick:m[1]||(m[1]=d=>e.handleHwiperSlideClick(4))},te(e.isSlideClicked(4)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[ks,x("button",{class:"click swiper-no-swiping",onClick:m[2]||(m[2]=d=>e.handleHwiperSlideClick(5))},te(e.isSlideClicked(5)?"clicked ✅":"click me 👆"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[Cs,x("button",{class:"click swiper-no-swiping",onClick:m[3]||(m[3]=d=>e.handleHwiperSlideClick(6))},te(e.isSlideClicked(6)?"clicked ✅":"click me 👆"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),i(a,{class:"vertical-swiper",modules:e.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:e.setVSwiperRef,onSlideChange:e.updateVSwiperIndex},{"container-start":r(()=>[x("button",{class:"nav-button-prev",disabled:e.vSwiperIndex===0,onClick:m[4]||(m[4]=(...d)=>e.prevVSwiperSlide&&e.prevVSwiperSlide(...d))},Ts,8,zs)]),"container-end":r(()=>[x("button",{class:"nav-button-next",disabled:e.vSwiperIndex===5-1,onClick:m[5]||(m[5]=(...d)=>e.nextVSwiperSlide&&e.nextVSwiperSlide(...d))},Os,8,Is)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[i(o,{class:"link",href:"https://swiperjs.com/"},{default:r(()=>[l("swiperjs.com")]),_:1}),Es]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(o,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:r(()=>[l(" discussions ")]),_:1}),Ps]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}const As=A(bs,[["render",Ns],["__scopeId","data-v-e485d71c"]]),Vs=Object.freeze(Object.defineProperty({__proto__:null,default:As},Symbol.toStringTag,{value:"Module"})),Rs=N({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L}});function Ls(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1})}const Ds=A(Rs,[["render",Ls],["__scopeId","data-v-d379a297"]]),Hs=Object.freeze(Object.defineProperty({__proto__:null,default:Ds},Symbol.toStringTag,{value:"Module"})),Ws=N({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[J]}}});function Ys(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,navigation:""},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Xs=A(Ws,[["render",Ys],["__scopeId","data-v-1706437e"]]),qs=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),Gs=N({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function Bs(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Fs=A(Gs,[["render",Bs],["__scopeId","data-v-909fd0dd"]]),Us=Object.freeze(Object.defineProperty({__proto__:null,default:Fs},Symbol.toStringTag,{value:"Module"})),Ks=N({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function Zs(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Js=A(Ks,[["render",Zs],["__scopeId","data-v-ca6904e5"]]),Qs=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"})),er=N({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function sr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,pagination:{type:"progressbar"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const rr=A(er,[["render",sr],["__scopeId","data-v-ef7b1928"]]),nr=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"})),ir=N({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function tr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,pagination:{type:"fraction"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const lr=A(ir,[["render",tr],["__scopeId","data-v-267eba78"]]),ar=Object.freeze(Object.defineProperty({__proto__:null,default:lr},Symbol.toStringTag,{value:"Module"})),or=N({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{bulletRenderer:(m,p)=>`<span class="${`${p} swiper-pagination-bullet-custom`}">${m+1}</span>`,modules:[Y]}}});function dr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,pagination:{clickable:!0,renderBullet:e.bulletRenderer}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","pagination"])}const pr=A(or,[["render",dr],["__scopeId","data-v-ece27555"]]),cr=Object.freeze(Object.defineProperty({__proto__:null,default:pr},Symbol.toStringTag,{value:"Module"}));const ur=N({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Me]}}});function mr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,scrollbar:{hide:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const fr=A(ur,[["render",mr],["__scopeId","data-v-552934bb"]]),wr=Object.freeze(Object.defineProperty({__proto__:null,default:fr},Symbol.toStringTag,{value:"Module"})),hr=N({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function gr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,direction:"vertical",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const _r=A(hr,[["render",gr],["__scopeId","data-v-587498da"]]),vr=Object.freeze(Object.defineProperty({__proto__:null,default:_r},Symbol.toStringTag,{value:"Module"})),br=N({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function Sr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const yr=A(br,[["render",Sr],["__scopeId","data-v-5c85d201"]]),xr=Object.freeze(Object.defineProperty({__proto__:null,default:yr},Symbol.toStringTag,{value:"Module"})),$r=N({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function kr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Cr=A($r,[["render",kr],["__scopeId","data-v-644a9502"]]),Er=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"})),Pr=N({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function zr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Mr=A(Pr,[["render",zr],["__scopeId","data-v-c850e84c"]]),Tr=Object.freeze(Object.defineProperty({__proto__:null,default:Mr},Symbol.toStringTag,{value:"Module"})),Ir=N({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function jr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Or=A(Ir,[["render",jr],["__scopeId","data-v-e32c3264"]]),Nr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),Ar=N({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function Vr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Rr=A(Ar,[["render",Vr],["__scopeId","data-v-a8abfbfe"]]),Lr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"}));const Dr=N({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,We]}}});function Hr(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Wr=A(Dr,[["render",Hr],["__scopeId","data-v-68169327"]]),Yr=Object.freeze(Object.defineProperty({__proto__:null,default:Wr},Symbol.toStringTag,{value:"Module"})),Xr=N({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,We,Me,ze]}}});const U=e=>(oe("data-v-a53afb68"),e=e(),de(),e),qr=U(()=>x("h2",null,"I Have a Dream",-1)),Gr=U(()=>x("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),Br=U(()=>x("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),Fr=U(()=>x("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),Ur=U(()=>x("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),Kr=U(()=>x("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check — a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),Zr=U(()=>x("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),Jr=U(()=>x("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),Qr=U(()=>x("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),en=U(()=>x("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),sn=U(()=>x("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),rn=U(()=>x("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),nn=U(()=>x("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),tn=U(()=>x("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),ln=U(()=>x("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),an=U(()=>x("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),on=U(()=>x("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),dn=U(()=>x("p",null,"I have a dream today.",-1)),pn=U(()=>x("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),cn=U(()=>x("p",null,"I have a dream today.",-1)),un=U(()=>x("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),mn=U(()=>x("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),fn=U(()=>x("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),wn=U(()=>x("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),hn=U(()=>x("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),gn=U(()=>x("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),_n=U(()=>x("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),vn=U(()=>x("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),bn=U(()=>x("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),Sn=U(()=>x("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function yn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[qr,Gr,Br,Fr,Ur,Kr,Zr,Jr,Qr,en,sn,rn,nn,tn,ln,an,on,dn,pn,cn,un,mn,fn,wn,hn,gn,_n,vn,bn,Sn]),_:1})]),_:1},8,["modules"])}const xn=A(Xr,[["render",yn],["__scopeId","data-v-a53afb68"]]),$n=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"}));const kn=N({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,Ye]}}});function Cn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])}const En=A(kn,[["render",Cn],["__scopeId","data-v-1620d524"]]),Pn=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"})),zn=N({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function Mn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper swiper-h",modules:e.modules,"space-between":50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(a,{class:"swiper-v",modules:e.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Vertical Slide 5")]),_:1})]),_:1},8,["modules"])]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Horizontal Slide 4")]),_:1})]),_:1},8,["modules"])}const Tn=A(zn,[["render",Mn],["__scopeId","data-v-f660b982"]]),In=Object.freeze(Object.defineProperty({__proto__:null,default:Tn},Symbol.toStringTag,{value:"Module"})),jn=N({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});function On(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Nn=A(jn,[["render",On],["__scopeId","data-v-b9e9e5e1"]]),An=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"})),Vn=N({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J]}}});function Rn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ln=A(Vn,[["render",Rn],["__scopeId","data-v-005be99a"]]),Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"})),Hn=N({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J]}}});function Wn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,null,{default:r(()=>[l("Slide 1")]),_:1}),i(s,null,{default:r(()=>[l("Slide 2")]),_:1}),i(s,null,{default:r(()=>[l("Slide 3")]),_:1}),i(s,null,{default:r(()=>[l("Slide 4")]),_:1}),i(s,null,{default:r(()=>[l("Slide 5")]),_:1}),i(s,null,{default:r(()=>[l("Slide 6")]),_:1}),i(s,null,{default:r(()=>[l("Slide 7")]),_:1}),i(s,null,{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Yn=A(Hn,[["render",Wn],["__scopeId","data-v-01d49768"]]),Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Yn},Symbol.toStringTag,{value:"Module"})),qn=N({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[He,Me,J,Y]}}});function Gn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1})]),_:1},8,["modules"])}const Bn=A(qn,[["render",Gn],["__scopeId","data-v-06592c21"]]),Fn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"}));const Un=N({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J,ws]}}});const Kn=["src"];function Zn(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(z(),Z(Q,null,se(5,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,Kn)]),_:2},1024)),64))]),_:1},8,["modules"])}const Jn=A(Un,[["render",Zn],["__scopeId","data-v-fceb8c48"]]),Qn=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"}));const ei=N({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,_s]}}});const si={class:"coverflow-example"},ri=["src"];function ni(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z("div",si,[i(a,{class:"swiper",modules:e.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:r(()=>[(z(),Z(Q,null,se(8,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,ri)]),_:2},1024)),64))]),_:1},8,["modules"])])}const ii=A(ei,[["render",ni],["__scopeId","data-v-03b1193e"]]),ti=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));const li=N({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,hs]}}});const ai={class:"cube-example"},oi=["src"];function di(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z("div",ai,[i(a,{class:"swiper",modules:e.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:r(()=>[(z(),Z(Q,null,se(5,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,oi)]),_:2},1024)),64))]),_:1},8,["modules","cube-effect"])])}const pi=A(li,[["render",di],["__scopeId","data-v-c4683364"]]),ci=Object.freeze(Object.defineProperty({__proto__:null,default:pi},Symbol.toStringTag,{value:"Module"}));const ui=N({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J,gs]}}});const mi={class:"flip-example"},fi=["src"];function wi(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z("div",mi,[i(a,{class:"swiper",modules:e.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:r(()=>[(z(),Z(Q,null,se(6,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,fi)]),_:2},1024)),64))]),_:1},8,["modules"])])}const hi=A(ui,[["render",wi],["__scopeId","data-v-62fea608"]]),gi=Object.freeze(Object.defineProperty({__proto__:null,default:hi},Symbol.toStringTag,{value:"Module"}));const _i=N({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){const e=ue(!0),m=ue(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:m,render:e,setEffect:_=>{m.value=_,Ae(()=>{e.value=!1,Ae(()=>{e.value=!0})})},modules:[Y,vs]}}});const vi={class:"creative-example"},bi={class:"toolbar"},Si=["onClick"],yi=["src"];function xi(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z("div",vi,[x("div",bi,[(z(!0),Z(Q,null,se(e.effects,(o,d)=>(z(),Z("button",{key:d,onClick:t=>e.setEffect(d)}," Effect "+te(d),9,Si))),128))]),e.render?(z(),H(a,{key:0,class:"swiper",modules:e.modules,effect:"creative","creative-effect":e.effects[e.effectIndex],"grab-cursor":!0,pagination:!0},{default:r(()=>[(z(),Z(Q,null,se(6,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,yi)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):qe("",!0)])}const $i=A(_i,[["render",xi],["__scopeId","data-v-7811a4f5"]]),ki=Object.freeze(Object.defineProperty({__proto__:null,default:$i},Symbol.toStringTag,{value:"Module"})),Ci=N({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J,He]}}});function Ei(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Pi=A(Ci,[["render",Ei],["__scopeId","data-v-462c9dd3"]]),zi=Object.freeze(Object.defineProperty({__proto__:null,default:Pi},Symbol.toStringTag,{value:"Module"})),Mi=N({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,ze]}}});function Ti(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ii=A(Mi,[["render",Ti],["__scopeId","data-v-4f24eab4"]]),ji=Object.freeze(Object.defineProperty({__proto__:null,default:Ii},Symbol.toStringTag,{value:"Module"})),Oi=N({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J,ms]}}});function Ni(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Ai=A(Oi,[["render",Ni],["__scopeId","data-v-7176478b"]]),Vi=Object.freeze(Object.defineProperty({__proto__:null,default:Ai},Symbol.toStringTag,{value:"Module"})),Ri=N({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){const e=Ee([1,2,3,4,5]);return{modules:[Y,J],slides:e,appendSlide:()=>e.push(e.length+1),prependSlide:()=>e.unshift(e[0]-1),popSlide:()=>e.pop(),shiftSlide:()=>e.shift()}}});const Li={class:"dynamic-example"},Di={class:"toolbar"};function Hi(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z("div",Li,[x("div",Di,[x("button",{onClick:m[0]||(m[0]=(...o)=>e.prependSlide&&e.prependSlide(...o))},"Prepend slide"),x("button",{onClick:m[1]||(m[1]=(...o)=>e.appendSlide&&e.appendSlide(...o))},"Append slide"),x("button",{onClick:m[2]||(m[2]=(...o)=>e.popSlide&&e.popSlide(...o))},"Pop slide"),x("button",{onClick:m[3]||(m[3]=(...o)=>e.shiftSlide&&e.shiftSlide(...o))},"Shift slide")]),i(a,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:e.modules},{default:r(()=>[(z(!0),Z(Q,null,se(e.slides,o=>(z(),H(s,{key:o,class:"slide"},{default:r(()=>[l(" Slide "+te(o),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}const Wi=A(Ri,[["render",Hi],["__scopeId","data-v-22862f26"]]),Yi=Object.freeze(Object.defineProperty({__proto__:null,default:Wi},Symbol.toStringTag,{value:"Module"}));const Xi=N({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){const e=ue();return{modules:[J,fs],setThumbsSwiper:p=>{e.value=p},thumbsSwiper:e}}});const qi={class:"thumb-example"},Gi=["src"],Bi=["src"];function Fi(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z("div",qi,[i(a,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:e.modules,"space-between":10,navigation:!0,thumbs:{swiper:e.thumbsSwiper}},{default:r(()=>[(z(),Z(Q,null,se(8,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,Gi)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),i(a,{class:"thumbs-swiper",modules:e.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:e.setThumbsSwiper},{default:r(()=>[(z(),Z(Q,null,se(8,o=>i(s,{class:"slide",key:o},{default:r(()=>[x("img",{src:`/images/example/${o}.jpg`},null,8,Bi)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}const Ui=A(Xi,[["render",Fi],["__scopeId","data-v-8af9e0d5"]]),Ki=Object.freeze(Object.defineProperty({__proto__:null,default:Ui},Symbol.toStringTag,{value:"Module"}));const Zi=N({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J,cs]}}});const Ji={class:"swiper-zoom-container"},Qi=["src"];function et(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:e.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(z(),Z(Q,null,se(8,o=>i(s,{key:o,class:"slide"},{default:r(()=>[x("div",Ji,[x("img",{src:`/images/example/${o}.jpg`},null,8,Qi)])]),_:2},1024)),64))]),_:1},8,["modules"])}const st=A(Zi,[["render",et],["__scopeId","data-v-2ce4c470"]]),rt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));const nt=N({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[us,Y,J]}}});const it=e=>(oe("data-v-11e644a5"),e=e(),de(),e),tt=["data-src"],lt=it(()=>x("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function at(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:e.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(z(),Z(Q,null,se(8,o=>i(s,{key:o,class:"slide"},{default:r(()=>[x("img",{"data-src":`/images/example/${o}.jpg`,class:"swiper-lazy"},null,8,tt),lt]),_:2},1024)),64))]),_:1},8,["modules"])}const ot=A(nt,[["render",at],["__scopeId","data-v-11e644a5"]]),dt=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),pt=N({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[ps,Y,J]}}});const ie=e=>(oe("data-v-869a75c6"),e=e(),de(),e),ct=ie(()=>x("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),ut=ie(()=>x("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),mt=ie(()=>x("div",{class:"text","data-swiper-parallax":"-100"},[x("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),ft=ie(()=>x("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),wt=ie(()=>x("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),ht=ie(()=>x("div",{class:"text","data-swiper-parallax":"-100"},[x("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),gt=ie(()=>x("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),_t=ie(()=>x("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),vt=ie(()=>x("div",{class:"text","data-swiper-parallax":"-100"},[x("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function bt(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:e.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":r(()=>[x("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:Ge({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[ct,ut,mt]),_:1}),i(s,{class:"slide"},{default:r(()=>[ft,wt,ht]),_:1}),i(s,{class:"slide"},{default:r(()=>[gt,_t,vt]),_:1})]),_:1},8,["modules"])}const St=A(pt,[["render",bt],["__scopeId","data-v-869a75c6"]]),yt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),xt=N({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J]}}});function $t(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const kt=A(xt,[["render",$t],["__scopeId","data-v-cf318b3f"]]),Ct=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Et=N({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y]}}});const Pt=e=>(oe("data-v-c9299049"),e=e(),de(),e),zt=Pt(()=>x("div",{class:"tip"},"→ Resize the browser window ←",-1));function Mt(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z(Q,null,[zt,i(a,{class:"swiper",modules:e.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 9")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 10")]),_:1})]),_:1},8,["modules"])],64)}const Tt=A(Et,[["render",Mt],["__scopeId","data-v-c9299049"]]),It=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),jt=N({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){return{modules:[Y,J]}}});function Ot(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules"])}const Nt=A(jt,[["render",Ot],["__scopeId","data-v-a8be2f86"]]),At=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),Vt=N({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){let e=null;const m=h=>{e=h},p=ue(!1);return{menuOpened:p,toggleMenu:()=>{p.value?e==null||e.slideNext():e==null||e.slidePrev()},setSwiperRef:m,handleSlideChange:()=>{p.value=(e==null?void 0:e.activeIndex)===0}}}});const Se=e=>(oe("data-v-efc1f96c"),e=e(),de(),e),Rt=Se(()=>x("div",{class:"bar"},null,-1)),Lt=Se(()=>x("div",{class:"bar"},null,-1)),Dt=Se(()=>x("div",{class:"bar"},null,-1)),Ht=[Rt,Lt,Dt],Wt=Se(()=>x("div",null,"Content slide",-1));function Yt(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:e.setSwiperRef,onSlideChange:e.handleSlideChange},{default:r(()=>[i(s,{class:"menu"},{default:r(()=>[l("Menu slide")]),_:1}),i(s,{class:"content"},{default:r(()=>[x("div",{class:Be(["menu-button",{opened:e.menuOpened}]),onClick:m[0]||(m[0]=(...o)=>e.toggleMenu&&e.toggleMenu(...o))},Ht,2),Wt]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}const Xt=A(Vt,[["render",Yt],["__scopeId","data-v-efc1f96c"]]),qt=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"}));const Gt=N({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){let e=null;const m=a=>{e=a},p=a=>{e==null||e.slideTo(a-1,0)},g=Ee(Array.from({length:500}).map((a,o)=>o+1));let _=1;return{modules:[Y,J,ds],setSwiperRef:m,slides:g,slideTo:p,append:()=>{g.push(g.length)},prepend:()=>{g.unshift(_-2,_-1),_-=2,e==null||e.slideTo(e.activeIndex+2,0)}}}});const Bt={class:"toolbar"};function Ft(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),Z(Q,null,[x("div",Bt,[x("button",{onClick:m[0]||(m[0]=o=>e.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),x("button",{onClick:m[1]||(m[1]=o=>e.slideTo(1)),class:"prepend-slide"},"Slide 1"),x("button",{onClick:m[2]||(m[2]=o=>e.slideTo(250)),class:"slide-250"},"Slide 250"),x("button",{onClick:m[3]||(m[3]=o=>e.slideTo(500)),class:"slide-500"},"Slide 500"),x("button",{onClick:m[4]||(m[4]=o=>e.append()),class:"append-slides"},"Append Slide")]),i(a,{class:"swiper",modules:e.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:e.setSwiperRef},{default:r(()=>[(z(!0),Z(Q,null,se(e.slides,(o,d)=>(z(),H(s,{key:d,"virtual-index":d,class:"slide"},{default:r(()=>[l(" Slide "+te(o),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}const Ut=A(Gt,[["render",Ft],["__scopeId","data-v-8f43fe21"]]),Kt=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"})),Zt=N({name:"swiper-example-change-direction",title:"Change direction",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue?vue&type=script&lang.ts",components:{Swiper:R,SwiperSlide:L},setup(){let e=null;return{modules:[J],setSwiperRef:g=>{e=g},handleResize:()=>{e==null||e.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}});function Jt(e,m,p,g,_,h){const s=$("swiper-slide"),a=$("swiper");return z(),H(a,{class:"swiper",modules:e.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:e.setSwiperRef,onResize:e.handleResize},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[l("Slide 1")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 2")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 3")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 4")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 5")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 6")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 7")]),_:1}),i(s,{class:"slide"},{default:r(()=>[l("Slide 8")]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}const Qt=A(Zt,[["render",Jt],["__scopeId","data-v-8c5f1eda"]]),el=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"})),sl=`<template>\r
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
`,rl=`<template>\r
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
`,nl=`<template>\r
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
`,il=`<template>\r
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
`,tl=`<template>\r
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
`,ll=`<template>\r
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
`,al=`<template>\r
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
`,ol=`<template>\r
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
`,dl=`<template>\r
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
`,pl=`<template>\r
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
`,cl=`<template>\r
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
`,ul=`<template>\r
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
`,ml=`<template>\r
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
`,fl=`<template>\r
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
`,wl=`<template>\r
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
`,hl=`<template>\r
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
`,gl=`<template>\r
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
        opportunity of this nation. So we have come to cash this check — a check that will\r
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
`,_l=`<template>\r
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
`,vl=`<template>\r
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
`,bl=`<template>\r
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
`,Sl=`<template>\r
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
`,yl=`<template>\r
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
`,xl=`<template>\r
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
`,$l=`<template>\r
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
`,kl=`<template>\r
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
`,Cl=`<template>\r
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
`,El=`<template>\r
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
`,Pl=`<template>\r
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
`,zl=`<template>\r
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
`,Ml=`<template>\r
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
`,Tl=`<template>\r
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
`,Il=`<template>\r
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
`,jl=`<template>\r
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
`,Ol=`<template>\r
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
`,Nl=`<template>\r
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
`,Al=`<template>\r
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
`,Vl=`<template>\r
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
`,Rl=`<template>\r
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
`,Ll=`<template>\r
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
`,Dl=`<template>\r
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
`,Hl=`<template>\r
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
`,Wl=`<template>\r
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
`,Re=Object.assign({"./01-advance.vue":Vs,"./02-default.vue":Hs,"./03-navigation.vue":qs,"./04-pagination.vue":Us,"./05-pagination-dynamic.vue":Qs,"./06-pagination-progress.vue":nr,"./07-pagination-fraction.vue":ar,"./08-pagination-custom.vue":cr,"./09-scrollbar.vue":wr,"./10-vertical.vue":vr,"./11-space-between.vue":xr,"./12-slides-per-view.vue":Er,"./13-slides-per-view-auto.vue":Tr,"./14-centered.vue":Nr,"./15-centered-auto.vue":Lr,"./16-freemode.vue":Yr,"./17-scroll-container.vue":$n,"./18-slides-per-column.vue":Pn,"./19-nested.vue":In,"./20-grab-cursor.vue":An,"./21-infinite-loop.vue":Dn,"./22-infinite-loop-with-slides-per-group.vue":Xn,"./23-slides-per-group-skip.vue":Fn,"./24-effect-fade.vue":Qn,"./25-effect-coverflow.vue":ti,"./26-effect-cube.vue":ci,"./27-effect-flip.vue":gi,"./28-effect-creative.vue":ki,"./29-keyboard-control.vue":zi,"./30-mousewheel-control.vue":ji,"./31-autoplay.vue":Vi,"./32-dynamic-slides.vue":Yi,"./33-thumbs-gallery.vue":Ki,"./34-zoom.vue":rt,"./35-lazy-load-images.vue":dt,"./36-parallax.vue":yt,"./37-rtl.vue":Ct,"./38-responsive-breakpoints.vue":It,"./39-autoheight.vue":At,"./40-slideable-menu.vue":qt,"./41-virtual-slides.vue":Kt,"./42-change-direction.vue":el}),Yl=Object.assign({"./01-advance.vue":sl,"./02-default.vue":rl,"./03-navigation.vue":nl,"./04-pagination.vue":il,"./05-pagination-dynamic.vue":tl,"./06-pagination-progress.vue":ll,"./07-pagination-fraction.vue":al,"./08-pagination-custom.vue":ol,"./09-scrollbar.vue":dl,"./10-vertical.vue":pl,"./11-space-between.vue":cl,"./12-slides-per-view.vue":ul,"./13-slides-per-view-auto.vue":ml,"./14-centered.vue":fl,"./15-centered-auto.vue":wl,"./16-freemode.vue":hl,"./17-scroll-container.vue":gl,"./18-slides-per-column.vue":_l,"./19-nested.vue":vl,"./20-grab-cursor.vue":bl,"./21-infinite-loop.vue":Sl,"./22-infinite-loop-with-slides-per-group.vue":yl,"./23-slides-per-group-skip.vue":xl,"./24-effect-fade.vue":$l,"./25-effect-coverflow.vue":kl,"./26-effect-cube.vue":Cl,"./27-effect-flip.vue":El,"./28-effect-creative.vue":Pl,"./29-keyboard-control.vue":zl,"./30-mousewheel-control.vue":Ml,"./31-autoplay.vue":Tl,"./32-dynamic-slides.vue":Il,"./33-thumbs-gallery.vue":jl,"./34-zoom.vue":Ol,"./35-lazy-load-images.vue":Nl,"./36-parallax.vue":Al,"./37-rtl.vue":Vl,"./38-responsive-breakpoints.vue":Rl,"./39-autoheight.vue":Ll,"./40-slideable-menu.vue":Dl,"./41-virtual-slides.vue":Hl,"./42-change-direction.vue":Wl}),Xl=Object.keys(Re).map(e=>({component:Re[e].default,raw:Yl[e],language:"vue"})),ql={class:"swiper-example"},Gl=N({__name:"vue-awesome-swiper",setup(e){const{repository:m,route:p,packages:g}=Fe.VueAwesomeSwiper,_=Xl.map(Qe);return Ue({title:ss(m),keywords:[rs(m),"How to use Swiper on vue3?"].join(","),description:ns(m),ogImage:is(m),ogUrl:ts(p)}),(h,s)=>(z(),H(as,{repository:ae(m)},{default:r(()=>[i(es,{repository:ae(m),packages:ae(g)},{actions:r(()=>[i(ve,{icon:"doc",text:"Vue(2) Examples",href:ae(ls)(ae(m))},null,8,["href"]),i(ve,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),i(ve,{icon:"doc",text:"Swiper Vue(3) Component",href:"https://swiperjs.com/vue"}),i(ve,{icon:"discussions",text:"Swiper Discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:r(()=>[i(os,{examples:ae(_)},{component:r(a=>[x("div",ql,[(z(),H(Ke(a.component)))])]),_:1},8,["examples"])]),_:1},8,["repository","packages"])]),_:1},8,["repository"]))}});const ea=A(Gl,[["__scopeId","data-v-c5733955"]]);export{ea as default};
