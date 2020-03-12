/**
 * @file vue-awesome-swiper
 * @module plugins/vue-awesome-swiper
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// TODO: 4.0
// import VueAwesomeSwiper, {
//   directive,
//   Swiper,
//   SwiperSlide,
//   swiper, // 不建议使用，建议替换为 Swiper
//   swiperSlide //  不建议使用，建议替换为 SwiperSlide
// } from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

// import Swiper from 'swiper'
// const myPlugin = {
//   name: 'debugger',
//   params: {
//     debugger: false,
//   },
//   on: {
//     init: function () {
//       if (!this.params.debugger) return
//       console.log('init')
//     },
//     click: function (e) {
//       if (!this.params.debugger) return
//       console.log('click')
//     },
//     tap: function (e) {
//       if (!this.params.debugger) return
//       console.log('tap')
//     },
//     doubleTap: function (e) {
//       if (!this.params.debugger) return
//       console.log('doubleTap')
//     },
//     sliderMove: function (e) {
//       if (!this.params.debugger) return
//       console.log('sliderMove')
//     },
//     slideChange: function () {
//       if (!this.params.debugger) return
//       console.log('slideChange', this.previousIndex, '->', this.activeIndex)
//     },
//     slideChangeTransitionStart: function () {
//       if (!this.params.debugger) return
//       console.log('slideChangeTransitionStart')
//     },
//     slideChangeTransitionEnd: function () {
//       if (!this.params.debugger) return
//       console.log('slideChangeTransitionEnd')
//     },
//     transitionStart: function () {
//       if (!this.params.debugger) return
//       console.log('transitionStart')
//     },
//     transitionEnd: function () {
//       if (!this.params.debugger) return
//       console.log('transitionEnd')
//     },
//     fromEdge: function () {
//       if (!this.params.debugger) return
//       console.log('fromEdge')
//     },
//     reachBeginning: function () {
//       if (!this.params.debugger) return
//       console.log('reachBeginning')
//     },
//     reachEnd: function () {
//       if (!this.params.debugger) return
//       console.log('reachEnd')
//     },
//   },
// }
// // Install Plugin To Swiper
// Swiper.use(myPlugin)


Vue.use(VueAwesomeSwiper)
