"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  children: ReactNode
  variant?: "blue" | "pink" | "purple"
  onClick?: () => void
  className?: string
}

export default function GlowingButton({ children, variant = "blue", onClick, className = "" }: GlowingButtonProps) {
  const variants = {
    blue: "hover:neon-glow-blue text-cyber-blue hover:text-cyber-white",
    pink: "hover:neon-glow-pink text-cyber-pink hover:text-cyber-white",
    purple: "hover:neon-glow-purple text-cyber-purple hover:text-cyber-white",
  }

  return (
    <motion.button
      className={`glass-panel px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "blue" ? "0 0 30px #00f7ff" : variant === "pink" ? "0 0 30px #ff00c8" : "0 0 30px #9d4edd",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {children}
    </motion.button>
  )
}
