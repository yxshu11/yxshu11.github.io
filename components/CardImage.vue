<template>
  <div class='card-image row justify-content-center'>
    <div class='col-sm-10 col-md-10'>
      <div class='card rounded-0 border-2 mb-5'>
        <div class='card-body text-center p-5'>
          <img :src="image" class='w-100 mb-3' :style="{ width: getImageWidth }" />

          <template v-if="description">
            <div v-html="description" />
            <br>
          </template>

          <h1 class='mb-3'>
            {{ title }}
          </h1>

          <h5 class='text-muted'>
            {{ subtitle }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  imageWidth: Number
})

const getImageWidth = computed(() => {
  return props.imageWidth ? `${props.imageWidth}px !important` : '100%'
})
</script>
