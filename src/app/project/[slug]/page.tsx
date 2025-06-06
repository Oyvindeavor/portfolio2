import { notFound } from 'next/navigation'
import { getProjectDetails } from '@/lib/getProjectDetails'
import type { ProjectDetail as ProjectDetails } from '@/types/project'
import ProjectCarousel from '@/components/ProjectCarousel'
import TechStack from '@/components/TechStack'
import Features from '@/components/Features'
import ProjectLinks from '@/components/ProjectLinks'

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const project: ProjectDetails | null = await getProjectDetails(params.slug)

  if (!project) return notFound()

  return (
    <div className="mx-auto mb-12 max-w-3xl bg-[#020618] px-4 py-8 sm:px-6 lg:px-8">
      {/* Project details */}
      <h1 className="mt-2 mb-12 text-3xl font-bold">{project.title}</h1>
      {/* Carousel for project images */}
      <ProjectCarousel images={project.images} />
      {/* Project Links*/}
      <ProjectLinks links={project.links} />

      <article className="mt-8 border p-6">
        {Array.isArray(project.description) ? (
          <div className="space-y-4 sm:space-y-6">
            {project.description.map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed sm:text-lg sm:leading-loose">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-base leading-relaxed sm:text-lg sm:leading-loose">
            {project.description}
          </p>
        )}
      </article>
      <TechStack tech={project.tech} />

      <Features features={project.features} />
    </div>
  )
}
