// src/hooks/useLocalStorage.js

import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const readValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("useLocalStorage read error:", err);
      return initialValue;
    }
  };

  const [value, setValue] = useState(readValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("useLocalStorage write error:", err);
    }
  }, [key, value]);

  return [value, setValue];
};
