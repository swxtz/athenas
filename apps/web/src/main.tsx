import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { routerObject } from "@/router/routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/auth-context";

const router = createBrowserRouter(routerObject);
const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="font-poppins">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <BrowserRouter>
          <AuthProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
