"use client"

import { motion } from "framer-motion"
import { Code2, Cloud, Smartphone, Database, Cpu, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CTA from "@/components/home/cta"

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed for scalability and performance. We build web, mobile, and desktop applications that solve real business problems.",
    icon: Code2,
    highlights: ["Full-stack development", "API design", "Legacy modernization"],
  },
  {
    number: "02",
    title: "Cloud Solutions & DevOps",
    description:
      "Secure, scalable infrastructure with automated CI/CD pipelines. From cloud migration to continuous deployment, we ensure your systems are always available.",
    icon: Cloud,
    highlights: ["99.9% uptime", "Auto-scaling", "Zero-downtime deploys"],
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Intuitive, high-performance mobile applications for iOS and Android. Native and cross-platform solutions tailored to your business needs.",
    icon: Smartphone,
    highlights: ["Native & cross-platform", "App Store optimization", "Push notifications"],
  },
  {
    number: "04",
    title: "Enterprise Systems & Integrations",
    description:
      "Seamless integration of multiple systems, APIs, and platforms. Enable smooth business operations and data flow across your organization.",
    icon: Database,
    highlights: ["Third-party APIs", "Microservices", "Real-time sync"],
  },
  {
    number: "05",
    title: "Data & AI Solutions",
    description:
      "Intelligent insights through data pipelines, analytics, and AI-powered solutions. Transform your data into actionable business intelligence.",
    icon: Cpu,
    highlights: ["Machine learning", "Predictive analytics", "Data visualization"],
  },
  {
    number: "06",
    title: "QA & Testing Services",
    description:
      "Rigorous testing across platforms and scenarios. Our QA specialists ensure quality at every step of the development lifecycle.",
    icon: ShieldCheck,
    highlights: ["Automated testing", "Performance testing", "Security audits"],
  },
]

const techStack = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vue.js",
    "Angular",
    "Redux",
    "Framer Motion",
    "Webpack",
  ],
  Backend: ["Node.js", "Python", "Java", "Go", "GraphQL", "REST APIs", "Express.js", "Django", "Spring Boot"],
  "Cloud & DevOps": [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "Vercel",
  ],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL", "DynamoDB", "Supabase", "Firebase", "Elasticsearch"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android", "Expo", "Firebase", "App Store"],
}

