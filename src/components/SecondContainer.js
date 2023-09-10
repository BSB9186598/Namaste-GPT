import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className="px-3 md:px-6 bg-black">
        <div className="mt-0 2xl:-mt-96 md:-mt-16 z-100 relative xl:-mt-16">
          <MovieList title={"now playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"popular"} movies={movies?.popularMovies} />
          <MovieList title={"top rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"upcoming"} movies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondContainer;
