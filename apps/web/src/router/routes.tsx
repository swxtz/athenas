import type { RouteObject } from "react-router-dom";

import { NotFound } from "@/pages/not-found";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";
import { ProtectedRoutes } from "@/middleware/protected-routes";
import { DashboardPage } from "@/pages/dashboard";
import { HomePage } from "@/pages/home";

export const routerObject: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      }
    ]
  }
];
