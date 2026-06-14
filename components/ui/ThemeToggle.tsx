'use client'

import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/Utils'

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* storage blocked — runtime toggle still works for the session */
  }
  window.dispatchEvent(new Event('themechange'))
}

export function ThemeToggle({ label, className }: { label: string; className?: string }) {
  const theme = useTheme()
  const next = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={label}
      title={label}
      className={cn(
        'grid h-9 w-9 place-items-center border border-ink/20 text-ink/70',
        'hover:border-ink/50 hover:text-ink transition-colors',
        className,
      )}
    >
      {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
    </button>
  )
}
