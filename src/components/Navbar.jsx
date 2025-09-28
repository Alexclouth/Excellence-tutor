import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#whychoose" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={Logo} alt="Excellence Tutor Logo" className="w-20 h-14" />
          <span className="text-3xl font-bold text-blue-900">
            Excellence Tutor
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-black hover:text-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}

          <motion.a
            href="tel:+251944331290"
            className="ml-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            📞 Call Us Now: 0944331290
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow px-6 pb-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="block py-2 text-black hover:text-blue-600"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="tel:+251944331290"
              className="block mt-3 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              📞 Call Us Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
