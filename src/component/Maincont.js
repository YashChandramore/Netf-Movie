import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBacgground";


const MainCont = () =>{
    const movies = useSelector((store) => store.movies?.NowPlayingMovies);
    if(!movies)return ;
    const mainmovie = movies[1];
    const{original_title,overview,id} = mainmovie;

    
    return (<div>
        <VideoTitle title = {original_title} overview = {overview}/>
        <VideoBackground movieId = {id}/>
    </div>
    );
};
export default MainCont;