import NextAuth from "next-auth/next";
import nextAuthOptions from "./providers";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };