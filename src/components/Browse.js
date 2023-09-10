import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
