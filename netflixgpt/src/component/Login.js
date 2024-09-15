

import { useState, useRef } from "react";
import Header from "./Header";
import { validcheckdata } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgimg, usericon } from "../utils/constant";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  const email = useRef(null);
  const name = useRef(null); // Added useRef for name
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleclick = () => {
    // check
    const msg = validcheckdata(email.current.value, password.current.value);
    seterrormsg(msg);

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: usericon
          }).then(() => {
            // Profile updated!
            const updatedUser = auth.currentUser;
            const { uid, email, displayName, photoURL } = updatedUser;
            // const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            // navigate("/browser2");
          }).catch((error) => {
            seterrormsg(error.message);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterrormsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          
          
          const { uid, email, displayName, photoURL } = user;
          

          // Updated the Redux store with displayName if available
          if (displayName ) {
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          }
         
          

          // navigate("/browser2");
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterrormsg(errorMessage)
        });
    }
  }

  const togglefun = () => {
    setisSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgimg} alt="vr" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-1/4 my-24 mx-auto left-0 right-0 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold py-4 px-2 text-4xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type="text" ref={name} placeholder="Full Name" className="px-2 py-2 mx-2 my-3 w-full rounded-lg bg-gray-700" />}

        <input type="text" ref={email} placeholder="Email Address" className="px-2 py-2 mx-2 my-3 w-full rounded-lg bg-gray-700" />
        <input type="password" ref={password} placeholder="Password" className="px-2 py-2 mx-2 my-3 rounded-lg w-full bg-gray-700" />
        <p className=" text-red-700 m-2 text-lg font-bold">{errormsg}</p>
        <button className="py-3 px-1 m-2 w-full bg-red-700 rounded-lg" onClick={handleclick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 px-2 cursor-pointer" onClick={togglefun}>
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already A user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
