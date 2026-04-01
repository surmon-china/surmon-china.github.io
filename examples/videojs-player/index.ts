import type { ExampleComponentInput } from '@/transforms/example'

import AdvancedPlayer from './01-advanced-player/index.vue'
import AdvancedPlayerRaw from './01-advanced-player/index.vue?raw'
const vueAdvanceExample: ExampleComponentInput = {
  component: AdvancedPlayer,
  raw: AdvancedPlayerRaw,
  language: 'vue',
  path: 'examples/videojs-player/01-advanced-player/index.vue'
}

import ReactBasicPlayer from './07-react'
import ReactBasicPlayerRaw from './07-react?raw'
const reactBasicExample: ExampleComponentInput = {
  component: ReactBasicPlayer,
  raw: ReactBasicPlayerRaw,
  language: 'typescript',
  path: 'examples/videojs-player/07-react.tsx'
}

const vueComponents = import.meta.glob<{ default: any }>('./*.vue', { eager: true, import: 'default' })
const vueComponentRaws = import.meta.glob<string>('./*.vue', {
  eager: true,
  query: '?raw',
  import: 'default'
})
const vueExamples: ExampleComponentInput[] = Object.keys(vueComponents).map((id) => ({
  component: vueComponents[id],
  raw: vueComponentRaws[id],
  language: 'vue',
  path: `examples/videojs-player/${id.replace('./', '')}`
}))

export default [vueAdvanceExample, ...vueExamples, reactBasicExample]
