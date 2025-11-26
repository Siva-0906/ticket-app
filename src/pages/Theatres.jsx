import React from "react";
import theatres from "../data/theatres.json";

const Theatres = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6">
      <h1 className="text-3xl font-semibold mb-6">Theatres</h1>
      <div className="space-y-4">
        {theatres.map((t) => (
          <div key={t.id} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-sm text-gray-300">{t.location}</p>
            <p className="text-sm text-gray-400">Screens: {t.screens.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theatres;
