import { SectionHeader } from '@/components/ui/Sectionheader'
import { RevealWrapper } from '@/components/ui/Revealwrapper'
import { SkillsBackground } from '@/components/sections/SkillsBackground'
import { CodeIcon, ServerIcon, ToolsIcon } from '@/components/ui/Icons'
import { SKILL_CATEGORIES } from '@/data/portfolio'
import type { SkillCategory, SkillLevel } from '@/types'
import type { Translation } from '@/translations'

const ICON_MAP: Record<SkillCategory['icon'], React.ComponentType<{ className?: string }>> = {
  code:   CodeIcon,
  server: ServerIcon,
  tools:  ToolsIcon,
}

const LEVEL_ORDER: SkillLevel[] = ['proficient', 'familiar', 'learning']

export function SkillsSection({ skills }: { skills: Translation['skills'] }) {
  const categoryLabels: Record<string, string> = {
    frontend: skills.categories.frontend,
    backend:  skills.categories.backend,
    tools:    skills.categories.tools,
  }

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-t border-ink/10 bg-surface py-28 px-[6%]"
    >
      <SkillsBackground
        revealLabel={skills.revealImage}
        dimLabel={skills.dimImage}
      />

      <div className="relative z-10">
      {/* Solid backing so the heading stays legible over the lit field */}
      <div className="inline-block bg-surface px-3 py-2 -ml-3">
        <SectionHeader label={skills.sectionLabel} title={skills.sectionTitle} />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((category, index) => {
          const Icon = ICON_MAP[category.icon]
          return (
            <RevealWrapper key={category.id} delay={index * 100}>
              <div className="group h-full bg-card border border-ink/12 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:border-ink/35 hover:-translate-y-1 transition-all duration-300">
                <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase font-semibold text-ink mb-7">
                  <Icon className="w-4 h-4 text-ink/70" />
                  {categoryLabels[category.id]}
                </p>

                <div className="space-y-5">
                  {LEVEL_ORDER.map((level) => {
                    const items = category.skills.filter((s) => s.level === level)
                    if (items.length === 0) return null
                    return (
                      <div key={level}>
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/35 mb-2.5">
                          {'// '}{skills.levels[level]}
                        </p>
                        <ul className="flex flex-wrap gap-2 list-none">
                          {items.map((skill) => (
                            <li
                              key={skill.name}
                              className="font-mono text-xs text-ink/85 border border-ink/15 px-2.5 py-1 hover:border-ink/40 hover:text-ink transition-colors"
                            >
                              {skill.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            </RevealWrapper>
          )
        })}
      </div>
      </div>
    </section>
  )
}
