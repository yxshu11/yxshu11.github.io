<template>
  <nav class='navbar fixed-top navbar-expand-lg navbar-light navbar-white border-bottom'>
    <div class="container">
      <nuxt-link to='/' class='navbar-brand'>
        <img src='images/logo/logo.png' height='60' width='60' />
      </nuxt-link>
      <button class='navbar-toggler border-0 border-radius-0' type='button' data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
        aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav me-auto'>
          <!-- <li class='nav-item dropdown'>
            <a class='nav-link dropdown-toggle navbar-dropdown-toggle text-uppercase fw-bold' href='#' id='navbarDropdown'
              role='button' data-bs-toggle='dropdown' aria-expanded='false'>
              EN
            </a>
            <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
              <li><a href='#' class='dropdown-item'>English</a></li>
              <li><a href='#' class='dropdown-item disabled'>Chinese</a></li>
              <li><a href='#' class='dropdown-item disabled'>Malay</a></li>
            </ul>
          </li> -->
        </ul>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <nuxt-link to='/resume' class='nav-link text-uppercase fw-bold'>
              Resume
            </nuxt-link>
          </li>
          <li class='nav-item'>
            <nuxt-link to='/projects' class='nav-link text-uppercase fw-bold'>
              Projects
            </nuxt-link>
          </li>
          <li class='nav-item'>
            <nuxt-link to='/recommendations' class='nav-link text-uppercase fw-bold'>
              Recommendations
            </nuxt-link>
          </li>
          <li class='nav-item'>
            <nuxt-link to='/contact' class='nav-link text-uppercase fw-bold'>
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss' scoped>
.navbar-dropdown-toggle::after {
  vertical-align: 0.155em;
}

.navbar.fixed-top {
  top: 10px;
  left: 10px;
  right: 10px;
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
}
</style>
