"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-8 sm:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Left: Logo + About (span 2 cols on desktop) */}
        <div className="md:col-span-2">
          <Image
            src="/softech-logo-white-transparent.png"
            alt="Logo"
            width={140}
            height={60}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Softech MK builds innovative digital solutions to help businesses
            grow and scale with confidence.
          </p>
          <p className="text-gray-500 text-xs mt-6">
            &copy; {new Date().getFullYear()} Softech MK. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Navigation</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Services
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Get in Touch</h4>
          <p className="text-gray-400 text-sm">📍 Skopje, North Macedonia</p>
          <p className="text-gray-400 text-sm">📞 +389 70 123 456</p>
          <p className="text-gray-400 text-sm">✉️ contact@softech.mk</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <a href="#" className="text-gray-400 hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
