import { useParams, Link } from "react-router-dom";
import React from "react";
// Temporary demo data
const sampleTheatres = [
  {
    id: 1,
    name: "PVR Cinemas",
    location: "City Center Mall",
    showtimes: ["10:30 AM", "1:45 PM", "4:20 PM", "7:15 PM", "10:00 PM"],
  },
  {
    id: 2,
    name: "INOX",
    location: "Phoenix Market City",
    showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
  },
  {
    id: 3,
    name: "Cinepolis",
    location: "Forum Mall",
    showtimes: ["9:45 AM", "12:30 PM", "3:10 PM", "6:50 PM"],
  },
];

const dates = [
  "Today",
  "Tomorrow",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
];

const SelectTheatre = () => {
  const { id } = useParams(); // movie id

  return (
    <div className="bg-black min-h-screen text-white p-5">

      <h1 className="text-3xl font-bold mb-6">Select Theatre</h1>

      {/* Date Selector */}
      <div className="flex gap-4 overflow-x-scroll scrollbar-none mb-8">
        {dates.map((date, index) => (
          <button
            key={index}
            className="px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition whitespace-nowrap"
          >
            {date}
          </button>
        ))}
      </div>

      {/* Theatre List */}
      <div className="space-y-6">
        {sampleTheatres.map((theatre) => (
          <div
            key={theatre.id}
            className="bg-gray-900 p-5 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-semibold">{theatre.name}</h2>
            <p className="text-gray-400 text-sm mb-3">{theatre.location}</p>

            <div className="flex flex-wrap gap-4">
              {theatre.showtimes.map((time, index) => (
                <Link
                  key={index}
                  to={`/movie/${id}/seats?theatre=${theatre.id}&time=${time}`}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                >
                  {time}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SelectTheatre;
