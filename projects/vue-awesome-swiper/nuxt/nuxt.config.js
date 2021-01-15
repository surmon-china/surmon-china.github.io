
export default {
  // some nuxt config...
  plugins: [
    { src: '@/plugins/nuxt-swiper-plugin.js', mode: 'client' },
  ],
  // some nuxt config...
  css: [

    // (>= Swiper 6.x)
    'swiper/swiper-bundle.css'

    // OR
    
    // (<= Swiper 5.x)
    'swiper/css/swiper.css'
    
  ],
  // some nuxt config...
}
