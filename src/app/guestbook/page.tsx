import { GuestbookForm } from '@/components/GuestbookForm'
import { GuestbookEntries } from '@/components/GuestbookEntries'

export const metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook!'
}

export default function GuestbookPage() {
  return (
    <div className="mx-auto min-h-screen max-w-xl px-4 py-10">
      <h1 className="mx-auto mb-4 text-3xl font-bold text-purple-300">Guestbook</h1>
      <p className="text-muted-foreground mb-6">Sign my guestbook below 👇</p>
      <GuestbookForm />
      <GuestbookEntries />
    </div>
  )
}
