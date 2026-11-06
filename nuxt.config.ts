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
    head: {
      title: 'TonimatasDEV',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'TonimatasDEV',
          content: 'Personal website.',
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  sourcemap: {
    server: false,
    client: true
  }
})