import { useParams } from "react-router-dom";
import MovieDetailsBanner from "../components/movie/MovieDetailsBanner";
import CastCard from "../components/movie/CastCard";
import React from "react";
// Temporary demo payload
const sampleMovie = {
  id: 1,
  title: "Inception",
  poster: "https://via.placeholder.com/300x420",
  genre: "Sci-Fi",
  rating: "8.8",
  duration: "2h 28m",
  description:
    "A skilled thief leads a crew into dreams to steal and implant ideas, blurring the line between reality and imagination.",
  cast: [
    {
      name: "Leonardo DiCaprio",
      role: "Cobb",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Joseph Gordon-Levitt",
      role: "Arthur",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Tom Hardy",
      role: "Eames",
      image: "https://via.placeholder.com/150",
    },
  ],
};

const MovieDetails = () => {
  const { id } = useParams();

  // Later: Fetch movie info using `id` from JSON/API
  const movie = sampleMovie;

  return (
    <div className="bg-black min-h-screen text-white">

      <MovieDetailsBanner
        poster={movie.poster}
        title={movie.title}
        genre={movie.genre}
        duration={movie.duration}
        rating={movie.rating}
      />

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Description */}
        <h2 className="text-2xl font-bold mb-3">Synopsis</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          {movie.description}
        </p>

        {/* Cast Section */}
        <h2 className="text-2xl font-bold mb-4">Cast</h2>
        <div className="flex gap-6 flex-wrap">
          {movie.cast.map((actor, idx) => (
            <CastCard key={idx} {...actor} />
          ))}
        </div>

        {/* Booking Button */}
        <div className="mt-10">
          <a
            href={`/movie/${movie.id}/theatres`}
            className="bg-red-600 px-8 py-3 rounded-xl hover:bg-red-700 transition font-semibold"
          >
            Book Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
