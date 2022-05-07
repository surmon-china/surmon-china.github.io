<template>
  <div class="iframe-renderer" :class="{ legacy }">
    <navbar class="header" :repository="repository" :full="fullnav" />
    <iframe
      class="iframe"
      :src="src"
      @load="handleIframeLoaded"
      @error="handleIframeError"
    />
    <transition name="module">
      <div class="loading-box" v-if="state.loading">
        <loading />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import Navbar from '@/components/layout/navbar.vue'
  import Loading from '@/components/common/loading.vue'

  export default defineComponent({
    name: 'iframe-renderer',
    components: { Navbar, Loading },
    props: {
      src: {
        type: String,
        required: true
      },
      repository: {
        type: String,
        required: true
      },
      legacy: {
        type: Boolean,
        default: false
      },
      fullnav: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const state = reactive({
        loading: true,
        error: null as null | string
      })
      const handleIframeLoaded = () => {
        state.loading = false
      }
      const handleIframeError = (error: Error) => {
        handleIframeLoaded()
        state.error = error.message
      }

      return {
        state,
        handleIframeLoaded,
        handleIframeError
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  /* for legacy */
  .iframe-renderer.legacy {
    .iframe {
      margin-top: -44px;
    }
  }

  .iframe-renderer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .iframe {
      border: none;
      margin: 0;
      padding: 0;
      flex: 1;
      overflow: hidden;
    }

    .loading-box {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-top: $navbar-height;
      background-color: $banner-bg;
    }
  }
</style>
