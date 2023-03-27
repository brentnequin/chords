// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/google-fonts',
    // '@nuxtjs/color-mode',
    'unplugin-icons/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      vercelDeploymentUrl: process.env.VERCEL_URL || 'localhost:3000'
    }
  },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    download: true,
    display: "swap",
    families: {
      'M PLUS Rounded 1c': [400],
    }
  },
  auth: {
    // enableGlobalAppMiddleware: true,
    origin: process.env.VERCEL_ENV === 'production' ? `https://chords.brentnequin.com` : 'http://localhost:3000',
  }
})
