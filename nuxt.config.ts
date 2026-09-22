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
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  },
  nitro: {
    preset: 'static'
  }
})