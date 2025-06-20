import { ContactForm } from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Øyvind Riisnes',
  description:
    'Get in touch with Me Øyvind Riisnes, a frontend developer and UI/UX designer. I am always interested in hearing about new opportunities and interesting projects.'
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-xl py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-2 text-3xl font-bold">Get In Touch</h1>

          <p className="text-muted-foreground mx-auto max-w-xl">
            I&apos;m always interested in hearing about new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </div>
        <div className="px-4">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
