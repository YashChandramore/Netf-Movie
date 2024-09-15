import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
// const dispatch =  useDispatch();
     const dispatch =  useDispatch();

    const getMoviesApi = async () => {
       const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
//    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1");

        const json = await data.json();
   
       
       dispatch(addNowPlayingMovies(json.results))
  };
   useEffect(()=>{
   getMoviesApi()
   },[]);
};

export default useNowPlayingMovies;