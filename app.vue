<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="js">
import { ContentfulLivePreview } from '@contentful/live-preview'

ContentfulLivePreview.init({ locale: 'en-US' })
</script>
