import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../service/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err) {
      console.log("ERROR IN SIGNIN", err);
    }
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
    const res = await signOut(auth);
    setToken("");
    return res;
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(false);
      if (currentUser) {
        await setUser(currentUser);
          // await currentUser.getIdToken().then(async (token) => {
          // await setToken(token);
        // });
      // } else {
        // setUser("");
      }

    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, token, signUp, logIn, logOut, googleSignIn }}>
      {!loading && children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}