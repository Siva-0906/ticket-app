// src/components/booking/SeatLayout.jsx

import Seat from "./Seat";

/**
 * seatMatrix: number[][]
 *   0 => available
 *   1 => booked
 *
 * selectedSeats: string[] (e.g., ["0-1", "2-3"])
 * onSeatToggle: (seatId: string) => void
 *
 * seatId format: `${rowIndex}-${colIndex}`
 */

const SeatLayout = ({ seatMatrix = [], selectedSeats = [], onSeatToggle }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      {seatMatrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {row.map((cell, colIndex) => {
            const seatId = `${rowIndex}-${colIndex}`;
            const isBooked = cell === 1;
            const isSelected = selectedSeats.includes(seatId);

            return (
              <Seat
                key={seatId}
                label={colIndex + 1}
                isBooked={isBooked}
                isSelected={isSelected}
                onClick={() => onSeatToggle && onSeatToggle(seatId)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatLayout;
