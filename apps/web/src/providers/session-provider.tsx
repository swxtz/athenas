"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface NextAuthSessionProviderProps {
  children: ReactNode;
}

export function NextAuthSessionProvider({ children }: NextAuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}