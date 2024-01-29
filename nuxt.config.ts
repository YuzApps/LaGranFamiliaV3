// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],
  devtools: { enabled: true },

  colorMode: {
    preference: "light",
    fallback: "system",
  },

  googleFonts: {
    families: {
      Montserrat: [100, 200, 400, 500, 600, 700],
      "Maven Pro": [400, 600, 700],
    },
  },
});
