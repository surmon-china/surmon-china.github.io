import{R as qe,u as Ge,g as Be}from"./index.1ef25c29.js";import{s as Fe,$ as F,b as ue,c as Pe,d as He,n as De,e as Ve,i as Ue,f as Ee,S as D,h as W,P as X,j as Te,g as Ke,H as Ze}from"./index.18949fe4.js";import{g as Je,a as Qe,b as es}from"./navbar.b357f8d9.js";import{V as ss}from"./vue.79f491b4.js";import{H as Se}from"./link.fd7b165a.js";import{H as rs}from"./examples.c8569739.js";import{i as L,z as ze,q as me,E as k,F as P,M as Z,U as n,Q as r,P as $,V as te,ad as is,N as ae,O as oe,Y as a,G as Y,T as se,S as ee,a2 as Re,Z as ns,_ as ts,W as ls,R as ce,a5 as as}from"./vendor.9ced2005.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";function os(t){let{swiper:e,extendParams:v,on:u,emit:S}=t;v({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let h;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function s(i,p){const m=e.params.virtual;if(m.cache&&e.virtual.cache[p])return e.virtual.cache[p];const y=m.renderSlide?F(m.renderSlide.call(e,i,p)):F(`<div class="${e.params.slideClass}" data-swiper-slide-index="${p}">${i}</div>`);return y.attr("data-swiper-slide-index")||y.attr("data-swiper-slide-index",p),m.cache&&(e.virtual.cache[p]=y),y}function o(i){const{slidesPerView:p,slidesPerGroup:m,centeredSlides:y}=e.params,{addSlidesBefore:g,addSlidesAfter:_}=e.params.virtual,{from:x,to:b,slides:C,slidesGrid:j,offset:T}=e.virtual;e.params.cssMode||e.updateActiveIndex();const R=e.activeIndex||0;let V;e.rtlTranslate?V="right":V=e.isHorizontal()?"left":"top";let q,E;y?(q=Math.floor(p/2)+m+_,E=Math.floor(p/2)+m+g):(q=p+(m-1)+_,E=m+g);const M=Math.max((R||0)-E,0),O=Math.min((R||0)+q,C.length-1),N=(e.slidesGrid[M]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:M,to:O,offset:N,slidesGrid:e.slidesGrid});function I(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),S("virtualUpdate")}if(x===M&&b===O&&!i){e.slidesGrid!==j&&N!==T&&e.slides.css(V,`${N}px`),e.updateProgress(),S("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:N,from:M,to:O,slides:function(){const z=[];for(let A=M;A<=O;A+=1)z.push(C[A]);return z}()}),e.params.virtual.renderExternalUpdate?I():S("virtualUpdate");return}const U=[],J=[];if(i)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let f=x;f<=b;f+=1)(f<M||f>O)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${f}"]`).remove();for(let f=0;f<C.length;f+=1)f>=M&&f<=O&&(typeof b=="undefined"||i?J.push(f):(f>b&&J.push(f),f<x&&U.push(f)));J.forEach(f=>{e.$wrapperEl.append(s(C[f],f))}),U.sort((f,z)=>z-f).forEach(f=>{e.$wrapperEl.prepend(s(C[f],f))}),e.$wrapperEl.children(".swiper-slide").css(V,`${N}px`),I()}function c(i){if(typeof i=="object"&&"length"in i)for(let p=0;p<i.length;p+=1)i[p]&&e.virtual.slides.push(i[p]);else e.virtual.slides.push(i);o(!0)}function w(i){const p=e.activeIndex;let m=p+1,y=1;if(Array.isArray(i)){for(let g=0;g<i.length;g+=1)i[g]&&e.virtual.slides.unshift(i[g]);m=p+i.length,y=i.length}else e.virtual.slides.unshift(i);if(e.params.virtual.cache){const g=e.virtual.cache,_={};Object.keys(g).forEach(x=>{const b=g[x],C=b.attr("data-swiper-slide-index");C&&b.attr("data-swiper-slide-index",parseInt(C,10)+y),_[parseInt(x,10)+y]=b}),e.virtual.cache=_}o(!0),e.slideTo(m,0)}function d(i){if(typeof i=="undefined"||i===null)return;let p=e.activeIndex;if(Array.isArray(i))for(let m=i.length-1;m>=0;m-=1)e.virtual.slides.splice(i[m],1),e.params.virtual.cache&&delete e.virtual.cache[i[m]],i[m]<p&&(p-=1),p=Math.max(p,0);else e.virtual.slides.splice(i,1),e.params.virtual.cache&&delete e.virtual.cache[i],i<p&&(p-=1),p=Math.max(p,0);o(!0),e.slideTo(p,0)}function l(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),o(!0),e.slideTo(0,0)}u("beforeInit",()=>{!e.params.virtual.enabled||(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||o())}),u("setTranslate",()=>{!e.params.virtual.enabled||(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(h),h=setTimeout(()=>{o()},100)):o())}),u("init update resize",()=>{!e.params.virtual.enabled||e.params.cssMode&&Fe(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:c,prependSlide:w,removeSlide:d,removeAllSlides:l,update:o})}function We(t){let{swiper:e,extendParams:v,on:u,emit:S}=t;const h=ue(),s=Pe();e.keyboard={enabled:!1},v({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(d){if(!e.enabled)return;const{rtlTranslate:l}=e;let i=d;i.originalEvent&&(i=i.originalEvent);const p=i.keyCode||i.charCode,m=e.params.keyboard.pageUpDown,y=m&&p===33,g=m&&p===34,_=p===37,x=p===39,b=p===38,C=p===40;if(!e.allowSlideNext&&(e.isHorizontal()&&x||e.isVertical()&&C||g)||!e.allowSlidePrev&&(e.isHorizontal()&&_||e.isVertical()&&b||y))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey)&&!(h.activeElement&&h.activeElement.nodeName&&(h.activeElement.nodeName.toLowerCase()==="input"||h.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(y||g||_||x||b||C)){let j=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const T=e.$el,R=T[0].clientWidth,V=T[0].clientHeight,q=s.innerWidth,E=s.innerHeight,M=e.$el.offset();l&&(M.left-=e.$el[0].scrollLeft);const O=[[M.left,M.top],[M.left+R,M.top],[M.left,M.top+V],[M.left+R,M.top+V]];for(let N=0;N<O.length;N+=1){const I=O[N];if(I[0]>=0&&I[0]<=q&&I[1]>=0&&I[1]<=E){if(I[0]===0&&I[1]===0)continue;j=!0}}if(!j)return}e.isHorizontal()?((y||g||_||x)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),((g||x)&&!l||(y||_)&&l)&&e.slideNext(),((y||_)&&!l||(g||x)&&l)&&e.slidePrev()):((y||g||b||C)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),(g||C)&&e.slideNext(),(y||b)&&e.slidePrev()),S("keyPress",p)}}function c(){e.keyboard.enabled||(F(h).on("keydown",o),e.keyboard.enabled=!0)}function w(){!e.keyboard.enabled||(F(h).off("keydown",o),e.keyboard.enabled=!1)}u("init",()=>{e.params.keyboard.enabled&&c()}),u("destroy",()=>{e.keyboard.enabled&&w()}),Object.assign(e.keyboard,{enable:c,disable:w})}function Q(t){let{swiper:e,extendParams:v,on:u,emit:S}=t;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function h(i){let p;return i&&(p=F(i),e.params.uniqueNavElements&&typeof i=="string"&&p.length>1&&e.$el.find(i).length===1&&(p=e.$el.find(i))),p}function s(i,p){const m=e.params.navigation;i&&i.length>0&&(i[p?"addClass":"removeClass"](m.disabledClass),i[0]&&i[0].tagName==="BUTTON"&&(i[0].disabled=p),e.params.watchOverflow&&e.enabled&&i[e.isLocked?"addClass":"removeClass"](m.lockClass))}function o(){if(e.params.loop)return;const{$nextEl:i,$prevEl:p}=e.navigation;s(p,e.isBeginning&&!e.params.rewind),s(i,e.isEnd&&!e.params.rewind)}function c(i){i.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&e.slidePrev()}function w(i){i.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&e.slideNext()}function d(){const i=e.params.navigation;if(e.params.navigation=He(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(i.nextEl||i.prevEl))return;const p=h(i.nextEl),m=h(i.prevEl);p&&p.length>0&&p.on("click",w),m&&m.length>0&&m.on("click",c),Object.assign(e.navigation,{$nextEl:p,nextEl:p&&p[0],$prevEl:m,prevEl:m&&m[0]}),e.enabled||(p&&p.addClass(i.lockClass),m&&m.addClass(i.lockClass))}function l(){const{$nextEl:i,$prevEl:p}=e.navigation;i&&i.length&&(i.off("click",w),i.removeClass(e.params.navigation.disabledClass)),p&&p.length&&(p.off("click",c),p.removeClass(e.params.navigation.disabledClass))}u("init",()=>{d(),o()}),u("toEdge fromEdge lock unlock",()=>{o()}),u("destroy",()=>{l()}),u("enable disable",()=>{const{$nextEl:i,$prevEl:p}=e.navigation;i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),p&&p[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),u("click",(i,p)=>{const{$nextEl:m,$prevEl:y}=e.navigation,g=p.target;if(e.params.navigation.hideOnClick&&!F(g).is(y)&&!F(g).is(m)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let _;m?_=m.hasClass(e.params.navigation.hiddenClass):y&&(_=y.hasClass(e.params.navigation.hiddenClass)),S(_===!0?"navigationShow":"navigationHide"),m&&m.toggleClass(e.params.navigation.hiddenClass),y&&y.toggleClass(e.params.navigation.hiddenClass)}}),Object.assign(e.navigation,{update:o,init:d,destroy:l})}function Me(t){let{swiper:e,extendParams:v,on:u,emit:S}=t;const h=ue();let s=!1,o=null,c=null,w,d,l,i;v({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function p(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E,rtlTranslate:M,progress:O}=e,{$dragEl:N,$el:I}=E,U=e.params.scrollbar;let J=d,f=(l-d)*O;M?(f=-f,f>0?(J=d-f,f=0):-f+d>l&&(J=l+f)):f<0?(J=d+f,f=0):f+d>l&&(J=l-f),e.isHorizontal()?(N.transform(`translate3d(${f}px, 0, 0)`),N[0].style.width=`${J}px`):(N.transform(`translate3d(0px, ${f}px, 0)`),N[0].style.height=`${J}px`),U.hide&&(clearTimeout(o),I[0].style.opacity=1,o=setTimeout(()=>{I[0].style.opacity=0,I.transition(400)},1e3))}function m(E){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(E)}function y(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E}=e,{$dragEl:M,$el:O}=E;M[0].style.width="",M[0].style.height="",l=e.isHorizontal()?O[0].offsetWidth:O[0].offsetHeight,i=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?d=l*i:d=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?M[0].style.width=`${d}px`:M[0].style.height=`${d}px`,i>=1?O[0].style.display="none":O[0].style.display="",e.params.scrollbar.hide&&(O[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&E.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function g(E){return e.isHorizontal()?E.type==="touchstart"||E.type==="touchmove"?E.targetTouches[0].clientX:E.clientX:E.type==="touchstart"||E.type==="touchmove"?E.targetTouches[0].clientY:E.clientY}function _(E){const{scrollbar:M,rtlTranslate:O}=e,{$el:N}=M;let I;I=(g(E)-N.offset()[e.isHorizontal()?"left":"top"]-(w!==null?w:d/2))/(l-d),I=Math.max(Math.min(I,1),0),O&&(I=1-I);const U=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*I;e.updateProgress(U),e.setTranslate(U),e.updateActiveIndex(),e.updateSlidesClasses()}function x(E){const M=e.params.scrollbar,{scrollbar:O,$wrapperEl:N}=e,{$el:I,$dragEl:U}=O;s=!0,w=E.target===U[0]||E.target===U?g(E)-E.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,E.preventDefault(),E.stopPropagation(),N.transition(100),U.transition(100),_(E),clearTimeout(c),I.transition(0),M.hide&&I.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),S("scrollbarDragStart",E)}function b(E){const{scrollbar:M,$wrapperEl:O}=e,{$el:N,$dragEl:I}=M;!s||(E.preventDefault?E.preventDefault():E.returnValue=!1,_(E),O.transition(0),N.transition(0),I.transition(0),S("scrollbarDragMove",E))}function C(E){const M=e.params.scrollbar,{scrollbar:O,$wrapperEl:N}=e,{$el:I}=O;!s||(s=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),N.transition("")),M.hide&&(clearTimeout(c),c=De(()=>{I.css("opacity",0),I.transition(400)},1e3)),S("scrollbarDragEnd",E),M.snapOnRelease&&e.slideToClosest())}function j(E){const{scrollbar:M,touchEventsTouch:O,touchEventsDesktop:N,params:I,support:U}=e,f=M.$el[0],z=U.passiveListener&&I.passiveListeners?{passive:!1,capture:!1}:!1,A=U.passiveListener&&I.passiveListeners?{passive:!0,capture:!1}:!1;if(!f)return;const G=E==="on"?"addEventListener":"removeEventListener";U.touch?(f[G](O.start,x,z),f[G](O.move,b,z),f[G](O.end,C,A)):(f[G](N.start,x,z),h[G](N.move,b,z),h[G](N.end,C,A))}function T(){!e.params.scrollbar.el||j("on")}function R(){!e.params.scrollbar.el||j("off")}function V(){const{scrollbar:E,$el:M}=e;e.params.scrollbar=He(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const O=e.params.scrollbar;if(!O.el)return;let N=F(O.el);e.params.uniqueNavElements&&typeof O.el=="string"&&N.length>1&&M.find(O.el).length===1&&(N=M.find(O.el));let I=N.find(`.${e.params.scrollbar.dragClass}`);I.length===0&&(I=F(`<div class="${e.params.scrollbar.dragClass}"></div>`),N.append(I)),Object.assign(E,{$el:N,el:N[0],$dragEl:I,dragEl:I[0]}),O.draggable&&T(),N&&N[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function q(){R()}u("init",()=>{V(),y(),p()}),u("update resize observerUpdate lock unlock",()=>{y()}),u("setTranslate",()=>{p()}),u("setTransition",(E,M)=>{m(M)}),u("enable disable",()=>{const{$el:E}=e.scrollbar;E&&E[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),u("destroy",()=>{q()}),Object.assign(e.scrollbar,{updateSize:y,setTranslate:p,init:V,destroy:q})}function ds(t){let{swiper:e,extendParams:v,on:u}=t;v({parallax:{enabled:!1}});const S=(o,c)=>{const{rtl:w}=e,d=F(o),l=w?-1:1,i=d.attr("data-swiper-parallax")||"0";let p=d.attr("data-swiper-parallax-x"),m=d.attr("data-swiper-parallax-y");const y=d.attr("data-swiper-parallax-scale"),g=d.attr("data-swiper-parallax-opacity");if(p||m?(p=p||"0",m=m||"0"):e.isHorizontal()?(p=i,m="0"):(m=i,p="0"),p.indexOf("%")>=0?p=`${parseInt(p,10)*c*l}%`:p=`${p*c*l}px`,m.indexOf("%")>=0?m=`${parseInt(m,10)*c}%`:m=`${m*c}px`,typeof g!="undefined"&&g!==null){const _=g-(g-1)*(1-Math.abs(c));d[0].style.opacity=_}if(typeof y=="undefined"||y===null)d.transform(`translate3d(${p}, ${m}, 0px)`);else{const _=y-(y-1)*(1-Math.abs(c));d.transform(`translate3d(${p}, ${m}, 0px) scale(${_})`)}},h=()=>{const{$el:o,slides:c,progress:w,snapGrid:d}=e;o.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(l=>{S(l,w)}),c.each((l,i)=>{let p=l.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(p+=Math.ceil(i/2)-w*(d.length-1)),p=Math.min(Math.max(p,-1),1),F(l).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(m=>{S(m,p)})})},s=function(o){o===void 0&&(o=e.params.speed);const{$el:c}=e;c.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(w=>{const d=F(w);let l=parseInt(d.attr("data-swiper-parallax-duration"),10)||o;o===0&&(l=0),d.transition(l)})};u("beforeInit",()=>{!e.params.parallax.enabled||(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),u("init",()=>{!e.params.parallax.enabled||h()}),u("setTranslate",()=>{!e.params.parallax.enabled||h()}),u("setTransition",(o,c)=>{!e.params.parallax.enabled||s(c)})}function ps(t){let{swiper:e,extendParams:v,on:u,emit:S}=t;const h=Pe();v({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let s=1,o=!1,c,w,d;const l={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},i={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},p={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let m=1;Object.defineProperty(e.zoom,"scale",{get(){return m},set(f){if(m!==f){const z=l.$imageEl?l.$imageEl[0]:void 0,A=l.$slideEl?l.$slideEl[0]:void 0;S("zoomChange",f,z,A)}m=f}});function y(f){if(f.targetTouches.length<2)return 1;const z=f.targetTouches[0].pageX,A=f.targetTouches[0].pageY,G=f.targetTouches[1].pageX,K=f.targetTouches[1].pageY;return Math.sqrt((G-z)**2+(K-A)**2)}function g(f){const z=e.support,A=e.params.zoom;if(w=!1,d=!1,!z.gestures){if(f.type!=="touchstart"||f.type==="touchstart"&&f.targetTouches.length<2)return;w=!0,l.scaleStart=y(f)}if((!l.$slideEl||!l.$slideEl.length)&&(l.$slideEl=F(f.target).closest(`.${e.params.slideClass}`),l.$slideEl.length===0&&(l.$slideEl=e.slides.eq(e.activeIndex)),l.$imageEl=l.$slideEl.find(`.${A.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),l.$imageWrapEl=l.$imageEl.parent(`.${A.containerClass}`),l.maxRatio=l.$imageWrapEl.attr("data-swiper-zoom")||A.maxRatio,l.$imageWrapEl.length===0)){l.$imageEl=void 0;return}l.$imageEl&&l.$imageEl.transition(0),o=!0}function _(f){const z=e.support,A=e.params.zoom,G=e.zoom;if(!z.gestures){if(f.type!=="touchmove"||f.type==="touchmove"&&f.targetTouches.length<2)return;d=!0,l.scaleMove=y(f)}if(!l.$imageEl||l.$imageEl.length===0){f.type==="gesturechange"&&g(f);return}z.gestures?G.scale=f.scale*s:G.scale=l.scaleMove/l.scaleStart*s,G.scale>l.maxRatio&&(G.scale=l.maxRatio-1+(G.scale-l.maxRatio+1)**.5),G.scale<A.minRatio&&(G.scale=A.minRatio+1-(A.minRatio-G.scale+1)**.5),l.$imageEl.transform(`translate3d(0,0,0) scale(${G.scale})`)}function x(f){const z=e.device,A=e.support,G=e.params.zoom,K=e.zoom;if(!A.gestures){if(!w||!d||f.type!=="touchend"||f.type==="touchend"&&f.changedTouches.length<2&&!z.android)return;w=!1,d=!1}!l.$imageEl||l.$imageEl.length===0||(K.scale=Math.max(Math.min(K.scale,l.maxRatio),G.minRatio),l.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${K.scale})`),s=K.scale,o=!1,K.scale===1&&(l.$slideEl=void 0))}function b(f){const z=e.device;!l.$imageEl||l.$imageEl.length===0||i.isTouched||(z.android&&f.cancelable&&f.preventDefault(),i.isTouched=!0,i.touchesStart.x=f.type==="touchstart"?f.targetTouches[0].pageX:f.pageX,i.touchesStart.y=f.type==="touchstart"?f.targetTouches[0].pageY:f.pageY)}function C(f){const z=e.zoom;if(!l.$imageEl||l.$imageEl.length===0||(e.allowClick=!1,!i.isTouched||!l.$slideEl))return;i.isMoved||(i.width=l.$imageEl[0].offsetWidth,i.height=l.$imageEl[0].offsetHeight,i.startX=Ve(l.$imageWrapEl[0],"x")||0,i.startY=Ve(l.$imageWrapEl[0],"y")||0,l.slideWidth=l.$slideEl[0].offsetWidth,l.slideHeight=l.$slideEl[0].offsetHeight,l.$imageWrapEl.transition(0));const A=i.width*z.scale,G=i.height*z.scale;if(!(A<l.slideWidth&&G<l.slideHeight)){if(i.minX=Math.min(l.slideWidth/2-A/2,0),i.maxX=-i.minX,i.minY=Math.min(l.slideHeight/2-G/2,0),i.maxY=-i.minY,i.touchesCurrent.x=f.type==="touchmove"?f.targetTouches[0].pageX:f.pageX,i.touchesCurrent.y=f.type==="touchmove"?f.targetTouches[0].pageY:f.pageY,!i.isMoved&&!o){if(e.isHorizontal()&&(Math.floor(i.minX)===Math.floor(i.startX)&&i.touchesCurrent.x<i.touchesStart.x||Math.floor(i.maxX)===Math.floor(i.startX)&&i.touchesCurrent.x>i.touchesStart.x)){i.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(i.minY)===Math.floor(i.startY)&&i.touchesCurrent.y<i.touchesStart.y||Math.floor(i.maxY)===Math.floor(i.startY)&&i.touchesCurrent.y>i.touchesStart.y)){i.isTouched=!1;return}}f.cancelable&&f.preventDefault(),f.stopPropagation(),i.isMoved=!0,i.currentX=i.touchesCurrent.x-i.touchesStart.x+i.startX,i.currentY=i.touchesCurrent.y-i.touchesStart.y+i.startY,i.currentX<i.minX&&(i.currentX=i.minX+1-(i.minX-i.currentX+1)**.8),i.currentX>i.maxX&&(i.currentX=i.maxX-1+(i.currentX-i.maxX+1)**.8),i.currentY<i.minY&&(i.currentY=i.minY+1-(i.minY-i.currentY+1)**.8),i.currentY>i.maxY&&(i.currentY=i.maxY-1+(i.currentY-i.maxY+1)**.8),p.prevPositionX||(p.prevPositionX=i.touchesCurrent.x),p.prevPositionY||(p.prevPositionY=i.touchesCurrent.y),p.prevTime||(p.prevTime=Date.now()),p.x=(i.touchesCurrent.x-p.prevPositionX)/(Date.now()-p.prevTime)/2,p.y=(i.touchesCurrent.y-p.prevPositionY)/(Date.now()-p.prevTime)/2,Math.abs(i.touchesCurrent.x-p.prevPositionX)<2&&(p.x=0),Math.abs(i.touchesCurrent.y-p.prevPositionY)<2&&(p.y=0),p.prevPositionX=i.touchesCurrent.x,p.prevPositionY=i.touchesCurrent.y,p.prevTime=Date.now(),l.$imageWrapEl.transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)}}function j(){const f=e.zoom;if(!l.$imageEl||l.$imageEl.length===0)return;if(!i.isTouched||!i.isMoved){i.isTouched=!1,i.isMoved=!1;return}i.isTouched=!1,i.isMoved=!1;let z=300,A=300;const G=p.x*z,K=i.currentX+G,de=p.y*A,pe=i.currentY+de;p.x!==0&&(z=Math.abs((K-i.currentX)/p.x)),p.y!==0&&(A=Math.abs((pe-i.currentY)/p.y));const he=Math.max(z,A);i.currentX=K,i.currentY=pe;const _e=i.width*f.scale,re=i.height*f.scale;i.minX=Math.min(l.slideWidth/2-_e/2,0),i.maxX=-i.minX,i.minY=Math.min(l.slideHeight/2-re/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),l.$imageWrapEl.transition(he).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)}function T(){const f=e.zoom;l.$slideEl&&e.previousIndex!==e.activeIndex&&(l.$imageEl&&l.$imageEl.transform("translate3d(0,0,0) scale(1)"),l.$imageWrapEl&&l.$imageWrapEl.transform("translate3d(0,0,0)"),f.scale=1,s=1,l.$slideEl=void 0,l.$imageEl=void 0,l.$imageWrapEl=void 0)}function R(f){const z=e.zoom,A=e.params.zoom;if(l.$slideEl||(f&&f.target&&(l.$slideEl=F(f.target).closest(`.${e.params.slideClass}`)),l.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):l.$slideEl=e.slides.eq(e.activeIndex)),l.$imageEl=l.$slideEl.find(`.${A.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),l.$imageWrapEl=l.$imageEl.parent(`.${A.containerClass}`)),!l.$imageEl||l.$imageEl.length===0||!l.$imageWrapEl||l.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),l.$slideEl.addClass(`${A.zoomedSlideClass}`);let G,K,de,pe,he,_e,re,le,je,Oe,Ne,Ae,ge,ve,$e,xe,ke,Ce;typeof i.touchesStart.x=="undefined"&&f?(G=f.type==="touchend"?f.changedTouches[0].pageX:f.pageX,K=f.type==="touchend"?f.changedTouches[0].pageY:f.pageY):(G=i.touchesStart.x,K=i.touchesStart.y),z.scale=l.$imageWrapEl.attr("data-swiper-zoom")||A.maxRatio,s=l.$imageWrapEl.attr("data-swiper-zoom")||A.maxRatio,f?(ke=l.$slideEl[0].offsetWidth,Ce=l.$slideEl[0].offsetHeight,de=l.$slideEl.offset().left+h.scrollX,pe=l.$slideEl.offset().top+h.scrollY,he=de+ke/2-G,_e=pe+Ce/2-K,je=l.$imageEl[0].offsetWidth,Oe=l.$imageEl[0].offsetHeight,Ne=je*z.scale,Ae=Oe*z.scale,ge=Math.min(ke/2-Ne/2,0),ve=Math.min(Ce/2-Ae/2,0),$e=-ge,xe=-ve,re=he*z.scale,le=_e*z.scale,re<ge&&(re=ge),re>$e&&(re=$e),le<ve&&(le=ve),le>xe&&(le=xe)):(re=0,le=0),l.$imageWrapEl.transition(300).transform(`translate3d(${re}px, ${le}px,0)`),l.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${z.scale})`)}function V(){const f=e.zoom,z=e.params.zoom;l.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):l.$slideEl=e.slides.eq(e.activeIndex),l.$imageEl=l.$slideEl.find(`.${z.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),l.$imageWrapEl=l.$imageEl.parent(`.${z.containerClass}`)),!(!l.$imageEl||l.$imageEl.length===0||!l.$imageWrapEl||l.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),f.scale=1,s=1,l.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),l.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),l.$slideEl.removeClass(`${z.zoomedSlideClass}`),l.$slideEl=void 0)}function q(f){const z=e.zoom;z.scale&&z.scale!==1?V():R(f)}function E(){const f=e.support,z=e.touchEvents.start==="touchstart"&&f.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,A=f.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:z,activeListenerWithCapture:A}}function M(){return`.${e.params.slideClass}`}function O(f){const{passiveListener:z}=E(),A=M();e.$wrapperEl[f]("gesturestart",A,g,z),e.$wrapperEl[f]("gesturechange",A,_,z),e.$wrapperEl[f]("gestureend",A,x,z)}function N(){c||(c=!0,O("on"))}function I(){!c||(c=!1,O("off"))}function U(){const f=e.zoom;if(f.enabled)return;f.enabled=!0;const z=e.support,{passiveListener:A,activeListenerWithCapture:G}=E(),K=M();z.gestures?(e.$wrapperEl.on(e.touchEvents.start,N,A),e.$wrapperEl.on(e.touchEvents.end,I,A)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,K,g,A),e.$wrapperEl.on(e.touchEvents.move,K,_,G),e.$wrapperEl.on(e.touchEvents.end,K,x,A),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,K,x,A)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,C,G)}function J(){const f=e.zoom;if(!f.enabled)return;const z=e.support;f.enabled=!1;const{passiveListener:A,activeListenerWithCapture:G}=E(),K=M();z.gestures?(e.$wrapperEl.off(e.touchEvents.start,N,A),e.$wrapperEl.off(e.touchEvents.end,I,A)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,K,g,A),e.$wrapperEl.off(e.touchEvents.move,K,_,G),e.$wrapperEl.off(e.touchEvents.end,K,x,A),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,K,x,A)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,C,G)}u("init",()=>{e.params.zoom.enabled&&U()}),u("destroy",()=>{J()}),u("touchStart",(f,z)=>{!e.zoom.enabled||b(z)}),u("touchEnd",(f,z)=>{!e.zoom.enabled||j()}),u("doubleTap",(f,z)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&q(z)}),u("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&T()}),u("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&T()}),Object.assign(e.zoom,{enable:U,disable:J,in:R,out:V,toggle:q})}function cs(t){let{swiper:e,extendParams:v,on:u,emit:S}=t;v({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let h=!1,s=!1;function o(d,l){l===void 0&&(l=!0);const i=e.params.lazy;if(typeof d=="undefined"||e.slides.length===0)return;const m=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${d}"]`):e.slides.eq(d),y=m.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);m.hasClass(i.elementClass)&&!m.hasClass(i.loadedClass)&&!m.hasClass(i.loadingClass)&&y.push(m[0]),y.length!==0&&y.each(g=>{const _=F(g);_.addClass(i.loadingClass);const x=_.attr("data-background"),b=_.attr("data-src"),C=_.attr("data-srcset"),j=_.attr("data-sizes"),T=_.parent("picture");e.loadImage(_[0],b||x,C,j,!1,()=>{if(!(typeof e=="undefined"||e===null||!e||e&&!e.params||e.destroyed)){if(x?(_.css("background-image",`url("${x}")`),_.removeAttr("data-background")):(C&&(_.attr("srcset",C),_.removeAttr("data-srcset")),j&&(_.attr("sizes",j),_.removeAttr("data-sizes")),T.length&&T.children("source").each(R=>{const V=F(R);V.attr("data-srcset")&&(V.attr("srcset",V.attr("data-srcset")),V.removeAttr("data-srcset"))}),b&&(_.attr("src",b),_.removeAttr("data-src"))),_.addClass(i.loadedClass).removeClass(i.loadingClass),m.find(`.${i.preloaderClass}`).remove(),e.params.loop&&l){const R=m.attr("data-swiper-slide-index");if(m.hasClass(e.params.slideDuplicateClass)){const V=e.$wrapperEl.children(`[data-swiper-slide-index="${R}"]:not(.${e.params.slideDuplicateClass})`);o(V.index(),!1)}else{const V=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${R}"]`);o(V.index(),!1)}}S("lazyImageReady",m[0],_[0]),e.params.autoHeight&&e.updateAutoHeight()}}),S("lazyImageLoad",m[0],_[0])})}function c(){const{$wrapperEl:d,params:l,slides:i,activeIndex:p}=e,m=e.virtual&&l.virtual.enabled,y=l.lazy;let g=l.slidesPerView;g==="auto"&&(g=0);function _(b){if(m){if(d.children(`.${l.slideClass}[data-swiper-slide-index="${b}"]`).length)return!0}else if(i[b])return!0;return!1}function x(b){return m?F(b).attr("data-swiper-slide-index"):F(b).index()}if(s||(s=!0),e.params.watchSlidesProgress)d.children(`.${l.slideVisibleClass}`).each(b=>{const C=m?F(b).attr("data-swiper-slide-index"):F(b).index();o(C)});else if(g>1)for(let b=p;b<p+g;b+=1)_(b)&&o(b);else o(p);if(y.loadPrevNext)if(g>1||y.loadPrevNextAmount&&y.loadPrevNextAmount>1){const b=y.loadPrevNextAmount,C=g,j=Math.min(p+C+Math.max(b,C),i.length),T=Math.max(p-Math.max(C,b),0);for(let R=p+g;R<j;R+=1)_(R)&&o(R);for(let R=T;R<p;R+=1)_(R)&&o(R)}else{const b=d.children(`.${l.slideNextClass}`);b.length>0&&o(x(b));const C=d.children(`.${l.slidePrevClass}`);C.length>0&&o(x(C))}}function w(){const d=Pe();if(!e||e.destroyed)return;const l=e.params.lazy.scrollingElement?F(e.params.lazy.scrollingElement):F(d),i=l[0]===d,p=i?d.innerWidth:l[0].offsetWidth,m=i?d.innerHeight:l[0].offsetHeight,y=e.$el.offset(),{rtlTranslate:g}=e;let _=!1;g&&(y.left-=e.$el[0].scrollLeft);const x=[[y.left,y.top],[y.left+e.width,y.top],[y.left,y.top+e.height],[y.left+e.width,y.top+e.height]];for(let C=0;C<x.length;C+=1){const j=x[C];if(j[0]>=0&&j[0]<=p&&j[1]>=0&&j[1]<=m){if(j[0]===0&&j[1]===0)continue;_=!0}}const b=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;_?(c(),l.off("scroll",w,b)):h||(h=!0,l.on("scroll",w,b))}u("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),u("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?w():c())}),u("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&c()}),u("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?w():c())}),u("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!s)&&(e.params.lazy.checkInView?w():c())}),u("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?w():c())}),u("slideChange",()=>{const{lazy:d,cssMode:l,watchSlidesProgress:i,touchReleaseOnEdges:p,resistanceRatio:m}=e.params;d.enabled&&(l||i&&(p||m===0))&&c()}),Object.assign(e.lazy,{load:c,loadInSlide:o})}function us(t){let{swiper:e,extendParams:v,on:u,emit:S}=t,h;e.autoplay={running:!1,paused:!1},v({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){const g=e.slides.eq(e.activeIndex);let _=e.params.autoplay.delay;g.attr("data-swiper-autoplay")&&(_=g.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(h),h=De(()=>{let x;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),x=e.slidePrev(e.params.speed,!0,!0),S("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?c():(x=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),S("autoplay")):(x=e.slidePrev(e.params.speed,!0,!0),S("autoplay")):e.params.loop?(e.loopFix(),x=e.slideNext(e.params.speed,!0,!0),S("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?c():(x=e.slideTo(0,e.params.speed,!0,!0),S("autoplay")):(x=e.slideNext(e.params.speed,!0,!0),S("autoplay")),(e.params.cssMode&&e.autoplay.running||x===!1)&&s()},_)}function o(){return typeof h!="undefined"||e.autoplay.running?!1:(e.autoplay.running=!0,S("autoplayStart"),s(),!0)}function c(){return!e.autoplay.running||typeof h=="undefined"?!1:(h&&(clearTimeout(h),h=void 0),e.autoplay.running=!1,S("autoplayStop"),!0)}function w(g){!e.autoplay.running||e.autoplay.paused||(h&&clearTimeout(h),e.autoplay.paused=!0,g===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(_=>{e.$wrapperEl[0].addEventListener(_,l)}))}function d(){const g=ue();g.visibilityState==="hidden"&&e.autoplay.running&&w(),g.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function l(g){!e||e.destroyed||!e.$wrapperEl||g.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(_=>{e.$wrapperEl[0].removeEventListener(_,l)}),e.autoplay.paused=!1,e.autoplay.running?s():c())}function i(){e.params.autoplay.disableOnInteraction?c():(S("autoplayPause"),w()),["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].removeEventListener(g,l)})}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,S("autoplayResume"),s())}function m(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",i),e.$el.on("mouseleave",p))}function y(){e.$el.off("mouseenter",i),e.$el.off("mouseleave",p)}u("init",()=>{e.params.autoplay.enabled&&(o(),ue().addEventListener("visibilitychange",d),m())}),u("beforeTransitionStart",(g,_,x)=>{e.autoplay.running&&(x||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(_):c())}),u("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?c():w())}),u("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),u("destroy",()=>{y(),e.autoplay.running&&c(),ue().removeEventListener("visibilitychange",d)}),Object.assign(e.autoplay,{pause:w,run:s,start:o,stop:c})}function ms(t){let{swiper:e,extendParams:v,on:u}=t;v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let S=!1,h=!1;e.thumbs={swiper:null};function s(){const w=e.thumbs.swiper;if(!w)return;const d=w.clickedIndex,l=w.clickedSlide;if(l&&F(l).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof d=="undefined"||d===null)return;let i;if(w.params.loop?i=parseInt(F(w.clickedSlide).attr("data-swiper-slide-index"),10):i=d,e.params.loop){let p=e.activeIndex;e.slides.eq(p).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,p=e.activeIndex);const m=e.slides.eq(p).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),y=e.slides.eq(p).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();typeof m=="undefined"?i=y:typeof y=="undefined"?i=m:y-p<p-m?i=y:i=m}e.slideTo(i)}function o(){const{thumbs:w}=e.params;if(S)return!1;S=!0;const d=e.constructor;if(w.swiper instanceof d)e.thumbs.swiper=w.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(Ue(w.swiper)){const l=Object.assign({},w.swiper);Object.assign(l,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new d(l),h=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",s),!0}function c(w){const d=e.thumbs.swiper;if(!d)return;const l=d.params.slidesPerView==="auto"?d.slidesPerViewDynamic():d.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,p=i&&!d.params.loop;if(e.realIndex!==d.realIndex||p){let g=d.activeIndex,_,x;if(d.params.loop){d.slides.eq(g).hasClass(d.params.slideDuplicateClass)&&(d.loopFix(),d._clientLeft=d.$wrapperEl[0].clientLeft,g=d.activeIndex);const b=d.slides.eq(g).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),C=d.slides.eq(g).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof b=="undefined"?_=C:typeof C=="undefined"?_=b:C-g===g-b?_=d.params.slidesPerGroup>1?C:g:C-g<g-b?_=C:_=b,x=e.activeIndex>e.previousIndex?"next":"prev"}else _=e.realIndex,x=_>e.previousIndex?"next":"prev";p&&(_+=x==="next"?i:-1*i),d.visibleSlidesIndexes&&d.visibleSlidesIndexes.indexOf(_)<0&&(d.params.centeredSlides?_>g?_=_-Math.floor(l/2)+1:_=_+Math.floor(l/2)-1:_>g&&d.params.slidesPerGroup,d.slideTo(_,w?0:void 0))}let m=1;const y=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(m=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(m=1),m=Math.floor(m),d.slides.removeClass(y),d.params.loop||d.params.virtual&&d.params.virtual.enabled)for(let g=0;g<m;g+=1)d.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+g}"]`).addClass(y);else for(let g=0;g<m;g+=1)d.slides.eq(e.realIndex+g).addClass(y)}u("beforeInit",()=>{const{thumbs:w}=e.params;!w||!w.swiper||(o(),c(!0))}),u("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||c()}),u("setTransition",(w,d)=>{const l=e.thumbs.swiper;!l||l.setTransition(d)}),u("beforeDestroy",()=>{const w=e.thumbs.swiper;!w||h&&w&&w.destroy()}),Object.assign(e.thumbs,{init:o,update:c})}function Ye(t){let{swiper:e,extendParams:v,emit:u,once:S}=t;v({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function h(){const c=e.getTranslate();e.setTranslate(c),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function s(){const{touchEventsData:c,touches:w}=e;c.velocities.length===0&&c.velocities.push({position:w[e.isHorizontal()?"startX":"startY"],time:c.touchStartTime}),c.velocities.push({position:w[e.isHorizontal()?"currentX":"currentY"],time:Ee()})}function o(c){let{currentPos:w}=c;const{params:d,$wrapperEl:l,rtlTranslate:i,snapGrid:p,touchEventsData:m}=e,g=Ee()-m.touchStartTime;if(w<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(w>-e.maxTranslate()){e.slides.length<p.length?e.slideTo(p.length-1):e.slideTo(e.slides.length-1);return}if(d.freeMode.momentum){if(m.velocities.length>1){const V=m.velocities.pop(),q=m.velocities.pop(),E=V.position-q.position,M=V.time-q.time;e.velocity=E/M,e.velocity/=2,Math.abs(e.velocity)<d.freeMode.minimumVelocity&&(e.velocity=0),(M>150||Ee()-V.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=d.freeMode.momentumVelocityRatio,m.velocities.length=0;let _=1e3*d.freeMode.momentumRatio;const x=e.velocity*_;let b=e.translate+x;i&&(b=-b);let C=!1,j;const T=Math.abs(e.velocity)*20*d.freeMode.momentumBounceRatio;let R;if(b<e.maxTranslate())d.freeMode.momentumBounce?(b+e.maxTranslate()<-T&&(b=e.maxTranslate()-T),j=e.maxTranslate(),C=!0,m.allowMomentumBounce=!0):b=e.maxTranslate(),d.loop&&d.centeredSlides&&(R=!0);else if(b>e.minTranslate())d.freeMode.momentumBounce?(b-e.minTranslate()>T&&(b=e.minTranslate()+T),j=e.minTranslate(),C=!0,m.allowMomentumBounce=!0):b=e.minTranslate(),d.loop&&d.centeredSlides&&(R=!0);else if(d.freeMode.sticky){let V;for(let q=0;q<p.length;q+=1)if(p[q]>-b){V=q;break}Math.abs(p[V]-b)<Math.abs(p[V-1]-b)||e.swipeDirection==="next"?b=p[V]:b=p[V-1],b=-b}if(R&&S("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(i?_=Math.abs((-b-e.translate)/e.velocity):_=Math.abs((b-e.translate)/e.velocity),d.freeMode.sticky){const V=Math.abs((i?-b:b)-e.translate),q=e.slidesSizesGrid[e.activeIndex];V<q?_=d.speed:V<2*q?_=d.speed*1.5:_=d.speed*2.5}}else if(d.freeMode.sticky){e.slideToClosest();return}d.freeMode.momentumBounce&&C?(e.updateProgress(j),e.setTransition(_),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating=!0,l.transitionEnd(()=>{!e||e.destroyed||!m.allowMomentumBounce||(u("momentumBounce"),e.setTransition(d.speed),setTimeout(()=>{e.setTranslate(j),l.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(u("_freeModeNoMomentumRelease"),e.updateProgress(b),e.setTransition(_),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,l.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(b),e.updateActiveIndex(),e.updateSlidesClasses()}else if(d.freeMode.sticky){e.slideToClosest();return}else d.freeMode&&u("_freeModeNoMomentumRelease");(!d.freeMode.momentum||g>=d.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:h,onTouchMove:s,onTouchEnd:o}})}function Xe(t){let{swiper:e,extendParams:v}=t;v({grid:{rows:1,fill:"column"}});let u,S,h;const s=w=>{const{slidesPerView:d}=e.params,{rows:l,fill:i}=e.params.grid;S=u/l,h=Math.floor(w/l),Math.floor(w/l)===w/l?u=w:u=Math.ceil(w/l)*l,d!=="auto"&&i==="row"&&(u=Math.max(u,d*l))},o=(w,d,l,i)=>{const{slidesPerGroup:p,spaceBetween:m}=e.params,{rows:y,fill:g}=e.params.grid;let _,x,b;if(g==="row"&&p>1){const C=Math.floor(w/(p*y)),j=w-y*p*C,T=C===0?p:Math.min(Math.ceil((l-C*y*p)/y),p);b=Math.floor(j/T),x=j-b*T+C*p,_=x+b*u/y,d.css({"-webkit-order":_,order:_})}else g==="column"?(x=Math.floor(w/y),b=w-x*y,(x>h||x===h&&b===y-1)&&(b+=1,b>=y&&(b=0,x+=1))):(b=Math.floor(w/S),x=w-b*S);d.css(i("margin-top"),b!==0?m&&`${m}px`:"")},c=(w,d,l)=>{const{spaceBetween:i,centeredSlides:p,roundLengths:m}=e.params,{rows:y}=e.params.grid;if(e.virtualSize=(w+i)*u,e.virtualSize=Math.ceil(e.virtualSize/y)-i,e.$wrapperEl.css({[l("width")]:`${e.virtualSize+i}px`}),p){d.splice(0,d.length);const g=[];for(let _=0;_<d.length;_+=1){let x=d[_];m&&(x=Math.floor(x)),d[_]<e.virtualSize+d[0]&&g.push(x)}d.push(...g)}};e.grid={initSlides:s,updateSlide:o,updateWrapperSize:c}}function we(t){const{effect:e,swiper:v,on:u,setTranslate:S,setTransition:h,overwriteParams:s,perspective:o}=t;u("beforeInit",()=>{if(v.params.effect!==e)return;v.classNames.push(`${v.params.containerModifierClass}${e}`),o&&o()&&v.classNames.push(`${v.params.containerModifierClass}3d`);const w=s?s():{};Object.assign(v.params,w),Object.assign(v.originalParams,w)}),u("setTranslate",()=>{v.params.effect===e&&S()}),u("setTransition",(w,d)=>{v.params.effect===e&&h(d)});let c;u("virtualUpdate",()=>{v.slides.length||(c=!0),requestAnimationFrame(()=>{c&&v.slides.length&&(S(),c=!1)})})}function be(t,e){return t.transformEl?e.find(t.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function Ie(t){let{swiper:e,duration:v,transformEl:u,allSlides:S}=t;const{slides:h,activeIndex:s,$wrapperEl:o}=e;if(e.params.virtualTranslate&&v!==0){let c=!1,w;S?w=u?h.find(u):h:w=u?h.eq(s).find(u):h.eq(s),w.transitionEnd(()=>{if(c||!e||e.destroyed)return;c=!0,e.animating=!1;const d=["webkitTransitionEnd","transitionend"];for(let l=0;l<d.length;l+=1)o.trigger(d[l])})}}function fs(t){let{swiper:e,extendParams:v,on:u}=t;v({fadeEffect:{crossFade:!1,transformEl:null}}),we({effect:"fade",swiper:e,on:u,setTranslate:()=>{const{slides:s}=e,o=e.params.fadeEffect;for(let c=0;c<s.length;c+=1){const w=e.slides.eq(c);let l=-w[0].swiperSlideOffset;e.params.virtualTranslate||(l-=e.translate);let i=0;e.isHorizontal()||(i=l,l=0);const p=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(w[0].progress),0):1+Math.min(Math.max(w[0].progress,-1),0);be(o,w).css({opacity:p}).transform(`translate3d(${l}px, ${i}px, 0px)`)}},setTransition:s=>{const{transformEl:o}=e.params.fadeEffect;(o?e.slides.find(o):e.slides).transition(s),Ie({swiper:e,duration:s,transformEl:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ws(t){let{swiper:e,extendParams:v,on:u}=t;v({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),we({effect:"cube",swiper:e,on:u,setTranslate:()=>{const{$el:s,$wrapperEl:o,slides:c,width:w,height:d,rtlTranslate:l,size:i,browser:p}=e,m=e.params.cubeEffect,y=e.isHorizontal(),g=e.virtual&&e.params.virtual.enabled;let _=0,x;m.shadow&&(y?(x=o.find(".swiper-cube-shadow"),x.length===0&&(x=F('<div class="swiper-cube-shadow"></div>'),o.append(x)),x.css({height:`${w}px`})):(x=s.find(".swiper-cube-shadow"),x.length===0&&(x=F('<div class="swiper-cube-shadow"></div>'),s.append(x))));for(let C=0;C<c.length;C+=1){const j=c.eq(C);let T=C;g&&(T=parseInt(j.attr("data-swiper-slide-index"),10));let R=T*90,V=Math.floor(R/360);l&&(R=-R,V=Math.floor(-R/360));const q=Math.max(Math.min(j[0].progress,1),-1);let E=0,M=0,O=0;T%4===0?(E=-V*4*i,O=0):(T-1)%4===0?(E=0,O=-V*4*i):(T-2)%4===0?(E=i+V*4*i,O=i):(T-3)%4===0&&(E=-i,O=3*i+i*4*V),l&&(E=-E),y||(M=E,E=0);const N=`rotateX(${y?0:-R}deg) rotateY(${y?R:0}deg) translate3d(${E}px, ${M}px, ${O}px)`;if(q<=1&&q>-1&&(_=T*90+q*90,l&&(_=-T*90-q*90)),j.transform(N),m.slideShadows){let I=y?j.find(".swiper-slide-shadow-left"):j.find(".swiper-slide-shadow-top"),U=y?j.find(".swiper-slide-shadow-right"):j.find(".swiper-slide-shadow-bottom");I.length===0&&(I=F(`<div class="swiper-slide-shadow-${y?"left":"top"}"></div>`),j.append(I)),U.length===0&&(U=F(`<div class="swiper-slide-shadow-${y?"right":"bottom"}"></div>`),j.append(U)),I.length&&(I[0].style.opacity=Math.max(-q,0)),U.length&&(U[0].style.opacity=Math.max(q,0))}}if(o.css({"-webkit-transform-origin":`50% 50% -${i/2}px`,"transform-origin":`50% 50% -${i/2}px`}),m.shadow)if(y)x.transform(`translate3d(0px, ${w/2+m.shadowOffset}px, ${-w/2}px) rotateX(90deg) rotateZ(0deg) scale(${m.shadowScale})`);else{const C=Math.abs(_)-Math.floor(Math.abs(_)/90)*90,j=1.5-(Math.sin(C*2*Math.PI/360)/2+Math.cos(C*2*Math.PI/360)/2),T=m.shadowScale,R=m.shadowScale/j,V=m.shadowOffset;x.transform(`scale3d(${T}, 1, ${R}) translate3d(0px, ${d/2+V}px, ${-d/2/R}px) rotateX(-90deg)`)}const b=p.isSafari||p.isWebView?-i/2:0;o.transform(`translate3d(0px,0,${b}px) rotateX(${e.isHorizontal()?0:_}deg) rotateY(${e.isHorizontal()?-_:0}deg)`)},setTransition:s=>{const{$el:o,slides:c}=e;c.transition(s).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(s),e.params.cubeEffect.shadow&&!e.isHorizontal()&&o.find(".swiper-cube-shadow").transition(s)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function fe(t,e,v){const u=`swiper-slide-shadow${v?`-${v}`:""}`,S=t.transformEl?e.find(t.transformEl):e;let h=S.children(`.${u}`);return h.length||(h=F(`<div class="swiper-slide-shadow${v?`-${v}`:""}"></div>`),S.append(h)),h}function hs(t){let{swiper:e,extendParams:v,on:u}=t;v({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),we({effect:"flip",swiper:e,on:u,setTranslate:()=>{const{slides:s,rtlTranslate:o}=e,c=e.params.flipEffect;for(let w=0;w<s.length;w+=1){const d=s.eq(w);let l=d[0].progress;e.params.flipEffect.limitRotation&&(l=Math.max(Math.min(d[0].progress,1),-1));const i=d[0].swiperSlideOffset;let m=-180*l,y=0,g=e.params.cssMode?-i-e.translate:-i,_=0;if(e.isHorizontal()?o&&(m=-m):(_=g,g=0,y=-m,m=0),d[0].style.zIndex=-Math.abs(Math.round(l))+s.length,c.slideShadows){let C=e.isHorizontal()?d.find(".swiper-slide-shadow-left"):d.find(".swiper-slide-shadow-top"),j=e.isHorizontal()?d.find(".swiper-slide-shadow-right"):d.find(".swiper-slide-shadow-bottom");C.length===0&&(C=fe(c,d,e.isHorizontal()?"left":"top")),j.length===0&&(j=fe(c,d,e.isHorizontal()?"right":"bottom")),C.length&&(C[0].style.opacity=Math.max(-l,0)),j.length&&(j[0].style.opacity=Math.max(l,0))}const x=`translate3d(${g}px, ${_}px, 0px) rotateX(${y}deg) rotateY(${m}deg)`;be(c,d).transform(x)}},setTransition:s=>{const{transformEl:o}=e.params.flipEffect;(o?e.slides.find(o):e.slides).transition(s).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(s),Ie({swiper:e,duration:s,transformEl:o})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function _s(t){let{swiper:e,extendParams:v,on:u}=t;v({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),we({effect:"coverflow",swiper:e,on:u,setTranslate:()=>{const{width:s,height:o,slides:c,slidesSizesGrid:w}=e,d=e.params.coverflowEffect,l=e.isHorizontal(),i=e.translate,p=l?-i+s/2:-i+o/2,m=l?d.rotate:-d.rotate,y=d.depth;for(let g=0,_=c.length;g<_;g+=1){const x=c.eq(g),b=w[g],C=x[0].swiperSlideOffset,j=(p-C-b/2)/b,T=typeof d.modifier=="function"?d.modifier(j):j*d.modifier;let R=l?m*T:0,V=l?0:m*T,q=-y*Math.abs(T),E=d.stretch;typeof E=="string"&&E.indexOf("%")!==-1&&(E=parseFloat(d.stretch)/100*b);let M=l?0:E*T,O=l?E*T:0,N=1-(1-d.scale)*Math.abs(T);Math.abs(O)<.001&&(O=0),Math.abs(M)<.001&&(M=0),Math.abs(q)<.001&&(q=0),Math.abs(R)<.001&&(R=0),Math.abs(V)<.001&&(V=0),Math.abs(N)<.001&&(N=0);const I=`translate3d(${O}px,${M}px,${q}px)  rotateX(${V}deg) rotateY(${R}deg) scale(${N})`;if(be(d,x).transform(I),x[0].style.zIndex=-Math.abs(Math.round(T))+1,d.slideShadows){let J=l?x.find(".swiper-slide-shadow-left"):x.find(".swiper-slide-shadow-top"),f=l?x.find(".swiper-slide-shadow-right"):x.find(".swiper-slide-shadow-bottom");J.length===0&&(J=fe(d,x,l?"left":"top")),f.length===0&&(f=fe(d,x,l?"right":"bottom")),J.length&&(J[0].style.opacity=T>0?T:0),f.length&&(f[0].style.opacity=-T>0?-T:0)}}},setTransition:s=>{const{transformEl:o}=e.params.coverflowEffect;(o?e.slides.find(o):e.slides).transition(s).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(s)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function gs(t){let{swiper:e,extendParams:v,on:u}=t;v({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const S=o=>typeof o=="string"?o:`${o}px`;we({effect:"creative",swiper:e,on:u,setTranslate:()=>{const{slides:o,$wrapperEl:c,slidesSizesGrid:w}=e,d=e.params.creativeEffect,{progressMultiplier:l}=d,i=e.params.centeredSlides;if(i){const p=w[0]/2-e.params.slidesOffsetBefore||0;c.transform(`translateX(calc(50% - ${p}px))`)}for(let p=0;p<o.length;p+=1){const m=o.eq(p),y=m[0].progress,g=Math.min(Math.max(m[0].progress,-d.limitProgress),d.limitProgress);let _=g;i||(_=Math.min(Math.max(m[0].originalProgress,-d.limitProgress),d.limitProgress));const x=m[0].swiperSlideOffset,b=[e.params.cssMode?-x-e.translate:-x,0,0],C=[0,0,0];let j=!1;e.isHorizontal()||(b[1]=b[0],b[0]=0);let T={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};g<0?(T=d.next,j=!0):g>0&&(T=d.prev,j=!0),b.forEach((N,I)=>{b[I]=`calc(${N}px + (${S(T.translate[I])} * ${Math.abs(g*l)}))`}),C.forEach((N,I)=>{C[I]=T.rotate[I]*Math.abs(g*l)}),m[0].style.zIndex=-Math.abs(Math.round(y))+o.length;const R=b.join(", "),V=`rotateX(${C[0]}deg) rotateY(${C[1]}deg) rotateZ(${C[2]}deg)`,q=_<0?`scale(${1+(1-T.scale)*_*l})`:`scale(${1-(1-T.scale)*_*l})`,E=_<0?1+(1-T.opacity)*_*l:1-(1-T.opacity)*_*l,M=`translate3d(${R}) ${V} ${q}`;if(j&&T.shadow||!j){let N=m.children(".swiper-slide-shadow");if(N.length===0&&T.shadow&&(N=fe(d,m)),N.length){const I=d.shadowPerProgress?g*(1/d.limitProgress):g;N[0].style.opacity=Math.min(Math.max(Math.abs(I),0),1)}}const O=be(d,m);O.transform(M).css({opacity:E}),T.origin&&O.css("transform-origin",T.origin)}},setTransition:o=>{const{transformEl:c}=e.params.creativeEffect;(c?e.slides.find(c):e.slides).transition(o).find(".swiper-slide-shadow").transition(o),Ie({swiper:e,duration:o,transformEl:c,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const vs=L({name:"swiper-example-advance",title:"Advance example",url:"file:///examples/vue-awesome-swiper/01-advance.vue",components:{Swiper:D,SwiperSlide:W},setup(){const t=l=>{console.log("SwiperComponentReady!",l)},e=l=>{console.log("handleHSwiperSlideChange!",l.realIndex)},v=ze(new Map),u=l=>v.get(l),S=l=>{v.set(l,!0),console.log("Click slide! target slide id:",l)};let h=null;const s=l=>{h=l},o=me();return{modules:[Xe,X,Q,Te],handleHSwiperReady:t,handleHSwiperSlideChange:e,handleHwiperSlideClick:S,isSlideClicked:u,setVSwiperRef:s,vSwiperIndex:o,updateVSwiperIndex:()=>{o.value=h==null?void 0:h.activeIndex},prevVSwiperSlide:()=>h==null?void 0:h.slidePrev(),nextVSwiperSlide:()=>h==null?void 0:h.slideNext()}}}),ie=t=>(ae("data-v-5ca3bcb8"),t=t(),oe(),t),Ss={class:"advance-example"},bs=ie(()=>$("span",null,"Loop Slide 1",-1)),ys=ie(()=>$("span",null,"Loop Slide 3",-1)),$s=ie(()=>$("span",null,"Loop Slide 4",-1)),xs=ie(()=>$("span",null,"Loop Slide 5",-1)),ks=ie(()=>$("span",null,"Loop Slide 6",-1)),Cs=a("swiperjs.com"),Es=ie(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),Ps=a(" discussions "),Ts=ie(()=>$("i",{class:"iconfont icon-link-external"},null,-1)),zs=a("Slide 3"),Ms=a("Slide 4"),Is=a("Slide 5"),js=a("Slide 6"),Os=["disabled"],Ns=ie(()=>$("i",{class:"iconfont icon-arrow-down"},null,-1)),As=[Ns],Vs=["disabled"],Rs=ie(()=>$("i",{class:"iconfont icon-arrow-up"},null,-1)),Ls=[Rs];function Hs(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper"),c=k("ulink");return P(),Z("div",Ss,[n(o,{class:"horizontal-swiper",modules:t.modules,loop:!0,"slides-per-view":3,"slides-per-group":3,"space-between":14,pagination:{clickable:!0},"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,"wrapper-tag":"div",onSwiper:t.handleHSwiperReady,onSlideChange:t.handleHSwiperSlideChange},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[bs]),_:1}),n(s,{class:"slide"},{default:r(w=>[$("pre",null,te(w),1)]),_:1}),n(s,{class:"slide"},{default:r(()=>[ys,$("button",{class:"click swiper-no-swiping",onClick:e[0]||(e[0]=is(w=>t.handleHwiperSlideClick(3),["prevent"]))},te(t.isSlideClicked(3)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),n(s,{class:"slide"},{default:r(()=>[$s,$("button",{class:"click swiper-no-swiping",onClick:e[1]||(e[1]=w=>t.handleHwiperSlideClick(4))},te(t.isSlideClicked(4)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),n(s,{class:"slide"},{default:r(()=>[xs,$("button",{class:"click swiper-no-swiping",onClick:e[2]||(e[2]=w=>t.handleHwiperSlideClick(5))},te(t.isSlideClicked(5)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1}),n(s,{class:"slide"},{default:r(()=>[ks,$("button",{class:"click swiper-no-swiping",onClick:e[3]||(e[3]=w=>t.handleHwiperSlideClick(6))},te(t.isSlideClicked(6)?"clicked \u2705":"click me \u{1F446}"),1)]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),n(o,{class:"vertical-swiper",modules:t.modules,direction:"vertical","slides-per-view":2,"space-between":18,mousewheel:!0,onSwiper:t.setVSwiperRef,onSlideChange:t.updateVSwiperIndex},{"container-start":r(()=>[$("button",{class:"nav-button-prev",disabled:t.vSwiperIndex===0,onClick:e[4]||(e[4]=(...w)=>t.prevVSwiperSlide&&t.prevVSwiperSlide(...w))},As,8,Os)]),"container-end":r(()=>[$("button",{class:"nav-button-next",disabled:t.vSwiperIndex===5-1,onClick:e[5]||(e[5]=(...w)=>t.nextVSwiperSlide&&t.nextVSwiperSlide(...w))},Ls,8,Vs)]),default:r(()=>[n(s,{class:"slide"},{default:r(()=>[n(c,{class:"link",href:"https://swiperjs.com/"},{default:r(()=>[Cs]),_:1}),Es]),_:1}),n(s,{class:"slide"},{default:r(()=>[n(c,{class:"link",href:"https://github.com/nolimits4web/swiper/discussions"},{default:r(()=>[Ps]),_:1}),Ts]),_:1}),n(s,{class:"slide"},{default:r(()=>[zs]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ms]),_:1}),n(s,{class:"slide"},{default:r(()=>[Is]),_:1}),n(s,{class:"slide"},{default:r(()=>[js]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])}var Ds=H(vs,[["render",Hs],["__scopeId","data-v-5ca3bcb8"]]),Ws=Object.freeze(Object.defineProperty({__proto__:null,default:Ds},Symbol.toStringTag,{value:"Module"}));const Ys=L({name:"swiper-example-default",title:"Default",url:"file:///examples/vue-awesome-swiper/02-default.vue",components:{Swiper:D,SwiperSlide:W}}),Xs=a("Slide 1"),qs=a("Slide 2"),Gs=a("Slide 3"),Bs=a("Slide 4"),Fs=a("Slide 5"),Us=a("Slide 6"),Ks=a("Slide 7"),Zs=a("Slide 8");function Js(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper"},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Xs]),_:1}),n(s,{class:"slide"},{default:r(()=>[qs]),_:1}),n(s,{class:"slide"},{default:r(()=>[Gs]),_:1}),n(s,{class:"slide"},{default:r(()=>[Bs]),_:1}),n(s,{class:"slide"},{default:r(()=>[Fs]),_:1}),n(s,{class:"slide"},{default:r(()=>[Us]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ks]),_:1}),n(s,{class:"slide"},{default:r(()=>[Zs]),_:1})]),_:1})}var Qs=H(Ys,[["render",Js],["__scopeId","data-v-2d564e9b"]]),er=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"}));const sr=L({name:"swiper-example-navigation",title:"Navigation",url:"file:///examples/vue-awesome-swiper/03-navigation.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[Q]}}}),rr=a("Slide 1"),ir=a("Slide 2"),nr=a("Slide 3"),tr=a("Slide 4"),lr=a("Slide 5"),ar=a("Slide 6"),or=a("Slide 7"),dr=a("Slide 8");function pr(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,navigation:""},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[rr]),_:1}),n(s,{class:"slide"},{default:r(()=>[ir]),_:1}),n(s,{class:"slide"},{default:r(()=>[nr]),_:1}),n(s,{class:"slide"},{default:r(()=>[tr]),_:1}),n(s,{class:"slide"},{default:r(()=>[lr]),_:1}),n(s,{class:"slide"},{default:r(()=>[ar]),_:1}),n(s,{class:"slide"},{default:r(()=>[or]),_:1}),n(s,{class:"slide"},{default:r(()=>[dr]),_:1})]),_:1},8,["modules"])}var cr=H(sr,[["render",pr],["__scopeId","data-v-f4d71ee2"]]),ur=Object.freeze(Object.defineProperty({__proto__:null,default:cr},Symbol.toStringTag,{value:"Module"}));const mr=L({name:"swiper-example-pagination",title:"Pagination",url:"file:///examples/vue-awesome-swiper/04-pagination.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),fr=a("Slide 1"),wr=a("Slide 2"),hr=a("Slide 3"),_r=a("Slide 4"),gr=a("Slide 5"),vr=a("Slide 6"),Sr=a("Slide 7"),br=a("Slide 8");function yr(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[fr]),_:1}),n(s,{class:"slide"},{default:r(()=>[wr]),_:1}),n(s,{class:"slide"},{default:r(()=>[hr]),_:1}),n(s,{class:"slide"},{default:r(()=>[_r]),_:1}),n(s,{class:"slide"},{default:r(()=>[gr]),_:1}),n(s,{class:"slide"},{default:r(()=>[vr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Sr]),_:1}),n(s,{class:"slide"},{default:r(()=>[br]),_:1})]),_:1},8,["modules"])}var $r=H(mr,[["render",yr],["__scopeId","data-v-3d9f8f1b"]]),xr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"}));const kr=L({name:"swiper-example-pagination-dynamic",title:"Pagination / Dynamic bullets",url:"file:///examples/vue-awesome-swiper/05-pagination-dynamic.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),Cr=a("Slide 1"),Er=a("Slide 2"),Pr=a("Slide 3"),Tr=a("Slide 4"),zr=a("Slide 5"),Mr=a("Slide 6"),Ir=a("Slide 7"),jr=a("Slide 8");function Or(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,pagination:{clickable:!0,dynamicBullets:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Cr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Er]),_:1}),n(s,{class:"slide"},{default:r(()=>[Pr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Tr]),_:1}),n(s,{class:"slide"},{default:r(()=>[zr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Mr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ir]),_:1}),n(s,{class:"slide"},{default:r(()=>[jr]),_:1})]),_:1},8,["modules"])}var Nr=H(kr,[["render",Or],["__scopeId","data-v-45a86f5b"]]),Ar=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"}));const Vr=L({name:"swiper-example-pagination-progress",title:"Progress pagination",url:"file:///examples/vue-awesome-swiper/06-pagination-progress.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),Rr=a("Slide 1"),Lr=a("Slide 2"),Hr=a("Slide 3"),Dr=a("Slide 4"),Wr=a("Slide 5"),Yr=a("Slide 6"),Xr=a("Slide 7"),qr=a("Slide 8");function Gr(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,pagination:{type:"progressbar"}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Rr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Lr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Hr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Dr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Wr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Yr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Xr]),_:1}),n(s,{class:"slide"},{default:r(()=>[qr]),_:1})]),_:1},8,["modules"])}var Br=H(Vr,[["render",Gr],["__scopeId","data-v-42e50b2c"]]),Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Br},Symbol.toStringTag,{value:"Module"}));const Ur=L({name:"swiper-example-pagination-fraction",title:"Fraction pagination",url:"file:///examples/vue-awesome-swiper/07-pagination-fraction.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),Kr=a("Slide 1"),Zr=a("Slide 2"),Jr=a("Slide 3"),Qr=a("Slide 4"),ei=a("Slide 5"),si=a("Slide 6"),ri=a("Slide 7"),ii=a("Slide 8");function ni(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,pagination:{type:"fraction"}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Kr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Zr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Jr]),_:1}),n(s,{class:"slide"},{default:r(()=>[Qr]),_:1}),n(s,{class:"slide"},{default:r(()=>[ei]),_:1}),n(s,{class:"slide"},{default:r(()=>[si]),_:1}),n(s,{class:"slide"},{default:r(()=>[ri]),_:1}),n(s,{class:"slide"},{default:r(()=>[ii]),_:1})]),_:1},8,["modules"])}var ti=H(Ur,[["render",ni],["__scopeId","data-v-d2f7cb18"]]),li=Object.freeze(Object.defineProperty({__proto__:null,default:ti},Symbol.toStringTag,{value:"Module"}));const ai=L({name:"swiper-example-pagination-custom",title:"Custom pagination",url:"file:///examples/vue-awesome-swiper/08-pagination-custom.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{bulletRenderer:(e,v)=>`<span class="${`${v} swiper-pagination-bullet-custom`}">${e+1}</span>`,modules:[X]}}}),oi=a("Slide 1"),di=a("Slide 2"),pi=a("Slide 3"),ci=a("Slide 4"),ui=a("Slide 5"),mi=a("Slide 6"),fi=a("Slide 7"),wi=a("Slide 8");function hi(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,pagination:{clickable:!0,renderBullet:t.bulletRenderer}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[oi]),_:1}),n(s,{class:"slide"},{default:r(()=>[di]),_:1}),n(s,{class:"slide"},{default:r(()=>[pi]),_:1}),n(s,{class:"slide"},{default:r(()=>[ci]),_:1}),n(s,{class:"slide"},{default:r(()=>[ui]),_:1}),n(s,{class:"slide"},{default:r(()=>[mi]),_:1}),n(s,{class:"slide"},{default:r(()=>[fi]),_:1}),n(s,{class:"slide"},{default:r(()=>[wi]),_:1})]),_:1},8,["modules","pagination"])}var _i=H(ai,[["render",hi],["__scopeId","data-v-4f5b0a94"]]),gi=Object.freeze(Object.defineProperty({__proto__:null,default:_i},Symbol.toStringTag,{value:"Module"}));const vi=L({name:"swiper-example-scrollbar",title:"Scrollbar",url:"file:///examples/vue-awesome-swiper/09-scrollbar.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[Me]}}}),Si=a("Slide 1"),bi=a("Slide 2"),yi=a("Slide 3"),$i=a("Slide 4"),xi=a("Slide 5"),ki=a("Slide 6"),Ci=a("Slide 7"),Ei=a("Slide 8");function Pi(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,scrollbar:{hide:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Si]),_:1}),n(s,{class:"slide"},{default:r(()=>[bi]),_:1}),n(s,{class:"slide"},{default:r(()=>[yi]),_:1}),n(s,{class:"slide"},{default:r(()=>[$i]),_:1}),n(s,{class:"slide"},{default:r(()=>[xi]),_:1}),n(s,{class:"slide"},{default:r(()=>[ki]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ci]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ei]),_:1})]),_:1},8,["modules"])}var Ti=H(vi,[["render",Pi],["__scopeId","data-v-74bd5600"]]),zi=Object.freeze(Object.defineProperty({__proto__:null,default:Ti},Symbol.toStringTag,{value:"Module"}));const Mi=L({name:"swiper-example-vertical",title:"Vertical slider",url:"file:///examples/vue-awesome-swiper/10-vertical.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),Ii=a("Slide 1"),ji=a("Slide 2"),Oi=a("Slide 3"),Ni=a("Slide 4"),Ai=a("Slide 5"),Vi=a("Slide 6"),Ri=a("Slide 7"),Li=a("Slide 8");function Hi(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,direction:"vertical",pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Ii]),_:1}),n(s,{class:"slide"},{default:r(()=>[ji]),_:1}),n(s,{class:"slide"},{default:r(()=>[Oi]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ni]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ai]),_:1}),n(s,{class:"slide"},{default:r(()=>[Vi]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ri]),_:1}),n(s,{class:"slide"},{default:r(()=>[Li]),_:1})]),_:1},8,["modules"])}var Di=H(Mi,[["render",Hi],["__scopeId","data-v-00c392d4"]]),Wi=Object.freeze(Object.defineProperty({__proto__:null,default:Di},Symbol.toStringTag,{value:"Module"}));const Yi=L({name:"swiper-example-space-between",title:"Space between slides",url:"file:///examples/vue-awesome-swiper/11-space-between.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),Xi=a("Slide 1"),qi=a("Slide 2"),Gi=a("Slide 3"),Bi=a("Slide 4"),Fi=a("Slide 5"),Ui=a("Slide 6"),Ki=a("Slide 7"),Zi=a("Slide 8");function Ji(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Xi]),_:1}),n(s,{class:"slide"},{default:r(()=>[qi]),_:1}),n(s,{class:"slide"},{default:r(()=>[Gi]),_:1}),n(s,{class:"slide"},{default:r(()=>[Bi]),_:1}),n(s,{class:"slide"},{default:r(()=>[Fi]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ui]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ki]),_:1}),n(s,{class:"slide"},{default:r(()=>[Zi]),_:1})]),_:1},8,["modules"])}var Qi=H(Yi,[["render",Ji],["__scopeId","data-v-047ec236"]]),en=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"}));const sn=L({name:"swiper-example-multiple-slides-per-biew",title:"Multiple slides per view",url:"file:///examples/vue-awesome-swiper/12-slides-per-view.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),rn=a("Slide 1"),nn=a("Slide 2"),tn=a("Slide 3"),ln=a("Slide 4"),an=a("Slide 5"),on=a("Slide 6"),dn=a("Slide 7"),pn=a("Slide 8");function cn(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[rn]),_:1}),n(s,{class:"slide"},{default:r(()=>[nn]),_:1}),n(s,{class:"slide"},{default:r(()=>[tn]),_:1}),n(s,{class:"slide"},{default:r(()=>[ln]),_:1}),n(s,{class:"slide"},{default:r(()=>[an]),_:1}),n(s,{class:"slide"},{default:r(()=>[on]),_:1}),n(s,{class:"slide"},{default:r(()=>[dn]),_:1}),n(s,{class:"slide"},{default:r(()=>[pn]),_:1})]),_:1},8,["modules"])}var un=H(sn,[["render",cn],["__scopeId","data-v-fbdc3610"]]),mn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"}));const fn=L({name:"swiper-example-slides-per-view-auto",title:"Slides per view auto",url:"file:///examples/vue-awesome-swiper/13-slides-per-view-auto.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),wn=a("Slide 1"),hn=a("Slide 2"),_n=a("Slide 3"),gn=a("Slide 4"),vn=a("Slide 5"),Sn=a("Slide 6"),bn=a("Slide 7"),yn=a("Slide 8");function $n(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":"auto",pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[wn]),_:1}),n(s,{class:"slide"},{default:r(()=>[hn]),_:1}),n(s,{class:"slide"},{default:r(()=>[_n]),_:1}),n(s,{class:"slide"},{default:r(()=>[gn]),_:1}),n(s,{class:"slide"},{default:r(()=>[vn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Sn]),_:1}),n(s,{class:"slide"},{default:r(()=>[bn]),_:1}),n(s,{class:"slide"},{default:r(()=>[yn]),_:1})]),_:1},8,["modules"])}var xn=H(fn,[["render",$n],["__scopeId","data-v-0a7f2334"]]),kn=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"}));const Cn=L({name:"swiper-example-centered-slides",title:"Centered slides",url:"file:///examples/vue-awesome-swiper/14-centered.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),En=a("Slide 1"),Pn=a("Slide 2"),Tn=a("Slide 3"),zn=a("Slide 4"),Mn=a("Slide 5"),In=a("Slide 6"),jn=a("Slide 7"),On=a("Slide 8");function Nn(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":4,"centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[En]),_:1}),n(s,{class:"slide"},{default:r(()=>[Pn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Tn]),_:1}),n(s,{class:"slide"},{default:r(()=>[zn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Mn]),_:1}),n(s,{class:"slide"},{default:r(()=>[In]),_:1}),n(s,{class:"slide"},{default:r(()=>[jn]),_:1}),n(s,{class:"slide"},{default:r(()=>[On]),_:1})]),_:1},8,["modules"])}var An=H(Cn,[["render",Nn],["__scopeId","data-v-42d07bd0"]]),Vn=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"}));const Rn=L({name:"swiper-example-centered-auto",title:"Centered slides + auto slides per view",url:"file:///examples/vue-awesome-swiper/15-centered-auto.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),Ln=a("Slide 1"),Hn=a("Slide 2"),Dn=a("Slide 3"),Wn=a("Slide 4"),Yn=a("Slide 5"),Xn=a("Slide 6"),qn=a("Slide 7"),Gn=a("Slide 8");function Bn(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":"auto","centered-slides":!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Ln]),_:1}),n(s,{class:"slide"},{default:r(()=>[Hn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Dn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Wn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Yn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Xn]),_:1}),n(s,{class:"slide"},{default:r(()=>[qn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Gn]),_:1})]),_:1},8,["modules"])}var Fn=H(Rn,[["render",Bn],["__scopeId","data-v-2ed88a62"]]),Un=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"}));const Kn=L({name:"swiper-example-free-mode",title:"Free mode / no fixed positions",url:"file:///examples/vue-awesome-swiper/16-freemode.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Ye]}}}),Zn=a("Slide 1"),Jn=a("Slide 2"),Qn=a("Slide 3"),et=a("Slide 4"),st=a("Slide 5"),rt=a("Slide 6"),it=a("Slide 7"),nt=a("Slide 8");function tt(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,"free-mode":!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Zn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Jn]),_:1}),n(s,{class:"slide"},{default:r(()=>[Qn]),_:1}),n(s,{class:"slide"},{default:r(()=>[et]),_:1}),n(s,{class:"slide"},{default:r(()=>[st]),_:1}),n(s,{class:"slide"},{default:r(()=>[rt]),_:1}),n(s,{class:"slide"},{default:r(()=>[it]),_:1}),n(s,{class:"slide"},{default:r(()=>[nt]),_:1})]),_:1},8,["modules"])}var lt=H(Kn,[["render",tt],["__scopeId","data-v-7d7432d2"]]),at=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));const ot=L({name:"swiper-example-scroll-container",title:"Scroll container",url:"file:///examples/vue-awesome-swiper/17-scroll-container.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Ye,Me,Te]}}}),B=t=>(ae("data-v-7727eb4e"),t=t(),oe(),t),dt=B(()=>$("h2",null,"I Have a Dream",-1)),pt=B(()=>$("p",null," I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. ",-1)),ct=B(()=>$("p",null," Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. ",-1)),ut=B(()=>$("p",null," But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languishing in the corners of American society and finds himself an exile in his own land. So we have come here today to dramatize a shameful condition. ",-1)),mt=B(()=>$("p",null," In a sense we have come to our nation's capital to cash a check. When the architects of our republic wrote the magnificent words of the Constitution and the Declaration of Independence, they were signing a promissory note to which every American was to fall heir. This note was a promise that all men, yes, black men as well as white men, would be guaranteed the unalienable rights of life, liberty, and the pursuit of happiness. ",-1)),ft=B(()=>$("p",null,` It is obvious today that America has defaulted on this promissory note insofar as her citizens of color are concerned. Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked "insufficient funds." But we refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check \u2014 a check that will give us upon demand the riches of freedom and the security of justice. We have also come to this hallowed spot to remind America of the fierce urgency of now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy. Now is the time to rise from the dark and desolate valley of segregation to the sunlit path of racial justice. Now is the time to lift our nation from the quick sands of racial injustice to the solid rock of brotherhood. Now is the time to make justice a reality for all of God's children. `,-1)),wt=B(()=>$("p",null," It would be fatal for the nation to overlook the urgency of the moment. This sweltering summer of the Negro's legitimate discontent will not pass until there is an invigorating autumn of freedom and equality. Nineteen sixty-three is not an end, but a beginning. Those who hope that the Negro needed to blow off steam and will now be content will have a rude awakening if the nation returns to business as usual. There will be neither rest nor tranquility in America until the Negro is granted his citizenship rights. The whirlwinds of revolt will continue to shake the foundations of our nation until the bright day of justice emerges. ",-1)),ht=B(()=>$("p",null," But there is something that I must say to my people who stand on the warm threshold which leads into the palace of justice. In the process of gaining our rightful place we must not be guilty of wrongful deeds. Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",-1)),_t=B(()=>$("p",null," We must forever conduct our struggle on the high plane of dignity and discipline. We must not allow our creative protest to degenerate into physical violence. Again and again we must rise to the majestic heights of meeting physical force with soul force. The marvelous new militancy which has engulfed the Negro community must not lead us to distrust of all white people, for many of our white brothers, as evidenced by their presence here today, have come to realize that their destiny is tied up with our destiny and their freedom is inextricably bound to our freedom. We cannot walk alone. ",-1)),gt=B(()=>$("p",null,' As we walk, we must make the pledge that we shall march ahead. We cannot turn back. There are those who are asking the devotees of civil rights, "When will you be satisfied?" We can never be satisfied as long as the Negro is the victim of the unspeakable horrors of police brutality. We can never be satisfied, as long as our bodies, heavy with the fatigue of travel, cannot gain lodging in the motels of the highways and the hotels of the cities. We can never be satisfied as long as a Negro in Mississippi cannot vote and a Negro in New York believes he has nothing for which to vote. No, no, we are not satisfied, and we will not be satisfied until justice rolls down like waters and righteousness like a mighty stream. ',-1)),vt=B(()=>$("p",null," I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive. ",-1)),St=B(()=>$("p",null," Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair. ",-1)),bt=B(()=>$("p",null," I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. ",-1)),yt=B(()=>$("p",null,' I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident: that all men are created equal." ',-1)),$t=B(()=>$("p",null," I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. ",-1)),xt=B(()=>$("p",null," I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. ",-1)),kt=B(()=>$("p",null," I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ",-1)),Ct=B(()=>$("p",null,"I have a dream today.",-1)),Et=B(()=>$("p",null," I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of interposition and nullification; one day right there in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. ",-1)),Pt=B(()=>$("p",null,"I have a dream today.",-1)),Tt=B(()=>$("p",null," I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed, and all flesh shall see it together. ",-1)),zt=B(()=>$("p",null," This is our hope. This is the faith that I go back to the South with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day. ",-1)),Mt=B(()=>$("p",null,` This will be the day when all of God's children will be able to sing with a new meaning, "My country, 'tis of thee, sweet land of liberty, of thee I sing. Land where my fathers died, land of the pilgrim's pride, from every mountainside, let freedom ring." `,-1)),It=B(()=>$("p",null," And if America is to be a great nation this must become true. So let freedom ring from the prodigious hilltops of New Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening Alleghenies of Pennsylvania! ",-1)),jt=B(()=>$("p",null,"Let freedom ring from the snowcapped Rockies of Colorado!",-1)),Ot=B(()=>$("p",null,"Let freedom ring from the curvaceous slopes of California!",-1)),Nt=B(()=>$("p",null,"But not only that; let freedom ring from Stone Mountain of Georgia!",-1)),At=B(()=>$("p",null,"Let freedom ring from Lookout Mountain of Tennessee!",-1)),Vt=B(()=>$("p",null," Let freedom ring from every hill and molehill of Mississippi. From every mountainside, let freedom ring. ",-1)),Rt=B(()=>$("p",null,` And when this happens, When we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! free at last! thank God Almighty, we are free at last!" `,-1));function Lt(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,direction:"vertical","slides-per-view":"auto","free-mode":!0,scrollbar:!0,mousewheel:!0},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[dt,pt,ct,ut,mt,ft,wt,ht,_t,gt,vt,St,bt,yt,$t,xt,kt,Ct,Et,Pt,Tt,zt,Mt,It,jt,Ot,Nt,At,Vt,Rt]),_:1})]),_:1},8,["modules"])}var Ht=H(ot,[["render",Lt],["__scopeId","data-v-7727eb4e"]]),Dt=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"}));const Wt=L({name:"swiper-example-slides-per-column",title:"Multi row slides layout",url:"file:///examples/vue-awesome-swiper/18-slides-per-column.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Xe]}}}),Yt=a("Slide 1"),Xt=a("Slide 2"),qt=a("Slide 3"),Gt=a("Slide 4"),Bt=a("Slide 5"),Ft=a("Slide 6"),Ut=a("Slide 7"),Kt=a("Slide 8"),Zt=a("Slide 9"),Jt=a("Slide 10");function Qt(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"slides-per-view":3,grid:{rows:2},"space-between":30,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Yt]),_:1}),n(s,{class:"slide"},{default:r(()=>[Xt]),_:1}),n(s,{class:"slide"},{default:r(()=>[qt]),_:1}),n(s,{class:"slide"},{default:r(()=>[Gt]),_:1}),n(s,{class:"slide"},{default:r(()=>[Bt]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ft]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ut]),_:1}),n(s,{class:"slide"},{default:r(()=>[Kt]),_:1}),n(s,{class:"slide"},{default:r(()=>[Zt]),_:1}),n(s,{class:"slide"},{default:r(()=>[Jt]),_:1})]),_:1},8,["modules"])}var el=H(Wt,[["render",Qt],["__scopeId","data-v-e0e2afd2"]]),sl=Object.freeze(Object.defineProperty({__proto__:null,default:el},Symbol.toStringTag,{value:"Module"}));const rl=L({name:"swiper-example-nested",title:"Nested swipers",url:"file:///examples/vue-awesome-swiper/19-nested.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),il=a("Horizontal Slide 1"),nl=a("Vertical Slide 1"),tl=a("Vertical Slide 2"),ll=a("Vertical Slide 3"),al=a("Vertical Slide 4"),ol=a("Vertical Slide 5"),dl=a("Horizontal Slide 3"),pl=a("Horizontal Slide 4");function cl(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper swiper-h",modules:t.modules,"space-between":50,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[il]),_:1}),n(s,{class:"slide"},{default:r(()=>[n(o,{class:"swiper-v",modules:t.modules,direction:"vertical",spaceBetween:50,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[nl]),_:1}),n(s,{class:"slide"},{default:r(()=>[tl]),_:1}),n(s,{class:"slide"},{default:r(()=>[ll]),_:1}),n(s,{class:"slide"},{default:r(()=>[al]),_:1}),n(s,{class:"slide"},{default:r(()=>[ol]),_:1})]),_:1},8,["modules"])]),_:1}),n(s,{class:"slide"},{default:r(()=>[dl]),_:1}),n(s,{class:"slide"},{default:r(()=>[pl]),_:1})]),_:1},8,["modules"])}var ul=H(rl,[["render",cl],["__scopeId","data-v-11d1afb5"]]),ml=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"}));const fl=L({name:"swiper-example-grab-cursor",title:"Grab cursor",url:"file:///examples/vue-awesome-swiper/20-grab-cursor.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),wl=a("Slide 1"),hl=a("Slide 2"),_l=a("Slide 3"),gl=a("Slide 4"),vl=a("Slide 5"),Sl=a("Slide 6"),bl=a("Slide 7"),yl=a("Slide 8");function $l(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"slides-per-view":4,"centered-slides":!0,"space-between":30,"grab-cursor":!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[wl]),_:1}),n(s,{class:"slide"},{default:r(()=>[hl]),_:1}),n(s,{class:"slide"},{default:r(()=>[_l]),_:1}),n(s,{class:"slide"},{default:r(()=>[gl]),_:1}),n(s,{class:"slide"},{default:r(()=>[vl]),_:1}),n(s,{class:"slide"},{default:r(()=>[Sl]),_:1}),n(s,{class:"slide"},{default:r(()=>[bl]),_:1}),n(s,{class:"slide"},{default:r(()=>[yl]),_:1})]),_:1},8,["modules"])}var xl=H(fl,[["render",$l],["__scopeId","data-v-2fe16efa"]]),kl=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"}));const Cl=L({name:"swiper-example-loop",title:"Loop mode / Infinite loop",url:"file:///examples/vue-awesome-swiper/21-infinite-loop.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q]}}}),El=a("Slide 1"),Pl=a("Slide 2"),Tl=a("Slide 3"),zl=a("Slide 4"),Ml=a("Slide 5"),Il=a("Slide 6"),jl=a("Slide 7"),Ol=a("Slide 8");function Nl(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":30,loop:!0,pagination:{clickable:!0},navigation:!0},{default:r(()=>[n(s,null,{default:r(()=>[El]),_:1}),n(s,null,{default:r(()=>[Pl]),_:1}),n(s,null,{default:r(()=>[Tl]),_:1}),n(s,null,{default:r(()=>[zl]),_:1}),n(s,null,{default:r(()=>[Ml]),_:1}),n(s,null,{default:r(()=>[Il]),_:1}),n(s,null,{default:r(()=>[jl]),_:1}),n(s,null,{default:r(()=>[Ol]),_:1})]),_:1},8,["modules"])}var Al=H(Cl,[["render",Nl],["__scopeId","data-v-d17316b8"]]),Vl=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"}));const Rl=L({name:"swiper-example-loop-group",title:"Loop mode with multiple slides per group",url:"file:///examples/vue-awesome-swiper/22-infinite-loop-with-slides-per-group.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q]}}}),Ll=a("Slide 1"),Hl=a("Slide 2"),Dl=a("Slide 3"),Wl=a("Slide 4"),Yl=a("Slide 5"),Xl=a("Slide 6"),ql=a("Slide 7"),Gl=a("Slide 8");function Bl(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"slides-per-view":3,"slides-per-group":3,loop:!0,"loop-fill-group-with-blank":!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[n(s,null,{default:r(()=>[Ll]),_:1}),n(s,null,{default:r(()=>[Hl]),_:1}),n(s,null,{default:r(()=>[Dl]),_:1}),n(s,null,{default:r(()=>[Wl]),_:1}),n(s,null,{default:r(()=>[Yl]),_:1}),n(s,null,{default:r(()=>[Xl]),_:1}),n(s,null,{default:r(()=>[ql]),_:1}),n(s,null,{default:r(()=>[Gl]),_:1})]),_:1},8,["modules"])}var Fl=H(Rl,[["render",Bl],["__scopeId","data-v-27ac816a"]]),Ul=Object.freeze(Object.defineProperty({__proto__:null,default:Fl},Symbol.toStringTag,{value:"Module"}));const Kl=L({name:"swiper-example-slides-per-group-skip",title:"Slides per group skip",url:"file:///examples/vue-awesome-swiper/23-slides-per-group-skip.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[We,Me,Q,X]}}}),Zl=a("Slide 1"),Jl=a("Slide 2"),Ql=a("Slide 3"),ea=a("Slide 4"),sa=a("Slide 5"),ra=a("Slide 6"),ia=a("Slide 7");function na(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"slides-per-view":2,"slides-per-group":2,"slides-per-group-skip":1,"centered-slides":!1,"grab-cursor":!0,keyboard:{enabled:!0},scrollbar:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Zl]),_:1}),n(s,{class:"slide"},{default:r(()=>[Jl]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ql]),_:1}),n(s,{class:"slide"},{default:r(()=>[ea]),_:1}),n(s,{class:"slide"},{default:r(()=>[sa]),_:1}),n(s,{class:"slide"},{default:r(()=>[ra]),_:1}),n(s,{class:"slide"},{default:r(()=>[ia]),_:1})]),_:1},8,["modules"])}var ta=H(Kl,[["render",na],["__scopeId","data-v-c61be192"]]),la=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"}));const aa=L({name:"swiper-example-fade-effect",title:"Fade effect",url:"file:///examples/vue-awesome-swiper/24-effect-fade.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q,fs]}}}),oa=["src"];function da(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,effect:"fade",navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(P(),Z(ee,null,se(5,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,oa)]),_:2},1024)),64))]),_:1},8,["modules"])}var pa=H(aa,[["render",da],["__scopeId","data-v-46fcf722"]]),ca=Object.freeze(Object.defineProperty({__proto__:null,default:pa},Symbol.toStringTag,{value:"Module"}));const ua=L({name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",url:"file:///examples/vue-awesome-swiper/25-effect-coverflow.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,_s]}}}),ma={class:"coverflow-example"},fa=["src"];function wa(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z("div",ma,[n(o,{class:"swiper",modules:t.modules,pagination:!0,effect:"coverflow","grab-cursor":!0,"centered-slides":!0,"slides-per-view":"auto","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},{default:r(()=>[(P(),Z(ee,null,se(8,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,fa)]),_:2},1024)),64))]),_:1},8,["modules"])])}var ha=H(ua,[["render",wa],["__scopeId","data-v-d2f7e430"]]),_a=Object.freeze(Object.defineProperty({__proto__:null,default:ha},Symbol.toStringTag,{value:"Module"}));const ga=L({name:"swiper-example-3d-cube",title:"3D Cube effect",url:"file:///examples/vue-awesome-swiper/26-effect-cube.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,ws]}}}),va={class:"cube-example"},Sa=["src"];function ba(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z("div",va,[n(o,{class:"swiper",modules:t.modules,pagination:!0,effect:"cube","grab-cursor":!0,"cube-effect":{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},{default:r(()=>[(P(),Z(ee,null,se(5,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,Sa)]),_:2},1024)),64))]),_:1},8,["modules","cube-effect"])])}var ya=H(ga,[["render",ba],["__scopeId","data-v-563f7ae5"]]),$a=Object.freeze(Object.defineProperty({__proto__:null,default:ya},Symbol.toStringTag,{value:"Module"}));const xa=L({name:"swiper-example-3d-flip",title:"3D Flip effect",url:"file:///examples/vue-awesome-swiper/27-effect-flip.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q,hs]}}}),ka={class:"flip-example"},Ca=["src"];function Ea(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z("div",ka,[n(o,{class:"swiper",modules:t.modules,effect:"flip","grab-cursor":!0,pagination:!0,navigation:!0},{default:r(()=>[(P(),Z(ee,null,se(6,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,Ca)]),_:2},1024)),64))]),_:1},8,["modules"])])}var Pa=H(xa,[["render",Ea],["__scopeId","data-v-2c7827a1"]]),Ta=Object.freeze(Object.defineProperty({__proto__:null,default:Pa},Symbol.toStringTag,{value:"Module"}));const za=L({name:"swiper-example-effect-creative",title:"Creative effect",url:"file:///examples/vue-awesome-swiper/28-effect-creative.vue",components:{Swiper:D,SwiperSlide:W},setup(){const t=me(!0),e=me(0);return{effects:[{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:["-120%",0,-500]},next:{shadow:!0,translate:["120%",0,-500]}},{prev:{shadow:!0,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},{prev:{shadow:!0,translate:[0,0,-800],rotate:[180,0,0]},next:{shadow:!0,translate:[0,0,-800],rotate:[-180,0,0]}},{prev:{shadow:!0,translate:["-125%",0,-800],rotate:[0,0,-90]},next:{shadow:!0,translate:["125%",0,-800],rotate:[0,0,90]}},{prev:{shadow:!0,origin:"left center",translate:["-5%",0,-200],rotate:[0,100,0]},next:{origin:"right center",translate:["5%",0,-200],rotate:[0,-100,0]}}],effectIndex:e,render:t,setEffect:S=>{e.value=S,Re(()=>{t.value=!1,Re(()=>{t.value=!0})})},modules:[X,gs]}}}),Ma={class:"creative-example"},Ia={class:"toolbar"},ja=["onClick"],Oa=["src"];function Na(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z("div",Ma,[$("div",Ia,[(P(!0),Z(ee,null,se(t.effects,(c,w)=>(P(),Z("button",{key:w,onClick:d=>t.setEffect(w)}," Effect "+te(w),9,ja))),128))]),t.render?(P(),Y(o,{key:0,class:"swiper",modules:t.modules,effect:"creative","creative-effect":t.effects[t.effectIndex],"grab-cursor":!0,pagination:!0},{default:r(()=>[(P(),Z(ee,null,se(6,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,Oa)]),_:2},1024)),64))]),_:1},8,["modules","creative-effect"])):ns("",!0)])}var Aa=H(za,[["render",Na],["__scopeId","data-v-2260cdc6"]]),Va=Object.freeze(Object.defineProperty({__proto__:null,default:Aa},Symbol.toStringTag,{value:"Module"}));const Ra=L({name:"swiper-example-keyboard-control",title:"Keyboard control",url:"file:///examples/vue-awesome-swiper/29-keyboard-control.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q,We]}}}),La=a("Slide 1"),Ha=a("Slide 2"),Da=a("Slide 3"),Wa=a("Slide 4"),Ya=a("Slide 5"),Xa=a("Slide 6"),qa=a("Slide 7"),Ga=a("Slide 8");function Ba(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":30,keyboard:{enabled:!0},pagination:{clickable:!0},navigation:!0},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[La]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ha]),_:1}),n(s,{class:"slide"},{default:r(()=>[Da]),_:1}),n(s,{class:"slide"},{default:r(()=>[Wa]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ya]),_:1}),n(s,{class:"slide"},{default:r(()=>[Xa]),_:1}),n(s,{class:"slide"},{default:r(()=>[qa]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ga]),_:1})]),_:1},8,["modules"])}var Fa=H(Ra,[["render",Ba],["__scopeId","data-v-a035dc6c"]]),Ua=Object.freeze(Object.defineProperty({__proto__:null,default:Fa},Symbol.toStringTag,{value:"Module"}));const Ka=L({name:"swiper-example-mousewheel-control",title:"Mousewheel control",url:"file:///examples/vue-awesome-swiper/30-mousewheel-control.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Te]}}}),Za=a("Slide 1"),Ja=a("Slide 2"),Qa=a("Slide 3"),eo=a("Slide 4"),so=a("Slide 5"),ro=a("Slide 6"),io=a("Slide 7"),no=a("Slide 8");function to(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,direction:"vertical","slides-per-view":1,"space-between":30,mousewheel:!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Za]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ja]),_:1}),n(s,{class:"slide"},{default:r(()=>[Qa]),_:1}),n(s,{class:"slide"},{default:r(()=>[eo]),_:1}),n(s,{class:"slide"},{default:r(()=>[so]),_:1}),n(s,{class:"slide"},{default:r(()=>[ro]),_:1}),n(s,{class:"slide"},{default:r(()=>[io]),_:1}),n(s,{class:"slide"},{default:r(()=>[no]),_:1})]),_:1},8,["modules"])}var lo=H(Ka,[["render",to],["__scopeId","data-v-6d7de3c9"]]),ao=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"}));const oo=L({name:"swiper-example-autoplay",title:"Autoplay",url:"file:///examples/vue-awesome-swiper/31-autoplay.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q,us]}}}),po=a("Slide 1"),co=a("Slide 2"),uo=a("Slide 3"),mo=a("Slide 4"),fo=a("Slide 5"),wo=a("Slide 6"),ho=a("Slide 7"),_o=a("Slide 8");function go(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"space-between":30,"centered-slides":!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[po]),_:1}),n(s,{class:"slide"},{default:r(()=>[co]),_:1}),n(s,{class:"slide"},{default:r(()=>[uo]),_:1}),n(s,{class:"slide"},{default:r(()=>[mo]),_:1}),n(s,{class:"slide"},{default:r(()=>[fo]),_:1}),n(s,{class:"slide"},{default:r(()=>[wo]),_:1}),n(s,{class:"slide"},{default:r(()=>[ho]),_:1}),n(s,{class:"slide"},{default:r(()=>[_o]),_:1})]),_:1},8,["modules"])}var vo=H(oo,[["render",go],["__scopeId","data-v-de882fd0"]]),So=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"}));const bo=L({name:"swiper-example-dynamic-slides",title:"Dynamic slides",url:"file:///examples/vue-awesome-swiper/32-dynamic-slides.vue",components:{Swiper:D,SwiperSlide:W},setup(){const t=ze([1,2,3,4,5]);return{modules:[X,Q],slides:t,appendSlide:()=>t.push(t.length+1),prependSlide:()=>t.unshift(t[0]-1),popSlide:()=>t.pop(),shiftSlide:()=>t.shift()}}}),yo={class:"dynamic-example"},$o={class:"toolbar"};function xo(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z("div",yo,[$("div",$o,[$("button",{onClick:e[0]||(e[0]=(...c)=>t.prependSlide&&t.prependSlide(...c))},"Prepend slide"),$("button",{onClick:e[1]||(e[1]=(...c)=>t.appendSlide&&t.appendSlide(...c))},"Append slide"),$("button",{onClick:e[2]||(e[2]=(...c)=>t.popSlide&&t.popSlide(...c))},"Pop slide"),$("button",{onClick:e[3]||(e[3]=(...c)=>t.shiftSlide&&t.shiftSlide(...c))},"Shift slide")]),n(o,{class:"swiper","slides-per-view":3,"centered-slides":!0,"space-between":30,pagination:{type:"fraction"},navigation:!0,modules:t.modules},{default:r(()=>[(P(!0),Z(ee,null,se(t.slides,c=>(P(),Y(s,{key:c,class:"slide"},{default:r(()=>[a(" Slide "+te(c),1)]),_:2},1024))),128))]),_:1},8,["modules"])])}var ko=H(bo,[["render",xo],["__scopeId","data-v-4c8fff06"]]),Co=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"}));const Eo=L({name:"swiper-example-thumbs-gallery",title:"Thumbs gallery with Two-way control",url:"file:///examples/vue-awesome-swiper/33-thumbs-gallery.vue",components:{Swiper:D,SwiperSlide:W},setup(){const t=me();return{modules:[Q,ms],setThumbsSwiper:v=>{t.value=v},thumbsSwiper:t}}}),Po={class:"thumb-example"},To=["src"],zo=["src"];function Mo(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z("div",Po,[n(o,{class:"top-swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,"space-between":10,navigation:!0,thumbs:{swiper:t.thumbsSwiper}},{default:r(()=>[(P(),Z(ee,null,se(8,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,To)]),_:2},1024)),64))]),_:1},8,["modules","thumbs"]),n(o,{class:"thumbs-swiper",modules:t.modules,"space-between":10,"slides-per-view":4,"watch-slides-progress":!0,"prevent-clicks":!1,"prevent-clicks-propagation":!1,onSwiper:t.setThumbsSwiper},{default:r(()=>[(P(),Z(ee,null,se(8,c=>n(s,{class:"slide",key:c},{default:r(()=>[$("img",{src:`/images/example/${c}.jpg`},null,8,zo)]),_:2},1024)),64))]),_:1},8,["modules","onSwiper"])])}var Io=H(Eo,[["render",Mo],["__scopeId","data-v-4ade2337"]]),jo=Object.freeze(Object.defineProperty({__proto__:null,default:Io},Symbol.toStringTag,{value:"Module"}));const Oo=L({name:"swiper-example-zoom",title:"Zoom",url:"file:///examples/vue-awesome-swiper/34-zoom.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q,ps]}}}),No={class:"swiper-zoom-container"},Ao=["src"];function Vo(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,zoom:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(P(),Z(ee,null,se(8,c=>n(s,{key:c,class:"slide"},{default:r(()=>[$("div",No,[$("img",{src:`/images/example/${c}.jpg`},null,8,Ao)])]),_:2},1024)),64))]),_:1},8,["modules"])}var Ro=H(Oo,[["render",Vo],["__scopeId","data-v-7aeba9e8"]]),Lo=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"}));const Ho=L({name:"swiper-example-lazy-loading-image",title:"Lazy loading images",url:"file:///examples/vue-awesome-swiper/35-lazy-load-images.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[cs,X,Q]}}}),Do=t=>(ae("data-v-073a65e7"),t=t(),oe(),t),Wo=["data-src"],Yo=Do(()=>$("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-white"},null,-1));function Xo(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,lazy:!0,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[(P(),Z(ee,null,se(8,c=>n(s,{key:c,class:"slide"},{default:r(()=>[$("img",{"data-src":`/images/example/${c}.jpg`,class:"swiper-lazy"},null,8,Wo),Yo]),_:2},1024)),64))]),_:1},8,["modules"])}var qo=H(Ho,[["render",Xo],["__scopeId","data-v-073a65e7"]]),Go=Object.freeze(Object.defineProperty({__proto__:null,default:qo},Symbol.toStringTag,{value:"Module"}));const Bo=L({name:"swiper-example-parallax",title:"Parallax",url:"file:///examples/vue-awesome-swiper/36-parallax.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[ds,X,Q]}}}),ne=t=>(ae("data-v-0e91a112"),t=t(),oe(),t),Fo=ne(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 1",-1)),Uo=ne(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Ko=ne(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),Zo=ne(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 2",-1)),Jo=ne(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),Qo=ne(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1)),ed=ne(()=>$("h1",{class:"title","data-swiper-parallax":"-300"},"Slide 3",-1)),sd=ne(()=>$("h2",{class:"subtitle","data-swiper-parallax":"-200"},"Subtitle",-1)),rd=ne(()=>$("div",{class:"text","data-swiper-parallax":"-100"},[$("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. ")],-1));function id(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},modules:t.modules,speed:600,parallax:!0,navigation:!0,pagination:{clickable:!0}},{"container-start":r(()=>[$("div",{class:"parallax-bg","data-swiper-parallax":"-23%",style:ts({backgroundImage:"url(/images/example/1.jpg)"})},null,4)]),default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Fo,Uo,Ko]),_:1}),n(s,{class:"slide"},{default:r(()=>[Zo,Jo,Qo]),_:1}),n(s,{class:"slide"},{default:r(()=>[ed,sd,rd]),_:1})]),_:1},8,["modules"])}var nd=H(Bo,[["render",id],["__scopeId","data-v-0e91a112"]]),td=Object.freeze(Object.defineProperty({__proto__:null,default:nd},Symbol.toStringTag,{value:"Module"}));const ld=L({name:"swiper-example-rtl",title:"RTL layout",url:"file:///examples/vue-awesome-swiper/37-rtl.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q]}}}),ad=a("Slide 1"),od=a("Slide 2"),dd=a("Slide 3"),pd=a("Slide 4"),cd=a("Slide 5"),ud=a("Slide 6"),md=a("Slide 7"),fd=a("Slide 8");function wd(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,navigation:!0,pagination:{clickable:!0},dir:"rtl"},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[ad]),_:1}),n(s,{class:"slide"},{default:r(()=>[od]),_:1}),n(s,{class:"slide"},{default:r(()=>[dd]),_:1}),n(s,{class:"slide"},{default:r(()=>[pd]),_:1}),n(s,{class:"slide"},{default:r(()=>[cd]),_:1}),n(s,{class:"slide"},{default:r(()=>[ud]),_:1}),n(s,{class:"slide"},{default:r(()=>[md]),_:1}),n(s,{class:"slide"},{default:r(()=>[fd]),_:1})]),_:1},8,["modules"])}var hd=H(ld,[["render",wd],["__scopeId","data-v-1a8895f2"]]),_d=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"}));const gd=L({name:"swiper-example-responsive-breakpoints",title:"Responsive breakpoints",url:"file:///examples/vue-awesome-swiper/38-responsive-breakpoints.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X]}}}),vd=t=>(ae("data-v-5d225584"),t=t(),oe(),t),Sd=vd(()=>$("div",{class:"tip"},"\u2192 Resize the browser window \u2190",-1)),bd=a("Slide 1"),yd=a("Slide 2"),$d=a("Slide 3"),xd=a("Slide 4"),kd=a("Slide 5"),Cd=a("Slide 6"),Ed=a("Slide 7"),Pd=a("Slide 8"),Td=a("Slide 9"),zd=a("Slide 10");function Md(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z(ee,null,[Sd,n(o,{class:"swiper",modules:t.modules,"slides-per-view":1,"space-between":10,pagination:{clickable:!0},breakpoints:{"640":{slidesPerView:2,spaceBetween:20},"768":{slidesPerView:4,spaceBetween:40},"1024":{slidesPerView:5,spaceBetween:50}}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[bd]),_:1}),n(s,{class:"slide"},{default:r(()=>[yd]),_:1}),n(s,{class:"slide"},{default:r(()=>[$d]),_:1}),n(s,{class:"slide"},{default:r(()=>[xd]),_:1}),n(s,{class:"slide"},{default:r(()=>[kd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Cd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ed]),_:1}),n(s,{class:"slide"},{default:r(()=>[Pd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Td]),_:1}),n(s,{class:"slide"},{default:r(()=>[zd]),_:1})]),_:1},8,["modules"])],64)}var Id=H(gd,[["render",Md],["__scopeId","data-v-5d225584"]]),jd=Object.freeze(Object.defineProperty({__proto__:null,default:Id},Symbol.toStringTag,{value:"Module"}));const Od=L({name:"swiper-example-auto-height",title:"Auto height",url:"file:///examples/vue-awesome-swiper/39-autoheight.vue",components:{Swiper:D,SwiperSlide:W},setup(){return{modules:[X,Q]}}}),Nd=a("Slide 1"),Ad=a("Slide 2"),Vd=a("Slide 3"),Rd=a("Slide 4"),Ld=a("Slide 5"),Hd=a("Slide 6"),Dd=a("Slide 7"),Wd=a("Slide 8");function Yd(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,"auto-height":!0,"space-between":20,navigation:!0,pagination:{clickable:!0}},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[Nd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ad]),_:1}),n(s,{class:"slide"},{default:r(()=>[Vd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Rd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Ld]),_:1}),n(s,{class:"slide"},{default:r(()=>[Hd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Dd]),_:1}),n(s,{class:"slide"},{default:r(()=>[Wd]),_:1})]),_:1},8,["modules"])}var Xd=H(Od,[["render",Yd],["__scopeId","data-v-6bbdc2e0"]]),qd=Object.freeze(Object.defineProperty({__proto__:null,default:Xd},Symbol.toStringTag,{value:"Module"}));const Gd=L({name:"swiper-example-slideable-navigation-drawer",title:"Slideable navigation drawer",url:"file:///examples/vue-awesome-swiper/40-slideable-menu.vue",components:{Swiper:D,SwiperSlide:W},setup(){let t=null;const e=h=>{t=h},v=me(!1);return{menuOpened:v,toggleMenu:()=>{v.value?t==null||t.slideNext():t==null||t.slidePrev()},setSwiperRef:e,handleSlideChange:()=>{v.value=(t==null?void 0:t.activeIndex)===0}}}}),ye=t=>(ae("data-v-0d448f8d"),t=t(),oe(),t),Bd=a("Menu slide"),Fd=ye(()=>$("div",{class:"bar"},null,-1)),Ud=ye(()=>$("div",{class:"bar"},null,-1)),Kd=ye(()=>$("div",{class:"bar"},null,-1)),Zd=[Fd,Ud,Kd],Jd=ye(()=>$("div",null,"Content slide",-1));function Qd(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:t.setSwiperRef,onSlideChange:t.handleSlideChange},{default:r(()=>[n(s,{class:"menu"},{default:r(()=>[Bd]),_:1}),n(s,{class:"content"},{default:r(()=>[$("div",{class:ls(["menu-button",{opened:t.menuOpened}]),onClick:e[0]||(e[0]=(...c)=>t.toggleMenu&&t.toggleMenu(...c))},Zd,2),Jd]),_:1})]),_:1},8,["onSwiper","onSlideChange"])}var ep=H(Gd,[["render",Qd],["__scopeId","data-v-0d448f8d"]]),sp=Object.freeze(Object.defineProperty({__proto__:null,default:ep},Symbol.toStringTag,{value:"Module"}));const rp=L({name:"swiper-example-virtual-slides",title:"Virtual slides",url:"file:///examples/vue-awesome-swiper/41-virtual-slides.vue",components:{Swiper:D,SwiperSlide:W},setup(){let t=null;const e=o=>{t=o},v=o=>{t==null||t.slideTo(o-1,0)},u=ze(Array.from({length:500}).map((o,c)=>c+1));let S=1;return{modules:[X,Q,os],setSwiperRef:e,slides:u,slideTo:v,append:()=>{u.push(u.length)},prepend:()=>{u.unshift(S-2,S-1),S-=2,t==null||t.slideTo(t.activeIndex+2,0)}}}}),ip={class:"toolbar"};function np(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Z(ee,null,[$("div",ip,[$("button",{onClick:e[0]||(e[0]=c=>t.prepend()),class:"prepend-2-slides"},"Prepend 2 Slides"),$("button",{onClick:e[1]||(e[1]=c=>t.slideTo(1)),class:"prepend-slide"},"Slide 1"),$("button",{onClick:e[2]||(e[2]=c=>t.slideTo(250)),class:"slide-250"},"Slide 250"),$("button",{onClick:e[3]||(e[3]=c=>t.slideTo(500)),class:"slide-500"},"Slide 500"),$("button",{onClick:e[4]||(e[4]=c=>t.append()),class:"append-slides"},"Append Slide")]),n(o,{class:"swiper",modules:t.modules,virtual:!0,"slides-per-view":3,"centered-slides":!0,"space-between":30,navigation:!0,pagination:{type:"fraction"},onSwiper:t.setSwiperRef},{default:r(()=>[(P(!0),Z(ee,null,se(t.slides,(c,w)=>(P(),Y(s,{key:w,"virtual-index":w,class:"slide"},{default:r(()=>[a(" Slide "+te(c),1)]),_:2},1032,["virtual-index"]))),128))]),_:1},8,["modules","onSwiper"])],64)}var tp=H(rp,[["render",np],["__scopeId","data-v-63faf5cc"]]),lp=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"}));const ap=L({name:"swiper-example-change-direction",title:"Change direction",url:"file:///examples/vue-awesome-swiper/42-change-direction.vue",components:{Swiper:D,SwiperSlide:W},setup(){let t=null;return{modules:[Q],setSwiperRef:u=>{t=u},handleResize:()=>{t==null||t.changeDirection(window.innerWidth<=960?"vertical":"horizontal")}}}}),op=a("Slide 1"),dp=a("Slide 2"),pp=a("Slide 3"),cp=a("Slide 4"),up=a("Slide 5"),mp=a("Slide 6"),fp=a("Slide 7"),wp=a("Slide 8");function hp(t,e,v,u,S,h){const s=k("swiper-slide"),o=k("swiper");return P(),Y(o,{class:"swiper",modules:t.modules,direction:"horizontal","slides-per-view":3,"space-between":30,navigation:!0,onSwiper:t.setSwiperRef,onResize:t.handleResize},{default:r(()=>[n(s,{class:"slide"},{default:r(()=>[op]),_:1}),n(s,{class:"slide"},{default:r(()=>[dp]),_:1}),n(s,{class:"slide"},{default:r(()=>[pp]),_:1}),n(s,{class:"slide"},{default:r(()=>[cp]),_:1}),n(s,{class:"slide"},{default:r(()=>[up]),_:1}),n(s,{class:"slide"},{default:r(()=>[mp]),_:1}),n(s,{class:"slide"},{default:r(()=>[fp]),_:1}),n(s,{class:"slide"},{default:r(()=>[wp]),_:1})]),_:1},8,["modules","onSwiper","onResize"])}var _p=H(ap,[["render",hp],["__scopeId","data-v-5c2d1e27"]]),gp=Object.freeze(Object.defineProperty({__proto__:null,default:_p},Symbol.toStringTag,{value:"Module"}));const Le={"./01-advance.vue":Ws,"./02-default.vue":er,"./03-navigation.vue":ur,"./04-pagination.vue":xr,"./05-pagination-dynamic.vue":Ar,"./06-pagination-progress.vue":Fr,"./07-pagination-fraction.vue":li,"./08-pagination-custom.vue":gi,"./09-scrollbar.vue":zi,"./10-vertical.vue":Wi,"./11-space-between.vue":en,"./12-slides-per-view.vue":mn,"./13-slides-per-view-auto.vue":kn,"./14-centered.vue":Vn,"./15-centered-auto.vue":Un,"./16-freemode.vue":at,"./17-scroll-container.vue":Dt,"./18-slides-per-column.vue":sl,"./19-nested.vue":ml,"./20-grab-cursor.vue":kl,"./21-infinite-loop.vue":Vl,"./22-infinite-loop-with-slides-per-group.vue":Ul,"./23-slides-per-group-skip.vue":la,"./24-effect-fade.vue":ca,"./25-effect-coverflow.vue":_a,"./26-effect-cube.vue":$a,"./27-effect-flip.vue":Ta,"./28-effect-creative.vue":Va,"./29-keyboard-control.vue":Ua,"./30-mousewheel-control.vue":ao,"./31-autoplay.vue":So,"./32-dynamic-slides.vue":Co,"./33-thumbs-gallery.vue":jo,"./34-zoom.vue":Lo,"./35-lazy-load-images.vue":Go,"./36-parallax.vue":td,"./37-rtl.vue":_d,"./38-responsive-breakpoints.vue":jd,"./39-autoheight.vue":qd,"./40-slideable-menu.vue":sp,"./41-virtual-slides.vue":lp,"./42-change-direction.vue":gp},vp={"./01-advance.vue":`<template>\r
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
`};var Sp=Object.keys(Le).map(t=>({component:Le[t].default,raw:vp[t],language:"vue"}));const bp={class:"swiper-example"},yp=L({setup(t){const e=qe.VueAwesomeSwiper,v=Sp.map(Ke);return Ge({title:Je(e),keywords:[Qe(e),"How to use Swiper on vue3?"].join(","),description:es(e)}),(u,S)=>(P(),Y(ss,{repository:ce(e)},{default:r(()=>[n(Ze,{repository:ce(e)},{actions:r(()=>[n(Se,{icon:"doc",text:"Vue(2) examples",href:ce(Be)(ce(e))},null,8,["href"]),n(Se,{icon:"doc",text:"Swiper API Documentation",href:"https://swiperjs.com/swiper-api"}),n(Se,{icon:"doc",text:"Swiper Vue(3) component",href:"https://swiperjs.com/vue"}),n(Se,{icon:"discussions",text:"Swiper discussions",href:"https://github.com/nolimits4web/swiper/discussions"})]),content:r(()=>[n(rs,{examples:ce(v)},{component:r(h=>[$("div",bp,[(P(),Y(as(h.component)))])]),_:1},8,["examples"])]),_:1},8,["repository"])]),_:1},8,["repository"]))}});var Mp=H(yp,[["__scopeId","data-v-0d6cf728"]]);export{Mp as default};
