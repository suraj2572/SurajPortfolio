"use client"

import { motion } from "framer-motion"
import { Code, Cloud } from "lucide-react"

export default function WhatIDoSection() {
  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="text-9xl mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            🧑‍💻
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-8">
            What{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">I Do</span>
          </h2>
        </motion.div>

        {/* Web Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl border border-white/20"
          >
            <img
              src="/images/web-development.jpg"
              alt="Web Development Workspace"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-white font-semibold text-lg">Modern Web Development</h4>
                <p className="text-gray-300 text-sm">React, JavaScript, Responsive Design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Code className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Web Development</h3>
            </div>
            <p className="text-gray-300">
              Building modern, responsive web applications using React. I focus on creating dynamic user interfaces with
              clean, maintainable code and optimal performance. My expertise includes component-based architecture,
              state management, and creating seamless user experiences across all devices.
            </p>
          </motion.div>
        </motion.div>

        {/* Cloud Engineer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl border border-white/20"
          >
            <img
              src="/images/cloud-infrastructure.png"
              alt="Cloud Infrastructure DevOps"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-white font-semibold text-lg">Cloud Infrastructure</h4>
                <p className="text-gray-300 text-sm">AWS, Docker, Kubernetes, DevOps</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Cloud className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Cloud Engineer</h3>
            </div>
            <p className="text-gray-300">
              Designing and implementing scalable cloud infrastructure using AWS services. I specialize in
              containerization, CI/CD pipelines, and DevOps practices for reliable deployments. My expertise includes
              Docker, Kubernetes, automated deployments, and maintaining high-availability systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
