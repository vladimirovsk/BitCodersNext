import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	jwt:  process.env.JWT_SECRET
})