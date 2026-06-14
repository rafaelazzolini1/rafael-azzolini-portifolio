'use client'

import { useEffect, useState } from 'react'
import { useActiveSection } from '@/hooks/Useactivesection'
import { cn } from '@/lib/Utils'
import { LanguageSwitcher } from '@/components/ui/Languageswitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { MenuIcon, CloseIcon } from '@/components/ui/Icons'
import type { Translation, Language } from '@/translations'

interface NavbarProps {
  nav: Translation['nav']
  a11y: Translation['a11y']
  locale: Language
}

const SECTION_IDS = ['sobre', 'skills', 'projetos', 'experiencia', 'contato']

export function Navbar({ nav, a11y, locale }: NavbarProps) {
  const activeSection = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  const links = [
    { label: nav.about,      href: '#sobre'       },
    { label: nav.skills,     href: '#skills'      },
    { label: nav.projects,   href: '#projetos'    },
    { label: nav.experience, href: '#experiencia' },
    { label: nav.contact,    href: '#contato'     },
  ]

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-b border-ink/15">
      <div className="px-4 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* Left: identity */}
        <a href="#hero" className="group flex items-center gap-2.5" aria-label="Rafael Azzolini — início">
          <span className="grid h-8 w-8 place-items-center font-mono text-xs font-bold text-ink transition-colors group-hover:bg-ink group-hover:text-surface">
            RA
          </span>
          <span className="hidden sm:block font-mono text-xs tracking-[0.25em] uppercase text-ink/70 transition-colors group-hover:text-ink">
            Azzolini
          </span>
        </a>

        {/* Center: desktop links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-10 list-none">
          {links.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    'relative font-mono text-xs tracking-widest uppercase transition-colors duration-200',
                    isActive ? 'text-ink' : 'text-ink/45 hover:text-ink'
                  )}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px bg-ink transition-all duration-300',
                      isActive ? 'w-full' : 'w-0'
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right: language + theme + mobile toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <ThemeToggle label={a11y.toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden grid h-9 w-9 place-items-center border border-ink/25 text-ink hover:border-ink/50 transition-colors"
          >
            {open ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden overflow-hidden border-t bg-surface transition-all duration-300 ease-out',
          open ? 'max-h-[80vh] border-ink/10' : 'max-h-0 border-transparent'
        )}
      >
        <ul className="list-none px-4 py-2">
          {links.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-3 py-3.5 border-b border-ink/8 font-mono text-sm tracking-widest uppercase transition-colors',
                    isActive ? 'text-ink' : 'text-ink/55 hover:text-ink'
                  )}
                >
                  <span aria-hidden="true" className={cn('h-1.5 w-1.5', isActive ? 'bg-ink' : 'bg-ink/25')} />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="px-4 py-4">
          <LanguageSwitcher locale={locale} openUp />
        </div>
      </div>
    </nav>
  )
}
