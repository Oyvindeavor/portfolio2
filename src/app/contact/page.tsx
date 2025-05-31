import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="from-background to-muted/20 min-h-screen bg-gradient-to-br">
      <div className="container mx-auto max-w-3xl py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground mb-6 text-xl">Let&apos;s discuss your next project</p>
          <p className="text-muted-foreground mx-auto max-w-2xl">
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
