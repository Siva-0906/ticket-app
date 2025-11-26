import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster, genre, rating }) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="block transform transition-all duration-300 hover:scale-105"
    >
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl">
        <div className="relative w-full h-72">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 w-full bg-linear-to-t from-black/80 to-transparent p-3">
            <p className="text-sm text-gray-300">{genre}</p>
            <h3 className="text-lg font-semibold text-white leading-tight">
              {title}
            </h3>
          </div>
        </div>

        <div className="p-3 flex items-center justify-between">
          <span className="text-sm text-gray-400">Rating</span>
          <span className="text-yellow-400 font-bold text-sm">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
