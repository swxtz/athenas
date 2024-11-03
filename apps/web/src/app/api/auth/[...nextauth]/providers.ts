import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const response = await fetch(`${apiUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        if (user && response.ok) {
          return user.data;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      session = token.user as any;
      return session;
    },
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 14, // 14 days
  },
});
  
