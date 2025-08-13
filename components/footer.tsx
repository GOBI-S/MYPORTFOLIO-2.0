"use client"

import { motion } from "framer-motion"
import { Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-cyber-black/80 border-t border-cyber-blue/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-black text-cyber-blue text-glow-blue mb-4">GOBI</h3>
            <p className="text-cyber-white/70 leading-relaxed">
              Computer & Communication Engineering student passionate about creating innovative solutions for tomorrow's
              challenges.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyber-pink mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase())
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block text-cyber-white/70 hover:text-cyber-blue hover:text-glow-blue transition-all duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyber-purple mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyber-black/50 rounded-full text-sm text-cyber-white/70 border border-cyber-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-cyber-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-cyber-white/70 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-cyber-pink" />
            <Code className="w-4 h-4 text-cyber-blue" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-cyber-purple" />
          </div>

          <div className="text-cyber-white/70 text-sm">
            © 2024 Gobi. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
