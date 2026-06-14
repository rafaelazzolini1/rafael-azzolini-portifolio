import { WovenFigure } from '@/components/sections/WovenFigure'
import type { Translation } from '@/translations'

export function HeroSection({ hero }: { hero: Translation['hero'] }) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-surface">

      {/* ── Full-bleed woven-light animation across the whole section ── */}
      <WovenFigure
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        opacity={0.9}
      />

      {/* ── Text content on a panel that bleeds to the right edge ───── */}
      <div className="relative z-10 flex min-h-screen items-center pt-16">

        <div className="relative w-full lg:ml-auto lg:w-[52%]" style={{ marginTop: '5vh' }}>

          {/* Translucent panel: extends past the right screen edge, animation
              stays visible behind it (clipped by the section's overflow). */}
          <div
            aria-hidden="true"
            className="absolute inset-0 right-[-100vw] bg-surface/70 backdrop-blur-md border-y border-l border-ink/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          />

          <div className="relative max-w-xl px-5 py-7 sm:px-6 sm:py-8 lg:pl-10 lg:pr-12 lg:py-10">

            {/* Badge */}
            <p className="text-ink/50 text-[10px] font-mono tracking-widest uppercase mb-3">
              {hero.badge}
            </p>

            {/* Name */}
            <div className="relative mb-4">
              <div aria-hidden="true" className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-40" />
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight font-mono tracking-wide sm:tracking-wider uppercase">
                RAFAEL
                <span className="block mt-1 lg:mt-2 opacity-90">AZZOLINI</span>
              </h1>
            </div>

            {/* Role */}
            <p className="text-ink/60 font-mono text-xs lg:text-sm tracking-widest uppercase mb-4">
              {hero.role}
            </p>

            {/* Decorative dots */}
            <div aria-hidden="true" className="hidden lg:flex gap-1 mb-4 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-ink rounded-full" />
              ))}
            </div>

            {/* Description */}
            <div className="relative mb-7">
              <p className="text-xs lg:text-sm text-ink/80 leading-relaxed font-mono opacity-80">
                {hero.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href="#projetos"
                className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent text-ink font-mono text-xs lg:text-sm border border-ink hover:bg-ink hover:text-surface transition-all duration-200 text-center group"
              >
                <span aria-hidden="true" className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-ink opacity-0 group-hover:opacity-100 transition-opacity" />
                <span aria-hidden="true" className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-ink opacity-0 group-hover:opacity-100 transition-opacity" />
                {hero.ctaPrimary.toUpperCase()}
              </a>
              <a
                href="#contato"
                className="px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent border border-ink/40 text-ink/70 font-mono text-xs lg:text-sm hover:bg-ink hover:text-surface hover:border-ink transition-all duration-200 text-center"
              >
                {hero.ctaSecondary.toUpperCase()}
              </a>
            </div>



          </div>
        </div>
      </div>

    </section>
  )
}
