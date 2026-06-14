'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/Utils'

const VW = 300
const VH = 380
const MAX_LEVEL = 10
const REGEN_MS = 12000 // grow a new tree every 12s
const FADE_MS = 800 // soft crossfade between trees

type Branch = { d: string; w: number }

/**
 * Grows a feathery recursive tree: a slightly wandering, not-too-tall trunk
 * that splits into a broad, wispy canopy with plenty of forks. Built on the
 * client (organic each time, keeps SSR HTML light); rendered as one path per
 * depth level so strokes taper from thick trunk to fine twigs.
 */
function buildTree(): Branch[] {
  const byLevel: string[] = Array.from({ length: MAX_LEVEL }, () => '')
  const r = Math.random

  const grow = (x: number, y: number, angle: number, len: number, level: number) => {
    if (level >= MAX_LEVEL || len < 1.5) return
    const x2 = x + Math.cos(angle) * len
    const y2 = y + Math.sin(angle) * len
    byLevel[level] += `M${x.toFixed(1)} ${y.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`

    if (level < 2) {
      // Trunk: rises with a gentle wander, plus the odd small side twig.
      grow(x2, y2, angle + (r() - 0.5) * 0.3, len * 0.82, level + 1)
      if (r() < 0.55) {
        const dir = r() < 0.5 ? -1 : 1
        grow(x2, y2, angle + dir * (0.6 + r() * 0.5), len * 0.5, level + 2)
      }
    } else {
      // Canopy: split into 2–3, spreading wide and feathery.
      const branches = 2 + (r() < 0.5 ? 1 : 0)
      for (let i = 0; i < branches; i++) {
        const t = branches === 1 ? 0 : i / (branches - 1) - 0.5
        const spread = t * 1.45 + (r() - 0.5) * 0.78
        grow(x2, y2, angle + spread, len * (0.66 + r() * 0.16), level + 1)
      }
    }
  }

  grow(VW / 2, VH - 6, -Math.PI / 2, 64, 0)

  return byLevel
    .map((d, level) => ({ d, w: Math.max(0.35, 2.4 * Math.pow(0.74, level)) }))
    .filter((b) => b.d.length > 0)
}

/**
 * Wispy tree on the right of the Experience section (behind the entries on
 * mobile). It slides straight down with the scroll, and regrows into a fresh
 * tree every 12s with a soft fade. A small button pauses the regrowth.
 */
export function ExperienceTree({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [branches, setBranches] = useState<Branch[]>([])
  const [opacity, setOpacity] = useState(0)
  const [paused, setPaused] = useState(false)

  // First tree (fades in).
  useEffect(() => {
    setBranches(buildTree())
    setOpacity(1)
  }, [])

  // Regrow every 12s with a fade-out → swap → fade-in cycle.
  useEffect(() => {
    if (paused || reducedMotion) return
    let fadeTimer: ReturnType<typeof setTimeout>
    let holdTimer: ReturnType<typeof setTimeout>

    const schedule = () => {
      holdTimer = setTimeout(() => {
        setOpacity(0) // fade the old tree out
        fadeTimer = setTimeout(() => {
          setBranches(buildTree())
          setOpacity(1) // fade the new tree in
          schedule()
        }, FADE_MS)
      }, REGEN_MS)
    }

    schedule()
    return () => {
      clearTimeout(holdTimer)
      clearTimeout(fadeTimer)
    }
  }, [paused, reducedMotion])

  // Slide straight down, top-to-bottom, tracking the scroll position.
  useEffect(() => {
    if (reducedMotion) return
    const el = ref.current
    const inner = innerRef.current
    if (!el || !inner) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = (vh - rect.top) / (vh + rect.height)
      const p = Math.max(0, Math.min(1, progress))
      inner.style.transform = `translateY(${(p - 0.5) * 100}%)`
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
  }, [reducedMotion])

  return (
    <>
      <div ref={ref} aria-hidden="true" className={className}>
        <div
          ref={innerRef}
          className="absolute inset-0 transition-opacity ease-out will-change-transform"
          style={{ opacity, transitionDuration: `${FADE_MS}ms` }}
        >
          <svg
            className="h-full w-full text-ink"
            viewBox={`0 0 ${VW} ${VH}`}
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {branches.map((b, i) => (
              <path key={i} d={b.d} stroke="currentColor" strokeWidth={b.w} strokeLinecap="round" />
            ))}
          </svg>
        </div>
      </div>

      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-pressed={paused}
          aria-label={paused ? 'Resume tree regrowth' : 'Pause tree regrowth'}
          title={paused ? 'Resume tree regrowth' : 'Pause tree regrowth'}
          className={cn(
            'absolute bottom-6 right-6 z-20 grid h-9 w-9 place-items-center',
            'border border-ink/25 bg-surface/60 text-ink/60 backdrop-blur-sm',
            'transition-colors hover:border-ink/60 hover:text-ink'
          )}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M7 5l12 7-12 7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          )}
        </button>
      )}
    </>
  )
}
