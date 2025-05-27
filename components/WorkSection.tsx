"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function WorkSection() {
  const projects = [
    {
      id: "01",
      name: "Mercedes-Benz Static Website",
      description:
        "Developed a fully responsive static website for a luxury car brand using React. The website includes multiple pages such as Home, About, Contact Us, Register, and Login. Built using React functional components with React Router for seamless navigation. Dockerized the application and deployed live on AWS EC2 for production hosting.",
      github: "https://github.com/username/mercedes-website",
      image: "/images/mercedes-website.png",
      technologies: "React, JavaScript, HTML, CSS, React Router, Docker, AWS EC2",
      features: [
        "React functional components",
        "React Router navigation",
        "Responsive mobile-friendly layout",
        "Reusable components for consistent design",
        "Dockerized application for containerized deployment",
        "Live deployment on AWS EC2 instance",
      ],
    },
    {
      id: "02",
      name: "Laravel Starter Project (Production-Ready)",
      description:
        "Developed and deployed a Laravel-based application with a production-ready environment, featuring SSL, database, queues, and Redis integration. Dockerized Laravel app with separate containers for PHP 8.2, Nginx, and MariaDB. Configured HTTPS and integrated Redis for background job processing.",
      github: "https://github.com/username/laravel-starter",
      image: "/images/laravel-starter.png",
      technologies: "Laravel, PHP 8.2, MariaDB, Redis, Docker Compose, Nginx",
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-300 text-xl">Projects that showcase my skills and creativity</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 rounded-full font-bold">
                  {project.id}
                </div>
                {/* Live deployment badge for first project */}
                {project.id === "01" && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    🚀 Live
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">{project.description}</p>

                {/* Key Features for first project */}
                {project.features && (
                  <div className="mb-3">
                    <h4 className="text-cyan-400 text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-3 mb-3">
                  {project.technologies &&
                    project.technologies.split(", ").map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <motion.button
                  className="mt-4 flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
