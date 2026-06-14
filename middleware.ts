import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Kept inline (not imported from the translations bundle) to keep middleware light.
const locales = ['pt', 'en', 'es', 'fr', 'de'] as const
const defaultLocale = 'pt'
const COOKIE = 'NEXT_LOCALE'

function resolveLocale(request: NextRequest): string {
  // 1. Explicit preference set by the language switcher
  const cookie = request.cookies.get(COOKIE)?.value
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie

  // 2. Best match from the browser's Accept-Language header
  const header = request.headers.get('accept-language')
  if (header) {
    const preferred = header
      .split(',')
      .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase())
    const match = preferred.find((lang) => (locales as readonly string[]).includes(lang))
    if (match) return match
  }

  // 3. Fallback
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return NextResponse.next()

  const locale = resolveLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Run on everything except Next internals, static assets, and files with an extension.
  matcher: ['/((?!_next/|.*\\..*).*)'],
}
