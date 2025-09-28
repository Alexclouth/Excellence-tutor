import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "KG – Grade 8",
    desc: "Math, Science, English, Amharic, and more.",
    amharic: "ሒሳብ፣ ሳይንስ፣ እንግሊዝኛ፣ አማርኛ እና ሌሎች።",
    icon: BookOpenIcon,
    image: "./src/assets/elementarystud.jpg",
  },
  {
    title: "Grade 9 – 12",
    desc: "All preparatory subjects",
    amharic: "ለሁለተኛ ደረጃ ተማሪዎች ሁሉንም የትምህርት አይነቶች።",
    icon: AcademicCapIcon,
    image: "./src/assets/prepstud.jpg",
  },
  {
    title: "Exam Prep",
    desc: "Personalized coaching for school and national exams.",
    amharic: "ለ6፣ ለ8 እና ለ12ኛ ክፍል ተፈታኞች ልዩ ትኩረት እንሰጣለን።",
    icon: UserGroupIcon,
    image: "./src/assets/examprep.png",
  },
  {
    title: "Flexible Learning",
    desc: "One-to-one or group tutoring, at your home.",
    amharic: "አንድ ለአንድ ወይም በቡድን የማስጠናት አገልግሎት እንሰጣለን።",
    icon: ClockIcon,
    image: "./src/assets/1to1.webp",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        Excellence Tutor provides personalized, quality tutoring for all grades.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // 👈 animate on scroll
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image with gradient fade */}
              <div className="relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-3 text-center">
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-700">{s.desc}</p>
                <p className="mt-1 text-gray-500 italic">{s.amharic}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
