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
  background-color: #f8f8f8;
}
</style>
