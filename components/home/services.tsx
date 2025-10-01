"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Software Development Outsourcing",
      description:
        "Nearshore and offshore development solutions to accelerate your projects with top talent.",
    },
    {
      title: "Custom Web & Mobile Apps",
      description:
        "Build scalable and high-performance applications tailored to your business needs.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive interfaces and seamless experiences for web and mobile platforms.",
    },
    {
      title: "QA & Testing",
      description:
        "Ensure your products meet the highest quality standards through manual and automated testing.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage cloud technologies for flexibility, security, and performance optimization.",
    },
    {
      title: "IT Consulting",
      description:
        "Get expert advice to optimize workflows, reduce costs, and plan digital transformation strategies.",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white px-8 sm:px-16 py-24 flex flex-col gap-16">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-screen">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </div>

      {/* Section Header */}
      <div className="text-center z-40">
        <span className="text-sm font-semibold tracking-[0.2em] text-gray-400 mb-2 block">
          02
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          We provide a range of services to help businesses scale and innovate
          in the digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-40">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col gap-4 transition hover:shadow-[0_0_30px_rgba(251,44,54,0.2)] hover:border-red-500/40"
          >
            {/* Large Faint Number */}
            <span className="absolute top-4 right-6 text-6xl font-extrabold text-white/10 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-2xl font-bold relative z-10 group-hover:text-red-500 transition">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
