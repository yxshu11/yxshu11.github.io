<template>
  <div class="recommendations">
    <section class='bg-black text-light text-center pt-5 pb-5 mb-5'>
      <h1 class='mb-3 mt-3'>{{ staticPage.title }}</h1>
      <p>{{ staticPage.description }}</p>
    </section>
    <div class='container'>
      <component 
        :is="cardTypeComponent(section)"
        v-for="section in staticPage.sections"
        :key="section"
        v-bind="section"
        :gutter="true"
      />
    </div>
  </div>
</template>

<script setup lang="js">
import { computed, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useStaticPagesStore } from '~/store/staticPages.js'

useHead({
  title: 'Recommendations | macthodology',
})

const store = useStaticPagesStore()
const { fetchStaticPagesContent } = store
const { getStaticPageByType } = storeToRefs(store)
const staticPage = computed(() => getStaticPageByType.value('recommendations'))

await fetchStaticPagesContent()

function cardTypeComponent(section) {
  return defineAsyncComponent(() => import(`../components/${section.type}.vue`))
}
</script>
