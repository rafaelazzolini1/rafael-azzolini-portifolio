import { SectionHeader } from '@/components/ui/Sectionheader'
import { RevealWrapper } from '@/components/ui/Revealwrapper'
import { LinkedInIcon, GitHubIcon, FileIcon } from '@/components/ui/Icons'
import { CONTACT_LINKS, CONTACT_EMAIL } from '@/data/portfolio'
import type { ContactLink } from '@/types'
import type { Translation } from '@/translations'

const ICON_MAP: Record<ContactLink['icon'], React.ComponentType<{ className?: string }>> = {
  linkedin: LinkedInIcon,
  github:   GitHubIcon,
  file:     FileIcon,
}

export function ContactSection({ contact }: { contact: Translation['contact'] }) {
  return (
    <section id="contato" className="relative flex min-h-screen flex-col justify-center border-t border-ink/10 bg-surface py-28 px-[6%] text-center">
      <SectionHeader label={contact.sectionLabel} title={contact.sectionTitle} center />

      <RevealWrapper>
        <p className="text-ink/55 text-base leading-relaxed max-w-md mx-auto mb-12">
          {contact.description}
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block font-mono text-xl md:text-3xl text-ink hover:text-ink/70 transition-colors mb-3 break-all"
        >
          {CONTACT_EMAIL}
        </a>

        <div className="flex justify-center gap-4 flex-wrap mt-10">
          {CONTACT_LINKS.map(({ id, href, icon }) => {
            const Icon = ICON_MAP[icon]
            const label = id === 'resume'
              ? contact.links.resume
              : id.charAt(0).toUpperCase() + id.slice(1)
            return (
              <a
                key={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-6 py-3.5 border border-ink/15 text-ink/80 text-sm font-mono tracking-wide hover:border-ink/50 hover:text-ink hover:-translate-y-1 transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-ink/70" />
                {label}
              </a>
            )
          })}
        </div>
      </RevealWrapper>
    </section>
  )
}
