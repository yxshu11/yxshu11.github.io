<template>
  <section class="homepage-header">
    <div class='container'>
      <div class='row justify-content-center text-center'>
        <div class='col-xs-10 col-sm-10 col-lg-8'>
          <div class='d-flex intro-d-flex-container justify-content-center align-items-center'>
            <div class='intro'>
              <img :src='imgSrc' :alt='imgAlt' width='300' class='mb-5' />
              <h1 class='mb-5'>
                {{ description }}
              </h1>
              <component 
                :is="getReadMoreBtnType()"
                :href='readMoreBtnHref'
                class='btn btn-dark rounded-0 btn-lg'
                :style="{ backgroundColor: readMoreBtnColor }"
              >
                {{ readMoreBtnLabel }}
              </component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
const props = defineProps({
  imgSrc: String,
  imgAlt: String,
  description: String,
  readMoreBtnType: String,
  readMoreBtnLabel: String,
  readMoreBtnHref: String,
  readMoreBtnColor: String
})

function getReadMoreBtnType() {
  return props.readMoreBtnType === 'link' ? 'a' : 'button'
}
</script>

<style lang="scss" scoped>
.intro-d-flex-container {
  min-height: calc(100vh - 20px);
}
</style>
