import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div>
      <h1 className="text-lg text-white capitalize my-0 pt-5 pb-3 font-bold px-4 md:mt-4 mb-2 md:pb-0 md:text-lg 2xl:text-2xl">
        {title}
      </h1>
        <div className="flex overflow-auto">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default MovieList;
