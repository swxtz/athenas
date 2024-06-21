/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text"},
        password: { label: "password", type: "password"}
      },

      async authorize(credentials, req) {
        const response = await fetch(`${apiUrl}/auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        });


        const user = await response.json();

        if (user && response.ok) {
          return user;
        }

        return null;
      }
    })
  ],
  pages: {
    "signIn": "/login"
  },

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session = token.user as any;
      return session;
    }
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 14 // 14 days
  }
};

export default nextAuthOptions;