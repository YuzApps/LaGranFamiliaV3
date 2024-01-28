// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  devtools: { enabled: true },

  googleFonts: {
    families: {
      Montserrat: [100, 200, 400, 500, 600, 700],
    },
  },
});
