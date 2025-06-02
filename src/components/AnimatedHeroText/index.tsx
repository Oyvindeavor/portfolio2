'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const letters = [...'Øyvind Riisnes']

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

const letterAnimation = {
  hidden: { opacity: 0, scale: 2, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30
    }
  }
}

export default function AnimatedHeroText() {
  const controls = useAnimationControls()

  useEffect(() => {
    // Start the initial staggered animation
    controls.start('visible').then(() => {
      // After the letters appear, do a small jump for all
      controls.start({
        y: [0, -10, 0],
        transition: {
          repeat: 0,
          duration: 0.4,
          ease: 'easeInOut'
        }
      })
    })
  }, [controls])

  return (
    <motion.h1
      className="hero-text flex flex-wrap justify-center text-5xl tracking-tight md:text-6xl"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={letterAnimation}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
