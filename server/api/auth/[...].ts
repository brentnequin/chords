// import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'

import { NuxtAuthHandler } from '#auth'

import prisma from "~~/server/data/prisma"

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    signIn: async ({ user, profile }) => {
      console.log("User:", user)
      console.log("Profile:", profile)

      const provider = user.id.split('|')[0]

      if (provider === 'google-oauth2') {

        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email
          }
        })
  
        if (!existingUser) {
          try {
            await prisma.user.create({
              data: {
                email: user.email,
                firstName: profile.given_name,
                lastName: profile.family_name
              }
            })
          } catch (err) { console.log(err) }
        }

        return true
      }

      return false
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  
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