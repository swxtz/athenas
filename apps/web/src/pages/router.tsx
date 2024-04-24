import type { RouteObject } from "react-router-dom";

import { NotFound } from "@/pages/not-found";

export const routerObject: RouteObject[] = [{
  path: "*",
  element: <NotFound />,
}];