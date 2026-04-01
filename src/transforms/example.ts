import { Component } from 'vue'
import { getGitHubFileSourceURL } from '@/transforms/url'
import { GITHUB_PROJECT_NAME } from '@/config'

type ExampleComponentDefinition = Component & {
  name?: string
  title?: string
}

export interface ExampleComponentInput {
  component: ExampleComponentDefinition
  raw: string
  language: string
  path: string
}

export interface ExampleComponent {
  name?: string
  title?: string
  path: string
  url: string
  raw: string
  language: string
  component: ExampleComponentDefinition
}

export const normalizeExample = (input: ExampleComponentInput): ExampleComponent => {
  return {
    name: input.component.name,
    title: input.component.title || input.component.name,
    path: input.path,
    url: getGitHubFileSourceURL(GITHUB_PROJECT_NAME, input.path),
    raw: input.raw,
    language: input.language,
    component: input.component
  }
}
