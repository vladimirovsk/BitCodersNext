import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	site: process.env.NEXTAUTH_URL,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
		})
	],
	 // pages: {
		// signIn: '/auth/signin',
	 // },
	callbacks: {
		async session({ session, token, user }) {
			console.log(session.user)
			session.user.username = session.user.name
				.split(' ')
				.join('')
				.toLocaleLowerCase()

			session.user.uid = token.sub

			return session
		},
	},
	secret: process.env.NEXT_PUBLIC_SECRET,
	// session: {
	// 	strategy: 'jwt'
	// }
})