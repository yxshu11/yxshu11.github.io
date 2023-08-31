export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/macthodology-nuxt',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@contentful/live-preview/style.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],
  runtimeConfig: {
    public: {
      ctfSpaceId: process.env.CTF_SPACE_ID,
      ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN
    }
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-simple-sitemap'
  ]
})
