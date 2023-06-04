import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  // async session({sess})
});
