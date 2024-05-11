import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}