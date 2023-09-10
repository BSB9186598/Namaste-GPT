import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import Shimmer from './Shimmer'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptSearchPage = () => {
  const loader = useSelector((store) => store.gpt.loader)
  return (
    <>
    <div>
        <GptSearchBar />
        <div>
          {loader===true ? < Shimmer /> : loader===false ? <MovieList />:null}
        </div>
        <GptMovieSuggestion />
    </div>
    </>
  )
}

export default GptSearchPage