import MovieCard from "./MovieCard";

const MovieCarousel = ({ title, movies = [] }) => {
  return (
    <div className="w-full mb-10">
      <h2 className="text-2xl font-semibold text-white mb-4 px-2">
        {title}
      </h2>

      <div className="flex gap-5 overflow-x-scroll scrollbar-none px-2 pb-2">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[180px]">
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              genre={movie.genre}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
