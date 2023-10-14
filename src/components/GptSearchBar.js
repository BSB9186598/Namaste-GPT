import React, { useRef } from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { addGptMovieResult, addLoader } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);

  const searchTmdbMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results
  };

  
  const handleGptSearchClick = async () => {
    const gptQuery =
      "act asa a movie recommendation system and suggest some movies for the query : " +
      searchtext.current.value +
      ".only give me nanes of 5 movies, comma seperated like the example result given ahead. example result: gadar, sholay, don, golmaal, koi mil gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
  
    if(!gptResult.choices){
      // make a beautiful error page
    }
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchTmdbMovies(movie)) 

    const tmdbResults = await Promise.all(promiseArray)

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults, loader:false}))
   
  };


  return (
    <div>
      <img src={BG_URL} alt="" className="fixed -z-10 w-screen xs:h-full xs:w-screen object-cover xs:fixed sm: h-screen" />
      <div className="pt-[10%] flex justify-center xs:pt-[40%] sm:pt-[30%] md:pt-[10%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-gray-950 px-4 py-4 grid grid-cols-12 w-full md:w-4/12"
        >
          <input
            ref={searchtext}
            className="col-span-9 ps-4 "
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            required
          />
          <button
            className="capitalize col-span-3 bg-red-700 p-4 ms-4 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
