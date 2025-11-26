import { useState } from "react";

export default function SearchBar({
  placeholder = "Search for movies, theatres...",
  onSearch,
  className = "",
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2 shadow-sm ${className}`}
    >
      {/* Search Icon */}
      <span className="text-gray-400 text-xl">🔍</span>

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-100 placeholder:text-gray-500 text-sm md:text-base"
      />

      {/* Clear Button */}
      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            if (onSearch) onSearch("");
          }}
          className="text-gray-400 hover:text-gray-200 text-lg"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-all active:scale-95"
      >
        Search
      </button>
    </form>
  );
}
