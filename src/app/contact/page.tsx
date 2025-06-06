import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-3xl py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h1>

          <p className="text-muted-foreground mx-auto max-w-xl">
            I&apos;m always interested in hearing about new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="container">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
