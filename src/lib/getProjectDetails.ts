import type { ProjectDetail } from '@/types/project'
import { sql } from '@/lib/neon'

export async function getProjectDetails(slug: string): Promise<ProjectDetail | null> {
  const [project] = await sql`
    SELECT *
    FROM project_details
    WHERE slug = ${slug}
  `

  return (project as ProjectDetail) || null
}
