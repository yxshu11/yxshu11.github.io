import * as contentful from 'contentful'

export default defineNuxtPlugin(() => {
  const client = contentful.createClient 
    ? contentful.createClient({
      space: useRuntimeConfig().public.ctfSpaceId,
      accessToken: useRuntimeConfig().public.ctfCdaAccessToken
    })
    : contentful.default.createClient({
      space: useRuntimeConfig().public.ctfSpaceId,
      accessToken: useRuntimeConfig().public.ctfCdaAccessToken
    })

  return {
    provide: {
      contentfulClient: client
    }
  }
})
