import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  providers: [
    // GithubProvider.default({
    //   clientId: 'your-client-id',
    //   clientSecret: 'your-client-secret'
    // })
  ]
})