import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constant";
import { usericon } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changelanguage } from "../utils/configSlice";
const Header = () => {
    const user = useSelector(store=>store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showgptsearch = useSelector(store=>store.gpt.showGptSearch);
    const handleGPTsearchClick = () =>{
      dispatch(toggleGptSearchView());
    }
    const handleSignOut=()=>{
       
       signOut(auth).then(() => {
        // Sign-out successful.
           navigate('/')
         }).catch((error) => {
         // An error happened.
           navigate('/error')
          });
    }
    const handleLanguageChange = (e) =>{
      dispatch(changelanguage(e.target.value));
    }
    
    useEffect(()=>{
      
      
       const unsubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid ,email:email,displayName:displayName,photoURL:photoURL}))
          // ...
          navigate("/browser2")
          
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
          // ...
        }
      });

       return() => unsubscribe();
     },[]);



  


    return (
      <div className="absolute justify-between flex w-screen z-10 px-4 py-2 bg-gradient-to-b from-black">
        <img
          className="w-44"
          src = {logo}
          alt="no img"
        />
        {user && (<div className="flex p-2">
          {showgptsearch && <select className="bg-gray-900 m-2 text-white p-2" onChange={handleLanguageChange}>
           {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value ={lang.identifier}>
              {lang.name}
            </option>
           ))}
          </select>}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800
           text-white rounded-lg " onClick={handleGPTsearchClick}>
            {showgptsearch?"home":"GPT search"}
            </button>
          <img alt="usericon" className="w-12 h-12" src = {usericon}/>
          {/* <img alt="usericon" className="w-12 h-12" src = {user?.photoURL}/> */}

          <button onClick={handleSignOut} className=" font-bold text-white">(Sign Out)</button>
        </div>
        )}
      </div>
        
    );
  };
  
  export default Header;
  