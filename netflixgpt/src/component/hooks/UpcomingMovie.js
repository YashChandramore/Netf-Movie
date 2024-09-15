

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../../utils/movieSlice";
const UpcomingMovie = () => {
  const dispatch = useDispatch();

  const getUpcomingMoviesApi = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMoviesApi();
  }, []); // Include getUpcomingMoviesApi in the dependency array

};

export default UpcomingMovie;
