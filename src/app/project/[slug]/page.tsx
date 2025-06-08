import { notFound } from 'next/navigation'
import { getProjectDetails } from '@/lib/getProjectDetails'
import type { ProjectDetail as ProjectDetails } from '@/types/project'
import ProjectCarousel from '@/components/ProjectCarousel'
import TechStack from '@/components/TechStack'
import Features from '@/components/Features'
import ProjectLinks from '@/components/ProjectLinks'
import ReactMarkdown from 'react-markdown'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Project - Øyvind Riisnes`,
  description:
    'Explore the details of my projects, including technologies used, features, and links.'
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const project: ProjectDetails | null = await getProjectDetails(params.slug)

  if (!project) return notFound()

  const markdown = Array.isArray(project.description)
    ? project.description.join('\n\n')
    : project.description

  return (
    <div className="mx-auto mb-12 max-w-3xl bg-[#020618] px-4 py-8 sm:px-6 lg:px-8">
      {/* Project details */}
      <h1 className="sr-only">{project.title}</h1>
      {/* Carousel for project images */}
      <ProjectCarousel images={project.images} />
      {/* Project Links*/}
      <ProjectLinks links={project.links} />

      <article className="prose prose-invert dark:prose-invert mt-8 max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
      <TechStack tech={project.tech} />

      <Features features={project.features} />
    </div>
  )
}
