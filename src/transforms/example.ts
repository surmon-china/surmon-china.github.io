import { DefineComponent } from 'vue'
import { getGitHubFileSourceURL } from '@/transforms/url'
import { GITHUB_PROJECT_NAME } from '@/config'

export interface ExampleComponent {
  name: string
  title: string
  path: string
  url: string
  raw: string
  language: string
  component: any
}

export const getExampleComponent = (payload: {
  component: any
  raw: string
  language: string
}): ExampleComponent => {
  const c = payload.component as DefineComponent & {
    title: string
    url: string
  }

  const path = new URL(c.url).pathname

  return {
    name: c.name,
    title: c.title || c.name,
    path: path,
    url: getGitHubFileSourceURL(GITHUB_PROJECT_NAME, path),
    component: c,
    raw: payload.raw,
    language: payload.language
  }
}
