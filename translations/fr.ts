import type { Translation } from './types'

export const fr: Translation = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    contact: 'Contact',
  },
  hero: {
    badge: 'Disponible pour de nouvelles opportunités',
    role: 'Développeur Full-Stack',
    description:
      'Je construis des interfaces et des systèmes avec React, Next.js et TypeScript, j\'automatise des processus avec Python et je recherche toujours une efficacité mesurable et un code qui a du sens.',
    ctaPrimary: 'Voir les Projets',
    ctaSecondary: 'Me Contacter',
    stats: {
      experience: 'Ans d\'Exp.',
      projects: 'Projets',
      technologies: 'Technologies',
    },
  },
  about: {
    sectionLabel: '01 — À propos',
    sectionTitle: 'Du code avec un but, un design avec du sens',
    paragraph1:
      'Je suis ingénieur en informatique avec un double diplôme (Brésil et Union européenne), spécialisé dans le développement full-stack avec React, Next.js et TypeScript. J\'aime transformer des problèmes métier en produits qui créent de la valeur, de la logique à la performance.',
    paragraph2:
      'J\'ai un historique d\'efficacité mesurable : des automatisations qui ont réduit de 44 % le gaspillage de matériaux chez PepsiCo, et un agent IA avec RAG qui a réduit la demande opérationnelle d\'environ 34 %. Je m\'oriente désormais vers AWS avec Python et Go.',
    quote:
      'J\'aime un code qui n\'est pas seulement du travail, mais qui est aussi compréhensible et conçu pour durer et évoluer.',
    infoCard: {
      title: 'Informations',
      location: 'Localisation',
      locationValue: 'São Paulo, SP — Brésil',
      focus: 'Focus actuel',
      focusValue: 'Backend · AWS',
      languages: 'Langues',
      languagesValue: 'Portugais, Anglais, Espagnol, Catalan',
      availability: 'Disponibilité',
      availabilityValue: 'Ouvert aux propositions',
      workModel: 'Mode de travail',
      workModelValue: 'Présentiel / Hybride / À distance',
    },
  },
  skills: {
    sectionLabel: '02 — Compétences',
    sectionTitle: 'Stack Technique',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Données',
      tools: 'Outils & Automatisation',
    },
    levels: {
      proficient: 'Maîtrisé',
      familiar: 'Familier',
      learning: 'En apprentissage',
    },
    revealImage: 'Éclairer',
    dimImage: 'Assombrir',
  },
  projects: {
    sectionLabel: '03 — Portfolio',
    sectionTitle: 'Projets Sélectionnés',
    demo: 'Démo',
    repo: 'GitHub',
    items: {
      ecommerce: {
        title: 'Portfolio de Tatoueuse',
        description:
          'Site portfolio multilingue pour promouvoir le travail d\'une tatoueuse, construit avec Next.js et axé sur la performance et le SEO.',
      },
      analytics: {
        title: 'Système de Pointage',
        description:
          'Application d\'enregistrement et de gestion du temps de travail avec rapports — automatisant un processus auparavant manuel.',
      },
      chat: {
        title: 'Agent IA avec RAG pour les RH',
        description:
          'Agent basé sur le Retrieval-Augmented Generation qui automatise l\'accès contrôlé aux données RH, réduisant la demande opérationnelle de 34 %. Projet de fin d\'études.',
      },
    },
  },
  experience: {
    sectionLabel: '04 — Parcours',
    sectionTitle: 'Expérience & Formation',
    items: {
      job1: {
        role: 'Stage — Ingénierie Produit (R&D)',
        company: 'PepsiCo Brésil · Sorocaba, SP',
        description:
          'Conception de bout en bout d\'un système de gestion des stocks intégrant VBA et SAP, réduisant le gaspillage de matériaux de 44 % et accélérant la génération d\'identifiants de projet de 75 %.',
      },
      job2: {
        role: 'Stage — Développement de Systèmes',
        company: '4R Tecnologia da Informação · Sorocaba, SP',
        description:
          'Développement de systèmes de contrôle d\'accès et de paie en Visual Basic 6 et SQL Server (+20 % d\'efficacité) et création d\'interfaces et de logique métier en GeneXus, avec des composants réutilisables (-15 % de temps de développement).',
      },
      internship: {
        role: 'Ingénierie Informatique — Double Diplôme',
        company: 'Universitat de Lleida · Lleida, Espagne',
        description:
          'Double diplôme Brésil–UE, axé sur les algorithmes, les structures de données et le génie logiciel.',
      },
      education: {
        role: 'Ingénierie Informatique',
        company: 'Centro Universitário FACENS · Sorocaba, SP',
        description:
          'Licence en ingénierie informatique. Participation au Marathon de Programmation (2021).',
      },
    },
  },
  contact: {
    sectionLabel: '05 — Contact',
    sectionTitle: 'On discute ?',
    description:
      'Je suis ouvert à de nouvelles opportunités full-stack, des projets freelance ou simplement une bonne discussion sur la technologie.',
    links: { resume: 'CV PDF' },
  },
  footer: {
    tagline: 'Built by Rafael Azzolini',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    toggleTheme: 'Basculer le thème clair/sombre',
    backToTop: 'Retour en haut',
  },
}
