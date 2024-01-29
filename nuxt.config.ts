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

  ui: {
    icons: ["mdi", "lucide", "medical-icon"], //'lucide', 'fontawesome', 'heroicons', 'mdi', 'carbon',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "es-MX",
      },
      bodyAttrs: {
        class: "bg-white h-full",
      },
      titleTemplate: "%s - Clinica la Gran Familia",
      title: "Inicio",
    },
  },
});
