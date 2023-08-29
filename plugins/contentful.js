import * as contentful from 'contentful'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      contentfulClient: contentful.createClient({
        space: useRuntimeConfig().public.ctfSpaceId,
        accessToken: useRuntimeConfig().public.ctfCdaAccessToken
      })
    }
  }
})
