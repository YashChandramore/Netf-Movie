

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";
import { addRatedMovies } from "../../utils/movieSlice";
const UseRatedMovies = () => {
  const dispatch = useDispatch();

  const getRatedMoviessApi = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addRatedMovies(json.results));
  };

  useEffect(() => {
    getRatedMoviessApi();
  }, []); // Include getUseRatedMoviessApi in the dependency array

};

export default UseRatedMovies;
