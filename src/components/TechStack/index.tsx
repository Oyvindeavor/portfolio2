import Image from 'next/image'
import type { Tech } from '@/types/project'

export default function TechStack({ tech }: { tech: Tech[] }) {
  return (
    <div className="mt-6">
      <ul className="flex flex-wrap gap-4" aria-labelledby="tech-stack-heading">
        {tech.map((tech, idx) => (
          <li key={idx} className="flex items-center gap-1 rounded border px-2 py-1 text-sm">
            {tech.name}
            {tech.icon ? (
              <Image
                width={16}
                height={16}
                className="inline h-4 w-4"
                src={tech.icon}
                alt={`${tech.name} icon`}
              />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
