"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      description:
        "Semantic HTML5 markup for creating well-structured, accessible web pages. Expert in modern HTML elements, forms, and SEO optimization.",
    },
    {
      name: "CSS",
      icon: "🎨",
      description:
        "Advanced CSS3 styling including Flexbox, Grid, animations, and responsive design. Proficient in CSS preprocessors and modern layout techniques.",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      description:
        "Modern ES6+ JavaScript for dynamic web applications. Expert in DOM manipulation, async programming, and JavaScript frameworks.",
    },
    {
      name: "TailwindCSS",
      icon: "💨",
      description:
        "Utility-first CSS framework for rapid UI development. Skilled in creating responsive, maintainable designs with Tailwind's component system.",
    },
    {
      name: "React",
      icon: "⚛️",
      description:
        "Building dynamic user interfaces with React hooks, state management, and component-based architecture. Expert in React ecosystem and best practices.",
    },
    {
      name: "AWS",
      icon: "☁️",
      description:
        "Amazon Web Services cloud platform for scalable infrastructure. Experienced with EC2, S3, Lambda, RDS, and cloud architecture design.",
    },
    {
      name: "Linux",
      icon: "🐧",
      description:
        "Linux system administration and command-line expertise. Proficient in shell scripting, system configuration, and server management.",
    },
    {
      name: "Networking",
      icon: "🌐",
      description:
        "Network protocols, configuration, and troubleshooting. Understanding of TCP/IP, DNS, load balancing, and network security principles.",
    },
    {
      name: "Docker",
      icon: "🐳",
      description:
        "Containerization technology for application deployment. Expert in creating Dockerfiles, multi-stage builds, and container orchestration.",
    },
    {
      name: "Jenkins",
      icon: "🔧",
      description:
        "CI/CD automation and build pipelines. Skilled in creating automated workflows, testing pipelines, and deployment automation.",
    },
    {
      name: "GitHub",
      icon: "🐙",
      description:
        "Version control and collaboration platform. Expert in Git workflows, GitHub Actions, pull requests, and project management.",
    },
    {
      name: "Git",
      icon: "📝",
      description:
        "Distributed version control system for code management. Proficient in branching strategies, merging, and collaborative development workflows.",
    },
    {
      name: "Nginx",
      icon: "🚀",
      description:
        "High-performance web server and reverse proxy. Experienced in load balancing, SSL configuration, and web server optimization.",
    },
    {
      name: "Kubernetes",
      icon: "⚙️",
      description:
        "Container orchestration platform for scalable deployments. Skilled in cluster management, service discovery, and microservices architecture.",
    },
  ]

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 text-xl">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                selectedSkill === skill.name
                  ? "border-cyan-400 bg-cyan-400/20"
                  : "border-white/20 hover:border-cyan-400/50"
              }`}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl mb-3"
                  animate={{
                    rotate: selectedSkill === skill.name ? [0, 10, -10, 0] : [0, 10, -10, 0],
                    scale: selectedSkill === skill.name ? [1, 1.2, 1] : [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  }}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>

                {selectedSkill === skill.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm leading-relaxed"
                  >
                    {skill.description}
                  </motion.p>
                )}

                {selectedSkill !== skill.name && <p className="text-cyan-400 text-xs">Click to learn more</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {selectedSkill && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Click on another skill to explore more, or click the same skill to close
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
