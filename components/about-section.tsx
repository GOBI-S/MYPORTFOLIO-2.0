"use client"

import { motion } from "framer-motion"
import SkillsGrid from "./skills-grid"
import EducationTimeline from "./education-timeline"

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-black mb-6 text-cyber-blue text-glow-blue">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-pink mx-auto" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="glass-panel p-8 md:p-12 rounded-2xl mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-cyber-pink text-glow-pink mb-6">
                Fresh Perspective, Infinite Possibilities
              </h3>
              <p className="text-lg text-cyber-white/80 leading-relaxed mb-6">
                I am deeply passionate about creating secure, high-performance web applications that combine functionality with modern design. My drive for cybersecurity pushes me to explore vulnerabilities, solve challenging CTF problems, and develop robust defense mechanisms like WAFs. I love the MERN stack for its flexibility and speed, enabling me to bring ideas to life with seamless UI/UX. Creativity fuels my work . Above all, I’m committed to continuous learning, staying ahead in both development and security to build systems that inspire trust and innovation.
              </p>
              {/* <p className="text-lg text-cyber-white/80 leading-relaxed">
                I specialize in full-stack web development, cybersecurity, and emerging AI technologies. Every project I
                undertake is an opportunity to push boundaries and create something extraordinary.
              </p> */}
            </div>

            <div className="space-y-6">
              <motion.div
                className="glass-panel p-6 rounded-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00f7ff" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-cyber-blue mb-3">Current Focus</h4>
                <p className="text-cyber-white/70">
                 Currently focused on MERN stack and cybersecurity, creating impactful projects like a Web Application Firewall,Room renting application like olx and a collaborative hackathon registration portal built with my senior.
                </p>
              </motion.div>

              <motion.div
                className="glass-panel p-6 rounded-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #ff00c8" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-cyber-pink mb-3">Career Goals</h4>
                <p className="text-cyber-white/70">
                  To excel as a Full-Stack Developer with deep expertise in cybersecurity, designing and delivering secure, scalable, and innovative digital solutions that drive real-world impact.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif font-bold text-center mb-12 text-cyber-purple text-glow-purple">
            Technical Arsenal
          </h3>
          <SkillsGrid />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif font-bold text-center mb-12 text-cyber-blue text-glow-blue">
            Educational Journey
          </h3>
          <EducationTimeline />
        </motion.div>
      </div>
    </section>
  )
}
