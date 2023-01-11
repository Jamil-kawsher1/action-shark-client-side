import { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { display } from "@mui/system";
import axios from "axios";
import firebaseIntializeAuthentication from "../Firebase/Firebase.init";

//intialize firebase and authentication
firebaseIntializeAuthentication();
const useFirebase = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        // Signed in
        const method = "post";
        saveUser(email, name, method);
        const user = userCredential.user;
        setUser(newUser);
        // send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
      })
      .finally(setIsLoading(false));
  };
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  //signIn With google
  const signInWithGoogle = () => {
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        updateUserdata(user.email, user.displayName);
        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        setError(errorMessage);
      });
  };

  //observe user behaviors
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setError(error);
      })
      .finally(() => setIsLoading(false));
  };
  const saveUser = (email, displayName) => {
    const user = { email, displayName };

    axios
      .post(`${process.env.REACT_APP_Base_Url}/users`, user)
      .then((res) => console.log(res));
  };
  const updateUserdata = (email, displayName) => {
    const user = { email, displayName };
    axios
      .put(`${process.env.REACT_APP_Base_Url}/users`, user)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_Base_Url}/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    error,
    admin,
    signInWithGoogle,
  };
};
export default useFirebase;
