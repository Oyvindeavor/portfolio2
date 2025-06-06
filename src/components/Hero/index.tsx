'use client'

import { useRef, useState, useEffect } from 'react'
import AnimatedHeroText from '../AnimatedHeroText'
import HeroButton from '../HeroButton'
import { motion } from 'framer-motion'

const logos = [
  '/images/logos/bootstrap.svg',
  '/images/logos/nextdotjs.svg',
  '/images/logos/github-mark.svg',
  '/images/logos/typescript.svg',
  '/images/logos/react.svg',
  '/images/logos/javascript.svg',
  '/images/logos/tailwindcss.svg',
  '/images/logos/nodedotjs.svg',
  '/images/logos/docker.svg'
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  // Manage logos with randomized positions and unique IDs
  const [logosState, setLogosState] = useState<{ src: string; x: number; y: number; id: number }[]>(
    []
  )

  // Update container height on mount or resize
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight)
    }
  }, [])

  // Respawn logos on click with randomized initial x and fixed y above container
  const spawnLogos = () => {
    if (!containerRef.current) return

    const newLogos = logos.map((src, index) => ({
      src,
      x: Math.random() * ((containerRef.current?.offsetWidth ?? 0) - 48) + 24, // center within container (48 is approx width of logo)
      y: -150, // start above the container
      id: Date.now() + index // unique key to force re-render
    }))
    setLogosState(newLogos)
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-[url('/images/ccchaos.svg')] bg-cover py-24 text-center"
    >
      {/* Hero Text and Button */}
      <div className="relative z-10">
        <AnimatedHeroText />

        <div className="flex flex-col items-center justify-center space-y-4">
          <HeroButton onClick={spawnLogos} />
        </div>

        <p className="text-muted-primary mx-auto max-w-2xl text-lg">
          Developer creating amazing digital experiences. Explore my work and let&apos;s build
          something great together.
        </p>
      </div>

      {/* Floating Logos */}
      {logosState.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {logosState.map(({ src, x, y, id }) => (
            <motion.img
              key={id}
              src={src}
              alt="Framework Logo"
              className="pointer-events-auto absolute h-12 w-12 cursor-grab"
              style={{ top: y, left: x, transform: 'translate(-50%, -50%)' }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.5}
              dragMomentum
              initial={{ opacity: 0, rotate: Math.random() * 360 }}
              animate={{
                opacity: 1,
                y: containerHeight,
                rotate: Math.random() * 360
              }}
              transition={{ type: 'spring', stiffness: 40, damping: 25, mass: 3 }}
              whileTap={{ cursor: 'grabbing' }}
              whileDrag={{ rotate: 20, scale: 1.1 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
