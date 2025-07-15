"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface FeatureSectionProps {
  id: string
  title: string
  description: string
  imageSide: "left" | "right"
  bgColor: string
  isThemeSection?: boolean
  isDarkModeSection?: boolean
}

export default function FeatureSection({
  id,
  title,
  description,
  imageSide,
  bgColor,
  isThemeSection = false,
  isDarkModeSection = false,
}: FeatureSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [selectedTheme, setSelectedTheme] = useState("calming")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const themes = [
    {
      id: "calming",
      name: "Calming Mode",
      color: "from-blue-100 to-blue-200",
      description: "Light blue tones for a relaxed, soothing experience.",
    },
    {
      id: "gentle",
      name: "Gentle Mode",
      color: "from-orange-100 to-pink-100",
      description: "A warm, skin-tone gradient for smooth and comfortable reading.",
    },
    {
      id: "contrast",
      name: "High-Contrast Mode",
      color: "from-yellow-200 to-yellow-300",
      description: "Yellow and black combination for high visibility and accessibility.",
    },
  ]

  const renderContent = () => {
    if (isThemeSection) {
      return (
        <div className="space-y-6">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {description}
          </motion.p>

          <div className="space-y-4">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedTheme === theme.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTheme(theme.id)}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
      )
    }

    if (isDarkModeSection) {
      return (
        <div className="space-y-6">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Sun className={`h-6 w-6 ${!isDarkMode ? "text-yellow-500" : "text-gray-400"}`} />
            <Button
              variant="outline"
              size="sm"
              className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-200 border-gray-300"
              }`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <motion.div
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  isDarkMode ? "bg-white" : "bg-white shadow-md"
                }`}
                animate={{ x: isDarkMode ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </Button>
            <Moon className={`h-6 w-6 ${isDarkMode ? "text-blue-400" : "text-gray-400"}`} />
          </motion.div>
        </div>
      )
    }

    return (
      <div>
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {description}
        </motion.p>
      </div>
    )
  }

  const renderImage = () => {
    if (isThemeSection) {
      const currentTheme = themes.find((t) => t.id === selectedTheme)
      return (
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className={`bg-gradient-to-br ${currentTheme?.color} rounded-2xl p-8 shadow-xl`}>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    }

    if (isDarkModeSection) {
      return (
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
      )
    }

    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
          <img src="/placeholder.svg?height=400&width=500" alt={title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </motion.div>
    )
  }

  return (
    <section id={id} className={`py-20 ${bgColor}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imageSide === "left" ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            className={imageSide === "left" ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, x: imageSide === "left" ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageSide === "left" ? 50 : -50 }}
            transition={{ duration: 0.8 }}
          >
            {renderContent()}
          </motion.div>

          {/* Image */}
          <div className={imageSide === "left" ? "lg:col-start-1" : ""}>{renderImage()}</div>
        </div>
      </div>
    </section>
  )
}
