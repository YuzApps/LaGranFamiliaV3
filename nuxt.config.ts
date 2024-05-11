// https://nuxt.com/docs/api/configuration/nuxt-config
import { isDevelopment, isWindows } from 'std-env';

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint',
    'nuxt-og-image',
    '@nuxthq/studio',
    ...(isDevelopment || isWindows ? [] : ['nuxt-security']),
  ],

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google' },
      { name: 'Maven Pro', provider: 'google' },
    ],
    priority: ['google'],
  },

  experimental: {
    sharedPrerenderData: true,
    payloadExtraction: true,
  },

  tailwindcss: {
    configPath: '~/config/tailwind',
  },

  image: {
    domains: ['portal.clinicalagranfamilia.com', 'clinicalagranfamilia.com', 'res.cloudinary.com'],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/assetss/image/upload/',
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/contact': { prerender: true },
  },

  devtools: {
    enabled: false,
  },

  colorMode: {
    preference: 'light',
    fallback: 'system',
  },

  ui: {
    icons: ['mdi', 'lucide', 'medical-icon'], //'lucide', 'fontawesome', 'heroicons', 'mdi', 'carbon',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es-MX',
      },
      bodyAttrs: {
        class: 'bg-white h-full',
      },
      titleTemplate: '%s - Clinica la Gran Familia',
      title: 'Inicio',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=6JYIGclVQdw',
      facebookUrl: 'https://www.facebook.com/clinicalagranfamilia',
      instagramUrl: 'https://www.instagram.com/lagranfamilia19',
      twitterUrl: 'https://twitter.com/GeneralClinica',
      youtubeChannel: 'https://www.youtube.com/channel/UCiI3uDj1EH6I3GWKd2BKJ4g',
    },
  },

  build: {
    transpile: ['@googlemaps/js-api-loader'],
  },
});
