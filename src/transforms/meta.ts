import { UseSeoMetaInput } from '@unhead/schema'
import { useSeoMeta } from '@unhead/vue'
import { APP_META, TWITTER_USERNAME } from '@/config'

export const getMetaTitle = (ID: string): string => {
  return `${ID} | Homepage`
}

export const getMetaDescription = (ID: string): string => {
  return `${ID} GitHub homepage`
}

export const getMetaKeywords = (ID: string): string[] => {
  return [`${ID} examples`, `How to use ${ID}`]
}

export interface SeoMetaObject extends UseSeoMetaInput {
  title: string
  description: string
  keywords?: string
}

export const normalizeSeoMetaObject = (i: SeoMetaObject): Parameters<typeof useSeoMeta>[0] => {
  return {
    ...i,
    description: i.description ?? APP_META.description,
    twitterSite: `@${TWITTER_USERNAME}`,
    twitterCreator: TWITTER_USERNAME,
    twitterCard: i.ogImage
      ? 'summary_large_image' // GitHub: summary_large_image
      : 'summary',
    twitterTitle: () => i.twitterTitle ?? i.ogTitle ?? i.title ?? APP_META.title,
    twitterImage: () => i.twitterImage ?? i.ogImage,
    twitterDescription: () => i.twitterDescription ?? i.ogDescription ?? i.description ?? APP_META.description,
    ogSiteName: () => APP_META.title,
    ogType: () => i.ogType ?? ('object' as any), // GitHub: object
    ogTitle: () => i.ogTitle ?? i.title ?? APP_META.title,
    ogDescription: () => i.ogDescription ?? i.description ?? APP_META.description,
    ogUrl: () => i.ogUrl ?? '',
    ogImage: () => i.ogImage ?? '',
    ogImageAlt: () => i.ogImageAlt ?? i.ogDescription ?? i.description ?? APP_META.description
  }
}
