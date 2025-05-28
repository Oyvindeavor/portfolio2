// the project summary used for the project card section
export type ProjectSummary = {
  title: string
  slug: string
  image: string
  description: string
}

// the project detail used for the project detail page
export type ProjectDetail = {
  slug: string
  title: string
  image: string
  description: string
  tech: string[]
  features: string[]
  link: string
}
