<template>
  <div class="card-button">
    <nuxt-link 
      v-if="buttonType === 'nuxt-link'"
      :to="href"
      class="btn btn-dark rounded-0"
      :style="{ backgroundColor: color }"
    >
      {{ label }}
    </nuxt-link>
    <component 
      v-else
      :is="getReadMoreBtnType()"
      :href='file ? file : href'
      :to="href"
      class='btn btn-dark rounded-0'
      :style="{ backgroundColor: color }"
    >
      {{ label }}
    </component>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  buttonType: String,
  label: String,
  href: String,
  color: String,
  file: String
})

function getReadMoreBtnType() {
  return props.buttonType
}
</script>

<style lang="scss" scoped>
.card-button {
  display: inline-flex;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>
