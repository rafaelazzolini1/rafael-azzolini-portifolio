import {
  translations,
  LANGUAGES,
  DEFAULT_LANGUAGE,
  type Language,
  type Translation,
} from '@/translations'

/** All supported locales, derived from the translations registry. */
export const locales = Object.keys(LANGUAGES) as Language[]

/** Fallback locale when none can be inferred from the request. */
export const defaultLocale: Language = DEFAULT_LANGUAGE

/** Type guard: narrows an arbitrary string to a supported Language. */
export function isLocale(value: string): value is Language {
  return (locales as string[]).includes(value)
}

/** Returns the full translation dictionary for a locale (server-side, in-memory). */
export function getDictionary(locale: Language): Translation {
  return translations[locale]
}
