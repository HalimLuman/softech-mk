"use client";

export default function Contact() {
  return (
    <section className="w-full bg-white text-gray-900 px-8 sm:px-16 py-24 flex flex-col items-center gap-12">
      <div className="text-center max-w-2xl">
        <span className="text-sm font-semibold tracking-[0.2em] text-gray-500 mb-2 block">
          04
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Contact Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Have a project or idea? Reach out to us and let's create something amazing together.
        </p>
      </div>

      <form className="w-full max-w-2xl flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          placeholder="Your Message"
          className="p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-4 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
