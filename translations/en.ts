import type { Translation } from './types'

export const en: Translation = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    badge: 'Available for opportunities',
    role: 'Full-Stack Developer',
    description:
      'I build interfaces and systems using React, Next.js and TypeScript, automate processes with Python and always chase for measurable efficiency and code with purpose.',
    ctaPrimary: 'View Projects',
    ctaSecondary: 'Get in Touch',
    stats: {
      experience: 'Years Exp.',
      projects: 'Projects',
      technologies: 'Technologies',
    },
  },
  about: {
    sectionLabel: '01 — About Me',
    sectionTitle: 'Code with purpose, design with meaning',
    paragraph1:
      "I'm a Computer Engineer with a dual degree (Brazil and the European Union), focused on full stack development with React, Next.js, and TypeScript. I enjoy turning business problems into products that generate value, from logic to performance.",
    paragraph2:
      "I have a track record of measurable efficiency: automations that cut material waste by 44% at PepsiCo, and a RAG AI agent that reduced operational demand by ~34%. I'm now expanding into AWS with Python and Go.",
    quote:
      "I like a code that isn't just work but that also is understandable, and built to last and scale.",
    infoCard: {
      title: 'Information',
      location: 'Location',
      locationValue: 'São Paulo, SP — Brazil',
      focus: 'Current focus',
      focusValue: 'Backend · AWS',
      languages: 'Languages',
      languagesValue: 'Portuguese, English, Spanish, Catalan',
      availability: 'Availability',
      availabilityValue: 'Open to proposals',
      workModel: 'Work model',
      workModelValue: 'Presential / Hybrid / Remote',
    },
  },
  skills: {
    sectionLabel: '02 — Expertise',
    sectionTitle: 'Technical Stack',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Data',
      tools: 'Tools & Automation',
    },
    levels: {
      proficient: 'Proficient',
      familiar: 'Familiar',
      learning: 'Learning',
    },
    revealImage: 'Light up image',
    dimImage: 'Dim image',
  },
  projects: {
    sectionLabel: '03 — Portfolio',
    sectionTitle: 'Selected Projects',
    demo: 'Demo',
    repo: 'GitHub',
    items: {
      ecommerce: {
        title: 'Tattoo Artist Portfolio',
        description:
          "Multilingual portfolio site to showcase a tattoo artist's work, built with Next.js and focused on performance and SEO.",
      },
      analytics: {
        title: 'Time Tracking System',
        description:
          'App for clock-in/out registration and shift management with reports — automating a previously manual process.',
      },
      chat: {
        title: 'RAG AI Agent for HR',
        description:
          'A Retrieval-Augmented Generation agent that automates controlled access to HR data, cutting operational demand by 34%. Final degree project.',
      },
    },
  },
  experience: {
    sectionLabel: '04 — Journey',
    sectionTitle: 'Experience & Education',
    items: {
      job1: {
        role: 'Intern — Product Engineering (R&D)',
        company: 'PepsiCo Brazil · Sorocaba, SP',
        description:
          'Designed an end-to-end inventory management system integrating VBA and SAP, cutting material waste by 44% and speeding up project-ID generation by 75%.',
      },
      job2: {
        role: 'Intern — Systems Development',
        company: '4R Tecnologia da Informação · Sorocaba, SP',
        description:
          'Built access-control and payroll systems in Visual Basic 6 and SQL Server (+20% efficiency) and developed interfaces and business logic in GeneXus, with reusable components (-15% development time).',
      },
      internship: {
        role: 'Computer Engineering — Dual Degree',
        company: 'Universitat de Lleida · Lleida, Spain',
        description:
          'Dual Brazil–EU degree, focused on algorithms, data structures, and software engineering.',
      },
      education: {
        role: 'Computer Engineering',
        company: 'Centro Universitário FACENS · Sorocaba, SP',
        description:
          "Bachelor's in Computer Engineering. Took part in the Programming Marathon (2021).",
      },
    },
  },
  contact: {
    sectionLabel: '05 — Contact',
    sectionTitle: "Let's talk?",
    description:
      'I am open to new frontend opportunities, freelance projects, or just a good conversation about technology.',
    links: { resume: 'Resume PDF' },
  },
  footer: {
    tagline: 'Built by Rafael Azzolini and lots of coffees',
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle light/dark theme',
    backToTop: 'Back to top',
  },
}
