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

export interface ExampleComponentConfig {
  component: any
  raw: string
  language: string
}

export const getExampleComponent = (payload: ExampleComponentConfig): ExampleComponent => {
  const comp = payload.component as DefineComponent & {
    title: string
    url: string
  }

  let path = ''
  try {
    path = new URL(comp.url).pathname
  } catch (error) {}

  return {
    name: comp.name,
    title: comp.title || comp.name,
    path: path,
    url: getGitHubFileSourceURL(GITHUB_PROJECT_NAME, path),
    component: comp,
    raw: payload.raw,
    language: payload.language
  }
}
