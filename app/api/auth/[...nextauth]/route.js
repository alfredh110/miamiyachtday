import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// List all allowed admin emails here
const adminEmails = [
  "hillercapitalinc@gmail.com",
  "alfredohiller01@gmail.com",
  "abustaleon98@gmail.com"
];

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow emails listed in adminEmails
      return adminEmails.includes(user.email);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
