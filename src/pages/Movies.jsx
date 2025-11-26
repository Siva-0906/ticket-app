import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies.json";

const Movies = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6">
      <h1 className="text-3xl font-semibold mb-6">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((m) => (
          <div key={m.id} className="bg-gray-800 p-4 rounded">
            <img src={m.poster} alt={m.title} className="w-full h-60 object-cover rounded mb-3" />
            <h2 className="text-xl font-semibold">{m.title}</h2>
            <p className="text-sm text-gray-300">{m.genre} • {m.duration}</p>
            <div className="mt-3">
              <Link to={`/movie/${m.id}`} className="inline-block bg-red-500 px-3 py-1 rounded">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
