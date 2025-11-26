// src/components/booking/SummaryCard.jsx

/**
 * selectedSeats: string[]
 * seatPrice: number (price per seat)
 * convenienceFee: number (default 0)
 * onProceed: () => void
 * proceedDisabled: boolean
 * proceedLabel: string
 */

const SummaryCard = ({
  selectedSeats = [],
  seatPrice = 0,
  convenienceFee = 0,
  onProceed,
  proceedDisabled,
  proceedLabel = "Proceed",
}) => {
  const ticketsTotal = selectedSeats.length * seatPrice;
  const totalPayable = ticketsTotal + convenienceFee;

  return (
    <div className="bg-gray-900 p-4 rounded-xl max-w-md w-full mx-auto">
      <h2 className="text-xl font-bold mb-3">Booking Summary</h2>

      <p className="text-gray-300 mb-2">
        Selected Seats:{" "}
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "None"}
      </p>

      <p className="text-gray-300 mb-1">
        Ticket Price ({selectedSeats.length} x ₹{seatPrice}):{" "}
        <span className="font-semibold">₹{ticketsTotal}</span>
      </p>

      <p className="text-gray-300 mb-1">
        Convenience Fee:{" "}
        <span className="font-semibold">₹{convenienceFee}</span>
      </p>

      <p className="text-gray-100 font-bold text-lg mt-3">
        Total Payable: ₹{totalPayable}
      </p>

      <button
        onClick={onProceed}
        disabled={proceedDisabled}
        className={`
          w-full block text-center py-3 mt-4 rounded-lg font-semibold 
          transition
          ${
            proceedDisabled
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }
        `}
      >
        {proceedLabel} {totalPayable > 0 ? `₹${totalPayable}` : ""}
      </button>
    </div>
  );
};

export default SummaryCard;
