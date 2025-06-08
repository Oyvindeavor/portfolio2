import { GuestbookForm } from '@/components/GuestbookForm'
import { GuestbookEntries } from '@/components/GuestbookEntries'
import { NotebookText } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guestbook - Øyvind Riisnes',
  description: 'Sign my guestbook!'
}

export default function GuestbookPage() {
  return (
    <div className="container mx-auto min-h-screen max-w-xl px-4 py-10">
      <NotebookText className="text-primary mx-auto mb-6 h-10 w-10" />
      <h1 className="text-center text-2xl font-bold">Guestbook </h1>

      <p className="text-muted-foreground mb-12 text-center">Sign my guestbook below 👇</p>
      <Separator className="mb-8" />
      <GuestbookForm />
      <GuestbookEntries />
    </div>
  )
}
