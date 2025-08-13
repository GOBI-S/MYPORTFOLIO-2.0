"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading-screen";
import CyberNavbar from "@/components/cyber-navbar";
import EnhancedParticles from "@/components/enhanced-particles";
import CyberRocket from "@/components/cyber-rocket";
import TypingAnimation from "@/components/typing-animation";
import GlowingButton from "@/components/glowing-button";
import AboutSection from "@/components/about-section";
import ProjectsShowcase from "@/components/projects-showcase";
import ContactSection from "@/components/contact-section";
import ScrollToTop from "@/components/scroll-to-top";
import Footer from "@/components/footer";
import { Code, Heart } from "lucide-react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <LoadingScreen />

      {isLoaded && (
        <>
          <CyberNavbar />
          <ScrollToTop />

          <main className="min-h-screen relative overflow-hidden">
            <EnhancedParticles />
            <CyberRocket />

            {/* Hero Section */}
            <section
              id="home"
              className="min-h-screen flex items-center justify-center px-4 relative"
            >
              <div className="text-center max-w-6xl mx-auto z-10">
                {/* Main Hero Text */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-6">
                    <TypingAnimation
                      text="Hi, I'm Gobi"
                      className="text-glow-blue"
                      speed={150}
                    />
                  </h1>
                </motion.div>

                {/* Subtitle with stagger animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl mb-6 font-serif font-bold text-cyber-pink text-glow-pink"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                  >
                    MERN STACK DEV & PENETRATION TESTER
                  </motion.p>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl mb-12 text-cyber-white/80 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.8 }}
                >
                  MERN stack innovator & cybersecurity enthusiast, building
                  secure, high-performance web apps that blend sleek user
                  experiences with rock-solid protection
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 0.8 }}
                >
                  <GlowingButton
                    variant="blue"
                    onClick={() => scrollToSection("projects")}
                  >
                    View My Work
                  </GlowingButton>
                  <GlowingButton
                    variant="pink"
                    onClick={() => scrollToSection("contact")}
                  >
                    Let's Collaborate!
                  </GlowingButton>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-20 left-35  "
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                >
                  <Heart className="w-4 h-4 text-cyber-pink" />
                  <Code className="w-4 h-4 text-cyber-blue" />
                </motion.div>

                <motion.div
                  className="absolute bottom-20 right-10 w-25 h-25 glass-panel rounded-lg hidden md:block"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                >
                  <img
                    src="profile.jpeg"
                    alt="Profile image"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
                  <motion.div
                    className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
              </motion.div>
            </section>

            {/* About Section */}
            <AboutSection />

            {/* Projects Section */}
            <ProjectsShowcase />

            {/* Contact Section */}
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
