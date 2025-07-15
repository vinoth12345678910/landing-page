"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export default function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demo" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CLAVI</span> in
            Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how CLAVI transforms cluttered webpages into clean, focused reading experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-4"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                </Button>
              </div>

              {/* Video placeholder overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">Demo Video</p>
                <p className="text-xs opacity-60">2:30 duration</p>
              </div>
            </div>
          </motion.div>

          {/* Before/After Comparison */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before & After</h3>

              {/* Before */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="text-sm text-gray-600 mb-2">Before: Cluttered webpage</p>
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
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-sm text-gray-600 mb-2">After: Clean CLAVI experience</p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 shadow-lg border">
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

        {/* Screenshots Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Real Usage Examples</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`CLAVI Screenshot ${index}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">Example {index}: Clean reading mode</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
