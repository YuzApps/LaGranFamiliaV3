export default defineAppConfig({
  header: {
    links: [
      { name: 'Inicio', href: '/' },
      { name: 'Servicios', href: '/services' },
      { name: 'Galería', href: '/gallery' },
      { name: 'Citas', href: '/appointment' },
    ],
  },

  nuxtIcon: {
    iconifyApiOptions: {
      publicApiFallback: true,
    },
  },
});
