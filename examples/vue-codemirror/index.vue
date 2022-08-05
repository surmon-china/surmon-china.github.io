<template>
  <div class="example">
    <toolbar
      :config="config"
      :disabled="loading"
      :themes="Object.keys(themes)"
      :languages="Object.keys(languages)"
      @language="ensureLanguageCode"
    />
    <div class="divider"></div>
    <div class="loading-box" v-if="loading">
      <loading />
    </div>
    <editor
      v-else-if="currentLangCode"
      :config="config"
      :theme="currentTheme"
      :language="currentLangCode.language"
      :code="currentLangCode.code"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, shallowRef, onBeforeMount } from 'vue'
  import { Theme, useTheme } from '@/composables/theme'
  import Loading from '@/components/common/loading.vue'
  import languages from './languages'
  import themes from './themes'
  import Toolbar from './toolbar.vue'
  import Editor from './editor.vue'

  export default defineComponent({
    name: 'vue-codemirror-example',
    title: 'Example Source Code',
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
      const langCodeMap = reactive(new Map<string, { code: string; language: () => any }>())
      const currentLangCode = computed(() => langCodeMap.get(config.language)!)
      const currentTheme = computed(() => {
        return config.theme !== 'default' ? themes[config.theme] : void 0
      })

      const ensureLanguageCode = async (targetLanguage: string) => {
        config.language = targetLanguage
        loading.value = true
        const delayPromise = () => new Promise((resolve) => window.setTimeout(resolve, 260))
        if (langCodeMap.has(targetLanguage)) {
          await delayPromise()
        } else {
          const [result] = await Promise.all([languages[targetLanguage](), delayPromise()])
          langCodeMap.set(targetLanguage, result.default)
        }
        loading.value = false
      }

      // HACK: Make sure the first screen the user sees is the loading placeholder
      loading.value = true
      onBeforeMount(() => {
        // init default language & code
        ensureLanguageCode(config.language)
      })

      return {
        loading,
        config,
        themes,
        languages,
        currentTheme,
        currentLangCode,
        ensureLanguageCode
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
      /* loading height = view-height - layout-height - page-height */
      /* navbar + banner + footer */
      $layout-height: $navbar-height + $banner-height + $footbar-height;
      /* single-card-gap * 2 + card-header + editor-header */
      $page-height: 2rem * 2 + 3.2rem + 3rem;
      /* editor-border * 2 */
      height: calc(100vh - $layout-height - $page-height - 2px);
    }
  }
</style>
