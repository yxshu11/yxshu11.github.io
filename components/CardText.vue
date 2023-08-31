<template>
  <div class='card-text row justify-content-center'>
    <div class='col-sm-10 col-md-10'>
      <div class='card rounded-0 border-2 mb-5'>
        <div v-if="headerText" class='card-header'>
          <h2 class='mb-0'>{{ headerText }}</h2>
        </div>
        <div class='card-body' v-html="description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  headerText: String,
  subtitle: String,
  description: String
})
</script>
