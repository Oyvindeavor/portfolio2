import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/getProjects'
import { Separator } from '../ui/separator'

export default async function ProjectCardSection() {
  const projects = await getProjects()

  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
            A collection of my recent work showcasing skills and creativity in web development, from
            concept to deployment.
          </p>
        </div>

        <Separator className="bg-border/50 mb-16" />

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 will-change-transform"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="mx-auto max-w-md">
              <h3 className="text-foreground mb-2 text-xl font-semibold">No projects yet</h3>
              <p className="text-muted-foreground">
                Check back soon for updates on my latest work.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
