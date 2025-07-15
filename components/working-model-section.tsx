"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkingModelSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const screenshots = [
    { id: 1, title: "Original Webpage", description: "Cluttered news article with ads and distractions" },
    { id: 2, title: "Summarized Mode", description: "Clean summary with key points and essential images" },
    { id: 3, title: "Content-Only Mode", description: "Pure text reading experience" },
    { id: 4, title: "Theme Customization", description: "Calming blue theme for relaxed reading" },
    { id: 5, title: "Dark Mode", description: "Night-friendly dark interface" },
    { id: 6, title: "Mobile Experience", description: "Responsive design on mobile devices" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="working-model" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Usage Screenshots</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See CLAVI in action across different websites and reading modes
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl">
            {/* Main Screenshot */}
            <div className="relative aspect-video bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <img
                src={`/placeholder.svg?height=400&width=700&text=Screenshot ${currentSlide + 1}`}
                alt={screenshots[currentSlide].title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
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

            {/* Screenshot Info */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{screenshots[currentSlide].title}</h3>
              <p className="text-gray-600 mb-4">{screenshots[currentSlide].description}</p>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-blue-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of Thumbnails */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105 hover:shadow-lg"
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ y: -2 }}
            >
              <img
                src={`/placeholder.svg?height=120&width=180&text=${index + 1}`}
                alt={screenshot.title}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-medium truncate">{screenshot.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
