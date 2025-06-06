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
    <Card className="group border-border/20 bg-card/30 hover:shadow-primary/10 hover:border-primary/20 w-full overflow-hidden border p-0 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Link href={`/project/${project.slug}`} className="block">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              width={600}
              height={337}
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="h-full w-full object-cover object-top brightness-95 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
              priority={false}
            />
          </AspectRatio>

          {/* Subtle overlay that reduces on hover */}
          <div className="from-background/60 via-background/20 to-background/10 group-hover:from-background/30 group-hover:via-background/10 absolute inset-0 bg-gradient-to-t transition-all duration-500 group-hover:to-transparent" />

          {/* Arrow icon */}
          <div className="absolute top-4 right-4 translate-x-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="bg-primary/90 text-primary-foreground rounded-full p-2.5 shadow-lg ring-1 ring-white/20 backdrop-blur-sm">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Bottom gradient for text readability */}
          <div className="from-background/80 absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t to-transparent" />
        </div>

        <CardHeader className="relative px-6 pt-6 pb-6">
          <div className="space-y-3">
            <CardTitle className="text-foreground group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold transition-colors duration-300">
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground/90 group-hover:text-muted-foreground line-clamp-3 text-sm leading-relaxed transition-colors duration-300">
              {project.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Link>
    </Card>
  )
}
