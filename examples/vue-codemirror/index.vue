<template>
  <transition name="module" mode="out-in">
    <div class="loading-box" v-if="!initiated">
      <loading />
    </div>
    <div class="example" v-else>
      <toolbar :config="config" :lks="Object.keys(languages)" :tks="Object.keys(themes)" />
      <div class="divider"></div>
      <editor :config="config" :languages="languages" :themes="themes" :codes="codes" />
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, reactive, shallowRef, computed, onBeforeMount } from 'vue'
  import { Theme, useTheme } from '@/composables/theme'
  import Loading from '@/components/common/loading.vue'
  import Toolbar from './toolbar.vue'
  import Editor from './editor.vue'

  export default defineComponent({
    name: 'vue-codemirror-example',
    title: 'Web IDE example',
    url: import.meta.url,
    components: {
      Loading,
      Toolbar,
      Editor
    },
    setup() {
      const initiated = shallowRef(false)
      const languages = shallowRef<{ [key: string]: any }>({})
      const themes = shallowRef<{ [key: string]: any }>({})
      const codes = shallowRef<{ [key: string]: string }>({})
      const config = reactive({
        disabled: false,
        indentWithTab: true,
        tabSize: 4,
        autofocus: true,
        height: 'auto',
        language: 'javascript',
        theme: useTheme().theme.value === Theme.Light ? 'default' : 'oneDark'
      })

      onBeforeMount(async () => {
        languages.value = await import('./languages').then((r) => r.default)
        themes.value = await import('./themes').then((r) => r.default)
        codes.value = await import('./codes').then((r) => r.default)
        initiated.value = true
      })

      return {
        initiated,
        config,
        languages,
        themes,
        codes
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .loading-box {
    width: 100%;
    min-height: 20rem;
    max-height: 60rem;
    height: calc(100vh - $navbar-height - $banner-height - $footbar-height - 8rem);
  }

  .example {
    .divider {
      height: 1px;
      background-color: $border-color;
    }
  }
</style>
