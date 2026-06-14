import { cn } from '@/lib/Utils'

interface SectionHeaderProps {
  label: string
  title: string
  center?: boolean
  className?: string
}

export function SectionHeader({
  label,
  title,
  center = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <div className={cn('flex items-center gap-3 mb-4', center && 'justify-center')}>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/45">
          {label}
        </span>
        <span className="h-px w-10 bg-ink/20" aria-hidden="true" />
      </div>

      <h2 className={cn('font-mono text-2xl md:text-4xl font-bold text-ink leading-tight tracking-tight max-w-3xl', center && 'mx-auto')}>
        {title}
      </h2>

      <div className={cn('mt-5 h-px w-14 bg-ink/40', center && 'mx-auto')} aria-hidden="true" />
    </div>
  )
}
