import { App, inject, reactive, readonly } from 'vue'

export interface VisiorOptions {
  language: string
  userAgent: string
}

export type VisiorState = ReturnType<typeof getVisior>
export const getVisior = (options: VisiorOptions) => {
  return {
    language: options.language,
    userAgent: options.userAgent,
    isZhLangGuest: options.language.includes('zh-CN'),
    isMobileDevice:
      /Android/i.test(options.userAgent) ||
      /webOS/i.test(options.userAgent) ||
      /iPhone/i.test(options.userAgent) ||
      /iPad/i.test(options.userAgent) ||
      /iPod/i.test(options.userAgent) ||
      /BlackBerry/i.test(options.userAgent) ||
      /Windows Phone/i.test(options.userAgent)
  }
}

const VisitorSymbol = Symbol('visitor')
export const createVisitor = (options: VisiorOptions) => {
  const state = reactive(getVisior(options))
  const resetStateOnClient = () => {
    Object.assign(
      state,
      getVisior({
        language: navigator.language,
        userAgent: navigator.userAgent
      })
    )
  }

  const readonlyState = readonly(state)
  return {
    state: readonlyState,
    resetStateOnClient,
    install(app: App) {
      app.provide(VisitorSymbol, readonlyState)
    }
  }
}

export const useVisitor = () => {
  return inject<VisiorState>(VisitorSymbol)!
}
