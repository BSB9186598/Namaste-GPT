import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute bg-gradient-to-r from-black w-full aspect-video text-white pt-[20%]'>
        <h1 className='font-bold text-4xl ps-20'>{title}</h1>
        <p className='text-lg ps-20 w-1/4 mt-4'>{overview}</p>
        <div className='ms-20 mt-8'>
            <button className='capitalize text-xl py-3 px-12 bg-white text-black hover:bg-gray-400 rounded-lg me-4'>▶play</button>
            <button className='capitalize text-xl py-3 px-12 bg-white text-black hover:bg-gray-400 rounded-lg'>more info</button>
        </div>
    </div>
  )
}

export default VideoTitle