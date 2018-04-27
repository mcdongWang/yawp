<template>
  <div id="app">
    <header-wrap></header-wrap>
    <router-view/>
    <footer-wrap></footer-wrap>
  </div>
</template>

<script>
import headerWrap from './components/header_wrap'
import footerWrap from './components/footer_wrap'
export default {
  name: 'App',
  components: {
    headerWrap,
    footerWrap
  }
}
</script>
<style>
#app{
  min-width: 1280px;
  background-color: #f8f8f8;
  padding-top: 80px;
}
</style>
