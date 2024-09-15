import React from 'react'
import GPTmoviesugg from './GPTmoviesugg'
import GPTsbar from './GPTsbar'
import { bgimg } from '../utils/constant'
export const GPTsearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bgimg} alt="vr" />
      </div>
      <GPTsbar/>
      <GPTmoviesugg/>
    </div>
  )
}

