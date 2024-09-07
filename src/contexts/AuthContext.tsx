import { createContext, FC, ReactNode, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

const defaultValue: AuthContextType = {
  isAuthenticated: false,
  toggleAuth: () => {
    console.warn("login is not provided");
  },
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const toggleAuth = () => {
    setIsAuthenticated((prevAuth) => !prevAuth);
    console.log("Auth toggled:", !isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
