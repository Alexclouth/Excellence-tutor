import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import herobg  from "../assets/heroimg.webp";

export default function Hero() {
  // Typing effect messages
  const messages = [
    "KG – Grade 12 All Subjects 📚",
    "Experienced Addis Ababa University Tutors 🎓",
    "Personalized Learning for Every Student ✨",
  ];
  const [subIndex, setSubIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === messages[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, messages]);

  return (
    <section
      className="relative bg-center bg-cover text-white py-20 px-6 mt-20"
      style={{
        backgroundImage: `url('${herobg}')`,
      }}
    >
      {/* Blue overlay with animation */}
      <motion.div
        className="absolute inset-0 bg-gray-900/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Excellence Tutor
        </motion.h1>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mt-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          | ልህቀት አስጠኚዎች |
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Tutoring by Addis Ababa University Students
        </motion.p>

        {/* Typing effect */}
        <motion.p
          className="mt-6 text-2xl font-semibold text-yellow-300 h-10"
          key={index} // helps re-trigger animation on message change
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {messages[index].substring(0, subIndex)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            📞 Book a Tutor Now
          </a>
          <a
            href="tel:+251912345678"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
