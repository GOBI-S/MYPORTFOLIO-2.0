"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  category: "Web Dev" | "Cybersecurity" | "AI/ML" | "IoT"
  image: string
  liveUrl?: string
  githubUrl?: string
  status: "completed" | "in-progress" | "concept"
}

const categoryColors = {
  "Web Dev": { primary: "cyber-blue", glow: "blue" },
  Cybersecurity: { primary: "cyber-pink", glow: "pink" },
  "AI/ML": { primary: "cyber-purple", glow: "purple" },
  IoT: { primary: "cyber-white", glow: "blue" },
}

export default function ProjectCard({
  title,
  description,
  technologies,
  category,
  image,
  liveUrl,
  githubUrl,
  status,
}: ProjectCardProps) {
  const colors = categoryColors[category]

  return (
    <motion.div
      className="glass-panel rounded-2xl overflow-hidden group cursor-pointer h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          category === "Web Dev"
            ? "0 0 40px #00f7ff"
            : category === "Cybersecurity"
              ? "0 0 40px #ff00c8"
              : category === "AI/ML"
                ? "0 0 40px #9d4edd"
                : "0 0 40px #ffffff",
      }}
      viewport={{ once: true }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              status === "completed"
                ? "bg-cyber-blue/20 text-cyber-blue"
                : status === "in-progress"
                  ? "bg-cyber-pink/20 text-cyber-pink"
                  : "bg-cyber-purple/20 text-cyber-purple"
            }`}
          >
            {status === "completed" ? "Completed" : status === "in-progress" ? "In Progress" : "Concept"}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold bg-${colors.primary}/20 text-${colors.primary}`}
          >
            {category}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3
          className={`text-2xl font-serif font-bold mb-3 text-${colors.primary} group-hover:text-glow-${colors.glow}`}
        >
          {title}
        </h3>

        <p className="text-cyber-white/80 mb-4 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyber-black/50 rounded-full text-sm text-cyber-white/70 border border-cyber-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 glass-panel rounded-lg text-${colors.primary} hover:text-cyber-white transition-colors duration-300`}
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px var(--${colors.primary})` }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass-panel rounded-lg text-cyber-white/70 hover:text-cyber-white transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ffffff" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
