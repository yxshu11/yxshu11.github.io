// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.baseUrl || '/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ]
})
