import { PropsWithChildren, createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";
import { User } from "firebase/auth";
import { type UserCredential } from "firebase/auth";

interface AuthContext {
  user: User | null;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const authContext = createContext<AuthContext | null>(null);

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const { user, signup, login, status, logout } = useAuth();

  return (
    <authContext.Provider value={{ user, signup, login, logout }}>
      {status === "success" && children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(authContext) as AuthContext;
};
