import { App, computed } from 'vue'
import type { ComputedGetter } from '@vue/reactivity'
import {
  createHead,
  useHead,
  HeadObject,
  HeadAttrs,
  renderHeadToString
} from '@vueuse/head'

export interface MetaResult {
  readonly headTags: string
  readonly htmlAttrs: string
  readonly bodyAttrs: string
}

export const createMeta = () => {
  const head = createHead()
  return {
    ...head,
    renderToString(): MetaResult {
      return renderHeadToString(head)
    },
    install(app: App, ...rest: any[]) {
      app.use(head, ...rest)
      return head
    }
  }
}

export interface MetaObject extends HeadObject {
  title?: string
  keywords?: string
  description?: string
}

export function useMeta(source: MetaObject | ComputedGetter<MetaObject>) {
  const meta = computed<HeadObject>(() => {
    const sourceObject = typeof source === 'function' ? source() : source
    const { title, keywords, description, ...restSource } = sourceObject

    // meta
    const mMeta = (restSource.meta as HeadAttrs[]) || []

    // keywords
    if (keywords) {
      mMeta.push({
        key: 'keywords',
        name: 'keywords',
        content: keywords
      })
    }

    // description
    if (description) {
      mMeta.push({
        key: 'description',
        name: 'description',
        content: description
      })
    }

    return {
      ...restSource,
      title: title,
      meta: mMeta
    }
  })

  return useHead(meta)
}
