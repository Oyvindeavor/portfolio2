'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: [1, 1.3, 1],
    rotate: [0, 5, -5, 0],
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

export default function AnimatedHeroText() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 10)

    return () => clearTimeout(timeout)
  }, [])

  if (!isMounted) return null

  return (
    <motion.h1
      className="flex flex-wrap justify-center bg-gradient-to-br from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-6xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnimation}
          whileHover={{
            scale: 1.3,
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 0.1,
              ease: 'easeInOut'
            }
          }}
          className="inline-block cursor-default transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,0,182,0.8)]"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
