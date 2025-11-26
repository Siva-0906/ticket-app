// src/hooks/useSeatSelection.js

import { useState } from "react";
import { toggleSeat, seatIdToLabel } from "../utils/seatFunctions";

/**
 * Manages:
 * - selected seat list
 * - toggle logic
 * - formatted labels
 */
const useSeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggle = (seatId) => {
    setSelectedSeats((prev) => toggleSeat(prev, seatId));
  };

  const clearSeats = () => setSelectedSeats([]);

  const labels = selectedSeats.map((id) => seatIdToLabel(id));

  return {
    selectedSeats,
    toggle,
    clearSeats,
    labels,
    count: selectedSeats.length,
  };
};

export default useSeatSelection;
