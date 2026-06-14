import type { Translation } from './types'

export const de: Translation = {
  nav: {
    about: 'Über mich',
    skills: 'Fähigkeiten',
    projects: 'Projekte',
    experience: 'Erfahrung',
    contact: 'Kontakt',
  },
  hero: {
    badge: 'Offen für neue Möglichkeiten',
    role: 'Full-Stack-Entwickler',
    description:
      'Ich entwickle Interfaces und Systeme mit React, Next.js und TypeScript, automatisiere Prozesse mit Python und strebe stets nach messbarer Effizienz und Code mit Zweck.',
    ctaPrimary: 'Projekte ansehen',
    ctaSecondary: 'Kontakt aufnehmen',
    stats: {
      experience: 'Jahre Erfahrung',
      projects: 'Projekte',
      technologies: 'Technologien',
    },
  },
  about: {
    sectionLabel: '01 — Über mich',
    sectionTitle: 'Code mit Zweck, Design mit Bedeutung',
    paragraph1:
      'Ich bin Computeringenieur mit einem Doppelabschluss (Brasilien und Europäische Union) und auf Full-Stack-Entwicklung mit React, Next.js und TypeScript fokussiert. Ich verwandle Geschäftsprobleme gerne in Produkte, die Wert schaffen — von der Logik bis zur Performance.',
    paragraph2:
      'Ich habe eine Bilanz messbarer Effizienz: Automatisierungen, die bei PepsiCo den Materialverlust um 44 % senkten, und ein KI-Agent mit RAG, der den operativen Aufwand um etwa 34 % reduzierte. Aktuell erweitere ich mich in Richtung AWS mit Python und Go.',
    quote:
      'Ich mag Code, der nicht nur Arbeit ist, sondern auch verständlich und darauf ausgelegt, zu bestehen und zu skalieren.',
    infoCard: {
      title: 'Informationen',
      location: 'Standort',
      locationValue: 'São Paulo, SP — Brasilien',
      focus: 'Aktueller Fokus',
      focusValue: 'Backend · AWS',
      languages: 'Sprachen',
      languagesValue: 'Portugiesisch, Englisch, Spanisch, Katalanisch',
      availability: 'Verfügbarkeit',
      availabilityValue: 'Offen für Angebote',
      workModel: 'Arbeitsmodell',
      workModelValue: 'Vor Ort / Hybrid / Remote',
    },
  },
  skills: {
    sectionLabel: '02 — Kompetenzen',
    sectionTitle: 'Technischer Stack',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Daten',
      tools: 'Tools & Automatisierung',
    },
    levels: {
      proficient: 'Sicher',
      familiar: 'Vertraut',
      learning: 'Im Lernen',
    },
    revealImage: 'Ausleuchten',
    dimImage: 'Abdunkeln',
  },
  projects: {
    sectionLabel: '03 — Portfolio',
    sectionTitle: 'Ausgewählte Projekte',
    demo: 'Demo',
    repo: 'GitHub',
    items: {
      ecommerce: {
        title: 'Portfolio für Tätowiererin',
        description:
          'Mehrsprachige Portfolio-Website zur Präsentation der Arbeit einer Tätowiererin, mit Next.js und Fokus auf Performance und SEO.',
      },
      analytics: {
        title: 'Zeiterfassungssystem',
        description:
          'Anwendung zur Erfassung und Verwaltung von Arbeitszeiten mit Berichten — Automatisierung eines zuvor manuellen Prozesses.',
      },
      chat: {
        title: 'KI-Agent mit RAG für HR',
        description:
          'Auf Retrieval-Augmented Generation basierender Agent, der den kontrollierten Zugriff auf HR-Daten automatisiert und den operativen Aufwand um 34 % reduziert. Abschlussprojekt.',
      },
    },
  },
  experience: {
    sectionLabel: '04 — Werdegang',
    sectionTitle: 'Erfahrung & Ausbildung',
    items: {
      job1: {
        role: 'Praktikum — Produktentwicklung (F&E)',
        company: 'PepsiCo Brasilien · Sorocaba, SP',
        description:
          'End-to-End-Entwurf eines Bestandsverwaltungssystems mit VBA und SAP, das Materialverschwendung um 44 % reduzierte und die Erstellung von Projekt-IDs um 75 % beschleunigte.',
      },
      job2: {
        role: 'Praktikum — Systementwicklung',
        company: '4R Tecnologia da Informação · Sorocaba, SP',
        description:
          'Entwicklung von Zugangskontroll- und Lohnabrechnungssystemen in Visual Basic 6 und SQL Server (+20 % Effizienz) sowie Aufbau von Oberflächen und Geschäftslogik in GeneXus mit wiederverwendbaren Komponenten (-15 % Entwicklungszeit).',
      },
      internship: {
        role: 'Computeringenieurwesen — Doppelabschluss',
        company: 'Universitat de Lleida · Lleida, Spanien',
        description:
          'Doppelabschluss Brasilien–EU mit Schwerpunkt Algorithmen, Datenstrukturen und Software-Engineering.',
      },
      education: {
        role: 'Computeringenieurwesen',
        company: 'Centro Universitário FACENS · Sorocaba, SP',
        description:
          'Bachelor in Computeringenieurwesen. Teilnahme am Programmier-Marathon (2021).',
      },
    },
  },
  contact: {
    sectionLabel: '05 — Kontakt',
    sectionTitle: 'Sprechen wir?',
    description:
      'Ich bin offen für neue Full-Stack-Möglichkeiten, Freelance-Projekte oder einfach ein gutes Gespräch über Technologie.',
    links: { resume: 'Lebenslauf PDF' },
  },
  footer: {
    tagline: 'Built by Rafael Azzolini',
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    toggleTheme: 'Helles/dunkles Design umschalten',
    backToTop: 'Nach oben',
  },
}
