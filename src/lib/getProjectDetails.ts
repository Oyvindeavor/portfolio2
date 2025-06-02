import { promises as fs } from 'fs'
import path from 'path'
import type { ProjectDetail } from '@/types/project'

/**
 * Retrieves the details of a project by its slug.
 *
 * Reads the `project-details.json` file from the `public` directory,
 * parses the list of projects, and returns the project that matches
 * the provided slug. If no matching project is found, returns `null`.
 * This returns detailed data of a project, used on the project detail page.
 *
 * @param slug - The unique identifier (slug) of the project to retrieve.
 * @returns A promise that resolves to the matching `ProjectDetail` object, or `null` if not found.
 *
 * @example
 * import { getProjectDetails } from '@/lib/getProjectDetails'
 * const project = await getProjectDetails('my-project-slug')
 * if (project) {
 *   console.log(project.title) // Outputs the title of the project
 * } else {
 *   console.log('Project not found')
 * }
 */
export async function getProjectDetails(slug: string): Promise<ProjectDetail | null> {
  const filePath = path.join(process.cwd(), 'src/content/project-details.json')
  const fileData = await fs.readFile(filePath, 'utf8')
  const projects: ProjectDetail[] = JSON.parse(fileData)

  const project = projects.find((p) => p.slug === slug)
  return project || null
}
