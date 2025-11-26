// src/components/booking/TheatreSelector.jsx

import ShowTimeCard from "./ShowTimeCard";

/**
 * theatres: [
 *   { id, name, location, showtimes: ["10:30 AM", "1:30 PM", ...] }
 * ]
 *
 * onShowTimeSelect(theatre, time) => void
 */

const TheatreSelector = ({ theatres = [], onShowTimeSelect }) => {
  return (
    <div className="space-y-4">
      {theatres.map((theatre) => (
        <div
          key={theatre.id}
          className="bg-gray-900 p-5 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold">{theatre.name}</h2>
          <p className="text-gray-400 text-sm mb-3">{theatre.location}</p>

          <div className="flex flex-wrap gap-4">
            {theatre.showtimes.map((time, index) => (
              <ShowTimeCard
                key={index}
                time={time}
                onClick={() =>
                  onShowTimeSelect && onShowTimeSelect(theatre, time)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheatreSelector;
