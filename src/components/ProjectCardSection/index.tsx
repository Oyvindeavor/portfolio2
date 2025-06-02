import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/getProjects'

export default async function ProjectCardSection() {
  const projects = await getProjects()

  return (
    <section className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/5 absolute top-0 left-1/4 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-secondary/5 absolute right-1/4 bottom-0 h-72 w-72 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No projects found.</p>
          </div>
        )}
      </div>
    </section>
  )
}
