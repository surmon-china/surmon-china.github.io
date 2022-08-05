import React from 'react'
import { createRoot } from 'react-dom/client'
import { defineComponent, shallowRef, h, onMounted } from 'vue'

export interface ComponentTransformerOptions {
  name: string
  title: string
  url: string
  component: any
}

export const transformReactComponentToVue = (options: ComponentTransformerOptions) => {
  return defineComponent({
    name: options.name,
    title: options.title,
    url: options.url,
    setup() {
      const element = shallowRef<HTMLDivElement | null>(null)

      onMounted(() => {
        createRoot(element.value!).render(React.createElement(options.component))
      })

      return () => {
        return h('div', { class: 'react-container', ref: element })
      }
    }
  })
}
