<template>
  <div class="homepage">
    <HomepageHeader v-bind="header" />
    <HomepageSection v-for="section in sections" :key="section.sectionId" v-bind="section" />
    <HomepageFooter v-bind="footer" />
  </div>
</template>

<script setup lang="js">
import { storeToRefs } from 'pinia'
import { useHomepageStore } from '~/store/homepage.js'

const store = useHomepageStore()
const { fetchHomepageContent } = store
const { header, sections, footer } = storeToRefs(store)

await fetchHomepageContent()
</script>
