
import { createBrowserRouter } from "react-router-dom";
import Browser2 from "./Browser2";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { HashRouter as Router, Route } from 'react-router-dom';

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body =()=>{
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
      {
        path : "/",
        element:<Login/>
      },
      {
        path : "/browser2",
        element:<Browser2/>
      }
   ]);



    return (<div>
       <RouterProvider router={appRouter}/>
    </div>
    );
 };
 export default Body;