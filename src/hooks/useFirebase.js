import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// intialize firebase
initializeAuthentication();

// google Privicer
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  // declare state
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  // firebase auth
  const auth = getAuth();

  // Google signin handle
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) =>
      setUser(result.user)
    );
  };

  // create user by email and password handle
  const signUpNewUser = (newUser) => {
    // email & password input
    const email = newUser.email;
    const password = newUser.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        varifyEmail();
        // newUser name Input
        user.displayName = newUser.name;
      })
      .catch((error) => setError(error.message));
  };

  // email varification for new user
  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };

  // Sign in by Email and password handle
  const emailPasswordSignIn = (User) => {
    // email & password input
    const email = User.email;
    const password = User.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  //state change by user activity
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  // sign out handle
  const logOut = () => {
    signOut(auth).then((result) => setUser({}));
  };

  // return inner function
  return {
    user,
    error,
    signInWithGoogle,
    signUpNewUser,
    emailPasswordSignIn,
    logOut,
  };
};

export default useFirebase;
