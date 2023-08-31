import { ContentfulLivePreview } from '@contentful/live-preview'

export default defineNuxtPlugin(() => {
  const livePreview = ContentfulLivePreview.init({ locale: 'en-US' })

  return {
    provide: {
      contentfulLivePreview: livePreview
    }
  }
})
