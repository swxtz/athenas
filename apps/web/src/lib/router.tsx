import type { RouteObject } from "react-router-dom";

import { NotFound } from "@/pages/not-found";
import { RegisterPage } from "@/pages/register";

export const routerObject: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
