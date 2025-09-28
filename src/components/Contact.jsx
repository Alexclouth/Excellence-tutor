import ContactBg from "../assets/R.webp"; // Add bg image in /src/assets

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-extrabold">Get in Touch</h2>
        <p className="text-xl md:text-2xl text-gray-200">
          Book your tutor or ask any questions! We are here to help.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Phone 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-lg transform transition hover:scale-105">
            <p className="text-2xl font-semibold flex items-center justify-center gap-2">
              📞 +251-944-331-290
            </p>
            <p className="mt-2 text-gray-200">Phone 1</p>
          </div>

          {/* Phone 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-lg transform transition hover:scale-105">
            <p className="text-2xl font-semibold flex items-center justify-center gap-2">
              📞 +251-905-057-410
            </p>
            <p className="mt-2 text-gray-200">Phone 2</p>
          </div>

          {/* Telegram */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl py-6 shadow-lg transform transition hover:scale-105">
            <p className="text-2xl font-semibold flex items-center justify-center gap-2">
              ✈️ @ExcellenceTutor
            </p>
            <p className="mt-2 text-gray-200">Telegram Chat</p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-gray-400 text-lg md:text-xl">
          We respond quickly to calls or Telegram messages. Start your learning journey today!
        </p>
      </div>

      {/* Decorative shapes (now hidden overflow) */}
      <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    </section>
  );
}
