import { SectionHeader } from '@/components/ui/Sectionheader'
import { SoftReveal } from '@/components/ui/SoftReveal'
import { ExperienceTree } from '@/components/sections/ExperienceTree'
import { EXPERIENCES } from '@/data/portfolio'
import type { Translation } from '@/translations'

export function ExperienceSection({ experience }: { experience: Translation['experience'] }) {
  // Merge static dates/ids with translated content
  const items = [
    { ...EXPERIENCES[0], ...experience.items.job1       },
    { ...EXPERIENCES[1], ...experience.items.job2       },
    { ...EXPERIENCES[2], ...experience.items.internship },
    { ...EXPERIENCES[3], ...experience.items.education  },
  ]

  return (
    <section id="experiencia" className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-ink/10 bg-surface py-28 px-[6%]">
      {/* Wispy tree: behind the entries on mobile, on the right at desktop */}
      <ExperienceTree className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full opacity-[0.12] md:w-2/5 md:opacity-80" />

      <div className="relative z-10 w-full">
      <SectionHeader label={experience.sectionLabel} title={experience.sectionTitle} />

      <div className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-ink/15">
        {items.map((item, index) => (
          <SoftReveal
            key={item.id}
            delay={index * 140}
            duration={1000}
            className="relative mb-14 last:mb-0 before:content-[''] before:absolute before:-left-[2.8rem] before:top-1.5 before:w-2.5 before:h-2.5 before:border before:border-ink/60 before:bg-surface before:rounded-full"
          >
            <p className="font-mono text-[0.7rem] text-ink/45 tracking-[0.2em] uppercase mb-1.5">{item.date}</p>
            <h3 className="font-mono text-lg text-ink mb-0.5">{item.role}</h3>
            <p className="text-sm text-ink/70 font-medium mb-3">{item.company}</p>
            <p className="text-sm text-ink/50 leading-[1.75] max-w-xl">{item.description}</p>
          </SoftReveal>
        ))}
      </div>
      </div>
    </section>
  )
}
