'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeSection
}