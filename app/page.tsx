"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import SocialLinks from "@/components/SocialLinks"
import AboutSection from "@/components/AboutSection"
import WhatIDoSection from "@/components/WhatIDoSection"
import CareerSection from "@/components/CareerSection"
import WorkSection from "@/components/WorkSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"
import ParticleBackground from "@/components/ParticleBackground"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>{loading && <LoadingScreen onComplete={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <>
          <ParticleBackground />
          <Navbar />
          <SocialLinks />
          <main>
            <HeroSection />
            <AboutSection />
            <WhatIDoSection />
            <CareerSection />
            <WorkSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  )
}
