// src/utils/seatFunctions.js

/**
 * Toggle seat selection
 * seatId = "row-col"
 */
export const toggleSeat = (selectedSeats, seatId) => {
  if (selectedSeats.includes(seatId)) {
    return selectedSeats.filter((id) => id !== seatId);
  }
  return [...selectedSeats, seatId];
};

/**
 * Convert seatId ("2-3") to a readable seat label: "Row 3, Seat 4"
 */
export const seatIdToLabel = (seatId) => {
  const [row, col] = seatId.split("-").map(Number);
  return `Row ${row + 1}, Seat ${col + 1}`;
};

/**
 * Convert selectedSeats array into readable labels
 */
export const formatSeatList = (selectedSeats) => {
  return selectedSeats.map((s) => seatIdToLabel(s));
};

/**
 * Count booked seats in a seat matrix (0 = available, 1 = booked)
 */
export const countBookedSeats = (seatMatrix) => {
  let count = 0;
  seatMatrix.forEach((row) =>
    row.forEach((seat) => {
      if (seat === 1) count++;
    })
  );
  return count;
};
