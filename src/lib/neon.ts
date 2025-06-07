import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.GUESTBOOK_DATABASE_URL!)

export { sql }
