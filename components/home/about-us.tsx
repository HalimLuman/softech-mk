"use client";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white text-gray-900 px-8 sm:px-16 py-24 flex flex-col lg:flex-row gap-16 rounded-t-2xl">
      {/* Left Column: Image + Section Indicator */}
      <div className="relative w-full lg:w-1/3 flex flex-col items-center lg:items-start">
        <div className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-center px-4">
            <span className="text-md font-semibold tracking-[0.2em] text-gray-200 mb-2 transform -rotate-12">
              01
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-200">
              About Us
            </h2>
          </div>
        </div>
      </div>

      {/* Right Column: Stats + Description */}
      <div className="w-full lg:w-2/3 flex flex-col gap-12">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { number: "6+", label: "Employees" },
            { number: "20+", label: "Projects" },
            { number: "5+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition"
            >
              <h3 className="text-4xl font-extrabold text-gray-900">
                {stat.number}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center lg:text-left max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            We are a passionate team dedicated to building impactful digital
            experiences. Our mission is to merge creativity with technology,
            delivering solutions that empower businesses and inspire communities.
            <br />
            <br />
            With innovation at our core and a team that keeps growing, we push
            boundaries every single day to create meaningful change and leave a
            lasting mark.
            <br />
            <br />
            Collaboration, innovation, and excellence are more than values—they
            are the principles that guide every project we take on.
          </p>
        </div>
      </div>
    </section>
  );
}
