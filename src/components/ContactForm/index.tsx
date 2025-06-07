'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { SendHorizonal } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    setLoading(false)

    if (res.ok) {
      setStatus('Message sent successfully! ill be in touch soon. 🙃')
      form.reset()
    } else {
      setStatus('Something went wrong, please try again later. 😶')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          id="name"
          required
          placeholder="Your name"
          className="border-border/100 focus:shadow-primary/100 focus:border-primary/100 w-full overflow-hidden rounded border p-0 p-2 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          required
          placeholder="your@email.com"
          className="border-border/100 focus:shadow-primary/100 focus:border-primary/100 w-full overflow-hidden rounded border p-0 p-2 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          id="message"
          required
          placeholder="What do you want to say?"
          rows={6}
          className="bg-card border-border/100 focus:shadow-primary/100 focus:border-primary/100 w-full overflow-hidden rounded border p-0 p-2 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl"
        />
      </div>

      <Button
        type="submit"
        size={'lg'}
        variant={'ghost'}
        disabled={loading}
        className="border-border/100 hover:shadow-primary/100 hover:border-primary/100 cursor-pointer overflow-hidden border p-0 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <SendHorizonal className="ml-2 inline h-4 w-4" />
      </Button>

      {status && <p className="pt-2 text-center text-sm">{status}</p>}
    </form>
  )
}
