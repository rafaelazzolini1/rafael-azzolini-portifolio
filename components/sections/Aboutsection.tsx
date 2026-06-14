import { SectionHeader } from '@/components/ui/Sectionheader'
import { RevealWrapper } from '@/components/ui/Revealwrapper'
import type { Translation } from '@/translations'

export function AboutSection({ about }: { about: Translation['about'] }) {
  const infoRows = [
    { label: about.infoCard.location,     value: about.infoCard.locationValue     },
    { label: about.infoCard.focus,        value: about.infoCard.focusValue        },
    { label: about.infoCard.languages,    value: about.infoCard.languagesValue    },
    { label: about.infoCard.availability, value: about.infoCard.availabilityValue },
    { label: about.infoCard.workModel,    value: about.infoCard.workModelValue    },
  ]

  return (
    <section id="sobre" className="relative flex min-h-screen flex-col justify-center border-t border-ink/10 bg-surface py-28 px-[6%]">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

        <RevealWrapper>
          <SectionHeader label={about.sectionLabel} title={about.sectionTitle} />
          <div className="space-y-5 text-ink/55 text-[0.95rem] leading-[1.9]">
            <p>{about.paragraph1}</p>
            <p>{about.paragraph2}</p>
            <blockquote className="border-l-2 border-ink/40 pl-5 italic text-ink/80 mt-7">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <div className="relative bg-ink/[0.02] border border-ink/12 p-9">
            {/* Corner accents */}
            <span aria-hidden="true" className="absolute -top-px -left-px w-3 h-3 border-t border-l border-ink/50" />
            <span aria-hidden="true" className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-ink/50" />

            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink/70">
                {about.infoCard.title}
              </h3>
            </div>

            <dl className="font-mono">
              {infoRows.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-baseline gap-4 py-3 border-b border-ink/8 last:border-0 text-sm"
                >
                  <dt className="text-ink/40 text-xs tracking-wide uppercase shrink-0">{label}</dt>
                  <dd className="text-ink/90 text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
