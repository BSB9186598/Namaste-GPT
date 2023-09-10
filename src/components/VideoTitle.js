import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute bg-gradient-to-r from-black w-full aspect-video text-white pt-[25%] 2xl:pt-[15%] xl:pt-[25%] md:pt-[15%]'>
        <h1 className='font-bold text-2xl pl-6 2xl:ps-20 2xl:text-4xl md:pl-6'>{title}</h1>
        <p className='text-lg ps-20 w-full mt-4 hidden sm:hidden 2xl:block 2xl:ps-20 2xl:w-1/4 md:pl-6 md:block md:w-2/4 xl:w-1/4'>{overview}</p>
        <div className='pl-4 mt-3 md:pl-8 2xl:ms-16 2xl:mt-8 sm:ml-0 2xl:pl-4'>
            <button className='capitalize text-xl py-1 px-5 text-md bg-white text-black hover:bg-gray-400 rounded-lg me-4 2xl:py-3 2xl:px-12 md:py-2.5 md:px-4'>▶play</button>
            <button className='capitalize text-xl py-1 px-5 text-md text-black hover:bg-gray-400 rounded-lg bg-[#666] xs:hidden 2xl:py-3 2xl:px-12 md:py-2.5 md:px-4'>more info</button>
        </div>
    </div>
  )
}

export default VideoTitle