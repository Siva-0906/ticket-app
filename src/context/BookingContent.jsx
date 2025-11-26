// src/context/BookingContext.jsx

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [theatre, setTheatre] = useState(null);
  const [showtime, setShowtime] = useState(null);
  const [seats, setSeats] = useState([]);
  const [priceDetails, setPriceDetails] = useState(null);

  const resetBooking = () => {
    setMovie(null);
    setTheatre(null);
    setShowtime(null);
    setSeats([]);
    setPriceDetails(null);
  };

  const value = {
    movie,
    theatre,
    showtime,
    seats,
    priceDetails,

    setMovie,
    setTheatre,
    setShowtime,
    setSeats,
    setPriceDetails,

    resetBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
