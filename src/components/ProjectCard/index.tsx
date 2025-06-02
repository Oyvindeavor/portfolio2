import Link from 'next/link'
import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '../ui/aspect-ratio'
import { ArrowUpRight } from 'lucide-react'
import type { ProjectSummary } from '@/types/project'

interface ProjectCardProps {
  project: ProjectSummary
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group bg-card/50 hover:bg-card/80 h-85 overflow-hidden border-0 p-0 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/project/${project.slug}`} className="block">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              width={400}
              height={300}
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute top-3 right-3 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <div className="bg-background/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <CardHeader className="pt-5">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="group-hover:text-primary text-lg leading-tight font-semibold transition-colors">
              {project.title}
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground line-clamp-2 text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}
