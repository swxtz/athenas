import { AuthProvider } from "@/contexts/auth-context";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthProvider);  

  return context;
}