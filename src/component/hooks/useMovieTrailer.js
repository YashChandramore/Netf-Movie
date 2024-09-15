import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const getMoviesVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);

        const json = await data.json();
        
        const filterdata = json.results.filter((video)=>video.type==="Trailer");
      
        const trailer = filterdata.length? filterdata[0]:json.results[0];
       
        
        dispatch(addTrailerVideo(trailer));

    }
       
    useEffect(()=>{
      getMoviesVideos();
    },[]);
}

export default useMovieTrailer;