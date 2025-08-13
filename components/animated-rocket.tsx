"use client"

import { useEffect, useState } from "react"

export default function AnimatedRocket() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-10 right-10 z-10">
      <div className="rocket-animation text-4xl">🚀</div>
    </div>
  )
}
