import ProjectCardSection from '@/components/ProjectCardSection'
import Hero from '@/components/Hero'

export default async function Home() {
  return (
    <div className="from-background to-muted min-h-screen bg-gradient-to-b py-4">
      <section aria-label="Hero Section">
        <Hero />
      </section>
      <section className="mx-auto mt-16 max-w-4xl" aria-label="Featured Projects">
        <ProjectCardSection />
      </section>
    </div>
  )
}
