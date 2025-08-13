"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/GOBI-S",
    color: "cyber-white",
    hoverColor: "white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/gobi-s-7b1a52242/",
    color: "cyber-blue",
    hoverColor: "blue",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:gobidreamer@gmail.com",
    color: "cyber-pink",
    hoverColor: "pink",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/sinking_._heart",
    color: "cyber-purple",
    hoverColor: "purple",
  },
]

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 glass-panel rounded-full text-${social.color} hover:text-cyber-white transition-all duration-300 group`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{
            scale: 1.1,
            boxShadow:
              social.hoverColor === "white"
                ? "0 0 25px #ffffff"
                : social.hoverColor === "blue"
                  ? "0 0 25px #00f7ff"
                  : social.hoverColor === "pink"
                    ? "0 0 25px #ff00c8"
                    : "0 0 25px #9d4edd",
          }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <social.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  )
}
