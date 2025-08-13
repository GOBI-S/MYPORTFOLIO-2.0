"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CyberRocket() {
  const [isLaunched, setIsLaunched] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLaunched(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed top-0 right-10 z-20 pointer-events-none">
      <motion.div
        className="text-4xl"
        initial={{ y: 800, rotate: -45, opacity: 0 }}
        animate={
          isLaunched
            ? {
                y: -200,
                rotate: -45,
                opacity: [0, 1, 1, 0],
              }
            : {}
        }
        transition={{
          duration: 4,
          ease: "easeOut",
        }}
      >
        🚀
      </motion.div>

      {/* Rocket trail effect */}
      <motion.div
        className="absolute top-8 right-2 w-1 bg-gradient-to-t from-cyber-blue to-transparent"
        initial={{ height: 0, opacity: 0 }}
        animate={
          isLaunched
            ? {
                height: [0, 100, 150, 0],
                opacity: [0, 0.8, 0.8, 0],
              }
            : {}
        }
        transition={{
          duration: 4,
          ease: "easeOut",
        }}
      />
    </div>
  )
}
