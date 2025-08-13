"use client"

import { motion } from "framer-motion"
type SkillCategory = "Web Dev" | "Cybersecurity" | "AI/ML" | "Tools";

interface Skill {
  name: string
  category: "Web Dev" | "Cybersecurity" | "AI/ML" | "Tools"
  icon:string
  level: number
}

const skills: Skill[] = [
  // Web Dev
  { name: "React", category: "Web Dev", icon: "⚛️", level: 80 },
  { name: "Next.js", category: "Web Dev", icon: "▲", level: 80 },
  { name: "JavaScript", category: "Web Dev", icon: "📜", level: 85 },
  { name: "Node.js", category: "Web Dev", icon: "🟢", level: 70 },
  { name: "Express.js", category: "Web Dev", icon: "🚂", level: 85 },
  { name: "MongoDB", category: "Web Dev", icon: "🍃", level: 85 },
  { name: "Tailwind CSS", category: "Web Dev", icon: "🎨", level: 83 },
  { name: "HTML", category: "Web Dev", icon: "🌐", level: 95 },
  { name: "CSS", category: "Web Dev", icon: "🎭", level: 90 },
  { name: "Three.js", category: "Web Dev", icon: "🌌", level: 40 },

  // Cybersecurity
  { name: "Web Application Security", category: "Cybersecurity", icon: "🛡️", level: 80 },
  { name: "Ethical Hacking", category: "Cybersecurity", icon: "🕵️‍♂️", level: 50 },
  { name: "CTF Challenges", category: "Cybersecurity", icon: "🎯", level: 70 },
  { name: "SQL Injection Prevention", category: "Cybersecurity", icon: "💉", level: 75 },
  { name: "Vulnerability Scanning", category: "Cybersecurity", icon: "📡", level: 77 },
  { name: "WAF Development (Nginx + ModSecurity)", category: "Cybersecurity", icon: "🛑", level: 50 },
  { name: "Request Manipulation", category: "Cybersecurity", icon: "🔐", level: 68 },

  // AI/ML
  { name: "Python", category: "AI/ML", icon: "🐍", level: 85 },
  { name: "Machine Learning", category: "AI/ML", icon: "🤖", level: 65 },
  { name: "TensorFlow", category: "AI/ML", icon: "🔗", level: 68 },
  { name: "Scikit-Learn", category: "AI/ML", icon: "📊", level: 67 },
  { name: "Pandas", category: "AI/ML", icon: "🐼", level: 75 },
  { name: "NumPy", category: "AI/ML", icon: "🔢", level: 80 },

  // Tools
  { name: "Git & GitHub", category: "Tools", icon: "📝", level: 85 },
  { name: "Postman", category: "Tools", icon: "📮", level: 80 },
  { name: "Google Forms Automation", category: "Tools", icon: "📄", level: 60 },
  { name: "Linux", category: "Tools", icon: "🐧", level: 75 }
]


const categoryColors = {
  "Web Dev": "cyber-blue",
  Cybersecurity: "cyber-pink",
  "AI/ML": "cyber-purple",
  Tools: "cyber-white",
}

export default function SkillsGrid() {
  const categories = ["Web Dev", "Cybersecurity", "AI/ML", "Tools"] as const

  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          viewport={{ once: true }}
        >
          <h3
            className={`text-2xl font-serif font-bold mb-6 text-${categoryColors[category]} text-glow-${categoryColors[category] === "cyber-white" ? "blue" : categoryColors[category].split("-")[1]}`}
          >
            {category}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass-panel p-6 rounded-xl group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      category === "Web Dev"
                        ? "0 0 30px #00f7ff"
                        : category === "Cybersecurity"
                          ? "0 0 30px #ff00c8"
                          : category === "AI/ML"
                            ? "0 0 30px #9d4edd"
                            : "0 0 30px #ffffff",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{skill.icon}</span>
                    <h4 className="text-lg font-semibold text-cyber-white">{skill.name}</h4>
                  </div>

                  {/* Skill level bar */}
                  <div className="w-full bg-cyber-black/50 rounded-full h-2 mb-2">
                    <motion.div
                      className={`h-2 rounded-full bg-${categoryColors[category]}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-cyber-white/60">{skill.level}%</span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
