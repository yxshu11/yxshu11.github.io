export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: 'macthodology',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'macthodology.com' }
      ]
    }
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
      ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      web3formsAccessKey: process.env.WEB3FORMS_ACCESS_KEY
    }
  },
  modules: [
    '@pinia/nuxt'
  ],
  experimental: {
    payloadExtraction: true
  }
})
