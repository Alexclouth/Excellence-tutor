import { motion } from "framer-motion";
import { BookOpenIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import TutoringImage from "../assets/aboutimg.jpg"; // import your image

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center p-6 sm:p-10 font-extrabold text-blue-700">
        About <span className="text-gray-900">Excellence Tutor</span>
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={TutoringImage}
            alt="Tutoring illustration"
            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* English */}
          <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed">
            We are a team of{" "}
            <span className="font-semibold text-blue-600">
              Addis Ababa University students
            </span>{" "}
            helping learners excel. From <strong>KG to Grade 12</strong>, we
            provide personalized <span className="font-semibold">one-to-one</span>{" "}
            and <span className="font-semibold">group tutoring</span> to ensure
            success.
          </p>

          {/* Amharic */}
          <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed font-['Noto_Serif_Ethiopic']">
            በቂ ልምድና እውቀት ያላቸው{" "}
            <strong>የአዲስ አበባ ዩኒቨርሲቲ ሰቃይ ተማሪዎች</strong> ቤት ለቤት የማስጠናት
            አገልግሎት በመስጠት ተማሪዎች በአጭር ጊዜ ለውጥ እንዲያመጡ እናስችላለን።
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <BookOpenIcon className="w-12 h-12 text-blue-500" />
              <h3 className="mt-2 font-semibold text-gray-800 text-base sm:text-lg">All Subjects</h3>
              <p className="text-sm sm:text-base text-gray-600">KG – Grade 12</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <UserGroupIcon className="w-12 h-12 text-yellow-400" />
              <h3 className="mt-2 font-semibold text-gray-800 text-base sm:text-lg">Flexible</h3>
              <p className="text-sm sm:text-base text-gray-600">1-to-1 & Group</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <AcademicCapIcon className="w-12 h-12 text-blue-600" />
              <h3 className="mt-2 font-semibold text-gray-800 text-base sm:text-lg">Expert Tutors</h3>
              <p className="text-sm sm:text-base text-gray-600">AAU Top Students</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
