<template>
  <div class="example">
    <toolbar
      :config="config"
      :languages="languages"
      :themes="Object.keys(themes)"
      @language="handleSwitchLanguage"
    />
    <div class="divider"></div>
    <div class="loading-box" v-if="loading">
      <loading />
    </div>
    <editor
      v-else
      :config="config"
      :theme="currentTheme"
      :language="currentLangCode.language"
      :code="currentLangCode.code"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, shallowRef, shallowReactive } from 'vue'
  import { Theme, useTheme } from '@/composables/theme'
  import Loading from '@/components/common/loading.vue'
  import javascriptLang from './lang-code/javascript'
  import themes from './themes'
  import languages from './languages'
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
      const config = reactive({
        disabled: false,
        indentWithTab: true,
        tabSize: 2,
        autofocus: true,
        height: 'auto',
        language: 'javascript',
        theme: useTheme().theme.value === Theme.Light ? 'default' : 'oneDark'
      })

      const loading = shallowRef(false)
      const langCodeMap = shallowReactive(new Map([['javascript', javascriptLang]]))
      const currentLangCode = computed(() => langCodeMap.get(config.language)!)
      const currentTheme = computed(() => {
        return config.theme !== 'default' ? themes[config.theme] : void 0
      })

      const handleSwitchLanguage = async (targetLanguage: string) => {
        loading.value = true
        if (langCodeMap.has(targetLanguage)) {
          await new Promise((resolve) => window.setTimeout(resolve, 260))
        } else {
          const result = await import(`./lang-code/${targetLanguage}`)
          langCodeMap.set(targetLanguage, result.default)
        }
        config.language = targetLanguage
        loading.value = false
      }

      return {
        loading,
        config,
        themes,
        languages,
        currentTheme,
        currentLangCode,
        handleSwitchLanguage
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .example {
    .divider {
      height: 1px;
      background-color: $border-color;
    }

    .loading-box {
      width: 100%;
      min-height: 20rem;
      max-height: 60rem;
      height: calc(100vh - $navbar-height - $banner-height - $footbar-height - 8rem - 3rem);
    }
  }
</style>
