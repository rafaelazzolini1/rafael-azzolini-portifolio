// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── About ────────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  label: string
  value: string
}

// ─── Skills ───────────────────────────────────────────────────────────────────

/** Honest, grouped proficiency tiers — no pseudo-precise percentages. */
export type SkillLevel = 'proficient' | 'familiar' | 'learning'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  title: string
  icon: 'code' | 'server' | 'tools'
  skills: Skill[]
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectTheme = 'blue' | 'yellow' | 'darkblue'

export interface Project {
  id: string
  number: string
  title: string
  description: string
  emoji: string
  theme: ProjectTheme
  tags: string[]
  demoUrl: string
  repoUrl: string
}

// ─── Experience ───────────────────────────────────────────────────────────────

export type ExperienceType = 'work' | 'education'

export interface Experience {
  id: string
  type: ExperienceType
  date: string
  role: string
  company: string
  description: string
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface ContactLink {
  id: string
  label: string
  href: string
  icon: 'linkedin' | 'github' | 'file'
}