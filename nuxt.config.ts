export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  icon: {
    serverBundle: {
      collections: ['uil']
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  }
})