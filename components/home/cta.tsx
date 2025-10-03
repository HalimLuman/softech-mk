"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

const CTA = () => {
  return (
    <section className="py-24 px-6 sm:px-16 lg:px-28 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project and explore how we can help you achieve your goals with cutting-edge technology
              and expert engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Discovery Call</h3>
                  <p className="text-gray-400 text-sm">
                    We'll discuss your vision, requirements, and project goals in detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proposal & Planning</h3>
                  <p className="text-gray-400 text-sm">
                    Receive a detailed proposal with timeline, tech stack, and cost breakdown.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Development & Delivery</h3>
                  <p className="text-gray-400 text-sm">
                    We build, test, and deploy your solution with continuous communication.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
