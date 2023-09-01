<template>
  <div class="card-section row justify-content-center">
    <div class="col-sm-10 col-md-10">
      <div class="section mb-5">
        <h3>{{ title }}</h3>
        <hr>
        <component 
          :is="cardTypeComponent(section)" 
          v-for="section in cards" 
          :key="section.title" 
          v-bind="section"
          :gutter="false"
        />
      </div>
    </div>  
  </div>
</template>

<script setup lang="js">
import { defineAsyncComponent } from 'vue'

defineProps({
  title: String,
  position: Number,
  type: String,
  cards: Array,
})

function cardTypeComponent(section) {
  const component = defineAsyncComponent(() => import(`../components/${section.type}.vue`))
  return component
}
</script>

<style scoped lang="scss">
hr {
  margin-top: 0;
}
</style>
