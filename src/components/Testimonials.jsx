import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Parent in Addis",
    text: "Excellence Tutor helped my son improve his math scores significantly!",
  },
  {
    name: "Student in Grade 10",
    text: "The tutors are patient and explain very clearly. Highly recommended!",
  },
  {
    name: "Parent in Bole",
    text: "Friendly and professional tutors. My daughter loves learning now!",
  },
  {
    name: "Student in Grade 8",
    text: "The personalized tutoring helped me understand difficult concepts easily.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-700">
        Testimonials
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Hear what our students and parents have to say about Excellence Tutor.
      </p>

      <div className="mt-12 max-w-4xl mx-auto relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-10 text-center bg-gradient-to-tr from-blue-200 to-blue-100 shadow-2xl flex flex-col items-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">
                {testimonials[current].name.charAt(0)}
              </div>
            </div>
            <p className="text-gray-700 text-lg italic">“{testimonials[current].text}”</p>
            <p className="mt-6 font-semibold text-gray-900">{testimonials[current].name}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
          }
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-lg hover:scale-110 transition"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-lg hover:scale-110 transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === current ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
