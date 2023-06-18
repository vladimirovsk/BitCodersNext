import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_AUTH_CLIENT_ID),
			clientSecret: String(process.env.GOOGLE_AUTH_CLIENT_SECRET),
		})
	],
	callbacks: {
		async jwt({token}) {
			token.userRole = "admin"
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

	secret: 'ra16VE3MSBnBhG+TStWRL88nJK2u4bEh54ZRult/P6c=',
	debug: true,
})