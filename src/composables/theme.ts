import { App, inject, ref, readonly } from 'vue'
import storage from '@/services/storage'

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export const THEME_STORAGE_KEY = '__theme'
export const getLocalTheme = () => {
  // local theme
  const historyTheme = storage.get(THEME_STORAGE_KEY)
  if (historyTheme) {
    return historyTheme === Theme.Dark ? Theme.Dark : Theme.Light
  }
  // system theme
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark
  }
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return Theme.Light
  }
  // not specified || not support
  return Theme.Light
}

const ThemeSymbol = Symbol('theme')
const createThemeStore = (defaultTheme: Theme) => {
  const theme = ref(defaultTheme)
  const set = (newTheme: Theme) => {
    if ([Theme.Light, Theme.Dark].includes(newTheme)) {
      if (newTheme !== theme.value) {
        theme.value = newTheme
        storage.set(THEME_STORAGE_KEY, newTheme)
      }
    }
  }

  const toggle = () => {
    set(theme.value === Theme.Dark ? Theme.Light : Theme.Dark)
  }

  return {
    theme: readonly(theme),
    set,
    toggle
  }
}

export type ThemeState = ReturnType<typeof createThemeStore>
export const createTheme = (defaultTheme: Theme) => {
  const themeStore = createThemeStore(defaultTheme)
  return {
    ...themeStore,
    install(app: App) {
      app.provide(ThemeSymbol, themeStore)
    }
  }
}

export const useTheme = (): ThemeState => {
  return inject(ThemeSymbol) as ThemeState
}
