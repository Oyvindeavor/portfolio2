import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import CopyLinkButton from '../CopyLinkButton'
import { ExternalLink } from 'lucide-react'
import type { Links } from '@/types/project'

export default function ProjectLinks({ links }: { links: Links[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {links.map((link, index) => (
        <Badge key={index} variant="outline" className="px-3 py-2">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition hover:text-blue-600 hover:underline dark:hover:text-blue-400"
          >
            {link.icon && (
              <Image
                width={16}
                height={16}
                className="mr-2 h-4 w-4"
                src={link.icon}
                alt={`${link.label} icon`}
              />
            )}
            {!link.icon && <ExternalLink className="mr-2 h-4 w-4" />}
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        </Badge>
      ))}
      <CopyLinkButton />
    </div>
  )
}
