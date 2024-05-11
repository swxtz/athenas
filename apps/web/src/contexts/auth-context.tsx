import { type ReactNode, createContext, useState, useEffect } from "react";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userJWT, setUserJWT] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = cookies.get("user-jwt");

    if (!jwt) {
      return navigate("/login")
    }

    setUserJWT(jwt);
  });

  return (
    <AuthContext.Provider value={{ userJWT }}>
      {children}
    </AuthContext.Provider>
  );       
  
}