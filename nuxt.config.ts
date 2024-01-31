// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

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

  runtimeConfig: {
    public: {
      youtubeUrl: "https://www.youtube.com/watch?v=6JYIGclVQdw",
      facebookUrl: "https://www.facebook.com/clinicalagranfamilia",
      instagramUrl: "https://www.instagram.com/lagranfamilia19",
      twitterUrl: "https://twitter.com/GeneralClinica",
      youtubeChannel: "https://www.youtube.com/channel/UCiI3uDj1EH6I3GWKd2BKJ4g",
    },
  },
});