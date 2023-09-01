import { App, inject, ref, readonly } from 'vue'
import storage from '@/services/storage'

export enum Theme {
  System = 'system',
  Light = 'light',
  Dark = 'dark'
}

const THEME_STORAGE_KEY = '__theme'
export const THEMES = [Theme.System, Theme.Light, Theme.Dark]

export const getLocalTheme = () => {
  // local theme
  const historyTheme = storage.get(THEME_STORAGE_KEY)
  if (historyTheme && THEMES.includes(historyTheme as Theme)) {
    return historyTheme as Theme
  }
  // system theme
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark
  }
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return Theme.Light
  }
  // not specified
  return Theme.System
}

const ThemeSymbol = Symbol('theme')
const createThemeStore = (defaultTheme: Theme) => {
  const theme = ref(defaultTheme)
  const setTheme = (newTheme: Theme) => {
    if (THEMES.includes(newTheme)) {
      theme.value = newTheme
      storage.set(THEME_STORAGE_KEY, newTheme)
    }
  }

  return {
    theme: readonly(theme),
    set: setTheme
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
