// src/hooks/useMovieFilter.js

import { useState, useMemo } from "react";

/**
 * movies = [
 *   { id, title, genre, rating, ... }
 * ]
 */

const useMovieFilter = (movies = []) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [minRating, setMinRating] = useState(0);

  const filteredMovies = useMemo(() => {
    return movies
      .filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((movie) =>
        genre === "All" ? true : movie.genre === genre
      )
      .filter((movie) => movie.rating >= minRating);
  }, [movies, search, genre, minRating]);

  return {
    search,
    setSearch,
    genre,
    setGenre,
    minRating,
    setMinRating,
    filteredMovies,
  };
};

export default useMovieFilter;
