import type { ExampleComponentInput } from '@/transforms/example'
const components = import.meta.glob<{ default: any }>('./*.vue', { eager: true, import: 'default' })
const raws = import.meta.glob<string>('./*.vue', { eager: true, query: '?raw', import: 'default' })

export default Object.keys(components).map((id) => ({
  component: components[id],
  raw: raws[id],
  language: 'vue',
  path: `examples/vue-awesome-swiper/${id.replace('./', '')}`
})) satisfies ExampleComponentInput[]
