'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

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
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" required placeholder="Your name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" type="email" required placeholder="your@email.com" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          id="message"
          required
          placeholder="What do you want to say?"
          rows={6}
          className="bg-card"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>

      {status && <p className="pt-2 text-center text-sm">{status}</p>}
    </form>
  )
}
