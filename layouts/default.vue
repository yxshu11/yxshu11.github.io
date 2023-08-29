<template>
  <div class="main-app">
    <LayoutBorder />
    <LayoutHeader />
    <div class='app-container'>
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss">
html, body {
  width: 100%;
  font-family: 'Myriad Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
}

body {
  padding: 10px;
}

.app-container {
  margin-top: 86px;
  min-height: calc(100vh - 106px);
}

.pt-10 {
  padding-top: 5rem;
}

.pb-10 {
  padding-bottom: 5rem;
}

*[id]:before {
  display: block;
  content: " ";
  margin-top: -176px;
  height: 176px;
  visibility: hidden;
}
</style>
