import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    return (
         <nav className="fixed top-0 left-0 w-full z-50 px-8 py-3 flex justify-between items-center text-white bg-black shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/softech-logo-white-transparent.png"
            alt="Logo"
            width={100}
            height={40}
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 font-medium tracking-wide">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-red-500 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block px-6 py-2 rounded-xl bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition">
          Get Started
        </button>

        <Menu className="md:hidden w-7 h-7 cursor-pointer" />
      </nav>
    )
}

export default Navbar;