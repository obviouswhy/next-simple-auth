import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../services/firebase";
import { createContext, useState, useEffect, useContext } from "react";

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export const AuthProvider = (props) => {
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      return [null, user];
    } catch (err) {
      setUser(null);
      return [err.message, null];
    }
  };

  const handleLogout = async () => {
    try {
      const res = await signOut(auth);
      setUser(null);
      return [null, res];
    } catch (err) {
      setUser(null);
      return [err.message, null];
    }
  };

  const handleSignUp = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      return [null, user];
    } catch (err) {
      setUser(null);
      return [err.message, null];
    }
  };

  return (
    <authContext.Provider
      {...props}
      value={{
        user,
        isLoading,
        setUser,
        handleLogin,
        handleLogout,
        handleSignUp,
      }}
    />
  );
};
