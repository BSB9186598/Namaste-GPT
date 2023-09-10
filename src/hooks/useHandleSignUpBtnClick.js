import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { checkValidData } from "../utils/checkValidData";
import { addUser } from "../utils/userSlice";
import { useState } from "react";

const handleSignUpBtnClick = () => {
    const dispatch = useDispatch();
    const [signInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)

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

  export default handleSignUpBtnClick