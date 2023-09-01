import { App, inject, ref, computed, readonly } from 'vue'
import storage from '@/services/storage'

export enum Theme {
  System = 'system',
  Light = 'light',
  Dark = 'dark'
}

const THEME_STORAGE_KEY = '__theme'
export const THEMES = [Theme.System, Theme.Light, Theme.Dark]

// system theme
export const getSystemTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark
  }
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return Theme.Light
  }
}

// local theme
export const getLocalTheme = () => {
  const historyTheme = storage.get(THEME_STORAGE_KEY) as Theme
  if (historyTheme && THEMES.includes(historyTheme)) {
    return historyTheme
  }
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

  const systemTheme = ref(defaultTheme)
  const initOnClient = () => {
    systemTheme.value = getSystemTheme() || defaultTheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
      systemTheme.value = matches ? Theme.Dark : Theme.Light
    })
  }

  const currentTheme = computed(() => {
    if (theme.value === Theme.System) {
      return systemTheme.value
    } else {
      return theme.value
    }
  })

  return {
    theme: readonly(theme),
    currentTheme,
    setTheme,
    initOnClient
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
