'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useTheme } from '@/hooks/useTheme'

const PARTICLE_COUNT = 20000
const CAMERA_Z = 3
const FOV = 70

// ── Rope shape (local space, runs along the horizontal X axis) ──
const N_STRANDS = 8 // intertwining strands → braided look
const TWISTS = 6 // helical twists along the length
const TUBE = 0.2 // rope radius
const WAVE_AMP = 0.29 // centreline undulation that gives the rope its arc
const WAVE_FREQ = 2
const JITTER = 0.1

// ── Motion ──
const SPIN_SPEED = 0.2 // strands revolve around the rope's axis (rad/s)
const FLOW = 0.1 // the centreline undulation slowly travels
const HUE_SPEED = 0.12 // colour cycling speed (full wheel ≈ 16s)

// ── Non-uniform scale: stretch along X, hold a band in Y/Z ──
const SCALE_X = 6.0
const SCALE_YZ = 3.8

// ── Spring + cursor warp ──
const SPRING = 0.08
const DAMP = 0.5
const INFLUENCE = 0.3

/**
 * "Woven by Light" ambient backdrop — the intertwined figure *unrolled*: a
 * braided rope of light stretched horizontally. The strands continuously
 * revolve around the rope's own horizontal axis (spin + self-twist) and every
 * dot cycles through the colour spectrum over time. Particles warp away from
 * the cursor. Theme-aware (rebuilds on theme change) and respects reduced-motion.
 */
export function WovenFigure({
  className,
  opacity = 1,
}: {
  className?: string
  opacity?: number
}) {
  const mountRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const theme = useTheme()

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}
    const isDark = theme !== 'light'
    const sat = isDark ? 0.85 : 0.7
    const light = isDark ? 0.55 : 0.45

    void (async () => {
      const THREE = await import('three')
      const mount = mountRef.current
      if (disposed || !mount) return

      let width = mount.clientWidth || 1
      let height = mount.clientHeight || 1
      let aspect = width / height

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(FOV, aspect, 0.1, 1000)
      camera.position.z = CAMERA_Z

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      mount.appendChild(renderer.domElement)

      // Per-particle: a length param u, a small static jitter, a base hue.
      const positions = new Float32Array(PARTICLE_COUNT * 3)
      const velocities = new Float32Array(PARTICLE_COUNT * 3)
      const colors = new Float32Array(PARTICLE_COUNT * 3)
      const uArr = new Float32Array(PARTICLE_COUNT)
      const jitter = new Float32Array(PARTICLE_COUNT * 3)
      const baseHue = new Float32Array(PARTICLE_COUNT)
      const color = new THREE.Color()
      const TWO_PI = Math.PI * 2

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const u = Math.random() // 0..1 along the length
        const s = i % N_STRANDS
        uArr[i] = u
        const jx = (Math.random() - 0.5) * JITTER
        const jy = (Math.random() - 0.5) * JITTER
        const jz = (Math.random() - 0.5) * JITTER
        jitter[i * 3] = jx
        jitter[i * 3 + 1] = jy
        jitter[i * 3 + 2] = jz

        // Resting pose at t = 0.
        const angle = u * TWISTS * TWO_PI + (s / N_STRANDS) * TWO_PI
        const cy = WAVE_AMP * Math.sin(u * WAVE_FREQ * TWO_PI)
        positions[i * 3] = u * 2 - 1 + jx
        positions[i * 3 + 1] = cy + TUBE * Math.sin(angle) + jy
        positions[i * 3 + 2] = TUBE * Math.cos(angle) + jz

        // Hue runs along the length, then cycles over time in the loop.
        baseHue[i] = u
        color.setHSL(u, sat, light)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        // Additive glows on black; normal keeps colours readable on white.
        blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
        transparent: true,
        opacity: isDark ? 0.9 : 0.95,
        depthWrite: false,
      })

      const points = new THREE.Points(geometry, material)
      points.scale.set(SCALE_X, SCALE_YZ, SCALE_YZ)
      scene.add(points)

      // Cursor in normalised device coords relative to the mount.
      let mouseX = 0
      let mouseY = 0
      const onMouseMove = (e: MouseEvent) => {
        const rect = mount.getBoundingClientRect()
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      }
      window.addEventListener('mousemove', onMouseMove)

      const halfH = Math.tan(THREE.MathUtils.degToRad(FOV) / 2) * CAMERA_Z
      const clock = new THREE.Clock()
      let frame = 0

      const step = () => {
        const t = clock.getElapsedTime()
        // Map the cursor into the rope's (non-uniform) local space.
        const mwx = (mouseX * halfH * aspect) / SCALE_X
        const mwy = (mouseY * halfH) / SCALE_YZ

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const ix = i * 3
          const iy = ix + 1
          const iz = ix + 2
          const u = uArr[i]
          const s = i % N_STRANDS

          // Advancing the phase by t makes the strands revolve around the
          // rope's horizontal axis (spin) while staying helically twisted.
          const angle = u * TWISTS * TWO_PI + (s / N_STRANDS) * TWO_PI + t * SPIN_SPEED
          // Subtracting t makes the wave crests travel to the right (+x).
          const cy = WAVE_AMP * Math.sin(u * WAVE_FREQ * TWO_PI - t * FLOW)
          const tx = u * 2 - 1 + jitter[ix]
          const ty = cy + TUBE * Math.sin(angle) + jitter[iy]
          const tz = TUBE * Math.cos(angle) + jitter[iz]

          let vx = velocities[ix]
          let vy = velocities[iy]
          let vz = velocities[iz]
          const px = positions[ix]
          const py = positions[iy]
          const pz = positions[iz]

          // Cursor repulsion in the plane.
          const dx = px - mwx
          const dy = py - mwy
          const dist = Math.sqrt(dx * dx + dy * dy + pz * pz)
          if (dist < INFLUENCE && dist > 1e-4) {
            const force = (INFLUENCE - dist) * 0.09
            const inv = 1 / dist
            vx += dx * inv * force
            vy += dy * inv * force
          }

          // Spring toward the (spinning) target pose.
          vx += (tx - px) * SPRING
          vy += (ty - py) * SPRING
          vz += (tz - pz) * SPRING
          vx *= DAMP
          vy *= DAMP
          vz *= DAMP

          positions[ix] = px + vx
          positions[iy] = py + vy
          positions[iz] = pz + vz
          velocities[ix] = vx
          velocities[iy] = vy
          velocities[iz] = vz

          // Cycle each dot's colour around the wheel over time.
          color.setHSL((baseHue[i] + t * HUE_SPEED) % 1, sat, light)
          colors[ix] = color.r
          colors[iy] = color.g
          colors[iz] = color.b
        }
        geometry.attributes.position.needsUpdate = true
        geometry.attributes.color.needsUpdate = true
        renderer.render(scene, camera)
      }

      const animate = () => {
        if (disposed) return
        frame = requestAnimationFrame(animate)
        step()
      }

      if (reducedMotion) {
        renderer.render(scene, camera)
      } else {
        animate()
      }

      const ro = new ResizeObserver(() => {
        width = mount.clientWidth || 1
        height = mount.clientHeight || 1
        aspect = width / height
        camera.aspect = aspect
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      })
      ro.observe(mount)

      cleanup = () => {
        cancelAnimationFrame(frame)
        ro.disconnect()
        window.removeEventListener('mousemove', onMouseMove)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    })()

    return () => {
      disposed = true
      cleanup()
    }
  }, [reducedMotion, theme])

  return (
    <div aria-hidden="true" className={className} style={{ opacity }}>
      <div ref={mountRef} className="absolute inset-0" />
    </div>
  )
}
