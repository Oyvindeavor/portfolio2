'use server'

import { sql } from '@/lib/neon'
import { revalidatePath } from 'next/cache'

export async function submitEntry(prevState: unknown, formData: FormData) {
  const name = formData.get('name')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !message) return { error: 'Missing fields' }

  await sql`
    INSERT INTO guestbook_entries (name, message)
    VALUES (${name}, ${message})
  `

  revalidatePath('/guestbook')
  return { success: true }
}
