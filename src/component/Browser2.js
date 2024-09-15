
import { GPTsearch } from "./GPTsearch";
import Header from "./Header";
import MainCont from "./Maincont";
import SecondatyCont from "./Secondarycont";
import useNowPlayingMovies from "./hooks/NowPlayingmov";
import UpcomingMovie from "./hooks/UpcomingMovie";
import UseRatedMovies from "./hooks/UseRatedMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import {useSelector} from "react-redux";

const Browser2 =()=>{
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    UpcomingMovie();
    UseRatedMovies();
    return (
        <div>
    <Header/>
    {showGptSearch ? (
        <GPTsearch/>
    ):(
        <>
           <MainCont/>
            <SecondatyCont/>
        </>
    )}
   
   
    
    </div>
    );
 };
 export default Browser2;