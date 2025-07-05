import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Add more providers here (Google, Email, etc.)
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      // Optional: allow only your admin email(s)
      // return user.email === "your-admin@email.com";
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
