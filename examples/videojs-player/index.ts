import { defineComponent, defineAsyncComponent } from 'vue'
import { ExampleComponentConfig } from '@/transforms/example'

// For SSR prerender
import vueFlvComponentRaw from './06-flv.vue?raw'
const vueFlvComponent = defineAsyncComponent(() => {
  return import.meta.env.SSR ? Promise.resolve(defineComponent({})) : import('./06-flv.vue')
})
vueFlvComponent.name = 'vue-flv-player-example'
vueFlvComponent.title = 'FLV player (Vue)'
const vueFlvExample: ExampleComponentConfig = {
  component: vueFlvComponent,
  raw: vueFlvComponentRaw,
  language: 'vue'
}

import reactBasicPlayer from './07-react'
import reactBasicPlayerRaw from './07-react?raw'
const reactBasicExample: ExampleComponentConfig = {
  component: reactBasicPlayer,
  raw: reactBasicPlayerRaw,
  language: 'typescript'
}

const vueComponents = import.meta.glob<{ default: any }>(
  [
    './01-advanced-player/index.vue',
    './02-basic.vue',
    './03-custom.vue',
    './04-hls.vue',
    './05-dash.vue'
  ],
  {
    eager: true
  }
)

const vueComponentRaws = import.meta.glob<string>(
  [
    './01-advanced-player/index.vue',
    './02-basic.vue',
    './03-custom.vue',
    './04-hls.vue',
    './05-dash.vue'
  ],
  {
    as: 'raw',
    eager: true
  }
)

const vueExamples: Array<ExampleComponentConfig> = Object.keys(vueComponents).map((id) => ({
  component: vueComponents[id].default,
  raw: vueComponentRaws[id],
  language: 'vue'
}))

export default [...vueExamples, vueFlvExample, reactBasicExample]
