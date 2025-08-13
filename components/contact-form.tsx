"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Mail, User, MessageSquare } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build a mailto link
    const mailtoLink = `mailto:gobidreamer@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    // Open email client
    window.location.href = mailtoLink

    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-panel p-8 rounded-2xl max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        {/* Name */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <label className="block text-cyber-blue font-semibold mb-2">
            <User className="inline w-4 h-4 mr-2" /> Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass-panel rounded-lg bg-cyber-black/30 text-cyber-white placeholder-cyber-white/50 border border-cyber-blue/30 focus:border-cyber-blue focus:outline-none focus:neon-glow-blue transition-all duration-300"
            placeholder="Your full name"
          />
        </motion.div>

        {/* Email */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <label className="block text-cyber-pink font-semibold mb-2">
            <Mail className="inline w-4 h-4 mr-2" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass-panel rounded-lg bg-cyber-black/30 text-cyber-white placeholder-cyber-white/50 border border-cyber-pink/30 focus:border-cyber-pink focus:outline-none focus:neon-glow-pink transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </motion.div>

        {/* Subject */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <label className="block text-cyber-purple font-semibold mb-2">
            <MessageSquare className="inline w-4 h-4 mr-2" /> Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass-panel rounded-lg bg-cyber-black/30 text-cyber-white placeholder-cyber-white/50 border border-cyber-purple/30 focus:border-cyber-purple focus:outline-none focus:neon-glow-purple transition-all duration-300"
            placeholder="What's this about?"
          />
        </motion.div>

        {/* Message */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <label className="block text-cyber-blue font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 glass-panel rounded-lg bg-cyber-black/30 text-cyber-white placeholder-cyber-white/50 border border-cyber-blue/30 focus:border-cyber-blue focus:outline-none focus:neon-glow-blue transition-all duration-300 resize-none"
            placeholder="Tell me about your project or idea..."
          />
        </motion.div>

        {/* Button */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
          <motion.button
            type="submit"
            className="w-full px-8 py-4 glass-panel rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-cyber-blue hover:text-cyber-white hover:neon-glow-blue"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px #00f7ff" }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.div>
      </div>
    </motion.form>
  )
}
