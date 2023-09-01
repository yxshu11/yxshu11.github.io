<template>
  <div class='errors-not-found'>
    <LayoutBorder />

    <Head>
      <title>{{ error.statusCode }} | macthodology</title>
    </Head>

    <div class='d-flex justify-content-center align-items-center error-d-flex-container p-5'>
      <div class='text-center'>
        <img src='/images/logo/logo.png' width='200'  class='mb-5' />
        <h1>{{ error.statusCode }}</h1>
        <h3 class='mb-5'>
          {{ error.statusMessage }}
        </h3>
        <p v-if="error.statusCode === 404">
          We are sorry but the page you are looking for does not exist
        </p>
        <p v-else>
          We are sorry but there is something went wrong on our end
        </p>
        <p v-if="error.statusCode === 404" class='mb-5'>
          Usually this occurs because of a page that previously existed was removed or you've mistyped the address
        </p>
        <p v-else class='mb-5'>
          Try to refresh this page or feel free to contact us if the problem persists
        </p>
        <nuxt-link to="/" class='btn btn-dark rounded-0'>Go back to Homepage</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.error-d-flex-container {
  min-height: calc(100vh - 20px);
}
</style>
