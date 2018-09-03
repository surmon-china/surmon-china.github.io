<template>
  <div class="swiper-lazy-box">
    <img class="swiper-lazy" :data-src="src" ref="imgEle">
  </div>
</template>

<script>
  export default {
    name: 'lazyImage',
    props: {
      src: String
    },
    updated() {
      this.$refs.imgEle.src = this.src
    }
  }
</script>
