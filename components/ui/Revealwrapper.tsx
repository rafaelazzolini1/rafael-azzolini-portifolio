'use client'

import type { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/Utils'

interface RevealWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Transition duration in ms (defaults to 700). */
  duration?: number
}

export function RevealWrapper({ children, className, delay = 0, duration = 700 }: RevealWrapperProps) {
  const { ref, isVisible } = useScrollReveal()
  const reducedMotion = usePrefersReducedMotion()

  // With reduced motion, render content in its final state immediately.
  const shown = reducedMotion || isVisible

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: reducedMotion ? '0ms' : `${delay}ms`,
        transitionDuration: reducedMotion ? '0ms' : `${duration}ms`,
      }}
      className={cn(
        'transition-all ease-out',
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  )
}
