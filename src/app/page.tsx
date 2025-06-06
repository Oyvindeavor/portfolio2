import ProjectCardSection from '@/components/ProjectCardSection'
import Hero from '@/components/Hero'

export default async function Home() {
  return (
    <div className="min-h-screen py-4">
      <section aria-label="Hero Section">
        <Hero />
      </section>
      <section className="mx-auto mt-2 max-w-3xl" aria-label="Featured Projects">
        <ProjectCardSection />
      </section>
    </div>
  )
}
