import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  
  usePlayingMovies ();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondContainer/>
    </div>
  );
};

export default Browse;
