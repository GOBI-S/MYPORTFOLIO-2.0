"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ProjectCard from "./project-card"

const projects = [
  {
    title: "Room Rent Web",
    description:
      "A streamlined rental management platform enabling landlords and tenants to manage listings, payments, and communication seamlessly. Built for scalability, speed, and a smooth user experience.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS","Typescript"],
    category: "Web Dev" as const,
    image: "roomrentweb.png",
    liveUrl: "https://roomrentwebmern.gobidev.site/",
    githubUrl: "https://github.com/GOBI-S/Room-Rent-Web-App-MERN-",
    status: "completed" as const,
  },
  {
    title: "Diffusion Analysis in Monkeypox virus",
    description:
      "An AI-powered data visualization and analysis tool for diffusion models, providing interactive charts, heatmaps, and pattern recognition to uncover deep insights from datasets.",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
    category: "AI/ML" as const,
    image: "difussion alayis.png",
    githubUrl: "https://github.com/GOBI-S/Arima-Model",
    status: "completed" as const,
  },
  {
    title: "WAF Firewall",
    description:
      "A custom Web Application Firewall designed to block malicious requests, prevent SQL injection, and mitigate XSS attacks.",
    technologies: ["React", "ModSecurity","Node.js","Mongodb","Python","express.js"],
    category: "Cybersecurity" as const,
    image: "WAF.png",
    githubUrl: "https://github.com/GOBI-S/WAF",
    status: "in-progress" as const,
  },
  {
    title: "Solar System 3D using WebGL3",
    description:
      "An immersive 3D visualization of the solar system powered by WebGL3, featuring realistic planetary orbits, textures, and animations for an interactive learning experience.",
    technologies: ["Three.js", "WebGL3", "JavaScript", "HTML5", "CSS3"],
    category: "Web Dev" as const,
    image: "solarplanet.png",
    githubUrl: "https://github.com/GOBI-S/Soloarsystem",
    liveUrl: "http://solar.gobidev.site/",
    status: "completed" as const,
  },
  {
    title: "Hackathon Portal",
    description:
      "A dynamic event management portal for hackathons, providing participant registration, project submissions.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "Web Dev" as const,
    image: "hackthon.png",
    githubUrl: "https://github.com/gobi/hackathon-portal",
    status: "in-progress" as const,
  },
  {
    title: "Personal Portfolio 1.0",
    description:
      "A personal developer portfolio showcasing projects, skills, and achievements with smooth animations, responsive design, and an elegant UI.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion","Typescript"],
    category: "Web Dev" as const,
    image: "portfolio1.0.png",
    githubUrl: "https://github.com/GOBI-S/Portfolio",
    liveUrl: "https://portfolioold.gobidev.site/",
    status: "completed" as const,
  },
   {
  title: "Email-Temperature System",
  description:
    "A web-based service where users register their email and address, and the system automatically retrieves the daily temperature for that location and sends it to their inbox every 24 hours. Built to provide personalized, location-specific weather updates without manual checking.",
  technologies: ["Node.js", "Express", "OpenWeather API", "Nodemailer", "MongoDB","React"],
  category: "Web Dev" as const,
  image: "emailtemprature.png",
  githubUrl: "https://github.com/GOBI-S/weather-frontend",
  liveUrl: "https://weatherremainder.gobidev.site/",
  status: "completed" as const,
}
]


const categories = ["All", "Web Dev", "Cybersecurity", "AI/ML"] as const

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-black mb-6 text-cyber-pink text-glow-pink">
            Project Arsenal
          </h2>
          <p className="text-xl text-cyber-white/80 max-w-3xl mx-auto mb-8">
            Explore my collection of innovative projects spanning web development, cybersecurity, AI/ML, and IoT
            solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "glass-panel neon-glow-blue text-cyber-blue"
                  : "glass-panel text-cyber-white/70 hover:text-cyber-white"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-cyber-white/80 mb-6">Interested in collaborating on innovative projects?</p>
          <motion.button
            className="glass-panel px-8 py-4 rounded-lg font-semibold text-cyber-purple hover:text-cyber-white transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #9d4edd" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
