import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store )=> store.movies?.nowPlayingMovies)
   
    if(!movies) return;
    const mainMovie = movies[1]
    const{original_title, overview, id} = mainMovie

  return (
    <div  className="md:pt-0 pt-[30%] sm:pt-[20%] bg-black">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
