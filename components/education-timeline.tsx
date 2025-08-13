"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  year: string
  title: string
  institution: string
  description: string
  status: "completed" | "current" | "upcoming"
}

const timelineData: TimelineItem[] = [
  {
    year: "2020-2022",
    title: "Higher Secondary Education",
    institution: "Government Higher Secondary School , Veerapandi",
    description: "Completed with focus on Mathematics and computer science. Achieved 59% overall score.",
    status: "completed",
  },
  {
    year: "2023-2027",
    title: "Bachelor's in Computer & Communication Engineering",
    institution: "kathir College of Engineering ",
    description:
      "Currently in 3rd year, specializing in mern Stack, AI, and software development.",
    status: "current",
  },
  {
    year: "2025-2025",
    title: "Lakshmi communications Internship",
    institution: "Cybersecurity internship",
    description: "This internship focusing on cybersecurity and network  projects. we create a waf firewall for a project",
    status: "completed",
  },
]

export default function EducationTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-purple" />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <motion.div
              className={`relative z-10 w-4 h-4 rounded-full mr-8 mt-2 ${
                item.status === "completed"
                  ? "bg-cyber-blue neon-glow-blue"
                  : item.status === "current"
                    ? "bg-cyber-pink neon-glow-pink"
                    : "bg-cyber-purple neon-glow-purple"
              }`}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div
              className="glass-panel p-6 rounded-xl flex-1 group"
              whileHover={{
                scale: 1.02,
                boxShadow:
                  item.status === "completed"
                    ? "0 0 30px #00f7ff"
                    : item.status === "current"
                      ? "0 0 30px #ff00c8"
                      : "0 0 30px #9d4edd",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3
                  className={`text-xl font-serif font-bold ${
                    item.status === "completed"
                      ? "text-cyber-blue"
                      : item.status === "current"
                        ? "text-cyber-pink"
                        : "text-cyber-purple"
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    item.status === "completed"
                      ? "bg-cyber-blue/20 text-cyber-blue"
                      : item.status === "current"
                        ? "bg-cyber-pink/20 text-cyber-pink"
                        : "bg-cyber-purple/20 text-cyber-purple"
                  }`}
                >
                  {item.year}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-cyber-white mb-2">{item.institution}</h4>
              <p className="text-cyber-white/70 leading-relaxed">{item.description}</p>

              {item.status === "current" && (
                <motion.div
                  className="mt-3 text-sm text-cyber-pink font-semibold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Currently Active
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
