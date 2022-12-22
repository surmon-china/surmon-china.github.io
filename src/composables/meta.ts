import { App, computed } from 'vue'
import type { ComputedGetter } from '@vue/reactivity'
import { createHead, useHead, HeadObject, renderHeadToString } from '@vueuse/head'
import { APP_META, TWITTER_UID } from '@/config'

export const createMeta = () => {
  const head = createHead()
  return {
    ...head,
    renderToString() {
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
  // https://ogp.me/
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
  // https://developers.facebook.com/docs/sharing/webmasters/
  // https://ahrefs.com/blog/open-graph-meta-tags/
  ogType?:
    | 'object'
    | 'website'
    | 'article'
    | 'blog'
    | 'product'
    | 'bbs'
    | 'image'
    | 'profile'
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
}

export function useMeta(source: MetaObject | ComputedGetter<MetaObject>) {
  const meta = computed<HeadObject>(() => {
    const sourceObject = typeof source === 'function' ? source() : source
    const { title, keywords, description, ...restSource } = sourceObject

    // meta
    const _meta = (restSource.meta as any[]) || [
      // keywords
      {
        key: 'keywords',
        name: 'keywords',
        content: keywords ?? ''
      },
      // description
      {
        key: 'description',
        name: 'description',
        content: description ?? APP_META.description
      },
      // twitter
      {
        key: 'twitter-new-widgets',
        name: 'twitter:widgets:new-embed-design',
        content: 'on'
      },
      {
        key: 'twitter-site',
        name: 'twitter:site',
        content: `@${TWITTER_UID}`
      },
      {
        key: 'twitter-creator',
        name: 'twitter:creator',
        content: `@${TWITTER_UID}`
      },
      {
        key: 'twitter-image-src',
        name: 'twitter:image:src',
        content: restSource.ogImage ?? ''
      },
      {
        key: 'twitter-card',
        name: 'twitter:card',
        content: restSource.ogImage
          ? 'summary_large_image' // GitHub: summary_large_image
          : 'summary'
      },
      {
        key: 'twitter-title',
        name: 'twitter:title',
        content: restSource.ogTitle ?? title ?? APP_META.title
      },
      {
        key: 'twitter-description',
        name: 'twitter:description',
        content: restSource.ogDescription ?? description ?? APP_META.description
      },
      // og
      {
        key: 'og-type',
        property: 'og:type',
        content: restSource.ogType ?? 'object' // GitHub: object
      },
      {
        key: 'og-site-name',
        property: 'og:site_name',
        content: APP_META.title
      },
      {
        key: 'og-title',
        property: 'og:title',
        content: restSource.ogTitle ?? title ?? APP_META.title
      },
      {
        key: 'og-description',
        property: 'og:description',
        content: restSource.ogDescription ?? description ?? APP_META.description
      },
      {
        key: 'og-url',
        property: 'og:url',
        content: restSource.ogUrl ?? ''
      },
      {
        key: 'og-image',
        property: 'og:image',
        content: restSource.ogImage ?? ''
      },
      {
        key: 'og-image-alt',
        property: 'og:image:alt',
        content: restSource.ogDescription ?? description ?? APP_META.description
      }
    ]

    return {
      ...restSource,
      title: title,
      meta: _meta
    }
  })

  return useHead(meta)
}
