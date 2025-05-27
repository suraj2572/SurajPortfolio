"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (sectionType: string) => {
    if (activeSection === sectionType) {
      setActiveSection(null)
    } else {
      setActiveSection(sectionType)
    }
  }

  const skillsData = [
    { name: "React", icon: "⚛️", level: "Expert" },
    { name: "AWS", icon: "☁️", level: "Advanced" },
    { name: "Docker", icon: "🐳", level: "Expert" },
    { name: "JavaScript", icon: "⚡", level: "Expert" },
    { name: "Kubernetes", icon: "⚙️", level: "Advanced" },
    { name: "Linux", icon: "🐧", level: "Expert" },
  ]

  const projectsData = [
    {
      name: "Mercedes-Benz Website",
      tech: "React, AWS EC2, Docker",
      status: "Live",
      description: "Responsive luxury car brand website with React Router navigation",
    },
    {
      name: "Laravel Starter Project",
      tech: "Laravel, PHP 8.2, Redis",
      status: "Production",
      description: "Production-ready Laravel app with SSL and containerization",
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                ☁️ Cloud Engineer & Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Suraj Singh Verma
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Cloud Engineer
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => handleSectionClick("skills")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === "skills"
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                }`}
                whileHover={{ scale: activeSection === "skills" ? 1.05 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Skills
              </motion.button>
              <motion.button
                onClick={() => handleSectionClick("projects")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === "projects"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/25 scale-105"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-pink-500/25"
                }`}
                whileHover={{ scale: activeSection === "projects" ? 1.05 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/portfolio.jpg"
                  alt="Suraj Singh Verma"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        {activeSection === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 50, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 50, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/50 shadow-lg shadow-cyan-500/25"
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="text-3xl mr-3"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <h3 className="text-2xl font-bold text-white">My Skills</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{skill.name}</p>
                    <p className="text-cyan-400 text-sm">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => {
                const element = document.getElementById("skills")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
              whileHover={{ x: 5 }}
            >
              View All Skills →
            </motion.button>
          </motion.div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 50, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 50, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/50 shadow-lg shadow-pink-500/25"
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="text-3xl mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold text-white">My Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{project.name}</h4>
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs rounded-full border border-green-400/30">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <p className="text-pink-400 text-xs">{project.tech}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="mt-4 text-pink-400 hover:text-pink-300 transition-colors flex items-center"
              whileHover={{ x: 5 }}
            >
              View All Projects →
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
