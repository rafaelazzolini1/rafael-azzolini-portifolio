import type {
  SkillCategory,
  Project,
  Experience,
  ContactLink,
} from '@/types'

// ─── Skills ───────────────────────────────────────────────────────────────────
// Tech names stay locale-neutral; the category headers are translated.

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'code',
    skills: [
      { name: 'React', level: 'proficient' },
      { name: 'Next.js', level: 'proficient' },
      { name: 'React Native', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'CSS', level: 'familiar' },
      { name: 'Tailwind', level: 'familiar' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    icon: 'server',
    skills: [
      { name: 'Python', level: 'familiar' },
      { name: 'Flask', level: 'familiar' },
      { name: 'SQL Server', level: 'familiar' },
      { name: 'PostgreSQL', level: 'familiar' },
      { name: 'MongoDB', level: 'familiar' },
      { name: 'Firestore', level: 'familiar' },
      { name: 'Supabase', level: 'familiar' },
      { name: 'Node.js', level: 'learning' },
      { name: 'Go', level: 'learning' },
      { name: 'Java', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Automation',
    icon: 'tools',
    skills: [
      { name: 'VBA', level: 'proficient' },
      { name: 'SAP', level: 'proficient' },
      { name: 'Git', level: 'proficient' },
      { name: 'GitHub', level: 'proficient' },
      { name: 'RAG', level: 'familiar' },
      { name: 'Prompt Eng.', level: 'familiar' },
      { name: 'Kubernetes', level: 'learning' },
      { name: 'AWS', level: 'learning' },
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
// Titles/descriptions come from the translations; everything else is static here.

export const PROJECTS: Project[] = [
  {
    id: 'portfolio-tattoo',
    number: 'Projeto 01',
    title: 'Tattoo artist portfolio',
    description: '',
    emoji: '✒️',
    theme: 'blue',
    tags: ['Next.js', 'TypeScript', 'i18n', 'Tailwind'],
    demoUrl: 'https://larissa-s-portifoli.vercel.app/en/content',
    repoUrl: 'https://github.com/rafaelazzolini1/Larissa-s-Portifoli',
  },
  {
    id: 'time-tracking',
    number: 'Projeto 02',
    title: 'Time Tracking Software',
    description: '',
    emoji: '🕰️',
    theme: 'yellow',
    tags: ['Python', 'SQL', 'Automation'],
    demoUrl: '#',
    repoUrl: 'https://github.com/rafaelazzolini1/Ponto-System',
  },
  {
    id: 'rag-hr-agent',
    number: 'Projeto 03',
    title: 'RAG AI Agent for HR',
    description: '',
    emoji: '🤖',
    theme: 'darkblue',
    tags: ['Python', 'RAG', 'LLM', 'Flask'],
    demoUrl: '#',
    repoUrl: 'https://github.com/rafaelazzolini1',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
// Reverse-chronological. role/company/description are overridden per locale; the
// date/type/id stay here. Order matches the translation slots:
// [0]=job1 PepsiCo · [1]=job2 4R · [2]=internship Lleida · [3]=education Facens

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-pepsico',
    type: 'work',
    date: '2024',
    role: 'Estágio — Engenharia de Produto (R&D)',
    company: 'PepsiCo do Brasil · Sorocaba, SP',
    description: '',
  },
  {
    id: 'exp-4r',
    type: 'work',
    date: '2022 — 2024',
    role: 'Estágio — Desenvolvimento de Sistemas',
    company: '4R Tecnologia da Informação · Sorocaba, SP',
    description: '',
  },
  {
    id: 'edu-lleida',
    type: 'education',
    date: '2024 — 2025',
    role: 'Engenharia da Computação — Dupla Titulação',
    company: 'Universitat de Lleida · Lleida, Espanha',
    description: '',
  },
  {
    id: 'edu-facens',
    type: 'education',
    date: '2020 — 2025',
    role: 'Engenharia da Computação',
    company: 'Centro Universitário FACENS · Sorocaba, SP',
    description: '',
  },
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_LINKS: ContactLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafael-azzolini/', icon: 'linkedin' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/rafaelazzolini1', icon: 'github' },
  { id: 'resume', label: 'Currículo PDF', href: '#', icon: 'file' },
]

export const CONTACT_EMAIL = 'rafaazzolini@hotmail.com'
