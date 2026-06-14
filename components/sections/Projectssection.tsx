import { SectionHeader } from '@/components/ui/Sectionheader'
import { ScanRevealCard } from '@/components/sections/ScanRevealCard'
import { ProjectCard } from '@/components/sections/Projectcard'
import { PROJECTS } from '@/data/portfolio'
import type { Translation } from '@/translations'

export function ProjectsSection({ projects }: { projects: Translation['projects'] }) {
  const translatedProjects = [
    { ...PROJECTS[0], ...projects.items.ecommerce },
    { ...PROJECTS[1], ...projects.items.analytics },
    { ...PROJECTS[2], ...projects.items.chat      },
  ]

  return (
    <section id="projetos" className="relative flex min-h-screen flex-col justify-center border-t border-ink/10 bg-surface py-28 px-[6%]">
      <SectionHeader label={projects.sectionLabel} title={projects.sectionTitle} />
      <div className="grid md:grid-cols-3 gap-5">
        {translatedProjects.map((project) => (
          <ScanRevealCard key={project.id}>
            <ProjectCard
              project={project}
              demoLabel={projects.demo}
              repoLabel={projects.repo}
            />
          </ScanRevealCard>
        ))}
      </div>
    </section>
  )
}
