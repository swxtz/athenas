import { type ReactNode, createContext, useState, useEffect } from "react";
import cookies from "js-cookie";
import { redirect } from "react-router-dom";
import { api } from "@/lib/axios";

interface User {
  email: string
  // resto
}

interface AuthContextData {
  isAuthenticated: boolean
  user: User | undefined
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function signOut() {
  cookies.remove("user-jwt");

  return redirect("/login");
}


export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = cookies.get("user-jwt");

    if (token) {
      api.get("/users/get").then((response) => {
        const { email } = response.data;

        setUser({ email });
      }).catch(() => {
        signOut();
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );       
}