"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative w-full bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-9/10 mx-auto rounded-2xl">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          priority
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-11/12 md:w-9/12 mx-auto text-center text-white py-24 px-6 sm:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Partner with us to build innovative solutions that drive your
            business forward. Let’s create something impactful together.
          </p>
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 transition font-semibold rounded-lg shadow-md">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
