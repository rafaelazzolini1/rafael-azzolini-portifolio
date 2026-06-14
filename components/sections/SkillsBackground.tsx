'use client'

import { useEffect, useRef, useState } from 'react'
import { BulbIcon } from '@/components/ui/Icons'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useTheme } from '@/hooks/useTheme'

type Particle = {
  x: number
  y: number
  r: number
  vy: number
  phase: number
  twinkle: number
}

type Spot = {
  x: number
  y: number
  r: number
  intensity: number // current 0..1
  target: number // 0 (fading out) or 1 (fading in)
  changeAt: number // timestamp (ms) at which this spot retires
}

const rand = (min: number, max: number) => min + Math.random() * (max - min)

const SPOT_COUNT = 5
const SPOT_LIFE = 12000 // ms — each spot relocates roughly every 12s

/**
 * Backdrop for the Technical Stack section: a full-bleed falling-sparkle field
 * (plain canvas). The field is hidden behind the surface colour and only
 * "loads in" through a handful of soft spots placed at random across the
 * section; those spots fade out and re-spawn elsewhere every ~12s. The
 * bottom-right button lights the whole field at once. Sparkle colour tracks the
 * active light / dark theme each frame.
 */
export function SkillsBackground({
  revealLabel,
  dimLabel,
}: {
  revealLabel: string
  dimLabel: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [lit, setLit] = useState(false)
  const litRef = useRef(lit)
  litRef.current = lit
  const reducedMotion = usePrefersReducedMotion()
  const theme = useTheme()
  const colorRef = useRef('#ffffff')

  // Keep the live colour in a ref the animation loop can read each frame.
  useEffect(() => {
    colorRef.current = theme === 'light' ? '#000000' : '#ffffff'
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let width = 0
    let height = 0
    let particles: Particle[] = []
    let spots: Spot[] = []

    const placeSpot = (s: Spot, now: number) => {
      s.x = rand(0.08, 0.92) * width
      s.y = rand(0.12, 0.88) * height
      s.r = rand(0.16, 0.28) * Math.min(width, height) + 80
      s.changeAt = now + SPOT_LIFE
    }

    const buildSpots = (now: number) => {
      spots = Array.from({ length: SPOT_COUNT }, () => {
        const s: Spot = { x: 0, y: 0, r: 0, intensity: 0, target: 1, changeAt: 0 }
        placeSpot(s, now)
        // Stagger the first retirement so they don't all blink together.
        s.changeAt = now + rand(0, SPOT_LIFE)
        return s
      })
    }

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(Math.max((width * height) / 900, 280), 1400))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(0.7, 2.2),
        vy: rand(6, 26), // px / second
        phase: Math.random() * Math.PI * 2,
        twinkle: rand(0.6, 2.4),
      }))
    }

    const updateSpots = (now: number) => {
      for (const s of spots) {
        if (now >= s.changeAt && s.target === 1) s.target = 0 // begin fade-out
        if (s.target === 0 && s.intensity < 0.02) {
          placeSpot(s, now) // re-spawn somewhere new
          s.target = 1
        }
        s.intensity += (s.target - s.intensity) * 0.045
      }
    }

    // Strongest reveal from any spot covering this point (0..1).
    const revealAt = (px: number, py: number) => {
      let v = 0
      for (const s of spots) {
        if (s.intensity <= 0.01) continue
        const dx = px - s.x
        const dy = py - s.y
        const d2 = dx * dx + dy * dy
        const r2 = s.r * s.r
        if (d2 < r2) {
          const f = 1 - Math.sqrt(d2) / s.r
          const e = f * f * (3 - 2 * f) // smoothstep falloff
          if (e * s.intensity > v) v = e * s.intensity
        }
      }
      return v
    }

    const drawParticle = (p: Particle, alpha: number) => {
      if (alpha <= 0.01) return
      ctx.globalAlpha = alpha
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = (dt: number, now: number) => {
      const litNow = litRef.current
      if (!litNow) updateSpots(now)
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = colorRef.current
      for (const p of particles) {
        p.y += p.vy * dt
        if (p.y - p.r > height) {
          p.y = -p.r
          p.x = Math.random() * width
        }
        p.phase += p.twinkle * dt
        const twinkle = 0.1 + 0.9 * (0.5 + 0.5 * Math.sin(p.phase))
        drawParticle(p, litNow ? twinkle : twinkle * revealAt(p.x, p.y))
      }
      ctx.globalAlpha = 1
    }

    let last = performance.now()
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      draw(dt, now)
      raf = requestAnimationFrame(frame)
    }

    build()
    buildSpots(performance.now())
    const ro = new ResizeObserver(() => build())
    ro.observe(canvas)

    if (reducedMotion) {
      // Static: show the whole field once (no motion, no cycling spots).
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = colorRef.current
      for (const p of particles) {
        drawParticle(p, 0.1 + 0.9 * (0.5 + 0.5 * Math.sin(p.phase)))
      }
      ctx.globalAlpha = 1
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [reducedMotion])

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden bg-surface">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
      </div>

      <button
        type="button"
        onClick={() => setLit((v) => !v)}
        aria-pressed={lit}
className="group absolute bottom-6 left-6 z-20 inline-flex items-center gap-2 border border-ink/25 bg-surface/60 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/75 backdrop-blur-sm transition-colors hover:border-ink/60 hover:text-ink"      >
        <BulbIcon className="h-3.5 w-3.5" filled={lit} />
        {lit ? dimLabel : revealLabel}
      </button>
    </>
  )
}
