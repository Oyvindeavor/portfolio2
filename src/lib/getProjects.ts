import { promises as fs } from 'fs'
import path from 'path'
import type { ProjectSummary } from '@/types/project'
/**
 * Asynchronously reads and parses the `projects.json` file from the `public` directory,
 * returning an array of `ProjectSummary` objects. Ie for project cards.
 *
 * @returns {Promise<ProjectSummary[]>} A promise that resolves to an array of project summaries.
 * @throws {Error} If the file cannot be read or parsed.
 *
 * @example
 * import { getProjects } from '@/lib/getProjects'
 * const projects = await getProjects()
 * console.log(projects)
 * // Output: [{ title: 'Project 1', slug: 'project-1', image: '/images/project1.jpg', description: 'Description of project 1' }, ...]
 */
export async function getProjects(): Promise<ProjectSummary[]> {
  const filePath = path.join(process.cwd(), 'src/content/projects.json')
  const fileData = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileData)
}
