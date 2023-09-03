import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice ({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
      
    }
})

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions
export default movieSlice.reducer