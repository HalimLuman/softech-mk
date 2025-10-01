import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-screen">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          priority
          className="object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      <div className="relative z-40 flex flex-col justify-center w-full h-full items-start px-8 sm:px-16 text-left leading-tight mt-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-3 text-[2.5rem] sm:text-[3.5rem] md:text-[3.5rem] lg:text-7xl font-bold tracking-tight leading-[80px] text-white drop-shadow-md max-w-4xl"
        >
          Engineering reliable software through nearshore precision.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 text-gray-300 max-w-2xl text-md sm:text-lg leading-relaxed"
        >
          We deliver nearshoring, outsourcing, software development, and QA—empowering your business to grow with clarity and confidence.
        </motion.p>

        {/* Feature Rectangles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {[
            "Nearshoring",
            "Outsourcing",
            "Software Development",
            "QA & Testing",
          ].map((service) => (
            <div
              key={service}
              className="text-sm px-4 py-2 bg-black/70 text-white border border-white/20 rounded-xl hover:border-red-600 hover:bg-black/90 transition"
            >
              {service}
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 right-8 sm:right-12 flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Rotating Circle Text */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              viewBox="0 0 200 200"
              className="w-28 h-28 text-gray-300/80"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100
                  m -75, 0
                  a 75,75 0 1,1 150,0
                  a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="12"
                className="tracking-[0.5em] uppercase"
              >
                <textPath href="#circlePath">
                  Scroll Down • Scroll Down • Scroll Down •
                </textPath>
              </text>
            </motion.svg>

            {/* Pulsing Arrow */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="absolute w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
            >
              <ChevronDown className="text-white w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
