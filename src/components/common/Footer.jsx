import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">🎬 MovieBooking</h2>
          <p className="text-sm leading-6">
            Your one-stop platform to discover movies, book tickets, 
            and enjoy seamless entertainment experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/movies" className="hover:text-red-400">Movies</Link></li>
            <li><Link to="/theatres" className="hover:text-red-400">Theatres</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-red-400">📘</a>
            <a href="#" className="hover:text-red-400">🐦</a>
            <a href="#" className="hover:text-red-400">📸</a>
            <a href="#" className="hover:text-red-400">▶️</a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MovieBooking. All Rights Reserved.
      </div>
    </footer>
  );
}
