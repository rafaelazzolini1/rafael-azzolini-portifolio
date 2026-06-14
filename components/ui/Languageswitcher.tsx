'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LANGUAGES, type Language } from '@/translations'
import { cn } from '@/lib/Utils'

function Flag({ lang, className }: { lang: Language; className?: string }) {
  return (
    <Image
      src={`/flags/${lang}.svg`}
      alt=""
      aria-hidden="true"
      width={24}
      height={16}
      className={cn('object-cover rounded-[2px]', className)}
    />
  )
}

const LANGS = Object.keys(LANGUAGES) as Language[]

export function LanguageSwitcher({ locale, openUp = false }: { locale: Language; openUp?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  // Remember the choice so the root redirect honours it next visit.
  function persist(lang: Language) {
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; samesite=lax`
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        className={cn(
          'flex items-center gap-2 px-3 py-2 cursor-pointer',
          'border border-ink/20 hover:border-ink/50',
          'text-[10px] font-mono tracking-widest uppercase',
          'text-ink/55 hover:text-ink',
          'transition-colors duration-200',
          isOpen && 'border-ink/50 text-ink'
        )}
      >
        <Flag lang={locale} className="w-6 h-4" />
        <span>{LANGUAGES[locale].nativeName}</span>
        <svg
          className={cn('w-3 h-3 transition-transform duration-200', isOpen && 'rotate-180')}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <ul
        role="listbox"
        aria-label="Available languages"
        className={cn(
          'absolute right-0 min-w-[180px] list-none',
          'bg-surface border border-ink/20',
          'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',
          'transition-all duration-200 z-50',
          openUp ? 'bottom-full mb-2 origin-bottom-right' : 'top-full mt-2 origin-top-right',
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        {LANGS.map((lang) => {
          const isSelected = lang === locale
          return (
            <li key={lang} role="option" aria-selected={isSelected}>
              <Link
                href={`/${lang}`}
                onClick={() => persist(lang)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5 cursor-pointer text-left',
                  'text-xs font-mono tracking-wider transition-colors duration-150',
                  isSelected
                    ? 'bg-ink/10 text-ink'
                    : 'text-ink/55 hover:bg-ink/5 hover:text-ink'
                )}
              >
                <Flag lang={lang} className="w-6 h-4 shrink-0" />
                <span className="flex-1">{LANGUAGES[lang].nativeName}</span>
                {isSelected && (
                  <svg
                    className="w-3.5 h-3.5 text-ink shrink-0"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
