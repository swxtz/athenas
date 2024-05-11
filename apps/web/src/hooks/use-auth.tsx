import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}