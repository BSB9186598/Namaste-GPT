import React, { useState } from "react";
import Header from "./Header";
import Browse from "./Browse";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="bg-gray-950 bg-opacity-80 text-white w-3/12 mx-auto absolute my-36 right-0 left-0 p-16">
        <h1 className="text-3xl font-bold mb-8">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            className="p-3.5 bg-[#333333] my-4 w-full rounded-lg"
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <input
          className="p-3.5 bg-[#333333] my-4 w-full rounded-lg"
          type="text"
          placeholder="Email Address"
          required
        />
        <input
          className="p-3.5 bg-[#333333] my-2 w-full rounded-lg"
          type="password"
          placeholder="Password"
          required
        />
        <button className="p-4 my-8 bg-red-700 rounded-xl w-full">
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-2 cursor-pointer" onClick={toggleSignIn}>
          {signInForm
            ? " New to netflix? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
      {/* <Browse /> */}
    </div>
  );
};

export default Login;
