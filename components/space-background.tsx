"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const starCount = 100
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-cyber-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      <motion.div
        className="absolute w-1 h-1 bg-cyber-blue rounded-full"
        style={{ top: "20%", left: "-5%" }}
        animate={{
          x: ["0vw", "110vw"],
          y: ["0vh", "30vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 8,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute w-1 h-1 bg-cyber-pink rounded-full"
        style={{ top: "60%", left: "-5%" }}
        animate={{
          x: ["0vw", "110vw"],
          y: ["0vh", "-20vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 12,
          ease: "easeOut",
          delay: 4,
        }}
      />

      {/* Nebula effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-blue/5" />
    </div>
  )
}
