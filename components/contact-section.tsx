"use client"

import { motion } from "framer-motion"
import ContactForm from "./contact-form"
import SocialLinks from "./social-links"
import SpaceBackground from "./space-background"

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <SpaceBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-black mb-6 text-cyber-purple text-glow-purple">
            Let's Connect
          </h2>
          <p className="text-xl text-cyber-white/80 max-w-3xl mx-auto mb-8">
            Ready to collaborate on innovative projects? Drop me a message and let's create something extraordinary
            together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <motion.div
              className="glass-panel p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-cyber-blue text-glow-blue mb-6">Get In Touch</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full neon-glow-blue" />
                  <span className="text-cyber-white/80">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyber-pink rounded-full neon-glow-pink" />
                  <span className="text-cyber-white/80">Open to collaboration opportunities</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full neon-glow-purple" />
                  <span className="text-cyber-white/80">Interested in innovative tech discussions</span>
                </div>
              </div>

              <p className="text-cyber-white/70 leading-relaxed mb-6">
                Whether you have a project in mind, want to discuss emerging technologies, or just want to connect, I'm
                always excited to hear from fellow innovators and creators.
              </p>

              <div className="text-center">
                <p className="text-cyber-blue font-semibold mb-4">Follow me on social media</p>
                <SocialLinks />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="glass-panel p-6 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyber-blue">24h</div>
                  <div className="text-sm text-cyber-white/60">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyber-pink">100%</div>
                  <div className="text-sm text-cyber-white/60">Commitment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyber-purple">∞</div>
                  <div className="text-sm text-cyber-white/60">Possibilities</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
