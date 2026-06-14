'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/Utils'

/**
 * Discreet "back to top" button that fades in once the user reaches the bottom
 * of the page, anchored to the bottom-right corner.
 */
export function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const reached =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 240
      setShow(reached)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={label}
      title={label}
      className={cn(
        'fixed bottom-14 right-6 z-50 grid h-10 w-10 place-items-center',
        'border border-ink/25 bg-surface/70 text-ink/70 backdrop-blur-sm',
        'transition-all duration-300 hover:border-ink/60 hover:text-ink',
        show ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
