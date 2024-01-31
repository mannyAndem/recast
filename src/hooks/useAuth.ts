import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

type Status = "idle" | "pending" | "success" | "error";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<Status>("pending");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        setStatus("success");
      } else {
        setStatus("idle");
      }
    });
  });

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return { user, status, signup, login };
};

export default useAuth;
