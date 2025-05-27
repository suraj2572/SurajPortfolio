"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  const navItems = ["Home", "About Us", "Qualification", "Projects", "Skills", "Contact Us"]

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(" ", "-")
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Suraj
        </motion.h1>

        <div className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
