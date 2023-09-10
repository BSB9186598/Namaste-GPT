
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;
  return (
    <div className="p-4 m-4 md:m-16 bg-black bg-opacity-90 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))} 
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

