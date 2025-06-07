import { Github } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind',
    'Git & GitHub',
    'Figma',
    'Testing (Jest & RTL)'
  ]

  return (
    <div className="min-h-screen bg-[url('/images/cccoil.svg')] bg-contain bg-center bg-no-repeat">
      <div className="container px-4 py-16 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold">Øyvind Riisnes</h1>
          <p className="text-muted-foreground mb-6 text-xl">Frontend Developer & UI/UX Designer</p>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
            I create beautiful, responsive web experiences with modern technologies. Specializing in
            React and Next.js, I focus on performance and user experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About Me</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Frontend developer with experience in building responsive, user-friendly web
                  applications. My strengths are clean code with a focus on performance and
                  accessibility. I like creating Server Components with Next.js and using TypeScript
                  for type safety.
                </p>
                <p>
                  When not developing, I enjoy hiking, watching sci-fi movies and all things car
                  related wheter it be working on my own car or watching car content on YouTube.
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-primary/20 space-y-6 border-l-2 pl-6">
                  <div className="relative">
                    <div className="bg-muted-foreground absolute top-2 -left-8 h-3 w-3 rounded-full"></div>
                    <div className="space-y-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">Frontend Developer</h3>
                          <p className="text-primary font-medium">Noroff</p>
                        </div>
                        <Badge variant="outline">2023 - 2025</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        Student at Noroff, specializing in frontend development Gained hands-on
                        experience through various projects. Focus on clean code, performance, and
                        user experience. Emphasis on accessibility and responsive design. Learned to
                        use modern tools like React, and TypeScript. started with HTML and CSS, then
                        moved on to JavaScript and TypeScript. Worked with Figma for UI/UX design
                        and prototyping.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expertise Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Frontend Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Modern React applications with TypeScript
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">UI/UX Design</h4>
                  <p className="text-muted-foreground text-sm">
                    User-centered design and prototyping
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Performance</h4>
                  <p className="text-muted-foreground text-sm">Optimization and best practices</p>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏔️</span>
                  <div>
                    <p className="font-medium">Hiking</p>
                    <p className="text-muted-foreground text-sm">Mountain trails</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚙</span>
                  <div>
                    <p className="font-medium">Car detailing</p>
                    <p className="text-muted-foreground text-sm">Hobby detailer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <p className="font-medium">Car repair</p>
                    <p className="text-muted-foreground text-sm">Love working on my own car</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-muted/30 mt-16 rounded-lg p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-6">
            Open to interesting projects and collaborations.
          </p>
          <Button
            asChild
            size="lg"
            variant={'ghost'}
            className="border-border/100 hover:shadow-primary/100 hover:border-primary/100 focus:shadow-primary/100 focus:border-primary/100 cursor-pointer overflow-hidden border p-0 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl focus:shadow-2xl"
          >
            <Link href="https://github.com" className="gap-2">
              <Github className="size-5" />
              Check Out My Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