const principles = [
  {
    title: "Expert Engineers",
    description:
      "Highly skilled specialists across multiple domains with proven track records in delivering complex solutions.",
  },
  {
    title: "Proven Processes",
    description:
      "Agile, transparent methodologies ensuring high-quality delivery and continuous improvement throughout the project lifecycle.",
  },
  {
    title: "Client Success Focus",
    description: "Aligned with your business outcomes to ensure measurable impact and long-term value creation.",
  },
]

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "12+", label: "Years experience" },
  { value: "98%", label: "Client satisfaction" },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof techStack>("Frontend")

  return (
    <div className="min-h-screen bg-background mb-12">
      {/* Hero Section */}
      <section className="px-6 py-32 md:py-40 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="mb-8 text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Engineering excellence meets business innovation
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl text-pretty">
              We help businesses scale and innovate with a full suite of software engineering services. From concept to
              deployment, our solutions are designed with clarity, quality, and trust in mind.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="border-l-2 border-foreground/20 pl-4">
                <div className="text-3xl font-light text-foreground md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border px-6 py-24 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">Our services</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Comprehensive solutions structured to address complex challenges and enable measurable results.
            </p>
          </motion.div>

          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-t border-border py-12 transition-colors hover:bg-accent/30"
              >
                <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-2">
                    <span className="text-5xl font-light text-muted-foreground/40">{service.number}</span>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="mb-4 text-2xl font-normal tracking-tight text-foreground md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center md:col-span-3 md:justify-end">
                    <service.icon className="h-12 w-12 text-foreground/20 transition-colors group-hover:text-foreground/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-t border-border bg-secondary/30 px-6 py-24 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">Technology stack</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We use modern, proven technologies to build scalable and reliable software solutions.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* Left: Category Selector */}
            <div className="flex flex-col gap-2">
              {Object.keys(techStack).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category as keyof typeof techStack)}
                  className={`group relative overflow-hidden rounded-lg border p-6 text-left transition-all ${
                    selectedCategory === category
                      ? "border-foreground/40 bg-foreground text-background shadow-lg"
                      : "border-border/50 bg-background/50 hover:border-border hover:bg-background"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10">
                    <div
                      className={`text-lg font-normal tracking-tight transition-colors ${
                        selectedCategory === category ? "text-background" : "text-foreground"
                      }`}
                    >
                      {category}
                    </div>
                    <div
                      className={`mt-1 text-sm transition-colors ${
                        selectedCategory === category ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {techStack[category as keyof typeof techStack].length} technologies
                    </div>
                  </div>
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-foreground"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right: 3x3 Technology Grid */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
            >
              {techStack[selectedCategory].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg border border-border/50 bg-background/80 p-6 transition-all hover:border-border hover:bg-background hover:shadow-md"
                >
                  <div className="relative z-10">
                    <div className="mb-2 text-sm font-light text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-base font-normal text-foreground">{tech}</div>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 -z-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="border-t border-border px-6 py-24 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <div>
              <div className="mb-4 inline-block rounded-full border border-border bg-secondary/50 px-4 py-1 text-sm text-muted-foreground">
                Featured case study
              </div>
              <h2 className="mb-6 text-4xl font-light tracking-tight text-foreground md:text-5xl text-balance">
                Transforming healthcare with intelligent automation
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We partnered with a leading healthcare provider to build a comprehensive patient management system that
                reduced administrative overhead by 60% and improved patient satisfaction scores by 45%.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-foreground/60" />
                  <div>
                    <div className="font-normal text-foreground">Real-time patient tracking</div>
                    <div className="text-sm text-muted-foreground">Automated scheduling and notifications</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-foreground/60" />
                  <div>
                    <div className="font-normal text-foreground">HIPAA-compliant infrastructure</div>
                    <div className="text-sm text-muted-foreground">Enterprise-grade security and encryption</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-foreground/60" />
                  <div>
                    <div className="font-normal text-foreground">AI-powered insights</div>
                    <div className="text-sm text-muted-foreground">Predictive analytics for resource allocation</div>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="lg" className="mt-8 group bg-transparent">
                View case study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-secondary/50">
                <img
                  src="/modern-healthcare-dashboard-interface-with-charts-.jpg"
                  alt="Healthcare dashboard interface"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg border border-border bg-accent/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-border px-6 py-24 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">Why choose us</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Our approach combines technical expertise, transparency, and client-focused delivery. We become your
              trusted partner, not just a service provider.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-foreground/10 pl-6"
              >
                <h3 className="mb-4 text-xl font-normal tracking-tight text-foreground">{principle.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="border-t border-border bg-secondary/30 px-6 py-24 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-4xl font-light tracking-tight text-foreground md:text-5xl">Our approach</h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We follow a structured, transparent process that ensures quality delivery and continuous collaboration
                throughout your project.
              </p>
              <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                {
                  title: "Discovery & Planning",
                  description:
                    "Understanding your business goals and technical requirements to create a comprehensive project roadmap.",
                },
                {
                  title: "Design & Architecture",
                  description:
                    "Crafting scalable system architecture and user-centered designs that align with your vision.",
                },
                {
                  title: "Development & Testing",
                  description: "Agile development with continuous testing to ensure quality and rapid iteration.",
                },
                {
                  title: "Deployment & Support",
                  description: "Seamless deployment with ongoing maintenance and support to ensure long-term success.",
                },
              ].map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-foreground/40" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-normal text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTA />
    </div>
  )
}
