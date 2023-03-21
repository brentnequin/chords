// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY
  },
    css: ["@/assets/css/tailwind.css"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
})
