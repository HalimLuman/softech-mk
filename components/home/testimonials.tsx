"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CTO, TechCorp",
      testimonial:
        "Partnering with this team was a game-changer. Their expertise in software development outsourcing helped us scale our projects efficiently without compromising quality.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emma Johnson",
      role: "Product Manager, InnovateX",
      testimonial:
        "The team delivered exceptional results. From UI/UX to backend development, their professionalism and skill exceeded our expectations.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Lee",
      role: "CEO, NextGen Solutions",
      testimonial:
        "Working with them was seamless. Their approach to QA and testing ensured our products were flawless at launch.",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 px-8 sm:px-16 py-24 flex flex-col gap-16 rounded-t-2xl relative">
      {/* Section Header */}
      <div className="text-center">
        <span className="text-sm font-semibold tracking-[0.2em] text-gray-500 mb-2 block">
          03
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Testimonials
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Hear from our clients who have experienced transformative results
          working with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-xl p-8 flex flex-col gap-4 shadow-md transition hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-300/50"
          >
            {/* Decorative Quote Icon */}
            <span className="absolute top-4 left-6 text-6xl font-serif text-gray-300/20 select-none">
              “
            </span>

            {/* User Info */}
            <div className="flex items-center gap-4 relative z-10">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-transparent bg-gradient-to-tr from-blue-400 to-purple-400 p-[2px]"
              />
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Testimonial */}
            <p className="text-gray-700 leading-relaxed mt-4 relative z-10">
              "{t.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
