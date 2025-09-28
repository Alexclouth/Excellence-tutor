import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, ClockIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const reasons = [
  { title: "Expert Tutors", desc: "Learn from top Addis Ababa University students.", icon: AcademicCapIcon, color: "bg-gradient-to-tr from-blue-500 to-indigo-600" },
  { title: "All Subjects Covered", desc: "KG – Grade 12 with all major subjects included.", icon: BookOpenIcon, color: "bg-gradient-to-tr from-green-400 to-teal-500" },
  { title: "Personalized Learning", desc: "Tailored one-to-one sessions for maximum progress.", icon: UserGroupIcon, color: "bg-gradient-to-tr from-purple-500 to-pink-500" },
  { title: "Flexible & Affordable", desc: "Tutoring that fits your schedule and budget.", icon: ClockIcon, color: "bg-gradient-to-tr from-yellow-400 to-orange-500" },
];

export default function WhyChoose() {
  return (
    <section id="whychoose" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800">
        Why Choose Excellence Tutor?
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
        We provide high-quality, personalized tutoring to help students excel academically.
      </p>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={i}
              className={`relative rounded-3xl p-6 sm:p-8 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl`}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.5,
              }}
            >
              {/* Layered gradient background */}
              <div className={`absolute inset-0 ${r.color} rounded-3xl opacity-80 -z-10 transform scale-105`} />

              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-gray-800" />
                </div>
                <span className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold text-white bg-gray-800 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">{r.title}</h3>
              <p className="text-sm sm:text-base md:text-base text-gray-700">{r.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
