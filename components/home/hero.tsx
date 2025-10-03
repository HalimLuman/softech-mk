import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-40 flex flex-col justify-center w-full h-screen px-6 sm:px-10 md:px-16 lg:px-24 text-left leading-tight mt-16 sm:mt-0">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-3 font-bold tracking-tight text-white drop-shadow-md 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            leading-snug sm:leading-tight lg:leading-[1.2] max-w-5xl"
        >
          Engineering reliable software through nearshore precision.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-4 sm:mt-6 text-gray-300 max-w-xl sm:max-w-2xl 
            text-base sm:text-lg md:text-xl leading-relaxed"
        >
          We deliver nearshoring, outsourcing, software development, and QA—empowering your business to grow with clarity and confidence.
        </motion.p>

        {/* Feature Rectangles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
        >
          {["Nearshoring", "Outsourcing", "Software Development", "QA & Testing"].map((service) => (
            <div
              key={service}
              className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 
              bg-black/70 text-white border border-white/20 rounded-lg 
              hover:border-red-600 hover:bg-black/90 transition"
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
          className="absolute bottom-8 sm:bottom-12 right-1/2 sm:right-12 translate-x-1/2 sm:translate-x-0 hidden lg:flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Rotating Circle Text */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              viewBox="0 0 200 200"
              className="w-20 h-20 sm:w-28 sm:h-28 text-gray-300/80"
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
                fontSize="10"
                className="sm:font-medium tracking-[0.4em] uppercase"
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
              className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
            >
              <ChevronDown className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
