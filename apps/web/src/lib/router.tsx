import type { RouteObject } from "react-router-dom";

import { NotFound } from "@/pages/not-found";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";

export const routerObject: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
];
