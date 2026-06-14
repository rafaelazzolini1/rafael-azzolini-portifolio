'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

/**
 * Reads the active theme from the `<html>` class and stays in sync when the
 * ThemeToggle flips it (via the custom `themechange` event) or when another
 * tab changes it (via the storage event).
 */
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const sync = () => setTheme(readTheme())
    sync()
    window.addEventListener('themechange', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('themechange', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  return theme
}
