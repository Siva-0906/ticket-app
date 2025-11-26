const MovieDetailsBanner = ({ poster, title, genre, duration, rating }) => {
  return (
    <div className="relative w-full h-[450px] mb-10">
      {/* Background Poster */}
      <img
        src={poster}
        alt={title}
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent flex items-end">
        <div className="p-8 max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>

          <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
            <span>{genre}</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{duration}</span>
          </div>

          <div className="text-yellow-400 font-semibold text-lg">
            ⭐ {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;
