import { notFound } from 'next/navigation'
import { getProjectDetails } from '@/lib/getProjectDetails'
import type { ProjectDetail as ProjectDetails } from '@/types/project'
import ProjectCarousel from '@/components/ProjectCarousel'
import TechStack from '@/components/TechStack'
import Features from '@/components/Features'
import ProjectLinks from '@/components/ProjectLinks'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project: ProjectDetails | null = await getProjectDetails(params.slug)

  if (!project) return notFound()

  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* Carousel for project images */}
      <ProjectCarousel images={project.images} />
      {/* Project Links*/}
      <ProjectLinks links={project.links} />

      {/* Project details */}
      <h1 className="mt-2 text-3xl font-bold">{project.title}</h1>

      <article className="mt-6 space-y-4 text-gray-800">
        {Array.isArray(project.description) ? (
          project.description.map((paragraph, idx) => (
            <p key={idx} className="mt-4 leading-relaxed text-gray-800">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="mt-4 leading-relaxed text-gray-800">{project.description}</p>
        )}
      </article>
      <TechStack tech={project.tech} />

      <Features features={project.features} />
    </div>
  )
}
