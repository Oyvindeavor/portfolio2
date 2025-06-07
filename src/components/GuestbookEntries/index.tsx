import { sql } from '@/lib/neon'

type GuestbookEntry = {
  id: number
  name: string
  message: string
  created_at: string | Date
}

export async function GuestbookEntries() {
  const rawEntries = await sql`SELECT * FROM guestbook_entries ORDER BY created_at DESC`
  const entries: GuestbookEntry[] = rawEntries.map((entry: unknown) => {
    const { id, name, message, created_at } = entry as {
      id: number | string
      name: string
      message: string
      created_at: string | Date
    }
    return {
      id: Number(id),
      name: String(name),
      message: String(message),
      created_at
    }
  })

  return (
    <div className="mt-10 space-y-4">
      {entries.map((entry: GuestbookEntry) => (
        <div key={entry.id} className="bg-muted/30 rounded-md border p-3 text-sm">
          <div className="mb-2 flex items-center justify-between">
            <p className="mb-2 font-semibold">{entry.name}</p>
            <p className="text-muted-foreground text-xs">
              {new Date(entry.created_at).toLocaleString()}
            </p>
          </div>
          <p className="">{entry.message}</p>
        </div>
      ))}
    </div>
  )
}
