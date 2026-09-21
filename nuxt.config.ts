export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/persona5-companion/favicon.jpg'
        }
      ]
    },
    baseURL: '/persona5-companion/'
  },
  nitro: {
    preset: 'static'
  }
})