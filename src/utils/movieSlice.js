import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        NowPlayingMovies: null,
        trailerVideo: null,
        PopularMovies: null,
        UpcomingMovies: null,
        RatedMovies: null,
    },
    reducers:{
      addNowPlayingMovies:(state,action)=>{
         state.NowPlayingMovies = action.payload;
      },
      addPopularMovies:(state,action)=>{
        state.PopularMovies = action.payload;
     },
     addUpcomingMovies:(state,action)=>{
      state.UpcomingMovies = action.payload;
     },
     addRatedMovies:(state,action)=>{
      state.RatedMovies = action.payload;
     },
      addTrailerVideo: (state,action)=>{
        state.trailerVideo = action.payload;
      }
    },

}

);
export const {addNowPlayingMovies,addPopularMovies, addTrailerVideo,addUpcomingMovies,addRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;