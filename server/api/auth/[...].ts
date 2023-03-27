// import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'

import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  
  // pages: {
  //   signIn: '/login'
  // },
  
  providers: [
    Auth0Provider.default({
      clientId: process.env.AUTH_AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH_AUTH0_SECRET,
      issuer: `https://${process.env.AUTH_AUTH0_ISSUER}`
    }),
    // GithubProvider.default({
    //   clientId: process.env.AUTH_GITHUB_CLIENT_ID,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET
    // })
  ]
})