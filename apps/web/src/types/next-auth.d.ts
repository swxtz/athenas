// types/next-auth.d.ts ou next-auth.d.ts

import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    token: string; // ou o tipo apropriado para o token
  }
}
