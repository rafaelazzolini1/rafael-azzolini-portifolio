import type { Translation } from '@/translations'

export function Footer({ footer }: { footer: Translation['footer'] }) {
  return (
    <footer className="border-t border-ink/15 bg-surface">
      <div className="px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">

        <p className="flex-1 text-center text-[8px] lg:text-[9px] font-mono text-ink/50">
          © {new Date().getFullYear()} · {footer.tagline}
        </p>

        <div aria-hidden="true" className="flex gap-1 items-center shrink-0">
          <div className="w-1 h-1 bg-ink/60 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-ink/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 bg-ink/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>

      </div>
    </footer>
  )
}
