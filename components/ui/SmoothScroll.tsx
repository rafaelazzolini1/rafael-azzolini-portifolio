'use client'

import { useEffect } from 'react'

/**
 * Intercepts clicks on in-page anchors (href="#id") and scrolls to the target
 * smoothly WITHOUT writing the hash to the URL — so navigating this one-page
 * site keeps the address bar clean (e.g. /en instead of /en#projetos).
 *
 * The anchors stay real <a href="#…"> elements, so the site still works (and
 * stays accessible) if JS is disabled — this only enhances the behavior.
 */
export function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Let the browser handle modified clicks / non-primary buttons.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return
      }
      const anchor = (e.target as HTMLElement | null)?.closest('a')
      const href = anchor?.getAttribute('href')
      if (!href || href === '#' || !href.startsWith('#')) return

      const target = document.getElementById(href.slice(1))
      if (!target) return

      e.preventDefault()
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
