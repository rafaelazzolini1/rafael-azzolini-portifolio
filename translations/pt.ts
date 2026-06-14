import type { Translation } from './types'

export const pt: Translation = {
  nav: {
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
  },
  hero: {
    badge: 'Disponível para oportunidades',
    role: 'Desenvolvedor Full-Stack',
    description:
      'Construo interfaces e sistemas com React, Next.js e TypeScript, automatizo processos com Python e busco sempre eficiência mensurável e código com propósito.',
    ctaPrimary: 'Ver Projetos',
    ctaSecondary: 'Entre em Contato',
    stats: {
      experience: 'Anos de Exp.',
      projects: 'Projetos',
      technologies: 'Tecnologias',
    },
  },
  about: {
    sectionLabel: '01 — Sobre Mim',
    sectionTitle: 'Código com propósito, design com significado',
    paragraph1:
      'Sou Engenheiro da Computação com dupla titulação (Brasil e União Europeia), focado em desenvolvimento full stack com React, Next.js e TypeScript. Gosto de transformar problemas de negócio em produtos que geram valor, da lógica à performance.',
    paragraph2:
      'Tenho um histórico de eficiência mensurável: automações que reduziram o desperdício de material em 44% na PepsiCo e um agente de IA com RAG que reduziu a demanda operacional em ~34%. Atualmente estou expandindo para a AWS com Python e Go.',
    quote:
      'Gosto de um código que não é apenas trabalho, mas que também seja compreensível e feito para durar e escalar.',
    infoCard: {
      title: 'Informações',
      location: 'Localização',
      locationValue: 'São Paulo, SP — Brasil',
      focus: 'Foco atual',
      focusValue: 'Backend · AWS',
      languages: 'Idiomas',
      languagesValue: 'Português, Inglês, Espanhol, Catalão',
      availability: 'Disponibilidade',
      availabilityValue: 'Aberto a propostas',
      workModel: 'Modelo de trabalho',
      workModelValue: 'Presencial / Híbrido / Remoto',
    },
  },
  skills: {
    sectionLabel: '02 — Competências',
    sectionTitle: 'Stack Técnica',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & Dados',
      tools: 'Ferramentas & Automação',
    },
    levels: {
      proficient: 'Proficiente',
      familiar: 'Familiarizado',
      learning: 'Aprendendo',
    },
    revealImage: 'Iluminar imagem',
    dimImage: 'Apagar imagem',
  },
  projects: {
    sectionLabel: '03 — Portfólio',
    sectionTitle: 'Projetos Selecionados',
    demo: 'Demo',
    repo: 'GitHub',
    items: {
      ecommerce: {
        title: 'Portfólio para tatuadora',
        description:
          'Site de portfólio multi-idioma para divulgar o trabalho de uma tatuadora, construído com Next.js e foco em performance e SEO.',
      },
      analytics: {
        title: 'Sistema de Controle de Ponto',
        description:
          'Aplicação para registro e gestão de jornada, com controle de ponto e relatórios — automatizando um processo antes manual.',
      },
      chat: {
        title: 'Agente de IA com RAG para RH',
        description:
          'Agente inteligente baseado em Retrieval-Augmented Generation que automatiza o acesso controlado a dados de RH, reduzindo a demanda operacional em 34%. Trabalho de Conclusão de Curso.',
      },
    },
  },
  experience: {
    sectionLabel: '04 — Trajetória',
    sectionTitle: 'Experiência & Formação',
    items: {
      job1: {
        role: 'Estágio — Engenharia de Produto (R&D)',
        company: 'PepsiCo do Brasil · Sorocaba, SP',
        description:
          'Projetei, de ponta a ponta, um sistema de gestão de estoque integrando VBA e SAP, reduzindo o desperdício de materiais em 44% e acelerando a geração de identificações de projeto em 75%.',
      },
      job2: {
        role: 'Estágio — Desenvolvimento de Sistemas',
        company: '4R Tecnologia da Informação · Sorocaba, SP',
        description:
          'Desenvolvi sistemas de controle de acesso e folha de pagamento em Visual Basic 6 e SQL Server (+20% de eficiência) e construí interfaces e regras de negócio em GeneXus, com componentes reutilizáveis (-15% no tempo de desenvolvimento).',
      },
      internship: {
        role: 'Engenharia da Computação — Dupla Titulação',
        company: 'Universitat de Lleida · Lleida, Espanha',
        description:
          'Dupla titulação Brasil–UE, com foco em algoritmos, estruturas de dados e engenharia de software.',
      },
      education: {
        role: 'Engenharia da Computação',
        company: 'Centro Universitário FACENS · Sorocaba, SP',
        description:
          'Bacharelado em Engenharia da Computação. Participação na Maratona de Programação (2021).',
      },
    },
  },
  contact: {
    sectionLabel: '05 — Contato',
    sectionTitle: 'Vamos conversar?',
    description:
      'Estou aberto a novas oportunidades como desenvolvedor frontend, projetos freelance ou uma boa conversa sobre tecnologia.',
    links: { resume: 'Currículo PDF' },
  },
  footer: {
    tagline: 'Built by Rafael Azzolini and lots of coffees',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    toggleTheme: 'Alternar tema claro/escuro',
    backToTop: 'Voltar ao topo',
  },
}
