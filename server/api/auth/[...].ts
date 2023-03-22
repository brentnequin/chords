import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login'
  },
  providers: [
    GithubProvider.default({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITBUB_SECRET
    })
  ]
})