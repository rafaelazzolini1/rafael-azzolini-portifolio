import type { Translation } from './types'

export const es: Translation = {
  nav: {
    about: 'Sobre mí',
    skills: 'Skills',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    badge: 'Disponible para oportunidades',
    role: 'Desarrollador Full-Stack',
    description:
      'Construyo interfaces y sistemas con React, Next.js y TypeScript, automatizo procesos con Python y busco siempre eficiencia medible y código con propósito.',
    ctaPrimary: 'Ver Proyectos',
    ctaSecondary: 'Contáctame',
    stats: {
      experience: 'Años de Exp.',
      projects: 'Proyectos',
      technologies: 'Tecnologías',
    },
  },
  about: {
    sectionLabel: '01 — Sobre mí',
    sectionTitle: 'Código con propósito, diseño con significado',
    paragraph1:
      'Soy Ingeniero Informático con doble titulación (Brasil y Unión Europea), enfocado en el desarrollo full stack con React, Next.js y TypeScript. Me gusta convertir problemas de negocio en productos que generan valor, de la lógica al rendimiento.',
    paragraph2:
      'Tengo un historial de eficiencia medible: automatizaciones que redujeron un 44% el desperdicio de material en PepsiCo y un agente de IA con RAG que redujo la demanda operativa en ~34%. Actualmente me estoy expandiendo a AWS con Python y Go.',
    quote:
      'Me gusta un código que no es solo trabajo, sino que también sea comprensible y esté hecho para durar y escalar.',
    infoCard: {
      title: 'Información',
      location: 'Ubicación',
      locationValue: 'São Paulo, SP — Brasil',
      focus: 'Enfoque actual',
      focusValue: 'Backend · AWS',
      languages: 'Idiomas',
      languagesValue: 'Portugués, Inglés, Español, Catalán',
      availability: 'Disponibilidad',
      availabilityValue: 'Abierto a propuestas',
      workModel: 'Modelo de trabajo',
      workModelValue: 'Presencial / Híbrido / Remoto',
    },
  },
  skills: {
    sectionLabel: '02 — Competencias',
    sectionTitle: 'Stack Técnico',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Datos',
      tools: 'Herramientas & Automatización',
    },
    levels: {
      proficient: 'Competente',
      familiar: 'Familiarizado',
      learning: 'Aprendiendo',
    },
    revealImage: 'Iluminar imagen',
    dimImage: 'Atenuar imagen',
  },
  projects: {
    sectionLabel: '03 — Portafolio',
    sectionTitle: 'Proyectos Seleccionados',
    demo: 'Demo',
    repo: 'GitHub',
    items: {
      ecommerce: {
        title: 'Portafolio para Tatuadora',
        description:
          'Sitio de portafolio multidioma para promover el trabajo de una tatuadora, construido con Next.js y enfocado en rendimiento y SEO.',
      },
      analytics: {
        title: 'Sistema de Control de Fichaje',
        description:
          'Aplicación para registro y gestión de jornada con informes — automatizando un proceso antes manual.',
      },
      chat: {
        title: 'Agente de IA con RAG para RR. HH.',
        description:
          'Agente basado en Retrieval-Augmented Generation que automatiza el acceso controlado a datos de RR. HH., reduciendo la demanda operativa en un 34%. Proyecto de fin de carrera.',
      },
    },
  },
  experience: {
    sectionLabel: '04 — Trayectoria',
    sectionTitle: 'Experiencia & Formación',
    items: {
      job1: {
        role: 'Prácticas — Ingeniería de Producto (I+D)',
        company: 'PepsiCo Brasil · Sorocaba, SP',
        description:
          'Diseñé de extremo a extremo un sistema de gestión de inventario integrando VBA y SAP, reduciendo el desperdicio de materiales en un 44% y acelerando la generación de identificadores de proyecto en un 75%.',
      },
      job2: {
        role: 'Prácticas — Desarrollo de Sistemas',
        company: '4R Tecnologia da Informação · Sorocaba, SP',
        description:
          'Desarrollé sistemas de control de acceso y nómina en Visual Basic 6 y SQL Server (+20% de eficiencia) y construí interfaces y lógica de negocio en GeneXus, con componentes reutilizables (-15% de tiempo de desarrollo).',
      },
      internship: {
        role: 'Ingeniería Informática — Doble Titulación',
        company: 'Universitat de Lleida · Lleida, España',
        description:
          'Doble titulación Brasil–UE, con foco en algoritmos, estructuras de datos e ingeniería de software.',
      },
      education: {
        role: 'Ingeniería Informática',
        company: 'Centro Universitário FACENS · Sorocaba, SP',
        description:
          'Grado en Ingeniería Informática. Participación en la Maratón de Programación (2021).',
      },
    },
  },
  contact: {
    sectionLabel: '05 — Contacto',
    sectionTitle: '¿Hablamos?',
    description:
      'Estoy abierto a nuevas oportunidades como desarrollador frontend, proyectos freelance o una buena conversación sobre tecnología.',
    links: { resume: 'Currículum PDF' },
  },
  footer: {
    tagline: 'Built by Rafael Azzolini and lots of coffees',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toggleTheme: 'Cambiar tema claro/oscuro',
    backToTop: 'Volver arriba',
  },
}
