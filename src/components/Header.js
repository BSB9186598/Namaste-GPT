import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleToggleSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))   
  }
  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/");
      });
  };

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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <div className="fixed w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between xs:flex-col ps-0 pe-0 sm:flex-col md:flex-row">
        <img className="w-44 sm:h-20 mx-auto md:mx-0" src={LOGO} alt="logo-netflix" />
        {user && (
          <div className="flex items-center justify-between xs:justify-center sm:justify-center">
            {showGptSearch && <select className="px-4 py-1.5 bg-gray-950 text-white rounded-lg me-4 xs:p-2 ms-2" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="capitalize"
                  key={lang.identifier}
                  value={lang.identifier}  
                >
                  {lang.name}
                </option>
              ))}
            </select>}
            <button
              className="py-1.5 px-4 rounded-lg text-white bg-purple-800 uppercase me-4 font-semibold"
              onClick={handleToggleSearch}
            >{
              showGptSearch ? "home page" : "gpt search"
            }
            </button>
            <img className="w-12 h-12 me-3 sm:w-10 sm:h-10 md:w-12 md:h-12 xs:hidden md:me-6" alt="" src={user.photoURL} />
            <button
              className="uppercase font-bold texl-lg bg-red-700 text-white rounded px-3 py-2 md:me-8 xs:me-2"
              onClick={handleSignOutBtn}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
