// https://nuxt.com/docs/api/configuration/nuxt-config
import { isDevelopment, isWindows } from 'std-env';

export default defineNuxtConfig({
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

  build: {
    transpile: ['@googlemaps/js-api-loader'],
  },

  colorMode: {
    preference: 'light',
    fallback: 'system',
  },

  devtools: {
    enabled: false,
  },

  experimental: {
    sharedPrerenderData: true,
    payloadExtraction: true,
  },

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google' },
      { name: 'Maven Pro', provider: 'google' },
    ],
    priority: ['google'],
  },

  image: {
    domains: ['portal.clinicalagranfamilia.com', 'clinicalagranfamilia.com', 'res.cloudinary.com'],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/assetss/image/upload/',
    },
  },

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

  routeRules: {
    '/': { prerender: true },
    '/contact': { prerender: true },
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

  //
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'base-uri': ["'self'"],
        'connect-src': ["'self'", 'https:', 'http:', 'wss:', 'ws:'],
        'font-src': ["'self'", '*.gstatic.com', '*.googleapis.com'],
        'form-action': ["'none'"],
        'frame-ancestors': ["'none'"],
        'frame-src': ['https:'],
        'img-src': ["'self'", 'https:', 'http:', 'data:', 'blob:'],
        'manifest-src': ["'self'"],
        'media-src': ["'self'", 'https:', 'http:'],
        'object-src': ["'none'"],
        'script-src': ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'"],
        'script-src-elem': [
          "'self'",
          "'unsafe-inline'",
          "'wasm-unsafe-eval'",
          '*.youtube.com',
          '*.google.com',
          '*.googleapis.com',
        ],
        'script-src-attr': ["'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'", '*.googleapis.com', '*.gstatic.com'],
        'upgrade-insecure-requests': true,
      },
    },
    csrf: {
      cookie: {
        secure: true,
        sameSite: 'strict',
      },
    },
    csp: {
      reportOnly: true,
      hashAlgorithm: 'sha256',
      policies: {
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-hashes'",
          '*.youtube.com',
          '*.google.com',
          '*.googleapis.com',
        ],
      },
    },
    rateLimiter: false,
  },

  tailwindcss: {
    configPath: '~/config/tailwind',
  },

  ui: {
    icons: ['mdi', 'lucide', 'medical-icon'], //'lucide', 'fontawesome', 'heroicons', 'mdi', 'carbon',
  },
});
