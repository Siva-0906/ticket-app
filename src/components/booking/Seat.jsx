// src/components/booking/Seat.jsx

/**
 * label: string or number displayed inside the seat
 * isBooked: boolean (true => disabled)
 * isSelected: boolean (true => highlighted)
 */

const Seat = ({ label, isBooked, isSelected, onClick }) => {
  const baseClasses =
    "w-10 h-10 rounded-md text-xs flex items-center justify-center transition";

  let stateClasses = "";

  if (isBooked) {
    stateClasses = "bg-gray-600 cursor-not-allowed";
  } else if (isSelected) {
    stateClasses = "bg-green-500";
  } else {
    stateClasses = "bg-gray-800 hover:bg-gray-700 cursor-pointer";
  }

  return (
    <button
      disabled={isBooked}
      onClick={onClick}
      className={`${baseClasses} ${stateClasses}`}
    >
      {label}
    </button>
  );
};

export default Seat;
