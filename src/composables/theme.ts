import { App, inject, ref, computed, readonly } from 'vue'

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

const createThemeStore = (defaultTheme: Theme) => {
  const theme = ref(defaultTheme)
  const isDark = computed(() => theme.value === Theme.Dark)

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
  }

  const toggleTheme = () => {
    setTheme(theme.value === Theme.Dark ? Theme.Light : Theme.Dark)
  }

  return {
    theme: readonly(theme),
    isDark,
    setTheme,
    toggleTheme
  }
}

export type ThemeState = ReturnType<typeof createThemeStore>

const ThemeSymbol = Symbol('theme')

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
