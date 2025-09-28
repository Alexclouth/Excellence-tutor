import ContactBg from "../assets/R.webp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
          Book your tutor or ask any questions! We are here to help.
        </p>

      {/* Contact Cards */}
      <div className="mt-8 sm:mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Phone 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg transform transition hover:scale-105 overflow-x-auto">
          <p className="text-xl sm:text-2xl font-semibold flex items-center justify-center gap-2 whitespace-nowrap">
            📞 +251-944-331-290
          </p>
          <p className="mt-1 sm:mt-2 text-gray-200 text-sm sm:text-base">Phone 1</p>
        </div>

        {/* Phone 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg transform transition hover:scale-105 overflow-x-auto">
          <p className="text-xl sm:text-2xl font-semibold flex items-center justify-center gap-2 whitespace-nowrap">
            📞 +251-905-057-410
          </p>
          <p className="mt-1 sm:mt-2 text-gray-200 text-sm sm:text-base">Phone 2</p>
        </div>

        {/* Telegram */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg transform transition hover:scale-105 overflow-x-auto">
          <p className="text-xl sm:text-2xl font-semibold flex items-center justify-center gap-2 whitespace-nowrap">
            ✈️ @ExcellenceTutor
          </p>
          <p className="mt-1 sm:mt-2 text-gray-200 text-sm sm:text-base">Telegram Chat</p>
        </div>
      </div>


        {/* Footer Note */}
        <p className="mt-8 sm:mt-12 text-gray-400 text-sm sm:text-lg md:text-xl">
          We respond quickly to calls or Telegram messages. Start your learning journey today!
        </p>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -bottom-24 -left-24 w-40 h-40 sm:w-48 sm:h-48 bg-blue-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-56 h-56 sm:w-64 sm:h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    </section>
  );
}
