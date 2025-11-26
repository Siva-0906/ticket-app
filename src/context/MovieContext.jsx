// src/context/MovieContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

import moviesData from "../data/movies.json";
import theatresData from "../data/theatres.json";
import showtimesData from "../data/showtimes.json";
import reviewsData from "../data/reviews.json";
import seatsData from "../data/seats.json";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [seatLayouts, setSeatLayouts] = useState([]);

  // Simulate API fetching
  useEffect(() => {
    setMovies(moviesData);
    setTheatres(theatresData);
    setShowtimes(showtimesData);
    setReviews(reviewsData);
    setSeatLayouts(seatsData);
  }, []);

  const getMovieById = (id) =>
    movies.find((m) => m.id === Number(id));

  const getReviewsForMovie = (id) =>
    reviews.find((r) => r.movieId === Number(id))?.reviews || [];

  const getTheatresShowingMovie = (movieId) => {
    return showtimesData
      .filter((entry) => entry.movieId === Number(movieId))
      .map((entry) => {
        const theatre = theatresData.find(
          (t) => t.id === entry.theatreId
        );
        return {
          ...theatre,
          timings: entry.timings,
        };
      });
  };

  const value = {
    movies,
    theatres,
    showtimes,
    reviews,
    seatLayouts,

    // Helpers
    getMovieById,
    getReviewsForMovie,
    getTheatresShowingMovie,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieData = () => useContext(MovieContext);
