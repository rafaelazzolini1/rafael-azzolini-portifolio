import type { Project } from '@/types'
import { ArrowUpRightIcon } from '@/components/ui/Icons'

interface ProjectCardProps {
  project: Project
  demoLabel?: string
  repoLabel?: string
}

export function ProjectCard({
  project,
  demoLabel = 'Demo',
  repoLabel = 'GitHub',
}: ProjectCardProps) {
  const { number, title, description, emoji, tags, demoUrl, repoUrl } = project

  return (
    <article className="group h-full flex flex-col bg-ink/[0.02] border border-ink/10 overflow-hidden hover:border-ink/35 hover:-translate-y-1.5 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-ink/[0.04] to-ink/[0.08]">
        <div aria-hidden="true" className="absolute inset-0 tech-grid opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center text-5xl grayscale opacity-90 group-hover:scale-105 transition-transform duration-300">
          <span aria-hidden="true">{emoji}</span>
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-surface/85 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink text-surface text-[0.7rem] font-mono font-semibold tracking-wide uppercase hover:bg-ink/85 transition-colors"
            >
              {demoLabel}
              <ArrowUpRightIcon className="w-3 h-3" />
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink/40 text-ink text-[0.7rem] font-mono font-semibold tracking-wide uppercase hover:bg-ink/10 transition-colors"
            >
              {repoLabel}
              <ArrowUpRightIcon className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="font-mono text-[0.7rem] text-ink/40 tracking-[0.2em] uppercase mb-1.5">{number}</p>
        <h3 className="font-mono text-lg text-ink mb-3">{title}</h3>
        <p className="text-sm text-ink/55 leading-[1.75] mb-5 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] tracking-widest uppercase px-2.5 py-1 border border-ink/15 text-ink/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
