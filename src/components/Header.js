import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const handleSignOutBtn = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
     
    }).catch((error) => {
      navigate("/")
    });
  } 


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } 
      else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img
          className="w-44"
          src={LOGO}
          alt="logo-netflix"
        />
        {user && <div className="flex items-center">
          <img
            className="w-12 h-12 me-3"
            alt=""
            src={user.photoURL}
          />
          <button className="uppercase font-bold texl-lg bg-gray-950 text-white rounded px-3 py-2" onClick={handleSignOutBtn}>
            Sign out
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Header;
