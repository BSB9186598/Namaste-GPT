import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/checkValidData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_URL } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)
  const dispatch = useDispatch();
  const handleSignUpBtnClick = () => {
    const message = checkValidData(email.current?.value, password.current?.value, name.current?.value);
    setErrorMessage(message);
    if (message) return;
    if (!signInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_URL
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message )
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  // useHandleSignUpBtnClick()
  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt=""
          className="h-screen object-cover md:w-screen"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-gray-950 bg-opacity-80 text-white 2xl:w-3/12 mx-auto absolute my-36 right-0 left-0 p-16 w-full md:w-2/4 xl:w-6/12"
      >
        <h1 className="text-3xl font-bold mb-8">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            ref={name}
            className="p-3.5 bg-[#333333] my-4 w-full rounded-lg"
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <input
          ref={email}
          className="p-3.5 bg-[#333333] my-4 w-full rounded-lg"
          type="text"
          placeholder="Email Address"
          required
        />
        <input
          ref={password}
          className="p-3.5 bg-[#333333] my-2 w-full rounded-lg"
          type="password"
          placeholder="Password"
          required
        />
        <p className="font-bold text-red-600 text-lg mt-6">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 rounded-xl w-full"
          onClick={handleSignUpBtnClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-2 cursor-pointer" onClick={toggleSignIn}>
          {signInForm
            ? " New to netflix? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
