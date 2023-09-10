import React from 'react'
import { POSTER_IMG } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 me-4'>
      <img src ={POSTER_IMG + posterPath}/>
    </div>
  )
}

export default MovieCard