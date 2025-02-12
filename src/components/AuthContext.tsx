import { createContext, ReactNode, useState } from "react";
import { UserData } from "../pages/Home";

export type User = {
  isConnected: boolean;
  signIn: (data: UserData) => void;
  logOut: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
  isSignedIn?: boolean;
};

export const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider = ({ children, isSignedIn }: AuthProviderProps) => {
  const [isConnected, setIsConnected] = useState(isSignedIn || false);

  const signIn = ({ email, password }: UserData) => {
    if (email === "toto@gmail.com" && password === "123456") {
      setIsConnected(true);
    }
  };

  const logOut = () => {
    setIsConnected(false);
  };

  return (
    <AuthContext.Provider value={{ isConnected, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
