'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/Utils'

const CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?"
const COLS = 64
const ROWS = 36

// One fixed block of random "code" the size of a card (generated client-side
// once, so it stays perfectly still instead of flickering).
function asciiBlock(): string {
  let out = ''
  for (let r = 0; r < ROWS; r++) {
    let line = ''
    for (let c = 0; c < COLS; c++) line += CHARS[(Math.random() * CHARS.length) | 0]
    out += line + '\n'
  }
  return out
}

// Reveal window, in fractions of the viewport height, measured against the
// card's top edge: it begins decomposing as soon as the card peeks in from the
// bottom, and is fully composed before the middle — so a card sitting in a
// centred section reads as completely revealed.
const REVEAL_START = 0.9
const REVEAL_END = 0.4

/**
 * Wraps a card so it starts *decomposed* (a still ASCII overlay) and recomposes
 * from the top down as the user scrolls it up through the viewport. The reveal
 * is scroll-scrubbed: progress maps the card's position to a clip that erases
 * the overlay top-to-bottom, with a scan line at the boundary.
 */
export function ScanRevealCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const [progress, setProgress] = useState(0)
  const [ascii, setAscii] = useState('')

  const covered = !reduced && progress < 1

  // Generate the static code once on the client (avoids SSR mismatch).
  useEffect(() => {
    setAscii(asciiBlock())
  }, [])

  // Scroll-scrubbed reveal progress (0 = decomposed, 1 = fully shown).
  useEffect(() => {
    if (reduced) {
      setProgress(1)
      return
    }
    const el = ref.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const start = vh * REVEAL_START
      const end = vh * REVEAL_END
      const next = (start - rect.top) / (start - end)
      setProgress(Math.max(0, Math.min(1, next)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduced])

  return (
    <div ref={ref} className={cn('relative h-full', className)}>
      {children}

      {covered && (
        <>
          {/* Decomposed overlay — erased from the top as progress grows. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-card"
            style={{ clipPath: `inset(${progress * 100}% 0 0 0)` }}
          >
            <pre className="m-0 select-none whitespace-pre font-mono text-[11px] leading-[13px] tracking-tight text-ink/30">
              {ascii}
            </pre>
          </div>

          {/* Scan line riding the reveal boundary. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 z-30 h-px bg-ink shadow-[0_0_12px_2px] shadow-ink/50 transition-opacity"
            style={{ top: `${progress * 100}%`, opacity: progress > 0.001 ? 1 : 0 }}
          />
        </>
      )}
    </div>
  )
}
