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
  images: Images[]
  description: string
  tech: Tech[]
  features: string[]
  links: Links[]
}

// the links used in the project, with optional icon
export interface Links {
  label: string
  url: string
  icon?: string
}

// the technology used in the project, with optional icon
export interface Tech {
  name: string
  icon?: string
}

// images array
export interface Images {
  src: string
  alt: string
  caption?: string
}
