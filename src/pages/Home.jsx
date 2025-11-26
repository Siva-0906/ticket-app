import MovieCarousel from "../components/movie/MovieCarousel";

import React from "react";

const sampleMovies = [
  {
    id: 1,
    title: "Inception",
    poster: "https://via.placeholder.com/300x420",
    genre: "Sci-Fi",
    rating: "8.8",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://via.placeholder.com/300x420",
    genre: "Sci-Fi",
    rating: "8.6",
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster: "https://via.placeholder.com/300x420",
    genre: "Action",
    rating: "9.0",
  },
];

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      

      <div className="pt-6 px-4">
        <MovieCarousel title="Now Showing" movies={sampleMovies} />
        <MovieCarousel title="Coming Soon" movies={sampleMovies} />
        <MovieCarousel title="Top Rated" movies={sampleMovies} />
      </div>

    
    </div>
  );
};

export default Home;
