"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CTA from "@/components/home/cta"
import Testimonials from "@/components/home/testimonials"

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "hello@softech.com",
    link: "mailto:hello@softech.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Office",
    value: "123 Tech Street, San Francisco, CA 94105",
    link: "https://maps.google.com",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    link: null,
  },
]

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
  { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
  { icon: <Github className="w-5 h-5" />, name: "GitHub", href: "#" },
]

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="bg-white text-black">
      {/* HERO - Black background with clear page indication */}
      <section className="relative w-full py-32 flex items-center justify-center bg-black text-white overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 rounded-full text-sm font-semibold"
          >
            CONTACT US
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Let's Build Something
            <br />
            <span className="text-red-600">Extraordinary Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help bring
            your vision to life.
          </motion.p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-24 px-6 sm:px-16 lg:px-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Send us a message</h2>
                <p className="text-gray-700 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      required
                      className="h-12 border-2 border-gray-200 focus:border-red-600 focus:ring-red-600/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                      className="h-12 border-2 border-gray-200 focus:border-red-600 focus:ring-red-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12 border-2 border-gray-200 focus:border-red-600 focus:ring-red-600/20"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    className="h-12 border-2 border-gray-200 focus:border-red-600 focus:ring-red-600/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    required
                    className="h-12 border-2 border-gray-200 focus:border-red-600 focus:ring-red-600/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="border-2 border-gray-200 focus:border-red-600 focus:ring-red-600/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold text-base group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
                <p className="text-gray-700 text-lg">
                  We're here to answer any questions you may have about our services. Reach out to us and we'll respond
                  as soon as we can.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-red-600 transition-all group"
                  >
                    <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-600 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-semibold text-black hover:text-red-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-black">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t-2 border-gray-200">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black text-white p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Quick Response Guarantee</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                      please call us directly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-24 px-6 sm:px-16 lg:px-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              What happens next?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 max-w-2xl mx-auto text-lg"
            >
              Here's what you can expect after reaching out to us
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Response",
                description:
                  "We'll acknowledge your message within 24 hours and schedule a discovery call at your convenience.",
              },
              {
                step: "02",
                title: "Discovery Call",
                description:
                  "We'll discuss your project requirements, goals, timeline, and answer any questions you may have.",
              },
              {
                step: "03",
                title: "Proposal & Next Steps",
                description:
                  "You'll receive a detailed proposal with our recommended approach, timeline, and transparent pricing.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-red-600 transition-all"
              >
                <div className="text-5xl font-bold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
