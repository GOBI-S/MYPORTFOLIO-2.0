"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  type?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate"
}

export function AnimatedElement({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  type = "fadeIn",
}: AnimatedElementProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    rotate: {
      initial: { opacity: 0, rotate: -10, scale: 0.8 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const animation = animations[type]

  return (
    <motion.div
      className={className}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxElement({
  children,
  offset = 50,
  className = "",
}: { children: ReactNode; offset?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
