"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Play, ChevronLeft, ChevronRight, Github, Twitter, Linkedin, Mail, Sun, Moon } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState("calming")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
const videoRef = useRef<HTMLVideoElement>(null)

const handleVideoPlay = () => {
  if (videoRef.current) {
    if (isVideoPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }
}

  const menuItems = [
    { label: "About CLAVI", href: "about" },
    { label: "Features", href: "features" },
    { label: "Themes & Modes", href: "themes" },
    { label: "Demo", href: "demo" },
    { label: "Screenshots", href: "screenshots" },
    { label: "Our Team", href: "team" },
  ]

  const themes = [
    {
      id: "calming",
      name: "Calming Mode",
      color: "from-teal-100 to-teal-200",
      description: "Soft teal tones for a relaxed, soothing experience.",
    },
    {
      id: "gentle",
      name: "Gentle Mode",
      color: "from-amber-100 to-orange-100",
      description: "Warm, gentle gradient for comfortable reading.",
    },
    {
      id: "contrast",
      name: "High-Contrast Mode",
      color: "from-lime-200 to-lime-300",
      description: "High visibility combination for accessibility.",
    },
  ]

  const screenshots = [
    { id: 1, title: "Original Webpage", description: "Cluttered news article with ads and distractions" },
    { id: 2, title: "Summarized Mode", description: "Clean summary with key points and essential images" },
    { id: 3, title: "Content-Only Mode", description: "Pure text reading experience" },
    { id: 4, title: "Theme Customization", description: "Calming teal theme for relaxed reading" },
    { id: 5, title: "Dark Mode", description: "Night-friendly dark interface" },
  ]

  const teamMembers = [
    {
      name: "Vikas Pritam",
      college: "SRM RMP",
    },
    {
      name: "Naveen",
      college: "SRM RMP"
    },
    {
      name: "Sashank",
      college: "SRM RMP"
    },
    {
      name: "Akash",
      college: "SRM RMP"
    },
    {
      name:"Vinoth Anand Gani",
      college:"SRM RMP",
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  // Component refs for animations
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.3 })

  const feature1Ref = useRef(null)
  const feature1InView = useInView(feature1Ref, { once: true, threshold: 0.3 })

  const feature2Ref = useRef(null)
  const feature2InView = useInView(feature2Ref, { once: true, threshold: 0.3 })

  const themesRef = useRef(null)
  const themesInView = useInView(themesRef, { once: true, threshold: 0.3 })

  const darkModeRef = useRef(null)
  const darkModeInView = useInView(darkModeRef, { once: true, threshold: 0.3 })

  const demoRef = useRef(null)
  const demoInView = useInView(demoRef, { once: true, threshold: 0.3 })

  const screenshotsRef = useRef(null)
  const screenshotsInView = useInView(screenshotsRef, { once: true, threshold: 0.3 })

  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, threshold: 0.3 })

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                CLAVI
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    CLAVI
                  </span>{" "}
                  – Focus Made Simple
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Designed specifically for ADHD minds, CLAVI transforms overwhelming web content into clean,
                  distraction-free reading experiences. Our AI-powered Chrome extension helps you stay focused on what
                  truly matters by removing visual clutter and information overload.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                
                </motion.div>
              </motion.div>

              {/* Right Side - Product Illustration */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img
                      src="/images/clavi-hero-screenshot.png"
                      alt="CLAVI Chrome Extension Interface"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white" ref={aboutRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
                  <img
                    src="/images/clavi-about-demo.png"
                    alt="CLAVI in action"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  What is{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    CLAVI
                  </span>
                  ?
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  CLAVI is an AI Chrome extension specifically designed for people with ADHD who struggle with
                  information overload and digital distractions. Using Google Gemini AI, CLAVI transforms cluttered
                  webpages into clean, focused reading experiences that help maintain attention and reduce cognitive
                  overwhelm.
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">ADHD-Friendly Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">Distraction Removal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Focus Enhancement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">Cognitive Load Reduction</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 1: Summarized Mode */}
        <section id="features" className="py-20 bg-gray-50" ref={feature1Ref}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={feature1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={feature1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Summarized Page Mode
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={feature1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Perfect for ADHD minds that get overwhelmed by too much information. Extracts and displays only the
                  most important text and essential images from any webpage, providing a balanced reading experience
                  that saves time while retaining key visuals.
                </motion.p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={feature1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl">
                  <img
                    src="/images/Summarizer.png"
                    alt="Summarized Mode"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: Content-Only Mode */}
        <section className="py-20 bg-white" ref={feature2Ref}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative lg:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={feature2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl">
                  <img
                    src="/images/Content.png"
                    alt="Content-Only Mode"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                className="lg:order-1"
                initial={{ opacity: 0, x: 50 }}
                animate={feature2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={feature2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Content-Only Mode
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={feature2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Ideal for ADHD users who need maximum focus. Removes all images and keeps only the essential text,
                  creating a distraction-free environment perfect for deep reading sessions where visual elements might
                  break concentration.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Theme Customization */}
        <section id="themes" className="py-20 bg-gray-50" ref={themesRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={themesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={themesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Customize Your Reading Theme
                  </motion.h3>

                  <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={themesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Choose from ADHD-friendly themes designed for optimal reading comfort and sustained attention.
                  </motion.p>

                  <div className="space-y-4">
                    {themes.map((theme, index) => (
                      <motion.div
                        key={theme.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          selectedTheme === theme.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedTheme(theme.id)}
                        initial={{ opacity: 0, x: -30 }}
                        animate={themesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${theme.color}`}></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{theme.name}</h4>
                            <p className="text-sm text-gray-600">{theme.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={themesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div
                  className={`bg-gradient-to-br ${themes.find((t) => t.id === selectedTheme)?.color} rounded-2xl p-8 shadow-xl transition-all duration-500`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Light/Dark Mode */}
        <section className="py-20 bg-white" ref={darkModeRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative lg:order-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={darkModeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div
                  className={`${isDarkMode ? "bg-gray-900" : "bg-white"} rounded-2xl p-8 shadow-xl transition-all duration-500`}
                >
                  <div
                    className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"} rounded-lg p-6 shadow-lg transition-all duration-500`}
                  >
                    <div className="space-y-3">
                      <div
                        className={`h-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"} rounded w-3/4 transition-all duration-500`}
                      ></div>
                      <div
                        className={`h-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"} rounded w-full transition-all duration-500`}
                      ></div>
                      <div
                        className={`h-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"} rounded w-5/6 transition-all duration-500`}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6 lg:order-1"
                initial={{ opacity: 0, x: 50 }}
                animate={darkModeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={darkModeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Light & Dark Modes
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={darkModeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Switch between light and dark interfaces to reduce eye strain and accommodate different lighting
                  conditions - especially helpful for ADHD users sensitive to bright screens.
                </motion.p>

                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={darkModeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Sun className={`h-6 w-6 ${!isDarkMode ? "text-yellow-500" : "text-gray-400"}`} />
                  <div
                    className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                      isDarkMode ? "bg-emerald-600" : "bg-gray-300"
                    }`}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  >
                    <motion.div
                      className="w-6 h-6 bg-white rounded-full shadow-md"
                      animate={{ x: isDarkMode ? 32 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                  <Moon className={`h-6 w-6 ${isDarkMode ? "text-emerald-400" : "text-gray-400"}`} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        {/* Demo Section */}
<section id="demo" className="py-20 bg-gray-50" ref={demoRef}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Watch{" "}
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          CLAVI
        </span>{" "}
        in Action
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        See how CLAVI transforms overwhelming web content into ADHD-friendly reading experiences
      </p>
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        animate={demoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="/images/clavi-hero-screenshot.png"
            controls={isVideoPlaying}
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onEnded={() => setIsVideoPlaying(false)}
          >
            <source src="/images/clavi-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isVideoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-4"
                onClick={handleVideoPlay}
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
          )}
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm opacity-80">Demo Video</p>
            <p className="text-xs opacity-60">2:30 duration</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 50 }}
        animate={demoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Before & After</h3>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 mb-2">Before: Overwhelming webpage</p>
            <div className="bg-white rounded-lg p-4 shadow-lg border">
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <div className="h-3 bg-red-300 rounded w-1/4"></div>
                  <div className="h-3 bg-blue-300 rounded w-1/3"></div>
                  <div className="h-3 bg-green-300 rounded w-1/4"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded w-full"></div>
                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-yellow-300 rounded w-1/3"></div>
                  <div className="h-8 bg-purple-300 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-sm text-gray-600 mb-2">After: Clean CLAVI experience</p>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 shadow-lg border">
              <div className="space-y-3">
                <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                <div className="h-2 bg-gray-600 rounded w-full"></div>
                <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                <div className="h-2 bg-gray-600 rounded w-4/5"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
        {/* Screenshots Section */}
        <section id="screenshots" className="py-20 bg-white" ref={screenshotsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={screenshotsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Usage Screenshots</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See CLAVI in action across different websites and reading modes
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={screenshotsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl">
                <div className="relative aspect-video bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                  <img
                    src={`/images/screenshot-${currentSlide + 1}.png`}
                    alt={screenshots[currentSlide].title}
                    className="w-full h-full object-cover"
                  />

                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{screenshots[currentSlide].title}</h3>
                  <p className="text-gray-600 mb-4">{screenshots[currentSlide].description}</p>

                  <div className="flex justify-center space-x-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-emerald-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50" ref={teamRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet the{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  CodeKrafters
                </span>{" "}
                Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium text-sm">{member.college}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                CLAVI
              </h3>
              <p className="text-gray-400 text-sm">Focus made simple for ADHD minds</p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {menuItems.slice(0, 4).map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-end space-x-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm">© 2024 CLAVI. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
