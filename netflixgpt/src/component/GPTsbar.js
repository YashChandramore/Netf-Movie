import {useSelector} from "react-redux";
import { useRef } from "react";
import openai from "../utils/openAI";
import React from 'react'
import lang from '../utils/langconst'
const GPTsbar = () => {
    const langkey = useSelector((store)=>store.config.lang)
    const searchtext = useRef(null);
    const handleGPTsearch = async () =>{
       const gptquery = "Act as a movie recommendation system and suggest some movies for the query: "+ searchtext.current.value + ".only give me names of 5 movies, comma separated like the result given ahead. Example Result:Lagaan, Sholay, Koi mil gaya, Golmaal , Chak de India";
       const GPTresults =  await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptquery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(GPTresults.choices);
    };
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchtext} type='text' className=' p-4 m-4 col-span-9' placeholder={lang[langkey].gptSearchPlaceFolder}/>
        <button className='m-4 py-2 px-4 bg-red-700 col-span-3 text-white rounded-lg' onClick={handleGPTsearch}>{lang[langkey].search}</button>
        </form>
    </div>

  )
}

export default GPTsbar