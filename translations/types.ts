export interface Translation {
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    badge: string
    role: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    stats: {
      experience: string
      projects: string
      technologies: string
    }
  }
  about: {
    sectionLabel: string
    sectionTitle: string
    paragraph1: string
    paragraph2: string
    quote: string
    infoCard: {
      title: string
      location: string
      locationValue: string
      focus: string
      focusValue: string
      languages: string
      languagesValue: string
      availability: string
      availabilityValue: string
      workModel: string
      workModelValue: string
    }
  }
  skills: {
    sectionLabel: string
    sectionTitle: string
    categories: {
      frontend: string
      backend: string
      tools: string
    }
    levels: {
      proficient: string
      familiar: string
      learning: string
    }
    revealImage: string
    dimImage: string
  }
  projects: {
    sectionLabel: string
    sectionTitle: string
    demo: string
    repo: string
    items: {
      ecommerce: { title: string; description: string }
      analytics: { title: string; description: string }
      chat: { title: string; description: string }
    }
  }
  experience: {
    sectionLabel: string
    sectionTitle: string
    items: {
      job1: { role: string; company: string; description: string }
      job2: { role: string; company: string; description: string }
      internship: { role: string; company: string; description: string }
      education: { role: string; company: string; description: string }
    }
  }
  contact: {
    sectionLabel: string
    sectionTitle: string
    description: string
    links: { resume: string }
  }
  footer: {
    tagline: string
  }
  a11y: {
    skipToContent: string
    openMenu: string
    closeMenu: string
    toggleTheme: string
    backToTop: string
  }
}