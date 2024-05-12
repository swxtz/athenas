import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import cookies from "js-cookie";

export function ProtectedRoutes() {
  const token = cookies.get("user-jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if(token) {
      return navigate("/dashboard");
      
    } else {
      return navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}