// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../../utils/constant";
// import { useEffect } from "react";
// import { addPopularMovies } from "../../utils/movieSlice";

// const usePopularMovies = () =>{
// // const dispatch =  useDispatch();
//      const dispatch =  useDispatch();

//     const getPopularMoviesApi = async () => {
//        const data = await fetch("'https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
// //    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1");

//         const json = await data.json();
   
       
//        dispatch(addPopularMovies(json.results))
//   };
//    useEffect(()=>{
//    getPopularMoviesApi()
//    },[]);

// };

// export default usePopularMovies;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMoviesApi = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMoviesApi();
  }, []); // Include getPopularMoviesApi in the dependency array

};

export default usePopularMovies;
