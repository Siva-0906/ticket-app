import { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import React from "react";
// Temporary static theatre seat layout (0 = available, 1 = booked)
const seatMatrix = [
  [0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

const SeatBooking = () => {
  const { id } = useParams(); // movie id
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const theatre = queryParams.get("theatre");
  const time = queryParams.get("time");

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const seatPrice = 150; // static price per seat for demo
  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className="bg-black min-h-screen text-white p-5">

      <h1 className="text-3xl font-bold mb-2">Select Seats</h1>
      <p className="text-gray-400 mb-6">
        Theatre ID: {theatre} • Showtime: {time}
      </p>

      {/* Screen Indicator */}
      <div className="text-center text-gray-300 mb-5">
        <div className="w-full h-1 bg-gray-700 rounded-lg mb-2"></div>
        <p className="text-sm">Screen</p>
      </div>

      {/* Seat Layout */}
      <div className="flex flex-col items-center gap-4 mb-10">
        {seatMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {row.map((seat, colIndex) => {
              const seatId = `${rowIndex}-${colIndex}`;
              const isBooked = seat === 1;
              const isSelected = selectedSeats.includes(seatId);

              return (
                <button
                  key={colIndex}
                  disabled={isBooked}
                  onClick={() => toggleSeat(rowIndex, colIndex)}
                  className={`
                    w-10 h-10 rounded-md text-xs 
                    flex items-center justify-center
                    transition
                    ${isBooked ? "bg-gray-600 cursor-not-allowed" : ""}
                    ${isSelected ? "bg-green-500" : ""}
                    ${!isBooked && !isSelected ? "bg-gray-800 hover:bg-gray-700" : ""}
                  `}
                >
                  {colIndex + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-900 p-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-3">Booking Summary</h2>

        <p className="text-gray-300 mb-2">
          Selected Seats:{" "}
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None"}
        </p>

        <p className="text-gray-300 mb-4">
          Total: <span className="font-semibold">₹{totalPrice}</span>
        </p>

        <Link
          to={`/movie/${id}/payment?seats=${selectedSeats.join(",")}&total=${totalPrice}`}
          className={`
            w-full block text-center py-3 rounded-lg font-semibold 
            ${selectedSeats.length === 0 
              ? "bg-gray-700 cursor-not-allowed" 
              : "bg-red-600 hover:bg-red-700"}
          `}
        >
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
};

export default SeatBooking;
