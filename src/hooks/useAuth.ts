import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

type Status = "idle" | "pending" | "success" | "error";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<Status>("pending");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setStatus("success");
    });
  });

  const signup = async (email: string, password: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
  };

  const login = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return { user, status, signup, login };
};

export default useAuth;
