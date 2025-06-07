'use client'
import { submitEntry } from '@/lib/actions/guestbook-submit'
import { useActionState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Pen } from 'lucide-react'

export function GuestbookForm() {
  const [state, formAction] = useActionState(submitEntry, { success: false })
  return (
    <form action={formAction} className="space-y-4">
      <Input
        name="name"
        placeholder="Your name"
        className="border-border/100 focus:shadow-primary/100 focus:border-primary/100 w-full overflow-hidden rounded border p-0 p-2 backdrop-blur-sm transition-all duration-300 focus:shadow-2xl"
        required
      />
      <Textarea
        name="message"
        placeholder="Your message"
        className="border-border/100 focus:shadow-primary/50 focus:border-primary/50 w-full overflow-hidden rounded border p-0 p-2 backdrop-blur-sm transition-all duration-300 focus:shadow-xl"
        required
      />
      <Button
        type="submit"
        size="lg"
        variant={'ghost'}
        className="border-border/100 hover:shadow-primary/100 hover:border-primary/100 cursor-pointer overflow-hidden border p-0 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
      >
        Sign Guestbook
        <Pen className="ml-2 inline h-4 w-4" />
      </Button>

      {state.success && <p className="text-green-500">Thanks for signing!</p>}
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  )
}
