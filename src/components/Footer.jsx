export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 sm:px-6 md:px-12 text-center">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">Excellence Tutor</span>. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-gray-400 text-sm sm:text-base">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </footer>
  );
}
