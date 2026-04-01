import { computed, ComputedGetter } from 'vue'
import { useSeoMeta, MetaFlat } from '@unhead/vue'
import { APP_META, TWITTER_USERNAME } from '@/config'

export { useHead, useSeoMeta } from '@unhead/vue'

export interface UsePageSeoInput {
  title?: string
  description?: string
  keywords?: string
  // Open Graph
  ogUrl?: string
  ogType?: MetaFlat['ogType']
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogImageAlt?: string
  ogImageWidth?: string | number
  ogImageHeight?: string | number
}

export function usePageSeo(input: UsePageSeoInput | ComputedGetter<UsePageSeoInput>) {
  const _ = computed(() => (typeof input === 'function' ? input() : input))

  return useSeoMeta({
    // Basic SEO
    title: computed(() => _.value.title),
    description: () => _.value.description ?? APP_META.description,
    keywords: () => _.value.keywords,
    twitterSite: `@${TWITTER_USERNAME}`,
    twitterCreator: TWITTER_USERNAME,
    twitterCard: _.value.ogImage ? 'summary_large_image' : 'summary', // GitHub: summary_large_image
    // Open Graph
    ogType: () => _.value.ogType ?? ('object' as any), // GitHub: object
    ogTitle: () => _.value.ogTitle ?? _.value.title ?? APP_META.title,
    ogDescription: () => _.value.ogDescription ?? _.value.description ?? APP_META.description,
    ogUrl: () => _.value.ogUrl ?? null,
    ogImage: () => _.value.ogImage ?? null,
    ogImageAlt: () => _.value.ogImageAlt ?? _.value.ogDescription ?? _.value.description ?? APP_META.description,
    ogImageWidth: () => _.value.ogImageWidth ?? null,
    ogImageHeight: () => _.value.ogImageHeight ?? null,
    ogSiteName: () => APP_META.title,
    // Twitter
    twitterTitle: () => _.value.ogTitle ?? _.value.title ?? APP_META.title,
    twitterDescription: () => _.value.ogDescription ?? _.value.description ?? APP_META.description,
    twitterImage: () => _.value.ogImage ?? null,
    twitterImageAlt: () => _.value.ogImageAlt ?? _.value.ogDescription ?? _.value.description ?? APP_META.description
  })
}
