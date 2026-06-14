'use client'

import type { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/Utils'

interface SoftRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Transition duration in ms (defaults to 900). */
  duration?: number
}

/**
 * A gentle, distinctive reveal: content eases in from the left while a soft
 * blur clears. Unlike RevealWrapper it re-triggers every time it scrolls into
 * view (not just the first time), so each item keeps breathing as you move up
 * and down the page.
 */
export function SoftReveal({ children, className, delay = 0, duration = 900 }: SoftRevealProps) {
  const { ref, isVisible } = useScrollReveal({ once: false, threshold: 0.35 })
  const reducedMotion = usePrefersReducedMotion()

  const shown = reducedMotion || isVisible

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: reducedMotion ? '0ms' : `${delay}ms`,
        transitionDuration: reducedMotion ? '0ms' : `${duration}ms`,
      }}
      className={cn(
        'transition-all ease-out will-change-transform motion-reduce:transition-none',
        shown ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-6 blur-[6px]',
        className
      )}
    >
      {children}
    </div>
  )
}
