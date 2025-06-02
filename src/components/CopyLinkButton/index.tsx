'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Copy, Check } from 'lucide-react'

export default function CopyLinkButton() {
  const pathname = usePathname()
  const fullUrl = `https://www.oyvindr.com${pathname}`
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleCopy} variant="outline" className="flex items-center gap-2">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied!' : 'Share Link'}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? 'Link copied to clipboard' : 'Copy page URL'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
