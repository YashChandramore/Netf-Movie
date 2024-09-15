import { useSelector } from "react-redux";
import MovieList from "./movieList";


const SecondatyCont = () =>{
    const movies = useSelector(store=>store.movies)
    return (
      <div className=" bg-black">
        <div className="-mt-52 pl-2 relative z-20">
        <MovieList title={"Now Playing"} movies = {movies.NowPlayingMovies}/>
        <MovieList title={"IMDB hitlist"} movies = {movies.RatedMovies}/>

        <MovieList title={"UpComing"} movies = {movies.UpcomingMovies}/>
        <MovieList title={"Popular"} movies = {movies.PopularMovies}/>

        </div>
      </div>
    );
};
export default SecondatyCont;