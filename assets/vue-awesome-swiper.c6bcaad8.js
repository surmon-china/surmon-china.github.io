import{d as N,r as Pe,z as me,s as x,a as M,c as J,m as i,w as r,e as $,t as le,a0 as qe,p as oe,b as de,v as a,f as X,i as re,F as ee,H as Ve,x as Be,y as Ge,n as Fe,R as Ue,u as Ke,g as ce,a1 as Ze,K as Je}from"./index.a5a57b00.js";import{s as Qe,$ as F,b as ue,c as ze,d as He,n as De,e as Re,i as es,f as Ee,S as L,h as H,P as q,j as Me,g as ss,H as rs}from"./index.5bddd035.js";import{g as is,a as ns,b as ts}from"./navbar.f834c4f1.js";import{V as ls}from"./vue.ba254dce.js";import{H as be}from"./link.5418b267.js";import{H as as}from"./examples.7cd0091c.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";function os(l){let{swiper:e,extendParams:v,on:m,emit:S}=l;v({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let _;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function s(n,c){const u=e.params.virtual;if(u.cache&&e.virtual.cache[c])return e.virtual.cache[c];const y=u.renderSlide?F(u.renderSlide.call(e,n,c)):F(`<div class="${e.params.slideClass}" data-swiper-slide-index="${c}">${n}</div>`);return y.attr("data-swiper-slide-index")||y.attr("data-swiper-slide-index",c),u.cache&&(e.virtual.cache[c]=y),y}function d(n){const{slidesPerView:c,slidesPerGroup:u,centeredSlides:y}=e.params,{addSlidesBefore:w,addSlidesAfter:g}=e.params.virtual,{from:k,to:b,slides:C,slidesGrid:V,offset:I}=e.virtual;e.params.cssMode||e.updateActiveIndex();const R=e.activeIndex||0;let j;e.rtlTranslate?j="right":j=e.isHorizontal()?"left":"top";let D,K;y?(D=Math.floor(c/2)+u+g,K=Math.floor(c/2)+u+w):(D=c+(u-1)+g,K=u+w);const W=Math.max((R||0)-K,0),E=Math.min((R||0)+D,C.length-1),O=(e.slidesGrid[W]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:W,to:E,offset:O,slidesGrid:e.slidesGrid});function T(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),S("virtualUpdate")}if(k===W&&b===E&&!n){e.slidesGrid!==V&&O!==I&&e.slides.css(j,`${O}px`),e.updateProgress(),S("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:O,from:W,to:E,slides:function(){const z=[];for(let P=W;P<=E;P+=1)z.push(C[P]);return z}()}),e.params.virtual.renderExternalUpdate?T():S("virtualUpdate");return}const B=[],Y=[];if(n)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let h=k;h<=b;h+=1)(h<W||h>E)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${h}"]`).remove();for(let h=0;h<C.length;h+=1)h>=W&&h<=E&&(typeof b=="undefined"||n?Y.push(h):(h>b&&Y.push(h),h<k&&B.push(h)));Y.forEach(h=>{e.$wrapperEl.append(s(C[h],h))}),B.sort((h,z)=>z-h).forEach(h=>{e.$wrapperEl.prepend(s(C[h],h))}),e.$wrapperEl.children(".swiper-slide").css(j,`${O}px`),T()}function p(n){if(typeof n=="object"&&"length"in n)for(let c=0;c<n.length;c+=1)n[c]&&e.virtual.slides.push(n[c]);else e.virtual.slides.push(n);d(!0)}function f(n){const c=e.activeIndex;let u=c+1,y=1;if(Array.isArray(n)){for(let w=0;w<n.length;w+=1)n[w]&&e.virtual.slides.unshift(n[w]);u=c+n.length,y=n.length}else e.virtual.slides.unshift(n);if(e.params.virtual.cache){const w=e.virtual.cache,g={};Object.keys(w).forEach(k=>{const b=w[k],C=b.attr("data-swiper-slide-index");C&&b.attr("data-swiper-slide-index",parseInt(C,10)+y),g[parseInt(k,10)+y]=b}),e.virtual.cache=g}d(!0),e.slideTo(u,0)}function o(n){if(typeof n=="undefined"||n===null)return;let c=e.activeIndex;if(Array.isArray(n))for(let u=n.length-1;u>=0;u-=1)e.virtual.slides.splice(n[u],1),e.params.virtual.cache&&delete e.virtual.cache[n[u]],n[u]<c&&(c-=1),c=Math.max(c,0);else e.virtual.slides.splice(n,1),e.params.virtual.cache&&delete e.virtual.cache[n],n<c&&(c-=1),c=Math.max(c,0);d(!0),e.slideTo(c,0)}function t(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),d(!0),e.slideTo(0,0)}m("beforeInit",()=>{!e.params.virtual.enabled||(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||d())}),m("setTranslate",()=>{!e.params.virtual.enabled||(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(_),_=setTimeout(()=>{d()},100)):d())}),m("init update resize",()=>{!e.params.virtual.enabled||e.params.cssMode&&Qe(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:p,prependSlide:f,removeSlide:o,removeAllSlides:t,update:d})}function We(l){let{swiper:e,extendParams:v,on:m,emit:S}=l;const _=ue(),s=ze();e.keyboard={enabled:!1},v({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function d(o){if(!e.enabled)return;const{rtlTranslate:t}=e;let n=o;n.originalEvent&&(n=n.originalEvent);const c=n.keyCode||n.charCode,u=e.params.keyboard.pageUpDown,y=u&&c===33,w=u&&c===34,g=c===37,k=c===39,b=c===38,C=c===40;if(!e.allowSlideNext&&(e.isHorizontal()&&k||e.isVertical()&&C||w)||!e.allowSlidePrev&&(e.isHorizontal()&&g||e.isVertical()&&b||y))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey)&&!(_.activeElement&&_.activeElement.nodeName&&(_.activeElement.nodeName.toLowerCase()==="input"||_.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(y||w||g||k||b||C)){let V=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const I=e.$el,R=I[0].clientWidth,j=I[0].clientHeight,D=s.innerWidth,K=s.innerHeight,W=e.$el.offset();t&&(W.left-=e.$el[0].scrollLeft);const E=[[W.left,W.top],[W.left+R,W.top],[W.left,W.top+j],[W.left+R,W.top+j]];for(let O=0;O<E.length;O+=1){const T=E[O];if(T[0]>=0&&T[0]<=D&&T[1]>=0&&T[1]<=K){if(T[0]===0&&T[1]===0)continue;V=!0}}if(!V)return}e.isHorizontal()?((y||w||g||k)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((w||k)&&!t||(y||g)&&t)&&e.slideNext(),((y||g)&&!t||(w||k)&&t)&&e.slidePrev()):((y||w||b||C)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(w||C)&&e.slideNext(),(y||b)&&e.slidePrev()),S("keyPress",c)}}function p(){e.keyboard.enabled||(F(_).on("keydown",d),e.keyboard.enabled=!0)}function f(){!e.keyboard.enabled||(F(_).off("keydown",d),e.keyboard.enabled=!1)}m("init",()=>{e.params.keyboard.enabled&&p()}),m("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:p,disable:f})}function Q(l){let{swiper:e,extendParams:v,on:m,emit:S}=l;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function _(u){let y;return u&&(y=F(u),e.params.uniqueNavElements&&typeof u=="string"&&y.length>1&&e.$el.find(u).length===1&&(y=e.$el.find(u))),y}function s(u,y){const w=e.params.navigation;u&&u.length>0&&(u[y?"addClass":"removeClass"](w.disabledClass),u[0]&&u[0].tagName==="BUTTON"&&(u[0].disabled=y),e.params.watchOverflow&&e.enabled&&u[e.isLocked?"addClass":"removeClass"](w.lockClass))}function d(){if(e.params.loop)return;const{$nextEl:u,$prevEl:y}=e.navigation;s(y,e.isBeginning&&!e.params.rewind),s(u,e.isEnd&&!e.params.rewind)}function p(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),S("navigationPrev"))}function f(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),S("navigationNext"))}function o(){const u=e.params.navigation;if(e.params.navigation=He(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;const y=_(u.nextEl),w=_(u.prevEl);y&&y.length>0&&y.on("click",f),w&&w.length>0&&w.on("click",p),Object.assign(e.navigation,{$nextEl:y,nextEl:y&&y[0],$prevEl:w,prevEl:w&&w[0]}),e.enabled||(y&&y.addClass(u.lockClass),w&&w.addClass(u.lockClass))}function t(){const{$nextEl:u,$prevEl:y}=e.navigation;u&&u.length&&(u.off("click",f),u.removeClass(e.params.navigation.disabledClass)),y&&y.length&&(y.off("click",p),y.removeClass(e.params.navigation.disabledClass))}m("init",()=>{e.params.navigation.enabled===!1?c():(o(),d())}),m("toEdge fromEdge lock unlock",()=>{d()}),m("destroy",()=>{t()}),m("enable disable",()=>{const{$nextEl:u,$prevEl:y}=e.navigation;u&&u[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),y&&y[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),m("click",(u,y)=>{const{$nextEl:w,$prevEl:g}=e.navigation,k=y.target;if(e.params.navigation.hideOnClick&&!F(k).is(g)&&!F(k).is(w)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===k||e.pagination.el.contains(k)))return;let b;w?b=w.hasClass(e.params.navigation.hiddenClass):g&&(b=g.hasClass(e.params.navigation.hiddenClass)),S(b===!0?"navigationShow":"navigationHide"),w&&w.toggleClass(e.params.navigation.hiddenClass),g&&g.toggleClass(e.params.navigation.hiddenClass)}});const n=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),o(),d()},c=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),t()};Object.assign(e.navigation,{enable:n,disable:c,update:d,init:o,destroy:t})}function Te(l){let{swiper:e,extendParams:v,on:m,emit:S}=l;const _=ue();let s=!1,d=null,p=null,f,o,t,n;v({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function c(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E,rtlTranslate:O,progress:T}=e,{$dragEl:B,$el:Y}=E,h=e.params.scrollbar;let z=o,P=(t-o)*T;O?(P=-P,P>0?(z=o-P,P=0):-P+o>t&&(z=t+P)):P<0?(z=o+P,P=0):P+o>t&&(z=t-P),e.isHorizontal()?(B.transform(`translate3d(${P}px, 0, 0)`),B[0].style.width=`${z}px`):(B.transform(`translate3d(0px, ${P}px, 0)`),B[0].style.height=`${z}px`),h.hide&&(clearTimeout(d),Y[0].style.opacity=1,d=setTimeout(()=>{Y[0].style.opacity=0,Y.transition(400)},1e3))}function u(E){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(E)}function y(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E}=e,{$dragEl:O,$el:T}=E;O[0].style.width="",O[0].style.height="",t=e.isHorizontal()?T[0].offsetWidth:T[0].offsetHeight,n=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?o=t*n:o=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?O[0].style.width=`${o}px`:O[0].style.height=`${o}px`,n>=1?T[0].style.display="none":T[0].style.display="",e.params.scrollbar.hide&&(T[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&E.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function w(E){return e.isHorizontal()?E.type==="touchstart"||E.type==="touchmove"?E.targetTouches[0].clientX:E.clientX:E.type==="touchstart"||E.type==="touchmove"?E.targetTouches[0].clientY:E.clientY}function g(E){const{scrollbar:O,rtlTranslate:T}=e,{$el:B}=O;let Y;Y=(w(E)-B.offset()[e.isHorizontal()?"left":"top"]-(f!==null?f:o/2))/(t-o),Y=Math.max(Math.min(Y,1),0),T&&(Y=1-Y);const h=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*Y;e.updateProgress(h),e.setTranslate(h),e.updateActiveIndex(),e.updateSlidesClasses()}function k(E){const O=e.params.scrollbar,{scrollbar:T,$wrapperEl:B}=e,{$el:Y,$dragEl:h}=T;s=!0,f=E.target===h[0]||E.target===h?w(E)-E.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,E.preventDefault(),E.stopPropagation(),B.transition(100),h.transition(100),g(E),clearTimeout(p),Y.transition(0),O.hide&&Y.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),S("scrollbarDragStart",E)}function b(E){const{scrollbar:O,$wrapperEl:T}=e,{$el:B,$dragEl:Y}=O;!s||(E.preventDefault?E.preventDefault():E.returnValue=!1,g(E),T.transition(0),B.transition(0),Y.transition(0),S("scrollbarDragMove",E))}function C(E){const O=e.params.scrollbar,{scrollbar:T,$wrapperEl:B}=e,{$el:Y}=T;!s||(s=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),B.transition("")),O.hide&&(clearTimeout(p),p=De(()=>{Y.css("opacity",0),Y.transition(400)},1e3)),S("scrollbarDragEnd",E),O.snapOnRelease&&e.slideToClosest())}function V(E){const{scrollbar:O,touchEventsTouch:T,touchEventsDesktop:B,params:Y,support:h}=e,z=O.$el;if(!z)return;const P=z[0],G=h.passiveListener&&Y.passiveListeners?{passive:!1,capture:!1}:!1,Z=h.passiveListener&&Y.passiveListeners?{passive:!0,capture:!1}:!1;if(!P)return;const se=E==="on"?"addEventListener":"removeEventListener";h.touch?(P[se](T.start,k,G),P[se](T.move,b,G),P[se](T.end,C,Z)):(P[se](B.start,k,G),_[se](B.move,b,G),_[se](B.end,C,Z))}function I(){!e.params.scrollbar.el||!e.scrollbar.el||V("on")}function R(){!e.params.scrollbar.el||!e.scrollbar.el||V("off")}function j(){const{scrollbar:E,$el:O}=e;e.params.scrollbar=He(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const T=e.params.scrollbar;if(!T.el)return;let B=F(T.el);e.params.uniqueNavElements&&typeof T.el=="string"&&B.length>1&&O.find(T.el).length===1&&(B=O.find(T.el)),B.addClass(e.isHorizontal()?T.horizontalClass:T.verticalClass);let Y=B.find(`.${e.params.scrollbar.dragClass}`);Y.length===0&&(Y=F(`<div class="${e.params.scrollbar.dragClass}"></div>`),B.append(Y)),Object.assign(E,{$el:B,el:B[0],$dragEl:Y,dragEl:Y[0]}),T.draggable&&I(),B&&B[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function D(){const E=e.params.scrollbar,O=e.scrollbar.$el;O&&O.removeClass(e.isHorizontal()?E.horizontalClass:E.verticalClass),R()}m("init",()=>{e.params.scrollbar.enabled===!1?W():(j(),y(),c())}),m("update resize observerUpdate lock unlock",()=>{y()}),m("setTranslate",()=>{c()}),m("setTransition",(E,O)=>{u(O)}),m("enable disable",()=>{const{$el:E}=e.scrollbar;E&&E[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),m("destroy",()=>{D()});const K=()=>{e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),j(),y(),c()},W=()=>{e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),D()};Object.assign(e.scrollbar,{enable:K,disable:W,updateSize:y,setTranslate:c,init:j,destroy:D})}function ds(l){let{swiper:e,extendParams:v,on:m}=l;v({parallax:{enabled:!1}});const S=(d,p)=>{const{rtl:f}=e,o=F(d),t=f?-1:1,n=o.attr("data-swiper-parallax")||"0";let c=o.attr("data-swiper-parallax-x"),u=o.attr("data-swiper-parallax-y");const y=o.attr("data-swiper-parallax-scale"),w=o.attr("data-swiper-parallax-opacity");if(c||u?(c=c||"0",u=u||"0"):e.isHorizontal()?(c=n,u="0"):(u=n,c="0"),c.indexOf("%")>=0?c=`${parseInt(c,10)*p*t}%`:c=`${c*p*t}px`,u.indexOf("%")>=0?u=`${parseInt(u,10)*p}%`:u=`${u*p}px`,typeof w!="undefined"&&w!==null){const g=w-(w-1)*(1-Math.abs(p));o[0].style.opacity=g}if(typeof y=="undefined"||y===null)o.transform(`translate3d(${c}, ${u}, 0px)`);else{const g=y-(y-1)*(1-Math.abs(p));o.transform(`translate3d(${c}, ${u}, 0px) scale(${g})`)}},_=()=>{const{$el:d,slides:p,progress:f,snapGrid:o}=e;d.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t=>{S(t,f)}),p.each((t,n)=>{let c=t.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(c+=Math.ceil(n/2)-f*(o.length-1)),c=Math.min(Math.max(c,-1),1),F(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{S(u,c)})})},s=function(d){d===void 0&&(d=e.params.speed);const{$el:p}=e;p.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(f=>{const o=F(f);let t=parseInt(o.attr("data-swiper-parallax-duration"),10)||d;d===0&&(t=0),o.transition(t)})};m("beforeInit",()=>{!e.params.parallax.enabled||(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),m("init",()=>{!e.params.parallax.enabled||_()}),m("setTranslate",()=>{!e.params.parallax.enabled||_()}),m("setTransition",(d,p)=>{!e.params.parallax.enabled||s(p)})}function ps(l){let{swiper:e,extendParams:v,on:m,emit:S}=l;const _=ze();v({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let s=1,d=!1,p,f,o;const t={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},n={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},c={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let u=1;Object.defineProperty(e.zoom,"scale",{get(){return u},set(h){if(u!==h){const z=t.$imageEl?t.$imageEl[0]:void 0,P=t.$slideEl?t.$slideEl[0]:void 0;S("zoomChange",h,z,P)}u=h}});function y(h){if(h.targetTouches.length<2)return 1;const z=h.targetTouches[0].pageX,P=h.targetTouches[0].pageY,G=h.targetTouches[1].pageX,Z=h.targetTouches[1].pageY;return Math.sqrt((G-z)**2+(Z-P)**2)}function w(h){const z=e.support,P=e.params.zoom;if(f=!1,o=!1,!z.gestures){if(h.type!=="touchstart"||h.type==="touchstart"&&h.targetTouches.length<2)return;f=!0,t.scaleStart=y(h)}if((!t.$slideEl||!t.$slideEl.length)&&(t.$slideEl=F(h.target).closest(`.${e.params.slideClass}`),t.$slideEl.length===0&&(t.$slideEl=e.slides.eq(e.activeIndex)),t.$imageEl=t.$slideEl.find(`.${P.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),t.$imageWrapEl=t.$imageEl.parent(`.${P.containerClass}`),t.maxRatio=t.$imageWrapEl.attr("data-swiper-zoom")||P.maxRatio,t.$imageWrapEl.length===0)){t.$imageEl=void 0;return}t.$imageEl&&t.$imageEl.transition(0),d=!0}function g(h){const z=e.support,P=e.params.zoom,G=e.zoom;if(!z.gestures){if(h.type!=="touchmove"||h.type==="touchmove"&&h.targetTouches.length<2)return;o=!0,t.scaleMove=y(h)}if(!t.$imageEl||t.$imageEl.length===0){h.type==="gesturechange"&&w(h);return}z.gestures?G.scale=h.scale*s:G.scale=t.scaleMove/t.scaleStart*s,G.scale>t.maxRatio&&(G.scale=t.maxRatio-1+(G.scale-t.maxRatio+1)**.5),G.scale<P.minRatio&&(G.scale=P.minRatio+1-(P.minRatio-G.scale+1)**.5),t.$imageEl.transform(`translate3d(0,0,0) scale(${G.scale})`)}function k(h){const z=e.device,P=e.support,G=e.params.zoom,Z=e.zoom;if(!P.gestures){if(!f||!o||h.type!=="touchend"||h.type==="touchend"&&h.changedTouches.length<2&&!z.android)return;f=!1,o=!1}!t.$imageEl||t.$imageEl.length===0||(Z.scale=Math.max(Math.min(Z.scale,t.maxRatio),G.minRatio),t.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${Z.scale})`),s=Z.scale,d=!1,Z.scale===1&&(t.$slideEl=void 0))}function b(h){const z=e.device;!t.$imageEl||t.$imageEl.length===0||n.isTouched||(z.android&&h.cancelable&&h.preventDefault(),n.isTouched=!0,n.touchesStart.x=h.type==="touchstart"?h.targetTouches[0].pageX:h.pageX,n.touchesStart.y=h.type==="touchstart"?h.targetTouches[0].pageY:h.pageY)}function C(h){const z=e.zoom;if(!t.$imageEl||t.$imageEl.length===0||(e.allowClick=!1,!n.isTouched||!t.$slideEl))return;n.isMoved||(n.width=t.$imageEl[0].offsetWidth,n.height=t.$imageEl[0].offsetHeight,n.startX=Re(t.$imageWrapEl[0],"x")||0,n.startY=Re(t.$imageWrapEl[0],"y")||0,t.slideWidth=t.$slideEl[0].offsetWidth,t.slideHeight=t.$slideEl[0].offsetHeight,t.$imageWrapEl.transition(0));const P=n.width*z.scale,G=n.height*z.scale;if(!(P<t.slideWidth&&G<t.slideHeight)){if(n.minX=Math.min(t.slideWidth/2-P/2,0),n.maxX=-n.minX,n.minY=Math.min(t.slideHeight/2-G/2,0),n.maxY=-n.minY,n.touchesCurrent.x=h.type==="touchmove"?h.targetTouches[0].pageX:h.pageX,n.touchesCurrent.y=h.type==="touchmove"?h.targetTouches[0].pageY:h.pageY,!n.isMoved&&!d){if(e.isHorizontal()&&(Math.floor(n.minX)===Math.floor(n.startX)&&n.touchesCurrent.x<n.touchesStart.x||Math.floor(n.maxX)===Math.floor(n.startX)&&n.touchesCurrent.x>n.touchesStart.x)){n.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(n.minY)===Math.floor(n.startY)&&n.touchesCurrent.y<n.touchesStart.y||Math.floor(n.maxY)===Math.floor(n.startY)&&n.touchesCurrent.y>n.touchesStart.y)){n.isTouched=!1;return}}h.cancelable&&h.preventDefault(),h.stopPropagation(),n.isMoved=!0,n.currentX=n.touchesCurrent.x-n.touchesStart.x+n.startX,n.currentY=n.touchesCurrent.y-n.touchesStart.y+n.startY,n.currentX<n.minX&&(n.currentX=n.minX+1-(n.minX-n.currentX+1)**.8),n.currentX>n.maxX&&(n.currentX=n.maxX-1+(n.currentX-n.maxX+1)**.8),n.currentY<n.minY&&(n.currentY=n.minY+1-(n.minY-n.currentY+1)**.8),n.currentY>n.maxY&&(n.currentY=n.maxY-1+(n.currentY-n.maxY+1)**.8),c.prevPositionX||(c.prevPositionX=n.touchesCurrent.x),c.prevPositionY||(c.prevPositionY=n.touchesCurrent.y),c.prevTime||(c.prevTime=Date.now()),c.x=(n.touchesCurrent.x-c.prevPositionX)/(Date.now()-c.prevTime)/2,c.y=(n.touchesCurrent.y-c.prevPositionY)/(Date.now()-c.prevTime)/2,Math.abs(n.touchesCurrent.x-c.prevPositionX)<2&&(c.x=0),Math.abs(n.touchesCurrent.y-c.prevPositionY)<2&&(c.y=0),c.prevPositionX=n.touchesCurrent.x,c.prevPositionY=n.touchesCurrent.y,c.prevTime=Date.now(),t.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)}}function V(){const h=e.zoom;if(!t.$imageEl||t.$imageEl.length===0)return;if(!n.isTouched||!n.isMoved){n.isTouched=!1,n.isMoved=!1;return}n.isTouched=!1,n.isMoved=!1;let z=300,P=300;const G=c.x*z,Z=n.currentX+G,se=c.y*P,pe=n.currentY+se;c.x!==0&&(z=Math.abs((Z-n.currentX)/c.x)),c.y!==0&&(P=Math.abs((pe-n.currentY)/c.y));const he=Math.max(z,P);n.currentX=Z,n.currentY=pe;const _e=n.width*h.scale,ie=n.height*h.scale;n.minX=Math.min(t.slideWidth/2-_e/2,0),n.maxX=-n.minX,n.minY=Math.min(t.slideHeight/2-ie/2,0),n.maxY=-n.minY,n.currentX=Math.max(Math.min(n.currentX,n.maxX),n.minX),n.currentY=Math.max(Math.min(n.currentY,n.maxY),n.minY),t.$imageWrapEl.transition(he).transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)}function I(){const h=e.zoom;t.$slideEl&&e.previousIndex!==e.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),h.scale=1,s=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)}function R(h){const z=e.zoom,P=e.params.zoom;if(t.$slideEl||(h&&h.target&&(t.$slideEl=F(h.target).closest(`.${e.params.slideClass}`)),t.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?t.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):t.$slideEl=e.slides.eq(e.activeIndex)),t.$imageEl=t.$slideEl.find(`.${P.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),t.$imageWrapEl=t.$imageEl.parent(`.${P.containerClass}`)),!t.$imageEl||t.$imageEl.length===0||!t.$imageWrapEl||t.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),t.$slideEl.addClass(`${P.zoomedSlideClass}`);let G,Z,se,pe,he,_e,ie,ae,je,Oe,Ne,Ae,ge,ve,$e,xe,ke,Ce;typeof n.touchesStart.x=="undefined"&&h?(G=h.type==="touchend"?h.changedTouches[0].pageX:h.pageX,Z=h.type==="touchend"?h.changedTouches[0].pageY:h.pageY):(G=n.touchesStart.x,Z=n.touchesStart.y),z.scale=t.$imageWrapEl.attr("data-swiper-zoom")||P.maxRatio,s=t.$imageWrapEl.attr("data-swiper-zoom")||P.maxRatio,h?(ke=t.$slideEl[0].offsetWidth,Ce=t.$slideEl[0].offsetHeight,se=t.$slideEl.offset().left+_.scrollX,pe=t.$slideEl.offset().top+_.scrollY,he=se+ke/2-G,_e=pe+Ce/2-Z,je=t.$imageEl[0].offsetWidth,Oe=t.$imageEl[0].offsetHeight,Ne=je*z.scale,Ae=Oe*z.scale,ge=Math.min(ke/2-Ne/2,0),ve=Math.min(Ce/2-Ae/2,0),$e=-ge,xe=-ve,ie=he*z.scale,ae=_e*z.scale,ie<ge&&(ie=ge),ie>$e&&(ie=$e),ae<ve&&(ae=ve),ae>xe&&(ae=xe)):(ie=0,ae=0),t.$imageWrapEl.transition(300).transform(`translate3d(${ie}px, ${ae}px,0)`),t.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${z.scale})`)}function j(){const h=e.zoom,z=e.params.zoom;t.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?t.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):t.$slideEl=e.slides.eq(e.activeIndex),t.$imageEl=t.$slideEl.find(`.${z.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),t.$imageWrapEl=t.$imageEl.parent(`.${z.containerClass}`)),!(!t.$imageEl||t.$imageEl.length===0||!t.$imageWrapEl||t.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),h.scale=1,s=1,t.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),t.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),t.$slideEl.removeClass(`${z.zoomedSlideClass}`),t.$slideEl=void 0)}function D(h){const z=e.zoom;z.scale&&z.scale!==1?j():R(h)}function K(){const h=e.support,z=e.touchEvents.start==="touchstart"&&h.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,P=h.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:z,activeListenerWithCapture:P}}function W(){return`.${e.params.slideClass}`}function E(h){const{passiveListener:z}=K(),P=W();e.$wrapperEl[h]("gesturestart",P,w,z),e.$wrapperEl[h]("gesturechange",P,g,z),e.$wrapperEl[h]("gestureend",P,k,z)}function O(){p||(p=!0,E("on"))}function T(){!p||(p=!1,E("off"))}function B(){const h=e.zoom;if(h.enabled)return;h.enabled=!0;const z=e.support,{passiveListener:P,activeListenerWithCapture:G}=K(),Z=W();z.gestures?(e.$wrapperEl.on(e.touchEvents.start,O,P),e.$wrapperEl.on(e.touchEvents.end,T,P)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,Z,w,P),e.$wrapperEl.on(e.touchEvents.move,Z,g,G),e.$wrapperEl.on(e.touchEvents.end,Z,k,P),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,Z,k,P)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,C,G)}function Y(){const h=e.zoom;if(!h.enabled)return;const z=e.support;h.enabled=!1;const{passiveListener:P,activeListenerWithCapture:G}=K(),Z=W();z.gestures?(e.$wrapperEl.off(e.touchEvents.start,O,P),e.$wrapperEl.off(e.touchEvents.end,T,P)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,Z,w,P),e.$wrapperEl.off(e.touchEvents.move,Z,g,G),e.$wrapperEl.off(e.touchEvents.end,Z,k,P),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,Z,k,P)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,C,G)}m("init",()=>{e.params.zoom.enabled&&B()}),m("destroy",()=>{Y()}),m("touchStart",(h,z)=>{!e.zoom.enabled||b(z)}),m("touchEnd",(h,z)=>{!e.zoom.enabled||V()}),m("doubleTap",(h,z)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&D(z)}),m("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&I()}),m("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&I()}),Object.assign(e.zoom,{enable:B,disable:Y,in:R,out:j,toggle:D})}function cs(l){let{swiper:e,extendParams:v,on:m,emit:S}=l;v({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let _=!1,s=!1;function d(o,t){t===void 0&&(t=!0);const n=e.params.lazy;if(typeof o=="undefined"||e.slides.length===0)return;const u=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${o}"]`):e.slides.eq(o),y=u.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);u.hasClass(n.elementClass)&&!u.hasClass(n.loadedClass)&&!u.hasClass(n.loadingClass)&&y.push(u[0]),y.length!==0&&y.each(w=>{const g=F(w);g.addClass(n.loadingClass);const k=g.attr("data-background"),b=g.attr("data-src"),C=g.attr("data-srcset"),V=g.attr("data-sizes"),I=g.parent("picture");e.loadImage(g[0],b||k,C,V,!1,()=>{if(!(typeof e=="undefined"||e===null||!e||e&&!e.params||e.destroyed)){if(k?(g.css("background-image",`url("${k}")`),g.removeAttr("data-background")):(C&&(g.attr("srcset",C),g.removeAttr("data-srcset")),V&&(g.attr("sizes",V),g.removeAttr("data-sizes")),I.length&&I.children("source").each(R=>{const j=F(R);j.attr("data-srcset")&&(j.attr("srcset",j.attr("data-srcset")),j.removeAttr("data-srcset"))}),b&&(g.attr("src",b),g.removeAttr("data-src"))),g.addClass(n.loadedClass).removeClass(n.loadingClass),u.find(`.${n.preloaderClass}`).remove(),e.params.loop&&t){const R=u.attr("data-swiper-slide-index");if(u.hasClass(e.params.slideDuplicateClass)){const j=e.$wrapperEl.children(`[data-swiper-slide-index="${R}"]:not(.${e.params.slideDuplicateClass})`);d(j.index(),!1)}else{const j=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${R}"]`);d(j.index(),!1)}}S("lazyImageReady",u[0],g[0]),e.params.autoHeight&&e.updateAutoHeight()}}),S("lazyImageLoad",u[0],g[0])})}function p(){const{$wrapperEl:o,params:t,slides:n,activeIndex:c}=e,u=e.virtual&&t.virtual.enabled,y=t.lazy;let w=t.slidesPerView;w==="auto"&&(w=0);function g(b){if(u){if(o.children(`.${t.slideClass}[data-swiper-slide-index="${b}"]`).length)return!0}else if(n[b])return!0;return!1}function k(b){return u?F(b).attr("data-swiper-slide-index"):F(b).index()}if(s||(s=!0),e.params.watchSlidesProgress)o.children(`.${t.slideVisibleClass}`).each(b=>{const C=u?F(b).attr("data-swiper-slide-index"):F(b).index();d(C)});else if(w>1)for(let b=c;b<c+w;b+=1)g(b)&&d(b);else d(c);if(y.loadPrevNext)if(w>1||y.loadPrevNextAmount&&y.loadPrevNextAmount>1){const b=y.loadPrevNextAmount,C=Math.ceil(w),V=Math.min(c+C+Math.max(b,C),n.length),I=Math.max(c-Math.max(C,b),0);for(let R=c+C;R<V;R+=1)g(R)&&d(R);for(let R=I;R<c;R+=1)g(R)&&d(R)}else{const b=o.children(`.${t.slideNextClass}`);b.length>0&&d(k(b));const C=o.children(`.${t.slidePrevClass}`);C.length>0&&d(k(C))}}function f(){const o=ze();if(!e||e.destroyed)return;const t=e.params.lazy.scrollingElement?F(e.params.lazy.scrollingElement):F(o),n=t[0]===o,c=n?o.innerWidth:t[0].offsetWidth,u=n?o.innerHeight:t[0].offsetHeight,y=e.$el.offset(),{rtlTranslate:w}=e;let g=!1;w&&(y.left-=e.$el[0].scrollLeft);const k=[[y.left,y.top],[y.left+e.width,y.top],[y.left,y.top+e.height],[y.left+e.width,y.top+e.height]];for(let C=0;C<k.length;C+=1){const V=k[C];if(V[0]>=0&&V[0]<=c&&V[1]>=0&&V[1]<=u){if(V[0]===0&&V[1]===0)continue;g=!0}}const b=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;g?(p(),t.off("scroll",f,b)):_||(_=!0,t.on("scroll",f,b))}m("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),m("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?f():p())}),m("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&p()}),m("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?f():p())}),m("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!s)&&(e.params.lazy.checkInView?f():p())}),m("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?f():p())}),m("slideChange",()=>{const{lazy:o,cssMode:t,watchSlidesProgress:n,touchReleaseOnEdges:c,resistanceRatio:u}=e.params;o.enabled&&(t||n&&(c||u===0))&&p()}),m("destroy",()=>{!e.$el||e.$el.find(`.${e.params.lazy.loadingClass}`).removeClass(e.params.lazy.loadingClass)}),Object.assign(e.lazy,{load:p,loadInSlide:d})}function us(l){let{swiper:e,extendParams:v,on:m,emit:S}=l,_;e.autoplay={running:!1,paused:!1},v({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){const w=e.slides.eq(e.activeIndex);let g=e.params.autoplay.delay;w.attr("data-swiper-autoplay")&&(g=w.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(_),_=De(()=>{let k;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),k=e.slidePrev(e.params.speed,!0,!0),S("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?p():(k=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),S("autoplay")):(k=e.slidePrev(e.params.speed,!0,!0),S("autoplay")):e.params.loop?(e.loopFix(),k=e.slideNext(e.params.speed,!0,!0),S("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?p():(k=e.slideTo(0,e.params.speed,!0,!0),S("autoplay")):(k=e.slideNext(e.params.speed,!0,!0),S("autoplay")),(e.params.cssMode&&e.autoplay.running||k===!1)&&s()},g)}function d(){return typeof _!="undefined"||e.autoplay.running?!1:(e.autoplay.running=!0,S("autoplayStart"),s(),!0)}function p(){return!e.autoplay.running||typeof _=="undefined"?!1:(_&&(clearTimeout(_),_=void 0),e.autoplay.running=!1,S("autoplayStop"),!0)}function f(w){!e.autoplay.running||e.autoplay.paused||(_&&clearTimeout(_),e.autoplay.paused=!0,w===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].addEventListener(g,t)}))}function o(){const w=ue();w.visibilityState==="hidden"&&e.autoplay.running&&f(),w.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function t(w){!e||e.destroyed||!e.$wrapperEl||w.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].removeEventListener(g,t)}),e.autoplay.paused=!1,e.autoplay.running?s():p())}function n(){e.params.autoplay.disableOnInteraction?p():(S("autoplayPause"),f()),["transitionend","webkitTransitionEnd"].forEach(w=>{e.$wrapperEl[0].removeEventListener(w,t)})}function c(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,S("autoplayResume"),s())}function u(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",n),e.$el.on("mouseleave",c))}function y(){e.$el.off("mouseenter",n),e.$el.off("mouseleave",c)}m("init",()=>{e.params.autoplay.enabled&&(d(),ue().addEventListener("visibilitychange",o),u())}),m("beforeTransitionStart",(w,g,k)=>{e.autoplay.running&&(k||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(g):p())}),m("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?p():f())}),m("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),m("destroy",()=>{y(),e.autoplay.running&&p(),ue().removeEventListener("visibilitychange",o)}),Object.assign(e.autoplay,{pause:f,run:s,start:d,stop:p})}function ms(l){let{swiper:e,extendParams:v,on:m}=l;v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let S=!1,_=!1;e.thumbs={swiper:null};function s(){const f=e.thumbs.swiper;if(!f||f.destroyed)return;const o=f.clickedIndex,t=f.clickedSlide;if(t&&F(t).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof o=="undefined"||o===null)return;let n;if(f.params.loop?n=parseInt(F(f.clickedSlide).attr("data-swiper-slide-index"),10):n=o,e.params.loop){let c=e.activeIndex;e.slides.eq(c).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,c=e.activeIndex);const u=e.slides.eq(c).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),y=e.slides.eq(c).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();typeof u=="undefined"?n=y:typeof y=="undefined"?n=u:y-c<c-u?n=y:n=u}e.slideTo(n)}function d(){const{thumbs:f}=e.params;if(S)return!1;S=!0;const o=e.constructor;if(f.swiper instanceof o)e.thumbs.swiper=f.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(es(f.swiper)){const t=Object.assign({},f.swiper);Object.assign(t,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(t),_=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",s),!0}function p(f){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const t=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView;let n=1;const c=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),o.slides.removeClass(c),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let w=0;w<n;w+=1)o.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+w}"]`).addClass(c);else for(let w=0;w<n;w+=1)o.slides.eq(e.realIndex+w).addClass(c);const u=e.params.thumbs.autoScrollOffset,y=u&&!o.params.loop;if(e.realIndex!==o.realIndex||y){let w=o.activeIndex,g,k;if(o.params.loop){o.slides.eq(w).hasClass(o.params.slideDuplicateClass)&&(o.loopFix(),o._clientLeft=o.$wrapperEl[0].clientLeft,w=o.activeIndex);const b=o.slides.eq(w).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),C=o.slides.eq(w).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof b=="undefined"?g=C:typeof C=="undefined"?g=b:C-w===w-b?g=o.params.slidesPerGroup>1?C:w:C-w<w-b?g=C:g=b,k=e.activeIndex>e.previousIndex?"next":"prev"}else g=e.realIndex,k=g>e.previousIndex?"next":"prev";y&&(g+=k==="next"?u:-1*u),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(g)<0&&(o.params.centeredSlides?g>w?g=g-Math.floor(t/2)+1:g=g+Math.floor(t/2)-1:g>w&&o.params.slidesPerGroup,o.slideTo(g,f?0:void 0))}}m("beforeInit",()=>{const{thumbs:f}=e.params;!f||!f.swiper||(d(),p(!0))}),m("slideChange update resize observerUpdate",()=>{p()}),m("setTransition",(f,o)=>{const t=e.thumbs.swiper;!t||t.destroyed||t.setTransition(o)}),m("beforeDestroy",()=>{const f=e.thumbs.swiper;!f||f.destroyed||_&&f.destroy()}),Object.assign(e.thumbs,{init:d,update:p})}function Ye(l){let{swiper:e,extendParams:v,emit:m,once:S}=l;v({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function _(){const p=e.getTranslate();e.setTranslate(p),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function s(){const{touchEventsData:p,touches:f}=e;p.velocities.length===0&&p.velocities.push({position:f[e.isHorizontal()?"startX":"startY"],time:p.touchStartTime}),p.velocities.push({position:f[e.isHorizontal()?"currentX":"currentY"],time:Ee()})}function d(p){let{currentPos:f}=p;const{params:o,$wrapperEl:t,rtlTranslate:n,snapGrid:c,touchEventsData:u}=e,w=Ee()-u.touchStartTime;if(f<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(f>-e.maxTranslate()){e.slides.length<c.length?e.slideTo(c.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(u.velocities.length>1){const j=u.velocities.pop(),D=u.velocities.pop(),K=j.position-D.position,W=j.time-D.time;e.velocity=K/W,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(W>150||Ee()-j.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,u.velocities.length=0;let g=1e3*o.freeMode.momentumRatio;const k=e.velocity*g;let b=e.translate+k;n&&(b=-b);let C=!1,V;const I=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let R;if(b<e.maxTranslate())o.freeMode.momentumBounce?(b+e.maxTranslate()<-I&&(b=e.maxTranslate()-I),V=e.maxTranslate(),C=!0,u.allowMomentumBounce=!0):b=e.maxTranslate(),o.loop&&o.centeredSlides&&(R=!0);else if(b>e.minTranslate())o.freeMode.momentumBounce?(b-e.minTranslate()>I&&(b=e.minTranslate()+I),V=e.minTranslate(),C=!0,u.allowMomentumBounce=!0):b=e.minTranslate(),o.loop&&o.centeredSlides&&(R=!0);else if(o.freeMode.sticky){let j;for(let D=0;D<c.length;D+=1)if(c[D]>-b){j=D;break}Math.abs(c[j]-b)<Math.abs(c[j-1]-b)||e.swipeDirection==="next"?b=c[j]:b=c[j-1],b=-b}if(R&&S("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(n?g=Math.abs((-b-e.translate)/e.velocity):g=Math.abs((b-e.translate)/e.velocity),o.freeMode.sticky){const j=Math.abs((n?-b:b)-e.translate),D=e.slidesSizesGrid[e.activeIndex];j<D?g=o.speed:j<2*D?g=o.speed*1.5:g=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&C?(e.updateProgress(V),e.setTransition(g),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating=!0,t.transitionEnd(()=>{!e||e.destroyed||!u.allowMomentumBounce||(m("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(V),t.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(m("_freeModeNoMomentumRelease"),e.updateProgress(b),e.setTransition(g),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,t.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(b),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&m("_freeModeNoMomentumRelease");(!o.freeMode.momentum||w>=o.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:_,onTouchMove:s,onTouchEnd:d}})}function Xe(l){let{swiper:e,extendParams:v}=l;v({grid:{rows:1,fill:"column"}});let m,S,_;const s=f=>{const{slidesPerView:o}=e.params,{rows:t,fill:n}=e.params.grid;S=m/t,_=Math.floor(f/t),Math.floor(f/t)===f/t?m=f:m=Math.ceil(f/t)*t,o!=="auto"&&n==="row"&&(m=Math.max(m,o*t))},d=(f,o,t,n)=>{const{slidesPerGroup:c,spaceBetween:u}=e.params,{rows:y,fill:w}=e.params.grid;let g,k,b;if(w==="row"&&c>1){const C=Math.floor(f/(c*y)),V=f-y*c*C,I=C===0?c:Math.min(Math.ceil((t-C*y*c)/y),c);b=Math.floor(V/I),k=V-b*I+C*c,g=k+b*m/y,o.css({"-webkit-order":g,order:g})}else w==="column"?(k=Math.floor(f/y),b=f-k*y,(k>_||k===_&&b===y-1)&&(b+=1,b>=y&&(b=0,k+=1))):(b=Math.floor(f/S),k=f-b*S);o.css(n("margin-top"),b!==0?u&&`${u}px`:"")},p=(f,o,t)=>{const{spaceBetween:n,centeredSlides:c,roundLengths:u}=e.params,{rows:y}=e.params.grid;if(e.virtualSize=(f+n)*m,e.virtualSize=Math.ceil(e.virtualSize/y)-n,e.$wrapperEl.css({[t("width")]:`${e.virtualSize+n}px`}),c){o.splice(0,o.length);const w=[];for(let g=0;g<o.length;g+=1){let k=o[g];u&&(k=Math.floor(k)),o[g]<e.virtualSize+o[0]&&w.push(k)}o.push(...w)}};e.grid={initSlides:s,updateSlide:d,updateWrapperSize:p}}function we(l){const{effect:e,swiper:v,on:m,setTranslate:S,setTransition:_,overwriteParams:s,perspective:d,recreateShadows:p,getEffectParams:f}=l;m("beforeInit",()=>{if(v.params.effect!==e)return;v.classNames.push(`${v.params.containerModifierClass}${e}`),d&&d()&&v.classNames.push(`${v.params.containerModifierClass}3d`);const t=s?s():{};Object.assign(v.params,t),Object.assign(v.originalParams,t)}),m("setTranslate",()=>{v.params.effect===e&&S()}),m("setTransition",(t,n)=>{v.params.effect===e&&_(n)}),m("transitionEnd",()=>{if(v.params.effect===e&&p){if(!f||!f().slideShadows)return;v.slides.each(t=>{v.$(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),p()}});let o;m("virtualUpdate",()=>{v.params.effect===e&&(v.slides.length||(o=!0),requestAnimationFrame(()=>{o&&v.slides&&v.slides.length&&(S(),o=!1)}))})}function Se(l,e){return l.transformEl?e.find(l.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function Ie(l){let{swiper:e,duration:v,transformEl:m,allSlides:S}=l;const{slides:_,activeIndex:s,$wrapperEl:d}=e;if(e.params.virtualTranslate&&v!==0){let p=!1,f;S?f=m?_.find(m):_:f=m?_.eq(s).find(m):_.eq(s),f.transitionEnd(()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const o=["webkitTransitionEnd","transitionend"];for(let t=0;t<o.length;t+=1)d.trigger(o[t])})}}function fs(l){let{swiper:e,extendParams:v,on:m}=l;v({fadeEffect:{crossFade:!1,transformEl:null}}),we({effect:"fade",swiper:e,on:m,setTranslate:()=>{const{slides:s}=e,d=e.params.fadeEffect;for(let p=0;p<s.length;p+=1){const f=e.slides.eq(p);let t=-f[0].swiperSlideOffset;e.params.virtualTranslate||(t-=e.translate);let n=0;e.isHorizontal()||(n=t,t=0);const c=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(f[0].progress),0):1+Math.min(Math.max(f[0].progress,-1),0);Se(d,f).css({opacity:c}).transform(`translate3d(${t}px, ${n}px, 0px)`)}},setTransition:s=>{const{transformEl:d}=e.params.fadeEffect;(d?e.slides.find(d):e.slides).transition(s),Ie({swiper:e,duration:s,transformEl:d,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ws(l){let{swiper:e,extendParams:v,on:m}=l;v({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const S=(p,f,o)=>{let t=o?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top"),n=o?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");t.length===0&&(t=F(`<div class="swiper-slide-shadow-${o?"left":"top"}"></div>`),p.append(t)),n.length===0&&(n=F(`<div class="swiper-slide-shadow-${o?"right":"bottom"}"></div>`),p.append(n)),t.length&&(t[0].style.opacity=Math.max(-f,0)),n.length&&(n[0].style.opacity=Math.max(f,0))};we({effect:"cube",swiper:e,on:m,setTranslate:()=>{const{$el:p,$wrapperEl:f,slides:o,width:t,height:n,rtlTranslate:c,size:u,browser:y}=e,w=e.params.cubeEffect,g=e.isHorizontal(),k=e.virtual&&e.params.virtual.enabled;let b=0,C;w.shadow&&(g?(C=f.find(".swiper-cube-shadow"),C.length===0&&(C=F('<div class="swiper-cube-shadow"></div>'),f.append(C)),C.css({height:`${t}px`})):(C=p.find(".swiper-cube-shadow"),C.length===0&&(C=F('<div class="swiper-cube-shadow"></div>'),p.append(C))));for(let I=0;I<o.length;I+=1){const R=o.eq(I);let j=I;k&&(j=parseInt(R.attr("data-swiper-slide-index"),10));let D=j*90,K=Math.floor(D/360);c&&(D=-D,K=Math.floor(-D/360));const W=Math.max(Math.min(R[0].progress,1),-1);let E=0,O=0,T=0;j%4===0?(E=-K*4*u,T=0):(j-1)%4===0?(E=0,T=-K*4*u):(j-2)%4===0?(E=u+K*4*u,T=u):(j-3)%4===0&&(E=-u,T=3*u+u*4*K),c&&(E=-E),g||(O=E,E=0);const B=`rotateX(${g?0:-D}deg) rotateY(${g?D:0}deg) translate3d(${E}px, ${O}px, ${T}px)`;W<=1&&W>-1&&(b=j*90+W*90,c&&(b=-j*90-W*90)),R.transform(B),w.slideShadows&&S(R,W,g)}if(f.css({"-webkit-transform-origin":`50% 50% -${u/2}px`,"transform-origin":`50% 50% -${u/2}px`}),w.shadow)if(g)C.transform(`translate3d(0px, ${t/2+w.shadowOffset}px, ${-t/2}px) rotateX(90deg) rotateZ(0deg) scale(${w.shadowScale})`);else{const I=Math.abs(b)-Math.floor(Math.abs(b)/90)*90,R=1.5-(Math.sin(I*2*Math.PI/360)/2+Math.cos(I*2*Math.PI/360)/2),j=w.shadowScale,D=w.shadowScale/R,K=w.shadowOffset;C.transform(`scale3d(${j}, 1, ${D}) translate3d(0px, ${n/2+K}px, ${-n/2/D}px) rotateX(-90deg)`)}const V=y.isSafari||y.isWebView?-u/2:0;f.transform(`translate3d(0px,0,${V}px) rotateX(${e.isHorizontal()?0:b}deg) rotateY(${e.isHorizontal()?-b:0}deg)`),f[0].style.setProperty("--swiper-cube-translate-z",`${V}px`)},setTransition:p=>{const{$el:f,slides:o}=e;o.transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p),e.params.cubeEffect.shadow&&!e.isHorizontal()&&f.find(".swiper-cube-shadow").transition(p)},recreateShadows:()=>{const p=e.isHorizontal();e.slides.each(f=>{const o=Math.max(Math.min(f.progress,1),-1);S(F(f),o,p)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function fe(l,e,v){const m=`swiper-slide-shadow${v?`-${v}`:""}`,S=l.transformEl?e.find(l.transformEl):e;let _=S.children(`.${m}`);return _.length||(_=F(`<div class="swiper-slide-shadow${v?`-${v}`:""}"></div>`),S.append(_)),_}function hs(l){let{swiper:e,extendParams:v,on:m}=l;v({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const S=(p,f,o)=>{let t=e.isHorizontal()?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top"),n=e.isHorizontal()?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");t.length===0&&(t=fe(o,p,e.isHorizontal()?"left":"top")),n.length===0&&(n=fe(o,p,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-f,0)),n.length&&(n[0].style.opacity=Math.max(f,0))};we({effect:"flip",swiper:e,on:m,setTranslate:()=>{const{slides:p,rtlTranslate:f}=e,o=e.params.flipEffect;for(let t=0;t<p.length;t+=1){const n=p.eq(t);let c=n[0].progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(n[0].progress,1),-1));const u=n[0].swiperSlideOffset;let w=-180*c,g=0,k=e.params.cssMode?-u-e.translate:-u,b=0;e.isHorizontal()?f&&(w=-w):(b=k,k=0,g=-w,w=0),n[0].style.zIndex=-Math.abs(Math.round(c))+p.length,o.slideShadows&&S(n,c,o);const C=`translate3d(${k}px, ${b}px, 0px) rotateX(${g}deg) rotateY(${w}deg)`;Se(o,n).transform(C)}},setTransition:p=>{const{transformEl:f}=e.params.flipEffect;(f?e.slides.find(f):e.slides).transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p),Ie({swiper:e,duration:p,transformEl:f})},recreateShadows:()=>{const p=e.params.flipEffect;e.slides.each(f=>{const o=F(f);let t=o[0].progress;e.params.flipEffect.limitRotation&&(t=Math.max(Math.min(f.progress,1),-1)),S(o,t,p)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function _s(l){let{swiper:e,extendParams:v,on:m}=l;v({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),we({effect:"coverflow",swiper:e,on:m,setTranslate:()=>{const{width:s,height:d,slides:p,slidesSizesGrid:f}=e,o=e.params.coverflowEffect,t=e.isHorizontal(),n=e.translate,c=t?-n+s/2:-n+d/2,u=t?o.rotate:-o.rotate,y=o.depth;for(let w=0,g=p.length;w<g;w+=1){const k=p.eq(w),b=f[w],C=k[0].swiperSlideOffset,V=(c-C-b/2)/b,I=typeof o.modifier=="function"?o.modifier(V):V*o.modifier;let R=t?u*I:0,j=t?0:u*I,D=-y*Math.abs(I),K=o.stretch;typeof K=="string"&&K.indexOf("%")!==-1&&(K=parseFloat(o.stretch)/100*b);let W=t?0:K*I,E=t?K*I:0,O=1-(1-o.scale)*Math.abs(I);Math.abs(E)<.001&&(E=0),Math.abs(W)<.001&&(W=0),Math.abs(D)<.001&&(D=0),Math.abs(R)<.001&&(R=0),Math.abs(j)<.001&&(j=0),Math.abs(O)<.001&&(O=0);const T=`translate3d(${E}px,${W}px,${D}px)  rotateX(${j}deg) rotateY(${R}deg) scale(${O})`;if(Se(o,k).transform(T),k[0].style.zIndex=-Math.abs(Math.round(I))+1,o.slideShadows){let Y=t?k.find(".swiper-slide-shadow-left"):k.find(".swiper-slide-shadow-top"),h=t?k.find(".swiper-slide-shadow-right"):k.find(".swiper-slide-shadow-bottom");Y.length===0&&(Y=fe(o,k,t?"left":"top")),h.length===0&&(h=fe(o,k,t?"right":"bottom")),Y.length&&(Y[0].style.opacity=I>0?I:0),h.length&&(h[0].style.opacity=-I>0?-I:0)}}},setTransition:s=>{const{transformEl:d}=e.params.coverflowEffect;(d?e.slides.find(d):e.slides).transition(s).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(s)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function gs(l){let{swiper:e,extendParams:v,on:m}=l;v({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const S=d=>typeof d=="string"?d:`${d}px`;we({effect:"creative",swiper:e,on:m,setTranslate:()=>{const{slides:d,$wrapperEl:p,slidesSizesGrid:f}=e,o=e.params.creativeEffect,{progressMultiplier:t}=o,n=e.params.centeredSlides;if(n){const c=f[0]/2-e.params.slidesOffsetBefore||0;p.transform(`translateX(calc(50% - ${c}px))`)}for(let c=0;c<d.length;c+=1){const u=d.eq(c),y=u[0].progress,w=Math.min(Math.max(u[0].progress,-o.limitProgress),o.limitProgress);let g=w;n||(g=Math.min(Math.max(u[0].originalProgress,-o.limitProgress),o.limitProgress));const k=u[0].swiperSlideOffset,b=[e.params.cssMode?-k-e.translate:-k,0,0],C=[0,0,0];let V=!1;e.isHorizontal()||(b[1]=b[0],b[0]=0);let I={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};w<0?(I=o.next,V=!0):w>0&&(I=o.prev,V=!0),b.forEach((O,T)=>{b[T]=`calc(${O}px + (${S(I.translate[T])} * ${Math.abs(w*t)}))`}),C.forEach((O,T)=>{C[T]=I.rotate[T]*Math.abs(w*t)}),u[0].style.zIndex=-Math.abs(Math.round(y))+d.length;const R=b.join(", "),j=`rotateX(${C[0]}deg) rotateY(${C[1]}deg) rotateZ(${C[2]}deg)`,D=g<0?`scale(${1+(1-I.scale)*g*t})`:`scale(${1-(1-I.scale)*g*t})`,K=g<0?1+(1-I.opacity)*g*t:1-(1-I.opacity)*g*t,W=`translate3d(${R}) ${j} ${D}`;if(V&&I.shadow||!V){let O=u.children(".swiper-slide-shadow");if(O.length===0&&I.shadow&&(O=fe(o,u)),O.length){const T=o.shadowPerProgress?w*(1/o.limitProgress):w;O[0].style.opacity=Math.min(Math.max(Math.abs(T),0),1)}}const E=Se(o,u);E.transform(W).css({opacity:K}),I.origin&&E.css("transform-origin",I.origin)}},setTransition:d=>{const{transformEl:p}=e.params.creativeEffect;(p?e.slides.find(p):e.slides).transition(d).find(".swiper-slide-shadow").transition(d),Ie({swiper:e,duration:d,transformEl:p,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const vs=N({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue",components:{Swiper:L,SwiperSlide:H},setup(){const l=t=>{console.log("SwiperComponentReady!",t)},e=t=>{console.log("handleHSwiperSlideChange!",t.realIndex)},v=Pe(new Map),m=t=>v.get(t),S=t=>{v.set(t,!0),console.log("Click slide! target slide id:",t)};let _=null;const s=t=>{_=t},d=me();return{modules:[Xe,q,Q,Me],handleHSwiperReady:l,handleHSwiperSlideChange:e,handleHwiperSlideClick:S,isSlideClicked:m,setVSwiperRef:s,vSwiperIndex:d,updateVSwiperIndex:()=>{d.value=_==null?void 0:_.activeIndex},prevVSwiperSlide:()=>_==null?void 0:_.slidePrev(),nextVSwiperSlide:()=>_==null?void 0:_.slideNext()}}}),ne=l=>(oe("data-v-5ca3bcb8"),l=l(),de(),l),bs={class:"advance-example"},Ss=ne(()=>$("span",null,"Loop Slide 1",-1)),ys=ne(()=>$("span",null,"Loop Slide 3",-1)),$s=ne(()=>$("span",null,"Loop Slide 4",-1)),xs=ne(()=>$("span",null,"Loop Slide 5",-1)),ks=ne(()=>$("span",null,"Loop Slide 6",-1)),Cs=a("swiperjs.com"),Es=ne(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),Ps=a(" discussions "),zs=ne(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),Ms=a("Slide 3"),Ts=a("Slide 4"),Is=a("Slide 5"),js=a("Slide 6"),Os=["disabled"],Ns=ne(()=>$("i",{class:"iconfont icon-arrow-down"},null,-1)),As=[Ns],Vs=["disabled"],Rs=ne(()=>$("i",{class:"iconfont icon-arrow-up"},null,-1)),Ls=[Rs];function Hs(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper"),p=x("ulink");return M(),J("div",bs,[i(d,{class:"horizontal-swiper",modules:l.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:l.handleHSwiperReady,onSlideChange:l.handleHSwiperSlideChange},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Ss]),_:1}),i(s,{class:"slide"},{default:r(f=>[$("pre",null,le(f),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[ys,$("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=qe(f=>l.handleHwiperSlideClick(3),["prevent"]))},le(l.isSlideClicked(3)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[$s,$("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=f=>l.handleHwiperSlideClick(4))},le(l.isSlideClicked(4)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[xs,$("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=f=>l.handleHwiperSlideClick(5))},le(l.isSlideClicked(5)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),i(s,{class:"slide"},{default:r(()=>[ks,$("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=f=>l.handleHwiperSlideClick(6))},le(l.isSlideClicked(6)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),i(d,{class:"vertical-swiper",modules:l.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:l.setVSwiperRef,onSlideChange:l.updateVSwiperIndex},{"container-start":r(()=>[$("button",{class:"nav-button-prev",disabled:l.vSwiperIndex===0,onClick:e[4]||(e[4]=(...f)=>l.prevVSwiperSlide&&l.prevVSwiperSlide(...f))},As,8,Os)]),"container-end":r(()=>[$("button",{class:"nav-button-next",disabled:l.vSwiperIndex===5-1,onClick:e[5]||(e[5]=(...f)=>l.nextVSwiperSlide&&l.nextVSwiperSlide(...f))},Ls,8,Vs)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[i(p,{class:"link",href:"https://swiperjs.com/"},{default:r(()=>[Cs]),_:1}),Es]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(p,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:r(()=>[Ps]),_:1}),zs]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ms]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ts]),_:1}),i(s,{class:"slide"},{default:r(()=>[Is]),_:1}),i(s,{class:"slide"},{default:r(()=>[js]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}var Ds=A(vs,[["render",Hs],["__scopeId","data-v-5ca3bcb8"]]),Ws=Object.freeze(Object.defineProperty({__proto__:null,default:Ds},Symbol.toStringTag,{value:"Module"}));const Ys=N({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue",components:{Swiper:L,SwiperSlide:H}}),Xs=a("Slide 1"),qs=a("Slide 2"),Bs=a("Slide 3"),Gs=a("Slide 4"),Fs=a("Slide 5"),Us=a("Slide 6"),Ks=a("Slide 7"),Zs=a("Slide 8");function Js(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Xs]),_:1}),i(s,{class:"slide"},{default:r(()=>[qs]),_:1}),i(s,{class:"slide"},{default:r(()=>[Bs]),_:1}),i(s,{class:"slide"},{default:r(()=>[Gs]),_:1}),i(s,{class:"slide"},{default:r(()=>[Fs]),_:1}),i(s,{class:"slide"},{default:r(()=>[Us]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ks]),_:1}),i(s,{class:"slide"},{default:r(()=>[Zs]),_:1})]),_:1})}var Qs=A(Ys,[["render",Js],["__scopeId","data-v-2d564e9b"]]),er=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"}));const sr=N({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[Q]}}}),rr=a("Slide 1"),ir=a("Slide 2"),nr=a("Slide 3"),tr=a("Slide 4"),lr=a("Slide 5"),ar=a("Slide 6"),or=a("Slide 7"),dr=a("Slide 8");function pr(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,navigation:""},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[rr]),_:1}),i(s,{class:"slide"},{default:r(()=>[ir]),_:1}),i(s,{class:"slide"},{default:r(()=>[nr]),_:1}),i(s,{class:"slide"},{default:r(()=>[tr]),_:1}),i(s,{class:"slide"},{default:r(()=>[lr]),_:1}),i(s,{class:"slide"},{default:r(()=>[ar]),_:1}),i(s,{class:"slide"},{default:r(()=>[or]),_:1}),i(s,{class:"slide"},{default:r(()=>[dr]),_:1})]),_:1},8,["modules"])}var cr=A(sr,[["render",pr],["__scopeId","data-v-f4d71ee2"]]),ur=Object.freeze(Object.defineProperty({__proto__:null,default:cr},Symbol.toStringTag,{value:"Module"}));const mr=N({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),fr=a("Slide 1"),wr=a("Slide 2"),hr=a("Slide 3"),_r=a("Slide 4"),gr=a("Slide 5"),vr=a("Slide 6"),br=a("Slide 7"),Sr=a("Slide 8");function yr(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[fr]),_:1}),i(s,{class:"slide"},{default:r(()=>[wr]),_:1}),i(s,{class:"slide"},{default:r(()=>[hr]),_:1}),i(s,{class:"slide"},{default:r(()=>[_r]),_:1}),i(s,{class:"slide"},{default:r(()=>[gr]),_:1}),i(s,{class:"slide"},{default:r(()=>[vr]),_:1}),i(s,{class:"slide"},{default:r(()=>[br]),_:1}),i(s,{class:"slide"},{default:r(()=>[Sr]),_:1})]),_:1},8,["modules"])}var $r=A(mr,[["render",yr],["__scopeId","data-v-3d9f8f1b"]]),xr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"}));const kr=N({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),Cr=a("Slide 1"),Er=a("Slide 2"),Pr=a("Slide 3"),zr=a("Slide 4"),Mr=a("Slide 5"),Tr=a("Slide 6"),Ir=a("Slide 7"),jr=a("Slide 8");function Or(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Cr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Er]),_:1}),i(s,{class:"slide"},{default:r(()=>[Pr]),_:1}),i(s,{class:"slide"},{default:r(()=>[zr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Mr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Tr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ir]),_:1}),i(s,{class:"slide"},{default:r(()=>[jr]),_:1})]),_:1},8,["modules"])}var Nr=A(kr,[["render",Or],["__scopeId","data-v-45a86f5b"]]),Ar=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"}));const Vr=N({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),Rr=a("Slide 1"),Lr=a("Slide 2"),Hr=a("Slide 3"),Dr=a("Slide 4"),Wr=a("Slide 5"),Yr=a("Slide 6"),Xr=a("Slide 7"),qr=a("Slide 8");function Br(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,pagination:{type:"progressbar"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Rr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Lr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Hr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Dr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Wr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Yr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Xr]),_:1}),i(s,{class:"slide"},{default:r(()=>[qr]),_:1})]),_:1},8,["modules"])}var Gr=A(Vr,[["render",Br],["__scopeId","data-v-42e50b2c"]]),Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Gr},Symbol.toStringTag,{value:"Module"}));const Ur=N({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),Kr=a("Slide 1"),Zr=a("Slide 2"),Jr=a("Slide 3"),Qr=a("Slide 4"),ei=a("Slide 5"),si=a("Slide 6"),ri=a("Slide 7"),ii=a("Slide 8");function ni(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,pagination:{type:"fraction"}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Kr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Zr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Jr]),_:1}),i(s,{class:"slide"},{default:r(()=>[Qr]),_:1}),i(s,{class:"slide"},{default:r(()=>[ei]),_:1}),i(s,{class:"slide"},{default:r(()=>[si]),_:1}),i(s,{class:"slide"},{default:r(()=>[ri]),_:1}),i(s,{class:"slide"},{default:r(()=>[ii]),_:1})]),_:1},8,["modules"])}var ti=A(Ur,[["render",ni],["__scopeId","data-v-d2f7cb18"]]),li=Object.freeze(Object.defineProperty({__proto__:null,default:ti},Symbol.toStringTag,{value:"Module"}));const ai=N({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{bulletRenderer:(e,v)=>`<span class="${`${v} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[q]}}}),oi=a("Slide 1"),di=a("Slide 2"),pi=a("Slide 3"),ci=a("Slide 4"),ui=a("Slide 5"),mi=a("Slide 6"),fi=a("Slide 7"),wi=a("Slide 8");function hi(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,pagination:{clickable:!0,renderBullet:l.bulletRenderer}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[oi]),_:1}),i(s,{class:"slide"},{default:r(()=>[di]),_:1}),i(s,{class:"slide"},{default:r(()=>[pi]),_:1}),i(s,{class:"slide"},{default:r(()=>[ci]),_:1}),i(s,{class:"slide"},{default:r(()=>[ui]),_:1}),i(s,{class:"slide"},{default:r(()=>[mi]),_:1}),i(s,{class:"slide"},{default:r(()=>[fi]),_:1}),i(s,{class:"slide"},{default:r(()=>[wi]),_:1})]),_:1},8,["modules","pagination"])}var _i=A(ai,[["render",hi],["__scopeId","data-v-4f5b0a94"]]),gi=Object.freeze(Object.defineProperty({__proto__:null,default:_i},Symbol.toStringTag,{value:"Module"}));const vi=N({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[Te]}}}),bi=a("Slide 1"),Si=a("Slide 2"),yi=a("Slide 3"),$i=a("Slide 4"),xi=a("Slide 5"),ki=a("Slide 6"),Ci=a("Slide 7"),Ei=a("Slide 8");function Pi(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,scrollbar:{hide:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[bi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Si]),_:1}),i(s,{class:"slide"},{default:r(()=>[yi]),_:1}),i(s,{class:"slide"},{default:r(()=>[$i]),_:1}),i(s,{class:"slide"},{default:r(()=>[xi]),_:1}),i(s,{class:"slide"},{default:r(()=>[ki]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ci]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ei]),_:1})]),_:1},8,["modules"])}var zi=A(vi,[["render",Pi],["__scopeId","data-v-74bd5600"]]),Mi=Object.freeze(Object.defineProperty({__proto__:null,default:zi},Symbol.toStringTag,{value:"Module"}));const Ti=N({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),Ii=a("Slide 1"),ji=a("Slide 2"),Oi=a("Slide 3"),Ni=a("Slide 4"),Ai=a("Slide 5"),Vi=a("Slide 6"),Ri=a("Slide 7"),Li=a("Slide 8");function Hi(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,direction:"vertical",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Ii]),_:1}),i(s,{class:"slide"},{default:r(()=>[ji]),_:1}),i(s,{class:"slide"},{default:r(()=>[Oi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ni]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ai]),_:1}),i(s,{class:"slide"},{default:r(()=>[Vi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ri]),_:1}),i(s,{class:"slide"},{default:r(()=>[Li]),_:1})]),_:1},8,["modules"])}var Di=A(Ti,[["render",Hi],["__scopeId","data-v-00c392d4"]]),Wi=Object.freeze(Object.defineProperty({__proto__:null,default:Di},Symbol.toStringTag,{value:"Module"}));const Yi=N({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),Xi=a("Slide 1"),qi=a("Slide 2"),Bi=a("Slide 3"),Gi=a("Slide 4"),Fi=a("Slide 5"),Ui=a("Slide 6"),Ki=a("Slide 7"),Zi=a("Slide 8");function Ji(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Xi]),_:1}),i(s,{class:"slide"},{default:r(()=>[qi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Bi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Gi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Fi]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ui]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ki]),_:1}),i(s,{class:"slide"},{default:r(()=>[Zi]),_:1})]),_:1},8,["modules"])}var Qi=A(Yi,[["render",Ji],["__scopeId","data-v-047ec236"]]),en=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"}));const sn=N({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),rn=a("Slide 1"),nn=a("Slide 2"),tn=a("Slide 3"),ln=a("Slide 4"),an=a("Slide 5"),on=a("Slide 6"),dn=a("Slide 7"),pn=a("Slide 8");function cn(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[rn]),_:1}),i(s,{class:"slide"},{default:r(()=>[nn]),_:1}),i(s,{class:"slide"},{default:r(()=>[tn]),_:1}),i(s,{class:"slide"},{default:r(()=>[ln]),_:1}),i(s,{class:"slide"},{default:r(()=>[an]),_:1}),i(s,{class:"slide"},{default:r(()=>[on]),_:1}),i(s,{class:"slide"},{default:r(()=>[dn]),_:1}),i(s,{class:"slide"},{default:r(()=>[pn]),_:1})]),_:1},8,["modules"])}var un=A(sn,[["render",cn],["__scopeId","data-v-fbdc3610"]]),mn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"}));const fn=N({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),wn=a("Slide 1"),hn=a("Slide 2"),_n=a("Slide 3"),gn=a("Slide 4"),vn=a("Slide 5"),bn=a("Slide 6"),Sn=a("Slide 7"),yn=a("Slide 8");function $n(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[wn]),_:1}),i(s,{class:"slide"},{default:r(()=>[hn]),_:1}),i(s,{class:"slide"},{default:r(()=>[_n]),_:1}),i(s,{class:"slide"},{default:r(()=>[gn]),_:1}),i(s,{class:"slide"},{default:r(()=>[vn]),_:1}),i(s,{class:"slide"},{default:r(()=>[bn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Sn]),_:1}),i(s,{class:"slide"},{default:r(()=>[yn]),_:1})]),_:1},8,["modules"])}var xn=A(fn,[["render",$n],["__scopeId","data-v-0a7f2334"]]),kn=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"}));const Cn=N({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),En=a("Slide 1"),Pn=a("Slide 2"),zn=a("Slide 3"),Mn=a("Slide 4"),Tn=a("Slide 5"),In=a("Slide 6"),jn=a("Slide 7"),On=a("Slide 8");function Nn(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[En]),_:1}),i(s,{class:"slide"},{default:r(()=>[Pn]),_:1}),i(s,{class:"slide"},{default:r(()=>[zn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Mn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Tn]),_:1}),i(s,{class:"slide"},{default:r(()=>[In]),_:1}),i(s,{class:"slide"},{default:r(()=>[jn]),_:1}),i(s,{class:"slide"},{default:r(()=>[On]),_:1})]),_:1},8,["modules"])}var An=A(Cn,[["render",Nn],["__scopeId","data-v-42d07bd0"]]),Vn=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"}));const Rn=N({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),Ln=a("Slide 1"),Hn=a("Slide 2"),Dn=a("Slide 3"),Wn=a("Slide 4"),Yn=a("Slide 5"),Xn=a("Slide 6"),qn=a("Slide 7"),Bn=a("Slide 8");function Gn(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Ln]),_:1}),i(s,{class:"slide"},{default:r(()=>[Hn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Dn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Wn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Yn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Xn]),_:1}),i(s,{class:"slide"},{default:r(()=>[qn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Bn]),_:1})]),_:1},8,["modules"])}var Fn=A(Rn,[["render",Gn],["__scopeId","data-v-2ed88a62"]]),Un=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"}));const Kn=N({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Ye]}}}),Zn=a("Slide 1"),Jn=a("Slide 2"),Qn=a("Slide 3"),et=a("Slide 4"),st=a("Slide 5"),rt=a("Slide 6"),it=a("Slide 7"),nt=a("Slide 8");function tt(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Zn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Jn]),_:1}),i(s,{class:"slide"},{default:r(()=>[Qn]),_:1}),i(s,{class:"slide"},{default:r(()=>[et]),_:1}),i(s,{class:"slide"},{default:r(()=>[st]),_:1}),i(s,{class:"slide"},{default:r(()=>[rt]),_:1}),i(s,{class:"slide"},{default:r(()=>[it]),_:1}),i(s,{class:"slide"},{default:r(()=>[nt]),_:1})]),_:1},8,["modules"])}var lt=A(Kn,[["render",tt],["__scopeId","data-v-7d7432d2"]]),at=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));const ot=N({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Ye,Te,Me]}}}),U=l=>(oe("data-v-7727eb4e"),l=l(),de(),l),dt=U(()=>$("h2",null,"I Have a Dream",-1)),pt=U(()=>$("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),ct=U(()=>$("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),ut=U(()=>$("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),mt=U(()=>$("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),ft=U(()=>$("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check \u2014 a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),wt=U(()=>$("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),ht=U(()=>$("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),_t=U(()=>$("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),gt=U(()=>$("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),vt=U(()=>$("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),bt=U(()=>$("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),St=U(()=>$("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),yt=U(()=>$("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),$t=U(()=>$("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),xt=U(()=>$("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),kt=U(()=>$("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),Ct=U(()=>$("p",null,"I have a dream today.",-1)),Et=U(()=>$("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),Pt=U(()=>$("p",null,"I have a dream today.",-1)),zt=U(()=>$("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),Mt=U(()=>$("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),Tt=U(()=>$("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),It=U(()=>$("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),jt=U(()=>$("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),Ot=U(()=>$("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),Nt=U(()=>$("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),At=U(()=>$("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),Vt=U(()=>$("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),Rt=U(()=>$("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function Lt(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[dt,pt,ct,ut,mt,ft,wt,ht,_t,gt,vt,bt,St,yt,$t,xt,kt,Ct,Et,Pt,zt,Mt,Tt,It,jt,Ot,Nt,At,Vt,Rt]),_:1})]),_:1},8,["modules"])}var Ht=A(ot,[["render",Lt],["__scopeId","data-v-7727eb4e"]]),Dt=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"}));const Wt=N({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Xe]}}}),Yt=a("Slide 1"),Xt=a("Slide 2"),qt=a("Slide 3"),Bt=a("Slide 4"),Gt=a("Slide 5"),Ft=a("Slide 6"),Ut=a("Slide 7"),Kt=a("Slide 8"),Zt=a("Slide 9"),Jt=a("Slide 10");function Qt(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Yt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Xt]),_:1}),i(s,{class:"slide"},{default:r(()=>[qt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Bt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Gt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ft]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ut]),_:1}),i(s,{class:"slide"},{default:r(()=>[Kt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Zt]),_:1}),i(s,{class:"slide"},{default:r(()=>[Jt]),_:1})]),_:1},8,["modules"])}var el=A(Wt,[["render",Qt],["__scopeId","data-v-e0e2afd2"]]),sl=Object.freeze(Object.defineProperty({__proto__:null,default:el},Symbol.toStringTag,{value:"Module"}));const rl=N({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),il=a("Horizontal Slide 1"),nl=a("Vertical Slide 1"),tl=a("Vertical Slide 2"),ll=a("Vertical Slide 3"),al=a("Vertical Slide 4"),ol=a("Vertical Slide 5"),dl=a("Horizontal Slide 3"),pl=a("Horizontal Slide 4");function cl(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper swiper-h",modules:l.modules,"space-between":50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[il]),_:1}),i(s,{class:"slide"},{default:r(()=>[i(d,{class:"swiper-v",modules:l.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[nl]),_:1}),i(s,{class:"slide"},{default:r(()=>[tl]),_:1}),i(s,{class:"slide"},{default:r(()=>[ll]),_:1}),i(s,{class:"slide"},{default:r(()=>[al]),_:1}),i(s,{class:"slide"},{default:r(()=>[ol]),_:1})]),_:1},8,["modules"])]),_:1}),i(s,{class:"slide"},{default:r(()=>[dl]),_:1}),i(s,{class:"slide"},{default:r(()=>[pl]),_:1})]),_:1},8,["modules"])}var ul=A(rl,[["render",cl],["__scopeId","data-v-11d1afb5"]]),ml=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"}));const fl=N({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),wl=a("Slide 1"),hl=a("Slide 2"),_l=a("Slide 3"),gl=a("Slide 4"),vl=a("Slide 5"),bl=a("Slide 6"),Sl=a("Slide 7"),yl=a("Slide 8");function $l(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[wl]),_:1}),i(s,{class:"slide"},{default:r(()=>[hl]),_:1}),i(s,{class:"slide"},{default:r(()=>[_l]),_:1}),i(s,{class:"slide"},{default:r(()=>[gl]),_:1}),i(s,{class:"slide"},{default:r(()=>[vl]),_:1}),i(s,{class:"slide"},{default:r(()=>[bl]),_:1}),i(s,{class:"slide"},{default:r(()=>[Sl]),_:1}),i(s,{class:"slide"},{default:r(()=>[yl]),_:1})]),_:1},8,["modules"])}var xl=A(fl,[["render",$l],["__scopeId","data-v-2fe16efa"]]),kl=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"}));const Cl=N({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q]}}}),El=a("Slide 1"),Pl=a("Slide 2"),zl=a("Slide 3"),Ml=a("Slide 4"),Tl=a("Slide 5"),Il=a("Slide 6"),jl=a("Slide 7"),Ol=a("Slide 8");function Nl(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,null,{default:r(()=>[El]),_:1}),i(s,null,{default:r(()=>[Pl]),_:1}),i(s,null,{default:r(()=>[zl]),_:1}),i(s,null,{default:r(()=>[Ml]),_:1}),i(s,null,{default:r(()=>[Tl]),_:1}),i(s,null,{default:r(()=>[Il]),_:1}),i(s,null,{default:r(()=>[jl]),_:1}),i(s,null,{default:r(()=>[Ol]),_:1})]),_:1},8,["modules"])}var Al=A(Cl,[["render",Nl],["__scopeId","data-v-d17316b8"]]),Vl=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"}));const Rl=N({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q]}}}),Ll=a("Slide 1"),Hl=a("Slide 2"),Dl=a("Slide 3"),Wl=a("Slide 4"),Yl=a("Slide 5"),Xl=a("Slide 6"),ql=a("Slide 7"),Bl=a("Slide 8");function Gl(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,null,{default:r(()=>[Ll]),_:1}),i(s,null,{default:r(()=>[Hl]),_:1}),i(s,null,{default:r(()=>[Dl]),_:1}),i(s,null,{default:r(()=>[Wl]),_:1}),i(s,null,{default:r(()=>[Yl]),_:1}),i(s,null,{default:r(()=>[Xl]),_:1}),i(s,null,{default:r(()=>[ql]),_:1}),i(s,null,{default:r(()=>[Bl]),_:1})]),_:1},8,["modules"])}var Fl=A(Rl,[["render",Gl],["__scopeId","data-v-27ac816a"]]),Ul=Object.freeze(Object.defineProperty({__proto__:null,default:Fl},Symbol.toStringTag,{value:"Module"}));const Kl=N({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[We,Te,Q,q]}}}),Zl=a("Slide 1"),Jl=a("Slide 2"),Ql=a("Slide 3"),ea=a("Slide 4"),sa=a("Slide 5"),ra=a("Slide 6"),ia=a("Slide 7");function na(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Zl]),_:1}),i(s,{class:"slide"},{default:r(()=>[Jl]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ql]),_:1}),i(s,{class:"slide"},{default:r(()=>[ea]),_:1}),i(s,{class:"slide"},{default:r(()=>[sa]),_:1}),i(s,{class:"slide"},{default:r(()=>[ra]),_:1}),i(s,{class:"slide"},{default:r(()=>[ia]),_:1})]),_:1},8,["modules"])}var ta=A(Kl,[["render",na],["__scopeId","data-v-c61be192"]]),la=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"}));const aa=N({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q,fs]}}}),oa=["src"];function da(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(M(),J(ee,null,re(5,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,oa)]),_:2},1024)),64))]),_:1},8,["modules"])}var pa=A(aa,[["render",da],["__scopeId","data-v-46fcf722"]]),ca=Object.freeze(Object.defineProperty({__proto__:null,default:pa},Symbol.toStringTag,{value:"Module"}));const ua=N({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,_s]}}}),ma={class:"coverflow-example"},fa=["src"];function wa(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J("div",ma,[i(d,{class:"swiper",modules:l.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:r(()=>[(M(),J(ee,null,re(8,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,fa)]),_:2},1024)),64))]),_:1},8,["modules"])])}var ha=A(ua,[["render",wa],["__scopeId","data-v-d2f7e430"]]),_a=Object.freeze(Object.defineProperty({__proto__:null,default:ha},Symbol.toStringTag,{value:"Module"}));const ga=N({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,ws]}}}),va={class:"cube-example"},ba=["src"];function Sa(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J("div",va,[i(d,{class:"swiper",modules:l.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:r(()=>[(M(),J(ee,null,re(5,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,ba)]),_:2},1024)),64))]),_:1},8,["modules","cube-effect"])])}var ya=A(ga,[["render",Sa],["__scopeId","data-v-563f7ae5"]]),$a=Object.freeze(Object.defineProperty({__proto__:null,default:ya},Symbol.toStringTag,{value:"Module"}));const xa=N({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q,hs]}}}),ka={class:"flip-example"},Ca=["src"];function Ea(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J("div",ka,[i(d,{class:"swiper",modules:l.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:r(()=>[(M(),J(ee,null,re(6,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,Ca)]),_:2},1024)),64))]),_:1},8,["modules"])])}var Pa=A(xa,[["render",Ea],["__scopeId","data-v-2c7827a1"]]),za=Object.freeze(Object.defineProperty({__proto__:null,default:Pa},Symbol.toStringTag,{value:"Module"}));const Ma=N({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue",components:{Swiper:L,SwiperSlide:H},setup(){const l=me(!0),e=me(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:l,setEffect:S=>{e.value=S,Ve(()=>{l.value=!1,Ve(()=>{l.value=!0})})},modules:[q,gs]}}}),Ta={class:"creative-example"},Ia={class:"toolbar"},ja=["onClick"],Oa=["src"];function Na(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J("div",Ta,[$("div",Ia,[(M(!0),J(ee,null,re(l.effects,(p,f)=>(M(),J("button",{key:f,onClick:o=>l.setEffect(f)}," Effect "+le(f),9,ja))),128))]),l.render?(M(),X(d,{key:0,class:"swiper",modules:l.modules,effect:"creative","creative-effect":l.effects[l.effectIndex],"grab-cursor":!0,pagination:!0},{default:r(()=>[(M(),J(ee,null,re(6,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,Oa)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):Be("",!0)])}var Aa=A(Ma,[["render",Na],["__scopeId","data-v-2260cdc6"]]),Va=Object.freeze(Object.defineProperty({__proto__:null,default:Aa},Symbol.toStringTag,{value:"Module"}));const Ra=N({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q,We]}}}),La=a("Slide 1"),Ha=a("Slide 2"),Da=a("Slide 3"),Wa=a("Slide 4"),Ya=a("Slide 5"),Xa=a("Slide 6"),qa=a("Slide 7"),Ba=a("Slide 8");function Ga(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[La]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ha]),_:1}),i(s,{class:"slide"},{default:r(()=>[Da]),_:1}),i(s,{class:"slide"},{default:r(()=>[Wa]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ya]),_:1}),i(s,{class:"slide"},{default:r(()=>[Xa]),_:1}),i(s,{class:"slide"},{default:r(()=>[qa]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ba]),_:1})]),_:1},8,["modules"])}var Fa=A(Ra,[["render",Ga],["__scopeId","data-v-a035dc6c"]]),Ua=Object.freeze(Object.defineProperty({__proto__:null,default:Fa},Symbol.toStringTag,{value:"Module"}));const Ka=N({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Me]}}}),Za=a("Slide 1"),Ja=a("Slide 2"),Qa=a("Slide 3"),eo=a("Slide 4"),so=a("Slide 5"),ro=a("Slide 6"),io=a("Slide 7"),no=a("Slide 8");function to(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Za]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ja]),_:1}),i(s,{class:"slide"},{default:r(()=>[Qa]),_:1}),i(s,{class:"slide"},{default:r(()=>[eo]),_:1}),i(s,{class:"slide"},{default:r(()=>[so]),_:1}),i(s,{class:"slide"},{default:r(()=>[ro]),_:1}),i(s,{class:"slide"},{default:r(()=>[io]),_:1}),i(s,{class:"slide"},{default:r(()=>[no]),_:1})]),_:1},8,["modules"])}var lo=A(Ka,[["render",to],["__scopeId","data-v-6d7de3c9"]]),ao=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"}));const oo=N({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q,us]}}}),po=a("Slide 1"),co=a("Slide 2"),uo=a("Slide 3"),mo=a("Slide 4"),fo=a("Slide 5"),wo=a("Slide 6"),ho=a("Slide 7"),_o=a("Slide 8");function go(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[po]),_:1}),i(s,{class:"slide"},{default:r(()=>[co]),_:1}),i(s,{class:"slide"},{default:r(()=>[uo]),_:1}),i(s,{class:"slide"},{default:r(()=>[mo]),_:1}),i(s,{class:"slide"},{default:r(()=>[fo]),_:1}),i(s,{class:"slide"},{default:r(()=>[wo]),_:1}),i(s,{class:"slide"},{default:r(()=>[ho]),_:1}),i(s,{class:"slide"},{default:r(()=>[_o]),_:1})]),_:1},8,["modules"])}var vo=A(oo,[["render",go],["__scopeId","data-v-de882fd0"]]),bo=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"}));const So=N({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue",components:{Swiper:L,SwiperSlide:H},setup(){const l=Pe([1,2,3,4,5]);return{modules:[q,Q],slides:l,appendSlide:()=>l.push(l.length+1),prependSlide:()=>l.unshift(l[0]-1),popSlide:()=>l.pop(),shiftSlide:()=>l.shift()}}}),yo={class:"dynamic-example"},$o={class:"toolbar"};function xo(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J("div",yo,[$("div",$o,[$("button",{onClick:e[0]||(e[0]=(...p)=>l.prependSlide&&l.prependSlide(...p))},"Prepend slide"),$("button",{onClick:e[1]||(e[1]=(...p)=>l.appendSlide&&l.appendSlide(...p))},"Append slide"),$("button",{onClick:e[2]||(e[2]=(...p)=>l.popSlide&&l.popSlide(...p))},"Pop slide"),$("button",{onClick:e[3]||(e[3]=(...p)=>l.shiftSlide&&l.shiftSlide(...p))},"Shift slide")]),i(d,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:l.modules},{default:r(()=>[(M(!0),J(ee,null,re(l.slides,p=>(M(),X(s,{key:p,class:"slide"},{default:r(()=>[a(" Slide "+le(p),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}var ko=A(So,[["render",xo],["__scopeId","data-v-4c8fff06"]]),Co=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"}));const Eo=N({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue",components:{Swiper:L,SwiperSlide:H},setup(){const l=me();return{modules:[Q,ms],setThumbsSwiper:v=>{l.value=v},thumbsSwiper:l}}}),Po={class:"thumb-example"},zo=["src"],Mo=["src"];function To(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J("div",Po,[i(d,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:l.modules,"space-between":10,navigation:!0,thumbs:{swiper:l.thumbsSwiper}},{default:r(()=>[(M(),J(ee,null,re(8,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,zo)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),i(d,{class:"thumbs-swiper",modules:l.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:l.setThumbsSwiper},{default:r(()=>[(M(),J(ee,null,re(8,p=>i(s,{class:"slide",key:p},{default:r(()=>[$("img",{src:`/images/example/${p}.jpg`},null,8,Mo)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}var Io=A(Eo,[["render",To],["__scopeId","data-v-4ade2337"]]),jo=Object.freeze(Object.defineProperty({__proto__:null,default:Io},Symbol.toStringTag,{value:"Module"}));const Oo=N({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q,ps]}}}),No={class:"swiper-zoom-container"},Ao=["src"];function Vo(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:l.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(M(),J(ee,null,re(8,p=>i(s,{key:p,class:"slide"},{default:r(()=>[$("div",No,[$("img",{src:`/images/example/${p}.jpg`},null,8,Ao)])]),_:2},1024)),64))]),_:1},8,["modules"])}var Ro=A(Oo,[["render",Vo],["__scopeId","data-v-7aeba9e8"]]),Lo=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"}));const Ho=N({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[cs,q,Q]}}}),Do=l=>(oe("data-v-073a65e7"),l=l(),de(),l),Wo=["data-src"],Yo=Do(()=>$("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function Xo(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:l.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(M(),J(ee,null,re(8,p=>i(s,{key:p,class:"slide"},{default:r(()=>[$("img",{"data-src":`/images/example/${p}.jpg`,class:"swiper-lazy"},null,8,Wo),Yo]),_:2},1024)),64))]),_:1},8,["modules"])}var qo=A(Ho,[["render",Xo],["__scopeId","data-v-073a65e7"]]),Bo=Object.freeze(Object.defineProperty({__proto__:null,default:qo},Symbol.toStringTag,{value:"Module"}));const Go=N({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[ds,q,Q]}}}),te=l=>(oe("data-v-0e91a112"),l=l(),de(),l),Fo=te(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),Uo=te(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Ko=te(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Zo=te(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),Jo=te(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Qo=te(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),ed=te(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),sd=te(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),rd=te(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function id(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:l.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":r(()=>[$("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:Ge({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Fo,Uo,Ko]),_:1}),i(s,{class:"slide"},{default:r(()=>[Zo,Jo,Qo]),_:1}),i(s,{class:"slide"},{default:r(()=>[ed,sd,rd]),_:1})]),_:1},8,["modules"])}var nd=A(Go,[["render",id],["__scopeId","data-v-0e91a112"]]),td=Object.freeze(Object.defineProperty({__proto__:null,default:nd},Symbol.toStringTag,{value:"Module"}));const ld=N({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q]}}}),ad=a("Slide 1"),od=a("Slide 2"),dd=a("Slide 3"),pd=a("Slide 4"),cd=a("Slide 5"),ud=a("Slide 6"),md=a("Slide 7"),fd=a("Slide 8");function wd(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[ad]),_:1}),i(s,{class:"slide"},{default:r(()=>[od]),_:1}),i(s,{class:"slide"},{default:r(()=>[dd]),_:1}),i(s,{class:"slide"},{default:r(()=>[pd]),_:1}),i(s,{class:"slide"},{default:r(()=>[cd]),_:1}),i(s,{class:"slide"},{default:r(()=>[ud]),_:1}),i(s,{class:"slide"},{default:r(()=>[md]),_:1}),i(s,{class:"slide"},{default:r(()=>[fd]),_:1})]),_:1},8,["modules"])}var hd=A(ld,[["render",wd],["__scopeId","data-v-1a8895f2"]]),_d=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"}));const gd=N({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q]}}}),vd=l=>(oe("data-v-5d225584"),l=l(),de(),l),bd=vd(()=>$("div",{class:"tip"},"\u2192 Resize the browser window \u2190",-1)),Sd=a("Slide 1"),yd=a("Slide 2"),$d=a("Slide 3"),xd=a("Slide 4"),kd=a("Slide 5"),Cd=a("Slide 6"),Ed=a("Slide 7"),Pd=a("Slide 8"),zd=a("Slide 9"),Md=a("Slide 10");function Td(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J(ee,null,[bd,i(d,{class:"swiper",modules:l.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Sd]),_:1}),i(s,{class:"slide"},{default:r(()=>[yd]),_:1}),i(s,{class:"slide"},{default:r(()=>[$d]),_:1}),i(s,{class:"slide"},{default:r(()=>[xd]),_:1}),i(s,{class:"slide"},{default:r(()=>[kd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Cd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ed]),_:1}),i(s,{class:"slide"},{default:r(()=>[Pd]),_:1}),i(s,{class:"slide"},{default:r(()=>[zd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Md]),_:1})]),_:1},8,["modules"])],64)}var Id=A(gd,[["render",Td],["__scopeId","data-v-5d225584"]]),jd=Object.freeze(Object.defineProperty({__proto__:null,default:Id},Symbol.toStringTag,{value:"Module"}));const Od=N({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue",components:{Swiper:L,SwiperSlide:H},setup(){return{modules:[q,Q]}}}),Nd=a("Slide 1"),Ad=a("Slide 2"),Vd=a("Slide 3"),Rd=a("Slide 4"),Ld=a("Slide 5"),Hd=a("Slide 6"),Dd=a("Slide 7"),Wd=a("Slide 8");function Yd(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[Nd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ad]),_:1}),i(s,{class:"slide"},{default:r(()=>[Vd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Rd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Ld]),_:1}),i(s,{class:"slide"},{default:r(()=>[Hd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Dd]),_:1}),i(s,{class:"slide"},{default:r(()=>[Wd]),_:1})]),_:1},8,["modules"])}var Xd=A(Od,[["render",Yd],["__scopeId","data-v-6bbdc2e0"]]),qd=Object.freeze(Object.defineProperty({__proto__:null,default:Xd},Symbol.toStringTag,{value:"Module"}));const Bd=N({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue",components:{Swiper:L,SwiperSlide:H},setup(){let l=null;const e=_=>{l=_},v=me(!1);return{menuOpened:v,toggleMenu:()=>{v.value?l==null||l.slideNext():l==null||l.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{v.value=(l==null?void 0:l.activeIndex)===0}}}}),ye=l=>(oe("data-v-0d448f8d"),l=l(),de(),l),Gd=a("Menu slide"),Fd=ye(()=>$("div",{class:"bar"},null,-1)),Ud=ye(()=>$("div",{class:"bar"},null,-1)),Kd=ye(()=>$("div",{class:"bar"},null,-1)),Zd=[Fd,Ud,Kd],Jd=ye(()=>$("div",null,"Content slide",-1));function Qd(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:l.setSwiperRef,onSlideChange:l.handleSlideChange},{default:r(()=>[i(s,{class:"menu"},{default:r(()=>[Gd]),_:1}),i(s,{class:"content"},{default:r(()=>[$("div",{class:Fe(["menu-button",{opened:l.menuOpened}]),onClick:e[0]||(e[0]=(...p)=>l.toggleMenu&&l.toggleMenu(...p))},Zd,2),Jd]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}var ep=A(Bd,[["render",Qd],["__scopeId","data-v-0d448f8d"]]),sp=Object.freeze(Object.defineProperty({__proto__:null,default:ep},Symbol.toStringTag,{value:"Module"}));const rp=N({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue",components:{Swiper:L,SwiperSlide:H},setup(){let l=null;const e=d=>{l=d},v=d=>{l==null||l.slideTo(d-1,0)},m=Pe(Array.from({length:500}).map((d,p)=>p+1));let S=1;return{modules:[q,Q,os],setSwiperRef:e,slides:m,slideTo:v,append:()=>{m.push(m.length)},prepend:()=>{m.unshift(S-2,S-1),S-=2,l==null||l.slideTo(l.activeIndex+2,0)}}}}),ip={class:"toolbar"};function np(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),J(ee,null,[$("div",ip,[$("button",{onClick:e[0]||(e[0]=p=>l.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),$("button",{onClick:e[1]||(e[1]=p=>l.slideTo(1)),class:"prepend-slide"},"Slide 1"),$("button",{onClick:e[2]||(e[2]=p=>l.slideTo(250)),class:"slide-250"},"Slide 250"),$("button",{onClick:e[3]||(e[3]=p=>l.slideTo(500)),class:"slide-500"},"Slide 500"),$("button",{onClick:e[4]||(e[4]=p=>l.append()),class:"append-slides"},"Append Slide")]),i(d,{class:"swiper",modules:l.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:l.setSwiperRef},{default:r(()=>[(M(!0),J(ee,null,re(l.slides,(p,f)=>(M(),X(s,{key:f,"virtual-index":f,class:"slide"},{default:r(()=>[a(" Slide "+le(p),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}var tp=A(rp,[["render",np],["__scopeId","data-v-63faf5cc"]]),lp=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"}));const ap=N({name:"swiper-example-change-direction",title:"Change direction",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue",components:{Swiper:L,SwiperSlide:H},setup(){let l=null;return{modules:[Q],setSwiperRef:m=>{l=m},handleResize:()=>{l==null||l.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}}),op=a("Slide 1"),dp=a("Slide 2"),pp=a("Slide 3"),cp=a("Slide 4"),up=a("Slide 5"),mp=a("Slide 6"),fp=a("Slide 7"),wp=a("Slide 8");function hp(l,e,v,m,S,_){const s=x("swiper-slide"),d=x("swiper");return M(),X(d,{class:"swiper",modules:l.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:l.setSwiperRef,onResize:l.handleResize},{default:r(()=>[i(s,{class:"slide"},{default:r(()=>[op]),_:1}),i(s,{class:"slide"},{default:r(()=>[dp]),_:1}),i(s,{class:"slide"},{default:r(()=>[pp]),_:1}),i(s,{class:"slide"},{default:r(()=>[cp]),_:1}),i(s,{class:"slide"},{default:r(()=>[up]),_:1}),i(s,{class:"slide"},{default:r(()=>[mp]),_:1}),i(s,{class:"slide"},{default:r(()=>[fp]),_:1}),i(s,{class:"slide"},{default:r(()=>[wp]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}var _p=A(ap,[["render",hp],["__scopeId","data-v-5c2d1e27"]]),gp=Object.freeze(Object.defineProperty({__proto__:null,default:_p},Symbol.toStringTag,{value:"Module"}));const Le={"./01-advance.vue":Ws,"./02-default.vue":er,"./03-navigation.vue":ur,"./04-pagination.vue":xr,"./05-pagination-dynamic.vue":Ar,"./06-pagination-progress.vue":Fr,"./07-pagination-fraction.vue":li,"./08-pagination-custom.vue":gi,"./09-scrollbar.vue":Mi,"./10-vertical.vue":Wi,"./11-space-between.vue":en,"./12-slides-per-view.vue":mn,"./13-slides-per-view-auto.vue":kn,"./14-centered.vue":Vn,"./15-centered-auto.vue":Un,"./16-freemode.vue":at,"./17-scroll-container.vue":Dt,"./18-slides-per-column.vue":sl,"./19-nested.vue":ml,"./20-grab-cursor.vue":kl,"./21-infinite-loop.vue":Vl,"./22-infinite-loop-with-slides-per-group.vue":Ul,"./23-slides-per-group-skip.vue":la,"./24-effect-fade.vue":ca,"./25-effect-coverflow.vue":_a,"./26-effect-cube.vue":$a,"./27-effect-flip.vue":za,"./28-effect-creative.vue":Va,"./29-keyboard-control.vue":Ua,"./30-mousewheel-control.vue":ao,"./31-autoplay.vue":bo,"./32-dynamic-slides.vue":Co,"./33-thumbs-gallery.vue":jo,"./34-zoom.vue":Lo,"./35-lazy-load-images.vue":Bo,"./36-parallax.vue":td,"./37-rtl.vue":_d,"./38-responsive-breakpoints.vue":jd,"./39-autoheight.vue":qd,"./40-slideable-menu.vue":sp,"./41-virtual-slides.vue":lp,"./42-change-direction.vue":gp},vp={"./01-advance.vue":`<template>\r
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
`};var bp=Object.keys(Le).map(l=>({component:Le[l].default,raw:vp[l],language:"vue"}));const Sp={class:"swiper-example"},yp=N({__name:"vue-awesome-swiper",setup(l){const e=Ue.VueAwesomeSwiper,v=bp.map(ss);return Ke({title:is(e),keywords:[ns(e),"How to use Swiper on vue3?"].join(","),description:ts(e)}),(m,S)=>(M(),X(ls,{repository:ce(e)},{default:r(()=>[i(rs,{repository:ce(e)},{actions:r(()=>[i(be,{icon:"doc",text:"Vue(2) examples",href:ce(Ze)(ce(e))},null,8,["href"]),i(be,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),i(be,{icon:"doc",text:"Swiper Vue(3) component",href:"https://swiperjs.com/vue"}),i(be,{icon:"discussions",text:"Swiper discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:r(()=>[i(as,{examples:ce(v)},{component:r(_=>[$("div",Sp,[(M(),X(Je(_.component)))])]),_:1},8,["examples"])]),_:1},8,["repository"])]),_:1},8,["repository"]))}});var Mp=A(yp,[["__scopeId","data-v-0d6cf728"]]);export{Mp as default};
