// src/utils/formatDate.js

/**
 * Convert a raw date string (YYYY-MM-DD) into a readable format.
 * Example:
 *  "2025-04-20" => "20 Apr 2025"
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

/**
 * Format today's date in a friendly way.
 * Example:
 *  "Wednesday, 12 Mar"
 */
export const formatToday = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });
};

/**
 * Convert a timestamp into a "time ago" label.
 * Example:
 *  5 minutes ago
 *  2 hours ago
 *  3 days ago
 */
export const timeAgo = (dateStr) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return `${seconds} sec ago`;
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hrs ago`;
  return `${days} days ago`;
};
