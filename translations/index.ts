import { pt } from './pt'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'
import type { Translation } from './types'

export type { Translation }
export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de'

export interface LanguageMeta {
  nativeName: string
}

export const LANGUAGES: Record<Language, LanguageMeta> = {
  pt: { nativeName: 'Português' },
  en: { nativeName: 'English'   },
  es: { nativeName: 'Español'   },
  fr: { nativeName: 'Français'  },
  de: { nativeName: 'Deutsch'   },
}

export const translations: Record<Language, Translation> = { pt, en, es, fr, de }

export const DEFAULT_LANGUAGE: Language = 'pt'