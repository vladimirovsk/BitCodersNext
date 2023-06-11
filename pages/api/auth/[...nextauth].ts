import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_AUTH_CLIENT_ID),
			clientSecret: String(process.env.GOOGLE_AUTH_CLIENT_SECRET),
		})
	],
	 // pages: {
		// signIn: '/auth/signin',
	 // },
	callbacks: {
		 async redirect({url, baseUrl}){
			// if (url.startsWith("/")) return `${baseUrl}${url}`
			// // Allows callback URLs on the same origin
			// else if (new URL(url).origin === baseUrl) return url
		    console.log(process.env.NEXTAUTH_URL, process.env.NEXT_PUBLIC_SECRET)
		 	//baseUrl = process.env.NEXTAUTH_URL
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