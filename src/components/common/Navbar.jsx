import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🎬 MovieBooking
        </Link>

        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link to="/" className="hover:text-red-400">Home</Link></li>
          <li><Link to="/movies" className="hover:text-red-400">Movies</Link></li>
          <li><Link to="/theatres" className="hover:text-red-400">Theatres</Link></li>
          <li><Link to="/login" className="hover:text-red-400">Login</Link></li>
        </ul>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-red-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/movies" className="block hover:text-red-400" onClick={() => setIsOpen(false)}>Movies</Link>
          <Link to="/theatres" className="block hover:text-red-400" onClick={() => setIsOpen(false)}>Theatres</Link>
          <Link to="/contact" className="block hover:text-red-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="block hover:text-red-400" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}
