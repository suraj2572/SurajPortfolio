"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv/Suraj_Singh_Verma_CV.pdf" // You'll need to add your CV file to public/cv/ folder
    link.download = "Suraj_Singh_Verma_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="about-us"
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-4 border-white/20 shadow-2xl w-80 h-96 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-8xl mb-4"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  ⚙️
                </motion.div>
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  🔧
                </motion.div>
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  🐳
                </motion.div>
                <motion.div
                  className="text-4xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  ☁️
                </motion.div>
                <div className="mt-4">
                  <h3 className="text-cyan-400 font-bold text-lg">DevOps</h3>
                  <p className="text-gray-300 text-sm">Cloud Engineer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a passionate cloud engineer and web developer with expertise in modern technologies and cloud
            infrastructure. I specialize in building scalable applications and deploying them on cloud platforms like
            AWS, ensuring high availability and optimal performance.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My journey in technology started with web development and has evolved to encompass cloud engineering, DevOps
            practices, and containerization. I believe in creating robust, secure, and efficient solutions that drive
            business success and provide exceptional user experiences.
          </p>
          <motion.button
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
