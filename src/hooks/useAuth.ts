import { useState, useEffect } from "react";
import { User, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoginError("");
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error: any) {
      setLoginError("Login failed. Check your email/password.");
      return false;
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { user, loading, loginError, login, logout, setLoginError };
};
