import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { getDictionary, isLocale, locales } from '@/lib/i18n'
import { Navbar } from '@/components/layouts/Navbar'
import { Footer } from '@/components/layouts/Footer'
import { BackToTop } from '@/components/ui/BackToTop'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import '@/app/globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Statically pre-render one page per locale.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// 404 on any locale outside the supported set.
export const dynamicParams = false

// Absolute base for canonical / hreflang / OpenGraph URLs.
// Priority: explicit NEXT_PUBLIC_SITE_URL → Vercel's stable production domain
// (auto-injected) → localhost for local dev. This guarantees we never ship
// localhost canonicals even if the env var is forgotten in production.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const t = getDictionary(locale)
  const languageAlternates = {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    // Fallback for users whose language isn't covered; root redirects to a locale.
    'x-default': '/',
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: 'Rafael Azzolini | Full-Stack Developer',
    description: t.hero.description,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: 'website',
      title: 'Rafael Azzolini | Full-Stack Developer',
      description: t.hero.description,
      url: `/${locale}`,
      locale,
      siteName: 'Rafael Azzolini',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Rafael Azzolini | Full-Stack Developer',
      description: t.hero.description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const t = getDictionary(locale)

  return (
    <html lang={locale} className={jetbrainsMono.variable} suppressHydrationWarning>
      <body>
        {/* Set the theme class before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();",
          }}
        />
        <a href="#main" className="skip-link">
          {t.a11y.skipToContent}
        </a>
        <SmoothScroll />
        <Navbar nav={t.nav} a11y={t.a11y} locale={locale} />
        {children}
        <Footer footer={t.footer} />
        <BackToTop label={t.a11y.backToTop} />
      </body>
    </html>
  )
}
