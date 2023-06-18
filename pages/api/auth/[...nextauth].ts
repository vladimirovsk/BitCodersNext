import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		})
	],
	callbacks: {
		async jwt({token}) {
			console.log('NEXTAUTH_SECRET', process.env.NEXTAUTH_SECRET)
			console.log('NEXTAUTH_URL', process.env.NEXTAUTH_URL)

			return token
		},
	},
	// pages: {
	// 	signIn: '/auth/signin',
	// },
	// callbacks: {
	// 	 async redirect({url, baseUrl}){
	// 		 // baseUrl = String(process.env.NEXTAUTH_URL);
	// 		 console.log('baseUrl', url, baseUrl, process.env.NEXTAUTH_URL)
	// 		 console.log('NEXTAUTH_SECRET', process.env.NEXTAUTH_SECRET)
	// 		 return baseUrl
	// 	 },
	// 	async signIn({user, account, profile}) {
	// 		console.log('signIn')
	// 		return true
	// 	},
	// 	// async redirect(url, baseUrl) { return baseUrl },
	// 	async session({session, user}) {
	// 		console.log(session, 'session', user, 'user')
	// 		return session
	// 	},
	// 	async session ({ session, token, user }) {
	//
	// 		// session.user.username = session.user.name
	// 		// 	.split(' ')
	// 		// 	.join('')
	// 		// 	.toLocaleLowerCase()
	// 		// session.user.uid = token.sub
	// 		return session
	// 	},
	// },

	secret: process.env.NEXTAUTH_SECRET,
	debug: true,
})