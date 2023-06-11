import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_AUTH_CLIENT_ID),
			clientSecret: String(process.env.GOOGLE_AUTH_CLIENT_SECRET),
		})
	],
	callbacks: {
		 async redirect({url, baseUrl}){
		    console.log(process.env.NEXTAUTH_URL, process.env.NEXT_PUBLIC_SECRET)
			console.log('baseUrl', baseUrl, process.env.NEXTAUTH_URL)
			return baseUrl
		 },
		async session ({ session, token, user }) {

			// session.user.username = session.user.name
			// 	.split(' ')
			// 	.join('')
			// 	.toLocaleLowerCase()
			// session.user.uid = token.sub
			return session
		},
	},
	secret: process.env.NEXT_PUBLIC_SECRET,
	debug: true,
})