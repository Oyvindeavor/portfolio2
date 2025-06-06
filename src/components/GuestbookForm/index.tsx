'use client'
import { submitEntry } from '@/lib/actions/guestbook-submit'
import { useActionState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
export function GuestbookForm() {
  const [state, formAction] = useActionState(submitEntry, { success: false })
  return (
    <form action={formAction} className="space-y-4">
      <Input name="name" placeholder="Your name" className="w-full rounded border p-2" required />
      <Textarea
        name="message"
        placeholder="Your message"
        className="w-full rounded border p-2"
        required
      />
      <Button
        type="submit"
        variant={'ghost'}
        className="border-border/100 hover:shadow-primary/100 hover:border-primary/100 w-full overflow-hidden border p-0 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
      >
        Sign Guestbook
      </Button>
      {state.success && <p className="text-green-500">Thanks for signing!</p>}
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  )
}
