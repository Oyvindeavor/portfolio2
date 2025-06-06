import type { ProjectSummary } from '@/types/project'
import { sql } from '@/lib/neon'
export async function getProjects(): Promise<ProjectSummary[]> {
  const result = await sql`SELECT * FROM projects ORDER BY id DESC`

  return result as ProjectSummary[]
}
