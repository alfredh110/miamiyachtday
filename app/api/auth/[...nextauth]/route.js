import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// Add other providers here if you want (ex: GitHubProvider)

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers if needed
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow this email:
      return user.email === "your.email@gmail.com"; // <-- CHANGE THIS!
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
