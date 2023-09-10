import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    loader:undefined
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state,action) => {
      const{movieNames, movieResults} = action.payload
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      // state.loader= loader;
    },
    addLoader:(state, action) => {
      state.loader = action.payload
    }
  },
});

export const { toggleGptSearch, addGptMovieResult, addLoader } = gptSlice.actions;
export default gptSlice.reducer;
