<template>
  <section class='pt-10 pb-10 anchor-target' :class="`bg-${backgroundColor}`">
    <div class='container' :id="sectionId">
      <div class='row justify-content-center' :style="{ 'text-align': alignment }">
        <div class='col-xs-10 col-sm-10 col-lg-8s' :class="`text-${textColor}`" >
          <h2>{{ title }}</h2>
          <h3>{{ description }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
const props = defineProps({
  sectionId: String,
  title: String,
  description: String,
  alignment: String,
  backgroundColor: String,
  textColor: String
})
</script>
