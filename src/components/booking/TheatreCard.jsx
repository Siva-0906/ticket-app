// src/components/booking/TheatreCard.jsx

const TheatreCard = ({ theatre, onShowTimeSelect }) => {
  // theatre = { id, name, location, showtimes: [] }

  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-lg mb-4">
      <h2 className="text-xl font-semibold">{theatre.name}</h2>
      <p className="text-gray-400 text-sm mb-3">{theatre.location}</p>

      <div className="flex flex-wrap gap-4">
        {theatre.showtimes.map((time, index) => (
          <button
            key={index}
            onClick={() => onShowTimeSelect && onShowTimeSelect(theatre, time)}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TheatreCard;
