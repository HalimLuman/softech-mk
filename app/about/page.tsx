"use client"

import CTA from "@/components/home/cta"
import Testimonials from "@/components/home/testimonials"
import { motion } from "framer-motion"
import {
  Target,
  Lightbulb,
  Users,
  Award,
  Globe,
  Code,
  Zap,
  Shield,
  Heart,
  Search,
  Layers,
  Rocket,
  CheckCircle2,
} from "lucide-react"
import Image from "next/image"

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    text: "Founded with a mission to redefine transparency in software outsourcing.",
  },
  {
    year: "2020",
    title: "Scaling Up",
    text: "Expanded to full-scale product development with a growing team of specialists.",
  },
  {
    year: "2022",
    title: "Quality Focus",
    text: "Introduced specialized QA & testing services to ensure excellence.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    text: "Recognized as a leading nearshore partner serving global enterprises.",
  },
]

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "6", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
]

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation First",
    desc: "We explore cutting-edge technologies to deliver smarter, faster, and more cost-effective solutions that give you a competitive edge.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security by Design",
    desc: "Every line of code is written with security and reliability at the forefront, protecting your business and your users.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Client-Centered",
    desc: "Your goals define our roadmap. We align every decision with measurable business outcomes that matter to you.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Quality Obsessed",
    desc: "We don't just build software—we craft experiences. Our rigorous QA process ensures excellence in every detail.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Transparent Partnership",
    desc: "No hidden costs, no surprises. We believe in honest communication and building relationships based on trust.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agile & Adaptive",
    desc: "Markets change, requirements evolve. Our agile approach ensures we can pivot quickly while maintaining quality.",
  },
]

const team = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Senior Engineers",
    count: "25+",
    desc: "Expert developers with 5+ years experience",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "QA Specialists",
    count: "10+",
    desc: "Dedicated quality assurance professionals",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    count: "15+",
    desc: "Countries served worldwide",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certifications",
    count: "20+",
    desc: "Industry certifications and partnerships",
  },
]

const approachSteps = [
  {
    number: "01",
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Planning",
    desc: "We start by understanding your business goals, technical requirements, and success metrics.",
  },
  {
    number: "02",
    icon: <Layers className="w-6 h-6" />,
    title: "Architecture & Design",
    desc: "Our engineers design scalable, secure systems tailored to your specific needs.",
  },
  {
    number: "04",
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Quality Assurance",
    desc: "Rigorous testing and code reviews guarantee reliability and performance.",
  },
  {
    number: "05",
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Support",
    desc: "We deploy with confidence and provide ongoing maintenance and optimization.",
  },
]

const AboutPage = () => {
  return (
    <div className="bg-white text-black mb-12">
      {/* HERO - Black background with clear page indication */}
      <section className="relative w-full py-32 flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/bg2.png" alt="Background" fill priority className="object-cover" />
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-16 lg:px-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            ABOUT US
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A nearshore software engineering partner helping businesses scale with clarity, quality, and trust.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-16 lg:px-28 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 sm:px-16 lg:px-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are a collective of <strong>software engineers</strong>, <strong>QA specialists</strong>, and{" "}
                  <strong>digital consultants</strong> who understand both the human and technical side of building
                  systems.
                </p>
                <p>
                  Unlike traditional outsourcing, we integrate seamlessly into your workflow, providing nearshore
                  agility with enterprise-level quality. We don't just write code—we become an extension of your team.
                </p>
                <p>
                  Headquartered in Europe, our distributed model enables us to serve clients globally while maintaining
                  cultural proximity, transparency, and real-time collaboration across time zones.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Work With Us
                </button>
                <button className="px-6 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                  View Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {team.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-red-600 transition-all group"
                  >
                    <div className="mb-3 text-black group-hover:text-red-600 transition-colors">{item.icon}</div>
                    <div className="text-3xl font-bold mb-1">{item.count}</div>
                    <div className="text-sm font-semibold mb-1">{item.title}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-16 lg:px-28 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              A proven methodology that delivers results
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-800 mb-4">{step.number}</div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-16 lg:px-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 max-w-2xl mx-auto text-lg"
            >
              Principles that guide every decision we make
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-600 transition-all group"
              >
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 sm:px-16 lg:px-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 max-w-2xl mx-auto text-lg"
            >
              From a small engineering team to a trusted nearshore partner
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.text}</p>
                    </div>

                    {/* Center dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-gray-50" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-16 lg:px-28 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              To simplify complexity and engineer software that's{" "}
              <span className="text-red-600 font-semibold">robust today</span> and{" "}
              <span className="text-red-600 font-semibold">future-proof for tomorrow</span>.
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  )
}

export default AboutPage
