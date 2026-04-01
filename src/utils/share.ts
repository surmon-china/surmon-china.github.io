import { APP_META } from '@/config'
import { openWindow } from './opener'

const getPageInfo = () => ({
  url: encodeURIComponent(window.location.href),
  title: encodeURIComponent(document.title || APP_META.title)
})

interface ShareOptions {
  repository: string
}

export const shareToX = (options: ShareOptions) => {
  const pageInfo = getPageInfo()
  const twitterURL = `https://x.com/intent/tweet?url=${pageInfo.url}&text=${pageInfo.title}`
  openWindow(twitterURL, { name: `Share: ${options.repository}` })
}
