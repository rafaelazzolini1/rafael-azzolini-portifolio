import { notFound } from 'next/navigation'
import { getDictionary, isLocale } from '@/lib/i18n'
import { HeroSection } from '@/components/sections/Herosection'
import { AboutSection } from '@/components/sections/Aboutsection'
import { SkillsSection } from '@/components/sections/Skillssection'
import { ProjectsSection } from '@/components/sections/Projectssection'
import { ExperienceSection } from '@/components/sections/Experiencesection'
import { ContactSection } from '@/components/sections/Contactsection'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const t = getDictionary(locale)

  return (
    <main id="main" tabIndex={-1}>
      <HeroSection hero={t.hero} />
      <AboutSection about={t.about} />
      <SkillsSection skills={t.skills} />
      <ProjectsSection projects={t.projects} />
      <ExperienceSection experience={t.experience} />
      <ContactSection contact={t.contact} />
    </main>
  )
}
