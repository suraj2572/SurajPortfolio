"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function CareerSection() {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      college: "Chandigarh University",
      year: "2023-2025",
    },
    {
      degree: "BSc (Bachelor of Science)",
      college: "Govt College Solan",
      year: "2019-2022",
    },
    {
      degree: "12th (Non-Medical)",
      college: "Govt Sen Sec School Oachghat",
      year: "2019",
    },
    {
      degree: "10th",
      college: "Bal Gurukul Public School Kangoo",
      year: "2017",
    },
  ]

  return (
    <section
      id="qualification"
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          <p className="text-gray-300 text-xl">Educational Background & Achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="text-white" size={24} />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>

                <div className="flex items-center justify-center text-gray-300 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{edu.college}</span>
                </div>

                <div className="flex items-center justify-center text-gray-300 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
