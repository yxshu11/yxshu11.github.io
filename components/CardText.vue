<template>
  <div class='card-text justify-content-center' :class="{ row: gutter}">
    <div :class="{ 'col-sm-10': gutter, 'col-md-10': gutter }">
      <div class='card rounded-0 border-2 mb-3'>
        <div v-if="headerText" class='card-header'>
          {{ headerText }}
        </div>
        <div v-if="cardTitle || subtitle || description" class='card-body'>
          <h5 v-if="cardTitle" class='card-title mb-3'>
            {{ cardTitle }}
          </h5>
          <h6 v-if="subtitle" class='card-subtitle text-muted mb-3'>
            {{ subtitle }}
          </h6>
          <span v-if="description" v-html="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  cardTitle: String,
  headerText: String,
  subtitle: String,
  description: String,
  gutter: Boolean
})
</script>
