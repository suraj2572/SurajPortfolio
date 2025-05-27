"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Github, Twitter } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/suraj_verma0007/", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/suraj-verma-448635298/", color: "hover:text-blue-400" },
    { icon: Github, href: "https://github.com/suraj2572", color: "hover:text-gray-400" },
    { icon: Twitter, href: "https://twitter.com/suraj_verma", color: "hover:text-sky-400" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          className={`text-white/70 ${social.color} transition-all duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg hover:shadow-current/25`}
          whileHover={{ scale: 1.2, x: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  )
}
