'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type GesturesProps = {
  onClick?: () => void
}

export default function HeroButton({ onClick }: GesturesProps) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    onClick?.()
  }

  return (
    <div className="relative">
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.1, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        style={{ ...box, transition: 'background-color 0.3s ease' }}
        className="group relative overflow-hidden"
      >
        <span
          className={`pointer-events-none absolute inset-0 flex items-center justify-center text-xl transition-opacity duration-300 ${
            clicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {clicked ? '😏' : '👀'}
        </span>
      </motion.div>
    </div>
  )
}

const box = {
  width: 50,
  height: 50,
  borderRadius: 5,
  cursor: 'pointer',
  position: 'relative' as const
}
