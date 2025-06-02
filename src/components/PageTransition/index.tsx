'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
        variants={{
          initialState: {
            opacity: 1,
            y: 20
          },
          animateState: {
            opacity: 1,
            y: 0
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
