<template>
  <section class='homepage-footer bg-black pt-10 pb-10'>
    <div class='container'>
      <div class='row justify-content-center text-center'>
        <div class='col-xs-10 col-sm-10 col-lg-8 text-white'>
          <h4 class='mb-4'>{{ title }}</h4>
          <div class='d-flex justify-content-center'>
            <a v-for='link in footerLinks' :key='link.title' :href='link.url'>
              <img height="30" class="m-3" :src="link.iconSrc" :alt="link.title">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  footerLinks: Array
})
</script>
