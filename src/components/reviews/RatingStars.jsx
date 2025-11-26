// src/components/reviews/RatingStars.jsx

/**
 * Props:
 * - rating: number (current rating, e.g., 4.5)
 * - max?: number (default 5)
 * - size?: "sm" | "md" | "lg"
 * - onRate?: (value: number) => void  // if provided, stars become clickable
 */

const RatingStars = ({ rating = 0, max = 5, size = "md", onRate }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  const sizeClass =
    size === "sm"
      ? "text-xs"
      : size === "lg"
      ? "text-2xl"
      : "text-base";

  const handleClick = (value) => {
    if (onRate) {
      onRate(value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const isFull = starValue <= fullStars;
        const isHalf = !isFull && hasHalf && starValue === fullStars + 1;

        const content = isHalf ? "★" : "★";

        const colorClass = isFull || isHalf ? "text-yellow-400" : "text-gray-500";

        const commonClasses = `${sizeClass} ${colorClass}`;

        if (onRate) {
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(starValue)}
              className={`${commonClasses} focus:outline-none`}
            >
              {content}
            </button>
          );
        }

        return (
          <span key={index} className={commonClasses}>
            {content}
          </span>
        );
      })}

      <span className="text-xs text-gray-400 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default RatingStars;
