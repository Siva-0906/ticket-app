// src/components/booking/ShowTimeCard.jsx

/**
 * time: string (e.g., "10:30 AM")
 * status: "available" | "fast-filling" | "almost-full" | undefined
 */

const ShowTimeCard = ({ time, status, onClick }) => {
  const getStatusLabel = () => {
    if (!status) return null;
    if (status === "fast-filling") return "Fast Filling";
    if (status === "almost-full") return "Almost Full";
    return null;
  };

  const statusLabel = getStatusLabel();

  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2 
        bg-gray-800 
        hover:bg-gray-700 
        rounded-lg 
        text-sm 
        transition 
        whitespace-nowrap 
        flex 
        flex-col 
        items-center
      "
    >
      <span>{time}</span>
      {statusLabel && (
        <span className="text-[10px] mt-1 text-yellow-400 uppercase tracking-wide">
          {statusLabel}
        </span>
      )}
    </button>
  );
};

export default ShowTimeCard;
