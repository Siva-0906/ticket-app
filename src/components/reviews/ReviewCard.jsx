// src/components/reviews/ReviewCard.jsx

import RatingStars from "./RatingStars";

/**
 * Props:
 * - author: string
 * - rating: number
 * - comment: string
 * - date?: string
 * - avatarUrl?: string
 */

const ReviewCard = ({
  author,
  rating,
  comment,
  date,
  avatarUrl,
}) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 flex gap-4 shadow-md">
      {/* Avatar */}
      <div className="shrink-0">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center text-sm font-semibold text-white">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={author}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{author?.charAt(0)?.toUpperCase()}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">
            {author}
          </h4>
          {date && (
            <span className="text-[11px] text-gray-500">
              {date}
            </span>
          )}
        </div>

        <RatingStars rating={rating} size="sm" />

        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
