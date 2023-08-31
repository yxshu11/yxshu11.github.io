<template>
  <footer class='footer'>
    <div class='border-top mb-3'>
      <div class='container'>
        <div class='row align-item-center mt-3'>
          <div class='col-lg text-center mb-3'>
            <nuxt-link to='/privacy' class='btn text-uppercase'>
              Privacy Policies
            </nuxt-link>
          </div>
          <div class='col-lg text-center mb-3'>
            <nuxt-link to='/terms' class='btn text-uppercase'>
              Terms of Use
            </nuxt-link>
          </div>
          <div class='col-lg text-center mb-3'>
            <nuxt-link to='/sitemap.xml' class='btn text-uppercase'>
              Sitemap
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class='copyright text-center text-uppercase'>
        Copyright &copy; Mac Shu {{ new Date().getFullYear() }} all right reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="js"></script>

<style lang='scss' scoped>
.footer {
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.55);
  font-size: 12px;

  .btn {
    color: rgba(0, 0, 0, 0.55);
    font-size: 12px;

    :hover {
      color: #000000;
    }
  }
}
</style>
