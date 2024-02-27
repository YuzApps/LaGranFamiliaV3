// https://nuxt.com/docs/api/configuration/nuxt-config

import { isDevelopment, isWindows } from "std-env";

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-og-image",
    "@vue-email/nuxt",
    ...(isDevelopment || isWindows ? [] : ["nuxt-security"]),
  ],

  image: {
    domains: ["portal.clinicalagranfamilia.com", "clinicalagranfamilia.com", "res.cloudinary.com"],
    cloudinary: {
      baseURL: "https://res.cloudinary.com/assetss/image/upload/",
    },
  },

  experimental: {
    sharedPrerenderData: true,
    payloadExtraction: true,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  //@ts-ignore
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "base-uri": ["'self'"],
        "connect-src": ["'self'", "https:", "http:", "wss:", "ws:"],
        "font-src": ["'self'", "*.gstatic.com", "*.googleapis.com"],
        "form-action": ["'none'"],
        "frame-ancestors": ["'none'"],
        "frame-src": ["https:"],
        "img-src": ["'self'", "https:", "http:", "data:", "blob:"],
        "manifest-src": ["'self'"],
        "media-src": ["'self'", "https:", "http:"],
        "object-src": ["'none'"],
        "script-src": ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'"],
        "script-src-elem": [
          "'self'",
          "'unsafe-inline'",
          "'wasm-unsafe-eval'",
          "*.youtube.com",
          "*.google.com",
          "*.googleapis.com",
        ],
        "script-src-attr": ["'unsafe-inline'"],
        "style-src": ["'self'", "'unsafe-inline'", "*.googleapis.com", "*.gstatic.com"],
        "upgrade-insecure-requests": true,
      },
    },
    csrf: {
      cookie: {
        secure: true,
        sameSite: "strict",
      },
    },
    csp: {
      reportOnly: true,
      hashAlgorithm: "sha256",
      policies: {
        "script-src": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-hashes'",
          "*.youtube.com",
          "*.google.com",
          "*.googleapis.com",
        ],
      },
    },
    rateLimiter: false,
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
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: "",
      youtubeUrl: "https://www.youtube.com/watch?v=6JYIGclVQdw",
      facebookUrl: "https://www.facebook.com/clinicalagranfamilia",
      instagramUrl: "https://www.instagram.com/lagranfamilia19",
      twitterUrl: "https://twitter.com/GeneralClinica",
      youtubeChannel: "https://www.youtube.com/channel/UCiI3uDj1EH6I3GWKd2BKJ4g",
    },
  },

  build: {
    transpile: ["@googlemaps/js-api-loader", "vue-email"],
  },
});
